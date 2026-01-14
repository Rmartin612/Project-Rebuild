import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye, Heart } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/volunteer", label: "Volunteer" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-to-br from-primary to-blue-600 shadow-lg" 
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}>
              <Eye className={`w-6 h-6 ${isScrolled ? "text-white" : "text-white"}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                VER International
              </span>
              <span className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}>
                Bringing the Gift of Sight
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? isScrolled ? "text-primary" : "text-white"
                    : isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/70 hover:text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <Link href="/donate">
              <Button 
                className={`rounded-full font-semibold px-6 transition-all duration-300 ${
                  isScrolled 
                    ? "btn-premium text-slate-900" 
                    : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
                }`}
                data-testid="button-donate-nav"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Button>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div 
            className={`md:hidden py-6 border-t transition-all duration-300 ${
              isScrolled ? "border-border bg-white/50 dark:bg-slate-900/50" : "border-white/10 bg-slate-900/90"
            } backdrop-blur-xl rounded-b-2xl`}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-all ${
                    isActive(link.href)
                      ? isScrolled 
                        ? "text-primary bg-primary/10" 
                        : "text-white bg-white/10"
                      : isScrolled 
                        ? "text-muted-foreground hover:bg-muted" 
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-premium text-slate-900 font-semibold py-5 rounded-xl" data-testid="button-donate-mobile">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
