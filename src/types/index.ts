export interface TruckSpecs {
  id: string;
  name: string;
  capacity: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  features: string[];
  hourlyRate: number;
  dailyRate: number;
  available: boolean;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    starting: number;
    unit: string;
  };
}

export interface QuoteRequest {
  projectType: string;
  material: string;
  quantity: string;
  pickupLocation: string;
  deliveryLocation: string;
  preferredDate: string;
  duration: string;
  additionalRequirements: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  subject: string;
} 