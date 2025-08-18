# Clone Oil Delivery App from GitHub

## 📥 Clone Commands for Terminal

### Method 1: Clone to Local Computer
```bash
# Clone your oil delivery app
git clone https://github.com/asif1001/delivery.git

# Navigate into project folder
cd delivery

# Install dependencies
npm install

# Create environment file
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyChkqfXWJqQr3wbN8jL3qAkmKQEz5Mdr7o
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=1:136339484143:web:7b9c14cd8f5a5c8d5e7b8f
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
EOF

# Start the app
npm run dev
```

### Method 2: Clone to GitHub Codespaces
1. Go to: https://github.com/asif1001/delivery
2. Click green "Code" button
3. Click "Codespaces" tab
4. Click "Create codespace on main"
5. Wait for setup (2-3 minutes)
6. Run setup commands:
```bash
npm install
npm run dev
```

### Method 3: Download ZIP
1. Go to: https://github.com/asif1001/delivery
2. Click green "Code" button
3. Click "Download ZIP"
4. Extract and open in your code editor

## 🔍 Check Repository Contents
Visit: https://github.com/asif1001/delivery

You should see:
- `client/` - React frontend
- `server/` - Express backend
- `public/` - Static assets
- `package.json` - Dependencies
- `.github/workflows/` - Deployment config
- All your oil delivery app files

## 🚀 Project Structure After Clone
```
delivery/
├── client/          # React frontend
├── server/          # Express backend
├── public/          # Static assets
├── shared/          # Shared types
├── package.json     # Dependencies
└── vite.config.ts   # Build config
```

## ✅ What You Get
Complete oil delivery management system:
- Firebase authentication
- Admin and driver dashboards
- Complaint management with photos
- Task management
- Mobile-responsive design

Your app is ready to clone and run locally or in Codespaces!