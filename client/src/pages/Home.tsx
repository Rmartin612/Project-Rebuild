import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Eye, Globe, Heart, Users, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <span className="label-elegant text-white/70 tracking-[0.2em]">Restoring Vision Since 2015</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-stately text-5xl md:text-7xl lg:text-8xl text-white mb-8" 
            data-testid="text-hero-title"
          >
            Volunteer Eye Resources
            <span className="block mt-3 text-gradient-gold">International</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="divider-ornate max-w-md mx-auto my-10"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/75 mb-12 max-w-2xl mx-auto text-refined font-light" 
            data-testid="text-hero-subtitle"
          >
            Bringing the gift of sight and hope to those living in extreme poverty
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/donate">
              <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm" data-testid="button-hero-donate">
                Make a Donation
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="glass text-white border-white/15 hover:bg-white/10 px-10 py-6 text-base rounded-sm" data-testid="button-hero-learn">
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40"
          >
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-mission">
        <div className="absolute inset-0 bg-section-warm dark:bg-transparent" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Our Purpose</span>
            <h2 className="heading-stately text-4xl md:text-5xl lg:text-6xl text-foreground mb-10" data-testid="text-mission-heading">
              Our Mission
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-refined text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-mission">
              Volunteer Eye Resources International was founded to improve and restore sight to individuals living in extreme poverty in developing nations by providing high quality, comprehensive, & community-driven eye care services, applying best practices in global health, at no cost.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative" data-testid="section-commitment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection variants={slideInLeft} className="space-y-8">
              <div>
                <div className="accent-line" />
                <span className="label-elegant mb-4 block">Why We Serve</span>
                <h2 className="heading-stately text-4xl md:text-5xl text-foreground" data-testid="text-commitment-heading">
                  Our Commitment
                </h2>
              </div>
              <p className="text-refined text-lg text-muted-foreground leading-relaxed" data-testid="text-commitment">
                Most of us take for granted our ability to see the world around us and our ease with which we move through our daily lives without restriction. But for those in developing countries, without access to medical treatment and optometry services, poor vision can dramatically impact an individual's ability to learn, work, and support themselves and their family.
              </p>
              <Link href="/volunteer">
                <Button variant="outline" size="lg" className="rounded-sm group mt-4" data-testid="button-get-involved">
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} className="relative">
              <div className="relative">
                <img 
                  src={eyeglassesImage} 
                  alt="Eyeglasses fitting for patient" 
                  className="rounded-sm image-elegant w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-sm shadow-elegant">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 relative overflow-hidden" data-testid="section-impact">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="label-elegant text-amber-400/80 mb-6 block tracking-[0.2em]">World Health Organization</span>
            <h2 className="heading-stately text-4xl md:text-5xl lg:text-6xl text-white mb-8" data-testid="text-impact-heading">
              The Global Impact
            </h2>
            <p className="text-refined text-lg text-white/60 max-w-3xl mx-auto" data-testid="text-impact-intro">
              According to the World Health Organization (WHO), blindness is an underlying cause of poverty and hunger in developing countries. WHO estimates that of the world's 39 million blind people:
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedItem key={index}>
                <div className="glass rounded-sm p-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-amber-500/20 border border-amber-500/30 mb-8">
                    <stat.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="heading-stately text-5xl md:text-6xl text-white mb-4" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <p className="text-white/60 text-base" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-focus">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">What We Provide</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-focus-heading">
              Our Focus
            </h2>
            <p className="text-refined text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12" data-testid="text-focus">
              We partner with communities in our host country to coordinate and provide adult and pediatric surgery, refractions, and eyeglasses. Our focus is not only on the provision of critically needed services but also to educate and train local providers for long-term sustainability.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="flex flex-wrap justify-center gap-4">
            {["Adult & Pediatric Surgery", "Refractions", "Eyeglasses", "Education & Training"].map((item, index) => (
              <AnimatedItem key={index}>
                <div className="flex items-center gap-3 bg-muted/50 px-6 py-3 rounded-sm border border-border/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-medium text-foreground text-sm">{item}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative" data-testid="section-board">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Leadership</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground" data-testid="text-board-heading">
              Operational Board 2024-2025
            </h2>
          </AnimatedSection>

          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <AnimatedItem key={index}>
                <Card className="card-stately rounded-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-muted/80 flex items-center justify-center mx-auto mb-5 border border-border/50">
                      <Users className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-foreground text-sm" data-testid={`text-board-member-${index}`}>
                      {member}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-section-warm dark:bg-muted/20 relative" data-testid="section-founders">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="flourish text-accent/60 mb-8 justify-center">
              <span className="text-xs">In Memoriam</span>
            </div>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-4" data-testid="text-founders-heading">
              Founders
            </h2>
            <p className="text-muted-foreground italic text-lg font-display" data-testid="text-founders-memorial">
              In Memory of Robert G. Martin II ~ 2015
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {founders.map((founder, index) => (
              <AnimatedItem key={index}>
                <div 
                  className="text-center py-4 px-4 bg-background/50 dark:bg-card/50 rounded-sm border border-border/30"
                  data-testid={`text-founder-${index}`}
                >
                  <p className="text-sm text-muted-foreground">{founder}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Make a Difference</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-cta-heading">
              Join Us in Restoring Sight
            </h2>
            <p className="text-refined text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Your support helps provide life-changing vision care to those who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/donate">
                <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm" data-testid="button-cta-donate">
                  Make a Donation
                  <Heart className="w-4 h-4 ml-3" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="px-10 py-6 text-base rounded-sm" data-testid="button-cta-volunteer">
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
