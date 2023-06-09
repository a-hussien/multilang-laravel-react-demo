import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${appName} | ${title} `,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
        <LaravelReactI18nProvider
            locale={'ar'}
            fallbackLocale={'en'}
            files={import.meta.glob('/lang/*.json')}
          >
            <App {...props} />
          </LaravelReactI18nProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
