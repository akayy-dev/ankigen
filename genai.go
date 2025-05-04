package main

import (
	"context"
	"fmt"
)

// Interface for different AI providers (e.g Gemini, Ollama)
type AIProvider interface {
	attachFile() error

}

type AIService struct {
	ctx context.Context
}

func (ai AIService) startup(ctx context.Context) {
	fmt.Println("Started AI Service")
	ai.ctx = ctx
}

func (ai AIService) AddFile(fname string) {
	fmt.Printf("Adding file of name %s\n", fname)
}
