# Complete Oil Delivery App Setup in GitHub Codespaces

## 🚀 One-Time Setup Commands

Copy and paste these commands in GitHub Codespaces terminal:

```bash
# Install missing dependency
npm install dotenv

# Verify environment file
cat .env

# If .env is empty or missing, create it:
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=1:136339484143:web:7b9c14cd8f5a5c8d5e7b8f
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
SESSION_SECRET=oil-delivery-session-secret
NODE_ENV=development
EOF

# Start your oil delivery app
npm run dev
```

## ✅ Expected Result
Your complete oil delivery management system will start with:
- Firebase authentication working
- Login page accessible
- Admin dashboard with full management
- Driver dashboard with workflows
- Complaint management with photo upload
- Task management system

The app will be available at the URL shown in the terminal.