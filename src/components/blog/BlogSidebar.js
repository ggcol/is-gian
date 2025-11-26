import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const BlogSidebar = ({ articles, selectedTag, onTagClick }) => {
  const navigate = useNavigate();
  
  // Get last 10 articles sorted by date
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 10);
  
  // Extract all unique tags
  const allTags = [...new Set(
    articles.flatMap(article => article.metadata.tags || [])
  )].sort();

  return (
    <aside className="blog-sidebar">
      <div className="blog-sidebar__section">
        <h3 className="blog-sidebar__title">Recent Posts</h3>
        <ul className="blog-sidebar__list">
          {recentArticles.map(article => (
            <li 
              key={article.slug} 
              className="blog-sidebar__item"
              onClick={() => navigate(`/blog/${article.slug}`)}
            >
              <div className="blog-sidebar__item-title">{article.metadata.title}</div>
              <div className="blog-sidebar__item-date">
                {new Date(article.metadata.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {allTags.length > 0 && (
        <div className="blog-sidebar__section">
          <h3 className="blog-sidebar__title">Tags</h3>
          <div className="blog-sidebar__tags">
            <button
              className={`blog-sidebar__tag ${!selectedTag ? 'active' : ''}`}
              onClick={() => onTagClick(null)}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`blog-sidebar__tag ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => onTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default BlogSidebar;
