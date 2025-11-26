import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import frontMatter from 'front-matter';
import articles from '../../config/articles';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const article = articles.find(a => a.slug === slug);
        
        if (!article) {
          setError('Article not found');
          setLoading(false);
          return;
        }

        // Import the markdown file
        const response = await fetch(`${process.env.PUBLIC_URL}/content/blog/${slug}/index.md`);
        if (!response.ok) throw new Error('Failed to load article');
        
        const markdown = await response.text();
        const { attributes, body } = frontMatter(markdown);
        
        setMetadata(attributes);
        setContent(body);
        setLoading(false);
        // Trigger animation after data loads
        setTimeout(() => setIsVisible(true), 100);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-loading">Loading article...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')} className="btn-back">
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Use the static HTML page URL for sharing (better for social media crawlers)
  const shareUrl = `https://ggcol.github.io/is-gian/blog/${slug}.html`;
  const shareTitle = metadata?.title || 'Check out this article';

  const handleShare = (platform) => {
    let url = '';
    switch(platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>{metadata?.title || 'Blog Post'} | Gianluca Colombo</title>
        <meta name="description" content={metadata?.excerpt || metadata?.title || 'Read this article on my blog'} />
        <meta property="og:title" content={metadata?.title || 'Blog Post'} />
        <meta property="og:description" content={metadata?.excerpt || metadata?.title || 'Read this article on my blog'} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        {metadata?.coverImage && (
          <meta property="og:image" content={`https://ggcol.github.io/is-gian/content/blog/${slug}/${metadata.coverImage}`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata?.title || 'Blog Post'} />
        <meta name="twitter:description" content={metadata?.excerpt || metadata?.title || 'Read this article on my blog'} />
        {metadata?.coverImage && (
          <meta name="twitter:image" content={`https://ggcol.github.io/is-gian/content/blog/${slug}/${metadata.coverImage}`} />
        )}
      </Helmet>
      <div className={`blog-post-container ${isVisible ? 'blog--visible' : ''}`}>
        <div className="blog-post">
        <button onClick={() => navigate('/blog')} className="btn-back">
          ← Back to Blog
        </button>
        
        {metadata?.coverImage && (
          <div className="blog-post__cover">
            <img 
              src={`${process.env.PUBLIC_URL}/content/blog/${slug}/${metadata.coverImage}`} 
              alt={metadata.title}
            />
          </div>
        )}
        
        <article className="blog-post__article">
          <header className="blog-post__header">
            <h1 className="blog-post__title">{metadata?.title}</h1>
            <div className="blog-post__meta">
              {metadata?.date && (
                <span className="blog-post__date">
                  <i className="far fa-calendar"></i> {formatDate(metadata.date)}
                </span>
              )}
              {metadata?.tags && metadata.tags.length > 0 && (
                <div className="blog-post__tags">
                  {metadata.tags.map((tag, index) => (
                    <span key={index} className="blog-post__tag">
                      <i className="fas fa-tag"></i> {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div className="blog-post__content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({node, ...props}) => (
                  <img 
                    {...props} 
                    src={props.src.startsWith('http') 
                      ? props.src 
                      : `${process.env.PUBLIC_URL}/content/blog/${slug}/${props.src}`
                    }
                    alt={props.alt || ''}
                  />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="blog-post__share">
            <h3>Share this article</h3>
            <div className="blog-post__share-buttons">
              <button 
                onClick={() => handleShare('twitter')}
                className="share-btn share-btn--twitter"
                aria-label="Share on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="share-btn share-btn--linkedin"
                aria-label="Share on LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </button>
              <button 
                onClick={() => handleShare('facebook')}
                className="share-btn share-btn--facebook"
                aria-label="Share on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </button>
              <button 
                onClick={() => handleShare('copy')}
                className="share-btn share-btn--copy"
                aria-label="Copy link"
              >
                <i className="fas fa-link"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
      </div>
    </>
  );
};

export default BlogPost;
