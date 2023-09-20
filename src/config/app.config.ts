interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelance profile',
    'Apply for jobs',
    'Update application status',
    'View job details',
  ],
  ownerAbilities: [
    'Manage country information',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ec2b2ad8-6121-4d67-89dd-95310312270e',
};
