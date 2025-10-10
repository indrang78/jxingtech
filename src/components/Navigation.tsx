import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const servicesCategories = [{
    category: "Design & Marketing",
    services: [{
      name: "Growth-Driven Website Design & Development",
      path: "/services/website-design"
    }, {
      name: "Growth-Driven Content-Led SEO & Brand Storytelling",
      path: "/services/content-seo"
    }, {
      name: "Omni-Channel Social Media Management",
      path: "/services/social-media"
    }, {
      name: "Performance Marketing: Paid Ads Management",
      path: "/services/paid-ads"
    }]
  }, {
    category: "Automation & AI",
    services: [{
      name: "CRM & Automation Integration",
      path: "/services/crm-automation"
    }, {
      name: "Behavioral Marketing Automation & Customer Journey Mapping",
      path: "/services/behavioral-automation"
    }, {
      name: "AI Integration, Automation & Agent Development",
      path: "/services/ai-integration"
    }]
  }, {
    category: "Content Systems",
    services: [{
      name: "Content Repurposing Engine",
      path: "/services/repurposing"
    }, {
      name: "Journey-Driven Content Distribution",
      path: "/services/content-distribution"
    }, {
      name: "Website Care & Optimization Plan",
      path: "/services/website-care"
    }]
  }];
  const resourcesLinks = [{
    name: "Blog",
    path: "/blog"
  }, {
    name: "Website Growth Playbook",
    path: "/resources/website-growth-playbook"
  }, {
    name: "Help / FAQ",
    path: "/help"
  }];
  return <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-foreground tracking-tight">JXING</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className={`text-base font-medium transition-smooth ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-foreground hover:text-primary transition-smooth outline-none">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 sm:w-80 bg-card border border-border shadow-lg z-50">
                {servicesCategories.map((category, index) => <div key={index}>
                    <DropdownMenuLabel className="text-marian-blue font-semibold">
                      {category.category}
                    </DropdownMenuLabel>
                    {category.services.map(service => <DropdownMenuItem key={service.path} asChild>
                        <Link to={service.path} className="block px-2 py-1 text-sm text-muted-foreground hover:text-azure hover:bg-muted cursor-pointer">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>)}
                    {index < servicesCategories.length - 1 && <DropdownMenuSeparator />}
                  </div>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/pricing" className={`text-base font-medium transition-smooth ${isActive("/pricing") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Pricing
            </Link>

            <Link to="/case-studies" className={`text-base font-medium transition-smooth ${isActive("/case-studies") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Case Studies
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-foreground hover:text-primary transition-smooth outline-none">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 sm:w-56 bg-card border border-border shadow-lg z-50">
                {resourcesLinks.map(resource => <DropdownMenuItem key={resource.path} asChild>
                    <Link to={resource.path} className="block px-2 py-1 text-sm text-muted-foreground hover:text-azure hover:bg-muted cursor-pointer">
                      {resource.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className={`text-base font-medium transition-smooth ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-full shadow-sm"
              data-cal-link="jxingtech/book-a-free-consult" 
              data-cal-config='{"layout":"month_view"}'
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/about" className={`block px-3 py-2 text-base font-medium transition-smooth ${isActive("/about") ? "text-azure bg-azure/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-marian-blue mb-2">Services</div>
                {servicesCategories.map(category => <div key={category.category} className="mb-3">
                    <div className="text-xs font-medium text-muted-foreground mb-1">{category.category}</div>
                    {category.services.map(service => <Link key={service.path} to={service.path} className="block px-2 py-1 text-sm text-muted-foreground hover:text-azure" onClick={() => setIsOpen(false)}>
                        {service.name}
                      </Link>)}
                  </div>)}
              </div>
              <Link to="/pricing" className={`block px-3 py-2 text-base font-medium transition-smooth ${isActive("/pricing") ? "text-azure bg-azure/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`} onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/case-studies" className={`block px-3 py-2 text-base font-medium transition-smooth ${isActive("/case-studies") ? "text-azure bg-azure/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`} onClick={() => setIsOpen(false)}>
                Case Studies
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-marian-blue mb-2">Resources</div>
                {resourcesLinks.map(resource => <Link key={resource.path} to={resource.path} className="block px-2 py-1 text-sm text-muted-foreground hover:text-azure" onClick={() => setIsOpen(false)}>
                    {resource.name}
                  </Link>)}
              </div>
              <Link to="/contact" className={`block px-3 py-2 text-base font-medium transition-smooth ${isActive("/contact") ? "text-azure bg-azure/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`} onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="px-3 py-4 border-t border-muted/20 mt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full" data-cal-link="jxingtech/book-a-free-consult" data-cal-config='{"layout":"month_view"}'>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;