import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Quote, Heart, Users, Sparkles } from "lucide-react";
import { AnimatedSection, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import volunteerImage from "@assets/stock_images/medical_volunteers_h_8e4c4dea.jpg";
import portraitImage from "@assets/stock_images/senior_man_portrait__b89dbb31.jpg";
import landscapeImage from "@assets/stock_images/south_america_ecuado_dd8ca2e1.jpg";

export default function About() {
  return (
    <Layout>
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        data-testid="section-about-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${landscapeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-500/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Our Story</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" 
            data-testid="text-about-title"
          >
            Our Inspiration
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light" 
            data-testid="text-about-subtitle"
          >
            The story behind VER International
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-bob-story">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <AnimatedSection variants={slideInLeft} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative">
                <img 
                  src={portraitImage} 
                  alt="Humanitarian volunteer" 
                  className="rounded-2xl shadow-premium-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-5 rounded-2xl shadow-glow-accent">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="space-y-8">
              <div>
                <span className="subheading-premium text-primary mb-4 block">The Beginning</span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground heading-premium" data-testid="text-story-heading">
                  The Story of Bob Martin
                </h2>
              </div>

              <div className="relative pl-8 border-l-4 border-gradient-to-b from-primary to-accent">
                <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic" data-testid="text-bob-story">
                  Volunteer Eye Resources International was founded by the friends, family, and larger international community of Robert Martin, a longtime advocate for vision services in South and Central America.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bob-story-2">
                As a teenager, Bob made his first trip to Ecuador with Amigos de las Americas, initiating his lifelong passion for helping others to achieve higher levels of health care, including the miracle of sight. For all who knew and worked with Bob, his enthusiasm, dedication, and sense of humor were contagious to those around him.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-expertise">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/30 dark:via-background dark:to-background" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <AnimatedSection variants={slideInLeft} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-glow-primary">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="subheading-premium text-primary block">Our Team</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-premium" data-testid="text-expertise-heading">
                    Staff Expertise
                  </h2>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-expertise">
                VER core staff have decades of experience providing vision services to impoverished communities in Central and South America. We invite you to join us in bringing vision services to areas of greatest need.
              </p>

              <Link href="/volunteer">
                <Button size="lg" className="btn-premium text-slate-900 font-semibold px-8 py-5 rounded-full group" data-testid="button-join-us">
                  Join Our Team
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              <img 
                src={volunteerImage} 
                alt="Medical volunteers helping community" 
                className="relative rounded-2xl shadow-premium-lg w-full object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-about-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="subheading-premium text-accent mb-4 block">Honor His Memory</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-about-cta-heading">
              Continue Bob's Legacy
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-about-cta-subtitle">
              Honor the memory of Robert Martin by supporting our mission to restore sight to those in need.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="btn-premium text-slate-900 font-semibold px-10 py-6 text-lg rounded-full" data-testid="button-about-donate">
                  Make a Donation
                  <Heart className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg rounded-full" data-testid="button-about-volunteer">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
