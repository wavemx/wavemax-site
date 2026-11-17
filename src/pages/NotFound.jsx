import { Link } from 'react-router-dom';

export const NotFound = () => (
  <section className="container page-head narrow">
    <p className="eyebrow">404</p>
    <h1 className="display-sm">This page doesn't exist</h1>
    <p className="lead">It may have moved, or the link may be wrong.</p>
    <Link className="btn btn-primary" to="/">Back to home</Link>
  </section>
);
