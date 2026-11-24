import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Users,
  Compass,
  User,
  Search,
  Send,
  Smile,
  Mic,
  Gift,
  ChevronLeft,
  Wallet,
  Sun,
  Moon,
  Check,
  CheckCheck,
  Heart,
  ThumbsUp,
  Trash2,
  RotateCcw,
  LogOut,
  Tv,
  PlusCircle,
  X
} from 'lucide-react';

const GinjoLogo = ({ size = 44, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="ginjoGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#07C160" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="88" height="88" rx="24" fill="url(#ginjoGrad)" />
    <path
      d="M50 23C34.536 23 22 33.745 22 47C22 53.15 24.58 58.755 28.83 63.02L25.5 74.5L37.95 70.62C41.63 72.16 45.72 73 50 73C65.464 73 78 62.255 78 49C78 35.745 65.464 23 50 23Z"
      fill="#FFFFFF"
      fillOpacity="0.96"
    />
    <path
      d="M57.5 41.5C55.4 39.4 52.6 38.2 49.5 38.2C43.7 38.2 39 42.6 39 48C39 53.4 43.7 57.8 49.5 57.8C54.6 57.8 58.8 54.4 59.8 49.8H50.5V45.6H64.5V48.5C64.5 56.8 57.8 62.2 49.5 62.2C41.2 62.2 34.5 55.8 34.5 48C34.5 40.2 41.2 33.8 49.5 33.8C53.9 33.8 57.9 35.5 60.7 38.4L57.5 41.5Z"
      fill="#07C160"
    />
  </svg>
);

const INITIAL_CHATS = [
  {
    id: '1',
    name: 'Jinghpaw Ninghkring',
    avatarBg: 'bg-emerald-600',
    initials: 'JN',
    online: true,
    unread: 2,
    lastTime: '09:42',
    messages: [
      {
        id: 'm1',
        sender: 'them',
        text: 'Hkumra ai law! GINJO hta shang wa ai hpe kabu nga ai.',
        time: '09:38',
        type: 'text',
        status: 'read'
      },
      {
        id: 'm2',
        sender: 'them',
        text: 'Kumhpa Sumbu mung shagun mai ai, Channel ni mung hti mai ai!',
        time: '09:42',
        type: 'text',
        status: 'read'
      }
    ]
  },
  {
    id: '2',
    name: 'Sumlut La Raw',
    avatarBg: 'bg-sky-600',
    initials: 'SL',
    online: true,
    unread: 0,
    lastTime: '08:15',
    messages: [
      {
        id: 'm3',
        sender: 'them',
        text: 'Hpawt shani hpawng de du na kun? Manap 9:00 hta galaw na.',
        time: '08:15',
        type: 'text',
        status: 'read'
      }
    ]
  },
  {
    id: '3',
    name: 'Kachin Tech & AI',
    avatarBg: 'bg-indigo-600',
    initials: 'KT',
    online: false,
    unread: 0,
    lastTime: 'Mani',
    messages: [
      {
        id: 'm4',
        sender: 'them',
        text: 'Jinghpaw mungga hte chat mai ai app hpe lang yu ga.',
        time: 'Mani',
        type: 'text',
        status: 'read'
      }
    ]
  }
];

const CONTACTS = [
  { id: 'c1', name: 'Htoi San', group: 'J', status: 'Ngwi pyaw nga ai', color: 'bg-rose-500' },
  { id: 'c2', name: 'Jinghpaw Ninghkring', group: 'J', status: 'Ginjo Community', color: 'bg-emerald-600' },
  { id: 'c3', name: 'Labya Hkawn', group: 'L', status: 'Myitkyina • Online', color: 'bg-amber-500' },
  { id: 'c4', name: 'Marip Nawng', group: 'M', status: 'Mungga bai dawm la mai ai', color: 'bg-purple-600' },
  { id: 'c5', name: 'Sumlut La Raw', group: 'S', status: 'Hpung shang ai', color: 'bg-sky-600' }
];

const INITIAL_CHANNELS = [
  {
    id: 'ch1',
    name: 'Jinghpaw Shiga & Labau',
    handle: '@ginjo_shiga',
    category: 'Shiga',
    followers: '12.4K',
    following: true,
    badgeBg: 'bg-emerald-600',
    initials: 'JS',
    title: 'GINJO Channel hta Jinghpaw shiga, labau hte laili laika ni hpe hti mai ai',
    time: '20 min ago',
    likes: 184,
    liked: false
  },
  {
    id: 'ch2',
    name: 'Mungdan Mahkawn',
    handle: '@ginjo_mahkawn',
    category: 'Mahkawn',
    followers: '8.9K',
    following: false,
    badgeBg: 'bg-amber-600',
    initials: 'MM',
    title: 'Manau hte Jinghpaw mahkawn nnan ni hpe GINJO Channel hta madat yu ga!',
    time: '2h ago',
    likes: 242,
    liked: true
  },
  {
    id: 'ch3',
    name: 'GINJO Tech & App',
    handle: '@ginjo_tech',
    category: 'Tech',
    followers: '5.6K',
    following: false
