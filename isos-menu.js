function loadISOSMenu() {
    const menuHTML = `
    <nav class="isos-navbar">
      <div class="isos-nav-container">
        <ul class="isos-nav-list">
          <li class="dropdown"><a href="https://onlinehubs.world/isos/">🏠 HOME ▾</a>
            <div class="dropdown-content">
              <a href="/">📑 Blog Home</a>
              <a href="/p/about-us.html">ℹ️ About Us</a>
              <a href="/p/frequently-asked-questions.html">❓ FAQ</a>
            </div>
          </li>
          <li class="dropdown"><a href="/p/global-visa-portal.html">🌍 GLOBAL ▾</a>
            <div class="dropdown-content">
              <a href="/p/global-visa-portal.html">🛂 Visa Portal</a>
              <a href="/p/visa-appointment.html">📅 Appointment</a>
            </div>
          </li>
          <li class="dropdown"><a>📞 CONTACT ▾</a>
            <div class="dropdown-content">
              <a href="https://islamabadonline7-cpu.github.io/isos-app/">🤝 Join Us (ISOS App)</a>
              <a href="https://wa.me/923044841012" target="_blank">🟢 WhatsApp Admin</a>
            </div>
          </li>
          <li><a class="status-btn" onclick="openTrack()">🔍 STATUS</a></li>
        </ul>
      </div>
    </nav>`;

    const target = document.getElementById('isos-master-menu-container');
    if (target) {
        target.innerHTML = menuHTML;
    }
}

// فائل لوڈ ہوتے ہی مینیو کو ظاہر کرنے کی ہدایت
loadISOSMenu();