/* ==========================================================
   ISOS COCO AI - BRAIN MASTER v11.0 (Live Voice Edition)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const ISOS_CONFIG = {
    apiKey: "YOUR_GEMINI_API_KEY", // شہزاد صاحب، یہاں اپنی API Key ڈالیں
    model: "gemini-1.5-flash",
    owner: "شہزاد حسین طاہر صاحب",
    org: "ISLAMABAD ONLINE SERVICES (ISOS)"
};

const ISOS_KNOWLEDGE = {
    visa: "https://isos.onlinehubs.world/p/global-visa-portal.html",
    status: "https://isos.onlinehubs.world/p/status.html",
    wa: "https://wa.me/923044841012"
};

// لائیو وائس پروسیسنگ فنکشن
async function startLiveListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    
    recognition.onresult = async (event) => {
        const query = event.results[0][0].transcript;
        console.log("شہزاد صاحب کا حکم: " + query);
        
        // مرحلہ 1: مقامی کمانڈز چیک کریں
        if (query.includes("ویزہ") || query.includes("ویزا")) {
            talk("جی شہزاد صاحب، ویزا پورٹل لوڈ ہو رہا ہے۔");
            window.location.href = ISOS_KNOWLEDGE.visa;
            return;
        }

        // مرحلہ 2: جیمنائی سے لائیو جواب لیں
        await fetchFromGemini(query);
    };
    recognition.start();
}

async function fetchFromGemini(userText) {
    try {
        const prompt = `آپ شہزاد حسین طاہر (مالک ISOS) کی اسسٹنٹ 'COCO' ہیں۔ مختصر اور پیشہ ورانہ اردو میں جواب دیں۔ سوال: ${userText}`;
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${ISOS_CONFIG.model}:generateContent?key=${ISOS_CONFIG.apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        
        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        talk(aiResponse);
    } catch (e) {
        talk("معذرت سر، لائیو کنکشن میں دشواری ہو رہی ہے۔");
    }
}

function talk(text) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK';
    utter.rate = 1.0; 
    synth.speak(utter);
}