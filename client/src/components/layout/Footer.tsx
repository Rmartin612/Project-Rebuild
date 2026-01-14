import { Link } from "wouter";
import { Eye, Mail, Heart, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="relative py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-sm bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-white tracking-wide">VER International</h3>
                  <p className="text-xs text-slate-400 tracking-[0.1em] uppercase">Bringing the Gift of Sight</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Volunteer Eye Resources International restores sight to individuals living in extreme poverty in developing nations, providing high-quality, community-driven eye care at no cost.
              </p>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="text-xs font-medium text-slate-300 uppercase tracking-[0.15em]">Quick Links</h4>
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
                    className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-4 space-y-6">
              <h4 className="text-xs font-medium text-slate-300 uppercase tracking-[0.15em]">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:info@verinternational.org" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  data-testid="link-email"
                >
                  <div className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@verinternational.org</span>
                </a>
              </div>
              <div className="pt-4">
                <Link href="/donate">
                  <button className="btn-stately text-white font-medium px-6 py-3 rounded-sm inline-flex items-center gap-2 text-sm" data-testid="button-footer-donate">
                    <Heart className="w-4 h-4" />
                    Support Our Mission
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500" data-testid="text-copyright">
              Copyright © 2026 · All Rights Reserved · Volunteer Eye Resources International
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              <span>for those in need</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
