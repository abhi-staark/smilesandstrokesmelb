import { Mail, Phone, Instagram, MessageCircle, Globe, ClipboardList } from 'lucide-react';
import { ActionType, ContactOption } from './types';

// Profile Information
export const PROFILE_DATA = {
  name: "Smiles & Strokes",
  title: "An Art Experience · MELB",
  bio: "Exploring the world through graphite and ink. Join our class to unlock your creativity.",
  avatarUrl: "https://picsum.photos/300/300?grayscale", // Artistic black & white feel
};

// Contact/Action Links
export const CONTACT_OPTIONS: ContactOption[] = [
  {
    id: 'course-registration',
    type: ActionType.REGISTRATION,
    label: 'Course Registration',
    value: 'https://forms.gle/DhU8Dp2G5mRMSufo6', // Replace this with your actual Google Form URL
    icon: ClipboardList,
    primaryColor: '#7248B9', // Google Forms Purple
  },
  {
    id: 'whatsapp',
    type: ActionType.WHATSAPP,
    label: 'Chat on WhatsApp',
    value: 'https://wa.me/61479129760', 
    icon: MessageCircle,
    primaryColor: '#25D366',
  },
  {
    id: 'instagram',
    type: ActionType.INSTAGRAM,
    label: 'Follow on Instagram',
    value: 'https://instagram.com/smilesandstrokesmelb',
    icon: Instagram,
    primaryColor: '#E1306C',
  },
  {
    id: 'email',
    type: ActionType.EMAIL,
    label: 'Send an Email',
    value: 'mailto:smilesandstrokesmelb@gmail.com',
    icon: Mail,
    primaryColor: '#EA4335',
  },
  {
    id: 'phone',
    type: ActionType.PHONE,
    label: 'Call Studio',
    value: 'tel:+61479129760',
    icon: Phone,
    primaryColor: '#34A853',
  },
];