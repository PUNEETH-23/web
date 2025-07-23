export interface Material {
  id: string;
  name: string;
  description: string;
  uses: string[];
  image: string;
  price?: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  materialInterest?: string;
  createdAt: Date;
  read: boolean;
}

export interface User {
  id: string;
  username: string;
  role: 'admin';
}

export interface Company {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  mapLocation: {
    lat: number;
    lng: number;
  };
}