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
    successAdd: 'Himno agregado correctamente',
    errorAdd: 'Error al agregar himno'
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
    successAdd: 'Hymn added successfully',
    errorAdd: 'Error adding hymn'
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyDWGSM12kNd9gXTQ-xBdvLZNCAcLjvzt5E",
  authDomain: "hymnvs-a5893.firebaseapp.com",
  projectId: "hymnvs-a5893",
  storageBucket: "hymnvs-a5893.firebasestorage.app",
  messagingSenderId: "1079696849240",
  appId: "1:1079696849240:web:5e217b9454b370697e8d2d",
  measurementId: "G-EGKEGT3ERW"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let hymns = [];
let hymnsLoaded = false;
let isLoggedIn = false;
let currentUser = '';

const USERS = [
  { user: 'admin', password: '1234' }
];

function checkLogin(user, password) {
  return USERS.find(u => u.user === user && u.password === password);
}

function updateTabsVisibility() {
  const tabAdd = document.querySelector('[data-tab="add"]');
  const tabsContainer = document.querySelector('.tabs');
  const userDisplay = document.getElementById('user-display');
  const tabConvertContent = document.getElementById('tab-convert');
  const tabAddContent = document.getElementById('tab-add');
  
  if (isLoggedIn) {
    if (tabAdd) tabAdd.style.display = '';
    if (tabsContainer) tabsContainer.style.display = '';
  } else {
    if (tabAdd) tabAdd.style.display = 'none';
    if (tabsContainer) tabsContainer.style.display = 'none';
    if (tabConvertContent) tabConvertContent.classList.remove('hidden');
    if (tabAddContent) tabAddContent.classList.add('hidden');
  }
  
  if (userDisplay) {
    userDisplay.textContent = isLoggedIn ? currentUser : '';
  }
}

async function loadHymns() {
  const loader = document.getElementById('initial-loader');
  loader.classList.remove('hidden');
  
  try {
    const snapshot = await db.collection('hymns').get();
    hymns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    hymns.sort((a, b) => a.edition1 - b.edition1);
    hymnsLoaded = true;
    console.log('Himnos cargados desde Firebase:', hymns.length);
  } catch (error) {
    console.error('Error cargando himnos:', error);
  } finally {
    loader.classList.add('hidden');
  }
}

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
  
  if (!hymnsLoaded) return;
  
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
  
  if (!hymnsLoaded) return;
  
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

loadHymns();

initTheme();
initLang();
updateTabsVisibility();

// Login
const loginToggle = document.getElementById('login-toggle');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const closeLoginBtn = document.getElementById('close-login');
const loginIcon = loginToggle.querySelector('svg');

function updateLoginButton() {
  console.log('updateLoginButton called, isLoggedIn:', isLoggedIn);
  const svg = loginToggle.querySelector('svg');
  console.log('SVG found:', svg);
  console.log('SVG innerHTML before:', svg.innerHTML);
  if (isLoggedIn) {
    svg.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    svg.innerHTML = '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>';
  }
  loginToggle.setAttribute('aria-label', isLoggedIn ? 'Logout' : 'Login');
  loginToggle.title = isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión';
  console.log('SVG innerHTML after:', svg.innerHTML);
}

loginToggle.addEventListener('click', () => {
  if (isLoggedIn) {
    document.getElementById('logout-modal').classList.remove('hidden');
  } else {
    loginModal.classList.remove('hidden');
  }
});

closeLoginBtn.addEventListener('click', () => {
  loginModal.classList.add('hidden');
  loginForm.reset();
});

const logoutModal = document.getElementById('logout-modal');
const confirmLogoutBtn = document.getElementById('confirm-logout');
const closeLogoutBtn = document.getElementById('close-logout');

confirmLogoutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  currentUser = '';
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('currentUser');
  logoutModal.classList.add('hidden');
  showToast('Sesión cerrada');
  updateTabsVisibility();
  updateLoginButton();
});

closeLogoutBtn.addEventListener('click', () => {
  logoutModal.classList.add('hidden');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('login-user').value;
  const password = document.getElementById('login-password').value;
  const validUser = checkLogin(user, password);
  
  if (validUser) {
    isLoggedIn = true;
    currentUser = validUser.user;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', currentUser);
    loginModal.classList.add('hidden');
    loginForm.reset();
    showToast('Bienvenido ' + currentUser);
    updateTabsVisibility();
    updateLoginButton();
  } else {
    showToast('Usuario o contraseña incorrectos', true);
  }
});

// Check if already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
  isLoggedIn = true;
  currentUser = localStorage.getItem('currentUser') || '';
  updateTabsVisibility();
  updateLoginButton();
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!isLoggedIn) return;
    
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
const submitBtn = addForm.querySelector('.submit-btn');
const addInputs = addForm.querySelectorAll('.input');
const toast = document.getElementById('toast');

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle('error', isError);
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const edition1 = parseInt(document.getElementById('add-edition1').value, 10);
  const edition2 = parseInt(document.getElementById('add-edition2').value, 10);
  const sheetmusic = document.getElementById('add-sheetmusic').value || null;
  
  const newHymn = {
    edition1,
    edition2,
    sheetmusic
  };
  
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = '...';
  addInputs.forEach(input => input.disabled = true);
  
  try {
    await db.collection('hymns').add(newHymn);
    console.log('Nuevo himno agregado:', newHymn);
    addForm.reset();
    
    if (isLoggedIn) {
      document.querySelector('[data-tab="convert"]').click();
    }
    
    await loadHymns();
    
    setTimeout(() => {
      showToast(translations[currentLang].successAdd);
    }, 100);
  } catch (error) {
    console.error('Error:', error);
    showToast(translations[currentLang].errorAdd, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
    addInputs.forEach(input => input.disabled = false);
  }
});