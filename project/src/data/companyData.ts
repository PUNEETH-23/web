import { Company } from '../types';

export const companyInfo: Company = {
  name: 'Puneeth Stone Crushers',
  description: 'Puneeth Stone Crushers is a leading provider of high-quality building stone materials for construction and landscaping projects. With over 5 years of experience in the industry, we specialize in producing a wide range of stone products including crushed stone, gravel, sand, and decorative stone. Our state-of-the-art crushing facility ensures consistent quality and timely delivery to meet your project needs.',
  address: '61/8 61/9, 61/10 & 61/11, Makhenhalli Village, Sira Taluk, Tumkur District, Karnataka 572137',
  phone: '+91 9448483596',
  email: 'muddappa.mk@gmail.com',
  workingHours: 'Monday to Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 12:00 PM',
  mapLocation: {
    lat: 37.7749,
    lng: -122.4194
  }
};

// In a real application, you would have functions to update this information
export const updateCompanyInfo = (newInfo: Partial<Company>): Company => {
  Object.assign(companyInfo, newInfo);
  return companyInfo;
};