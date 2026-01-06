import { Dumbbell, Users, Clock } from "lucide-react";

export const siteConfig = {
  name: "IronForge Gym",
  description: "Your premier local destination for strength, conditioning, and community.",
  contact: {
    phone: "+1 (555) 123-4567",
    whatsapp: "https://wa.me/15551234567",
    address: "123 Muscle Ave, Strongvilleville, ST 12345",
    email: "info@ironforgegym.local",
    socials: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
    }
  },
  hero: {
    headline: "Forge Your Best Self",
    subtext: "Join the community that pushes you further. Expert trainers, top-tier equipment, and an atmosphere of success.",
    cta: "Start Your Free Trial",
    ctaLink: "#pricing",
    image: "/hero-gym.jpg" // Placeholder path
  },
  services: [
    {
      title: "Personal Training",
      description: "One-on-one coaching customized to your specific goals and fitness level.",
      icon: Users
    },
    {
      title: "Group Classes",
      description: "High-energy classes ranging from HIIT to Yoga, led by certified instructors.",
      icon: Clock
    },
    {
      title: "Open Gym",
      description: "24/7 access to state-of-the-art equipment for your own training schedule.",
      icon: Dumbbell
    }
  ],
  trust: {
    title: "Why Choose IronForge?",
    description: "We are more than just a gym. We are a community dedicated to your growth.",
    stats: [
        { label: "Active Members", value: "500+" },
        { label: "Expert Trainers", value: "15+" },
        { label: "Years Open", value: "10+" }
    ],
    trainers: [
        {
            name: "Alex 'The Beast' Chen",
            role: "Head Strength Coach",
            bio: "Former powerlifter with 10 years of coaching experience.",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop" // Abstract placeholder
        },
        {
            name: "Sarah 'Speed' Jones",
            role: "HIIT Specialist",
            bio: "Certified endurance coach who helps you break limits.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8966bf?w=400&h=400&fit=crop" // Abstract placeholder
        }
    ]
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    tiers: [
      {
        name: "Day Pass",
        price: "$15",
        period: "/ day",
        description: "Perfect for travelers.",
        features: ["Access to gym floor", "Locker room access", "No commitment"],
        cta: "Get Pass",
        popular: false
      },
      {
        name: "Monthly",
        price: "$49",
        period: "/ month",
        description: "Most popular for locals.",
        features: ["24/7 Access", "All Group Classes", "1 Free PT Session", "Guest Privileges"],
        cta: "Join Now",
        popular: true
      },
      {
        name: "Yearly",
        price: "$499",
        period: "/ year",
        description: "Best value for committed athletes.",
        features: ["24/7 Access", "All Group Classes", "3 Free PT Sessions", "Priority Support", "Merch Pack"],
        cta: "Go Yearly",
        popular: false
      }
    ]
  },
  location: {
    title: "Visit Us",
    description: "Conveniently located in the heart of the city with ample parking.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844057932761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629737525380!5m2!1sen!2sus" // Placeholder map
  },
  footer: {
    copyright: "© 2024 IronForge Gym. All rights reserved."
  }
};
