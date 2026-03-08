/* ==========================================================
   ISOS COCO Master Menu - v12.0 (Dropdown & Mobile Ready)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

function loadISOSMenu() {
    const menuHTML = `
    <style>
        .isos-navbar { background: #001f3f; border-bottom: 2px solid #FFD700; position: sticky; top: 0; z-index: 999999; direction: rtl; }
        .isos-nav-list { list-style: none; padding: 10px; margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; }
        .isos-nav-list a { color: #FFD700; text-decoration: none; font-weight: bold; font-size: 14px; cursor: pointer; }
        
        /* ڈراپ ڈاؤن مینیو کی سیٹنگ */
        .dropdown { position: relative; display: inline-block; }
        .dropdown-content { 
            display: none; position: absolute; background-color: #001f3f; 
            min-width: 160px; box-shadow: 0px 8px 16px rgba(0,0,0,0.5); 
            border: 1px solid #FFD700; z-index: 1; right: 0;
        }
        .dropdown-content a { color: white; padding: 12px 16px; display: block; border-bottom: 1px solid #333; }
        .dropdown:hover .dropdown-content { display: block; } /* ڈیسک ٹاپ کے لیے */
        .show { display: block !important; } /* موبائل کے لیے */
        
        .live-ai-btn { background: #FFD700; color: #000 !important; padding: 3px 10px; border-radius: 15px; }
    </style>
    <nav class="isos-navbar">
        <ul class="isos-nav-list">
            <li><a href="index.html">🏠 ہوم</a></li>
            <li class="dropdown">
                <a onclick="toggleDropdown()">🛂 ویزہ سروسز ▼</a>
                <div id="visaDropdown" class="dropdown-content">
                    <a href="https://isos.onlinehubs.world/p/global-visa-portal.html">گلوبل ویزہ پورٹل</a>
                    <a href="https://isos.onlinehubs.world/p/visa-appointment.html">اپائنٹمنٹ بکنگ</a>
                    <a href="https://isos.onlinehubs.world/p/status.html">اسٹیٹس چیک کریں</a>
                </div>
            </li>
            <li><a onclick="toggleCOCO()" class="live-ai-btn">🎤 کوکو لائیو</a></li>
            <li><a href="https://wa.me/923044841012">🟢 واٹس ایپ</a></li>
        </ul>
    </nav>`;
    
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

// موبائل پر ڈراپ ڈاؤن کھولنے کا فنکشن
function toggleDropdown() {
    document.getElementById("visaDropdown").classList.toggle("show");
}

window.onload = loadISOSMenu;