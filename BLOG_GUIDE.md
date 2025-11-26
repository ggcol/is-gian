# Blog Management Guide

## Adding a New Article

### 1. Create the Article Folder

Create a new folder in `public/content/blog/`:
```
public/content/blog/your-article-slug/
```

### 2. Create index.md

Inside your article folder, create `index.md` with this frontmatter:

```markdown
---
title: "Your Article Title"
date: "2024-11-26"
tags: ["motorcycling", "philosophy", "tech"]
excerpt: "A short description that appears in the article card (optional)"
coverImage: "cover.jpg"
---

# Your Article Content

Write your article here in markdown...
```

**Required fields:**
- `title`: Article title
- `date`: Publication date (YYYY-MM-DD format)

**Optional fields:**
- `tags`: Array of tags for filtering
- `excerpt`: Short description for article cards
- `coverImage`: Filename of cover image (must be in same folder)

### 3. Add Images (Optional)

Place images in the same folder as `index.md`:
```
your-article-slug/
  index.md
  cover.jpg
  image1.png
  diagram.jpg
```

Reference them in markdown:
```markdown
![Alt text](image1.png)
```

### 4. Register the Article

Edit `src/config/articles.js`:

```javascript
const articles = [
  {
    id: 'your-article-slug',
    slug: 'your-article-slug',
  },
  // ... other articles
];
```

### 5. Generate Share Pages

Run the automated script to generate social media share pages:

```bash
npm run generate-share-pages
```

This creates static HTML files in `public/blog/` with proper Open Graph meta tags for each article. These pages:
- Enable proper title/image preview on LinkedIn, Twitter, Facebook
- Automatically redirect users to the actual article
- Are regenerated automatically before each deployment

**Note:** The script runs automatically when you deploy (`npm run deploy`), but you can run it manually to test social sharing locally.

### 6. Test and Deploy

Articles in `public/content/blog/` are ready to use immediately:
- **Development**: `npm start` - changes are live
- **Production**: `npm run deploy` - builds, generates share pages, and deploys

## Social Sharing

When users click the share buttons in your articles, they'll share the URL:
```
https://ggcol.github.io/is-gian/blog/your-article-slug.html
```

This URL:
- Shows proper preview cards on social media (title, description, cover image)
- Redirects to the actual article at `/#/blog/your-article-slug`

That's it! No manual work needed for social sharing.

## Markdown Features Supported

- Headers (h1-h6)
- **Bold** and *italic*
- Lists (ordered and unordered)
- Links: `[text](url)`
- Images: `![alt](image.jpg)`
- Code blocks with syntax highlighting
- Blockquotes
- Tables (GitHub-flavored markdown)

## URL Structure

- Blog home: `/#/blog`
- Individual article: `/#/blog/your-article-slug`

## Feature Flag

Toggle the blog on/off in `src/config/featureFlags.js`:
```javascript
blog: true  // or false to hide
```
