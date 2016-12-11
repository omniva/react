/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import nlLocaleData from 'react-intl/locale-data/nl';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(nlLocaleData);

export const appLocales = [
  'en',
  'de',
  'nl',
];

import enTranslationMessages from './translations/en.json';
import deTranslationMessages from './translations/de.json';
import nlTranslationMessages from './translations/nl.json';

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);
  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  nl: formatTranslationMessages('nl', nlTranslationMessages),
};
