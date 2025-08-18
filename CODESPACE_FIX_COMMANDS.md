# Fix Oil Delivery App in GitHub Codespaces

## 🔧 Quick Fix Commands

Run these commands in your GitHub Codespaces terminal (in order):

### Step 1: Create proper .env file
```bash
rm -f .env
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=1:136339484143:web:7b9c14cd8f5a5c8d5e7b8f
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
PGHOST=localhost
PGPORT=5432
PGUSER=dummy
PGPASSWORD=dummy
PGDATABASE=dummy
SESSION_SECRET=oil-delivery-session-secret
NODE_ENV=development
EOF
```

### Step 2: Verify .env file
```bash
cat .env
```

### Step 3: Install dependencies (if not done)
```bash
npm install
```

### Step 4: Start the app
```bash
npm run dev
```

## 🎯 Alternative: Frontend-Only Mode

If the backend still has issues, run frontend only:

```bash
# Build the frontend
npm run build

# Start frontend preview
npm run preview
```

## ✅ What This Fixes

- Sets all required environment variables
- Provides dummy PostgreSQL config for legacy backend
- Enables Firebase authentication
- Allows login functionality
- Activates admin and driver dashboards

Your oil delivery app should now work in GitHub Codespaces!