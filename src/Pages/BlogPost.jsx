import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import heroImage from '../assests/images/outreach1.jpeg';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[index];
  const prevPost = index > 0 ? blogPosts[index - 1] : null;
  const nextPost = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  if (!post) {
    return (
      <div className="bl-page">
        <Navbar />
        <div style={{ padding: '96px 24px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)' }}>
            Post not found.
          </p>
          <button
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700 }}
            onClick={() => navigate('/blog')}
          >
            ← Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

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

        /* ── Hero (same generic banner used on the Blog index) ── */
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

        /* ── Article ── */
        .bl-article-wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 56px clamp(20px, 5vw, 24px) 80px;
        }
        .bl-article-photo-wrap {
          border-radius: var(--card-radius);
          overflow: hidden;
          margin-bottom: 24px;
        }
        .bl-article-photo {
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          display: block;
        }
        .bl-article-meta {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-light);
          margin: 0 0 24px;
        }
        .bl-article-body {
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: clamp(24px, 4vw, 40px);
        }
        .bl-article-body p {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0 0 18px;
        }
        .bl-article-body h3 {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(20px, 2.4vw, 26px);
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 32px 0 14px;
        }
        .bl-article-body h3:first-child {
          margin-top: 0;
        }
        .bl-article-body ul,
        .bl-article-body ol {
          margin: 0 0 18px;
          padding-left: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bl-article-body li {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .bl-donate-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          transition: var(--transition);
        }
        .bl-donate-btn:hover {
          background: var(--color-primary-dark);
        }

        /* ── Prev / Next nav ── */
        .bl-postnav {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--color-border);
          flex-wrap: wrap;
        }
        .bl-postnav-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--color-primary);
          max-width: 320px;
          text-align: left;
          line-height: 1.5;
        }
        .bl-postnav-link.next {
          text-align: right;
          margin-left: auto;
        }
        .bl-postnav-link:hover {
          color: var(--color-primary-dark);
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

      {/* ── Article ── */}
      <div className="bl-article-wrap">
        <div className="bl-article-photo-wrap">
          <img src={post.image} alt={post.title} className="bl-article-photo" />
        </div>
        <p className="bl-article-meta">{post.date} | JoMabel Healthcare Foundation</p>

        <div className="bl-article-body">
          {post.content.map((block, i) => {
            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
            if (block.type === 'ul') return (
              <ul key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
            if (block.type === 'ol') return (
              <ol key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ol>
            );
            return <p key={i}>{block.text}</p>;
          })}

          {/* Donate CTA appears at the end of the final post, matching the reference */}
          {index === blogPosts.length - 1 || post.slug === blogPosts[0].slug ? null : null}
          {post.slug === blogPosts[0].slug && (
            <button className="bl-donate-btn" onClick={() => navigate('/donate#payment-section')}>
              Support Healthcare Today <ArrowRight size={15} />
            </button>
          )}
        </div>

        {/* ── Prev / Next ── */}
        <div className="bl-postnav">
          {prevPost ? (
            <button className="bl-postnav-link" onClick={() => navigate(`/blog/${prevPost.slug}`)}>
              ← {prevPost.title}
            </button>
          ) : <span />}
          {nextPost && (
            <button className="bl-postnav-link next" onClick={() => navigate(`/blog/${nextPost.slug}`)}>
              {nextPost.title} →
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;