# 👨‍🍳 Chef Claude

Chef Claude is an AI-powered recipe recommendation web application that suggests recipes based on the ingredients provided by the user.  
It leverages a Large Language Model via the Hugging Face Inference API and presents results in a clean, readable Markdown format.

---

## 📁 Project Structure

```text
chef_claude/
│
├── src/
│   ├── components/
│   │   ├── ClaudeRecipe.jsx
│   │   ├── IngredientsList.jsx
│   │   └── Header.jsx
│   │
│   ├── services/
│   │   └── recipeService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── .env
├── package.json
└── README.md
```


## 🧰 Technology Stack

### Frontend
- React
- JavaScript
- CSS
- React Markdown

### AI / API
- Hugging Face Inference API
- Mistral / LLM-based text generation model

---

## 🚀 Features

### Ingredient-Based Recipe Suggestions
Users can enter a list of ingredients  
Chef Claude generates a recipe using AI

### AI-Powered Responses
Uses a Hugging Face-hosted LLM  
Produces human-like recipe instructions

### Markdown Rendering
Recipes are displayed using React Markdown  
Ensures clean and readable formatting

### Responsive Design
Simple and user-friendly interface  
Works well on desktop and mobile screens

---
## 🧠 How It Works

1. The user enters a list of available ingredients in the input field.
2. The ingredients are collected and formatted into a prompt.
3. The prompt is sent to the Hugging Face Inference API.
4. The AI model processes the prompt and generates a recipe suggestion.
5. The response is returned in Markdown format.
6. The recipe is rendered on the UI using React Markdown.

---

## 🔌 API Usage

### Recipe Generation

Recipes are generated using the Hugging Face Inference API.

The application sends a prompt containing user-provided ingredients and receives a formatted recipe response from the AI model.


