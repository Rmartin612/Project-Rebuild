import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Eye, Globe, Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
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
        className="relative min-h-[85vh] flex items-center justify-center"
        data-testid="section-hero"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Volunteer Eye Resources International – Bringing the Gift of Sight and Hope
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Restoring sight and transforming lives in developing nations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border border-accent-border px-8" data-testid="button-hero-donate">
                Donate Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20" data-testid="button-hero-learn">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20" data-testid="section-mission">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6" data-testid="text-mission-heading">Our Mission</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-mission">
            Volunteer Eye Resources International was founded to improve and restore sight to individuals living in extreme poverty in developing nations by providing high quality, comprehensive, & community-driven eye care services, applying best practices in global health, at no cost.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-commitment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-commitment-heading">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-commitment">
                Most of us take for granted our ability to see the world around us and our ease with which we move through our daily lives without restriction. But for those in developing countries, without access to medical treatment and optometry services, poor vision can dramatically impact an individual's ability to learn, work, and support themselves and their family.
              </p>
              <Link href="/volunteer">
                <Button variant="outline" className="mt-4" data-testid="button-get-involved">
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={eyeglassesImage} 
                alt="Eyeglasses fitting for patient" 
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-impact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-impact-heading">The Global Impact</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto" data-testid="text-impact-intro">
              According to the World Health Organization (WHO), blindness is an underlying cause of poverty and hunger in developing countries. WHO estimates that of the world's 39 million blind people:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/80" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-focus">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center" data-testid="text-focus-heading">Our Focus</h2>
          <p className="text-muted-foreground leading-relaxed text-center mb-8" data-testid="text-focus">
            We partner with communities in our host country to coordinate and provide adult and pediatric surgery, refractions, and eyeglasses. Our focus is not only on the provision of critically needed services but also to educate and train local providers for long-term sustainability. VER works with host communities to ensure all services are supported, coordinated, and provided in a culturally appropriate manner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Adult & Pediatric Surgery", "Refractions", "Eyeglasses", "Education & Training"].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-board">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-board-heading">Operational Board 2024-2025</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground" data-testid={`text-board-member-${index}`}>
                    {member}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-founders">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-founders-heading">Founders</h2>
            <p className="text-muted-foreground italic" data-testid="text-founders-memorial">In Memory of Robert G. Martin II ~ 2015</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {founders.map((founder, index) => (
              <div 
                key={index} 
                className="text-center py-3 px-2 bg-muted/30 rounded-md"
                data-testid={`text-founder-${index}`}
              >
                <p className="text-sm text-muted-foreground">{founder}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-cta-heading">Join Us in Restoring Sight</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Your support helps provide life-changing vision care to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border border-accent-border px-8" data-testid="button-cta-donate">
                Make a Donation
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" data-testid="button-cta-volunteer">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
