# GitHub Terminal Commands for Oil Delivery App

## To Clone FROM GitHub (Download to local computer):

```bash
# Clone your oil delivery app repository
git clone https://github.com/asif1001/delivery-one.git

# Navigate into the project folder
cd delivery-one

# Install dependencies
npm install

# Create environment file with your Firebase credentials
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_PROJECT_ID=oil-delivery-6bcc4
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_STORAGE_BUCKET=oil-delivery-6bcc4.firebasestorage.app
EOF

# Start the development server
npm run dev
```

## To Push TO GitHub (Upload from Replit):

```bash
# Stage all files
git add .

# Commit changes
git commit -m "Complete oil delivery app from Replit"

# Push to GitHub
git push origin main
```

## If Repository Doesn't Exist Yet:

```bash
# Initialize git in your project folder
git init

# Add your files
git add .

# Commit
git commit -m "Initial commit: Complete oil delivery app"

# Add GitHub repository as remote
git remote add origin https://github.com/asif1001/delivery-one.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Authentication:
- Username: `asif1001`
- Password: Use GitHub Personal Access Token

Your complete oil delivery app will be cloned/pushed with all features:
- React frontend with login and dashboards
- Firebase authentication and database
- Complaint management with photo upload
- Task management system
- Mobile-responsive design