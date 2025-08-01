import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top when pathname changes
    window.scrollTo(1, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
