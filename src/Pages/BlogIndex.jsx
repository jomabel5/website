import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import heroImage from '../assests/images/outreach1.jpeg';
import { blogPosts } from '../data/blogPosts';

const BlogIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="bl-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .bl-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .bl-hero {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }
        .bl-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .bl-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(17,24,39,0.80) 0%,
            rgba(29,143,212,0.55) 100%
          );
        }
        .bl-hero-content {
          position: relative;
          z-index: 2;
          padding: 64px 24px;
          max-width: 720px;
        }
        .bl-hero-title {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 14px;
        }
        .bl-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Post grid ── */
        .bl-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px clamp(20px, 5vw, 56px) 96px;
        }
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .bl-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: var(--transition);
        }
        .bl-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }
        .bl-card-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .bl-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bl-card-body {
          padding: 24px 24px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .bl-card-title {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0 0 8px;
        }
        .bl-card-date {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-light);
          margin: 0 0 14px;
        }
        .bl-card-excerpt {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0 0 18px;
          flex: 1;
        }
        .bl-card-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          width: fit-content;
        }
        .bl-card-link:hover {
          color: var(--color-primary-dark);
        }

        @media (max-width: 900px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bl-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="bl-hero">
        <img src={heroImage} alt="Blog and Insights" className="bl-hero-img" />
        <div className="bl-hero-overlay" />
        <div className="bl-hero-content">
          <h1 className="bl-hero-title">Blog and Insights</h1>
          <p className="bl-hero-sub">Explore stories, updates, and community healthcare perspectives.</p>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div className="bl-content">
        <div className="bl-grid">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bl-card" onClick={() => navigate(`/blog/${post.slug}`)}>
              <div className="bl-card-img-wrap">
                <img src={post.image} alt={post.title} className="bl-card-img" />
              </div>
              <div className="bl-card-body">
                <h3 className="bl-card-title">{post.title}</h3>
                <p className="bl-card-date">{post.date}</p>
                <p className="bl-card-excerpt">{post.excerpt}</p>
                <button className="bl-card-link" onClick={(e) => { e.stopPropagation(); navigate(`/blog/${post.slug}`); }}>
                  Read More ›
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogIndex;