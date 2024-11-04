# CATKNOW: A Cat Encyclopedia Web App

A cat encyclopedia web application built as part of the Vortex Front-end Technical Interview Test. This project uses **The Cat API** to display a collection of cat images, and provides detailed information about each cat when selected.

**Live Demo:** [CATKNOW Live Demo](http://recruiters-love-seeing-live-demos.com/)

## Features

- **Infinite Scrolling List**
- **Responsive Design**
- **Category Filtering**
- **Detailed Cat Information**

## Getting Started

To get started with CATKNOW, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd catknow
   ```

2. **Set up your environment:**

   - Copy the `.env.template` to `.env` and generate your API key using **The Cat API** documentation.

   **Link to The Cat API:** [The Cat API Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW)

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   [http://localhost:3000](http://localhost:3000) to see the application in action.

## Running Tests

To run the tests for this project, use the following commands:

```bash
npm run test  # To run all tests
npm run test:watch  # To run tests in watch mode
```

## Tech Stack

- **Next.js** (app router)
- **TypeScript**
- **TanStack React Query**
- **Axios**
- **Tailwind CSS**
- **Jest** and **React Testing Library**

## API Endpoints

- **Fetch Cat Images:** [GET /v1/images/search](https://api.thecatapi.com/v1/images/search)
- **Fetch Categories:** [GET /v1/categories](https://api.thecatapi.com/v1/categories)
- **Get Specific Cat Details:** [GET /v1/images/{id}](https://api.thecatapi.com/v1/images/)

## Design

**[Figma](link-to-figma)**
