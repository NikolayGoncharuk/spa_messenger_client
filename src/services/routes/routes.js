import React from 'react';
// Icons
import ChatIcon from '@material-ui/icons/Chat';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';

export const nav = {
  chat: {
    name: 'Чат',
    path: '/chat',
    icon: <ChatIcon />,
    disabled: false,
  },
  users: {
    name: 'Пользлватели',
    path: '/users',
    icon: <PermContactCalendarIcon />,
    disabled: true,
  },
  bookmark: {
    name: 'Избранное',
    path: '/bookmark',
    icon: <BookmarkIcon />,
    disabled: true,
  },
  settings: {
    name: 'Настройки',
    path: '/settings',
    icon: <SettingsIcon />,
    disabled: false,
  },
};