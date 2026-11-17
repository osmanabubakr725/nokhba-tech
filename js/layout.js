// روابط القائمة (نعدلها هنا مرة واحدة فقط)
const links = [
  { href: 'indx.html',    key: 'nav.home' },
  { href: 'about.html',    key: 'nav.about' },
  { href: 'services.html', key: 'nav.services' },
  { href: 'contact.html',  key: 'nav.contact' },
];

// معرفة الصفحة الحالية لتمييز رابطها
const currentPage = location.pathname.split('/').pop() || 'index.html';

const navLinks = links.map(link => {
  const style = link.href === currentPage
    ? 'text-blue-600 font-bold'
    : 'hover:text-blue-600';
  return `<a href="${link.href}" class="${style}" data-i18n="${link.key}"></a>`;
}).join('');

// الهيدر
document.getElementById('site-header').innerHTML = `
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="indx.html" class="text-2xl font-bold text-blue-600" data-i18n="title.index"></a>

    <nav class="hidden md:flex items-center gap-6">${navLinks}</nav>

    <div class="flex items-center gap-3">
      <button id="lang-btn" class="border rounded px-3 py-1 text-sm">EN</button>
      <a href="request.html" class="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" data-i18n="nav.request"></a>
      <button id="menu-btn" class="md:hidden text-3xl" aria-label="القائمة">☰</button>
    </div>
  </div>

  <div id="mobile-menu" class="hidden md:hidden border-t">
    <nav class="flex flex-col gap-4 px-4 py-4">
      ${navLinks}
      <a href="request.html" class="bg-blue-600 text-white text-center px-4 py-2 rounded-lg" data-i18n="nav.request"></a>
    </nav>
  </div>
`;

// الفوتر
document.getElementById('site-footer').innerHTML = `
  <div class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 class="text-white font-bold text-xl">نخبة التقنية</h3>
      <p class="mt-3 text-sm" data-i18n="footer.desc"></p>
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <h4 class="text-white font-bold" data-i18n="footer.links"></h4>
      ${navLinks}
    </div>
    <div class="text-sm">
      <h4 class="text-white font-bold" data-i18n="footer.contact"></h4>
      <p class="mt-2" >info@nokhba.example</p>
      <p data-i18n="footer.address"></p>
    </div>
  </div>
  <p class="text-center text-sm border-t border-slate-700 py-4" data-i18n="footer.rights"></p>
`;

// زر قائمة الجوال (انتقل من main.js إلى هنا)
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
