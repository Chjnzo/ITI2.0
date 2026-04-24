import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pagina non trovata — Il Tuo Immobiliare</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--secondary)' }}>
        <div className="text-center max-w-md">
          <p className="text-[120px] font-bold leading-none select-none opacity-20" style={{ color: 'var(--primary)' }}>404</p>
          <h1 className="text-2xl font-bold mb-3 -mt-4" style={{ color: 'var(--text-main)' }}>Pagina non trovata</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-2xl font-bold transition-colors shadow-lg"
            style={{ background: 'var(--primary)' }}
          >
            <Home size={18} />
            Torna alla Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
