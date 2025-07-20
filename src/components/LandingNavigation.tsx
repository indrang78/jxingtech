import { Link } from "react-router-dom";

const LandingNavigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-ghost-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-azure rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JX</span>
            </div>
            <span className="font-bold text-xl text-oxford-blue">JXING Tech Group</span>
          </Link>

          {/* Simple Back to Homepage Link */}
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-azure transition-colors font-medium"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavigation;