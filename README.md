# Patient Registration Form

A professional patient registration form with comprehensive input validation built with HTML, CSS, and JavaScript.

## Features

✨ **Form Fields:**
- Full Name (text validation)
- Age (numeric validation, 1-150 range)
- Contact Number (10-digit phone validation)
- Email Address (email format validation)

✨ **Validation Features:**
- Real-time input validation
- Clear error messages
- Visual feedback (border colors change on valid/invalid)
- Success message on registration
- Mobile responsive design
- Smooth animations

## Files

- `index.html` - Main form structure
- `styles.css` - Styling and responsive design
- `script.js` - Input validation logic

## How to Use

1. **Open the form:**
   - Simply open `index.html` in your web browser
   - No server or dependencies required

2. **Fill the form:**
   - Enter your full name (letters and spaces only)
   - Enter your age (1-150)
   - Enter your 10-digit contact number
   - Enter a valid email address

3. **Validation Rules:**
   - **Name:** Minimum 3 characters, letters and spaces only
   - **Age:** Must be between 1 and 150
   - **Contact:** Exactly 10 digits
   - **Email:** Valid email format (example@domain.com)

## Validation Feedback

- **Red border:** Field has errors
- **Green border:** Field is valid
- **Error messages:** Display below each field
- **Success message:** Shows after successful registration

## How to Upload to GitHub

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Sign in to your account (or create one if needed)
3. Click the **+** icon → **New repository**
4. Name it: `patient-registration-form`
5. Add description: "Patient Registration Form with Input Validation"
6. Click **Create repository**

### Step 2: Initialize Git & Upload Files

**If you're on Windows using PowerShell/CMD:**

```bash
# Navigate to your project directory
cd path\to\patient-registration-form

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Patient registration form"

# Add remote repository (copy the URL from GitHub)
git remote add origin https://github.com/YOUR_USERNAME/patient-registration-form.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Using GitHub Desktop (Easier for Beginners):**
1. Open GitHub Desktop
2. Click **File** → **Clone repository**
3. Click **Create a Local Repository**
4. Choose your project folder
5. Click **Create Repository**
6. Drag your files into the folder
7. In GitHub Desktop, enter commit message: "Initial commit"
8. Click **Publish Repository** → Sign in and Publish

### Step 3: Share Your Form

Once uploaded, you can:
- Share the GitHub link: `https://github.com/YOUR_USERNAME/patient-registration-form`
- View the form online using GitHub Pages:
  1. Go to repository **Settings**
  2. Scroll to **Pages** section
  3. Select `main` branch as source
  4. Your form will be live at: `https://YOUR_USERNAME.github.io/patient-registration-form/`

## Browser Compatibility

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge, Opera

## License

Open source - feel free to use and modify for your projects!

## Notes

- Form data is displayed in browser console (`F12` → Console tab)
- In a real application, data should be sent to a backend server
- The form doesn't actually submit to a database (only for demonstration)
