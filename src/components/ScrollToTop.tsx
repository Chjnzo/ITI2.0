"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente di utility che riporta la finestra all'inizio (0,0)
 * ogni volta che la rotta (URL) cambia.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;