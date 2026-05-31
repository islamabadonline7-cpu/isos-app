/* ==========================================================
   ISOS SMART NAVIGATION SYSTEM v2026
   Islamabad Online Services
   ========================================================== */

function loadISOSMenu() {

const menuHTML = `
<div id="isos-menu">

<a href="index.html">🏠 Home</a>

<a href="visa.html">🛂 Visa Services</a>

<a href="attestation.html">📜 Attestation</a>

<a href="mofa.html">🏛 MOFA</a>

<a href="embassies.html">🌍 Embassies</a>

<a href="countries.html">✈ Countries</a>

<a href="jobs.html">💼 Overseas Jobs</a>

<a href="tools.html">🧰 Tools</a>

<a href="blog.html">📰 Blog</a>

<a href="contact.html">📞 Contact</a>

</div>
`;

document.body.insertAdjacentHTML("afterbegin", menuHTML);

}

loadISOSMenu();
