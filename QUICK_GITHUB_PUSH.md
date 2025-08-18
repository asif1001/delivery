# 🚀 Quick Commands to Push to "onedelivery" Repository

## Simple Copy-Paste Commands

```bash
# 1. Initialize git and add all files
git init
git add .
git commit -m "Initial commit: ONE DELIVERY oil management system"

# 2. Connect to your GitHub repository (replace 'yourusername' with your actual GitHub username)
git remote add origin https://github.com/yourusername/onedelivery.git
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

## Before Pushing: Create Your .env File

Create a file called `.env` in your project root folder with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_actual_firebase_api_key_here
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here
VITE_FIREBASE_APP_ID=your_firebase_app_id_here
```

## After Pushing to GitHub

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Choose "Deploy from a branch" → "gh-pages"
   - Save

2. **Add GitHub Secrets:**
   - Go to Settings → Secrets and variables → Actions
   - Add your Firebase credentials as repository secrets

3. **Your app will be live at:**
   `https://yourusername.github.io/onedelivery/`

## App Updates Made

✅ Changed "OILDELIVERY" to "ONE DELIVERY" in:
- Login page title
- Admin dashboard header  
- Driver dashboard header
- Page title
- Version info

Your app is now ready to be pushed to the "onedelivery" repository!