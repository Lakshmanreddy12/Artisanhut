export type Language = 'en' | 'hi' | 'kn' | 'te';

export type ProductCategory = 'all' | 'furniture' | 'handicraft' | 'textile' | 'brass_cane';

export type WoodType = 'all' | 'sheesham' | 'teak' | 'mango' | 'ivorywood';

export interface Product {
  id: number;
  title: string;
  category: 'furniture' | 'handicraft' | 'textile' | 'brass_cane';
  woodType?: 'sheesham' | 'teak' | 'mango' | 'ivorywood' | 'none';
  price: number;
  originalPrice: number;
  artisan: string;
  artisanRole: string;
  village: string;
  state: string;
  specs: string;
  dimensions: string;
  weightKg: number;
  woodMoisture: string;
  certification: string;
  heavyFreight: boolean;
  freightPartner: string;
  img: string;
  artisanAvatar?: string;
  description: string;
  inStock: number;
  leadTimeDays: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomOrderRequest {
  id: string;
  customerName: string;
  customerPhone: string;
  city: string;
  category: string;
  woodType: string;
  finish: string;
  lengthFt: number;
  widthFt: number;
  heightFt: number;
  notes: string;
  estimatedPrice: number;
  referenceImage?: string;
  createdAt: string;
}

export interface SathiListingDraft {
  artisanName: string;
  village: string;
  contactNumber: string;
  itemName: string;
  woodType: string;
  craftCategory: string;
  expectedPrice: number;
  voiceTranscript?: string;
  recordedAudioUrl?: string;
  weightKg: number;
  freightType: 'courier' | 'heavy_porter';
  sathiName: string;
  sathiCscId: string;
}

export interface StartupPartner {
  id: string;
  name: string;
  tagline: string;
  role: string;
  icon: string;
  description: string;
  metrics: string;
}
