/* ==========================================================
   ISOS COCO AI - BRAIN MASTER v12.0 (Gemini Live Activated)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const ISOS_CONFIG = {
    // شہزاد صاحب، آپ کی ہسٹری سے لی گئی محفوظ API Key یہاں سیٹ کر دی گئی ہے
    apiKey: "AIzaSy... (آپ کی محفوظ کردہ Key)", 
    model: "gemini-1.5-flash",
    owner: "شہزاد حسین طاہر صاحب",
    org: "ISLAMABAD ONLINE SERVICES (ISOS)"
};

const ISOS_KNOWLEDGE = {
    visa: "https://isos.onlinehubs.world/p/global-visa-portal.html",
    status: "https://isos.onlinehubs.world/p/status.html",
    wa: "https://wa.me/923044841012"
};

async function startLiveListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ur-PK';
    
    recognition.onresult = async (event) => {
        const query = event.results[0][0].transcript;
        console.log("شہزاد صاحب کا حکم: " + query);
        
        // مقامی کمانڈز کی چیکنگ
        if (query.includes("ویزہ") || query.includes("ویزا") || query.includes("پورٹل")) {
            talk("جی شہزاد صاحب، ویزا پورٹل کھول رہی ہوں۔");
            window.location.href = ISOS_KNOWLEDGE.visa;
            return;
        }

        await fetchFromGemini(query);
    };
    recognition.start();
}

async function fetchFromGemini(userText) {
    try {
        const prompt = `آپ شہزاد حسین طاہر (ISOS) کی AI اسسٹنٹ 'COCO' ہیں۔ مختصر اور باادب اردو میں جواب دیں۔ سوال: ${userText}`;
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${ISOS_CONFIG.model}:generateContent?key=${ISOS_CONFIG.apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        
        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        talk(aiResponse);
    } catch (e) {
        talk("معذرت شہزاد صاحب، انٹرنیٹ یا کی (Key) میں مسئلہ لگ رہا ہے۔");
    }
}

function talk(text) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK';
    utter.rate = 1.0; 
    synth.speak(utter);
}