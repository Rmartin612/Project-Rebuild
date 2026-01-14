import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Quote, Heart, Users } from "lucide-react";
import volunteerImage from "@assets/stock_images/medical_volunteers_h_8e4c4dea.jpg";
import portraitImage from "@assets/stock_images/senior_man_portrait__b89dbb31.jpg";
import landscapeImage from "@assets/stock_images/south_america_ecuado_dd8ca2e1.jpg";

export default function About() {
  return (
    <Layout>
      <section 
        className="relative min-h-[50vh] flex items-center justify-center"
        data-testid="section-about-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${landscapeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="text-about-title">
            Our Inspiration
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-testid="text-about-subtitle">
            The story behind VER International
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-bob-story">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={portraitImage} 
                alt="Humanitarian volunteer" 
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-story-heading">The Story of Bob Martin</h2>
              <div className="relative pl-6 border-l-4 border-primary">
                <Quote className="absolute -left-3 -top-1 w-6 h-6 text-primary bg-background" />
                <p className="text-muted-foreground leading-relaxed italic" data-testid="text-bob-story">
                  Volunteer Eye Resources International was founded by the friends, family, and larger international community of Robert Martin, a longtime advocate for vision services in South and Central America.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bob-story-2">
                As a teenager, Bob made his first trip to Ecuador with Amigos de las Americas, initiating his lifelong passion for helping others to achieve higher levels of health care, including the miracle of sight. For all who knew and worked with Bob, his enthusiasm, dedication, and sense of humor were contagious to those around him.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20" data-testid="section-expertise">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-expertise-heading">Staff Expertise</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-expertise">
                VER core staff have decades of experience providing vision services to impoverished communities in Central and South America. We invite you to join us in bringing vision services to areas of greatest need.
              </p>
              <div className="pt-4">
                <Link href="/volunteer">
                  <Button className="bg-primary hover:bg-primary/90" data-testid="button-join-us">
                    Join Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={volunteerImage} 
                alt="Medical volunteers helping community" 
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-about-cta-heading">Continue Bob's Legacy</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-about-cta-subtitle">
            Honor the memory of Robert Martin by supporting our mission to restore sight to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border border-accent-border px-8" data-testid="button-about-donate">
                Make a Donation
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" data-testid="button-about-volunteer">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
