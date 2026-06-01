/* ==========================================================
   ISOS COCO AI MASTER BRAIN v20.0
   Islamabad Online Services Official Assistant
   ========================================================== */

const ISOS_CONFIG = {

    company: "Islamabad Online Services",

    whatsapp: "923044841012",

    phone: "03044841012",

    email: "islamabadonline7@gmail.com",

    website: "https://onlinehubs.world/isos/",

    office: "G-9 Markaz Islamabad"

};

/* ==========================================================
   SPEECH ENGINE
   ========================================================== */

function talk(text, callback = null) {

    try {

        speechSynthesis.cancel();

        const utter = new SpeechSynthesisUtterance(text);

        utter.lang = "ur-PK";

        utter.rate = 0.9;

        utter.pitch = 1;

        utter.volume = 1;

        utter.onend = () => {

            if(callback){

                callback();

            }

        };

        speechSynthesis.speak(utter);

    }

    catch(error){

        console.log(error);

    }

}

/* ==========================================================
   SPEECH RECOGNITION
   ========================================================== */

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition = null;

if(SpeechRecognition){

    recognition = new SpeechRecognition();

    recognition.lang = "ur-PK";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

}

/* ==========================================================
   START LISTENING
   ========================================================== */

function startListening(){

    if(!recognition){

        alert("Speech Recognition Not Supported");

        return;

    }

    try{

        recognition.start();

        console.log("COCO Listening...");

    }

    catch(e){

        console.log(e);

    }

}

/* ==========================================================
   AI KNOWLEDGE ENGINE
   ========================================================== */

const knowledgeBase = {

    greeting: [
        "السلام علیکم، اسلام آباد آن لائن سروسز میں خوش آمدید۔",
        "جی فرمائیے، میں آپ کی کیا مدد کر سکتی ہوں؟",
        "وعلیکم السلام، آپ کس سروس کے بارے میں معلومات چاہتے ہیں؟"
    ],

    services: `
        اسلام آباد آن لائن سروسز درج ذیل خدمات فراہم کرتی ہے:

        پراپرٹی ٹرانسفر
        فرد و رجسٹری خدمات
        ایف بی آر ٹیکس فائلنگ
        این ٹی این رجسٹریشن
        سیلز ٹیکس رجسٹریشن
        کمپنی رجسٹریشن
        پاور آف اٹارنی
        حلف نامے
        ایمبیسی اٹیسٹیشن
        موفا اٹیسٹیشن
        ویزا رہنمائی
        اوورسیز ڈاکومنٹیشن
        پولیس کریکٹر سرٹیفکیٹ
        ڈومیسائل اور دیگر قانونی خدمات
    `,

    contact: `
        رابطہ معلومات:

        فون:
        0304-4841012

        واٹس ایپ:
        0304-4841012

        ای میل:
        islamabadonline7@gmail.com

        دفتر:
        جی نائن مرکز اسلام آباد
    `,

    about: `
        میں کوکو ہوں۔

        اسلام آباد آن لائن سروسز کی آفیشل ڈیجیٹل اسسٹنٹ۔

        میرا مقصد صارفین کو معلومات فراہم کرنا،
        سروسز کی رہنمائی کرنا
        اور رابطے میں مدد دینا ہے۔
    `

};

/* ==========================================================
   INTENT DETECTION
   ========================================================== */

function detectIntent(query){

    query = query.toLowerCase();

    if(
        query.includes("سلام") ||
        query.includes("ہیلو") ||
        query.includes("السلام")
    ){
        return "greeting";
    }

    if(
        query.includes("کون ہو") ||
        query.includes("تعارف") ||
        query.includes("نام")
    ){
        return "about";
    }

    if(
        query.includes("سروس") ||
        query.includes("خدمات") ||
        query.includes("کام")
    ){
        return "services";
    }

    if(
        query.includes("رابطہ") ||
        query.includes("فون") ||
        query.includes("واٹس ایپ") ||
        query.includes("ای میل")
    ){
        return "contact";
    }

    return "unknown";
}

/* ==========================================================
   GENERATE RESPONSE
   ========================================================== */

function generateResponse(userInput){

    const intent = detectIntent(userInput);

    switch(intent){

        case "greeting":

            return knowledgeBase.greeting[0];

        case "about":

            return knowledgeBase.about;

        case "services":

            return knowledgeBase.services;

        case "contact":

            return knowledgeBase.contact;

        default:

            return `
            آپ کے سوال کا شکریہ۔

            مزید رہنمائی کے لیے
            براہِ راست واٹس ایپ پر رابطہ کریں۔

            نمبر:
            0304-4841012
            `;
    }

}

/* ==========================================================
   VOICE ASSISTANT + SMART COMMANDS ENGINE
   ========================================================== */

function openWhatsApp(){

    window.open(
        `https://wa.me/${ISOS_CONFIG.whatsapp}`,
        "_blank"
    );

}

function callOffice(){

    window.location.href =
    `tel:${ISOS_CONFIG.phone}`;

}

function openWebsite(){

    window.open(
        ISOS_CONFIG.website,
        "_blank"
    );

}

function openLocation(){

    window.open(
        "https://maps.google.com/?q=G-9+Markaz+Islamabad",
        "_blank"
    );

}

/* ==========================================================
   SMART COMMAND PROCESSOR
   ========================================================== */

function processSmartCommands(query){

    query = query.toLowerCase();

    /* WhatsApp */

    if(
        query.includes("واٹس ایپ") ||
        query.includes("whatsapp")
    ){

        talk(
            "میں واٹس ایپ کھول رہی ہوں۔",
            openWhatsApp
        );

        return true;
    }

    /* Call */

    if(
        query.includes("فون") ||
        query.includes("کال") ||
        query.includes("call")
    ){

        talk(
            "میں کال سکرین کھول رہی ہوں۔",
            callOffice
        );

        return true;
    }

    /* Website */

    if(
        query.includes("ویب سائٹ") ||
        query.includes("website")
    ){

        talk(
            "ویب سائٹ کھولی جا رہی ہے۔",
            openWebsite
        );

        return true;
    }

    /* Office */

    if(
        query.includes("دفتر") ||
        query.includes("لوکیشن") ||
        query.includes("پتہ") ||
        query.includes("address")
    ){

        talk(
            "دفتر کی لوکیشن کھولی جا رہی ہے۔",
            openLocation
        );

        return true;
    }

    return false;
}

/* ==========================================================
   MAIN AI PROCESSOR
   ========================================================== */

function processProQuery(userInput){

    console.log(
        "Client Asked:",
        userInput
    );

    const smartAction =
    processSmartCommands(userInput);

    if(smartAction){

        return;
    }

    const response =
    generateResponse(userInput);

    talk(response);

}

/* ==========================================================
   SPEECH RECOGNITION EVENTS
   ========================================================== */

if(recognition){

    recognition.onresult = (event)=>{

        const userText =
        event.results[0][0].transcript;

        processProQuery(userText);

    };

    recognition.onerror = ()=>{

        console.log(
            "Recognition Error"
        );

    };

    recognition.onend = ()=>{

        console.log(
            "Listening Finished"
        );

    };

}

/* ==========================================================
   ADVANCED BUSINESS INTELLIGENCE ENGINE
   ========================================================== */

const ISOS_ANALYTICS = {

    visits: Number(
        localStorage.getItem("isos_visits")
    ) || 0,

    leads: Number(
        localStorage.getItem("isos_leads")
    ) || 0,

    lastVisit:
        localStorage.getItem("isos_last_visit")
        || null

};

/* ==========================================================
   VISITOR TRACKING
   ========================================================== */

function trackVisit(){

    ISOS_ANALYTICS.visits++;

    localStorage.setItem(
        "isos_visits",
        ISOS_ANALYTICS.visits
    );

    localStorage.setItem(
        "isos_last_visit",
        new Date().toISOString()
    );

    console.log(
        "Total Visits:",
        ISOS_ANALYTICS.visits
    );

}

/* ==========================================================
   LEAD TRACKING
   ========================================================== */

function registerLead(){

    ISOS_ANALYTICS.leads++;

    localStorage.setItem(
        "isos_leads",
        ISOS_ANALYTICS.leads
    );

    console.log(
        "Total Leads:",
        ISOS_ANALYTICS.leads
    );

}

/* ==========================================================
   VISITOR TYPE
   ========================================================== */

function isReturningVisitor(){

    return localStorage.getItem(
        "isos_returning_user"
    ) !== null;

}

function markReturningVisitor(){

    localStorage.setItem(
        "isos_returning_user",
        "yes"
    );

}

/* ==========================================================
   AUTO WELCOME SYSTEM
   ========================================================== */

function welcomePublic(){

    let message = "";

    if(isReturningVisitor()){

        message =
        "واپس خوش آمدید۔ اسلام آباد آن لائن سروسز میں آپ کو دوبارہ دیکھ کر خوشی ہوئی۔";

    }

    else{

        message =
        "اسلام آباد آن لائن سروسز میں خوش آمدید۔ میں کوکو ہوں۔ کیا میں آپ کی کوئی مدد کر سکتی ہوں؟";

        markReturningVisitor();

    }

    setTimeout(()=>{

        talk(message);

    },1500);

}

/* ==========================================================
   BUSINESS REPORT
   ========================================================== */

function getBusinessReport(){

    return {

        totalVisits:
            ISOS_ANALYTICS.visits,

        totalLeads:
            ISOS_ANALYTICS.leads,

        lastVisit:
            localStorage.getItem(
                "isos_last_visit"
            )

    };

}

/* ==========================================================
   USER ACTIVITY LOGGER
   ========================================================== */

function logActivity(action){

    const history =
        JSON.parse(
            localStorage.getItem(
                "isos_activity"
            ) || "[]"
        );

    history.push({

        action: action,

        date:
            new Date()
            .toLocaleString()

    });

    localStorage.setItem(
        "isos_activity",
        JSON.stringify(history)
    );

}

/* ==========================================================
   BUTTON ACTION TRACKING
   ========================================================== */

document.addEventListener(
    "click",
    function(e){

        const target =
        e.target.innerText || "";

        if(
            target.includes("WhatsApp") ||
            target.includes("واٹس ایپ")
        ){

            registerLead();

            logActivity(
                "WhatsApp Click"
            );

        }

    }
);

/* ==========================================================
   STARTUP ENGINE
   ========================================================== */

window.addEventListener(
    "load",
    function(){

        trackVisit();

        console.log(
            "ISOS COCO AI MASTER v20 LOADED"
        );

        console.log(
            getBusinessReport()
        );

        welcomePublic();

    }
);

/* ==========================================================
   GLOBAL FUNCTIONS
   ========================================================== */

window.ISOS = {

    talk,

    startListening,

    processProQuery,

    getBusinessReport,

    registerLead,

    openWhatsApp,

    callOffice,

    openWebsite,

    openLocation

};

/* ==========================================================
   END OF FILE
   ========================================================== */

