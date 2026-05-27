package main

import (
	"log"
	"net/http"

	"portfolio/go-backend/database"
	"portfolio/go-backend/handlers"
)

func main() {
    if err := database.InitDB("./blog.db"); err != nil {
        log.Fatal(err)
    }
    defer database.DB.Close()

    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/posts", handlers.GetPosts)
    mux.HandleFunc("GET /api/posts/{id}", handlers.GetPost)
    mux.HandleFunc("POST /api/posts", handlers.CreatePost)
    mux.HandleFunc("PUT /api/posts/{id}", handlers.UpdatePost)
    mux.HandleFunc("DELETE /api/posts/{id}", handlers.DeletePost)

    handler := handlers.CORSMiddleware(mux)

    log.Println("Server listening on :8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}