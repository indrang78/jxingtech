import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-oxford-blue">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center bg-azure text-white px-6 py-3 rounded-lg hover:bg-azure/90 transition-colors">
          Return to Home
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
