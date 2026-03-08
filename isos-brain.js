/* SL-ID: ISOS-BRAIN-117.1 */
/* ISLAMABAD ONLINE SERVICES (ISOS) - FULL CONVERSATION ENGINE */

// 1. بولنے کا انجن (Talk Engine)
function talk(text) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK'; 
    utter.rate = 1.0;
    utter.pitch = 1.1;
    
    // جب کوکو بولنا ختم کرے، تو دوبارہ سننا شروع کرے
    utter.onend = () => { startListening(); };
    
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utter);
}

// 2. سننے کا انجن (Listening Engine)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ur-PK';
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const userText = event.results[0][0].transcript;
    console.log("صارف نے کہا:", userText);
    processQuery(userText); // جواب تیار کرنے والا فنکشن
};

recognition.onerror = () => {
    // اگر کوئی آواز نہ آئے تو دوبارہ سننا شروع کرے
    setTimeout(() => { recognition.start(); }, 1000);
};

function startListening() {
    try { recognition.start(); } catch (e) { console.log("لسننگ پہلے سے جاری ہے"); }
}

// 3. عقل اور جواب (Intelligence Logic)
function processQuery(input) {
    let response = "";
    const query = input.toLowerCase();

    if (query.includes("کون ہو") || query.includes("تعارف")) {
        response = "میں کوکو ہوں، شہزاد صاحب کی ڈیجیٹل اسسٹنٹ۔";
    } else if (query.includes("سلام") || query.includes("ہیلو")) {
        response = "وعلیکم السلام! میں آپ کی کیا مدد کر سکتی ہوں؟";
    } else if (query.includes("سروس") || query.includes("کام")) {
        response = "ہم اسلام آباد آن لائن سروسز میں پراپرٹی، ٹیکس اور دیگر قانونی دستاویزات کا کام کرتے ہیں۔";
    } else {
        response = "آپ کی بات کا شکریہ، لیکن مجھے اس بارے میں مزید معلومات شہزاد صاحب سے لینی ہوں گی۔";
    }
    
    talk(response);
}

// 4. پبلک ویلکم
function welcomePublic() {
    talk("اسلام آباد آن لائن سروسز میں خوش آمدید۔ میں کوکو ہوں۔ حکم کیجیے؟");
}

// موبائل پر ایکٹیویٹ کرنے کا طریقہ
function activateAudio() {
    window.speechSynthesis.resume();
    welcomePublic();
    document.removeEventListener('click', activateAudio);
}

document.addEventListener('click', activateAudio);
