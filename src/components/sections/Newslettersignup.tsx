import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please fill in your name and email.');
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
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', 'Newsletter Signup');
      formData.append('message', `${name} (${email}) would like to join the JoMabel Healthcare Foundation mailing list.`);

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      const data = await response.json();

      if (data.success) {
        setStatus('submitted');
        setName('');
        setEmail('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="ns-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .ns-section {
          font-family: var(--font-body);
          background: var(--color-bg);
          padding: 72px 24px;
          text-align: center;
        }

        .ns-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 0 0 32px;
        }

        .ns-form {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          max-width: 760px;
          margin: 0 auto;
        }

        .ns-input {
          flex: 1;
          min-width: 200px;
          padding: 15px 18px;
          border: 1px solid var(--color-border);
          border-radius: var(--btn-radius);
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-navy);
        }
        .ns-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .ns-input:disabled {
          opacity: 0.7;
        }

        .ns-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }
        .ns-btn:hover:not(:disabled) {
          background: var(--color-primary-dark);
        }
        .ns-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .ns-error {
          margin: 0 0 16px;
          font-family: var(--font-body);
          font-size: 13px;
          color: #991b1b;
          font-weight: 600;
        }

        .ns-confirmation {
          margin-top: 20px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-green-dark);
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .ns-form { flex-direction: column; }
          .ns-btn { width: 100%; }
        }
      `}</style>

      <h2 className="ns-headline">Join Our Mailing List</h2>

      {status !== 'submitted' && (
        <>
          {error && <p className="ns-error">{error}</p>}
          <form className="ns-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ns-input"
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ns-input"
              disabled={isLoading}
            />
            <button type="submit" className="ns-btn" disabled={isLoading}>
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </>
      )}

      {status === 'submitted' && (
        <p className="ns-confirmation">Thanks for subscribing — welcome aboard!</p>
      )}
    </section>
  );
};

export default NewsletterSignup;