/* SL-ID: ISOS-BRAIN-121.1 */
/* ISLAMABAD ONLINE SERVICES (ISOS) - PRO SMART ASSISTANT */

// 1. آواز کا انجن (Speech Engine)
function talk(text, callback) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK';
    utter.rate = 0.9; // تھوڑا آرام سے بولے گی تاکہ سمجھ آئے
    utter.pitch = 1.1;

    utter.onend = () => {
        if (callback) callback();
        else startListening(); // بات ختم کر کے دوبارہ سننا شروع کرے
    };

    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utter);
}

// 2. سننے کا انجن (Live Listening)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ur-PK';
recognition.continuous = false;

recognition.onresult = (event) => {
    const userText = event.results[0][0].transcript;
    processSmartQuery(userText);
};

function startListening() {
    try { recognition.start(); } catch (e) {}
}

// 3. ویب سائٹ ڈیٹا لاجک (Article Reading Logic)
function processSmartQuery(input) {
    const query = input.toLowerCase();
    let response = "";

    // ویب سائٹ کے مخصوص ڈیٹا کے مطابق جوابات
    if (query.includes("پراپرٹی") || query.includes("زمین")) {
        response = "ہماری ویب سائٹ پر پراپرٹی رجسٹریشن کے متعلق تفصیلی ارٹیکل موجود ہے۔ کیا میں آپ کو وہ ارٹیکل پڑھ کر سناؤں؟";
    } else if (query.includes("ٹیکس") || query.includes("ایف بی آر")) {
        response = "ٹیکس ریٹرن فائلنگ کے حوالے سے نئی اپ ڈیٹس ویب سائٹ پر اپ لوڈ کر دی گئی ہیں۔ کیا آپ ارٹیکل سننا چاہیں گے؟";
    } else if (query.includes("کون ہو") || query.includes("تعارف")) {
        response = "میں اسلام آباد آن لائن سروسز کی آفیشل اسسٹنٹ کوکو ہوں۔ میں آپ کو ویب سائٹ پر موجود خدمات کی معلومات دے سکتی ہوں۔";
    } else if (query.includes("سلام") || query.includes("ہیلو")) {
        response = "وعلیکم السلام! حکم کیجیے، میں آپ کی کیا مدد کر سکتی ہوں؟";
    } else {
        response = "آپ کی اس بات کے متعلق ہماری ویب سائٹ پر معلومات موجود ہو سکتی ہیں۔ کیا میں اس سے متعلقہ ارٹیکل تلاش کر کے سناؤں؟";
    }

    talk(response);
}

// 4. ابتدائی ویلکم (بغیر نام کے)
function welcomePublic() {
    const welcomeMsg = "اسلام آباد آن لائن سروسز میں خوش آمدید۔ میں کوکو ہوں۔ میں آپ کی کیسے مدد کر سکتی ہوں؟";
    talk(welcomeMsg);
}

// موبائل آڈیو بیداری
function activateAudio() {
    window.speechSynthesis.resume();
    welcomePublic();
    document.removeEventListener('click', activateAudio);
}
document.addEventListener('click', activateAudio);
