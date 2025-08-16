import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Locale = 'en' | 'ms' | 'zh' | 'hi' | 'fr' | 'de' | 'es';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string, targetLocale?: Locale) => string;
  getCurrentPath: () => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locale, setLocaleState] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Extract locale from pathname
  const getLocaleFromPath = (pathname: string): { locale: Locale; cleanPath: string } => {
    const segments = pathname.split('/').filter(Boolean);
    const supportedLocales: Locale[] = ['ms', 'zh', 'hi', 'fr', 'de', 'es'];
    
    if (segments.length > 0 && supportedLocales.includes(segments[0] as Locale)) {
      return {
        locale: segments[0] as Locale,
        cleanPath: '/' + segments.slice(1).join('/')
      };
    }
    
    return { locale: 'en', cleanPath: pathname };
  };

  // Load translations dynamically
  const loadTranslations = async (targetLocale: Locale) => {
    try {
      const module = await import(`../i18n/${targetLocale}.ts`);
      setTranslations(module.default);
    } catch (error) {
      console.warn(`Failed to load translations for ${targetLocale}:`, error);
      setTranslations({});
    }
  };

  // Initialize locale from URL
  useEffect(() => {
    const { locale: urlLocale } = getLocaleFromPath(location.pathname);
    setLocaleState(urlLocale);
    loadTranslations(urlLocale);
  }, [location.pathname]);

  const setLocale = (newLocale: Locale) => {
    const { cleanPath } = getLocaleFromPath(location.pathname);
    const newPath = getLocalizedPath(cleanPath, newLocale);
    
    // Store preference
    localStorage.setItem('preferred-locale', newLocale);
    
    navigate(newPath, { replace: true });
  };

  const getLocalizedPath = (path: string, targetLocale: Locale = locale): string => {
    // Clean the path (remove existing locale)
    const { cleanPath } = getLocaleFromPath(path);
    
    if (targetLocale === 'en') {
      return cleanPath;
    }
    
    return `/${targetLocale}${cleanPath}`;
  };

  const getCurrentPath = (): string => {
    const { cleanPath } = getLocaleFromPath(location.pathname);
    return cleanPath;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
        getLocalizedPath,
        getCurrentPath,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};