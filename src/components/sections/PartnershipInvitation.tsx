import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PartnershipInvitation = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new URLSearchParams();
      formData.append('name', 'Prospective Partner');
      formData.append('email', email);
      formData.append('subject', 'Partnership Interest');
      formData.append('message', `A visitor at ${email} expressed interest in becoming a partner via the homepage Partnership Invitation section.`);

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Partnership interest error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pi-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .pi-section {
          font-family: var(--font-body);
          background: var(--color-bg);
          padding: 72px clamp(24px, 5vw, 72px);
          text-align: center;
        }

        .pi-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-navy);
          letter-spacing: 0.01em;
          margin: 0 0 40px;
        }

        .pi-form-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          max-width: 480px;
          margin: 0 auto;
        }

        .pi-input {
          flex: 1;
          min-width: 200px;
          padding: 13px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--btn-radius);
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text);
          background: var(--color-bg);
          outline: none;
          transition: var(--transition);
        }
        .pi-input:focus { border-color: var(--color-primary); }

        .pi-btn {
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
          justify-content: center;
          transition: var(--transition);
          white-space: nowrap;
        }
        .pi-btn:hover:not(:disabled) {
          background: var(--color-primary-dark);
        }
        .pi-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .pi-error {
          font-family: var(--font-body);
          font-size: 13px;
          color: #991b1b;
          font-weight: 600;
          margin: 0 0 14px;
        }

        .pi-success {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-green-dark);
          font-weight: 600;
          margin: 0 0 12px;
        }

        .pi-contact-link {
          display: inline-block;
          margin-top: 14px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .pi-form-row { flex-direction: column; }
        }
      `}</style>

      <h2 className="pi-headline">Where Partnership Becomes Progress</h2>

      {/* No partner logos yet — this space is ready for them once
          formal partnerships are announced. */}

      {submitted ? (
        <>
          <p className="pi-success">✓ Thank you! We've received your interest and will be in touch soon.</p>
        </>
      ) : (
        <>
          {error && <p className="pi-error">{error}</p>}
          <div className="pi-form-row">
            <input
              type="email"
              className="pi-input"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <button className="pi-btn" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Join Us as a Partner'}
              {!isLoading && <ArrowRight size={15} />}
            </button>
          </div>
          <button className="pi-contact-link" onClick={() => navigate('/contact')}>
            Prefer to reach out directly? Contact us instead.
          </button>
        </>
      )}
    </section>
  );
};

export default PartnershipInvitation;