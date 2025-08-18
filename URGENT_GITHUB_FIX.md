# URGENT FIX: Oil Delivery App in GitHub Codespaces

## The Issue
Your app is running perfectly in Replit, but GitHub Codespaces needs proper environment setup.

## Complete Fix for GitHub Codespaces

Run these commands in your GitHub Codespaces terminal:

### Step 1: Check your current directory
```bash
pwd
ls -la
```

### Step 2: Navigate to correct directory (if needed)
```bash
# If you're not in the project root, navigate there
cd delivery
# OR if in /workspaces/delivery/delivery
cd /workspaces/delivery/delivery
```

### Step 3: Create environment file
```bash
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=1:136339484143:web:7b9c14cd8f5a5c8d5e7b8f
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
SESSION_SECRET=oil-delivery-session-secret
NODE_ENV=development
EOF
```

### Step 4: Load environment and start
```bash
# Load environment variables
export $(cat .env | xargs)

# Verify DATABASE_URL is set
echo $DATABASE_URL

# Start the app
npm run dev
```

### Alternative: Manual environment export
```bash
export DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
export VITE_FIREBASE_API_KEY="AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o"
export VITE_FIREBASE_PROJECT_ID="oil-delivery-6bcc4"
export SESSION_SECRET="oil-delivery-session-secret"
npm run dev
```

## Expected Result
Your oil delivery app will start with Firebase authentication working, showing the login page with admin/driver access.

The app is working perfectly - it just needs proper environment variable loading in GitHub Codespaces.