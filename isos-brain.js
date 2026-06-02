/* ==========================================================
   ISOS COCO AI MASTER BRAIN v20.0
   Islamabad Online Services Official Assistant
   PART 1 — CORE BRAIN ENGINE
   ========================================================== */

/* ==========================================================
   MAIN CONFIGURATION
   ========================================================== */

const ISOS_CONFIG = {

    company: "Islamabad Online Services",

    shortName: "ISOS",

    whatsapp: "923044841012",

    phone: "03044841012",

    email: "islamabadonline7@gmail.com",

    website: "https://onlinehubs.world/isos/",

    office: "Office #5, 1st Floor, Chand Plaza, G-9 Markaz Islamabad",

    mapLocation:
        "https://maps.google.com/?q=G-9+Markaz+Islamabad"

};

/* ==========================================================
   GLOBAL STATE
   ========================================================== */

const ISOS_STATE = {

    listening: false,

    speaking: false,

    initialized: false,

    currentUserIntent: null

};

/* ==========================================================
   SPEECH ENGINE
   ========================================================== */

function talk(text, callback = null){

    try{

        window.speechSynthesis.cancel();

        const utter =
            new SpeechSynthesisUtterance(text);

        utter.lang = "ur-PK";

        utter.rate = 0.9;

        utter.pitch = 1.0;

        utter.volume = 1;

        ISOS_STATE.speaking = true;

        utter.onend = () => {

            ISOS_STATE.speaking = false;

            if(callback){

                callback();

            }

        };

        speechSynthesis.speak(utter);

    }

    catch(error){

        console.error(
            "Speech Engine Error:",
            error
        );

    }

}

/* ==========================================================
   SPEECH RECOGNITION SETUP
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

        alert(
            "Speech Recognition Not Supported"
        );

        return;
    }

    try{

        recognition.start();

        ISOS_STATE.listening = true;

        console.log(
            "COCO AI Listening..."
        );

    }

    catch(error){

        console.error(
            "Listening Error:",
            error
        );

    }

}

/* ==========================================================
   STOP LISTENING
   ========================================================== */

function stopListening(){

    if(!recognition){

        return;
    }

    try{

        recognition.stop();

        ISOS_STATE.listening = false;

    }

    catch(error){

        console.error(
            "Stop Listening Error:",
            error
        );

    }

}

/* ==========================================================
   BASIC KNOWLEDGE BASE
   ========================================================== */

const knowledgeBase = {

    greeting: [

        "السلام علیکم، اسلام آباد آن لائن سروسز میں خوش آمدید۔",

        "وعلیکم السلام، میں کوکو ہوں، آپ کی کیا مدد کر سکتی ہوں؟",

        "خوش آمدید، براہ کرم اپنا سوال پوچھیں۔"

    ],

    about: `

میں کوکو ہوں۔

اسلام آباد آن لائن سروسز کی آفیشل ڈیجیٹل اسسٹنٹ۔

میں ویزا، اٹیسٹیشن، ٹیکس، پراپرٹی، قانونی دستاویزات اور دیگر خدمات کے بارے میں رہنمائی فراہم کرتی ہوں۔

`,

    services: `

اسلام آباد آن لائن سروسز درج ذیل خدمات فراہم کرتی ہے:

• MOFA Attestation

• Embassy Attestation

• Visa Guidance

• Property Transfer

• FBR Tax Filing

• NTN Registration

• Company Registration

• Power of Attorney

• Affidavits

• Police Character Certificate

• Overseas Documentation

• Document Verification

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
G-9 Markaz Islamabad

`

};

/* ==========================================================
   END OF PART 1
   NEXT:
   ISOS-BRAIN.JS PART 2 — AI KNOWLEDGE ENGINE
   ========================================================== */

/* ==========================================================
   ISOS ADVANCED KNOWLEDGE DATABASE
   ========================================================== */

const ISOS_SERVICES = {

    property: `
    پراپرٹی سروسز:

    انتقال
    رجسٹری
    فرد
    ای اسٹیمپ
    پراپرٹی ویریفیکیشن
    ٹرانسفر آف پراپرٹی
    `,

    tax: `
    ایف بی آر سروسز:

    NTN Registration
    Income Tax Return
    Sales Tax Registration
    ATL Status
    Tax Compliance
    `,

    company: `
    SECP سروسز:

    کمپنی رجسٹریشن
    پرائیویٹ لمیٹڈ کمپنی
    سنگل ممبر کمپنی
    پارٹنرشپ رجسٹریشن
    کمپلائنس فائلنگ
    `,

    visa: `
    ویزا رہنمائی:

    ورک ویزا
    وزٹ ویزا
    اسٹڈی ویزا
    فیملی ویزا
    بزنس ویزا
    جاب سیکر ویزا
    `,

    attestation: `
    اٹیسٹیشن سروسز:

    MOFA Attestation
    Embassy Attestation
    Degree Attestation
    Marriage Certificate Attestation
    Birth Certificate Attestation
    `

};

/* ==========================================================
   ISB SERVICES DATABASE
   ========================================================== */

const ISB_SERVICES = {

    mofa: "وزارت خارجہ پاکستان دستاویزات کی اٹیسٹیشن کے لیے ذمہ دار ادارہ ہے۔",

    fbr: "ایف بی آر پاکستان کا قومی ٹیکس ادارہ ہے۔",

    secp: "SECP کمپنی رجسٹریشن اور کارپوریٹ معاملات کا ادارہ ہے۔",

    ict: "اسلام آباد کیپیٹل ٹیریٹری انتظامیہ مقامی سرکاری معاملات دیکھتی ہے۔",

    police: "اسلام آباد پولیس پولیس کریکٹر سرٹیفکیٹ اور ویریفیکیشن فراہم کرتی ہے۔"

};

/* ==========================================================
   SERVICE SEARCH ENGINE
   ========================================================== */

function searchService(query){

    query = query.toLowerCase();

    if(
        query.includes("پراپرٹی") ||
        query.includes("رجسٹری") ||
        query.includes("فرد")
    ){
        return ISOS_SERVICES.property;
    }

    if(
        query.includes("ٹیکس") ||
        query.includes("fbr") ||
        query.includes("ntn")
    ){
        return ISOS_SERVICES.tax;
    }

    if(
        query.includes("کمپنی") ||
        query.includes("secp")
    ){
        return ISOS_SERVICES.company;
    }

    if(
        query.includes("ویزا")
    ){
        return ISOS_SERVICES.visa;
    }

    if(
        query.includes("اٹیسٹیشن") ||
        query.includes("mofa")
    ){
        return ISOS_SERVICES.attestation;
    }

    return null;
}

/* ==========================================================
   EMBASSY KNOWLEDGE DATABASE
   ========================================================== */

const EMBASSY_DATABASE = {

    usa: `
    United States Embassy Islamabad

    خدمات:

    Visit Visa
    Study Visa
    Immigration
    Business Visa
    Consular Services
    `,

    uk: `
    British High Commission Islamabad

    خدمات:

    UK Visit Visa
    UK Study Visa
    UK Work Visa
    Family Visa
    `,

    canada: `
    Canadian High Commission

    خدمات:

    Visitor Visa
    Study Permit
    Work Permit
    Permanent Residence
    `,

    saudi: `
    Saudi Embassy Islamabad

    خدمات:

    Family Visa
    Work Visa
    Visit Visa
    Document Attestation
    `,

    uae: `
    UAE Embassy Islamabad

    خدمات:

    Visit Visa
    Employment Visa
    Family Visa
    Attestation Services
    `

};

/* ==========================================================
   MOFA DATABASE
   ========================================================== */

const MOFA_DATABASE = {

    description: `
    وزارت خارجہ پاکستان (MOFA)

    دستاویزات کی تصدیق
    اٹیسٹیشن
    بین الاقوامی استعمال کے لیے
    قانونی دستاویزات کی توثیق
    `,

    documents: `
    عام طور پر:

    Degree
    Marriage Certificate
    Birth Certificate
    Affidavit
    Power Of Attorney

    MOFA Attestation کے لیے پیش کیے جاتے ہیں۔
    `

};

/* ==========================================================
   OEC DATABASE
   ========================================================== */

const OEC_DATABASE = {

    description: `
    Overseas Employment Corporation

    پاکستانی افرادی قوت کو
    بیرون ملک روزگار کے مواقع
    فراہم کرنے والا ادارہ۔
    `,

    countries: `
    عام ممالک:

    Saudi Arabia
    UAE
    Qatar
    Oman
    Bahrain
    South Korea
    Japan
    Italy
    Germany
    Romania
    `

};

/* ==========================================================
   POLICE CHARACTER CERTIFICATE DATABASE
   ========================================================== */

const PCC_DATABASE = {

    description: `
    Police Character Certificate

    بیرون ملک ویزا،
    امیگریشن،
    ملازمت
    اور دیگر قانونی مقاصد کے لیے
    جاری کیا جاتا ہے۔
    `

};

/* ==========================================================
   SMART KNOWLEDGE SEARCH
   ========================================================== */

function smartKnowledgeSearch(query){

    query = query.toLowerCase();

    /* Embassies */

    if(
        query.includes("امریکہ") ||
        query.includes("usa") ||
        query.includes("us embassy")
    ){
        return EMBASSY_DATABASE.usa;
    }

    if(
        query.includes("برطانیہ") ||
        query.includes("uk") ||
        query.includes("british")
    ){
        return EMBASSY_DATABASE.uk;
    }

    if(
        query.includes("کینیڈا") ||
        query.includes("canada")
    ){
        return EMBASSY_DATABASE.canada;
    }

    if(
        query.includes("سعودی") ||
        query.includes("saudi")
    ){
        return EMBASSY_DATABASE.saudi;
    }

    if(
        query.includes("uae") ||
        query.includes("dubai") ||
        query.includes("emirates")
    ){
        return EMBASSY_DATABASE.uae;
    }

    /* MOFA */

    if(
        query.includes("mofa") ||
        query.includes("موفا") ||
        query.includes("وزارت خارجہ")
    ){
        return `
        ${MOFA_DATABASE.description}

        ${MOFA_DATABASE.documents}
        `;
    }

    /* OEC */

    if(
        query.includes("oec") ||
        query.includes("او ای سی")
    ){
        return `
        ${OEC_DATABASE.description}

        ${OEC_DATABASE.countries}
        `;
    }

    /* PCC */

    if(
        query.includes("pcc") ||
        query.includes("پولیس کریکٹر") ||
        query.includes("character certificate")
    ){
        return PCC_DATABASE.description;
    }

    return null;
}

/* ==========================================================
   ADVANCED RESPONSE ENGINE
   ========================================================== */

function getAdvancedResponse(query){

    let result =
    searchService(query);

    if(result){
        return result;
    }

    result =
    smartKnowledgeSearch(query);

    if(result){
        return result;
    }

    return null;
}

/* ==========================================================
   ENHANCED AI PROCESSOR
   ========================================================== */

function processKnowledgeQuery(query){

    const answer =
    getAdvancedResponse(query);

    if(answer){

        talk(answer);

        return true;
    }

    return false;
}

/* ==========================================================
   FAQ ENGINE
   ========================================================== */

const FAQ_DATABASE = {

    visa: `
    ویزا کے لیے عام طور پر
    پاسپورٹ،
    تصاویر،
    شناختی کارڈ،
    بینک اسٹیٹمنٹ
    اور متعلقہ دستاویزات درکار ہوتی ہیں۔
    `,

    mofa: `
    MOFA Attestation کے لیے
    اصل دستاویزات اور
    متعلقہ تصدیق شدہ ریکارڈ
    درکار ہو سکتا ہے۔
    `,

    pcc: `
    پولیس کریکٹر سرٹیفکیٹ
    عام طور پر شناختی دستاویزات
    اور رہائشی معلومات کی بنیاد پر جاری کیا جاتا ہے۔
    `

};

/* ==========================================================
   CONVERSATION MEMORY
   ========================================================== */

let conversationHistory =
JSON.parse(
    localStorage.getItem(
        "isos_conversation_history"
    ) || "[]"
);

function saveConversation(question, answer){

    conversationHistory.push({

        question,

        answer,

        timestamp:
        new Date().toISOString()

    });

    if(
        conversationHistory.length > 50
    ){
        conversationHistory.shift();
    }

    localStorage.setItem(
        "isos_conversation_history",
        JSON.stringify(
            conversationHistory
        )
    );

}

function getConversationHistory(){

    return conversationHistory;

}

/* ==========================================================
   VISITOR MEMORY
   ========================================================== */

const VISITOR_MEMORY = {

    preferredService:
    localStorage.getItem(
        "isos_preferred_service"
    ) || "",

    lastQuestion:
    localStorage.getItem(
        "isos_last_question"
    ) || ""

};

function rememberUserInterest(service){

    localStorage.setItem(
        "isos_preferred_service",
        service
    );

}

function rememberQuestion(question){

    localStorage.setItem(
        "isos_last_question",
        question
    );

}

/* ==========================================================
   LEAD SCORING ENGINE
   ========================================================== */

let leadScore =
Number(
    localStorage.getItem(
        "isos_lead_score"
    )
) || 0;

function increaseLeadScore(points = 1){

    leadScore += points;

    localStorage.setItem(
        "isos_lead_score",
        leadScore
    );

}

function getLeadScore(){

    return leadScore;

}

/* ==========================================================
   AUTO SUGGESTIONS ENGINE
   ========================================================== */

function getSuggestions(query){

    query = query.toLowerCase();

    if(query.includes("ویزا")){

        return [
            "ورک ویزا",
            "وزٹ ویزا",
            "اسٹڈی ویزا",
            "فیملی ویزا"
        ];

    }

    if(query.includes("اٹیسٹیشن")){

        return [
            "MOFA Attestation",
            "Embassy Attestation",
            "Degree Attestation"
        ];

    }

    if(query.includes("کمپنی")){

        return [
            "SECP Registration",
            "Private Limited",
            "SMC Registration"
        ];

    }

    return [];
}

/* ==========================================================
   AI DASHBOARD FUNCTIONS
   ========================================================== */

function getISOSDashboard(){

    return {

        visits:
        ISOS_ANALYTICS.visits,

        leads:
        ISOS_ANALYTICS.leads,

        leadScore:
        getLeadScore(),

        conversations:
        conversationHistory.length,

        lastVisit:
        localStorage.getItem(
            "isos_last_visit"
        )

    };

}

/* ==========================================================
   FULL PROCESSOR OVERRIDE
   ========================================================== */

const originalProcessProQuery =
processProQuery;

processProQuery = function(userInput){

    rememberQuestion(
        userInput
    );

    increaseLeadScore(1);

    const advanced =
    getAdvancedResponse(
        userInput
    );

    if(advanced){

        saveConversation(
            userInput,
            advanced
        );

        talk(advanced);

        return;
    }

    const standard =
    generateResponse(
        userInput
    );

    saveConversation(
        userInput,
        standard
    );

    talk(standard);

};

/* ==========================================================
   SMART VISITOR INSIGHT
   ========================================================== */

function getVisitorProfile(){

    return {

        preferredService:
        localStorage.getItem(
            "isos_preferred_service"
        ),

        lastQuestion:
        localStorage.getItem(
            "isos_last_question"
        ),

        leadScore:
        getLeadScore()

    };

}

/* ==========================================================
   ADMIN REPORT
   ========================================================== */

function exportAdminReport(){

    return {

        dashboard:
        getISOSDashboard(),

        visitor:
        getVisitorProfile(),

        business:
        getBusinessReport(),

        conversations:
        getConversationHistory()

    };

}

/* ==========================================================
   GLOBAL ADMIN API
   ========================================================== */

window.ISOS_ADMIN = {

    dashboard:
    getISOSDashboard,

    report:
    exportAdminReport,

    visitor:
    getVisitorProfile,

    conversations:
    getConversationHistory

};

/* ==========================================================
   PART 4 END
   ========================================================== */
