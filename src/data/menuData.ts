export interface MenuItem {
  id: number;
  nameEn: string;
  nameMr: string;
  descEn: string;
  descMr: string;
  price: number;
  image: string;
  fallbackImage?: string;
  category: 'chaat' | 'juice';
  tag?: { en: string; mr: string };
}

import bhelImage from '@/assets/food-bhel.jpg';
import paniPuriImage from '@/assets/food-panipuri.jpg';
import dahiPuriImage from '@/assets/food-dahipuri.jpg';
import ragdaImage from '@/assets/food-ragda.jpg';
import sevPuriImage from '@/assets/food-sevpuri.jpg';
import cheeseDabeliImage from '@/assets/food-dabeli.jpg';

const getFallbackImageForItem = (itemName: string) => {
  const name = itemName.toLowerCase();

  if (name.includes('dabeli')) return cheeseDabeliImage;
  if (name.includes('ragda')) return ragdaImage;
  if (name.includes('pani puri')) return paniPuriImage;
  if (name.includes('dahi puri')) return dahiPuriImage;
  if (name.includes('sev puri') || name.includes('chura puri')) return sevPuriImage;
  if (name.includes('dahi bhel')) return dahiPuriImage;
  if (name.includes('bhel') || name.includes('bhelpuri')) return bhelImage;

  return bhelImage;
};

const menuItemImageFiles: Record<string, string> = {
  'Bhel': 'bhel.jpeg',
  'Sukhi Bhel': 'bhelpuri.jpeg',
  'Cheese Bhel': 'Cheese Farsan Bhel.jpg',
  'Special Bhel': 'bhel.jpeg',
  'Farsan Bhel': 'bhelpuri.jpeg',
  'Cheese Farsan Bhel': 'Cheese Farsan Bhel.jpg',
  'Dahi Bhel': 'Dahi Bhel.jpg',
  'Bhelpuri': 'bhelpuri.jpeg',
  'Chura Puri': 'Chura Puri.jpg',
  'Pani Puri': 'panipuri .jpeg',
  'Sev Puri': 'Sev Puri.jpg',
  'Dahi Puri': 'dahipuri .jpeg',
  'Dahi Sev Puri': 'Dahi Sev Puri.jpg',
  'Cheese Sukhi Puri': 'Cheese Sukhi Puri.jpg',
  'Cheese Pani Puri': 'panipuri .jpeg',
  'Cheese Dahi Puri': 'dahipuri .jpeg',
  'Cheese Sev Puri': 'Cheese Sev Puri.jpg',
  'Ragda': 'ragda.jpeg',
  'Cheese Ragda': 'Cheese Ragda.jpg',
  'Dabeli': 'Cheese Dabeli.jpg',
  'Cheese Dabeli': 'Cheese Dabeli.jpg',
  'Mayonnaise Dabeli': 'Mayonnaise Dabeli.jpg',
  'Tandoori Mayonnaise Dabeli': 'Mayonnaise Dabeli.jpg',
};

const resolveMenuImageFromFolder = (itemName: string) => {
  const fileName = menuItemImageFiles[itemName];
  if (!fileName) return '';
  return new URL(`../../rudra-chat-center-kameri-main/images of meanue item/${fileName}`, import.meta.url).href;
};

const getItemImage = (itemName: string, fallbackImage: string) => {
  const menuImage = resolveMenuImageFromFolder(itemName);
  return {
    image: menuImage || fallbackImage,
    fallbackImage,
  };
};

export const chaatItems: MenuItem[] = [
  {
    id: 1, nameEn: 'Bhel', nameMr: 'भेळ',
    descEn: 'Classic bhel from the uploaded menu board',
    descMr: 'अपलोड केलेल्या मेनू बोर्डमधील क्लासिक भेळ',
    price: 35, ...getItemImage('Bhel', getFallbackImageForItem('Bhel')), category: 'chaat',
  },
  {
    id: 2, nameEn: 'Sukhi Bhel', nameMr: 'सुखी भेळ',
    descEn: 'Dry-style bhel from the board',
    descMr: 'बोर्डवरील ड्राय-स्टाईल भेळ',
    price: 35, ...getItemImage('Sukhi Bhel', getFallbackImageForItem('Sukhi Bhel')), category: 'chaat',
  },
  {
    id: 3, nameEn: 'Cheese Bhel', nameMr: 'चीज भेळ',
    descEn: 'Cheese-topped bhel from the board',
    descMr: 'बोर्डवरील चीज टॉपिंगसह भेळ',
    price: 60, ...getItemImage('Cheese Bhel', getFallbackImageForItem('Cheese Bhel')), category: 'chaat',
  },
  {
    id: 4, nameEn: 'Special Bhel', nameMr: 'स्पे भेळ',
    descEn: 'Special bhel as listed on the uploaded board',
    descMr: 'अपलोड केलेल्या बोर्डवर दाखवलेली स्पेशल भेळ',
    price: 50, ...getItemImage('Special Bhel', getFallbackImageForItem('Special Bhel')), category: 'chaat',
  },
  {
    id: 5, nameEn: 'Farsan Bhel', nameMr: 'फरसाणा भेळ',
    descEn: 'Farsan bhel from the board',
    descMr: 'बोर्डवरील फरसाण भेळ',
    price: 60, ...getItemImage('Farsan Bhel', getFallbackImageForItem('Farsan Bhel')), category: 'chaat',
  },
  {
    id: 6, nameEn: 'Cheese Farsan Bhel', nameMr: 'चीज फरसाणा भेळ',
    descEn: 'Farsan bhel with cheese topping',
    descMr: 'चीज टॉपिंगसह फरसाण भेळ',
    price: 70, ...getItemImage('Cheese Farsan Bhel', getFallbackImageForItem('Cheese Farsan Bhel')), category: 'chaat',
  },
  {
    id: 7, nameEn: 'Dahi Bhel', nameMr: 'दही भेळ',
    descEn: 'Bhel with yogurt and chutneys',
    descMr: 'दही आणि चटण्यांसह भेळ',
    price: 50, ...getItemImage('Dahi Bhel', getFallbackImageForItem('Dahi Bhel')), category: 'chaat',
  },
  {
    id: 8, nameEn: 'Bhelpuri', nameMr: 'भेलपुरी',
    descEn: 'Bhelpuri from the board',
    descMr: 'बोर्डवरील भेलपुरी',
    price: 70, ...getItemImage('Bhelpuri', getFallbackImageForItem('Bhelpuri')), category: 'chaat',
  },
  {
    id: 9, nameEn: 'Chura Puri', nameMr: 'चुरापुरी',
    descEn: 'Chura puri from the board',
    descMr: 'बोर्डवरील चुरापुरी',
    price: 35, ...getItemImage('Chura Puri', getFallbackImageForItem('Chura Puri')), category: 'chaat',
  },
  {
    id: 10, nameEn: 'Pani Puri', nameMr: 'पाणीपुरी',
    descEn: 'Pani puri from the board',
    descMr: 'बोर्डवरील पाणीपुरी',
    price: 25, ...getItemImage('Pani Puri', getFallbackImageForItem('Pani Puri')), category: 'chaat',
    tag: { en: '🔥 Bestseller', mr: '🔥 बेस्टसेलर' },
  },
  {
    id: 11, nameEn: 'Sev Puri', nameMr: 'शेवपुरी',
    descEn: 'Sev puri from the board',
    descMr: 'बोर्डवरील शेवपुरी',
    price: 40, ...getItemImage('Sev Puri', getFallbackImageForItem('Sev Puri')), category: 'chaat',
  },
  {
    id: 12, nameEn: 'Dahi Puri', nameMr: 'दहीपुरी',
    descEn: 'Dahi puri from the board',
    descMr: 'बोर्डवरील दहीपुरी',
    price: 40, ...getItemImage('Dahi Puri', getFallbackImageForItem('Dahi Puri')), category: 'chaat',
  },
  {
    id: 13, nameEn: 'Dahi Sev Puri', nameMr: 'दही शेवपुरी',
    descEn: 'Dahi sev puri from the board',
    descMr: 'बोर्डवरील दही शेवपुरी',
    price: 50, ...getItemImage('Dahi Sev Puri', getFallbackImageForItem('Dahi Sev Puri')), category: 'chaat',
  },
  {
    id: 14, nameEn: 'Cheese Sukhi Puri', nameMr: 'चीज सुकिपुरी',
    descEn: 'Cheese sukhi puri from the board',
    descMr: 'बोर्डवरील चीज सुकिपुरी',
    price: 40, ...getItemImage('Cheese Sukhi Puri', getFallbackImageForItem('Cheese Sukhi Puri')), category: 'chaat',
  },
  {
    id: 15, nameEn: 'Cheese Pani Puri', nameMr: 'चीज पाणीपुरी',
    descEn: 'Cheese pani puri from the board',
    descMr: 'बोर्डवरील चीज पाणीपुरी',
    price: 40, ...getItemImage('Cheese Pani Puri', getFallbackImageForItem('Cheese Pani Puri')), category: 'chaat',
  },
  {
    id: 16, nameEn: 'Cheese Dahi Puri', nameMr: 'चीज दहीपुरी',
    descEn: 'Cheese dahi puri from the board',
    descMr: 'बोर्डवरील चीज दहीपुरी',
    price: 50, ...getItemImage('Cheese Dahi Puri', getFallbackImageForItem('Cheese Dahi Puri')), category: 'chaat',
  },
  {
    id: 17, nameEn: 'Cheese Sev Puri', nameMr: 'चीज शेवपुरी',
    descEn: 'Cheese sev puri from the board',
    descMr: 'बोर्डवरील चीज शेवपुरी',
    price: 50, ...getItemImage('Cheese Sev Puri', getFallbackImageForItem('Cheese Sev Puri')), category: 'chaat',
  },
  {
    id: 18, nameEn: 'Ragda', nameMr: 'रगडा',
    descEn: 'Ragda from the board',
    descMr: 'बोर्डवरील रगडा',
    price: 40, ...getItemImage('Ragda', getFallbackImageForItem('Ragda')), category: 'chaat',
  },
  {
    id: 19, nameEn: 'Cheese Ragda', nameMr: 'चीज रगडा',
    descEn: 'Cheese ragda from the board',
    descMr: 'बोर्डवरील चीज रगडा',
    price: 50, ...getItemImage('Cheese Ragda', getFallbackImageForItem('Cheese Ragda')), category: 'chaat',
  },
  {
    id: 20, nameEn: 'Dabeli', nameMr: 'दाबेली',
    descEn: 'Dabeli from the board',
    descMr: 'बोर्डवरील दाबेली',
    price: 20, ...getItemImage('Dabeli', getFallbackImageForItem('Dabeli')), category: 'chaat',
  },
  {
    id: 21, nameEn: 'Cheese Dabeli', nameMr: 'चीज दाबेली',
    descEn: 'Cheese dabeli from the board',
    descMr: 'बोर्डवरील चीज दाबेली',
    price: 40, ...getItemImage('Cheese Dabeli', getFallbackImageForItem('Cheese Dabeli')), category: 'chaat',
  },
  {
    id: 22, nameEn: 'Mayonnaise Dabeli', nameMr: 'मायोनिज दाबेली',
    descEn: 'Mayonnaise dabeli from the board',
    descMr: 'बोर्डवरील मायोनिज दाबेली',
    price: 40, ...getItemImage('Mayonnaise Dabeli', getFallbackImageForItem('Mayonnaise Dabeli')), category: 'chaat',
  },
  {
    id: 23, nameEn: 'Tandoori Mayonnaise Dabeli', nameMr: 'तंदुरी मायोनिज दाबेली',
    descEn: 'Tandoori mayonnaise dabeli from the board',
    descMr: 'बोर्डवरील तंदुरी मायोनिज दाबेली',
    price: 40, ...getItemImage('Tandoori Mayonnaise Dabeli', getFallbackImageForItem('Tandoori Mayonnaise Dabeli')), category: 'chaat',
  },
];

export const juiceItems: MenuItem[] = [];
