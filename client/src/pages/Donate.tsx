import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, DollarSign, CreditCard, Mail, CheckCircle, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";

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
      <section className="relative py-32 md:py-40 overflow-hidden" data-testid="section-donate-hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Transform Lives</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-8 shadow-glow-accent"
          >
            <Heart className="w-10 h-10 text-slate-900" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" 
            data-testid="text-donate-title"
          >
            Give the Gift of
            <span className="block mt-2 text-gradient-accent">Sight</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light" 
            data-testid="text-donate-subtitle"
          >
            Your donation helps restore vision and transform lives in developing nations.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-donation-impact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="subheading-premium text-accent mb-4 block">Make a Difference</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-your-impact-heading">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-your-impact-subtitle">
              Every donation, no matter the size, makes a meaningful difference in someone's life.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationImpacts.map((item, index) => (
              <AnimatedItem key={index}>
                <Card className="card-premium text-center group h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-amber-100 dark:from-accent/30 dark:to-amber-950/30 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-3xl text-gradient-accent heading-premium">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-impact-${index}`}>
                      {item.impact}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-how-to-donate">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="subheading-premium text-primary mb-4 block">Ways to Give</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-how-to-donate-heading">
              How to Donate
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-how-to-donate-subtitle">
              Choose the method that works best for you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection variants={slideInLeft}>
              <Card className="card-premium h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Contact Us</CardTitle>
                      <CardDescription className="text-base">Get in touch to arrange your donation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground" data-testid="text-contact-us-desc">
                    For donations by check or other methods, please contact us directly.
                  </p>
                  <a 
                    href="mailto:info@verinternational.org"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors animated-underline"
                    data-testid="link-donate-email"
                  >
                    info@verinternational.org
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight}>
              <Card className="card-premium h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full filter blur-[40px]" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-amber-100 dark:from-accent/30 dark:to-amber-950/30 flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Online Donation</CardTitle>
                      <CardDescription className="text-base">Make a secure online contribution</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground" data-testid="text-online-donate-desc">
                    Contact us to learn about our secure online donation options.
                  </p>
                  <Button className="w-full btn-premium text-slate-900 font-semibold py-5 rounded-xl" data-testid="button-online-donate">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-why-donate">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="subheading-premium text-primary mb-4 block">Our Promise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground heading-premium" data-testid="text-why-give-heading">
              Why Give to VER International?
            </h2>
          </AnimatedSection>

          <AnimatedContainer className="space-y-5">
            {whyGivePoints.map((point, index) => (
              <AnimatedItem key={index}>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground" data-testid={`text-why-${index}`}>{point}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-donate-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="subheading-premium text-accent mb-4 block">We Appreciate You</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-thank-you-heading">
              Thank You for Your Generosity
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-thank-you-subtitle">
              Your support helps bring the gift of sight and hope to those who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a 
              href="mailto:info@verinternational.org"
              data-testid="button-donate-contact"
            >
              <Button size="lg" className="btn-premium text-slate-900 font-semibold px-10 py-6 text-lg rounded-full">
                Contact Us to Donate
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
