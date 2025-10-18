import {
  LayoutDashboard,
  Users,
  BookMarked,
  SquareKanban,
  Box,
  Settings,
  Lock,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react';

// Hatanın çözümü: Bu arayüzlerin (interface) başına "export" kelimesi eklendi.
export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

// Projemize göre özelleştirilmiş yeni menü yapısı
export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: 'Restoran Yönetimi',
    items: [
      {
        title: 'Ana Panel',
        url: '/dashboard/default',
        icon: LayoutDashboard,
      },
      {
        title: 'Siparişler',
        url: '/dashboard/orders',
        icon: SquareKanban,
        comingSoon: true,
      },
      {
        title: 'Menü Yönetimi',
        url: '/dashboard/menu',
        icon: BookMarked,
        comingSoon: true,
      },
      {
        title: 'Masa Yönetimi',
        url: '/dashboard/tables',
        icon: Box,
        comingSoon: true,
      },
      {
        title: 'Garsonlar',
        url: '/dashboard/waiters',
        icon: Users,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: 'Hesap',
    items: [
      {
        title: 'Ayarlar',
        url: '/dashboard/settings',
        icon: Settings,
        comingSoon: true,
      },
      {
        title: 'Giriş Sayfaları',
        url: '/auth',
        icon: Fingerprint,
        subItems: [
          { title: 'Giriş v1', url: '/auth/v1/login', newTab: true },
          { title: 'Giriş v2', url: '/auth/v2/login', newTab: true },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Süper Admin',
    items: [
      {
        title: 'Restoranlar',
        url: '/dashboard/super/restaurants',
        icon: Lock,
        comingSoon: true,
      },
    ],
  },
];
