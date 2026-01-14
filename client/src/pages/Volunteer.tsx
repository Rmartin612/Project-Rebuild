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
        className="relative min-h-[50vh] flex items-center justify-center"
        data-testid="section-volunteer-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${volunteerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="text-volunteer-title">
            Join Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-testid="text-volunteer-subtitle">
            We invite you to join us in bringing vision services to areas of greatest need.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-urgent-needs">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Urgent Needs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-urgent-needs-intro">
              If you'd like to get involved, please visit our Contact Us page to get more information.
            </p>
          </div>

          <div className="mb-12">
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 md:p-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Donations</h3>
                  <p className="text-muted-foreground" data-testid="text-donations-need">
                    Donations to help restore & improve eyesight to those of the greatest need
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Skilled Volunteer Clinical Staff</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerNeeds.map((need, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <need.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{need.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground" data-testid={`text-need-${index}`}>
                      {need.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20" data-testid="section-contact">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Interested in volunteering or learning more about our mission? We'd love to hear from you.
          </p>
          <a 
            href="mailto:info@verinternational.org"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
            data-testid="link-contact-email"
          >
            info@verinternational.org
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10" data-testid="section-volunteer-cta">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Make a Difference Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution helps provide life-changing vision care to communities in need.
          </p>
          <Link href="/donate">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border border-accent-border px-8" data-testid="button-volunteer-donate">
              Donate Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
