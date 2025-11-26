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

### 5. Test and Deploy

Articles in `public/content/blog/` are ready to use immediately:
- **Development**: `npm start` - changes are live
- **Production**: `npm run build` - articles are included in the build

That's it! No copying needed.

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
