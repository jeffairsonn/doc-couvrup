// locales/server.ts
import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./en'),
  fr: () => import('./fr'),
  ar: () => import('./ar'),
  pt: () => import('./pt'),
  es: () => import('./es'),
  sw: () => import('./sw'),
  de: () => import('./de'),
  it: () => import('./it'),
  nl: () => import('./nl'),
});

// Landing page translations
export const {
  getI18n: getLandingPageI18n,
  getScopedI18n: getLandingPageScopedI18n,
} = createI18nServer({
  en: () => import('./landingpage/en'),
  fr: () => import('./landingpage/fr'),
});

// Landing page translations
export const {
  getI18n: getCallPageI18n,
  getScopedI18n: getCallPageScopedI18n,
} = createI18nServer({
  en: () => import('./callpage/en'),
  fr: () => import('./callpage/fr'),
});

// Landing page translations
export const { getI18n: getAuthI18n, getScopedI18n: getAuthScopedI18n } =
  createI18nServer({
    en: () => import('./auth/en'),
    fr: () => import('./auth/fr'),
  });
