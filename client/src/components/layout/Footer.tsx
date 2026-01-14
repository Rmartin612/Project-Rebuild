import { Link } from "wouter";
import { Eye, Mail, Heart, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[120px]" />
      
      <div className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-glow-primary">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">VER International</h3>
                  <p className="text-sm text-slate-400">Bringing the Gift of Sight and Hope</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Volunteer Eye Resources International restores sight to individuals living in extreme poverty in developing nations, providing high-quality, community-driven eye care at no cost.
              </p>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/volunteer", label: "Volunteer" },
                  { href: "/donate", label: "Donate" },
                ].map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-4 space-y-6">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:info@verinternational.org" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  data-testid="link-email"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@verinternational.org</span>
                </a>
              </div>
              <div className="pt-4">
                <Link href="/donate">
                  <button className="btn-premium text-slate-900 font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2" data-testid="button-footer-donate">
                    <Heart className="w-4 h-4" />
                    Support Our Mission
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500" data-testid="text-copyright">
              Copyright © 2026 · All Rights Reserved · Volunteer Eye Resources International
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for those in need</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
