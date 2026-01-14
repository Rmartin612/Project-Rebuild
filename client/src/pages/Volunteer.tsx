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
  Mail,
  Sparkles
} from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, motion } from "@/hooks/use-scroll-animation";
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
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        data-testid="section-volunteer-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${volunteerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-amber-500/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Make an Impact</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" 
            data-testid="text-volunteer-title"
          >
            Join Us
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light" 
            data-testid="text-volunteer-subtitle"
          >
            We invite you to join us in bringing vision services to areas of greatest need.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-urgent-needs">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="subheading-premium text-primary mb-4 block">Get Involved</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-urgent-needs-heading">
              Our Urgent Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-urgent-needs-intro">
              If you'd like to get involved, please visit our Contact Us page to get more information.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-12">
            <Card className="bg-gradient-to-br from-accent/10 via-amber-50/50 to-orange-50/50 dark:from-accent/20 dark:via-amber-950/20 dark:to-orange-950/20 border-accent/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-[60px]" />
              <CardContent className="relative p-8 md:p-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-glow-accent">
                  <Heart className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Donations</h3>
                  <p className="text-lg text-muted-foreground" data-testid="text-donations-need">
                    Donations to help restore & improve eyesight to those of the greatest need
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center heading-premium" data-testid="text-clinical-staff-heading">
              Skilled Volunteer Clinical Staff
            </h3>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerNeeds.map((need, index) => (
              <AnimatedItem key={index}>
                <Card className="card-premium h-full group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                        <need.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{need.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-need-${index}`}>
                      {need.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-contact">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/30 dark:via-background dark:to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-8 shadow-glow-primary">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <span className="subheading-premium text-primary mb-4 block">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-contact-heading">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto" data-testid="text-contact-subtitle">
              Interested in volunteering or learning more about our mission? We'd love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a 
              href="mailto:info@verinternational.org"
              className="inline-flex items-center gap-3 text-2xl text-primary hover:text-primary/80 font-semibold transition-colors animated-underline"
              data-testid="link-contact-email"
            >
              info@verinternational.org
              <ArrowRight className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="section-volunteer-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="subheading-premium text-accent mb-4 block">Support Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 heading-premium" data-testid="text-volunteer-cta-heading">
              Make a Difference Today
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-volunteer-cta-subtitle">
              Your contribution helps provide life-changing vision care to communities in need.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link href="/donate">
              <Button size="lg" className="btn-premium text-slate-900 font-semibold px-10 py-6 text-lg rounded-full" data-testid="button-volunteer-donate">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
