import { useEffect, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname, location.search]);
  return children;
}
