# ✅ Oil Delivery App Setup Checklist

Use this checklist to make sure you don't miss any steps when setting up your app.

## Before You Start
- [ ] Create GitHub account at github.com
- [ ] Create Firebase account at firebase.google.com
- [ ] Have your computer ready with internet connection

## GitHub Setup
- [ ] Copy this app to your GitHub (fork or use as template)
- [ ] Name your repository (e.g., "my-oil-delivery-app")
- [ ] Make sure repository is **Public** (for free hosting)
- [ ] Enable GitHub Pages in Settings → Pages
- [ ] Set source to "Deploy from branch" → "gh-pages"

## Firebase Setup
- [ ] Create new Firebase project
- [ ] Set up Authentication → Enable Email/Password
- [ ] Create Firestore Database → Start in test mode
- [ ] Set up Storage → Start in test mode
- [ ] Add web app to project
- [ ] Copy the Firebase configuration code
- [ ] Add authorized domains (your GitHub Pages URL)

## App Configuration
- [ ] Update `client/src/lib/firebase.ts` with your Firebase config
- [ ] Create `.env` file with your Firebase keys
- [ ] Set GitHub Secrets for environment variables:
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_APP_ID`

## Deployment
- [ ] Push code to main branch
- [ ] Check GitHub Actions tab for build process
- [ ] Wait for green checkmark (deployment complete)
- [ ] Test your live app at: `https://yourusername.github.io/repository-name/`

## Testing
- [ ] Try logging in with test credentials
- [ ] Check admin dashboard works
- [ ] Check driver dashboard works
- [ ] Test photo upload functionality
- [ ] Verify all pages load correctly

## Production Setup
- [ ] Create real admin users in Firebase Auth
- [ ] Update Firestore security rules
- [ ] Test with real users
- [ ] Add custom domain (optional)
- [ ] Set up monitoring/analytics (optional)

## If Something Goes Wrong
1. Check GitHub Actions logs for build errors
2. Verify all Firebase services are enabled
3. Make sure environment variables are set correctly
4. Check browser console for JavaScript errors
5. Verify Firebase project is active and not suspended

---

**Your app should now be live and working!** 🎉

**Live URL:** `https://yourusername.github.io/repository-name/`

Save this checklist and check off each item as you complete it.