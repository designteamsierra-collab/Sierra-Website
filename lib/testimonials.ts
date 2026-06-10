export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

/**
 * Authentic Sierra Digital testimonials, recovered from the WordPress export
 * (spt_testimonial post type). Roles sourced from the original rendered pages.
 * Avatars are the recreated professional portraits in /public/visuals.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The can-do mentality comes through in Sierra's culture. There are not many parties with the capability to serve a project like ours across the globe.",
    author: "Dr. Ernest",
    role: "Founder, Nestoil",
    avatar: "/visuals/testimonial-avatar-01.png",
  },
  {
    quote:
      "Sierra has strong expertise in all of the SAP modules. They have strong project leadership skills and a very good long-term commitment to the efforts within SAP.",
    author: "Mohan Dasappan",
    role: "Run Support Manager, Andeavor / Marathon",
    avatar: "/visuals/testimonial-avatar-02.png",
  },
  {
    quote:
      "A differentiated system integration firm — the resources, capabilities, delivery and flexibility are excellent. Sierra is always there to help us, whatever our needs are.",
    author: "Arun Shanmugam",
    role: "Architect, Schlumberger",
    avatar: "/visuals/testimonial-avatar-03.png",
  },
  {
    quote:
      "With the help of Sierra Digital, all our SAP systems can have a direct connection with SAP Analytics Cloud. This streamlines data retrieval and display compared to other non-native BI tools.",
    author: "IT Director",
    role: "Houston-based Oil & Gas",
    avatar: "/visuals/testimonial-avatar-01.png",
  },
  {
    quote: "Sierra cloud-readiness apps help you know before you go, and help you know how to grow.",
    author: "Ron Chermin",
    role: "Senior Director, SAP Labs",
    avatar: "/visuals/testimonial-avatar-02.png",
  },
  {
    quote: "Cross-industry BTP apps pioneered by Sierra are game-changers.",
    author: "Dave Maloney",
    role: "VP, BTP Everywhere, SAP",
    avatar: "/visuals/testimonial-avatar-03.png",
  },
];
