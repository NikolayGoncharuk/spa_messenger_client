import React from 'react';
// Icons nav
import ChatIcon from '@material-ui/icons/Chat';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';
// Icons generalSettingsMenu
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LanguageIcon from '@material-ui/icons/Language';
// Icons helpSettingsMenu
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PolicyOutlinedIcon from '@material-ui/icons/PolicyOutlined';

export const nav = {
  chat: {
    name: 'Чат',
    path: '/chat',
    icon: <ChatIcon />,
    disabled: false,
  },
  users: {
    name: 'Пользователи',
    path: '/users',
    icon: <PermContactCalendarIcon />,
    disabled: false,
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

export const settingsMenuItems = {
  accountSettingsMenu: {
    title: 'Аккаунт',
    items: {
      email: {
        primary: 'goncharuk.bro@yandex.ru',
        secondary: 'Нажмите, чтобы изменить адрес электронной почты',
        disabled: true,
      },
      userName: {
        primary: '@nikolay_goncharuk',
        secondary: 'Нажмите, чтобы изменить имя пользователя',
        disabled: true,
      },
      about: {
        primary: 'О себе',
        secondary: 'Напишите немного о себе',
        disabled: true,
      },
    },
  },

  generalSettingsMenu: {
    title: 'Основные',
    items: {
      sound: {
        primary: 'Уведомления и звук',
        icon: <NotificationsNoneIcon />,
        disabled: true,
      },
      privacy: {
        primary: 'Конфиденциальность',
        icon: <LockOpenIcon />,
        disabled: true,
      },
      chat: {
        primary: 'Настройки чатов',
        icon: <ChatBubbleOutlineIcon />,
        disabled: true,
      },
      language: {
        primary: 'Язык',
        icon: <LanguageIcon />,
        disabled: true,
      },
    },
  },

  helpSettingsMenu: {
    title: 'Помощь',
    items: {
      ask: {
        primary: 'Задать вопрос',
        icon: <TextsmsOutlinedIcon />,
        disabled: true,
      },
      questionsAbout: {
        primary: 'Вопросы о Messenger',
        icon: <HelpOutlineIcon />,
        disabled: true,
      },
      privacyPolicy: {
        primary: 'Политика конфиденциальности',
        icon: <PolicyOutlinedIcon />,
        disabled: true,
      },
    },
  },
};