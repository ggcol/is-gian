#!/usr/bin/env node

/**
 * Generate static HTML share pages for blog articles
 * These pages have proper Open Graph meta tags for social media sharing
 * and redirect to the actual SPA article page
 */

const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');

const SITE_URL = 'https://ggcol.github.io/is-gian';
const ARTICLES_CONFIG = path.join(__dirname, '../src/config/articles.js');
const CONTENT_DIR = path.join(__dirname, '../public/content/blog');
const OUTPUT_DIR = path.join(__dirname, '../public/blog');

// Read articles configuration
const articlesModule = require(ARTICLES_CONFIG);
const articles = articlesModule.default || articlesModule;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate HTML template for a share page
function generateSharePageHTML(article, metadata) {
  const { title, excerpt, coverImage, tags } = metadata;
  const articleUrl = `${SITE_URL}/blog/${article.slug}.html`;
  const redirectUrl = `${SITE_URL}/#/blog/${article.slug}`;
  const imageUrl = coverImage ? `${SITE_URL}/content/blog/${article.slug}/${coverImage}` : '';
  
  // Escape HTML entities
  const escapeHtml = (str) => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  
  const safeTitle = escapeHtml(title);
  const safeExcerpt = escapeHtml(excerpt || title);
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Primary Meta Tags -->
    <title>${safeTitle} | Gianluca Colombo</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeExcerpt}" />
    ${tags ? `<meta name="keywords" content="${tags.join(', ')}" />` : ''}
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${articleUrl}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeExcerpt}" />
    ${imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : ''}
    <meta property="og:site_name" content="Gianluca Colombo" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${articleUrl}" />
    <meta property="twitter:title" content="${safeTitle}" />
    <meta property="twitter:description" content="${safeExcerpt}" />
    ${imageUrl ? `<meta property="twitter:image" content="${imageUrl}" />` : ''}
    
    <!-- Redirect -->
    <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
    <link rel="canonical" href="${redirectUrl}" />
    <script type="text/javascript">
        window.location.href = "${redirectUrl}";
    </script>
    
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            max-width: 600px;
            margin: 100px auto;
            padding: 20px;
            text-align: center;
        }
        a {
            color: #0066cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <!-- Fallback for browsers with JavaScript disabled -->
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, please click the link below:</p>
    <p><a href="${redirectUrl}">${safeTitle}</a></p>
</body>
</html>`;
}

// Process each article
console.log('🚀 Generating share pages for blog articles...\n');

articles.forEach(article => {
  const articlePath = path.join(CONTENT_DIR, article.slug, 'index.md');
  
  if (!fs.existsSync(articlePath)) {
    console.warn(`⚠️  Article not found: ${article.slug}`);
    return;
  }
  
  // Read and parse the markdown file
  const markdown = fs.readFileSync(articlePath, 'utf8');
  const { attributes } = frontMatter(markdown);
  
  // Generate HTML page
  const html = generateSharePageHTML(article, attributes);
  const outputPath = path.join(OUTPUT_DIR, `${article.slug}.html`);
  
  fs.writeFileSync(outputPath, html);
  console.log(`✅ Generated: ${article.slug}.html`);
});

console.log('\n✨ All share pages generated successfully!');
