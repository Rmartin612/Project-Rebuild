import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { 
  ArrowRight, 
  Heart, 
  Stethoscope, 
  Eye, 
  Activity, 
  Bed, 
  Glasses, 
  Package,
  Mail
} from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, motion } from "@/hooks/use-scroll-animation";
import { TiltCard, MagneticButton } from "@/components/ui/interactive-effects";
import volunteerImage from "@assets/stock_images/medical_volunteers_h_8e4c4dea.jpg";

const volunteerNeeds = [
  {
    icon: Stethoscope,
    title: "Ophthalmic Surgery",
    description: "Skilled surgeons for cataract and other eye surgeries",
  },
  {
    icon: Eye,
    title: "Optometry",
    description: "Optometrists for vision assessments and refractions",
  },
  {
    icon: Activity,
    title: "Pre-op",
    description: "Medical staff for pre-operative patient preparation",
  },
  {
    icon: Bed,
    title: "Recovery Room",
    description: "Nursing staff for post-operative patient care",
  },
  {
    icon: Glasses,
    title: "Eyeglasses Fitting",
    description: "Specialists for fitting and dispensing eyeglasses",
  },
  {
    icon: Package,
    title: "Equipment & Supplies",
    description: "Donations of medical equipment and supplies",
  },
];

export default function Volunteer() {
  return (
    <Layout>
      <section 
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        data-testid="section-volunteer-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${volunteerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <span className="label-elegant text-white/70 tracking-[0.2em]">Make an Impact</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-stately text-5xl md:text-6xl lg:text-7xl text-white mb-8" 
            data-testid="text-volunteer-title"
          >
            Join Us
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
            data-testid="text-volunteer-subtitle"
          >
            We invite you to join us in bringing vision services to areas of greatest need.
          </motion.p>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-urgent-needs">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Get Involved</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-urgent-needs-heading">
              Our Urgent Needs
            </h2>
            <p className="text-refined text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-urgent-needs-intro">
              If you'd like to get involved, please visit our Contact Us page to get more information.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-16">
            <Card className="card-stately rounded-sm border-accent/30 bg-gradient-to-r from-amber-50/50 to-transparent dark:from-amber-950/20 dark:to-transparent">
              <CardContent className="p-8 md:p-10 flex items-center gap-6">
                <div className="w-14 h-14 rounded-sm bg-accent/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Donations</h3>
                  <p className="text-muted-foreground text-refined" data-testid="text-donations-need">
                    Donations to help restore & improve eyesight to those of the greatest need
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="heading-display text-2xl text-foreground mb-10 text-center" data-testid="text-clinical-staff-heading">
              Skilled Volunteer Clinical Staff
            </h3>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerNeeds.map((need, index) => (
              <AnimatedItem key={index}>
                <Card className="card-stately rounded-sm h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-sm bg-muted/80 flex items-center justify-center border border-border/50">
                        <need.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base font-semibold">{need.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm" data-testid={`text-need-${index}`}>
                      {need.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

      <section className="py-28 md:py-40 relative" data-testid="section-contact">
        <div className="absolute inset-0 bg-section-cool dark:bg-transparent" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <span className="label-elegant mb-6 block">Contact Us</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-contact-heading">
              Get in Touch
            </h2>
            <p className="text-refined text-lg text-muted-foreground mb-10 max-w-xl mx-auto" data-testid="text-contact-subtitle">
              Interested in volunteering or learning more about our mission? We'd love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <a 
              href="mailto:info@verinternational.org"
              className="inline-flex items-center gap-3 text-xl text-primary hover:text-primary/80 font-medium transition-colors underline-elegant"
              data-testid="link-contact-email"
            >
              info@verinternational.org
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 md:py-40 relative" data-testid="section-volunteer-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Support Our Mission</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-8" data-testid="text-volunteer-cta-heading">
              Make a Difference Today
            </h2>
            <p className="text-refined text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-volunteer-cta-subtitle">
              Your contribution helps provide life-changing vision care to communities in need.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Link href="/donate">
              <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm" data-testid="button-volunteer-donate">
                Donate Now
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
