// locales/client.ts
'use client';
import { createI18nClient } from 'next-international/client';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
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
  useI18n: useLandingPageI18n,
  useScopedI18n: useLandingPageScopedI18n,
  I18nProviderClient: LandingPageI18nProviderClient,
  useCurrentLocale: useLandingPageCurrentLocale,
} = createI18nClient({
  en: () => import('./landingpage/en'),
  fr: () => import('./landingpage/fr'),
});

// Call Page translations
export const {
  useI18n: useCallPageI18n,
  useScopedI18n: useCallPageScopedI18n,
  I18nProviderClient: CallPageI18nProviderClient,
  useCurrentLocale: useCallPageCurrentLocale,
} = createI18nClient({
  en: () => import('./callpage/en'),
  fr: () => import('./callpage/fr'),
});

// Auth Page translations
export const {
  useI18n: useAuthI18n,
  useScopedI18n: useAuthScopedI18n,
  I18nProviderClient: AuthI18nProviderClient,
  useCurrentLocale: useAuthCurrentLocale,
} = createI18nClient({
  en: () => import('./auth/en'),
  fr: () => import('./auth/fr'),
});
