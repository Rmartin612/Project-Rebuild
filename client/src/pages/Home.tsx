import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Eye, Globe, Heart, Users, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedContainer, AnimatedItem, slideInLeft, slideInRight, motion } from "@/hooks/use-scroll-animation";
import { BoardMemberModal, BoardMemberCard, type BoardMember } from "@/components/BoardMemberModal";
import { TiltCard, TextReveal, MagneticButton } from "@/components/ui/interactive-effects";
import { KenBurnsCarousel } from "@/components/ui/ken-burns-carousel";
import heroImage from "@assets/stock_images/eye_doctor_optometri_f8a6ad70.jpg";
import eyeglassesImage from "@assets/stock_images/eyeglasses_fitting_o_642058ff.jpg";
import volunteerImage from "@assets/stock_images/medical_volunteers_h_8e4c4dea.jpg";
import landscapeImage from "@assets/stock_images/south_america_ecuado_dd8ca2e1.jpg";
import portraitImage from "@assets/stock_images/senior_man_portrait__b89dbb31.jpg";

const carouselImages = [
  { src: heroImage, alt: "Eye doctor providing care" },
  { src: eyeglassesImage, alt: "Patient receiving eyeglasses" },
  { src: volunteerImage, alt: "Medical volunteers helping community" },
  { src: landscapeImage, alt: "Communities we serve in South America" },
  { src: portraitImage, alt: "Patient with restored vision" },
];

const impactStats = [
  { icon: Globe, value: 90, suffix: "%", label: "of blind people live in developing countries" },
  { icon: Eye, value: 80, suffix: "%", label: "of cases are avoidable or treatable" },
  { icon: Heart, value: 48, suffix: "%", label: "are blind because of cataracts" },
];

const boardMembersData: BoardMember[] = [
  {
    id: "renee-johnson",
    name: "Renee Johnson",
    title: "Fundraising Chair",
    imageUrl: "/images/board/renee-johnson.jpg",
    bio: "Renee's experience with travel and service started with her first trips to Japan and Denmark with 4-H. Her older brother, Robert G. Martin II inspired her to go out in the world and serve others. She completed her Master's Degree at IIT in Financial Engineering and ran her business for 25 years at the Chicago Mercantile Exchange. Later in life, she has had time to pursue her passion for helping and empowering underserved children and their families in Nicaragua to reach their full potential. She is also proud to be the mother of 3 amazing young men that are also dedicating their lives to serving others. VER is very near and dear to her heart, in honor of her brother's legacy. \"The eyes are the windows to the soul\" is an expression that is often used to describe the deep connection one feels when looking into another's eyes. Renee is committed to aiding VER in improving and restoring sight to individuals living in extreme poverty.",
    joinedYear: 2016,
    expertise: ["Nonprofit Management", "Community Outreach", "Strategic Planning"],
  },
  {
    id: "ajay-manchandia",
    name: "Ajay Manchandia MD",
    title: "Executive Director, Medical Director",
    credentials: "MD",
    imageUrl: "/images/board/ajay-manchandia.jpg",
    bio: "Dr. Ajay Manchandia graduated from UC Berkeley with a degree in Molecular Biology and continued his training in Philadelphia, completing his ophthalmology residency at Temple University. He then completed his fellowship in pediatric ophthalmology and strabismus at the prestigious Jules Stein Eye Institute, UCLA. He is passionate about supporting underserved populations, having organized several mission trips as a resident, and having led surgical mission trips with Volunteer Eye Resources International since 2017. As a VER International board member, he hopes to continue Bob Martin's legacy to provide adult and pediatric eye and surgical care to underserved communities and to educate and train local providers for long term sustainability.",
    joinedYear: 2017,
    expertise: ["Ophthalmology", "Cataract Surgery", "Medical Training"],
  },
  {
    id: "colleen-martin",
    name: "Colleen Martin RN",
    title: "Surgical Project Manager",
    credentials: "RN, BSN",
    imageUrl: "/images/board/colleen-martin.jpg",
    bio: "Colleen grew up admiring her father, Robert G. Martin II, for his passion for providing assistance to those in need. Currently, she is a board member for VER International. She received her Master's degree in Nursing from Johns Hopkins University and has worked as an emergency department R.N. for 6 years. She furthered her education at Vanderbilt University and recently graduated from their nurse practitioner program. She is dual-certified as a Family and Emergency Nurse Practitioner. She has participated in multiple volunteer trips over the years and is eager to continue on in her father's legacy.",
    joinedYear: 2015,
    expertise: ["Surgical Nursing", "Patient Care", "Training & Education"],
  },
  {
    id: "meghan-martin",
    name: "Meghan Martin",
    title: "Board Chair, Secretary",
    imageUrl: "/images/board/meghan-martin.jpg",
    bio: "Meghan's passion for volunteering and helping others came from her dad, Robert G. Martin II, and she serves as a board member for VER International to honor his legacy and bring the gift of sight to underserved communities. She graduated with a bachelor's degree in Global Studies from University of Illinois at Urbana-Champaign and received her Master's Degree in Industrial and Labor Relations from Cornell University. Meghan works in consulting; advising technology companies on their people strategy. Meghan has joined VER International on trips to Nicaragua and Peru and has led additional volunteer trips to Panama with Global Brigades. Meghan resides in Chicago with her husband, Mark, and French bulldog, Gus.",
    joinedYear: 2015,
    expertise: ["Executive Leadership", "International Development", "Public Health"],
  },
  {
    id: "ryan-martin",
    name: "Ryan Martin",
    title: "Vision Screening Assistant Project Manager",
    imageUrl: "/images/board/ryan-martin.jpg",
    bio: "Ryan grew up hearing about service trips from his father and how desperately individuals in Latin and South America need ongoing eye care. It was his trip to Guatemala with his father in 5th grade that convinced him of this mission. He now serves as a board member for VER International, since 2015. Ryan graduated from Marquette University, majoring in Finance and International Business. Ryan has gone on service trips with VER to Nicaragua and Peru, thus far.",
    joinedYear: 2015,
    expertise: ["Operations Management", "Logistics", "Supply Chain"],
  },
  {
    id: "charissa-nelson",
    name: "Charissa Nelson",
    title: "Programs Manager",
    imageUrl: "/images/board/charissa-nelson.jpg",
    bio: "Charissa joins the VER board after numerous volunteer service trips throughout her life to Latin America with health and environmental non-profit foundations. Her love for Spanish and Latin America began in school and was accelerated with her 7 summers of volunteer experience in health and community development projects in rural Central and South America with Amigos de las Americas during high school and college. Charissa and Bob directed a tuberculosis detection project in the Amazon region of Ecuador with Amigos. She has volunteered extensively in Central America with environmental groups, in South America with vision projects, and does translation for several international non-profits. Charissa has a BA in Latin American Studies from UC Berkeley and an MA in Teaching from Pacific University. She is currently teaching in a Spanish Immersion elementary School in Oregon.",
    joinedYear: 2016,
    expertise: ["Governance", "Administration", "Compliance"],
  },
  {
    id: "wendy-russell",
    name: "Wendy Russell",
    title: "Board Treasurer",
    imageUrl: "/images/board/wendy-russell.jpg",
    bio: "Wendy joins the board after volunteering with VER on 2 service trips to Peru September 2019 and September 2023. Wendy's passion for Spanish language and Latin American culture began with studying Spanish from age 12 and participating in a student exchange program in Puerto Vallarta, Mexico her senior year of high school. After graduation she returned to live and work in Mexico for 8 years. Upon returning to the States, Wendy pursued her university degree, followed by a 20-year career in import/export of wood products based in Eugene, OR. During the 20 years, she traveled to, and worked with, locals in Honduras, Nicaragua, and El Salvador. Her goal was to volunteer internationally once retired. Fortunately, she was introduced to VER in 2019 and participated in her first service trip as a volunteer interpreter in Peru. Most recently she volunteered in 2023 for a 19-day service trip covering both surgical and vision screening projects. Wendy joins the board with a passion for culture, communication, serving, and genuinely caring for others. She holds a BA in International Business from Linfield University and currently works for Levi Strauss & Co.",
    joinedYear: 2018,
    expertise: ["Community Relations", "Cultural Liaison", "Program Development"],
  },
  {
    id: "michelle-sheehy",
    name: "Michelle Sheehy",
    title: "Vision Screening Project Manager",
    imageUrl: "/images/board/michelle-sheehy.jpg",
    bio: "At an early age, Michelle's family taught her the importance of giving back to others. At Mother McAuley Liberal Arts High School, she was taught the importance of having compassion towards the needs of others. When she was a high school junior, she was inspired by her cousin Bob, who introduced her to Amigos de las Americas. Thanks to Bob, she had the honor of participating in her first medical mission trip during Amigo's initial visit to Oaxaca, Mexico. Michelle immediately developed a deep passion for charitable work and for Latin America. For over fifteen years she has volunteered weekly at a hospital in Chicago devoted to serving chronically ill children. She has continued to participate as a volunteer on mission trips to Ecuador, Peru, and Nicaragua, and looks forward to volunteering with VER International to bring the gift of vision to many more children and adults in Latin America.",
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

      <section className="py-28 md:py-40 relative" data-testid="section-gallery">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="accent-line-center" />
            <span className="label-elegant mb-6 block">Our Work in Action</span>
            <h2 className="heading-stately text-4xl md:text-5xl text-foreground mb-6" data-testid="text-gallery-heading">
              Moments of Impact
            </h2>
            <p className="text-refined text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the transformative power of sight restoration across the communities we serve.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <KenBurnsCarousel
              images={carouselImages}
              interval={7000}
              className="aspect-[21/9] rounded-sm shadow-elegant-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-elegant mx-auto max-w-xl" />

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
              Operational Board 2026-2027
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
