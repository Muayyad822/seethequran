import { getContentToken } from './qfAuth';

const BASE_URL = 'https://api.qurancdn.com/api/qdc';

async function qfFetch(endpoint, params = {}) {
  const token = await getContentToken();
  const clientId = import.meta.env.VITE_QF_CLIENT_ID;

  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const res = await fetch(url, {
    headers: {
      'x-auth-token': token,
      'x-client-id': clientId,
    },
  });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

export const getChapters = () => qfFetch('/chapters');

export const getChapterInfo = (id) => qfFetch(`/chapters/${id}`);

export const getChapterDescription = (id) => qfFetch(`/chapters/${id}/info`);

export const getVerses = (chapterId) => qfFetch(`/verses/by_chapter/${chapterId}`, {
  translations: import.meta.env.VITE_DEFAULT_TRANSLATION_ID || 131,
  tafsirs: import.meta.env.VITE_DEFAULT_TAFSIR_ID || 169,
  fields: 'text_uthmani,text_imlaei,v1_page,verse_key',
  word_fields: 'text_uthmani,transliteration,translation',
  per_page: 50
});

export const getTafsir = (chapterId) => qfFetch(`/tafsirs/${import.meta.env.VITE_DEFAULT_TAFSIR_ID || 169}/by_chapter/${chapterId}`);

export const getRecitationTimestamps = (chapterId, reciterId = 7) => 
  qfFetch(`/recitations/${reciterId}/by_chapter/${chapterId}`);
