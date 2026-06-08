/* ==========================================================
   ISOS MENU SYSTEM v21 ENTERPRISE
   Islamabad Online Services
   Professional Navigation Engine
   ========================================================== */

const ISOS_MENU_CONFIG = {

    company: "Islamabad Online Services",

    website: "https://onlinehubs.world/isos/",

    whatsapp: "https://wa.me/923044841012",

    logo: "logo.png",

    menuItems: [

        {
            title: "Home",
            url: "index.html",
            icon: "🏠"
        },

        {
            title: "Generator",
            url: "generator.html",
            icon: "⚡"
        },

        {
            title: "Services",
            url: "#services",
            icon: "📋"
        },

        {
            title: "Embassies",
            url: "#embassies",
            icon: "🏛️"
        },

        {
            title: "MOFA",
            url: "#mofa",
            icon: "📑"
        },

        {
            title: "Blog",
            url: "#blog",
            icon: "📰"
        },

        {
            title: "Contact",
            url: "#contact",
            icon: "☎️"
        }

    ]

};

/* ==========================================================
   BUILD NAVIGATION
   ========================================================== */

function buildISOSNavigation(){

    const navbar =
        document.createElement("header");

    navbar.id = "isos-navbar";

    let menuHTML = "";

    ISOS_MENU_CONFIG.menuItems.forEach(item => {

        menuHTML += `

        <a href="${item.url}"
           class="isos-link">

           ${item.icon}
           ${item.title}

        </a>

        `;

    });

    navbar.innerHTML = `

    <div class="isos-nav-container">

        <a href="index.html"
           id="isos-logo">

            <img
            src="${ISOS_MENU_CONFIG.logo}"
            alt="ISOS Logo">

            <span>

            ISOS

            </span>

        </a>

        <div id="isos-mobile-btn">

            ☰

        </div>

        <nav id="isos-menu">

            ${menuHTML}

            <a
            href="${ISOS_MENU_CONFIG.whatsapp}"
            target="_blank"
            id="isos-whatsapp">

            WhatsApp

            </a>

        </nav>

    </div>

    `;

    document.body.prepend(navbar);

}

/* ==========================================================
   PROFESSIONAL MENU STYLES
   ========================================================== */

function injectISOSMenuStyles(){

const css = `

#isos-navbar{

position:fixed;
top:0;
left:0;
right:0;

height:72px;

background:linear-gradient(
135deg,
#0A58CA,
#06357D
);

z-index:99999;

box-shadow:
0 6px 25px rgba(0,0,0,.18);

}

.isos-nav-container{

height:100%;

max-width:1400px;

margin:auto;

display:flex;

align-items:center;

justify-content:space-between;

padding:0 20px;

font-family:
Segoe UI,
sans-serif;

}

#isos-logo{

display:flex;

align-items:center;

gap:12px;

text-decoration:none;

color:white;

font-size:20px;

font-weight:700;

}

#isos-logo img{

width:42px;
height:42px;

border-radius:50%;

background:white;

padding:3px;

object-fit:cover;

}

#isos-menu{

display:flex;

align-items:center;

gap:12px;

}

.isos-link{

color:white;

text-decoration:none;

font-size:15px;

font-weight:600;

padding:10px 14px;

border-radius:8px;

transition:.3s;

}

.isos-link:hover{

background:
rgba(255,255,255,.15);

}

#isos-whatsapp{

background:#25D366;

color:white;

text-decoration:none;

padding:10px 16px;

border-radius:8px;

font-weight:700;

transition:.3s;

}

#isos-whatsapp:hover{

transform:translateY(-2px);

}

#isos-mobile-btn{

display:none;

font-size:28px;

cursor:pointer;

color:white;

}

/* BODY OFFSET */

body{

padding-top:72px;

}

/* MOBILE */

@media(max-width:992px){

#isos-mobile-btn{

display:block;

}

#isos-menu{

position:fixed;

top:72px;
right:-100%;

width:300px;
height:100vh;

background:#06357D;

flex-direction:column;

align-items:flex-start;

padding:25px;

gap:10px;

transition:.35s;

overflow-y:auto;

}

#isos-menu.active{

right:0;

}

.isos-link{

width:100%;

padding:12px 14px;

}

#isos-whatsapp{

width:100%;

text-align:center;

margin-top:10px;

}

}

`;

const style =
document.createElement("style");

style.innerHTML = css;

document.head.appendChild(style);

}

/* ==========================================================
   MOBILE MENU ENGINE
   ========================================================== */

function setupMobileMenu(){

    const btn =
        document.getElementById(
            "isos-mobile-btn"
        );

    const menu =
        document.getElementById(
            "isos-menu"
        );

    if(!btn || !menu){
        return;
    }

    btn.addEventListener(
        "click",
        function(){

            menu.classList.toggle(
                "active"
            );

        }
    );

}

/* ==========================================================
   CLOSE MENU AFTER CLICK
   ========================================================== */

function closeMenuAfterClick(){

    const links =
        document.querySelectorAll(
            "#isos-menu a"
        );

    links.forEach(link=>{

        link.addEventListener(
            "click",
            function(){

                const menu =
                    document.getElementById(
                        "isos-menu"
                    );

                if(menu){

                    menu.classList.remove(
                        "active"
                    );

                }

            }
        );

    });

}

/* ==========================================================
   ACTIVE PAGE DETECTION
   ========================================================== */

function activateCurrentPage(){

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const links =
        document.querySelectorAll(
            "#isos-menu a"
        );

    links.forEach(link=>{

        const href =
            link.getAttribute("href");

        if(!href){
            return;
        }

        if(
            href.toLowerCase() === currentPage
        ){

            link.style.background =
                "#FFD700";

            link.style.color =
                "#000";

            link.style.fontWeight =
                "700";

        }

    });

}

/* ==========================================================
   SMOOTH SCROLL ENGINE
   ========================================================== */

function enableSmoothScroll(){

    const links =
        document.querySelectorAll(
            '#isos-menu a[href^="#"]'
        );

    links.forEach(link=>{

        link.addEventListener(
            "click",
            function(e){

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                const target =
                    document.querySelector(
                        targetId
                    );

                if(target){

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior:"smooth",
                        block:"start"

                    });

                }

            }
        );

    });

}

/* ==========================================================
   ACTIVE SECTION HIGHLIGHT
   ========================================================== */

function activateSectionLinks(){

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '#isos-menu a[href^="#"]'
        );

    window.addEventListener(
        "scroll",
        function(){

            let current = "";

            sections.forEach(section=>{

                const top =
                    section.offsetTop - 120;

                if(
                    window.scrollY >= top
                ){

                    current =
                        section.id;

                }

            });

            navLinks.forEach(link=>{

                link.style.background = "";
                link.style.color = "white";

                const href =
                    link.getAttribute(
                        "href"
                    );

                if(
                    href === "#" + current
                ){

                    link.style.background =
                        "rgba(255,255,255,.18)";

                }

            });

        }
    );

}

/* ==========================================================
   NAVBAR EFFECTS
   ========================================================== */

function setupNavbarEffects(){

    const navbar =
        document.getElementById(
            "isos-navbar"
        );

    if(!navbar){
        return;
    }

    window.addEventListener(
        "scroll",
        function(){

            if(window.scrollY > 50){

                navbar.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,.25)";

                navbar.style.backdropFilter =
                    "blur(12px)";

            }

            else{

                navbar.style.boxShadow =
                    "0 6px 25px rgba(0,0,0,.18)";

            }

        }
    );

}

/* ==========================================================
   MENU ANALYTICS
   ========================================================== */

function trackMenuClick(menuName){

    const history =
        JSON.parse(
            localStorage.getItem(
                "isos_menu_clicks"
            ) || "[]"
        );

    history.push({

        menu: menuName,

        date:
            new Date()
            .toISOString()

    });

    localStorage.setItem(
        "isos_menu_clicks",
        JSON.stringify(history)
    );

}

/* ==========================================================
   REGISTER EVENTS
   ========================================================== */

function registerMenuEvents(){

    const links =
        document.querySelectorAll(
            "#isos-menu a"
        );

    links.forEach(link=>{

        link.addEventListener(
            "click",
            function(){

                trackMenuClick(
                    this.innerText.trim()
                );

            }
        );

    });

}

/* ==========================================================
   WHATSAPP LEAD TRACKING
   ========================================================== */

function setupWhatsAppTracking(){

    const btn =
        document.getElementById(
            "isos-whatsapp"
        );

    if(!btn){
        return;
    }

    btn.addEventListener(
        "click",
        function(){

            const leads =
                Number(
                    localStorage.getItem(
                        "isos_whatsapp_leads"
                    )
                ) || 0;

            localStorage.setItem(
                "isos_whatsapp_leads",
                leads + 1
            );

            console.log(
                "WhatsApp Lead Registered"
            );

        }
    );

}

/* ==========================================================
   COCO AI BUTTON
   ========================================================== */

function createCocoShortcut(){

    const menu =
        document.getElementById(
            "isos-menu"
        );

    if(!menu){
        return;
    }

    const coco =
        document.createElement("a");

    coco.href = "#";

    coco.className =
        "isos-link";

    coco.innerHTML =
        "🤖 COCO AI";

    coco.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            if(
                window.ISOS &&
                window.ISOS.startListening
            ){

                window.ISOS.startListening();

            }

            else{

                alert(
                    "COCO AI Engine Not Loaded"
                );

            }

        }
    );

    menu.appendChild(coco);

}

/* ==========================================================
   REPORTING ENGINE
   ========================================================== */

function getMenuReport(){

    return {

        totalClicks:

            JSON.parse(
                localStorage.getItem(
                    "isos_menu_clicks"
                ) || "[]"
            ).length,

        whatsappLeads:

            Number(
                localStorage.getItem(
                    "isos_whatsapp_leads"
                )
            ) || 0,

        generatedAt:

            new Date()
            .toLocaleString()

    };

}

/* ==========================================================
   INITIALIZATION
   ========================================================== */

function initializeISOSMenu(){

    buildISOSNavigation();

    injectISOSMenuStyles();

    setupMobileMenu();

    closeMenuAfterClick();

    activateCurrentPage();

    enableSmoothScroll();

    activateSectionLinks();

    setupNavbarEffects();

    registerMenuEvents();

    setupWhatsAppTracking();

    createCocoShortcut();

    console.log(
        "ISOS MENU SYSTEM v21 LOADED"
    );

    console.table(
        getMenuReport()
    );

}

/* ==========================================================
   AUTO START
   ========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        initializeISOSMenu();

    }
);

/* ==========================================================
   GLOBAL API
   ========================================================== */

window.ISOS_MENU_ENGINE = {

    initializeISOSMenu,

    getMenuReport,

    trackMenuClick

};

/* ==========================================================
   END OF FILE
   ISOS MENU SYSTEM v21 ENTERPRISE
   ========================================================== */
