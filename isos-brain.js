/* ==========================================================
   ISOS COCO AI Master - Professional Brain Engine v15.1
   OFFICIAL ASSISTANT FOR ISLAMABAD ONLINE SERVICES
   ========================================================== */

// 1. آواز کا انجن (Speech Engine)
function talk(text, callback) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK'; 
    utter.rate = 0.9; // واضح اور پروفیشنل رفتار
    utter.pitch = 1.0;
    
    utter.onend = () => { 
        if (callback) callback();
        else startListening(); 
    };
    
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utter);
}

// 2. سننے کا انجن (Live Recognition)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ur-PK';
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const userText = event.results[0][0].transcript;
    console.log("Client Asked:", userText);
    processProQuery(userText); 
};

recognition.onerror = () => {
    // اگر خاموشی ہو تو دوبارہ لسننگ موڈ پر چلا جائے
    setTimeout(() => { try { recognition.start(); } catch(e) {} }, 1500);
};

function startListening() {
    try { 
        recognition.start(); 
        console.log("COCO: I am listening...");
    } catch (e) { }
}

// 3. بزنس انٹیلی جنس (Business Logic)
function processProQuery(input) {
    let response = "";
    const query = input.toLowerCase();

    if (query.includes("کون ہو") || query.includes("تعارف") || query.includes("نام")) {
        response = "میں اسلام آباد آن لائن سروسز کی آفیشل ڈیجیٹل اسسٹنٹ کوکو ہوں۔ میں آپ کو پراپرٹی، ٹیکس اور رجسٹریشن کے معاملات میں معلومات فراہم کر سکتی ہوں۔";
    } else if (query.includes("سلام") || query.includes("ہیلو") || query.includes("ہائے")) {
        response = "وعلیکم السلام! اسلام آباد آن لائن سروسز میں خوش آمدید۔ فرمائیے، میں آپ کی کیا مدد کر سکتی ہوں؟";
    } else if (query.includes("سروس") || query.includes("کام") || query.includes("ہیلپ")) {
        response = "ہم پراپرٹی ٹرانسفر، ایف بی آر ٹیکس فائلنگ، اور تمام قانونی دستاویزات کی تیاری میں مدد کرتے ہیں۔ آپ مزید تفصیلات کے لیے واٹس ایپ بٹن استعمال کر سکتے ہیں۔";
    } else if (query.includes("شکریہ") || query.includes("تھینکس")) {
        response = "آپ کا بہت شکریہ۔ ہم آپ کی خدمت کے لیے ہمیشہ حاضر ہیں۔";
    } else {
        response = "آپ کی بات کا شکریہ۔ اس بارے میں مزید درست رہنمائی کے لیے آپ ہمارے ماہر سے براہ راست رابطہ کر سکتے ہیں۔ کیا میں واٹس ایپ لنک اوپن کر دوں؟";
    }
    
    talk(response);
}

// 4. پبلک ویلکم فنکشن
function welcomePublic() {
    const welcomeMsg = "اسلام آباد آن لائن سروسز میں خوش آمدید۔ میں کوکو ہوں۔ کیا میں آپ کی کوئی مدد کر سکتی ہوں؟";
    talk(welcomeMsg);
}
