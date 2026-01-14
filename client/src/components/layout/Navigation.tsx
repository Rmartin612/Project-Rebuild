import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import logoImage from "@assets/generated_images/vision_health_nonprofit_eye_logo.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-elegant" 
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="VER International Logo" 
              className="w-10 h-10 rounded-sm object-contain"
            />
            <div className="flex flex-col">
              <span className={`font-semibold text-sm tracking-wide transition-colors duration-500 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                VER International
              </span>
              <span className={`text-[10px] tracking-[0.15em] uppercase hidden sm:block transition-colors duration-500 ${
                isScrolled ? "text-muted-foreground" : "text-white/60"
              }`}>
                Bringing the Gift of Sight
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive(link.href)
                    ? isScrolled ? "text-foreground" : "text-white"
                    : isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/60 hover:text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  isActive(link.href) 
                    ? "w-full bg-accent" 
                    : "w-0"
                }`} />
              </Link>
            ))}
            <Link href="/donate">
              <Button 
                className={`rounded-sm font-medium px-6 transition-all duration-500 ${
                  isScrolled 
                    ? "btn-stately text-white" 
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/15"
                }`}
                data-testid="button-donate-nav"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Button>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-sm transition-colors ${
              isScrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div 
            className={`md:hidden py-6 border-t transition-all duration-300 ${
              isScrolled ? "border-border bg-background/95" : "border-white/10 bg-slate-900/95"
            } backdrop-blur-xl`}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-3 px-4 rounded-sm transition-all ${
                    isActive(link.href)
                      ? isScrolled 
                        ? "text-foreground bg-muted" 
                        : "text-white bg-white/10"
                      : isScrolled 
                        ? "text-muted-foreground hover:bg-muted" 
                        : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-stately text-white font-medium py-5 rounded-sm" data-testid="button-donate-mobile">
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
