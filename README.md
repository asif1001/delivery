# 🚛 OILDELIVERY - Oil Delivery Management System

A professional web application for managing oil delivery operations with separate dashboards for drivers and administrators.

## 🎯 What This App Does

This app helps oil delivery companies:
- Track oil deliveries and inventory
- Manage drivers and admin users
- Handle customer complaints with photos
- Monitor delivery tasks and schedules
- Generate reports and analytics

## 🖼️ App Features

- **Login System**: Secure email/password authentication
- **Admin Dashboard**: Manage branches, oil types, drivers, and view all deliveries
- **Driver Dashboard**: Start deliveries, upload photos, manage complaints
- **Task Management**: Track pending tasks and deadlines
- **Photo Management**: Upload and view delivery photos with timestamps
- **Complaint System**: Handle customer complaints with photo evidence

---

## 📋 Step-by-Step Setup Guide

### Step 1: What You Need Before Starting

Before you begin, make sure you have:
- A computer with internet connection
- A GitHub account (free at github.com)
- A Firebase account (free at firebase.google.com)
- Basic knowledge of using a computer

### Step 2: Copy This App to Your GitHub

1. **Go to GitHub.com and sign in**
2. **Click the green "Use this template" button** (or fork the repository)
3. **Give your new repository a name** like "my-oil-delivery-app"
4. **Make sure it's set to "Public"** so you can host it for free
5. **Click "Create repository from template"**

### Step 3: Set Up Firebase (Your Database)

Firebase will store all your app data (users, deliveries, photos, etc.)

#### 3.1 Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: "oil-delivery-app" (or any name you like)
4. **Disable Google Analytics** (not needed for this app)
5. Click "Create project"
6. Wait for it to finish, then click "Continue"

#### 3.2 Set Up Authentication
1. In your Firebase project, click "Authentication" on the left side
2. Click "Get started"
3. Click the "Sign-in method" tab
4. Click "Email/Password"
5. **Enable it** by toggling the switch
6. Click "Save"

#### 3.3 Set Up Firestore Database
1. Click "Firestore Database" on the left side
2. Click "Create database"
3. Choose "Start in test mode" 
4. Click "Next"
5. Choose your location (pick the closest one to you)
6. Click "Done"

#### 3.4 Set Up Storage
1. Click "Storage" on the left side
2. Click "Get started"
3. Choose "Start in test mode"
4. Click "Next"
5. Choose same location as your database
6. Click "Done"

#### 3.5 Get Your Firebase Configuration
1. Click the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>`
5. Enter app nickname: "oil-delivery-web"
6. **Check "Also set up Firebase Hosting"**
7. Click "Register app"
8. **COPY THE CONFIG CODE** - you'll need this later!

It looks like this:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### Step 4: Set Up GitHub Pages Hosting

#### 4.1 Enable GitHub Pages
1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### Step 5: Configure Your App

#### 5.1 Update Firebase Configuration
1. In your GitHub repository, click on `client/src/lib/firebase.ts`
2. Click the pencil icon to edit
3. Replace the firebaseConfig object with YOUR config from Step 3.5
4. Click "Commit changes"

#### 5.2 Update Environment Variables
1. Click on `.env.example` file in your repository
2. Click the pencil icon to edit
3. Replace with your Firebase values:
```
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id
```
4. Rename this file from `.env.example` to `.env`
5. Click "Commit changes"

### Step 6: Deploy Your App

#### 6.1 Set Up GitHub Actions (Automatic Deployment)
1. In your repository, create a new file: `.github/workflows/deploy.yml`
2. Copy this code:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Click "Commit changes"

#### 6.2 Wait for Deployment
1. Go to "Actions" tab in your repository
2. Watch the deployment process (takes 2-5 minutes)
3. When it shows green checkmark, your app is live!

### Step 7: Find Your Live App

Your app will be available at:
`https://yourusername.github.io/your-repository-name/`

For example: `https://johnsmith.github.io/my-oil-delivery-app/`

---

## 🔑 How to Use Your App

### Default Login Credentials

**For Testing (GitHub Codespaces/Development):**
- Admin: `asif.s@ekkanoo.com.bh` with any password
- Driver: Any other email with any password

**For Production (Your Live App):**
- You need to create user accounts through Firebase Authentication
- Or modify the authentication system for your needs

### Creating Your First Admin User

1. Go to Firebase Console → Authentication → Users
2. Click "Add user"
3. Enter email and password for your admin
4. In Firestore Database, create a collection called "users"
5. Add a document with the user's UID as the document ID
6. Add fields:
   - `email`: "admin@yourcompany.com"
   - `role`: "admin"
   - `displayName`: "Admin User"
   - `active`: true

---

## 📁 Project Structure

```
oil-delivery-app/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── pages/         # Login, admin, driver pages
│   │   ├── components/    # Reusable components
│   │   ├── lib/          # Firebase configuration
│   │   └── hooks/        # Custom React hooks
│   └── public/           # Static files (logos, icons)
├── server/               # Backend Express server
├── shared/               # Shared TypeScript types
├── package.json          # Dependencies list
└── README.md            # This file!
```

---

## 🔧 Dependencies Explained

### What Gets Installed Automatically

When you run `npm install`, these packages are installed:

**Frontend Framework:**
- `react` & `react-dom` - The main framework
- `vite` - Fast build tool
- `typescript` - Type checking

**UI Components:**
- `@radix-ui/*` - Accessible components
- `tailwindcss` - Styling
- `lucide-react` - Icons

**Firebase:**
- `firebase` - Database, authentication, storage
- `firebase-admin` - Server-side Firebase
- `firebase-tools` - Deployment tools

**Routing & Forms:**
- `wouter` - Page navigation
- `react-hook-form` - Form handling
- `zod` - Form validation

### Installing Dependencies

If you're running locally:
```bash
npm install
```

For GitHub Pages, dependencies are installed automatically during deployment.

---

## 🚀 Running Locally (Optional)

If you want to test on your computer:

1. **Clone your repository:**
```bash
git clone https://github.com/yourusername/your-app-name.git
cd your-app-name
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file with your Firebase config**

4. **Start development server:**
```bash
npm run dev
```

5. **Open http://localhost:5000**

---

## 📝 Customization Guide

### Changing App Name
1. Update `client/index.html` - change the `<title>` tag
2. Update `public/manifest.json` - change the "name" field
3. Update login page title in `client/src/pages/login-simple.tsx`

### Changing Colors
1. Edit `client/src/index.css`
2. Look for CSS custom properties (variables starting with --)
3. Change color values to your brand colors

### Adding Your Logo
1. Replace files in `public/` folder:
   - `logo.png` (main logo)
   - `favicon.ico` (browser tab icon)
   - `apple-touch-icon.png` (mobile icon)

---

## 🐛 Common Problems & Solutions

### Problem: "Firebase configuration not found"
**Solution:** Make sure you updated `client/src/lib/firebase.ts` with your Firebase config

### Problem: "Page not found" when deployed
**Solution:** Check that GitHub Pages is enabled and set to `gh-pages` branch

### Problem: "Authentication doesn't work"
**Solution:** 
1. Make sure Email/Password is enabled in Firebase Authentication
2. Add your domain to authorized domains in Firebase

### Problem: "Build fails"
**Solution:** Check the Actions tab for error details, usually missing environment variables

### Problem: "Can't upload images"
**Solution:** Make sure Firebase Storage is set up and rules allow uploads

---

## 📞 Need Help?

1. **Check GitHub Issues** in your repository
2. **Firebase Documentation:** https://firebase.google.com/docs
3. **GitHub Pages Guide:** https://docs.github.com/en/pages

---

## 🎉 You're Done!

Your oil delivery management app should now be:
- ✅ Live on the internet
- ✅ Connected to Firebase database
- ✅ Ready for users to login
- ✅ Automatically deployed when you make changes

**Your app URL:** `https://yourusername.github.io/your-repository-name/`

Remember to bookmark this URL and share it with your team!

---

*Last updated: August 2025*