import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Eye, Globe, Heart, Users, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import { BoardMemberModal, BoardMemberCard, type BoardMember } from "@/components/BoardMemberModal";
import { FloatingElement, TiltCard, TextReveal, MagneticButton } from "@/components/ui/interactive-effects";
import heroImage from "@assets/stock_images/eye_doctor_optometri_f8a6ad70.jpg";
import eyeglassesImage from "@assets/stock_images/eyeglasses_fitting_o_642058ff.jpg";

const impactStats = [
  { icon: Globe, value: 90, suffix: "%", label: "of blind people live in developing countries" },
  { icon: Eye, value: 80, suffix: "%", label: "of cases are avoidable or treatable" },
  { icon: Heart, value: 48, suffix: "%", label: "are blind because of cataracts" },
];

const boardMembersData: BoardMember[] = [
  {
    id: "renee-johnson",
    name: "Renee Johnson",
    title: "Board Member",
    bio: "Renee has been a dedicated advocate for global health initiatives for over two decades. Her passion for VER International stems from her family's long-standing commitment to serving communities in need. She brings extensive experience in nonprofit management and community outreach.",
    joinedYear: 2016,
    expertise: ["Nonprofit Management", "Community Outreach", "Strategic Planning"],
  },
  {
    id: "ajay-manchandia",
    name: "Ajay Manchandia MD",
    title: "Medical Director",
    credentials: "MD",
    bio: "Dr. Manchandia is a board-certified ophthalmologist with over 15 years of experience in cataract surgery and comprehensive eye care. He has participated in numerous medical mission trips and brings invaluable clinical expertise to our organization.",
    joinedYear: 2017,
    expertise: ["Ophthalmology", "Cataract Surgery", "Medical Training"],
  },
  {
    id: "colleen-martin",
    name: "Colleen Martin RN",
    title: "Nursing Director",
    credentials: "RN, BSN",
    bio: "Colleen is a registered nurse with extensive experience in surgical nursing and patient care. As a founding family member, she has been instrumental in developing our clinical protocols and training programs for local healthcare providers.",
    joinedYear: 2015,
    expertise: ["Surgical Nursing", "Patient Care", "Training & Education"],
  },
  {
    id: "meghan-martin",
    name: "Meghan Martin",
    title: "Executive Director",
    bio: "Meghan serves as the Executive Director of VER International, overseeing all organizational operations. Her background in international development and public health has been essential in expanding our reach and impact.",
    joinedYear: 2015,
    expertise: ["Executive Leadership", "International Development", "Public Health"],
  },
  {
    id: "ryan-martin",
    name: "Ryan Martin",
    title: "Operations Director",
    bio: "Ryan manages the logistical operations of VER International, ensuring that medical supplies, equipment, and volunteers are coordinated effectively for each mission trip. His attention to detail keeps our operations running smoothly.",
    joinedYear: 2015,
    expertise: ["Operations Management", "Logistics", "Supply Chain"],
  },
  {
    id: "charissa-nelson",
    name: "Charissa Nelson",
    title: "Board Secretary",
    bio: "Charissa serves as the Board Secretary, maintaining organizational records and supporting governance activities. Her dedication to transparency and accountability strengthens our organization's foundation.",
    joinedYear: 2016,
    expertise: ["Governance", "Administration", "Compliance"],
  },
  {
    id: "wendy-russell",
    name: "Wendy Russell",
    title: "Community Liaison",
    bio: "Wendy builds and maintains relationships with the communities we serve, ensuring our programs are culturally appropriate and responsive to local needs. Her work is essential to our community-driven approach.",
    joinedYear: 2018,
    expertise: ["Community Relations", "Cultural Liaison", "Program Development"],
  },
  {
    id: "michelle-sheehy",
    name: "Michelle Sheehy",
    title: "Board Treasurer",
    bio: "Michelle oversees the financial management of VER International, ensuring responsible stewardship of donated funds. Her financial expertise ensures that resources are maximized for patient care.",
    joinedYear: 2015,
    expertise: ["Financial Management", "Accounting", "Nonprofit Finance"],
  },
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

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <div ref={ref} className="heading-stately text-5xl md:text-6xl text-white">
      {count}{suffix}
    </div>
  );
}

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: BoardMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleModalOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setTimeout(() => setSelectedMember(null), 300);
    }
  };

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
        
        <FloatingElement className="top-1/4 left-[10%]" size="lg" variant="ring" delay={0} duration={8} />
        <FloatingElement className="top-1/3 right-[15%]" size="md" variant="circle" delay={2} duration={7} />
        <FloatingElement className="bottom-1/4 left-[20%]" size="sm" variant="dot" delay={1} duration={6} />
        <FloatingElement className="bottom-1/3 right-[10%]" size="lg" variant="ring" delay={3} duration={9} />
        <FloatingElement className="top-1/2 left-[5%]" size="sm" variant="circle" delay={4} duration={5} />
        
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
            <MagneticButton strength={0.2}>
              <Link href="/donate">
                <Button size="lg" className="btn-stately text-white font-medium px-10 py-6 text-base rounded-sm" data-testid="button-hero-donate">
                  Make a Donation
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/about">
                <Button size="lg" variant="outline" className="glass text-white border-white/15 px-10 py-6 text-base rounded-sm" data-testid="button-hero-learn">
                  Our Story
                </Button>
              </Link>
            </MagneticButton>
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
                <TiltCard tiltAmount={6}>
                  <div className="glass rounded-sm p-10 text-center h-full flex flex-col items-center justify-center min-h-[280px]">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-amber-500/20 border border-amber-500/30 mb-8">
                      <stat.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div data-testid={`text-stat-value-${index}`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/60 text-base mt-4 max-w-[200px]" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </p>
                  </div>
                </TiltCard>
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
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-4" data-testid="text-board-heading">
              Operational Board 2024-2025
            </h2>
            <p className="text-muted-foreground text-sm">Click on a member to view their profile</p>
          </AnimatedSection>

          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembersData.map((member, index) => (
              <AnimatedItem key={member.id}>
                <BoardMemberCard 
                  member={member} 
                  onClick={() => handleMemberClick(member)}
                  index={index}
                />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      <BoardMemberModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onOpenChange={handleModalOpenChange}
      />

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
                  className="text-center py-4 px-4 bg-background/50 dark:bg-card/50 rounded-sm border border-border/30 transition-all duration-300 hover:border-border/50 hover:shadow-elegant"
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
