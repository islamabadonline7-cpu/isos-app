/* ==========================================================
   ISOS COCO Master Menu - v11.0 (Live Assistant Linked)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

function loadISOSMenu() {
    const menuHTML = `
    <style>
        .isos-navbar { background: linear-gradient(90deg, #001f3f, #000); padding: 12px 0; border-bottom: 3px solid #FFD700; direction: rtl; }
        .isos-nav-list { list-style: none; padding: 0; margin: 0; display: flex; justify-content: center; align-items: center; }
        .isos-nav-list li { margin: 0 12px; }
        .isos-nav-list a { color: #FFD700; text-decoration: none; font-weight: bold; cursor: pointer; font-size: 14px; }
        .live-ai-btn { background: #FFD700; color: #000 !important; padding: 5px 15px; border-radius: 20px; box-shadow: 0 0 10px #FFD700; animation: glow 2s infinite; }
        @keyframes glow { 0% { opacity: 0.8; } 50% { opacity: 1; } 100% { opacity: 0.8; } }
    </style>
    <nav class="isos-navbar">
        <div class="isos-nav-container">
            <ul class="isos-nav-list">
                <li><a href="index.html">🏠 ہوم</a></li>
                <li><a href="/p/global-visa-portal.html">🛂 ویزہ</a></li>
                <li><a onclick="startLiveCOCO()" class="live-ai-btn">🎤 کوکو لائیو</a></li>
                <li><a href="https://wa.me/923044841012">🟢 واٹس ایپ</a></li>
                <li><a onclick="openTrack()">🔍 اسٹیٹس</a></li>
            </ul>
        </div>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

// شہزاد صاحب، یہ فنکشن مینیو کو خود بخود لوڈ کر دے گا
window.onload = loadISOSMenu;