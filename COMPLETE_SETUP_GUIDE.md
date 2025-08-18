# Complete Setup Guide for Oil Delivery App in GitHub Codespaces

## 🚀 Fresh Repository Setup Commands

Since this is a new clone, run these commands in order:

### Step 1: Install All Dependencies
```bash
npm install
```

### Step 2: Install Missing dotenv Package
```bash
npm install dotenv
```

### Step 3: Create Environment File
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

### Step 4: Start Your Oil Delivery App
```bash
npm run dev
```

## 📦 What Gets Installed

Your oil delivery app includes these key dependencies:
- React + TypeScript frontend
- Express.js backend
- Firebase (authentication, database, storage)
- Vite build tool
- shadcn/ui components
- TanStack Query for data management
- All other production dependencies

## ✅ Expected Result

After setup, your complete oil delivery management system will be running with:
- Firebase authentication and login
- Admin dashboard with management features
- Driver dashboard with workflows
- Complaint management with photo upload
- Task management system
- Mobile-responsive design

The app will be accessible at the URL shown in your terminal.

## 🔧 If Any Issues

Check these if problems occur:
```bash
# Verify dependencies installed
npm list

# Check environment variables
cat .env

# Rebuild if needed
npm run build
```

Your complete oil delivery app will be fully operational after these setup steps!