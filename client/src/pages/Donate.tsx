import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, DollarSign, CreditCard, Mail, CheckCircle } from "lucide-react";

const donationImpacts = [
  { amount: "$25", impact: "Provides eyeglasses to a child in need" },
  { amount: "$50", impact: "Covers vision screening for 10 patients" },
  { amount: "$100", impact: "Funds one cataract surgery" },
  { amount: "$250", impact: "Supports a mobile eye clinic visit" },
];

export default function Donate() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-donate-hero">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="text-donate-title">
            Give the Gift of Sight
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto" data-testid="text-donate-subtitle">
            Your donation helps restore vision and transform lives in developing nations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-donation-impact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-your-impact-heading">Your Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-your-impact-subtitle">
              Every donation, no matter the size, makes a meaningful difference in someone's life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationImpacts.map((item, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-accent">{item.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground" data-testid={`text-impact-${index}`}>
                    {item.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-how-to-donate">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-how-to-donate-heading">How to Donate</h2>
            <p className="text-muted-foreground" data-testid="text-how-to-donate-subtitle">
              Choose the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Contact Us</CardTitle>
                    <CardDescription>Get in touch to arrange your donation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground" data-testid="text-contact-us-desc">
                  For donations by check or other methods, please contact us directly.
                </p>
                <a 
                  href="mailto:info@verinternational.org"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  data-testid="link-donate-email"
                >
                  info@verinternational.org
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Online Donation</CardTitle>
                    <CardDescription>Make a secure online contribution</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground" data-testid="text-online-donate-desc">
                  Contact us to learn about our secure online donation options.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border border-accent-border" data-testid="button-online-donate">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-why-donate">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-why-give-heading">Why Give to VER International?</h2>
          <div className="space-y-4">
            {[
              "100% of donations go directly to providing eye care services",
              "We work with local communities for sustainable, culturally appropriate care",
              "Our volunteer staff have decades of experience in Central and South America",
              "We focus on both treatment and training local providers for long-term impact",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground" data-testid={`text-why-${index}`}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10" data-testid="section-donate-cta">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-thank-you-heading">Thank You for Your Generosity</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-thank-you-subtitle">
            Your support helps bring the gift of sight and hope to those who need it most.
          </p>
          <a 
            href="mailto:info@verinternational.org"
            data-testid="button-donate-contact"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Contact Us to Donate
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
