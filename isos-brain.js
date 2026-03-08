/* SL-ID: ISOS-MENU-90.1 */
function loadISOSMenu() {
    const menuHTML = `
    <style>
        .isos-navbar { background: #001f3f; border-bottom: 2px solid #FFD700; position: sticky; top: 0; z-index: 999999; direction: rtl; }
        .isos-nav-list { list-style: none; padding: 10px; margin: 0; display: flex; justify-content: center; gap: 15px; }
        .isos-nav-list a { color: #FFD700; text-decoration: none; font-weight: bold; font-size: 14px; }
        .live-ai-btn { background: #FFD700; color: #000 !important; padding: 3px 10px; border-radius: 15px; cursor: pointer; }
    </style>
    <nav class="isos-navbar">
        <ul class="isos-nav-list">
            <li><a href="index.html">🏠 ہوم</a></li>
            <li><a href="https://isos.onlinehubs.world/p/global-visa-portal.html">🛂 ویزہ پورٹل</a></li>
            <li><a onclick="toggleCOCO()" class="live-ai-btn">🎤 کوکو لائیو</a></li>
            <li><a href="https://wa.me/923044841012">🟢 واٹس ایپ</a></li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}
window.onload = loadISOSMenu;
