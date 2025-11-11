# Deployment Guide for GitHub Pages

Follow these steps to deploy your profile showcase to GitHub Pages:

## 1. Setup GitHub Repository

1. Create a new repository on GitHub named `profile-showcase` (or any name you prefer)
2. Make sure the repository is public (required for free GitHub Pages)

## 2. Update Configuration

1. In `package.json`, update the `homepage` field with your actual GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/profile-showcase"
   ```

2. Update personal information in the components:
   - `src/components/Hero.js` - Your name and title
   - `src/components/About.js` - Your background and achievements
   - `src/components/Skills.js` - Your skills and expertise
   - `src/components/Projects.js` - Your actual projects
   - `src/components/Contact.js` - Your contact information
   - `src/components/Footer.js` - Your details

## 3. Deploy to GitHub

1. Initialize git and add remote:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/profile-showcase.git
   git push -u origin main
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Go to Settings > Pages
3. Source should be set to "Deploy from a branch"
4. Branch should be "gh-pages"
5. Folder should be "/ (root)"

## 5. Access Your Site

Your site will be available at: `https://yourusername.github.io/profile-showcase`

Note: It may take a few minutes for the site to be live after deployment.

## Troubleshooting

- If the deployment fails, make sure you have the correct repository URL in package.json
- Ensure all your changes are committed before deploying
- Check that your GitHub repository is public
- Verify the gh-pages branch was created successfully

## Future Updates

To update your site:
1. Make your changes
2. Commit them to the main branch
3. Run `npm run deploy` again