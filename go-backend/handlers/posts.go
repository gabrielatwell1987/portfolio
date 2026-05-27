package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"portfolio/go-backend/database"
	"portfolio/go-backend/models"
)

// GET /api/posts
func GetPosts(w http.ResponseWriter, r *http.Request) {
    rows, err := database.DB.Query("SELECT id, title, content FROM posts ORDER BY id DESC")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    posts := []models.Post{}
    for rows.Next() {
        var p models.Post
        if err := rows.Scan(&p.ID, &p.Title, &p.Content); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        posts = append(posts, p)
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(posts)
}

// GET /api/posts/{id}
func GetPost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    var p models.Post
    err = database.DB.QueryRow("SELECT id, title, content FROM posts WHERE id = ?", id).
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
func CreatePost(w http.ResponseWriter, r *http.Request) {
    var p models.Post
    if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
        http.Error(w, "invalid JSON", http.StatusBadRequest)
        return
    }
    if p.Title == "" || p.Content == "" {
        http.Error(w, "title and content are required", http.StatusBadRequest)
        return
    }

    result, err := database.DB.Exec("INSERT INTO posts (title, content) VALUES (?, ?)", p.Title, p.Content)
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
func UpdatePost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    var p models.Post
    if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
        http.Error(w, "invalid JSON", http.StatusBadRequest)
        return
    }

    _, err = database.DB.Exec("UPDATE posts SET title = ?, content = ? WHERE id = ?", p.Title, p.Content, id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    p.ID = id
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(p)
}

// DELETE /api/posts/{id}
func DeletePost(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }

    _, err = database.DB.Exec("DELETE FROM posts WHERE id = ?", id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusNoContent)
}