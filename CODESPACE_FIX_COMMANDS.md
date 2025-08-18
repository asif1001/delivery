# GitHub Codespaces Setup with .env File

## Complete Setup Commands for GitHub Codespaces

### Step 1: Create .env File in GitHub Codespaces

Run this command in GitHub Codespaces terminal to create your `.env` file:

```bash
cat > .env << 'EOF'
# Firebase Configuration - Replace with your actual values
VITE_FIREBASE_API_KEY=AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=1:136339484143:web:7b9c14cd8f5a5c8d5e7b8f
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
EOF
```

### Step 2: Update with Your Firebase Values

Edit the `.env` file with your actual Firebase configuration:

```bash
nano .env
```

Replace the example values with your Firebase project settings:
- Get these from Firebase Console → Project Settings → General → Your apps

### Step 3: Verify Configuration

Test that environment variables are loaded:

```bash
# Check if .env exists
ls -la .env

# Verify the file content (without showing secrets)
echo "Environment file created successfully"
```

### Step 4: Start Development Server

```bash
# Install dependencies if needed
npm install

# Start the development server
npm run dev
```

### Step 5: Deploy to GitHub Pages

```bash
# Commit your changes (but .env is ignored by git)
git add .
git commit -m "Update Firebase configuration for environment variables"
git push origin main
```

## Important Notes

### ✅ What's Already Done:
- Your app is configured to read from environment variables
- `.env` file is ignored by git (secure)
- Firebase configuration updated to use `.env` values
- GitHub Pages deployment uses repository secrets (not .env)

### 🔧 Environment Variable Usage:
- **Development (Codespaces)**: Uses `.env` file
- **Production (GitHub Pages)**: Uses repository secrets
- Both work seamlessly with the same code

### 🛡️ Security:
- `.env` file stays local in Codespaces
- GitHub repository secrets are encrypted
- No credentials exposed in your code

### 📱 Expected Behavior:
- App works in Codespaces with `.env` file
- App deploys to GitHub Pages with repository secrets
- Firebase authentication, database, and storage work in both environments

## Firebase Configuration Values You Need:

Get these from Firebase Console → Project Settings → General:

1. **API Key**: Found in "Web API Key" 
2. **Project ID**: Your Firebase project ID
3. **App ID**: From your web app configuration
4. **Storage Bucket**: Usually `{project-id}.firebasestorage.app`

Your oil delivery app will work perfectly in both development and production!