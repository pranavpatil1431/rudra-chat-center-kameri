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

import bhelImage from '@/assets/bhel.jpeg';
import bhelpuriImage from '@/assets/bhelpuri.jpeg';
import paniPuriImage from '@/assets/pani-puri.jpeg';
import dahiPuriImage from '@/assets/dahi-puri.jpeg';
import ragdaImage from '@/assets/ragda.jpeg';
import sugarcaneJuiceImage from '@/assets/sugarcane-juice.jpeg';
import churaPuriImage from '@/assets/chura-puri.jpg';
import dahiBhelImage from '@/assets/dahi-bhel.jpg';
import dahiSevPuriImage from '@/assets/dahi-sev-puri.jpg';
import sevPuriImage from '@/assets/sev-puri.jpg';
import cheeseSukhiPuriImage from '@/assets/cheese-sukhi-puri.jpg';
import cheeseSevPuriImage from '@/assets/cheese-sev-puri.jpg';
import cheeseRagdaImage from '@/assets/cheese-ragda.jpg';
import cheeseDabeliImage from '@/assets/cheese-dabeli.jpg';
import cheeseFarsanBhelImage from '@/assets/cheese-farsan-bhel.jpg';
import mayonnaiseDabeliImage from '@/assets/mayonnaise-dabeli.jpg';

export const chaatItems: MenuItem[] = [
  {
    id: 1, nameEn: 'Bhel', nameMr: 'भेळ',
    descEn: 'Crispy puffed rice tossed with tangy chutneys & fresh veggies',
    descMr: 'कुरकुरीत मुरमुरे, चटण्या आणि ताज्या भाज्यांसह',
    price: 35, image: bhelImage, category: 'chaat',
  },
  {
    id: 2, nameEn: 'Sukhi Bhel', nameMr: 'सुकपुरी भेळ',
    descEn: 'Dry-style bhel with crunchy farsan and light masala',
    descMr: 'कुरकुरीत फरसाण आणि हलक्या मसाल्यासह ड्राय स्टाइल भेळ',
    price: 35, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 3, nameEn: 'Cheese Bhel', nameMr: 'चीज भेळ',
    descEn: 'Loaded bhel topped with grated cheese and chutneys',
    descMr: 'किसलेल्या चीज आणि चटण्यांसह भरगच्च भेळ',
    price: 60, image: cheeseFarsanBhelImage, category: 'chaat',
  },
  {
    id: 5, nameEn: 'Farsan Bhel', nameMr: 'फरसाणा भेळ',
    descEn: 'Bhel mixed generously with assorted farsan',
    descMr: 'विविध फरसाणासह भरपूर मिक्स केलेली भेळ',
    price: 60, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 6, nameEn: 'Cheese Farsan Bhel', nameMr: 'चीज फरसाणा भेळ',
    descEn: 'Rich farsan bhel finished with cheese topping',
    descMr: 'चीज टॉपिंगसह रिच फरसाणा भेळ',
    price: 70, image: cheeseFarsanBhelImage, category: 'chaat',
  },
  {
    id: 7, nameEn: 'Dahi Bhel', nameMr: 'दही भेळ',
    descEn: 'Bhel mixed with fresh yogurt and sweet-spicy chutneys',
    descMr: 'ताज्या दही आणि गोड-तिखट चटण्यांसह भेळ',
    price: 50, image: dahiBhelImage, category: 'chaat',
  },
  {
    id: 8, nameEn: 'Bhelpuri', nameMr: 'भेळपुरी',
    descEn: 'Classic bhelpuri with chutneys, onion, tomato and sev',
    descMr: 'चटण्या, कांदा, टोमॅटो आणि शेवसह क्लासिक भेळपुरी',
    price: 70, image: bhelpuriImage, category: 'chaat',
  },
  {
    id: 9, nameEn: 'Chura Puri', nameMr: 'चुरापुरी',
    descEn: 'Crunchy puri chaat with masala and tangy chutneys',
    descMr: 'मसाला आणि आंबट-गोड चटण्यांसह कुरकुरीत पुरी चाट',
    price: 35, image: churaPuriImage, category: 'chaat',
  },
  {
    id: 10, nameEn: 'Pani Puri', nameMr: 'पाणीपुरी',
    descEn: '6 crispy puris with spicy pani and potato filling',
    descMr: '६ कुरकुरीत पुऱ्या, तिखट पाणी आणि बटाट्याच्या सारणासह',
    price: 25, image: paniPuriImage, category: 'chaat',
    tag: { en: '🔥 Bestseller', mr: '🔥 बेस्टसेलर' },
  },
  {
    id: 11, nameEn: 'Sev Puri', nameMr: 'शेवपुरी',
    descEn: 'Flat puris with potato mix, chutneys and sev',
    descMr: 'बटाटा मिक्स, चटण्या आणि शेवसह सपाट पुऱ्या',
    price: 40, image: sevPuriImage, category: 'chaat',
  },
  {
    id: 12, nameEn: 'Dahi Puri', nameMr: 'दहीपुरी',
    descEn: 'Crispy puris topped with yogurt, chutneys and sev',
    descMr: 'दही, चटण्या आणि शेवसह कुरकुरीत दहीपुरी',
    price: 40, image: dahiPuriImage, category: 'chaat',
  },
  {
    id: 13, nameEn: 'Dahi Sev Puri', nameMr: 'दही शेवपुरी',
    descEn: 'Sev puri finished with chilled sweet dahi',
    descMr: 'थंड गोड दहीसह सर्व्ह केलेली शेवपुरी',
    price: 50, image: dahiSevPuriImage, category: 'chaat',
  },
  {
    id: 14, nameEn: 'Cheese Sukhi Puri', nameMr: 'चीज सुकिपुरी',
    descEn: 'Dry puri chaat with cheese and house masala',
    descMr: 'चीज आणि हाऊस मसाल्यासह ड्राय पुरी चाट',
    price: 40, image: cheeseSukhiPuriImage, category: 'chaat',
  },
  {
    id: 15, nameEn: 'Cheese Pani Puri', nameMr: 'चीज पाणीपुरी',
    descEn: 'Cheese-topped pani puri with spicy mint water',
    descMr: 'तिखट पुदिना पाण्यासह चीज टॉपिंगची पाणीपुरी',
    price: 40, image: paniPuriImage, category: 'chaat',
  },
  {
    id: 16, nameEn: 'Cheese Dahi Puri', nameMr: 'चीज दहीपुरी',
    descEn: 'Creamy dahi puri with rich cheese topping',
    descMr: 'रिच चीज टॉपिंगसह क्रीमी दहीपुरी',
    price: 50, image: dahiPuriImage, category: 'chaat',
  },
  {
    id: 17, nameEn: 'Cheese Sev Puri', nameMr: 'चीज शेवपुरी',
    descEn: 'Crispy sev puri with extra cheese',
    descMr: 'अधिक चीजसह कुरकुरीत शेवपुरी',
    price: 50, image: cheeseSevPuriImage, category: 'chaat',
  },
  {
    id: 18, nameEn: 'Ragda', nameMr: 'रगडा',
    descEn: 'Spicy ragda served in classic chaat style',
    descMr: 'क्लासिक चाट स्टाइलमध्ये सर्व्ह केलेला तिखट रगडा',
    price: 40, image: ragdaImage, category: 'chaat',
  },
  {
    id: 19, nameEn: 'Cheese Ragda', nameMr: 'चीज रगडा',
    descEn: 'Ragda topped with cheese and chutney drizzle',
    descMr: 'चीज आणि चटणी ड्रिझलसह रगडा',
    price: 50, image: cheeseRagdaImage, category: 'chaat',
  },
  {
    id: 20, nameEn: 'Dabeli', nameMr: 'दाबेली',
    descEn: 'Kutchi dabeli with spicy potato and crunchy masala',
    descMr: 'तिखट बटाटा आणि क्रंची मसाल्यासह कच्छी दाबेली',
    price: 20, image: cheeseDabeliImage, category: 'chaat',
  },
  {
    id: 21, nameEn: 'Cheese Dabeli', nameMr: 'चीज दाबेली',
    descEn: 'Classic dabeli with loaded cheese filling',
    descMr: 'भरपूर चीज फिलिंगसह क्लासिक दाबेली',
    price: 40, image: cheeseDabeliImage, category: 'chaat',
  },
  {
    id: 22, nameEn: 'Mayonnaise Dabeli', nameMr: 'मायोनिज दाबेली',
    descEn: 'Soft dabeli with creamy mayonnaise spread',
    descMr: 'क्रीमी मायोनिज स्प्रेडसह मऊ दाबेली',
    price: 40, image: mayonnaiseDabeliImage, category: 'chaat',
  },
];

export const juiceItems: MenuItem[] = [
  {
    id: 24, nameEn: 'Sugarcane Juice', nameMr: 'उसाचा रस',
    descEn: 'Fresh cold-pressed sugarcane juice with ginger & lemon',
    descMr: 'आले आणि लिंबूसह ताजा उसाचा रस',
    price: 30, image: sugarcaneJuiceImage, category: 'juice',
    tag: { en: '🧊 Refreshing', mr: '🧊 थंडगार' },
  },
];
