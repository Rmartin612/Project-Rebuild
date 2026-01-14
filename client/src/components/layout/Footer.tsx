import { Link } from "wouter";
import { Eye, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12 md:py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-white">VER International</h3>
                <p className="text-sm text-slate-300">Bringing the Gift of Sight and Hope</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Volunteer Eye Resources International restores sight to individuals living in extreme poverty in developing nations.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-slate-300 hover:text-white transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors" data-testid="link-footer-about">
                About Us
              </Link>
              <Link href="/volunteer" className="text-sm text-slate-300 hover:text-white transition-colors" data-testid="link-footer-volunteer">
                Volunteer
              </Link>
              <Link href="/donate" className="text-sm text-slate-300 hover:text-white transition-colors" data-testid="link-footer-donate">
                Donate
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:info@verinternational.org" 
                className="text-sm hover:text-white transition-colors"
                data-testid="link-email"
              >
                info@verinternational.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400" data-testid="text-copyright">
            Copyright © 2026 · All Rights Reserved · Volunteer Eye Resources International
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for those in need</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
