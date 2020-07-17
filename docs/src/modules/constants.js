const CODE_VARIANTS = {
  JS: 'JS',
  TS: 'TS',
};

const ACTION_TYPES = {
  OPTIONS_CHANGE: 'OPTIONS_CHANGE',
  NOTIFICATIONS_CHANGE: 'NOTIFICATIONS_CHANGE',
};

// Valid languages to server-side render in production
const LANGUAGES = ['en', 'zh', 'ru', 'pt', 'es', 'fr', 'de', 'ja', 'aa'];

// Server side rendered languages
const LANGUAGES_SSR = ['en', 'zh', 'ru', 'pt', 'es'];

// Work in progress
const LANGUAGES_IN_PROGRESS = LANGUAGES.slice();

// Valid languages to use in production
const LANGUAGES_LABEL = [
  {
    code: 'en',
    text: 'English',
  },
  {
    code: 'zh',
    text: '中文',
  },
  {
    code: 'ru',
    text: 'Русский',
  },
  {
    code: 'pt',
    text: 'Português',
  },
  {
    code: 'es',
    text: 'Español',
  },
  {
    code: 'fr',
    text: 'Français',
  },
  {
    code: 'de',
    text: 'Deutsch',
  },
  {
    code: 'ja',
    text: '日本語',
  },
];

const SOURCE_CODE_ROOT_URL = 'https://github.com/quizlet/material-ui/blob/master';

const hurmegeosans = [{
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-400.fceb7fa657e6aa7.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-400.8d9738c6b66ccd1.woff) format("woff")',
  unicodeRange: 'U+00a0-00ff,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-2018,U+201a-206f,U+2070-209f,U+20ac,U+2212',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-600.df51690e7e65560.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-600.3ebe1f77c946598.woff) format("woff")',
  unicodeRange: 'U+00a0-00ff,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-2018,U+201a-206f,U+2070-209f,U+20ac,U+2212',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '700',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-700.12c06977008dd01.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sup/hurmegeosans-no2-700.0b441f0a4b98a72.woff) format("woff")',
  unicodeRange: 'U+00a0-00ff,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-2018,U+201a-206f,U+2070-209f,U+20ac,U+2212',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-400.b0d1fa6ac7268f9.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-400.0d7ffca8e0d154f.woff) format("woff")',
  unicodeRange: 'U+0000-007f,U+2019',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-600.c3230d124a38c02.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-600.617d65b335b4d10.woff) format("woff")',
  unicodeRange: 'U+0000-007f,U+2019',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '700',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-700.f964c59f80946ba.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-basic/hurmegeosans-no2-700.a2549fbf8a90f5b.woff) format("woff")',
  unicodeRange: 'U+0000-007f,U+2019',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-400.26210157740efb6.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-400.239e9a2996960a4.woff) format("woff")',
  unicodeRange: 'U+0100-024f,U+1e??,U+20a0-20ab,U+20ad-20cf,U+2c60-2c7f,U+a720-a7ff',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-600.0e10a35b1c1470e.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-600.02ea8dc66a1212a.woff) format("woff")',
  unicodeRange: 'U+0100-024f,U+1e??,U+20a0-20ab,U+20ad-20cf,U+2c60-2c7f,U+a720-a7ff',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'hurme_no2-webfont',
  fontStyle: 'normal',
  fontWeight: '700',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-700.6f4a55c53c2396e.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-ext/hurmegeosans-no2-700.56052daa0d1ea84.woff) format("woff")',
  unicodeRange: 'U+0100-024f,U+1e??,U+20a0-20ab,U+20ad-20cf,U+2c60-2c7f,U+a720-a7ff',
 }]

const libertinussans = [{
  fontDisplay: 'fallback',
  fontFamily: 'Libertinus Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-400.34800d1f9cfdaf7.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-400.fc0bd5e633209d3.woff) format("woff")',
  unicodeRange: 'U+2070-209',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'Libertinus Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-600.1e74bd3800f1436.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-600.5587c0315b8c31a.woff) format("woff")',
  unicodeRange: 'U+2070-209',
 }, {
  fontDisplay: 'fallback',
  fontFamily: 'Libertinus Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-700.1e74bd3800f1436.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-700.5587c0315b8c31a.woff) format("woff")',
  unicodeRange: 'U+2070-209',
 }, {
  fontDisplay: 'fallback',
  fontStyle: 'normal',
  fontWeight: '400',
  fontFamily: 'Libertinus Sans',
  src: 'url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-400.34800d1f9cfdaf7.woff2) format("woff2"), url(https://assets.quizlet.com/a/i/fonts/latin-sub/libertinussans-400.fc0bd5e633209d3.woff) format("woff")',
  unicodeRange: 'U+2070-209',
 }
];

const FONT_FACES = [...hurmegeosans, ...libertinussans];


module.exports = {
  FONT_FACES,
  CODE_VARIANTS,
  ACTION_TYPES,
  LANGUAGES,
  LANGUAGES_SSR,
  LANGUAGES_LABEL,
  LANGUAGES_IN_PROGRESS,
  SOURCE_CODE_ROOT_URL,
};
