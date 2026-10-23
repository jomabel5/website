import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Mount this ONCE inside your <Router>, alongside your <Routes> — e.g. in App.jsx:
 *
 *   <BrowserRouter>
 *     <ScrollToTop />
 *     <Routes>...</Routes>
 *   </BrowserRouter>
 *
 * React Router doesn't reset scroll position on navigation the way a normal
 * page load does — it just leaves the browser wherever it was, which is why
 * clicking to a new page could land you in the middle or bottom of it.
 *
 * This fixes that: on every route change it scrolls to the top. If the URL
 * includes a hash (e.g. navigating to "/donate#payment-section" from a
 * Donate Now button), it scrolls to that section instead, waiting briefly
 * so the new page has time to render before trying to find the element.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Small delay lets the new page's DOM render before we look for the target.
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;