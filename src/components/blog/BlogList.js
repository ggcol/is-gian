import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import frontMatter from 'front-matter';
import articles from '../../config/articles';
import BlogSidebar from './BlogSidebar';
import './Blog.css';

const BlogList = () => {
  const navigate = useNavigate();
  const [articlesData, setArticlesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const loadedArticles = await Promise.all(
          articles.map(async (article) => {
            try {
              const response = await fetch(
                `${process.env.PUBLIC_URL}/content/blog/${article.slug}/index.md`
              );
              if (!response.ok) throw new Error('Failed to load article');
              
              const markdown = await response.text();
              const { attributes } = frontMatter(markdown);
              
              return {
                ...article,
                metadata: attributes
              };
            } catch (err) {
              console.error(`Failed to load article ${article.slug}:`, err);
              return null;
            }
          })
        );
        
        setArticlesData(loadedArticles.filter(a => a !== null));
        setLoading(false);
        // Trigger animation after data loads
        setTimeout(() => setIsVisible(true), 100);
      } catch (err) {
        console.error('Failed to load articles:', err);
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredArticles = selectedTag
    ? articlesData.filter(article => 
        article.metadata.tags && article.metadata.tags.includes(selectedTag)
      )
    : articlesData;

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
  );

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className={`blog-container ${isVisible ? 'blog--visible' : ''}`}>
      <BlogSidebar 
        articles={articlesData}
        selectedTag={selectedTag}
        onTagClick={setSelectedTag}
      />
      
      <main className="blog-main">
        <div className="blog-header">
          <h1 className="blog-title">
            <span className="blog-title__path">~/blog/posts</span>
            <span className="blog-title__prompt"> $ </span>
            <span className="blog-title__command">git stash list</span>
          </h1>
          {selectedTag && (
            <div className="blog-filter-info">
              Showing articles tagged with <strong>{selectedTag}</strong>
              <button 
                onClick={() => setSelectedTag(null)}
                className="blog-clear-filter"
              >
                ✕ Clear filter
              </button>
            </div>
          )}
        </div>
        
        {sortedArticles.length === 0 ? (
          <div className="blog-empty">
            <p>No articles found{selectedTag ? ` with tag "${selectedTag}"` : ''}.</p>
          </div>
        ) : (
          <div className="blog-articles">
            {sortedArticles.map(article => (
              <article 
                key={article.slug} 
                className="blog-card"
                onClick={() => navigate(`/blog/${article.slug}`)}
              >
                <div className="blog-card__image">
                  {article.metadata.coverImage && (
                    <img 
                      src={`${process.env.PUBLIC_URL}/content/blog/${article.slug}/${article.metadata.coverImage}`}
                      alt={article.metadata.title}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>
                
                <div className="blog-card__content">
                  <h2 className="blog-card__title">{article.metadata.title}</h2>
                  
                  <div className="blog-card__meta">
                    <span className="blog-card__date">
                      <i className="far fa-calendar"></i> {formatDate(article.metadata.date)}
                    </span>
                  </div>
                  
                  {article.metadata.excerpt && (
                    <p className="blog-card__excerpt">{article.metadata.excerpt}</p>
                  )}
                  
                  {article.metadata.tags && article.metadata.tags.length > 0 && (
                    <div className="blog-card__tags">
                      {article.metadata.tags.map((tag, index) => (
                        <span key={index} className="blog-card__tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className="blog-card__read-more">
                    Read more <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogList;
