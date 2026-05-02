const translations = {
  es: {
    appName: 'HymnVS',
    subtitle: 'Convierte números de himnos entre ediciones',
    labelEdition1: 'Buscar en Edición 1',
    labelEdition2: 'Buscar en Edición 2',
    placeholder: 'Ingresa número de himno',
    resultEdition1: 'Edisión 1:',
    resultEdition2: 'Edición 2:',
    sheetmusic: 'Partitura:',
    notFound: 'Himno no encontrado',
    footer: 'HymnVS — Convertidor de Himnos',
    tabConvert: 'Convertir',
    tabAdd: 'Agregar',
    labelAddEdition1: 'Edición 1',
    labelAddEdition2: 'Edición 2',
    labelAddSheetmusic: 'Partitura',
    btnAdd: 'Agregar',
    successAdd: 'Himno agregado correctamente'
  },
  en: {
    appName: 'HymnVS',
    subtitle: 'Convert hymn numbers between editions',
    labelEdition1: 'Search in Edition 1',
    labelEdition2: 'Search in Edition 2',
    placeholder: 'Enter hymn number',
    resultEdition1: 'Edition 1:',
    resultEdition2: 'Edition 2:',
    sheetmusic: 'Sheetmusic:',
    notFound: 'Hymn not found',
    footer: 'HymnVS — Hymn Number Converter',
    tabConvert: 'Convert',
    tabAdd: 'Add',
    labelAddEdition1: 'Edition 1',
    labelAddEdition2: 'Edition 2',
    labelAddSheetmusic: 'Sheetmusic',
    btnAdd: 'Add',
    successAdd: 'Hymn added successfully'
  }
};

let currentLang = 'es';

const langToggle = document.getElementById('lang-toggle');

function initLang() {
  savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  updateLang();
}

function updateLang() {
  langToggle.textContent = currentLang === 'es' ? 'ES' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  updateLang();
}

langToggle.addEventListener('click', toggleLang);

const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateIcons('dark');
  }
}

function updateIcons(theme) {
  if (theme === 'dark') {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcons(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

const hymns = [
    { "edition1": 1, "edition2": 1, "sheetmusic": "E1" },
  { "edition1": 2, "edition2": 2, "sheetmusic": "004" },
  { "edition1": 3, "edition2": 4, "sheetmusic": "001" },
  { "edition1": 4, "edition2": 5, "sheetmusic": "002" },
  { "edition1": 5, "edition2": 6, "sheetmusic": "005" },
  { "edition1": 6, "edition2": 7, "sheetmusic": "006" },
  { "edition1": 7, "edition2": 8, "sheetmusic": "007" },
  { "edition1": 8, "edition2": 9, "sheetmusic": "009" },
  { "edition1": 9, "edition2": 11, "sheetmusic": "014" },
  { "edition1": 10, "edition2": 12, "sheetmusic": "010" },
  { "edition1": 11, "edition2": 13, "sheetmusic": "011" },
  { "edition1": 12, "edition2": 14, "sheetmusic": "016" },
  { "edition1": 13, "edition2": 16, "sheetmusic": "019" },
  { "edition1": 14, "edition2": 17, "sheetmusic": "018" },
  { "edition1": 15, "edition2": 18, "sheetmusic": "017" },
  { "edition1": 16, "edition2": 19, "sheetmusic": "020" },
  { "edition1": 17, "edition2": 20, "sheetmusic": "021" },
  { "edition1": 18, "edition2": 22, "sheetmusic": "023" },
  { "edition1": 19, "edition2": 24, "sheetmusic": "013" },
  { "edition1": 20, "edition2": 25, "sheetmusic": "E29" },
  { "edition1": 21, "edition2": 26, "sheetmusic": "012" },
  { "edition1": 22, "edition2": 27, "sheetmusic": "338" },
  { "edition1": 23, "edition2": 29, "sheetmusic": "25" },
  { "edition1": 24, "edition2": 30, "sheetmusic": "26" },
  { "edition1": 25, "edition2": 31, "sheetmusic": "28" },
  { "edition1": 26, "edition2": 32, "sheetmusic": "32" },
  { "edition1": 27, "edition2": 33, "sheetmusic": "29" },
  { "edition1": 28, "edition2": 35, "sheetmusic": "30" },
  { "edition1": 29, "edition2": 38, "sheetmusic": "33" },
  { "edition1": 30, "edition2": 39, "sheetmusic": "285" },
  { "edition1": 31, "edition2": 41, "sheetmusic": "34" },
  { "edition1": 32, "edition2": 44, "sheetmusic": "36" },
  { "edition1": 33, "edition2": 45, "sheetmusic": "38" },
  { "edition1": 34, "edition2": 46, "sheetmusic": "365" },
  { "edition1": 35, "edition2": 48, "sheetmusic": "338" },
  { "edition1": 36, "edition2": 49, "sheetmusic": "39" },
  { "edition1": 37, "edition2": 51, "sheetmusic": "44" },
  { "edition1": 38, "edition2": 52, "sheetmusic": "45" },
  { "edition1": 39, "edition2": 53, "sheetmusic": "48" },
  { "edition1": 40, "edition2": 55, "sheetmusic": "40" },
  { "edition1": 41, "edition2": 58, "sheetmusic": null },
  { "edition1": 42, "edition2": 59, "sheetmusic": "41" },
  { "edition1": 43, "edition2": 60, "sheetmusic": "47" },
  { "edition1": 44, "edition2": 61, "sheetmusic": "46" },
  { "edition1": 45, "edition2": 62, "sheetmusic": "42" },
  { "edition1": 46, "edition2": 65, "sheetmusic": "43" },
  { "edition1": 47, "edition2": 66, "sheetmusic": "339" },
  { "edition1": 48, "edition2": 67, "sheetmusic": "C78" },
  { "edition1": 49, "edition2": 68, "sheetmusic": "49" },
  { "edition1": 50, "edition2": 69, "sheetmusic": "E86" },
  { "edition1": 51, "edition2": 77, "sheetmusic": "E101" },
  { "edition1": 52, "edition2": 81, "sheetmusic": "E105" },
  { "edition1": 53, "edition2": 82, "sheetmusic": "53" },
  { "edition1": 54, "edition2": 84, "sheetmusic": "51" },
  { "edition1": 55, "edition2": 86, "sheetmusic": "54" },
  { "edition1": 56, "edition2": 89, "sheetmusic": "57" },
  { "edition1": 57, "edition2": 90, "sheetmusic": "E118" },
  { "edition1": 58, "edition2": 94, "sheetmusic": "58" },
  { "edition1": 59, "edition2": 95, "sheetmusic": "60" },
  { "edition1": 60, "edition2": 96, "sheetmusic": "59" },
  { "edition1": 61, "edition2": 98, "sheetmusic": "65" },
  { "edition1": 62, "edition2": 99, "sheetmusic": "66" },
  { "edition1": 63, "edition2": 100, "sheetmusic": "64" },
  { "edition1": 64, "edition2": 101, "sheetmusic": "14" },
  { "edition1": 65, "edition2": 104, "sheetmusic": "452" },
  { "edition1": 66, "edition2": 106, "sheetmusic": "62" },
  { "edition1": 67, "edition2": 107, "sheetmusic": "72" },
  { "edition1": 68, "edition2": 109, "sheetmusic": "63" },
  { "edition1": 69, "edition2": 110, "sheetmusic": "70" },
  { "edition1": 70, "edition2": 112, "sheetmusic": "68" },
  { "edition1": 71, "edition2": 114, "sheetmusic": "67" },
  { "edition1": 72, "edition2": 117, "sheetmusic": "69" },
  { "edition1": 73, "edition2": 119, "sheetmusic": "E146" },
  { "edition1": 74, "edition2": 121, "sheetmusic": "74" },
  { "edition1": 75, "edition2": 123, "sheetmusic": "72" },
  { "edition1": 76, "edition2": 124, "sheetmusic": "79" },
  { "edition1": 77, "edition2": 126, "sheetmusic": "77" },
  { "edition1": 78, "edition2": 129, "sheetmusic": "476" },
  { "edition1": 79, "edition2": 130, "sheetmusic": "80" },
  { "edition1": 80, "edition2": 133, "sheetmusic": "83" },
  { "edition1": 81, "edition2": 134, "sheetmusic": "86" },
  { "edition1": 82, "edition2": 135, "sheetmusic": "84" },
  { "edition1": 83, "edition2": 136, "sheetmusic": "85" },
  { "edition1": 84, "edition2": 140, "sheetmusic": "90" },
  { "edition1": 85, "edition2": 141, "sheetmusic": "66" },
  { "edition1": 86, "edition2": 147, "sheetmusic": "96" },
  { "edition1": 87, "edition2": 148, "sheetmusic": "98" },
  { "edition1": 88, "edition2": 149, "sheetmusic": "103" },
  { "edition1": 89, "edition2": 154, "sheetmusic": "107" },
  { "edition1": 90, "edition2": 156, "sheetmusic": "100" },
  { "edition1": 91, "edition2": 161, "sheetmusic": "106" },
  { "edition1": 92, "edition2": 162, "sheetmusic": "E1103" },
  { "edition1": 93, "edition2": 163, "sheetmusic": "129" },
  { "edition1": 94, "edition2": 165, "sheetmusic": "113" },
  { "edition1": 95, "edition2": 167, "sheetmusic": "112" },
  { "edition1": 96, "edition2": 172, "sheetmusic": "117" },
  { "edition1": 97, "edition2": 173, "sheetmusic": "115" },
  { "edition1": 98, "edition2": 174, "sheetmusic": "118" },
  { "edition1": 99, "edition2": 175, "sheetmusic": "121" },
  { "edition1": 100, "edition2": 176, "sheetmusic": "122" },
  { "edition1": 101, "edition2": 177, "sheetmusic": "120" },
  { "edition1": 102, "edition2": 178, "sheetmusic": "116" },
  { "edition1": 103, "edition2": 180, "sheetmusic": "126" },
  { "edition1": 104, "edition2": 181, "sheetmusic": "127" },
  { "edition1": 105, "edition2": 182, "sheetmusic": "123" },
  { "edition1": 106, "edition2": 183, "sheetmusic": "E1108" },
  { "edition1": 107, "edition2": 185, "sheetmusic": "124" },
  { "edition1": 108, "edition2": 186, "sheetmusic": "125" },
  { "edition1": 109, "edition2": 188, "sheetmusic": "128" },
  { "edition1": 110, "edition2": 189, "sheetmusic": "92" },
  { "edition1": 111, "edition2": 190, "sheetmusic": null },
  { "edition1": 112, "edition2": 191, "sheetmusic": "E242" },
  { "edition1": 113, "edition2": 192, "sheetmusic": "130" },
  { "edition1": 114, "edition2": 193, "sheetmusic": "131" },
  { "edition1": 115, "edition2": 195, "sheetmusic": "E248" },
  { "edition1": 116, "edition2": 197, "sheetmusic": "134" },
  { "edition1": 117, "edition2": 198, "sheetmusic": "133" },
  { "edition1": 118, "edition2": 199, "sheetmusic": "E1115" },
  { "edition1": 119, "edition2": 200, "sheetmusic": "136" },
  { "edition1": 120, "edition2": 206, "sheetmusic": "140" },
  { "edition1": 121, "edition2": 207, "sheetmusic": "139" },
  { "edition1": 122, "edition2": 209, "sheetmusic": "E1119" },
  { "edition1": 123, "edition2": 211, "sheetmusic": "141" },
  { "edition1": 124, "edition2": 212, "sheetmusic": "154" },
  { "edition1": 125, "edition2": 213, "sheetmusic": "E1116" },
  { "edition1": 126, "edition2": 214, "sheetmusic": "E1117" },
  { "edition1": 127, "edition2": 215, "sheetmusic": "142" },
  { "edition1": 128, "edition2": 216, "sheetmusic": "143" },
  { "edition1": 129, "edition2": 217, "sheetmusic": "144" },
  { "edition1": 130, "edition2": 219, "sheetmusic": "147" },
  { "edition1": 131, "edition2": 220, "sheetmusic": "149" },
  { "edition1": 132, "edition2": 221, "sheetmusic": "150" },
  { "edition1": 133, "edition2": 224, "sheetmusic": "146" },
  { "edition1": 134, "edition2": 225, "sheetmusic": "151" },
  { "edition1": 135, "edition2": 226, "sheetmusic": "152" },
  { "edition1": 136, "edition2": 228, "sheetmusic": "E1122" },
  { "edition1": 137, "edition2": 230, "sheetmusic": "E284" },
  { "edition1": 138, "edition2": 232, "sheetmusic": "156" },
  { "edition1": 139, "edition2": 233, "sheetmusic": "E288" },
  { "edition1": 140, "edition2": 234, "sheetmusic": "169" },
  { "edition1": 141, "edition2": 236, "sheetmusic": "157" },
  { "edition1": 142, "edition2": 237, "sheetmusic": "E238" },
  { "edition1": 143, "edition2": 238, "sheetmusic": "159" },
  { "edition1": 144, "edition2": 239, "sheetmusic": "161" },
  { "edition1": 145, "edition2": 240, "sheetmusic": "160" },
  { "edition1": 146, "edition2": 242, "sheetmusic": "163" },
  { "edition1": 147, "edition2": 243, "sheetmusic": "164" },
  { "edition1": 148, "edition2": 244, "sheetmusic": "E305" },
  { "edition1": 149, "edition2": 245, "sheetmusic": "E306" },
  { "edition1": 150, "edition2": 247, "sheetmusic": "165" },
  { "edition1": 151, "edition2": 252, "sheetmusic": "168" },
  { "edition1": 152, "edition2": 253, "sheetmusic": "170" },
  { "edition1": 153, "edition2": 254, "sheetmusic": "173" },
  { "edition1": 154, "edition2": 257, "sheetmusic": "E313" },
  { "edition1": 155, "edition2": 263, "sheetmusic": "176" },
  { "edition1": 156, "edition2": 265, "sheetmusic": "177" },
  { "edition1": 157, "edition2": 266, "sheetmusic": "178" },
  { "edition1": 158, "edition2": 267, "sheetmusic": "175" },
  { "edition1": 159, "edition2": 269, "sheetmusic": null },
  { "edition1": 160, "edition2": 270, "sheetmusic": "180" },
  { "edition1": 161, "edition2": 273, "sheetmusic": "E340" },
  { "edition1": 162, "edition2": 274, "sheetmusic": "E1127" },
  { "edition1": 163, "edition2": 275, "sheetmusic": "171" },
  { "edition1": 164, "edition2": 276, "sheetmusic": "172" },
  { "edition1": 165, "edition2": 280, "sheetmusic": "181" },
  { "edition1": 166, "edition2": 891, "sheetmusic": "182" },
  { "edition1": 167, "edition2": 282, "sheetmusic": "E350" },
  { "edition1": 168, "edition2": 296, "sheetmusic": "185" },
  { "edition1": 169, "edition2": 299, "sheetmusic": "E1133" },
  { "edition1": 170, "edition2": 302, "sheetmusic": "188" },
  { "edition1": 171, "edition2": 305, "sheetmusic": "190" },
  { "edition1": 172, "edition2": 306, "sheetmusic": "E390" },
  { "edition1": 173, "edition2": 309, "sheetmusic": "191" },
  { "edition1": 174, "edition2": 310, "sheetmusic": "192" },
  { "edition1": 175, "edition2": 312, "sheetmusic": "194" },
  { "edition1": 176, "edition2": 313, "sheetmusic": "193" },
  { "edition1": 177, "edition2": 314, "sheetmusic": "E403" },
  { "edition1": 178, "edition2": 315, "sheetmusic": "E405" },
  { "edition1": 179, "edition2": 318, "sheetmusic": "E412" },
  { "edition1": 180, "edition2": 324, "sheetmusic": "196" },
  { "edition1": 181, "edition2": 325, "sheetmusic": "E430" },
  { "edition1": 182, "edition2": 327, "sheetmusic": "E1134" },
  { "edition1": 183, "edition2": 331, "sheetmusic": "198" },
  { "edition1": 184, "edition2": 333, "sheetmusic": "200" },
  { "edition1": 185, "edition2": 336, "sheetmusic": "201" },
  { "edition1": 186, "edition2": 337, "sheetmusic": "E437" },
  { "edition1": 187, "edition2": 338, "sheetmusic": "203" },
  { "edition1": 188, "edition2": 339, "sheetmusic": "E439" },
  { "edition1": 189, "edition2": 340, "sheetmusic": "204" },
  { "edition1": 190, "edition2": 343, "sheetmusic": "E445" },
  { "edition1": 191, "edition2": 344, "sheetmusic": "E446" },
  { "edition1": 192, "edition2": 345, "sheetmusic": "205" },
  { "edition1": 193, "edition2": 347, "sheetmusic": "206" },
  { "edition1": 194, "edition2": 352, "sheetmusic": "E463" },
  { "edition1": 195, "edition2": 358, "sheetmusic": "215" },
  { "edition1": 196, "edition2": 359, "sheetmusic": "214" },
  { "edition1": 197, "edition2": 361, "sheetmusic": "217" },
  { "edition1": 198, "edition2": 362, "sheetmusic": "218" },
  { "edition1": 199, "edition2": 365, "sheetmusic": "219" },
  { "edition1": 200, "edition2": 366, "sheetmusic": "220" },
  { "edition1": 201, "edition2": 367, "sheetmusic": "224" },
  { "edition1": 202, "edition2": 371, "sheetmusic": "223" },
  { "edition1": 203, "edition2": 372, "sheetmusic": "222" },
  { "edition1": 204, "edition2": 374, "sheetmusic": "226" },
  { "edition1": 205, "edition2": 375, "sheetmusic": "228" },
  { "edition1": 206, "edition2": 376, "sheetmusic": "229" },
  { "edition1": 207, "edition2": 378, "sheetmusic": "230" },
  { "edition1": 208, "edition2": 379, "sheetmusic": "231" },
  { "edition1": 209, "edition2": 381, "sheetmusic": "232" },
  { "edition1": 210, "edition2": 382, "sheetmusic": "233" },
  { "edition1": 211, "edition2": 383, "sheetmusic": "234" },
  { "edition1": 212, "edition2": 384, "sheetmusic": "235" },
  { "edition1": 213, "edition2": 385, "sheetmusic": "238" },
  { "edition1": 214, "edition2": 386, "sheetmusic": "239" },
  { "edition1": 215, "edition2": 387, "sheetmusic": "240" },
  { "edition1": 216, "edition2": 388, "sheetmusic": "201" },
  { "edition1": 217, "edition2": 389, "sheetmusic": "241" },
  { "edition1": 218, "edition2": 390, "sheetmusic": "243" },
  { "edition1": 219, "edition2": 391, "sheetmusic": "237" },
  { "edition1": 220, "edition2": 392, "sheetmusic": "242" },
  { "edition1": 221, "edition2": 393, "sheetmusic": "244" },
  { "edition1": 222, "edition2": 496, "sheetmusic": "310" },
  { "edition1": 223, "edition2": 497, "sheetmusic": "151" },
  { "edition1": 224, "edition2": 394, "sheetmusic": "245" },
  { "edition1": 225, "edition2": 395, "sheetmusic": "247" },
  { "edition1": 226, "edition2": 397, "sheetmusic": "404" },
  { "edition1": 227, "edition2": 398, "sheetmusic": "188" },
  { "edition1": 228, "edition2": 399, "sheetmusic": "248" },
  { "edition1": 229, "edition2": 400, "sheetmusic": "E1149" },
  { "edition1": 230, "edition2": 401, "sheetmusic": "246" },
  { "edition1": 231, "edition2": 402, "sheetmusic": "249" },
  { "edition1": 232, "edition2": 403, "sheetmusic": "250" },
  { "edition1": 233, "edition2": 404, "sheetmusic": "262" },
  { "edition1": 234, "edition2": 405, "sheetmusic": "261" },
  { "edition1": 235, "edition2": 408, "sheetmusic": "253" },
  { "edition1": 236, "edition2": 409, "sheetmusic": "E514" },
  { "edition1": 237, "edition2": 413, "sheetmusic": "256" },
  { "edition1": 238, "edition2": 421, "sheetmusic": "263" },
  { "edition1": 239, "edition2": 422, "sheetmusic": "263" },
  { "edition1": 240, "edition2": 423, "sheetmusic": "264" },
  { "edition1": 241, "edition2": 424, "sheetmusic": "265" },
  { "edition1": 242, "edition2": 425, "sheetmusic": "266" },
  { "edition1": 243, "edition2": 426, "sheetmusic": "267" },
  { "edition1": 244, "edition2": 488, "sheetmusic": "E1187" },
  { "edition1": 245, "edition2": 471, "sheetmusic": "259" },
  { "edition1": 246, "edition2": 474, "sheetmusic": "E1167" },
  { "edition1": 247, "edition2": 475, "sheetmusic": "E11968" },
  { "edition1": 248, "edition2": 477, "sheetmusic": "E1170" },
  { "edition1": 249, "edition2": 484, "sheetmusic": "E1178" },
  { "edition1": 250, "edition2": 485, "sheetmusic": "77" },
  { "edition1": 251, "edition2": 486, "sheetmusic": "E1180" },
  { "edition1": 252, "edition2": 487, "sheetmusic": "115" },
  { "edition1": 253, "edition2": 427, "sheetmusic": "268" },
  { "edition1": 254, "edition2": 428, "sheetmusic": "269" },
  { "edition1": 255, "edition2": 430, "sheetmusic": "271" },
  { "edition1": 256, "edition2": 432, "sheetmusic": "277" },
  { "edition1": 257, "edition2": 433, "sheetmusic": "282" },
  { "edition1": 258, "edition2": 434, "sheetmusic": "279" },
  { "edition1": 259, "edition2": 437, "sheetmusic": "280" },
  { "edition1": 260, "edition2": 438, "sheetmusic": "283" },
  { "edition1": 261, "edition2": 441, "sheetmusic": "285" },
  { "edition1": 262, "edition2": 443, "sheetmusic": "286" },
  { "edition1": 263, "edition2": 444, "sheetmusic": "289" },
  { "edition1": 264, "edition2": 445, "sheetmusic": "287" },
  { "edition1": 265, "edition2": 446, "sheetmusic": "288" },
  { "edition1": 266, "edition2": 447, "sheetmusic": "9" },
  { "edition1": 267, "edition2": 448, "sheetmusic": "121" },
  { "edition1": 268, "edition2": 453, "sheetmusic": "290" },
  { "edition1": 269, "edition2": 456, "sheetmusic": "E589" },
  { "edition1": 270, "edition2": 458, "sheetmusic": "295" },
  { "edition1": 271, "edition2": 459, "sheetmusic": "297" },
  { "edition1": 272, "edition2": 460, "sheetmusic": "296" },
  { "edition1": 273, "edition2": 461, "sheetmusic": "298" },
  { "edition1": 274, "edition2": 861, "sheetmusic": "300" },
  { "edition1": 275, "edition2": 462, "sheetmusic": "303" },
  { "edition1": 276, "edition2": 463, "sheetmusic": "302" },
  { "edition1": 277, "edition2": 464, "sheetmusic": "273" },
  { "edition1": 278, "edition2": 469, "sheetmusic": "274" },
  { "edition1": 279, "edition2": 478, "sheetmusic": "E1171" },
  { "edition1": 280, "edition2": 479, "sheetmusic": "E1173" },
  { "edition1": 281, "edition2": 480, "sheetmusic": "301" },
  { "edition1": 282, "edition2": 481, "sheetmusic": "449" },
  { "edition1": 283, "edition2": 493, "sheetmusic": "313" },
  { "edition1": 284, "edition2": 495, "sheetmusic": "309" },
  { "edition1": 285, "edition2": 498, "sheetmusic": "E1195" },
  { "edition1": 286, "edition2": 499, "sheetmusic": "E11968" },
  { "edition1": 287, "edition2": 501, "sheetmusic": "314" },
  { "edition1": 288, "edition2": 502, "sheetmusic": "315" },
  { "edition1": 289, "edition2": 503, "sheetmusic": "317" },
  { "edition1": 290, "edition2": 504, "sheetmusic": "E611" },
  { "edition1": 291, "edition2": 505, "sheetmusic": "316" },
  { "edition1": 292, "edition2": 508, "sheetmusic": "416" },
  { "edition1": 293, "edition2": 513, "sheetmusic": "310" },
  { "edition1": 294, "edition2": 516, "sheetmusic": "319" },
  { "edition1": 295, "edition2": 517, "sheetmusic": "320" },
  { "edition1": 296, "edition2": 519, "sheetmusic": "E630" },
  { "edition1": 297, "edition2": 520, "sheetmusic": "321" },
  { "edition1": 298, "edition2": 524, "sheetmusic": "325" },
  { "edition1": 299, "edition2": 525, "sheetmusic": "E640" },
  { "edition1": 300, "edition2": 442, "sheetmusic": "329" },
  { "edition1": 301, "edition2": 535, "sheetmusic": "E1235" },
  { "edition1": 302, "edition2": 537, "sheetmusic": "328" },
  { "edition1": 303, "edition2": 536, "sheetmusic": "326" },
  { "edition1": 304, "edition2": 552, "sheetmusic": "333" },
  { "edition1": 305, "edition2": 562, "sheetmusic": "336" },
  { "edition1": 306, "edition2": 563, "sheetmusic": "337" },
  { "edition1": 307, "edition2": 564, "sheetmusic": "338" },
  { "edition1": 308, "edition2": 565, "sheetmusic": "339" },
  { "edition1": 309, "edition2": 567, "sheetmusic": "340" },
  { "edition1": 310, "edition2": 568, "sheetmusic": "341" },
  { "edition1": 311, "edition2": 569, "sheetmusic": "342" },
  { "edition1": 312, "edition2": 570, "sheetmusic": "343" },
  { "edition1": 313, "edition2": 571, "sheetmusic": "344" },
  { "edition1": 314, "edition2": 572, "sheetmusic": "345" },
  { "edition1": 315, "edition2": 573, "sheetmusic": "346" },
  { "edition1": 316, "edition2": 574, "sheetmusic": "347" },
  { "edition1": 317, "edition2": 584, "sheetmusic": "E1214" },
  { "edition1": 318, "edition2": 575, "sheetmusic": "348" },
  { "edition1": 319, "edition2": 576, "sheetmusic": "E746" },
  { "edition1": 320, "edition2": 577, "sheetmusic": "349" },
  { "edition1": 321, "edition2": 578, "sheetmusic": "E748" },
  { "edition1": 322, "edition2": 579, "sheetmusic": "E749" },
  { "edition1": 323, "edition2": 580, "sheetmusic": "350" },
  { "edition1": 324, "edition2": 583, "sheetmusic": "E1212" },
  { "edition1": 325, "edition2": 585, "sheetmusic": "E1216" },
  { "edition1": 326, "edition2": 588, "sheetmusic": "351" },
  { "edition1": 327, "edition2": 592, "sheetmusic": "E769" },
  { "edition1": 328, "edition2": 593, "sheetmusic": "354" },
  { "edition1": 329, "edition2": 594, "sheetmusic": "353" },
  { "edition1": 330, "edition2": 597, "sheetmusic": "330" },
  { "edition1": 331, "edition2": 601, "sheetmusic": "356" },
  { "edition1": 332, "edition2": 602, "sheetmusic": "357" },
  { "edition1": 333, "edition2": 603, "sheetmusic": "358" },
  { "edition1": 334, "edition2": 604, "sheetmusic": "359" },
  { "edition1": 335, "edition2": 605, "sheetmusic": "360" },
  { "edition1": 336, "edition2": 606, "sheetmusic": "361" },
  { "edition1": 337, "edition2": 608, "sheetmusic": "E786" },
  { "edition1": 338, "edition2": 617, "sheetmusic": "E798" },
  { "edition1": 339, "edition2": 618, "sheetmusic": "364" },
  { "edition1": 340, "edition2": 620, "sheetmusic": "366" },
  { "edition1": 341, "edition2": 621, "sheetmusic": "367" },
  { "edition1": 342, "edition2": 623, "sheetmusic": "E806" },
  { "edition1": 343, "edition2": 626, "sheetmusic": "370" },
  { "edition1": 344, "edition2": 627, "sheetmusic": "369" },
  { "edition1": 345, "edition2": 628, "sheetmusic": "368" },
  { "edition1": 346, "edition2": 629, "sheetmusic": "E804" },
  { "edition1": 347, "edition2": 630, "sheetmusic": "371" },
  { "edition1": 348, "edition2": 636, "sheetmusic": "374" },
  { "edition1": 349, "edition2": 637, "sheetmusic": "375" },
  { "edition1": 350, "edition2": 638, "sheetmusic": "E821" },
  { "edition1": 351, "edition2": 641, "sheetmusic": "378" },
  { "edition1": 352, "edition2": 676, "sheetmusic": "E1220" },
  { "edition1": 353, "edition2": 644, "sheetmusic": "E831" },
  { "edition1": 354, "edition2": 645, "sheetmusic": "377" },
  { "edition1": 355, "edition2": 646, "sheetmusic": "E1243" },
  { "edition1": 356, "edition2": 649, "sheetmusic": "382" },
  { "edition1": 357, "edition2": 651, "sheetmusic": "385" },
  { "edition1": 358, "edition2": 652, "sheetmusic": "384" },
  { "edition1": 359, "edition2": 653, "sheetmusic": "236" },
  { "edition1": 360, "edition2": 657, "sheetmusic": "386" },
  { "edition1": 361, "edition2": 658, "sheetmusic": "388" },
  { "edition1": 362, "edition2": 659, "sheetmusic": "E847" },
  { "edition1": 363, "edition2": 660, "sheetmusic": "387" },
  { "edition1": 364, "edition2": 662, "sheetmusic": "390" },
  { "edition1": 365, "edition2": 663, "sheetmusic": "389" },
  { "edition1": 366, "edition2": 664, "sheetmusic": "E853" },
  { "edition1": 367, "edition2": 665, "sheetmusic": "E854" },
  { "edition1": 368, "edition2": 666, "sheetmusic": "E855" },
  { "edition1": 369, "edition2": 677, "sheetmusic": "393" },
  { "edition1": 370, "edition2": 678, "sheetmusic": "401" },
  { "edition1": 371, "edition2": 679, "sheetmusic": "E1223" },
  { "edition1": 372, "edition2": 680, "sheetmusic": "E1224" },
  { "edition1": 373, "edition2": 682, "sheetmusic": "394" },
  { "edition1": 374, "edition2": 684, "sheetmusic": "E1229" },
  { "edition1": 375, "edition2": 686, "sheetmusic": "E1231" },
  { "edition1": 376, "edition2": 687, "sheetmusic": "395" },
  { "edition1": 377, "edition2": 689, "sheetmusic": "E1234" },
  { "edition1": 378, "edition2": 690, "sheetmusic": "E1235" },
  { "edition1": 379, "edition2": 692, "sheetmusic": "396" },
  { "edition1": 380, "edition2": 698, "sheetmusic": "E1246" },
  { "edition1": 381, "edition2": 698, "sheetmusic": "398" },
  { "edition1": 382, "edition2": 700, "sheetmusic": "279" },
  { "edition1": 383, "edition2": 700, "sheetmusic": "E1252" },
  { "edition1": 384, "edition2": 701, "sheetmusic": "241" },
  { "edition1": 385, "edition2": 702, "sheetmusic": "399" },
  { "edition1": 386, "edition2": 702, "sheetmusic": "E1260" },
  { "edition1": 387, "edition2": 674, "sheetmusic": "E1265" },
  { "edition1": 388, "edition2": 704, "sheetmusic": "428" },
  { "edition1": 389, "edition2": 705, "sheetmusic": "30" },
  { "edition1": 390, "edition2": 705, "sheetmusic": "403" },
  { "edition1": 391, "edition2": 709, "sheetmusic": "404" },
  { "edition1": 392, "edition2": 711, "sheetmusic": "406" },
  { "edition1": 393, "edition2": 712, "sheetmusic": "407" },
  { "edition1": 394, "edition2": 719, "sheetmusic": "394" },
  { "edition1": 395, "edition2": 725, "sheetmusic": "E877" },
  { "edition1": 396, "edition2": 726, "sheetmusic": "350" },
  { "edition1": 397, "edition2": 728, "sheetmusic": "E882" },
  { "edition1": 398, "edition2": 729, "sheetmusic": "415" },
  { "edition1": 399, "edition2": 730, "sheetmusic": "416" },
  { "edition1": 400, "edition2": 733, "sheetmusic": "418" },
  { "edition1": 401, "edition2": 734, "sheetmusic": "420" },
  { "edition1": 402, "edition2": 738, "sheetmusic": "69" },
  { "edition1": 403, "edition2": 739, "sheetmusic": "421" },
  { "edition1": 404, "edition2": 743, "sheetmusic": "419" },
  { "edition1": 405, "edition2": 745, "sheetmusic": "422" },
  { "edition1": 406, "edition2": 747, "sheetmusic": "E908" },
  { "edition1": 407, "edition2": 748, "sheetmusic": "423" },
  { "edition1": 408, "edition2": 749, "sheetmusic": "353" },
  { "edition1": 409, "edition2": 750, "sheetmusic": "424" },
  { "edition1": 410, "edition2": 751, "sheetmusic": "425" },
  { "edition1": 411, "edition2": 752, "sheetmusic": "426" },
  { "edition1": 412, "edition2": 753, "sheetmusic": "427" },
  { "edition1": 413, "edition2": 754, "sheetmusic": "370" },
  { "edition1": 414, "edition2": 757, "sheetmusic": "429" },
  { "edition1": 415, "edition2": 759, "sheetmusic": "431" },
  { "edition1": 416, "edition2": 760, "sheetmusic": "432" },
  { "edition1": 417, "edition2": 761, "sheetmusic": "435" },
  { "edition1": 418, "edition2": 763, "sheetmusic": "E930" },
  { "edition1": 419, "edition2": 763, "sheetmusic": "434" },
  { "edition1": 420, "edition2": 767, "sheetmusic": "436" },
  { "edition1": 421, "edition2": 769, "sheetmusic": "437" },
  { "edition1": 422, "edition2": 770, "sheetmusic": "E1351" },
  { "edition1": 423, "edition2": 771, "sheetmusic": "471" },
  { "edition1": 424, "edition2": 772, "sheetmusic": "E937" },
  { "edition1": 425, "edition2": 773, "sheetmusic": "470" },
  { "edition1": 426, "edition2": 774, "sheetmusic": "009" },
  { "edition1": 427, "edition2": 775, "sheetmusic": "047" },
  { "edition1": 428, "edition2": 777, "sheetmusic": "472" },
  { "edition1": 429, "edition2": 778, "sheetmusic": "473" },
  { "edition1": 430, "edition2": 779, "sheetmusic": "474" },
  { "edition1": 431, "edition2": 781, "sheetmusic": "476" },
  { "edition1": 432, "edition2": 784, "sheetmusic": "002" },
  { "edition1": 433, "edition2": 786, "sheetmusic": "479" },
  { "edition1": 434, "edition2": 787, "sheetmusic": "480" },
  { "edition1": 435, "edition2": 789, "sheetmusic": "E954" },
  { "edition1": 436, "edition2": 790, "sheetmusic": "481" },
  { "edition1": 437, "edition2": 791, "sheetmusic": "482" },
  { "edition1": 438, "edition2": 793, "sheetmusic": "483" },
  { "edition1": 439, "edition2": 795, "sheetmusic": "484" },
  { "edition1": 440, "edition2": 796, "sheetmusic": "485" },
  { "edition1": 441, "edition2": 798, "sheetmusic": "486" },
  { "edition1": 442, "edition2": 799, "sheetmusic": "487" },
  { "edition1": 443, "edition2": 800, "sheetmusic": "E967" },
  { "edition1": 444, "edition2": 801, "sheetmusic": "E969" },
  { "edition1": 445, "edition2": 802, "sheetmusic": "488" },
  { "edition1": 446, "edition2": 805, "sheetmusic": "E1302" },
  { "edition1": 447, "edition2": 812, "sheetmusic": "E1311" },
  { "edition1": 448, "edition2": 814, "sheetmusic": "E1315" },
  { "edition1": 449, "edition2": 816, "sheetmusic": "E1319" },
  { "edition1": 450, "edition2": 818, "sheetmusic": "491" },
  { "edition1": 451, "edition2": 820, "sheetmusic": "492" },
  { "edition1": 452, "edition2": 821, "sheetmusic": "493" },
  { "edition1": 453, "edition2": 823, "sheetmusic": "494" },
  { "edition1": 454, "edition2": 824, "sheetmusic": "497" },
  { "edition1": 455, "edition2": 825, "sheetmusic": "495" },
  { "edition1": 456, "edition2": 826, "sheetmusic": "E978" },
  { "edition1": 457, "edition2": 828, "sheetmusic": "498" },
  { "edition1": 458, "edition2": 829, "sheetmusic": "499" },
  { "edition1": 459, "edition2": 819, "sheetmusic": "E1325" },
  { "edition1": 460, "edition2": 834, "sheetmusic": "440" },
  { "edition1": 461, "edition2": 837, "sheetmusic": "E991" },
  { "edition1": 462, "edition2": 839, "sheetmusic": "444" },
  { "edition1": 463, "edition2": 842, "sheetmusic": "445" },
  { "edition1": 464, "edition2": 844, "sheetmusic": "E999" },
  { "edition1": 465, "edition2": 844, "sheetmusic": "E1002" },
  { "edition1": 466, "edition2": 845, "sheetmusic": "443" },
  { "edition1": 467, "edition2": 846, "sheetmusic": "E1004" },
  { "edition1": 468, "edition2": 847, "sheetmusic": "E1005" },
  { "edition1": 469, "edition2": 848, "sheetmusic": "446" },
  { "edition1": 470, "edition2": 849, "sheetmusic": "447" },
  { "edition1": 471, "edition2": 850, "sheetmusic": "448" },
  { "edition1": 472, "edition2": 851, "sheetmusic": "449" },
  { "edition1": 473, "edition2": 852, "sheetmusic": "E1010" },
  { "edition1": 474, "edition2": 856, "sheetmusic": "452" },
  { "edition1": 475, "edition2": 857, "sheetmusic": "E1019" },
  { "edition1": 476, "edition2": 860, "sheetmusic": "454" },
  { "edition1": 477, "edition2": 866, "sheetmusic": "E1040" },
  { "edition1": 478, "edition2": 867, "sheetmusic": "457" },
  { "edition1": 479, "edition2": 869, "sheetmusic": "467" },
  { "edition1": 480, "edition2": 870, "sheetmusic": "456" },
  { "edition1": 481, "edition2": 872, "sheetmusic": "459" },
  { "edition1": 482, "edition2": 873, "sheetmusic": "458" },
  { "edition1": 483, "edition2": 874, "sheetmusic": "460" },
  { "edition1": 484, "edition2": 875, "sheetmusic": "461" },
  { "edition1": 485, "edition2": 879, "sheetmusic": "E1058" },
  { "edition1": 486, "edition2": 880, "sheetmusic": "464" },
  { "edition1": 487, "edition2": 884, "sheetmusic": "E1065" },
  { "edition1": 488, "edition2": 885, "sheetmusic": "465" },
  { "edition1": 489, "edition2": 886, "sheetmusic": "466" },
  { "edition1": 490, "edition2": 887, "sheetmusic": "246" },
  { "edition1": 491, "edition2": 894, "sheetmusic": "467" },
  { "edition1": 492, "edition2": 895, "sheetmusic": "C006" },
  { "edition1": 493, "edition2": 899, "sheetmusic": "468" },
  { "edition1": 494, "edition2": 901, "sheetmusic": "469" },
  { "edition1": 495, "edition2": 902, "sheetmusic": "C013" },
  { "edition1": 496, "edition2": 904, "sheetmusic": "E1337" },
  { "edition1": 497, "edition2": 906, "sheetmusic": "E1339" },
  { "edition1": 498, "edition2": 908, "sheetmusic": "E1341" },
  { "edition1": 499, "edition2": 910, "sheetmusic": "E1345" },
  { "edition1": 500, "edition2": 832, "sheetmusic": "157"}
];

const edition1Input = document.getElementById('edition1-input');
const edition2Input = document.getElementById('edition2-input');
const clearEdition1Btn = document.getElementById('clear-edition1');
const clearEdition2Btn = document.getElementById('clear-edition2');
const resultCard = document.getElementById('result');
const notFoundCard = document.getElementById('not-found');
const resultEdition1 = document.getElementById('result-edition1');
const resultEdition2 = document.getElementById('result-edition2');
const sheetmusicSpan = document.getElementById('sheetmusic');

function searchByEdition1(number) {
  return hymns.find(h => h.edition1 === number);
}

function searchByEdition2(number) {
  return hymns.find(h => h.edition2 === number);
}

function renderResult(result) {
  clearResult();
  
  if (result) {
    resultEdition1.textContent = result.edition1;
    resultEdition2.textContent = result.edition2;
    sheetmusicSpan.textContent = result.sheetmusic || '--';
    resultCard.classList.remove('hidden');
  } else {
    notFoundCard.classList.remove('hidden');
  }
}

function clearResult() {
  resultCard.classList.add('hidden');
  notFoundCard.classList.add('hidden');
}

function handleEdition1Input() {
  const value = edition1Input.value;
  edition2Input.value = '';
  clearResult();
  
  if (!value) return;
  
  const number = parseInt(value, 10);
  if (isNaN(number) || number < 1) return;
  
  const result = searchByEdition1(number);
  renderResult(result);
}

function handleEdition2Input() {
  const value = edition2Input.value;
  edition1Input.value = '';
  clearResult();
  
  if (!value) return;
  
  const number = parseInt(value, 10);
  if (isNaN(number) || number < 1) return;
  
  const result = searchByEdition2(number);
  renderResult(result);
}

function clearEdition1() {
  edition1Input.value = '';
  clearResult();
  edition1Input.focus();
}

function clearEdition2() {
  edition2Input.value = '';
  clearResult();
  edition2Input.focus();
}

edition1Input.addEventListener('input', handleEdition1Input);
edition2Input.addEventListener('input', handleEdition2Input);

edition1Input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleEdition1Input();
});

edition2Input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleEdition2Input();
});

clearEdition1Btn.addEventListener('click', clearEdition1);
clearEdition2Btn.addEventListener('click', clearEdition2);

edition1Input.addEventListener('paste', (e) => {
  e.preventDefault();
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const numbers = paste.replace(/[^0-9]/g, '');
  edition1Input.value = numbers;
  handleEdition1Input();
});

edition2Input.addEventListener('paste', (e) => {
  e.preventDefault();
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const numbers = paste.replace(/[^0-9]/g, '');
  edition2Input.value = numbers;
  handleEdition2Input();
});

initTheme();
initLang();

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    tabContents.forEach(content => {
      if (content.id === `tab-${tab}`) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  });
});

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const edition1 = parseInt(document.getElementById('add-edition1').value, 10);
  const edition2 = parseInt(document.getElementById('add-edition2').value, 10);
  const sheetmusic = document.getElementById('add-sheetmusic').value || null;
  
  const newHymn = {
    edition1,
    edition2,
    sheetmusic
  };
  
  hymns.push(newHymn);
  console.log('Nuevo himno agregado:', newHymn);
  console.log('Total de himnos:', hymns.length);
  
  addForm.reset();
  alert(translations[currentLang].successAdd);
});