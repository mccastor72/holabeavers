/* ============================================
   Clase de Español — Script
   ============================================ */

/* ---- TABS (Syllabus) ---- */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

/* ---- VOCAB DATA ---- */
const vocab = [
  { es: 'hola',           en: 'hello',                  level: 'sp1' },
  { es: 'gracias',        en: 'thank you',               level: 'sp1' },
  { es: 'por favor',      en: 'please',                  level: 'sp1' },
  { es: 'la familia',     en: 'the family',              level: 'sp1' },
  { es: 'el libro',       en: 'the book',                level: 'sp1' },
  { es: 'la escuela',     en: 'the school',              level: 'sp1' },
  { es: 'hablar',         en: 'to speak',                level: 'sp1' },
  { es: 'comer',          en: 'to eat',                  level: 'sp1' },
  { es: 'vivir',          en: 'to live',                 level: 'sp1' },
  { es: 'bonito/a',       en: 'beautiful',               level: 'sp1' },
  { es: 'el subjuntivo',  en: 'the subjunctive',         level: 'sp2' },
  { es: 'sin embargo',    en: 'however',                 level: 'sp2' },
  { es: 'aunque',         en: 'although / even though',  level: 'sp2' },
  { es: 'levantarse',     en: 'to get up',               level: 'sp2' },
  { es: 'recordar',       en: 'to remember',             level: 'sp2' },
  { es: 'el imperfecto',  en: 'the imperfect tense',     level: 'sp2' },
  { es: 'a menos que',    en: 'unless',                  level: 'sp2' },
  { es: 'quizas',         en: 'perhaps / maybe',         level: 'sp2' },
];

let activeFilter = 'all';

/* ---- RENDER VOCAB CARDS ---- */
function renderVocab(list) {
  const grid = document.getElementById('vocabGrid');
  grid.innerHTML = '';
  list.forEach(v => {
    const el = document.createElement('div');
    el.className = 'vocab-card';
    el.innerHTML =
      '<span class="vocab-level ' + v.level + '">' + (v.level === 'sp1' ? 'Sp 1' : 'Sp 2-3') + '</span>' +
      '<div class="vocab-es">' + v.es + '</div>' +
      '<div class="vocab-en">' + v.en + '</div>';
    grid.appendChild(el);
  });
  if (list.length === 0) {
    grid.innerHTML = '<p style="color:rgba(255,255,255,0.4);font-size:0.9rem;">No matching words found.</p>';
  }
}

/* ---- FILTER BY SEARCH + LEVEL ---- */
function filterVocab() {
  const q = document.getElementById('vocabInput').value.toLowerCase();
  const filtered = vocab.filter(v => {
    const matchLevel = activeFilter === 'all' || v.level === activeFilter;
    const matchText = v.es.includes(q) || v.en.includes(q);
    return matchLevel && matchText;
  });
  renderVocab(filtered);
}

function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterVocab();
}

/* ---- INIT ---- */
renderVocab(vocab);
