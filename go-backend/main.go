package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	_ "modernc.org/sqlite"
)

type Post struct {
	ID       int     `json:"id"`
	Title    string  `json:"title"`
	Content  string  `json:"content"`
}

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("sqlite", "./blog.db")

	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// create table if none exists
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS posts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT NOT NULL,
			content TEXT NOT NULL,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)
	`)
	if err != nil {
		log.Fatal(err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/posts", getPosts)
	mux.HandleFunc("GET /api/posts/{id}", getPost)
	mux.HandleFunc("POST /api/posts", createPost)
	mux.HandleFunc("PUT /api/posts/{id}", updatePost)
	mux.HandleFunc("DELETE /api/posts/{id}", deletePost)

	handler := corsMiddleware(mux)

	log.Println("Server listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

// GET /api/posts
func getPosts(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, title, content FROM posts ORDER BY id DESC")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	defer rows.Close()

	posts := []Post{}
	for rows.Next() {
		var p Post
		rows.Scan(&p.ID, &p.Title, &p.Content)
		posts = append(posts, p)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}

// GET /api/posts/{id}
func getPost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    var p Post
    err = db.QueryRow("SELECT id, title, content FROM posts WHERE id = ?", id).
        Scan(&p.ID, &p.Title, &p.Content)
    if err == sql.ErrNoRows {
        http.Error(w, "not found", http.StatusNotFound)
        return
    } else if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(p)
}

// POST /api/posts
func createPost(w http.ResponseWriter, r *http.Request) {
    var p Post
    if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
        http.Error(w, "invalid JSON", http.StatusBadRequest)
        return
    }
    if p.Title == "" || p.Content == "" {
        http.Error(w, "title and content are required", http.StatusBadRequest)
        return
    }

    result, err := db.Exec("INSERT INTO posts (title, content) VALUES (?, ?)", p.Title, p.Content)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    id, _ := result.LastInsertId()
    p.ID = int(id)

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(p)
}

// PUT /api/posts/{id}
func updatePost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    var p Post
    if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
        http.Error(w, "invalid JSON", http.StatusBadRequest)
        return
    }

    _, err = db.Exec("UPDATE posts SET title = ?, content = ? WHERE id = ?", p.Title, p.Content, id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    p.ID = id
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(p)
}

// DELETE /api/posts/{id}
func deletePost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    _, err = db.Exec("DELETE FROM posts WHERE id = ?", id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusNoContent)
}

// CORS middleware to allow your Svelte frontend
func corsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        if r.Method == http.MethodOptions {
            w.WriteHeader(http.StatusNoContent)
            return
        }

        next.ServeHTTP(w, r)
    })
}