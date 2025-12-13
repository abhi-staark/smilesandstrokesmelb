import { LucideIcon } from 'lucide-react';

export enum ActionType {
  WHATSAPP = 'WHATSAPP',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  INSTAGRAM = 'INSTAGRAM',
  WEBSITE = 'WEBSITE',
  REGISTRATION = 'REGISTRATION'
}

export interface ContactOption {
  id: string;
  type: ActionType;
  label: string;
  value: string; // The URL or number
  icon: LucideIcon;
  primaryColor: string;
}