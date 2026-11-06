import { useState } from 'react';
import './App.css';

type Page = 'home' | 'devices' | 'media' | 'storage' | 'settings';

type NavItem = { id: Page; title: string; icon: string };

const navigation: NavItem[] = [
  { id: 'home', title: 'Главная', icon: '⌂' },
  { id: 'devices', title: 'Устройства', icon: '▣' },
  { id: 'media', title: 'Медиа', icon: '▷' },
  { id: 'storage', title: 'Файлы', icon: '▤' },
  { id: 'settings', title: 'Настройки', icon: '⚙' },
];

const sections: Record<Page, { heading: string; message: string }> = {
  home: { heading: 'Твой HomeCloud', message: 'Подключение к домашнему серверу и сводка состояния появятся на следующем этапе.' },
  devices: { heading: 'Устройства', message: 'Здесь появятся телевизоры, панели и другие устройства из реестра Backend.' },
  media: { heading: 'Мультимедиа', message: 'Выбор файлов и управление медиакомнатами будут подключены через Backend.' },
  storage: { heading: 'Хранилища', message: 'Доступ к файлам будет выполняться через разрешённые корни HC Storage Service.' },
  settings: { heading: 'Настройки', message: 'Подключения LAN/Tailscale, авторизация и настройки приложения появятся здесь.' },
};

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const current = sections[page];

  return (
    <div className="mobile-shell">
      <header className="app-header">
        <div className="brand-row"><span className="brand-dot" aria-hidden="true" /> HOMECLOUD</div>
        <div className="header-subtitle">Mobile · ByteWizard</div>
      </header>

      <main className="app-content" id="main-content">
        <div className="section-caption">HOMECLOUD / {navigation.find(item => item.id === page)?.title.toUpperCase()}</div>
        <h1>{current.heading}</h1>
        <div className="placeholder-card">
          <span className="eyebrow">ОСНОВА ПРИЛОЖЕНИЯ</span>
          <p>{current.message}</p>
          <span className="development-note">Backend пока не подключён. Данные не имитируются.</span>
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Основная навигация">
        {navigation.map(item => (
          <button key={item.id} type="button" aria-current={page === item.id ? 'page' : undefined}
            className={page === item.id ? 'nav-button nav-button--active' : 'nav-button'}
            onClick={() => setPage(item.id)}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
