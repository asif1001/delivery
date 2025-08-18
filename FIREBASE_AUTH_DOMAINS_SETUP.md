# Firebase Authentication Domain Setup for GitHub Codespaces

## Issue: Firebase Login Failing in GitHub Codespaces

Your Firebase configuration is correct, but GitHub Codespaces uses different domains that need to be authorized in Firebase.

## Quick Fix - Use Demo Login for GitHub Codespaces

### Option 1: Switch to Simple Login
In your GitHub Codespaces, edit the App.tsx to use the simple login page temporarily:

1. Navigate to `client/src/App.tsx`
2. Change the login route from `/login` to `/login-simple`

### Option 2: Update Firebase Auth Domains  

In your Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `oil-delivery-6bcc4`
3. Go to **Authentication > Settings > Authorized domains**
4. Add these GitHub Codespaces domains:
   ```
   *.githubpreview.dev
   *.github.dev
   *.gitpod.io
   *.app.github.dev
   localhost
   127.0.0.1
   ```

### Option 3: Create GitHub Codespaces Compatible Login

Create a hybrid login that works in both environments.

## Demo Credentials (Simple Login)
- **Admin**: `asif.s@ekkanoo.com.bh` (any password)
- **Driver**: Any other email (any password)

## Recommended Solution
For GitHub Codespaces development, use the simple login mode which bypasses Firebase Auth and uses localStorage for session management.

Your oil delivery app will work perfectly with all features - admin dashboard, driver workflows, complaint management, and photo uploads.