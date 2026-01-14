# VER International Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leading nonprofit and healthcare organizations (Doctors Without Borders, charity:water, WHO) to create an emotionally engaging yet trustworthy experience that inspires action.

## Core Design Principles
1. **Trust & Credibility**: Medical professionalism balanced with warmth
2. **Emotional Connection**: Human-centered storytelling through imagery and content
3. **Clear Call-to-Action**: Prominent donation and volunteer pathways
4. **Accessibility First**: High contrast, readable typography for all audiences

## Typography System
- **Primary Font**: Inter or Roboto (Google Fonts) - clean, professional, highly readable
- **Headings**: Font weights 600-700, sizes: 3xl-5xl (mobile), 4xl-6xl (desktop)
- **Body Text**: Font weight 400, size: base-lg, line-height relaxed (1.75)
- **Accent Text**: Font weight 500 for stats and impact numbers

## Color Palette (User-Specified)
- **Primary**: Medical Blue (#1E40AF or similar blue-700)
- **Secondary**: Warm Hope Orange/Yellow (#F59E0B amber-500)
- **Neutral**: White backgrounds, slate-700 for body text
- **Accents**: Light blue backgrounds (blue-50) for alternating sections

## Layout System
**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 20 (as in p-4, py-12, gap-8, space-y-16)
- Section padding: py-16 (mobile), py-20 to py-24 (desktop)
- Container: max-w-7xl with px-4 md:px-8
- Content blocks: max-w-3xl for text-heavy sections
- Grid gaps: gap-8 to gap-12

## Page-Specific Layouts

### Home Page (index.html)
1. **Hero Section** (Full viewport height):
   - Large background image: Eye care professional with patient in South American setting
   - Centered overlay with organization name, tagline, and primary CTA ("Donate Now" + "Learn More")
   - Buttons with backdrop-blur background

2. **Mission Statement**: Full-width section with contrasting background (blue-50), centered text, max-w-4xl

3. **Impact Stats Section**: 3-column grid (stacked on mobile) with large numbers, icons, and WHO statistics

4. **Our Commitment + Focus**: Two-column layout (desktop) with compelling image showing eye care services

5. **Board Members**: Card-based grid layout (2-3 columns) with subtle borders

### About Page (about.html)
1. **Hero Section**: Image of Bob Martin or vintage South American volunteer work
2. **Story Section**: Single column narrative with pull quote styling for key phrases
3. **Staff Expertise**: Two-column with supporting imagery

### Volunteer Page (volunteer.html)
1. **Hero Section**: Volunteers in action providing eye care
2. **Join Us Section**: Prominent call-to-action
3. **Urgent Needs**: Checklist-style layout with icons for each category
4. **Contact Form Section**: Two-column (form + contact info/image)

## Component Library

### Navigation
- Sticky header with white/transparent background (blur on scroll)
- Logo left, nav links center/right, "Donate" button in accent color
- Mobile: Hamburger menu

### Cards
- Rounded corners (rounded-lg), subtle shadow, white background
- Padding: p-6 to p-8
- Hover: Slight elevation increase (shadow-lg)

### Buttons
- Primary: Solid accent color (orange/yellow), white text, font-semibold, px-8 py-3, rounded-md
- Secondary: White background, primary color text, border
- All buttons: backdrop-blur-md when on images

### Footer
- Dark background (slate-800), white text
- Three-column layout: Quick links, Contact, Copyright
- Social media icons if applicable

## Images Strategy
**Hero Images**: Required on all pages
- Home: Eye exam or surgery scene in developing country
- About: Portrait or historical photo
- Volunteer: Group of volunteers in action

**Supporting Images**: 
- South American landscapes showing communities served
- Before/after patient stories (if available)
- Medical equipment and eyeglass fittings
- Team photos

**Image Treatment**: 
- Warm, hopeful color grading
- High quality, authentic photography (avoid overly staged stock photos)
- Use Unsplash keywords: "eye care developing countries", "medical volunteers latin america", "optometry", "south america community"

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for stat numbers
- Smooth transitions on hover states
- No distracting animations that detract from content

## Accessibility
- WCAG AA compliant color contrast ratios
- Alt text for all images
- Semantic HTML structure
- Focus states for all interactive elements
- Mobile tap targets minimum 44x44px