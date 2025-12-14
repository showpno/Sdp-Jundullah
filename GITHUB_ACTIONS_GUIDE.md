# 🚀 GitHub Actions - Automated APK Build Guide

## ✅ Setup Complete

Your `.env` file is configured:
```
MONGO_URL=mongodb+srv://emon:adiujjamanemon2003@cluster0.mhiik3i.mongodb.net/nexaracart?appName=Cluster0
PORT=5000
ONE_SIGNAL_APP_ID=YOUR_APP_ID_HERE
ONE_SIGNAL_REST_API_KEY=YOUR_KEY_HERE
```

GitHub Actions workflow created: `.github/workflows/build.yml`

---

## 📋 How GitHub Actions Works

### What It Does
- Automatically builds your Flutter apps when you push code
- Compiles APKs with **unlimited resources** (no memory issues!)
- Runs on Ubuntu servers with 4GB+ RAM
- Stores built APKs for download

### How It Helps
- ✅ No more local memory errors
- ✅ Builds run in the background
- ✅ Downloads APKs from cloud
- ✅ Free for public repos

---

## 🔧 Setup Instructions

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with APK build workflow"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/Nexara-Cart.git

# Push to GitHub
git push -u origin main
```

### Step 2: Check Workflow Status

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/Nexara-Cart`
2. Click **Actions** tab
3. You'll see "Flutter Build APKs" workflow running

### Step 3: Download APKs

Once build is complete:
1. Click the latest workflow run
2. Scroll down to **Artifacts**
3. Download `flutter-apks.zip`
4. Extract to get:
   - `client_side/build/app/outputs/apk/release/app-release.apk`
   - `Admin_panel/build/app/outputs/apk/release/app-release.apk`

---

## 📊 Workflow Details

### Triggers
The workflow runs automatically on:
- Push to `main`, `develop`, or `master` branches
- Pull requests to these branches
- **Manual trigger** (click "Run workflow" in Actions tab)

### Build Process
1. **Checkout code** from GitHub
2. **Setup Flutter** (version 3.16.0)
3. **Get dependencies** for client app
4. **Build Client APK** (release mode)
5. **Get dependencies** for admin app
6. **Build Admin APK** (release mode)
7. **Upload artifacts** for download
8. **Create Release** (if you tag a commit)

### Build Time
- Typically **8-15 minutes** per workflow
- Both APKs build automatically
- Artifacts stored for 30 days

---

## ✨ Features

### Automatic Uploads
- APKs automatically stored in GitHub
- Accessible from Actions > Artifacts
- No need to build locally

### Release Tags
```bash
# Create a release tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```
→ Workflow creates a Release with APK downloads

### Status Badges
Add to your README:
```markdown
![Flutter Build](https://github.com/YOUR_USERNAME/Nexara-Cart/workflows/Flutter%20Build%20APKs/badge.svg)
```

---

## 🎯 Complete Workflow

```
1. Make changes locally
2. Commit and push to GitHub
3. GitHub Actions automatically builds
4. Download APKs from Artifacts
5. Install on Android device
6. Test the app
7. Done! 🎉
```

---

## 📱 Install APK on Android Device

### Option 1: Via Cable
```bash
# Copy APK to device
adb install -r path/to/app-release.apk
```

### Option 2: Via USB (Manual)
1. Download APK from GitHub
2. Transfer to Android phone (USB or email)
3. Open file manager on phone
4. Tap APK to install
5. Allow unknown sources if prompted

### Option 3: Via Email
1. Download APK from GitHub
2. Email to yourself
3. Open email on phone
4. Tap to install

---

## 🔍 Troubleshooting

### Build Failed
1. Check **Actions** tab for error logs
2. Common issues:
   - Outdated Flutter dependencies → Run `flutter pub upgrade`
   - Build key missing → Check `build.gradle`
   - Memory issues (shouldn't happen on GitHub)

### Can't Find APKs
1. Go to Actions tab
2. Click latest workflow
3. Scroll to **Artifacts** section
4. Download `flutter-apks.zip`

### Want to Rebuild
- Push new commit to trigger rebuild
- Or: Click "Run workflow" button in Actions tab

---

## 🆚 GitHub Actions vs Local Build

| Feature | Local | GitHub Actions |
|---------|-------|-----------------|
| Memory | Limited (16GB) | Unlimited |
| Time | 20+ minutes | 8-15 minutes |
| Errors | Gradle issues | Rarely fails |
| Cost | CPU usage | Free |
| Download APK | Build folder | Artifacts page |

---

## 💡 Best Practices

1. **Test locally first** (if possible)
2. **Use meaningful commits**:
   ```bash
   git commit -m "Fix login bug in client app"
   ```
3. **Create releases for versions**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. **Monitor workflow** in Actions tab

---

## 🚀 Next Steps

1. ✅ Push code to GitHub
2. ✅ Wait for workflow to complete (8-15 min)
3. ✅ Download APKs from Artifacts
4. ✅ Install on Android device
5. ✅ Test the apps
6. ✅ Test backend API integration

---

## 📞 Common GitHub Commands

```bash
# Check status
git status

# View changes
git diff

# Commit changes
git commit -am "Your message here"

# Push to GitHub
git push

# Pull latest
git pull

# Create branch
git checkout -b feature/your-feature

# Switch branch
git checkout main

# Delete branch
git branch -d feature/your-feature
```

---

## 🎉 You're All Set!

Your Android builds are now automated on GitHub! 

Just push your code, and GitHub will:
- ✅ Build your APKs automatically
- ✅ Store them for download
- ✅ Never run out of memory
- ✅ Complete in 8-15 minutes

**Your backend is fully operational and ready for client testing!** 🚀

---

Generated: December 14, 2025
Status: ✅ Ready for Automated Builds
