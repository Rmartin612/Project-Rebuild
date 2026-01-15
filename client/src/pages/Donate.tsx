import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, DollarSign, CreditCard, Mail, CheckCircle } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import { TiltCard, MagneticButton } from "@/components/ui/interactive-effects";

const donationImpacts = [
  { amount: "$25", impact: "Provides eyeglasses to a child in need" },
  { amount: "$50", impact: "Covers vision screening for 10 patients" },
  { amount: "$100", impact: "Funds one cataract surgery" },
  { amount: "$250", impact: "Supports a mobile eye clinic visit" },
];

const whyGivePoints = [
  "100% of donations go directly to providing eye care services",
  "We work with local communities for sustainable, culturally appropriate care",
  "Our volunteer staff have decades of experience in Central and South America",
  "We focus on both treatment and training local providers for long-term impact",
];

export default function Donate() {
  return (
    <Layout>
      <section className="relative py-32 md:py-44 overflow-hidden" data-testid="section-donate-hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <span className="label-elegant text-white/70 tracking-[0.2em]">Transform Lives</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-16 rounded-sm bg-accent/20 flex items-center justify-center mx-auto mb-10 border border-accent/30"
          >
            <Heart className="w-8 h-8 text-amber-400" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-stately text-5xl md:text-6xl lg:text-7xl text-white mb-8" 
            data-testid="text-donate-title"
          >
            Give the Gift of
            <span className="block mt-3 text-gradient-gold">Sight</span>
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
            className="text-xl text-white/70 max-w-2xl mx-auto text-refined font-light" 
            data-testid="text-donate-subtitle"
          >
            Your donation helps restore vision and transform lives in developing nations.
          </motion.p>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-donation-impact">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Make a Difference</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-your-impact-heading">
              Your Impact
            </h2>
            <p className="text-refined text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-your-impact-subtitle">
              Every donation, no matter the size, makes a meaningful difference in someone's life.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationImpacts.map((item, index) => (
              <AnimatedItem key={index}>
                <Card className="card-stately rounded-sm text-center h-full">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20">
                      <DollarSign className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="heading-display text-3xl text-gradient-accent">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm" data-testid={`text-impact-${index}`}>
                      {item.impact}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative" data-testid="section-how-to-donate">
        <div className="absolute inset-0 bg-section-warm dark:bg-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Ways to Give</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-how-to-donate-heading">
              How to Donate
            </h2>
            <p className="text-refined text-lg text-muted-foreground" data-testid="text-how-to-donate-subtitle">
              Choose the method that works best for you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection variants={slideInLeft}>
              <Card className="card-stately rounded-sm h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Contact Us</CardTitle>
                      <CardDescription className="text-sm">Get in touch to arrange your donation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm" data-testid="text-contact-us-desc">
                    For donations by check or other methods, please contact us directly.
                  </p>
                  <a 
                    href="mailto:info@verinternational.org"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors underline-elegant"
                    data-testid="link-donate-email"
                  >
                    info@verinternational.org
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight}>
              <Card className="card-stately rounded-sm h-full border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center border border-accent/20">
                      <CreditCard className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Online Donation</CardTitle>
                      <CardDescription className="text-sm">Make a secure online contribution</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm" data-testid="text-online-donate-desc">
                    Contact us to learn about our secure online donation options.
                  </p>
                  <Button className="w-full btn-stately text-white font-medium py-5 rounded-sm" data-testid="button-online-donate">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-why-donate">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Our Promise</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground" data-testid="text-why-give-heading">
              Why Give to VER International?
            </h2>
          </AnimatedSection>

          <AnimatedContainer className="space-y-4">
            {whyGivePoints.map((point, index) => (
              <AnimatedItem key={index}>
                <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-sm border border-border/50">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-refined" data-testid={`text-why-${index}`}>{point}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-donate-cta">
        <div className="absolute inset-0 bg-section-warm dark:bg-transparent" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flourish text-accent/60 mb-8 justify-center">
              <span className="text-xs">We Appreciate You</span>
            </div>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-thank-you-heading">
              Thank You for Your Generosity
            </h2>
            <p className="text-refined text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-thank-you-subtitle">
              Your support helps bring the gift of sight and hope to those who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <a 
              href="mailto:info@verinternational.org"
              data-testid="button-donate-contact"
            >
              <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm">
                Contact Us to Donate
                <Heart className="w-4 h-4 ml-3" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
