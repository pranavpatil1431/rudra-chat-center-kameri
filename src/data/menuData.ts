export interface MenuItem {
  id: number;
  nameEn: string;
  nameMr: string;
  descEn: string;
  descMr: string;
  price: number;
  image: string;
  tag?: { en: string; mr: string };
}

import foodBhel from '@/assets/food-bhel.jpg';
import foodPanipuri from '@/assets/food-panipuri.jpg';
import foodDahipuri from '@/assets/food-dahipuri.jpg';
import foodSevpuri from '@/assets/food-sevpuri.jpg';
import foodRagda from '@/assets/food-ragda.jpg';
import foodDabeli from '@/assets/food-dabeli.jpg';
import foodSugarcane from '@/assets/food-sugarcane.jpg';
import heroChaat from '@/assets/hero-chaat.jpg';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nameEn: 'Bhel',
    nameMr: 'भेळ',
    descEn: 'Crispy puffed rice tossed with tangy chutneys & fresh veggies',
    descMr: 'कुरकुरीत मुरमुरे, चटण्या आणि ताज्या भाज्यांसह',
    price: 30,
    image: foodBhel,
  },
  {
    id: 2,
    nameEn: 'Bhelpuri',
    nameMr: 'भेळपुरी',
    descEn: 'Classic Mumbai-style bhelpuri with sev and chutneys',
    descMr: 'मुंबई स्टाइल भेळपुरी, शेव आणि चटण्यांसह',
    price: 35,
    image: heroChaat,
  },
  {
    id: 3,
    nameEn: 'Pani Puri',
    nameMr: 'पाणीपुरी',
    descEn: '6 crispy puris filled with spiced water and potato filling',
    descMr: '६ कुरकुरीत पुऱ्या, मसालेदार पाणी आणि बटाट्याच्या सारणासह',
    price: 30,
    image: foodPanipuri,
    tag: { en: 'Bestseller', mr: 'बेस्टसेलर' },
  },
  {
    id: 4,
    nameEn: 'Dahi Puri',
    nameMr: 'दहीपुरी',
    descEn: 'Crispy puris topped with sweet yogurt, chutneys & sev',
    descMr: 'कुरकुरीत पुऱ्या, गोड दही, चटण्या आणि शेवसह',
    price: 40,
    image: foodDahipuri,
  },
  {
    id: 5,
    nameEn: 'Sev Puri',
    nameMr: 'शेवपुरी',
    descEn: 'Flat puris loaded with potato, onion, chutneys & crispy sev',
    descMr: 'सपाट पुऱ्यांवर बटाटा, कांदा, चटण्या आणि शेव',
    price: 40,
    image: foodSevpuri,
  },
  {
    id: 6,
    nameEn: 'Ragda',
    nameMr: 'रगडा',
    descEn: 'Spicy white peas curry served with crispy patties',
    descMr: 'मसालेदार वाटाणा रस्सा, कुरकुरीत पॅटीससह',
    price: 45,
    image: foodRagda,
  },
  {
    id: 7,
    nameEn: 'Dabeli',
    nameMr: 'दाबेली',
    descEn: 'Kutchi dabeli with spiced potato, pomegranate & peanuts',
    descMr: 'कच्छी दाबेली, मसालेदार बटाटा, डाळिंब आणि शेंगदाणे',
    price: 30,
    image: foodDabeli,
    tag: { en: 'Popular', mr: 'लोकप्रिय' },
  },
  {
    id: 8,
    nameEn: 'Special Farsan Bhel',
    nameMr: 'स्पेशल फरसाण भेळ',
    descEn: 'Premium bhel with assorted farsan mix and special masala',
    descMr: 'विविध फरसाण मिक्स आणि स्पेशल मसाल्यासह प्रीमियम भेळ',
    price: 50,
    image: foodBhel,
    tag: { en: 'Chef Special', mr: 'शेफ स्पेशल' },
  },
  {
    id: 9,
    nameEn: 'Dahi Bhel',
    nameMr: 'दही भेळ',
    descEn: 'Bhel mixed with creamy yogurt and sweet-tangy chutneys',
    descMr: 'मलईदार दही आणि गोड-आंबट चटण्यांसह भेळ',
    price: 40,
    image: foodDahipuri,
  },
  {
    id: 10,
    nameEn: 'Sugarcane Juice',
    nameMr: 'उसाचा रस',
    descEn: 'Fresh cold-pressed sugarcane juice with ginger & lemon',
    descMr: 'आले आणि लिंबूसह ताजा उसाचा रस',
    price: 30,
    image: foodSugarcane,
    tag: { en: 'Refreshing', mr: 'थंडगार' },
  },
];
