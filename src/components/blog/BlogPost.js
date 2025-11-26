import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  return (
    <div className="blog-post-container">
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
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
