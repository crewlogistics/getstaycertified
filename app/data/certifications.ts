export interface Certification {
  slug: string
  title: string
  issuingBody: string
  summary: string
  description: string[]
}

export interface CertCategory {
  slug: string
  title: string
  navLabel: string
  heroTagline: string
  description: string[]
  certifications: Certification[]
}

export const categories: CertCategory[] = [
  {
    slug: 'back-office-and-finance',
    title: 'Back Office & Finance',
    navLabel: 'Back Office and Finance',
    heroTagline: 'Back Office Precision Drives Front Desk Excellence',
    description: [
      'The Back Office & Finance department is the financial nerve center of hotel operations, responsible for budgeting, accounting, payroll, procurement, and regulatory reporting.',
      'While largely invisible to guests, this area directly influences profitability, legal compliance, and operational transparency. Certifications in this domain\u2014such as Certified Hospitality Accountant Executive (CHAE), PCI-DSS compliance for secure payment processing, GAAP/IFRS training, anti-money laundering (AML), and internal controls (COSO framework)\u2014are vital for financial integrity, fraud prevention, and compliance with local and international financial regulations.',
      'Certified financial operations reduce the risk of embezzlement, tax penalties, audit failures, and data breaches. Benefits include improved investor and stakeholder confidence, smoother audits, better cash flow management, and eligibility for government contracts or public funding.',
    ],
    certifications: [
      {
        slug: 'pci-dss-compliance',
        title: 'PCI DSS Compliance',
        issuingBody: 'PCI Security Standards Council (PCI SSC)',
        summary: 'PCI DSS \u2013 Payment Card Industry Data Security Standard certifies that a hotel\u2019s card payment system is secure, encrypted, and resilient against data breaches.',
        description: [
          'The Payment Card Industry Data Security Standard (PCI DSS) certifies that a hotel\u2019s card payment system is secure, encrypted, and resilient against data breaches. It is the global baseline for financial integrity, regulatory alignment, and protecting guest transactions in hospitality environments.',
        ],
      },
      {
        slug: 'accounting-standards-training',
        title: 'IFRS/GAAP Accounting Standards',
        issuingBody: 'International Financial Reporting Standards Foundation (IFRS) and Financial Accounting Standards Board (FASB \u2013 GAAP)',
        summary: 'IFRS/GAAP training standardizes financial reporting across your hotel\u2019s global operations, empowering finance teams to ensure accuracy, transparency, and compliance.',
        description: [
          'IFRS/GAAP training standardizes financial reporting across your hotel\u2019s global operations. From budgeting to audits, this certification empowers finance teams to ensure accuracy, transparency, and compliance\u2014supporting investor confidence and operational clarity.',
        ],
      },
      {
        slug: 'financial-auditing-anti-fraud',
        title: 'Financial Auditing & Anti-Fraud (CFE)',
        issuingBody: 'Association of Certified Fraud Examiners (ACFE)',
        summary: 'The Certified Fraud Examiner (CFE) credential validates a hotel professional\u2019s ability to detect, prevent, and investigate financial misconduct.',
        description: [
          'The Certified Fraud Examiner (CFE) credential by ACFE validates a hotel professional\u2019s ability to detect, prevent, and investigate financial misconduct. It strengthens audit outcomes, enhances internal controls, and protects property assets from fraud and abuse.',
        ],
      },
      {
        slug: 'data-protection-cybersecurity',
        title: 'Data Protection & Cybersecurity',
        issuingBody: 'ISO/IEC, European Union (GDPR)',
        summary: 'ISO 27001 and GDPR certifications provide hotels with a rigorous framework for data protection, risk management, and privacy compliance.',
        description: [
          'ISO 27001 and GDPR certifications provide hotels with a rigorous framework for data protection, risk management, and privacy compliance. These standards reduce vulnerability to cyberattacks, build legal resilience, and enhance trust across digital guest and business interactions.',
        ],
      },
    ],
  },
  {
    slug: 'environmental-sustainability',
    title: 'Environmental & Sustainability',
    navLabel: 'Environmental & Sustainability',
    heroTagline: 'Future-Proof Your Hotel with Verified Sustainability Standards',
    description: [
      'The Environmental & Sustainability department reflects a hotel\u2019s commitment to responsible stewardship, operational efficiency, and alignment with global sustainability goals.',
      'As consumer demand for eco-conscious hospitality grows, certifications in this area have become essential for both brand competitiveness and regulatory compliance.',
      'At Stay Certified\u2122, we position sustainability certifications as essential for future-proofing hotel operations and demonstrating authentic leadership in an increasingly climate-conscious market.',
    ],
    certifications: [
      {
        slug: 'leed-certification',
        title: 'LEED Certification',
        issuingBody: 'U.S. Green Building Council (USGBC)',
        summary: 'LEED Certification confirms that a hotel meets stringent performance thresholds across energy, water, waste, and materials.',
        description: [
          'The LEED Certification from the U.S. Green Building Council confirms that a hotel meets stringent performance thresholds across energy, water, waste, and materials. It\u2019s the definitive global standard for sustainability in hospitality\u2014trusted by guests, brands, and regulators.',
        ],
      },
      {
        slug: 'energy-star',
        title: 'Energy Star Certification',
        issuingBody: 'U.S. Environmental Protection Agency (EPA)',
        summary: 'Energy Star Certification for Hotels validates superior energy performance and environmental responsibility.',
        description: [
          'Energy Star Certification for Hotels validates superior energy performance and environmental responsibility through EPA standards.',
        ],
      },
      {
        slug: 'iso-14001',
        title: 'ISO 14001 Environmental Management',
        issuingBody: 'International Organization for Standardization (ISO)',
        summary: 'ISO 14001 Environmental Management Systems (EMS) provides a framework for environmental stewardship in hotel operations.',
        description: [
          'ISO 14001 Environmental Management Systems (EMS) provides hotels with a comprehensive framework for managing environmental responsibilities systematically and sustainably.',
        ],
      },
      {
        slug: 'green-key-global',
        title: 'Green Key Global Sustainable Tourism',
        issuingBody: 'Foundation for Environmental Education (FEE)',
        summary: 'Green Key Global Sustainable Tourism Certification recognizes hotels committed to sustainable operations.',
        description: [
          'Green Key Global Sustainable Tourism Certification recognizes hotels committed to improving environmental practices through comprehensive sustainability benchmarks.',
        ],
      },
      {
        slug: 'true-zero-waste',
        title: 'TRUE Zero Waste Certification',
        issuingBody: 'Green Business Certification Inc. (GBCI)',
        summary: 'TRUE Zero Waste Certification validates a hotel\u2019s commitment to eliminating waste through sustainable practices.',
        description: [
          'TRUE Zero Waste Certification validates a hotel\u2019s commitment to eliminating waste through sustainable practices, resource recovery, and circular economy principles.',
        ],
      },
      {
        slug: 'food-waste-composting',
        title: 'Food Waste & Composting Compliance',
        issuingBody: 'U.S. Environmental Protection Agency (EPA)',
        summary: 'EPA food waste and composting compliance certifies hotels in sustainable organic waste management.',
        description: [
          'EPA food waste and composting compliance certifies hotels in sustainable organic waste management, reducing landfill contributions and supporting circular hospitality operations.',
        ],
      },
    ],
  },
  {
    slug: 'fire-life-safety',
    title: 'Fire, Life & Safety',
    navLabel: 'Fire, Life and Safety',
    heroTagline: 'Emergency-Ready Teams Save Lives\u2014and Reputations',
    description: [
      'The Fire, Life & Safety department is the cornerstone of a hotel\u2019s risk management strategy, responsible for protecting lives, property, and regulatory standing.',
      'This area encompasses fire prevention systems, emergency evacuation protocols, life-saving equipment, and hazard communication standards\u2014all of which are governed by strict local and international codes.',
      'At Stay Certified\u2122, we highlight Fire, Life & Safety certifications as non-negotiable pillars of operational integrity, crisis readiness, and long-term hotel viability.',
    ],
    certifications: [
      {
        slug: 'fire-safety-extinguisher-training',
        title: 'NFPA Fire Safety & Extinguisher Training',
        issuingBody: 'NFPA (National Fire Protection Association)',
        summary: 'NFPA Fire Safety Training prepares hotel personnel to prevent fires, handle extinguishers correctly, and execute life-saving evacuations.',
        description: [
          'NFPA Fire Safety Training equips hotel staff with the skills to prevent, contain, and respond to fire emergencies using extinguishers, alarms, and evacuation plans. It protects lives, complies with law, and reinforces operational trust.',
        ],
      },
      {
        slug: 'emergency-evacuation-planning',
        title: 'Emergency Evacuation Planning (FEMA)',
        issuingBody: 'NFPA, Local Fire Marshal',
        summary: 'FEMA Emergency Evacuation Planning certification ensures hotel personnel are trained in structured, role-specific evacuation protocols.',
        description: [
          'Emergency Evacuation Planning certification from FEMA ensures hotel personnel are trained in structured, role-specific evacuation protocols for fire, earthquake, or other disasters. This training reduces panic, saves lives, and fulfills compliance obligations.',
        ],
      },
      {
        slug: 'first-aid-training',
        title: 'Red Cross First Aid Training',
        issuingBody: 'American Red Cross, American Heart Association (AHA)',
        summary: 'Red Cross First Aid training prepares hotel employees to respond to on-site medical crises.',
        description: [
          'First Aid & AED Training by the Red Cross and AHA prepares hotel employees to respond to on-site medical crises like cuts, burns, falls, allergic reactions, and cardiac arrest.',
        ],
      },
      {
        slug: 'elevator-escalator',
        title: 'ASME Elevator & Escalator Certification',
        issuingBody: 'ASME (American Society of Mechanical Engineers)',
        summary: 'ASME A17.1-compliant elevator certification verifies that elevators and escalators meet safety engineering and accessibility protocols.',
        description: [
          'ASME A17.1-compliant elevator certification is a regulatory cornerstone in hotel operations. It verifies that elevators and escalators meet safety engineering, accessibility, and emergency protocols through certified inspections and recurring audits.',
        ],
      },
      {
        slug: 'boiler-pressure-vessel',
        title: 'ASME Boiler & Pressure Vessel',
        issuingBody: 'ASME, National Board of Boiler and Pressure Vessel Inspectors',
        summary: 'ASME Boiler Certification is mandatory for hotels operating pressure systems for hot water, heating, or laundry.',
        description: [
          'ASME Boiler Certification is mandatory for hotels operating pressure systems for hot water, heating, or laundry. It guarantees the safe operation of boilers and pressure vessels, protecting staff, guests, and infrastructure.',
        ],
      },
      {
        slug: 'workplace-violence-prevention',
        title: 'OSHA Workplace Violence Prevention',
        issuingBody: 'Occupational Safety and Health Administration (OSHA)',
        summary: 'OSHA\u2019s Workplace Violence Prevention Certification empowers staff to identify risk factors and apply de-escalation tactics.',
        description: [
          'OSHA\u2019s Workplace Violence Prevention Certification empowers staff to identify risk factors, apply de-escalation tactics, and implement safe reporting protocols, creating a psychologically secure environment for all.',
        ],
      },
      {
        slug: 'fire-suppression-system',
        title: 'NFPA 96 Kitchen Fire Suppression',
        issuingBody: 'National Fire Protection Association (NFPA)',
        summary: 'NFPA 96 compliance certifies commercial kitchen fire suppression systems for hotel food service operations.',
        description: [
          'NFPA 96 Compliance certifies commercial kitchen fire suppression systems, ensuring hotel food service operations meet critical fire safety standards.',
        ],
      },
    ],
  },
  {
    slug: 'fitness-spa-wellness',
    title: 'Fitness, Spa & Wellness',
    navLabel: 'Fitness, Spa & Wellness',
    heroTagline: 'Luxury Begins Where Wellness is Certified',
    description: [
      'The Fitness, Spa & Wellness department is a high-touch, high-expectation area that directly affects a hotel\u2019s luxury appeal, guest satisfaction, and risk exposure.',
      'These facilities involve close personal contact, shared equipment, water systems, and potential exposure to biological, chemical, and environmental hazards.',
      'On StayCertified\u2122, we recognize that wellness is not just a service offering\u2014it\u2019s a critical pillar of hotel health, safety, and reputational value.',
    ],
    certifications: [
      {
        slug: 'fitness-equipment-safety',
        title: 'ASTM Fitness Equipment Safety',
        issuingBody: 'ASTM International',
        summary: 'ASTM Equipment Safety certification confirms hotel fitness centers meet internationally recognized safety and maintenance standards.',
        description: [
          'ASTM Equipment Safety certification confirms that hotel fitness centers meet internationally recognized safety and maintenance standards for exercise equipment.',
        ],
      },
      {
        slug: 'spa-hygiene-infection-control',
        title: 'ISPA Spa Hygiene & Infection Control',
        issuingBody: 'International Spa Association (ISPA)',
        summary: 'ISPA Certification ensures spa hygiene, safety, and regulatory compliance for hotel wellness operations.',
        description: [
          'ISPA Certification covers spa hygiene, safety, and regulatory compliance for hotel wellness operations, ensuring guest protection and staff safety.',
        ],
      },
      {
        slug: 'pool-hot-tub-water-quality',
        title: 'CDC MAHC Pool & Hot Tub Water Quality',
        issuingBody: 'CDC Model Aquatic Health Code',
        summary: 'CDC MAHC Compliance ensures water quality assurance for hotel pools and spas.',
        description: [
          'CDC MAHC Compliance provides water quality assurance for pools and spas, ensuring guest safety and regulatory adherence.',
        ],
      },
      {
        slug: 'sauna-steam-room-maintenance',
        title: 'Sauna & Steam Room Safety',
        issuingBody: 'UL/CSA Standards',
        summary: 'UL/CSA electrical and thermal safety compliance for hotel steam and sauna rooms.',
        description: [
          'Electrical & thermal safety compliance for steam and sauna rooms, ensuring guest safety through proper installation, maintenance, and inspection protocols.',
        ],
      },
      {
        slug: 'first-aid-cpr-aed',
        title: 'First Aid, CPR & AED Training',
        issuingBody: 'American Red Cross, American Heart Association (AHA)',
        summary: 'Red Cross/AHA CPR Certification for emergency response in hotel wellness facilities.',
        description: [
          'Red Cross/AHA CPR Certification provides verified emergency response capability for hotel wellness and fitness staff.',
        ],
      },
      {
        slug: 'massage-therapy-licensing',
        title: 'Massage Therapy Licensing',
        issuingBody: 'State Board of Cosmetology & Massage Therapy',
        summary: 'Licensure by a state or regional massage therapy board is a legal requirement for any hotel providing massage or esthetic services.',
        description: [
          'Licensure by a state or regional massage therapy board is a legal requirement for any hotel providing massage or esthetic services. It ensures therapists meet educational, ethical, and hygiene standards.',
        ],
      },
    ],
  },
  {
    slug: 'food-and-beverage',
    title: 'Food and Beverage',
    navLabel: 'Food and Beverage',
    heroTagline: 'Safe Food. Trusted Service. Certified Standards.',
    description: [
      'The Food and Beverage department is one of the most regulated areas of hotel operations, directly impacting guest health, safety, and satisfaction.',
      'Certifications in this domain\u2014from food handler permits to HACCP systems and allergen management\u2014are essential for legal compliance, liability protection, and operational excellence.',
      'At StayCertified\u2122, we ensure your F&B certifications are organized, current, and audit-ready at all times.',
    ],
    certifications: [
      {
        slug: 'servsafe-haccp-iso-22000',
        title: 'ServSafe, HACCP & ISO 22000',
        issuingBody: 'ServSafe, HACCP, ISO 22000',
        summary: 'Global standards for food safety in hospitality\u2014from preparation to service.',
        description: [
          'ServSafe, HACCP & ISO 22000 certifications provide global standards for food safety in hospitality, covering preparation, storage, and service protocols.',
        ],
      },
      {
        slug: 'health-department-kitchen',
        title: 'Health Department Kitchen Certification',
        issuingBody: 'Local/Municipal Health Departments',
        summary: 'Your legal license to serve food safely\u2014certified by local health authorities.',
        description: [
          'Health Department Kitchen Certification is your legal license to serve food safely, issued through local health authority inspections and compliance verification.',
        ],
      },
      {
        slug: 'allergen-awareness-training',
        title: 'Allergen Awareness Training',
        issuingBody: 'FARE (Food Allergy Research & Education), MenuTrinfo',
        summary: 'Certifies that hotel F&B teams can identify allergenic ingredients, prevent cross-contact, and communicate clearly with guests.',
        description: [
          'Allergen Awareness Training certifies that hotel F&B teams can identify allergenic ingredients, prevent cross-contact, and communicate clearly with guests about food risks.',
        ],
      },
      {
        slug: 'alcohol-service',
        title: 'TIPS Alcohol Service Certification',
        issuingBody: 'Health Communications, Inc. (HCI)',
        summary: 'TIPS Certification ensures hotel food and beverage staff are trained in the responsible service of alcohol.',
        description: [
          'TIPS Certification ensures hotel food and beverage staff are trained in the responsible service of alcohol\u2014mitigating legal, safety, and reputational risks.',
        ],
      },
      {
        slug: 'halal-kosher-kitchen',
        title: 'Halal & Kosher Kitchen Compliance',
        issuingBody: 'IFANCA, Orthodox Union (OU), regional authorities',
        summary: 'Ensures hotel food handling, ingredients, and preparation comply with Islamic and Jewish dietary laws.',
        description: [
          'Halal and Kosher certifications ensure that a hotel\u2019s food handling, ingredients, sourcing, and preparation are compliant with Islamic and Jewish dietary laws, enhancing guest inclusion and cultural respect.',
        ],
      },
      {
        slug: 'pest-control',
        title: 'Pest Control Certification',
        issuingBody: 'State/Local Health Department, Certified Pest Management Agencies',
        summary: 'Required licensing for safe and compliant hotel kitchens.',
        description: [
          'Pest Control Certification provides required licensing for safe and compliant kitchens, ensuring food preparation areas meet health and safety standards.',
        ],
      },
    ],
  },
  {
    slug: 'front-desk-concierge',
    title: 'Front Desk / Concierge',
    navLabel: 'Front Desk / Concierge',
    heroTagline: 'Certified Guest Service is the Mark of a Trusted Brand',
    description: [
      'As the primary point of contact for check-ins, complaints, and inquiries, this department must operate with precision, discretion, and compliance.',
      'Certified front desk operations lead to improved guest satisfaction scores, reduced risk of fraud, stronger compliance with legal and financial standards, and more empowered staff.',
    ],
    certifications: [
      {
        slug: 'customer-service',
        title: 'Forbes / AAA Guest Service Training',
        issuingBody: 'Forbes Travel Guide, AAA Diamond Program',
        summary: 'Gold-standard hospitality techniques, from personalized greetings to recovery scripting.',
        description: [
          'Forbes Travel Guide and AAA Diamond service training equips hotel teams with gold-standard hospitality techniques, from personalized greetings to recovery scripting.',
        ],
      },
      {
        slug: 'data-privacy-pci-compliance',
        title: 'PCI + GDPR + CCPA Data Privacy',
        issuingBody: 'PCI Security Standards Council, EU (GDPR), California (CCPA)',
        summary: 'Certified guest data security for front desk and admin roles.',
        description: [
          'Certified PCI/GDPR/CCPA compliance equips hotel front-desk and admin teams to process payments securely, protect guest data, and manage consent responsibly.',
        ],
      },
      {
        slug: 'language-proficiency',
        title: 'Language Proficiency Certification',
        issuingBody: 'ACTFL, CEFR, ILR',
        summary: 'Verifies that hotel staff possess communication skills to interact with guests in non-native languages.',
        description: [
          'Language Proficiency Certification verifies that hotel staff possess the communication skills necessary to interact with guests in non-native languages at a certified proficiency level.',
        ],
      },
      {
        slug: 'code-of-conduct-anti-trafficking',
        title: 'The Code \u2013 Anti-Trafficking Compliance',
        issuingBody: 'ECPAT International',
        summary: 'A voluntary set of industry-supported actions that train hotel staff to prevent child sex trafficking in hospitality.',
        description: [
          'The Code is a voluntary set of industry-supported actions that train hotel staff to prevent child sex trafficking in hospitality. By signing and complying, hotels take an auditable stand against exploitation.',
        ],
      },
    ],
  },
  {
    slug: 'housekeeping',
    title: 'Guest Rooms & Housekeeping',
    navLabel: 'Housekeeping',
    heroTagline: 'Standards that Safeguard. Hygiene. Safety. Reputation.',
    description: [
      'Guest Rooms & Housekeeping blockchain certifications protect guests and staff, boost ratings, and secure contracts.',
      'StayCertified\u2122 showcases the standards that safeguard hygiene, safety, and your hotel\u2019s reputation.',
      'For hotels operating in high-traffic, luxury, or government-regulated environments, certification is critical for operational legitimacy, contract eligibility, and the prevention of hazardous or unsanitary conditions.',
    ],
    certifications: [
      {
        slug: 'gbac-star',
        title: 'GBAC STAR Accreditation',
        issuingBody: 'Global Biorisk Advisory Council (GBAC), a division of ISSA',
        summary: 'Verified cleaning, disinfection, and infectious disease prevention for hotel operations.',
        description: [
          'GBAC STAR accreditation verifies that a hotel has implemented comprehensive cleaning, disinfection, and infectious disease prevention protocols.',
        ],
      },
      {
        slug: 'issa-cims-gb',
        title: 'ISSA CIMS-GB Green Building Certification',
        issuingBody: 'ISSA \u2013 The Worldwide Cleaning Industry Association',
        summary: 'The green standard for cleaning industry management in hotel operations.',
        description: [
          'Cleaning Industry Management Standard \u2013 Green Building (CIMS-GB) Certification establishes the green standard for professional cleaning operations in hotels.',
        ],
      },
      {
        slug: 'osha-hazard-communication',
        title: 'OSHA Hazard Communication (HAZCOM)',
        issuingBody: 'Occupational Safety and Health Administration (OSHA)',
        summary: 'OSHA Hazard Communication Standard ensures safe handling of chemicals in hotel housekeeping.',
        description: [
          'OSHA Hazard Communication Standard (HAZCOM) ensures safe handling, storage, and communication of chemical hazards in hotel housekeeping operations.',
        ],
      },
      {
        slug: 'npma-bed-bug-training',
        title: 'NPMA Bed Bug Prevention Training',
        issuingBody: 'National Pest Management Association (NPMA)',
        summary: 'Verified bed bug identification, prevention, and response training for hotel staff.',
        description: [
          'NPMA bed bug prevention training certifies hotel housekeeping staff in identification, prevention, and response protocols for bed bug infestations.',
        ],
      },
    ],
  },
  {
    slug: 'hr-security-ops',
    title: 'HR / Security / Ops',
    navLabel: 'HR / Security / Ops',
    heroTagline: 'From Background Checks to Crisis Protocols\u2014Certify What Matters',
    description: [
      'The HR, Security & Operations department forms the operational and ethical core of any hotel, overseeing workforce management, guest protection, and regulatory compliance across all departments.',
      'Certified operations in HR and security ensure lawful hiring practices, safe working conditions, rapid incident response, and protection against fraud, discrimination, and cyber threats.',
      'At StayCertified\u2122, we position HR, Security & Operations certifications as the invisible architecture that supports trust, resilience, and long-term success across the entire hotel ecosystem.',
    ],
    certifications: [
      {
        slug: 'background-screening',
        title: 'NAPBS/FCRA Background Screening',
        issuingBody: 'NAPBS (now PBSA), Fair Credit Reporting Act (FCRA)',
        summary: 'NAPBS/FCRA-compliant background screening for safe and lawful hotel hiring.',
        description: [
          'NAPBS/FCRA-Compliant Background Screening ensures safe and lawful hotel hiring practices through standardized verification protocols.',
        ],
      },
      {
        slug: 'child-protection-training',
        title: 'ECPAT Child Protection Training',
        issuingBody: 'ECPAT International',
        summary: 'Training in identification of high-risk behaviors, guest-minor interactions, and legal reporting channels.',
        description: [
          'Child Protection Training covers identification of high-risk behaviors, guest\u2013minor interactions, suspicious booking patterns, staff intervention procedures, and legal reporting channels.',
        ],
      },
      {
        slug: 'kyc-anti-money-laundering',
        title: 'AML/KYC Compliance Training',
        issuingBody: 'Various regulatory bodies',
        summary: 'Empowers hotel staff to detect suspicious activity, verify identities, and prevent misuse of hospitality assets for money laundering.',
        description: [
          'AML/KYC training empowers hotel staff to detect suspicious activity, verify identities, and prevent misuse of hospitality assets for money laundering.',
        ],
      },
      {
        slug: 'security-officer-licensing',
        title: 'Licensed Security Officer Certification',
        issuingBody: 'State licensing authorities',
        summary: 'Licensed Security Officer Certification for hotel security personnel.',
        description: [
          'Licensed Security Officer Certification ensures hotel security personnel meet legal requirements for guest and property protection.',
        ],
      },
      {
        slug: 'workplace-harassment-prevention',
        title: 'EEOC Workplace Harassment Prevention',
        issuingBody: 'U.S. Equal Employment Opportunity Commission (EEOC)',
        summary: 'EEOC Workplace Harassment Prevention Training for hotel staff.',
        description: [
          'EEOC Workplace Harassment Prevention Training certifies hotel staff in recognizing, preventing, and responding to workplace harassment.',
        ],
      },
      {
        slug: 'osha-workplace-safety',
        title: 'OSHA/NEBOSH/IOSH Workplace Safety',
        issuingBody: 'OSHA, NEBOSH, IOSH',
        summary: 'Comprehensive workplace safety certification covering hazard identification, risk assessment, and compliance.',
        description: [
          'OSHA/NEBOSH/IOSH Workplace Safety Certification provides comprehensive training in hazard identification, risk assessment, and regulatory compliance for hotel operations.',
        ],
      },
    ],
  },
  {
    slug: 'laundry-and-linen-services',
    title: 'Laundry & Linen Services',
    navLabel: 'Laundry and Linen Services',
    heroTagline: 'Beyond Clean: Laundry that Meets Standards',
    description: [
      'The Laundry & Linen Services department is a critical behind-the-scenes operation that directly supports hygiene, guest comfort, and infection control across the entire hotel.',
      'From bedding and towels to staff uniforms and dining linens, every item processed must meet strict cleanliness and handling standards.',
      'At StayCertified\u2122 we emphasize laundry certification as a foundational element of hotel hygiene infrastructure and operational excellence.',
    ],
    certifications: [
      {
        slug: 'trsa-hygienically-clean',
        title: 'TRSA Hygienically Clean Certification',
        issuingBody: 'Textile Rental Services Association (TRSA)',
        summary: 'Validates that a hotel\u2019s laundry services follow strict, medically verified standards for cleaning, disinfection, and contamination control.',
        description: [
          'The TRSA Hygienically Clean Certification validates that a hotel\u2019s laundry services follow strict, medically verified standards for cleaning, disinfection, and contamination control.',
        ],
      },
      {
        slug: 'chemical-handling-safety',
        title: 'Chemical Handling Safety Training',
        issuingBody: 'OSHA (U.S.), WHMIS (Canada)',
        summary: 'Chemical safety training for industrial laundry chemical compliance.',
        description: [
          'Chemical Safety Training ensures hotel laundry staff can safely handle, store, and dispose of industrial chemicals used in linen processing.',
        ],
      },
      {
        slug: 'water-energy-efficiency',
        title: 'EPA WaterSense Certification',
        issuingBody: 'U.S. Environmental Protection Agency (EPA)',
        summary: 'EPA WaterSense Certification for water-smart laundry operations in sustainable hotels.',
        description: [
          'EPA WaterSense Certification validates water-efficient laundry operations, supporting sustainable hotel practices and reducing utility costs.',
        ],
      },
    ],
  },
  {
    slug: 'maintenance-and-engineering',
    title: 'Maintenance & Engineering',
    navLabel: 'Maintenance and Engineering',
    heroTagline: 'Prevent Breakdowns Before They Happen\u2014Certify Maintenance',
    description: [
      'The Maintenance & Engineering department is the backbone of hotel infrastructure, ensuring that all physical systems\u2014from HVAC and plumbing to elevators and electrical\u2014function safely, efficiently, and in compliance with building codes.',
      'Certified maintenance operations help prevent equipment failures, energy waste, workplace accidents, and costly emergency repairs.',
      'At StayCertified\u2122, we spotlight Maintenance & Engineering certifications as essential safeguards that ensure every system behind the scenes supports safety, comfort, and uninterrupted guest satisfaction.',
    ],
    certifications: [
      {
        slug: 'state-electrical-license',
        title: 'State Electrical License',
        issuingBody: 'State Licensing Boards & National Electrical Code (NEC)',
        summary: 'Ensures hotel engineers and electricians meet the highest safety standards when managing electrical systems.',
        description: [
          'The State Electrical License ensures hotel engineers and electricians meet the highest safety standards when managing electrical systems. It validates their ability to perform code-compliant work under NEC regulations.',
        ],
      },
      {
        slug: 'epa-section-608-hvac',
        title: 'EPA Section 608 HVAC Certification',
        issuingBody: 'U.S. Environmental Protection Agency (EPA)',
        summary: 'EPA Section 608 HVAC Certification for refrigerant handling and climate system compliance.',
        description: [
          'EPA Section 608 HVAC Certification validates proper refrigerant handling and HVAC system maintenance in compliance with the Clean Air Act.',
        ],
      },
      {
        slug: 'epa-ahera-mold-asbestos',
        title: 'EPA AHERA/IICRC Mold & Asbestos Awareness',
        issuingBody: 'U.S. EPA, IICRC',
        summary: 'Mold and asbestos awareness certification for hotel maintenance staff.',
        description: [
          'EPA AHERA/IICRC Mold & Asbestos Awareness Certification ensures hotel maintenance staff can identify, manage, and report mold and asbestos hazards safely.',
        ],
      },
      {
        slug: 'osha-confined-space-ladder',
        title: 'OSHA Confined Space & Ladder Safety',
        issuingBody: 'OSHA',
        summary: 'OSHA Confined Space & Ladder Safety Certification for hotel engineering teams.',
        description: [
          'OSHA Confined Space & Ladder Safety Certification trains hotel engineering teams in safe access procedures for confined areas and elevated work.',
        ],
      },
      {
        slug: 'ashrae-188-legionella',
        title: 'ASHRAE 188 Legionella Water Safety',
        issuingBody: 'ASHRAE, CDC, ANSI',
        summary: 'ASHRAE 188 Legionella Water Safety Plan for hotel water system compliance.',
        description: [
          'ASHRAE 188 Legionella Water Safety Plan certification ensures hotel water systems are managed to prevent Legionella bacteria growth and waterborne disease outbreaks.',
        ],
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): CertCategory | undefined {
  return categories.find(c => c.slug === slug)
}

export function getCertBySlug(slug: string): { cert: Certification, category: CertCategory } | undefined {
  for (const cat of categories) {
    const cert = cat.certifications.find(c => c.slug === slug)
    if (cert) return { cert, category: cat }
  }
  return undefined
}
