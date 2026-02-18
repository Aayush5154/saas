// ═══════════════════════════════════════════════════════════
//  Static Data – Landing Page Content (Matching Figma: Squid SaaS Template)
// ═══════════════════════════════════════════════════════════

/**
 * ── Navigation Links ─────────────────────────────────────────
 */
export const navLinks = [
  { name: "Home",         href: "/" },
  { name: "Features",     href: "#features" },
  { name: "Pricing",      href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ",          href: "/faq" },
];

/**
 * ── Features (Feature Boxes from Figma) ──────────────────────
 */
export const features = [
  {
    id: 1,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "Clipboard",
  },
  {
    id: 2,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "Layers",
  },
  {
    id: 3,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "Smile",
  },
  {
    id: 4,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "TrendingUp",
  },
  {
    id: 5,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "Wrench",
  },
  {
    id: 6,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    iconName: "Monitor",
  },
];

/**
 * ── Company Logos ────────────────────────────────────────────
 */
export const companies = [
  "Smile",
  "Urban",
  "natural",
  "WAVE",
  "HAPPY",
  "Alba",
];

/**
 * ── Pricing Plans ────────────────────────────────────────────
 */
export const pricing = [
  {
    name: "Silver",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and side projects.",
    isRecommended: false,
    features: [
      "Up to 3 team members",
      "1 GB cloud storage",
      "Basic analytics dashboard",
      "Community support",
      "Single project",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Gold",
    price: "$49",
    period: "/month",
    description: "Ideal for growing teams that need more power.",
    isRecommended: true,
    features: [
      "Unlimited team members",
      "50 GB cloud storage",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "Custom integrations",
      "SSO & SAML authentication",
      "API access",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    description: "Tailored for enterprises with mission-critical needs.",
    isRecommended: false,
    features: [
      "Everything in Gold",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "On-premise deployment option",
      "Audit logs & compliance tools",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
  },
];

/**
 * ── Testimonials ─────────────────────────────────────────────
 */
export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=7c3aed&color=fff&bold=true&size=80",
    text: "SaaSify cut our onboarding time by 60%. The analytics dashboard alone paid for itself in the first month. Absolutely game-changing for our team.",
  },
  {
    name: "Marcus Johnson",
    role: "Product Lead at GrowthLab",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=6d28d9&color=fff&bold=true&size=80",
    text: "We evaluated 12 platforms before choosing SaaSify. It was the only one that scaled seamlessly with us from seed stage through Series B.",
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Manager at DataPulse",
    avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=9333ea&color=fff&bold=true&size=80",
    text: "The developer experience is unmatched. The API docs are crystal clear, integrations just work, and the support team is incredibly responsive.",
  },
];

/**
 * ── FAQ ──────────────────────────────────────────────────────
 */
export const faq = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Our Silver plan is free forever with no credit card required. The Gold plan includes a 14-day free trial so you can explore all premium features risk-free.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer:
      "Absolutely. There are no long-term contracts or hidden fees. You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard.",
  },
  {
    question: "How secure is my data on SaaSify?",
    answer:
      "Security is our top priority. We are SOC 2 Type II certified, all data is encrypted at rest and in transit using AES-256, and we perform regular third-party security audits.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely via Stripe.",
  },
];
