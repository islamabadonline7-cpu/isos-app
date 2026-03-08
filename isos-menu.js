/* SL-ID: ISOS-MENU-89.1 */
function loadISOSMenu() {
    const menuHTML = `
    <style>
        .isos-navbar { background: #001f3f; border-bottom: 2px solid #FFD700; position: sticky; top: 0; z-index: 999999; direction: rtl; }
        .isos-nav-list { list-style: none; padding: 10px; margin: 0; display: flex; justify-content: center; gap: 20px; }
        .isos-nav-list a { color: #FFD700; text-decoration: none; font-weight: bold; cursor: pointer; }
    </style>
    <nav class="isos-navbar">
        <ul class="isos-nav-list">
            <li><a href="index.html">🏠 ہوم</a></li>
            <li><a href="https://isos.onlinehubs.world/p/global-visa-portal.html">🛂 ویزہ پورٹل</a></li>
            <li><a href="https://wa.me/923044841012">📞 رابطہ کریں</a></li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}
loadISOSMenu();
