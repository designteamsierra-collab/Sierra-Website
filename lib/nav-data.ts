export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  sections?: NavSection[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    sections: [
      {
        title: "SAP Platform",
        links: [
          { label: "SAP RISE", href: "/sap-rise/" },
          { label: "SAP GROW", href: "/sap-grow/" },
          { label: "Clean Core", href: "/clean-core/" },
          { label: "AI Enhancement", href: "/ai-enhancement/" },
          { label: "Integration", href: "/integration/" },
          { label: "Data Management", href: "/data-management/" },
          { label: "Low Code / No Code", href: "/low-code-no-code/" },
        ],
      },
      {
        title: "AI & Data",
        links: [
          { label: "AI Suite", href: "/ai-suite/" },
          { label: "SAP Business Data Cloud", href: "/sap-business-data-cloud/" },
          { label: "Databricks", href: "/databricks/" },
          { label: "SAP Analytics Cloud", href: "/sap-analytics-cloud/" },
          { label: "SAP Datasphere", href: "/infocus/" },
        ],
      },
      {
        title: "Line of Business",
        links: [
          { label: "Accounts Payable & Receivable", href: "/accounts-payable-receivable-automation/" },
          { label: "Business Partner Automation", href: "/business-partner-automation/" },
          { label: "SAC Dashboards", href: "/sac-dashboards/" },
          { label: "Smart Budgeting & Forecasting", href: "/ohzone/" },
        ],
      },
      {
        title: "Assessments",
        links: [
          { label: "Clean Core Assessment", href: "/clean-core-assessment/" },
          { label: "Integration Assessment", href: "/integration-assessment/" },
          { label: "Analytics Assessment", href: "/infocus-readiness-assessment-for-sap-analytics/" },
          { label: "Planning Assessment", href: "/infocus-readiness-assessment-for-sap-planning/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    sections: [
      {
        title: "Assess",
        links: [
          { label: "Clean Core Assessment", href: "/clean-core-assessment/" },
          { label: "Integration Assessment", href: "/integration-assessment/" },
          { label: "Analytics Readiness", href: "/infocus-readiness-assessment-for-sap-analytics/" },
          { label: "Planning Readiness", href: "/infocus-readiness-assessment-for-sap-planning/" },
        ],
      },
      {
        title: "Migrate",
        links: [
          { label: "ECC to S/4HANA", href: "/ecc-to-s4hana/" },
          { label: "Azure Cloud Migration", href: "/azure-cloud-migration-bluesky/" },
        ],
      },
      {
        title: "Transform",
        links: [
          { label: "SAP S/4HANA", href: "/sap-s4hana/" },
          { label: "Clean Core", href: "/clean-core/" },
          { label: "SAP Integration Suite", href: "/sap-integration-suite/" },
          { label: "SAP Analytics Cloud", href: "/sap-analytics-cloud/" },
          { label: "Process Automation", href: "/process-automation/" },
          { label: "LoBE on SAP BTP", href: "/line-of-business-enhancements-on-sap-btp/" },
        ],
      },
      {
        title: "Run",
        links: [
          { label: "Application Management", href: "/application-management-services/" },
          { label: "Infrastructure Services", href: "/infrastructure-services/" },
        ],
      },
    ],
  },
  {
    label: "Products",
    sections: [
      {
        title: "Our Products",
        links: [
          { label: "EcoBridge", href: "/ecobridge/" },
          { label: "EnerBridge", href: "/enerbridge/" },
          { label: "HXM360", href: "/hxm360/" },
          { label: "InFocus", href: "/infocus/" },
          { label: "OhZone", href: "/ohzone/" },
          { label: "Orbit", href: "/orbit/" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    sections: [
      {
        title: "Industries We Serve",
        links: [
          { label: "Energy & Natural Resources", href: "/energy-and-natural-resources/" },
          { label: "Oil & Gas / Midstream", href: "/midstream-solutions/" },
          { label: "Consumer Packaged Goods", href: "/consumer-packaged-goods/" },
          { label: "Healthcare", href: "/healthcare/" },
          { label: "Aerospace & Defense", href: "/aerospace-defense/" },
          { label: "Chemicals", href: "/chemicals/" },
          { label: "Public Sector", href: "/public-sector/" },
          { label: "Retail", href: "/retail/" },
          { label: "Professional Services", href: "/professional-services/" },
          { label: "High Tech", href: "/high-tech/" },
          { label: "Agriculture", href: "/agriculture/" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    sections: [
      {
        title: "Learn",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "News", href: "/news/" },
        ],
      },
      {
        title: "Events",
        links: [
          { label: "Events", href: "/events/" },
          { label: "Webinars", href: "/webinars/" },
        ],
      },
    ],
  },
  {
    label: "Company",
    sections: [
      {
        title: "About Sierra",
        links: [
          { label: "About Us", href: "/about-us/" },
          { label: "Leadership Team", href: "/leadership-teams/" },
          { label: "Partners & Alliances", href: "/partners-and-alliances/" },
          { label: "Life at Sierra", href: "/life-at-sierra/" },
          { label: "Careers", href: "/careers/" },
          { label: "Contact Us", href: "/contact/" },
        ],
      },
    ],
  },
  {
    label: "AppHaus",
    href: "/apphaus/",
  },
];
