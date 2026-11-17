import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Consulting } from './pages/Consulting.jsx';
import { Robotics } from './pages/Robotics.jsx';
import { Insights } from './pages/Insights.jsx';
import { Readiness } from './pages/Readiness.jsx';
import { About } from './pages/About.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { routes } from './routes.js';

const usePageMeta = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    const route = routes.find((r) => r.path === path);
    if (route) document.title = route.title;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
};

export const App = () => {
  usePageMeta();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/readiness" element={<Readiness />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
