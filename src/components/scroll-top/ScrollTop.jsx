import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () => {
  const location = useLocation();
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    scrolltoTop();
  }, [location]);

  return null;
}

export default ScrollTop;