import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Eye, Globe, Heart, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, fadeInUp, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import heroImage from "@assets/stock_images/eye_doctor_optometri_f8a6ad70.jpg";
import eyeglassesImage from "@assets/stock_images/eyeglasses_fitting_o_642058ff.jpg";

const impactStats = [
  { icon: Globe, value: "90%", label: "of blind people live in developing countries" },
  { icon: Eye, value: "80%", label: "of cases are avoidable or treatable" },
  { icon: Heart, value: "48%", label: "are blind because of cataracts" },
];

const boardMembers = [
  "Renee Johnson",
  "Ajay Manchandia MD",
  "Colleen Martin RN",
  "Meghan Martin",
  "Ryan Martin",
  "Charissa Nelson",
  "Wendy Russell",
  "Michelle Sheehy",
];

const founders = [
  "Mrs. Carol Martin",
  "Meghan R. Martin",
  "Robert G. Martin III",
  "Colleen A. Martin",
  "Ryan P. Martin",
  "Rita and Robert G. Martin I",
  "Rose Martin Schneider",
  "Renee Martin Johnson",
  "Rhonda Martin Slingsby",
  "Ryan Martin",
  "Randy Martin",
  "Michelle Sheehy",
  "Vilma and James Salvatore",
  "Dr. Florentino Sotomayor Sánchez",
  "Charissa Cannon Nelson",
  "Cynthia A. Goodale",
];

export default function Home() {
  return (
    <Layout>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Restoring Vision Since 2015</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" 
            data-testid="text-hero-title"
          >
            Volunteer Eye Resources
            <span className="block mt-2 text-gradient-accent">International</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light" 
            data-testid="text-hero-subtitle"
          >
            Bringing the gift of sight and hope to those living in extreme poverty
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/donate">
              <Button size="lg" className="btn-premium text-slate-900 font-semibold px-10 py-6 text-lg rounded-full" data-testid="button-hero-donate">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="glass text-white border-white/20 hover:bg-white/10 px-10 py-6 text-lg rounded-full" data-testid="button-hero-learn">
                Learn Our Story
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-mission">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/30 dark:via-background dark:to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="subheading-premium text-primary mb-4 block">Our Purpose</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 heading-premium" data-testid="text-mission-heading">
              Our Mission
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-mission">
              Volunteer Eye Resources International was founded to improve and restore sight to individuals living in extreme poverty in developing nations by providing high quality, comprehensive, & community-driven eye care services, applying best practices in global health, at no cost.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 relative" data-testid="section-commitment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <AnimatedSection variants={slideInLeft} className="space-y-8">
              <div>
                <span className="subheading-premium text-primary mb-4 block">Why We Do This</span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground heading-premium" data-testid="text-commitment-heading">
                  Our Commitment
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-commitment">
                Most of us take for granted our ability to see the world around us and our ease with which we move through our daily lives without restriction. But for those in developing countries, without access to medical treatment and optometry services, poor vision can dramatically impact an individual's ability to learn, work, and support themselves and their family.
              </p>
              <Link href="/volunteer">
                <Button variant="outline" size="lg" className="rounded-full group" data-testid="button-get-involved">
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative">
                <img 
                  src={eyeglassesImage} 
                  alt="Eyeglasses fitting for patient" 
                  className="rounded-2xl shadow-premium-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-5 rounded-2xl shadow-glow-accent">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-impact">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full filter blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full filter blur-[120px] -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="subheading-premium text-amber-400 mb-4 block">World Health Organization</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 heading-premium" data-testid="text-impact-heading">
              The Global Impact
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto" data-testid="text-impact-intro">
              According to the World Health Organization (WHO), blindness is an underlying cause of poverty and hunger in developing countries. WHO estimates that of the world's 39 million blind people:
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedItem key={index}>
                <Card className="glass border-white/10 overflow-visible group">
                  <CardContent className="p-10 text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-glow-accent">
                      <stat.icon className="w-7 h-7 text-slate-900" />
                    </div>
                    <div className="pt-6">
                      <div className="text-5xl md:text-6xl font-bold text-white mb-4 heading-premium" data-testid={`text-stat-value-${index}`}>
                        {stat.value}
                      </div>
                      <p className="text-white/70 text-lg" data-testid={`text-stat-label-${index}`}>
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-focus">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="subheading-premium text-primary mb-4 block">What We Provide</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-focus-heading">
              Our Focus
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-focus">
              We partner with communities in our host country to coordinate and provide adult and pediatric surgery, refractions, and eyeglasses. Our focus is not only on the provision of critically needed services but also to educate and train local providers for long-term sustainability. VER works with host communities to ensure all services are supported, coordinated, and provided in a culturally appropriate manner.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="flex flex-wrap justify-center gap-4">
            {["Adult & Pediatric Surgery", "Refractions", "Eyeglasses", "Education & Training"].map((item, index) => (
              <AnimatedItem key={index}>
                <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 px-6 py-3 rounded-full border border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-board">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="subheading-premium text-primary mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground heading-premium" data-testid="text-board-heading">
              Operational Board 2024-2025
            </h2>
          </AnimatedSection>

          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <AnimatedItem key={index}>
                <Card className="card-premium group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground" data-testid={`text-board-member-${index}`}>
                      {member}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-founders">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="subheading-premium text-accent mb-4 block">In Memoriam</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 heading-premium" data-testid="text-founders-heading">
              Founders
            </h2>
            <p className="text-muted-foreground italic text-lg" data-testid="text-founders-memorial">
              In Memory of Robert G. Martin II ~ 2015
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {founders.map((founder, index) => (
              <AnimatedItem key={index}>
                <div 
                  className="text-center py-4 px-3 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300"
                  data-testid={`text-founder-${index}`}
                >
                  <p className="text-sm text-muted-foreground font-medium">{founder}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="subheading-premium text-accent mb-4 block">Make a Difference</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-cta-heading">
              Join Us in Restoring Sight
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Your support helps provide life-changing vision care to those who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="btn-premium text-slate-900 font-semibold px-10 py-6 text-lg rounded-full" data-testid="button-cta-donate">
                  Make a Donation
                  <Heart className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg rounded-full" data-testid="button-cta-volunteer">
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
