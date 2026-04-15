export interface MenuItem {
  id: number;
  nameEn: string;
  nameMr: string;
  descEn: string;
  descMr: string;
  price: number;
  image: string;
  category: 'chaat' | 'juice';
  tag?: { en: string; mr: string };
}

import bhelImage from '@/assets/food-bhel.jpg';
import bhelpuriImage from '@/assets/hero-chaat.jpg';
import paniPuriImage from '@/assets/food-panipuri.jpg';
import dahiPuriImage from '@/assets/food-dahipuri.jpg';
import ragdaImage from '@/assets/food-ragda.jpg';
import churaPuriImage from '@/assets/food-sevpuri.jpg';
import dahiBhelImage from '@/assets/food-dahipuri.jpg';
import dahiSevPuriImage from '@/assets/food-sevpuri.jpg';
import sevPuriImage from '@/assets/food-sevpuri.jpg';
import cheeseSukhiPuriImage from '@/assets/food-bhel.jpg';
import cheeseSevPuriImage from '@/assets/food-sevpuri.jpg';
import cheeseRagdaImage from '@/assets/food-ragda.jpg';
import cheeseDabeliImage from '@/assets/food-dabeli.jpg';
import cheeseFarsanBhelImage from '@/assets/food-bhel.jpg';
import mayonnaiseDabeliImage from '@/assets/food-dabeli.jpg';

export const chaatItems: MenuItem[] = [
  {
    id: 1, nameEn: 'Bhel', nameMr: 'भेळ',
    descEn: 'Classic bhel from the uploaded menu board',
    descMr: 'अपलोड केलेल्या मेनू बोर्डमधील क्लासिक भेळ',
    price: 35, image: bhelImage, category: 'chaat',
  },
  {
    id: 2, nameEn: 'Sukhi Bhel', nameMr: 'सुखी भेळ',
    descEn: 'Dry-style bhel from the board',
    descMr: 'बोर्डवरील ड्राय-स्टाईल भेळ',
    price: 35, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 3, nameEn: 'Cheese Bhel', nameMr: 'चीज भेळ',
    descEn: 'Cheese-topped bhel from the board',
    descMr: 'बोर्डवरील चीज टॉपिंगसह भेळ',
    price: 60, image: cheeseFarsanBhelImage, category: 'chaat',
  },
  {
    id: 4, nameEn: 'Special Bhel', nameMr: 'स्पे भेळ',
    descEn: 'Special bhel as listed on the uploaded board',
    descMr: 'अपलोड केलेल्या बोर्डवर दाखवलेली स्पेशल भेळ',
    price: 50, image: bhelImage, category: 'chaat',
  },
  {
    id: 5, nameEn: 'Farsan Bhel', nameMr: 'फरसाणा भेळ',
    descEn: 'Farsan bhel from the board',
    descMr: 'बोर्डवरील फरसाण भेळ',
    price: 60, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 6, nameEn: 'Cheese Farsan Bhel', nameMr: 'चीज फरसाणा भेळ',
    descEn: 'Farsan bhel with cheese topping',
    descMr: 'चीज टॉपिंगसह फरसाण भेळ',
    price: 70, image: cheeseFarsanBhelImage, category: 'chaat',
  },
  {
    id: 7, nameEn: 'Dahi Bhel', nameMr: 'दही भेळ',
    descEn: 'Bhel with yogurt and chutneys',
    descMr: 'दही आणि चटण्यांसह भेळ',
    price: 50, image: dahiBhelImage, category: 'chaat',
  },
  {
    id: 8, nameEn: 'Bhelpuri', nameMr: 'भेलपुरी',
    descEn: 'Bhelpuri from the board',
    descMr: 'बोर्डवरील भेलपुरी',
    price: 70, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 9, nameEn: 'Chura Puri', nameMr: 'चुरापुरी',
    descEn: 'Chura puri from the board',
    descMr: 'बोर्डवरील चुरापुरी',
    price: 35, image: churaPuriImage, category: 'chaat',
  },
  {
    id: 10, nameEn: 'Pani Puri', nameMr: 'पाणीपुरी',
    descEn: 'Pani puri from the board',
    descMr: 'बोर्डवरील पाणीपुरी',
    price: 25, image: paniPuriImage, category: 'chaat',
    tag: { en: '🔥 Bestseller', mr: '🔥 बेस्टसेलर' },
  },
  {
    id: 11, nameEn: 'Sev Puri', nameMr: 'शेवपुरी',
    descEn: 'Sev puri from the board',
    descMr: 'बोर्डवरील शेवपुरी',
    price: 40, image: sevPuriImage, category: 'chaat',
  },
  {
    id: 12, nameEn: 'Dahi Puri', nameMr: 'दहीपुरी',
    descEn: 'Dahi puri from the board',
    descMr: 'बोर्डवरील दहीपुरी',
    price: 40, image: dahiPuriImage, category: 'chaat',
  },
  {
    id: 13, nameEn: 'Dahi Sev Puri', nameMr: 'दही शेवपुरी',
    descEn: 'Dahi sev puri from the board',
    descMr: 'बोर्डवरील दही शेवपुरी',
    price: 50, image: dahiSevPuriImage, category: 'chaat',
  },
  {
    id: 14, nameEn: 'Cheese Sukhi Puri', nameMr: 'चीज सुकिपुरी',
    descEn: 'Cheese sukhi puri from the board',
    descMr: 'बोर्डवरील चीज सुकिपुरी',
    price: 40, image: cheeseSukhiPuriImage, category: 'chaat',
  },
  {
    id: 15, nameEn: 'Cheese Pani Puri', nameMr: 'चीज पाणीपुरी',
    descEn: 'Cheese pani puri from the board',
    descMr: 'बोर्डवरील चीज पाणीपुरी',
    price: 40, image: paniPuriImage, category: 'chaat',
  },
  {
    id: 16, nameEn: 'Cheese Dahi Puri', nameMr: 'चीज दहीपुरी',
    descEn: 'Cheese dahi puri from the board',
    descMr: 'बोर्डवरील चीज दहीपुरी',
    price: 50, image: dahiPuriImage, category: 'chaat',
  },
  {
    id: 17, nameEn: 'Cheese Sev Puri', nameMr: 'चीज शेवपुरी',
    descEn: 'Cheese sev puri from the board',
    descMr: 'बोर्डवरील चीज शेवपुरी',
    price: 50, image: cheeseSevPuriImage, category: 'chaat',
  },
  {
    id: 18, nameEn: 'Ragda', nameMr: 'रगडा',
    descEn: 'Ragda from the board',
    descMr: 'बोर्डवरील रगडा',
    price: 40, image: ragdaImage, category: 'chaat',
  },
  {
    id: 19, nameEn: 'Cheese Ragda', nameMr: 'चीज रगडा',
    descEn: 'Cheese ragda from the board',
    descMr: 'बोर्डवरील चीज रगडा',
    price: 50, image: cheeseRagdaImage, category: 'chaat',
  },
  {
    id: 20, nameEn: 'Dabeli', nameMr: 'दाबेली',
    descEn: 'Dabeli from the board',
    descMr: 'बोर्डवरील दाबेली',
    price: 20, image: cheeseDabeliImage, category: 'chaat',
  },
  {
    id: 21, nameEn: 'Cheese Dabeli', nameMr: 'चीज दाबेली',
    descEn: 'Cheese dabeli from the board',
    descMr: 'बोर्डवरील चीज दाबेली',
    price: 40, image: cheeseDabeliImage, category: 'chaat',
  },
  {
    id: 22, nameEn: 'Mayonnaise Dabeli', nameMr: 'मायोनिज दाबेली',
    descEn: 'Mayonnaise dabeli from the board',
    descMr: 'बोर्डवरील मायोनिज दाबेली',
    price: 40, image: mayonnaiseDabeliImage, category: 'chaat',
  },
  {
    id: 23, nameEn: 'Tandoori Mayonnaise Dabeli', nameMr: 'तंदुरी मायोनिज दाबेली',
    descEn: 'Tandoori mayonnaise dabeli from the board',
    descMr: 'बोर्डवरील तंदुरी मायोनिज दाबेली',
    price: 40, image: mayonnaiseDabeliImage, category: 'chaat',
  },
];

export const juiceItems: MenuItem[] = [];
