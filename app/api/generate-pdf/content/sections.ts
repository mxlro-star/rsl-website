export interface PDFSection {
  number: number;
  title: string;
  content: (string | { type: 'list'; items: string[] } | { type: 'callout'; text: string })[];
}

export const pdfSections: PDFSection[] = [
  {
    number: 1,
    title: 'PURPOSE',
    content: [
      'This document sets out the requirements, responsibilities, and process for onboarding a residential property into the Future Social Housing framework.',
      'It is intended for landlords who have already had an initial discussion and are proceeding with onboarding.',
    ],
  },
  {
    number: 2,
    title: 'FRAMEWORK OVERVIEW',
    content: [
      'Under the Future Social Housing framework:',
      {
        type: 'list',
        items: [
          'The landlord retains full ownership of the property',
          'The property is operated within a regulated housing framework',
          'The landlord remains responsible for the property, tenants, and compliance',
          'Occupancy is structured through the Future Social Housing framework',
        ],
      },
      'The framework is designed to provide a stable, professional route for landlords operating within the social and supported housing sector.',
    ],
  },
  {
    number: 3,
    title: 'SUITABLE PROPERTIES',
    content: [
      'The framework is suitable for:',
      {
        type: 'list',
        items: [
          'Residential properties in England or Wales',
          'Properties that are vacant or becoming vacant',
          'Landlords able to meet enhanced safety and room standards',
          'Landlords operating within a regulated environment',
        ],
      },
      'It is not suitable for:',
      {
        type: 'list',
        items: [
          'Short-term or holiday lets',
          'Properties unable to meet safety or condition requirements',
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'PROPERTY STANDARDS & LICENSING',
    content: [
      'Properties must meet enhanced standards, including:',
      {
        type: 'list',
        items: [
          'Fire safety provisions',
          'Electrical safety',
          'Suitable room sizes',
          'Shared facilities where applicable',
          'Overall good condition',
        ],
      },
      {
        type: 'callout',
        text: 'Amenity Standards\n\nProperties must be configured in line with Houses in Multiple Occupation (HMO) amenity standards applicable to the local authority in which the property is situated.\n\nThis includes requirements relating to room sizes, shared facilities, fire safety provisions, and general amenity standards.\n\nWe provide guidance to landlords on meeting these standards as part of the onboarding process.\n\nWhere a property is not yet compliant, any required works are typically straightforward and, in most cases, can be completed within approximately one week, depending on the scope of works required.',
      },
      {
        type: 'callout',
        text: 'HMO Licensing Position\n\nProperties operating under the Future Social Housing framework are exempt from HMO licensing requirements.\n\nNo additional HMO licence is required where the property is operated in accordance with the framework.',
      },
    ],
  },
  {
    number: 5,
    title: 'LANDLORD RESPONSIBILITIES',
    content: [
      'The landlord remains responsible for:',
      {
        type: 'list',
        items: [
          'Ownership and legal control of the property',
          'Lettings and tenant management',
          'Property maintenance and repairs',
          'Compliance with housing and safety legislation',
          'Maintaining valid safety documentation',
          'Ongoing property standards',
        ],
      },
      'Participation in the framework does not remove or transfer statutory landlord obligations.',
    ],
  },
  {
    number: 6,
    title: 'COMPLIANCE DOCUMENTATION',
    content: [
      'A complete compliance document pack is required prior to onboarding.',
      'Core documents:',
      {
        type: 'list',
        items: [
          'Electrical Installation Condition Report (EICR)',
          'Gas Safety Certificate',
          'Fire alarm certification',
          'Emergency Lighting Completion Certificate',
          'Legionella risk assessment',
          'EPC',
          'Asbestos report',
          'Damp or condition report',
          'Fire risk assessment',
          'Lease (if applicable)',
          'Proof of ownership (title deed)',
          'Landlord insurance (for properties rented to tenants on benefits, such as housing benefits or Universal Credit)',
        ],
      },
      'All documents must be valid and current.',
    ],
  },
  {
    number: 7,
    title: 'TENANT SOURCING',
    content: [
      'Landlords remain responsible for lettings and tenant management under the framework.',
      'As part of onboarding, we provide guidance on sourcing tenants through local authority Housing Options / Housing Solutions teams, including how to engage with council referral pathways.',
      'This includes practical guidance on registration, contact points, and process expectations commonly used by local authorities when placing tenants.',
    ],
  },
  {
    number: 8,
    title: 'ONBOARDING PROCESS',
    content: [
      {
        type: 'list',
        items: [
          'Confirmation of suitability',
          'Submission of property details',
          'Compliance documentation review',
          'Framework onboarding',
          'Final confirmation',
        ],
      },
      'Onboarding may take up to four weeks, which refers to the time taken for the property to meet required standards, complete onboarding, and become fully operational with occupants.',
    ],
  },
  {
    number: 9,
    title: 'FEES',
    content: [
      'A one-off onboarding fee of £1,500 per property applies.',
      'This fee covers:',
      {
        type: 'list',
        items: [
          'Compliance review',
          'Property submission',
          'Administrative onboarding coordination',
        ],
      },
      'Payment is requested once a complete document pack has been submitted.',
    ],
  },
  {
    number: 10,
    title: 'IMPORTANT NOTICE',
    content: [
      {
        type: 'list',
        items: [
          'Submission does not guarantee acceptance',
          'Additional requirements may be requested',
          'Onboarding is subject to review',
        ],
      },
    ],
  },
  {
    number: 11,
    title: 'NEXT STEPS',
    content: [
      {
        type: 'list',
        items: [
          'Review this onboarding pack',
          'Submit property details and documentation by email',
          'Submit all compliance documentation',
          'Arrange payment of the onboarding fee',
        ],
      },
    ],
  },
];
