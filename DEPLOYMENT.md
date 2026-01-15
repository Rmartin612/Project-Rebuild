# GitHub Pages Deployment Guide

This project is configured to deploy the frontend to GitHub Pages automatically.

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Project-Rebuild` (or any name you prefer)
3. Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Push Your Code to GitHub

Run these commands in your terminal from the project directory:

```bash
git add .
git commit -m "Initial commit: Project setup for GitHub Pages"
git remote add origin https://github.com/YOUR-USERNAME/Project-Rebuild.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The deployment will start automatically

### 4. Access Your Website

After the deployment completes (usually 2-5 minutes), your site will be available at:

```
https://YOUR-USERNAME.github.io/Project-Rebuild/
```

## Important Notes

- **Backend Features Won't Work**: GitHub Pages only hosts static files (HTML, CSS, JavaScript). Any backend API calls or database operations from the Express server won't function.
- **Automatic Deployments**: Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.
- **Check Deployment Status**: Go to the "Actions" tab in your repository to see the deployment progress.

## Updating the Base URL

If you change your repository name, update the base path in [vite.config.ts](vite.config.ts#L7):

```typescript
base: process.env.GITHUB_PAGES === "true" ? "/YOUR-NEW-REPO-NAME/" : "/",
```

## Local Development

To test locally, run:

```bash
npm install
npm run dev
```

To build and preview the production build:

```bash
npm run build
# Then serve the dist/public folder
```
