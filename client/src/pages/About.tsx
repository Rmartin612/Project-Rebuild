import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Heart, Users } from "lucide-react";
import { AnimatedSection, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import { TiltCard } from "@/components/ui/interactive-effects";
import { ImageComparison } from "@/components/ui/image-comparison";
import volunteerImage from "@assets/stock_images/medical_volunteers_h_8e4c4dea.jpg";
import portraitImage from "@assets/stock_images/senior_man_portrait__b89dbb31.jpg";
import landscapeImage from "@assets/stock_images/south_america_ecuado_dd8ca2e1.jpg";
import eyeglassesImage from "@assets/stock_images/eyeglasses_fitting_o_642058ff.jpg";

export default function About() {
  return (
    <Layout>
      <section 
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        data-testid="section-about-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${landscapeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <span className="label-elegant text-white/70 tracking-[0.2em]">Our Story</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-stately text-5xl md:text-6xl lg:text-7xl text-white mb-8" 
            data-testid="text-about-title"
          >
            Our Inspiration
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="divider-ornate max-w-xs mx-auto my-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-white/70 max-w-xl mx-auto text-refined font-light" 
            data-testid="text-about-subtitle"
          >
            The story behind VER International
          </motion.p>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-bob-story">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection variants={slideInLeft} className="relative order-2 lg:order-1">
              <TiltCard tiltAmount={5}>
                <div className="relative image-zoom rounded-sm">
                  <img 
                    src={portraitImage} 
                    alt="Humanitarian volunteer" 
                    className="rounded-sm image-elegant w-full object-cover aspect-[3/4]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-sm shadow-elegant pulse-glow">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="accent-line" />
                <span className="label-elegant mb-4 block">The Beginning</span>
                <h2 className="heading-stately text-4xl md:text-5xl text-foreground" data-testid="text-story-heading">
                  The Story of Bob Martin
                </h2>
              </div>

              <blockquote className="border-l-2 border-accent/50 pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed italic font-display" data-testid="text-bob-story">
                  Volunteer Eye Resources International was founded by the friends, family, and larger international community of Robert Martin, a longtime advocate for vision services in South and Central America.
                </p>
              </blockquote>

              <p className="text-refined text-lg text-muted-foreground leading-relaxed" data-testid="text-bob-story-2">
                As a teenager, Bob made his first trip to Ecuador with Amigos de las Americas, initiating his lifelong passion for helping others to achieve higher levels of health care, including the miracle of sight. For all who knew and worked with Bob, his enthusiasm, dedication, and sense of humor were contagious to those around him.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative bg-section-cool dark:bg-muted/10" data-testid="section-impact-comparison">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">See the Difference</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-6" data-testid="text-impact-comparison-heading">
              The Gift of Sight
            </h2>
            <p className="text-refined text-lg text-muted-foreground max-w-2xl mx-auto">
              Drag the slider to see how our work transforms lives by restoring vision to those who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <ImageComparison
              beforeImage={portraitImage}
              afterImage={eyeglassesImage}
              beforeLabel="Before"
              afterLabel="After Care"
              className="aspect-[16/10] max-w-3xl mx-auto shadow-elegant-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative" data-testid="section-expertise">
        <div className="absolute inset-0 bg-section-warm dark:bg-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection variants={slideInLeft} className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="label-elegant block mb-2">Our Team</span>
                  <h2 className="heading-stately text-3xl md:text-4xl text-foreground" data-testid="text-expertise-heading">
                    Staff Expertise
                  </h2>
                </div>
              </div>

              <p className="text-refined text-lg text-muted-foreground leading-relaxed" data-testid="text-expertise">
                VER core staff have decades of experience providing vision services to impoverished communities in Central and South America. We invite you to join us in bringing vision services to areas of greatest need.
              </p>

              <Link href="/volunteer">
                <Button size="lg" className="btn-stately text-white font-medium px-8 py-5 rounded-sm group" data-testid="button-join-us">
                  Join Our Team
                  <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="relative">
              <img 
                src={volunteerImage} 
                alt="Medical volunteers helping community" 
                className="rounded-sm image-elegant w-full object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-about-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flourish text-accent/60 mb-8 justify-center">
              <span className="text-xs">Honor His Memory</span>
            </div>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-about-cta-heading">
              Continue Bob's Legacy
            </h2>
            <p className="text-refined text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-about-cta-subtitle">
              Honor the memory of Robert Martin by supporting our mission to restore sight to those in need.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/donate">
                <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm" data-testid="button-about-donate">
                  Make a Donation
                  <Heart className="w-4 h-4 ml-3" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="px-10 py-6 text-base rounded-sm" data-testid="button-about-volunteer">
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
