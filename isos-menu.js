/* ==========================================================
   ISOS MENU SYSTEM v20.0
   Islamabad Online Services
   Professional Navigation Engine
   ========================================================== */

const ISOS_MENU = {

    company: "Islamabad Online Services",

    website: "https://onlinehubs.world/isos/",

    whatsapp: "https://wa.me/923044841012",

    items: [

        {
            title: "Home",
            url: "index.html",
            icon: "🏠"
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
   CREATE MENU
   ========================================================== */

function createISOSMenu(){

    const nav = document.createElement("nav");

    nav.id = "isos-navbar";

    nav.innerHTML = `

        <div class="isos-nav-wrapper">

            <div class="isos-logo">

                ISOS

            </div>

            <ul class="isos-menu-list">

            </ul>

            <a
                class="isos-whatsapp-btn"
                href="${ISOS_MENU.whatsapp}"
                target="_blank">

                WhatsApp

            </a>

        </div>

    `;

    document.body.prepend(nav);

    const menuList =
        nav.querySelector(".isos-menu-list");

    ISOS_MENU.items.forEach(item => {

        const li =
            document.createElement("li");

        li.innerHTML = `

            <a href="${item.url}">

                ${item.icon}
                ${item.title}

            </a>

        `;

        menuList.appendChild(li);

    });

}

/* ==========================================================
   ISOS MENU ENGINE v20.0
   PART 2
   Professional Styling + Mobile Menu Engine
   ========================================================== */

function injectMenuStyles(){

const css = `

#isos-navbar{

position:fixed;
top:0;
left:0;
right:0;

height:70px;

background:linear-gradient(
135deg,
#0A58CA,
#06357D
);

display:flex;
align-items:center;
justify-content:space-between;

padding:0 20px;

z-index:99999;

box-shadow:
0 5px 25px rgba(0,0,0,.15);

font-family:
'Segoe UI',
sans-serif;

}

#isos-logo{

display:flex;
align-items:center;
gap:12px;

font-size:20px;
font-weight:700;
color:white;

text-decoration:none;

}

#isos-logo img{

width:42px;
height:42px;

border-radius:50%;

object-fit:cover;

background:white;
padding:3px;

}

#isos-menu{

display:flex;
align-items:center;
gap:18px;

}

#isos-menu a{

color:white;
text-decoration:none;

font-size:15px;
font-weight:600;

transition:.3s;

padding:10px 12px;
border-radius:8px;

}

#isos-menu a:hover{

background:
rgba(255,255,255,.15);

}

#isos-whatsapp{

background:#25D366;

padding:10px 16px;

border-radius:8px;

color:white !important;

font-weight:700;

}

#isos-mobile-btn{

display:none;

font-size:26px;

color:white;

cursor:pointer;

}

/* =========================
   MOBILE MENU
========================= */

@media(max-width:992px){

#isos-mobile-btn{

display:block;

}

#isos-menu{

position:fixed;

top:70px;
right:-100%;

width:280px;
height:100vh;

background:#06357D;

flex-direction:column;

align-items:flex-start;

padding:25px;

gap:12px;

transition:.35s;

overflow:auto;

}

#isos-menu.active{

right:0;

}

#isos-menu a{

width:100%;

padding:12px 15px;

border-radius:10px;

}

}

`;

const style =
document.createElement("style");

style.innerHTML = css;

document.head.appendChild(style);

}

/* ==========================================================
   MOBILE TOGGLE
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
   CLOSE MENU ON LINK CLICK
   ========================================================== */

function closeMenuOnClick(){

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
   ISOS MENU ENGINE v20.0
   PART 3
   Dynamic Navigation + Active Page Detection
   ========================================================== */

/* ==========================================================
   BUILD PROFESSIONAL NAVIGATION
   ========================================================== */

function buildNavigation(){

    const navbar = document.createElement("div");

    navbar.id = "isos-navbar";

    navbar.innerHTML = `

        <a href="index.html" id="isos-logo">

            <img src="logo.png" alt="ISOS">

            <span>ISOS</span>

        </a>

        <div id="isos-mobile-btn">

            ☰

        </div>

        <div id="isos-menu">

            <a href="index.html">
                Home
            </a>

            <a href="generator.html">
                Generator
            </a>

            <a href="#services">
                Services
            </a>

            <a href="#embassies">
                Embassies
            </a>

            <a href="#ministries">
                Ministries
            </a>

            <a href="#mofa">
                MOFA
            </a>

            <a href="#blog">
                Blog
            </a>

            <a href="#contact">
                Contact
            </a>

            <a
                href="https://wa.me/923044841012"
                target="_blank"
                id="isos-whatsapp">

                WhatsApp

            </a>

        </div>

    `;

    document.body.prepend(navbar);

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

    const menuLinks =
        document.querySelectorAll(
            "#isos-menu a"
        );

    menuLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if(!href) return;

        const cleanHref =
            href.toLowerCase();

        if(
            cleanHref === currentPage
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
   SCROLL ACTIVE SECTION
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

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 120;

                if(
                    window.scrollY >= sectionTop
                ){

                    current =
                        section.getAttribute("id");

                }

            });

            navLinks.forEach(link => {

                link.style.background =
                    "";

                link.style.color =
                    "white";

                const href =
                    link.getAttribute("href");

                if(
                    href === "#" + current
                ){

                    link.style.background =
                        "rgba(255,255,255,.20)";

                }

            });

        }
    );

}

/* ==========================================================
   SMOOTH SCROLL
   ========================================================== */

function enableSmoothScroll(){

    const links =
        document.querySelectorAll(
            '#isos-menu a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            function(e){

                const targetId =
                    this.getAttribute("href");

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
   ISOS MENU ENGINE v20.0
   PART 4 FINAL
   Auto Initialize + Analytics + COCO Integration
   ========================================================== */

/* ==========================================================
   NAVBAR SCROLL EFFECT
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
                    "0 10px 35px rgba(0,0,0,.25)";

                navbar.style.backdropFilter =
                    "blur(12px)";

            }

            else{

                navbar.style.boxShadow =
                    "0 5px 25px rgba(0,0,0,.15)";

            }

        }
    );

}

/* ==========================================================
   MENU ANALYTICS
   ========================================================== */

function trackMenuClick(name){

    const clicks =
        JSON.parse(
            localStorage.getItem(
                "isos_menu_clicks"
            ) || "[]"
        );

    clicks.push({

        menu:name,

        date:
            new Date()
            .toISOString()

    });

    localStorage.setItem(
        "isos_menu_clicks",
        JSON.stringify(clicks)
    );

}

/* ==========================================================
   REGISTER MENU EVENTS
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
   COCO AI SHORTCUT
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
                    "COCO AI Not Loaded"
                );

            }

        }
    );

    menu.appendChild(coco);

}

/* ==========================================================
   MENU REPORT
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
            ) || 0

    };

}

/* ==========================================================
   AUTO INITIALIZATION
   ========================================================== */

function initializeISOSMenu(){

    injectMenuStyles();

    buildNavigation();

    setupMobileMenu();

    closeMenuOnClick();

    activateCurrentPage();

    activateSectionLinks();

    enableSmoothScroll();

    setupNavbarEffects();

    registerMenuEvents();

    setupWhatsAppTracking();

    createCocoShortcut();

    console.log(
        "ISOS MENU v20 LOADED"
    );

    console.log(
        getMenuReport()
    );

}

/* ==========================================================
   START ENGINE
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
   ISOS MENU SYSTEM v20
   ========================================================== */
