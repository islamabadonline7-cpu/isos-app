// ISOS AI Vision & Voice Partner v5.0 - Shehzad Sahib Edition
// This version works like Gemini Voice Chat for real-time discussion.

// 1. گٹ ہب سے ماسٹر مائنڈ لوڈ کرنا
const brainLink = document.createElement('script');
brainLink.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(brainLink);

// 2. جدید وائس چیٹ پینل (UI)
const aiPanel = document.createElement('div');
aiPanel.id = "isos-voice-panel";
aiPanel.style = "position:fixed; bottom:20px; right:20px; width:360px; background:#001f3f; color:white; border:2px solid #00d4ff; border-radius:20px; z-index:9999999; box-shadow:0 15px 50px rgba(0,212,255,0.3); font-family:Arial; direction:rtl; overflow:hidden; transition: 0.5s;";

aiPanel.innerHTML = `
    <div id="drag-handle" style="background:#00d4ff; color:#001f3f; padding:12px 20px; font-weight:bold; display:flex; justify-content:space-between; align-items:center; cursor:move;">
        <span>🎙️ ISOS وائس چیٹ</span>
        <div style="display:flex; gap:12px;">
            <span id="ai-min" style="cursor:pointer;">➖</span>
            <span id="ai-close" style="cursor:pointer;">✕</span>
        </div>
    </div>
    <div id="ai-body" style="padding:25px; text-align:center;">
        <div id="status-indicator" style="font-size:12px; color:#00d4ff; margin-bottom:10px;">سسٹم پیج کو اسکین کر رہا ہے...</div>
        <div id="voice-waves" style="height:40px; display:flex; align-items:center; justify-content:center; gap:6px; margin-bottom:20px;">
            <div class="wave" style="width:4px; height:15px; background:#00d4ff; border-radius:10px; animation: pulse 1s infinite alternate;"></div>
            <div class="wave" style="width:4px; height:30px; background:#00d4ff; border-radius:10px; animation: pulse 0.8s infinite alternate;"></div>
            <div class="wave" style="width:4px; height:15px; background:#00d4ff; border-radius:10px; animation: pulse 1s infinite alternate;"></div>
        </div>
        <button id="start-discussion" style="width:100%; padding:15px; background:#28a745; color:white; border:none; border-radius:15px; cursor:pointer; font-weight:bold; font-size:16px; box-shadow:0 4px 15px rgba(40,167,69,0.4);">🎤 گفتگو کریں (Start Talk)</button>
        <div id="live-advice" style="margin-top:15px; font-size:13px; color:#ddd; font-style:italic; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
            پیج ڈیٹا: لوڈ ہو رہا ہے...
        </div>
    </div>
    <style>
        @keyframes pulse { from { height: 10px; opacity:0.5; } to { height: 35px; opacity:1; } }
    </style>
`;
document.body.appendChild(aiPanel);

// 3. وائس اور اسکرین انٹیلیجنس لاجک
let lastScan = "";
const statusLabel = document.getElementById('status-indicator');
const adviceBox = document.getElementById('live-advice');

function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ur-PK';
    msg.pitch = 1.1; 
    msg.onstart = () => { statusLabel.innerText = "AI بول رہا ہے..."; };
    msg.onend = () => { statusLabel.innerText = "میں آپ کو سن رہی ہوں..."; };
    window.speechSynthesis.speak(msg);
}

// آٹو اسکیننگ فنکشن (ہر 5 سیکنڈ بعد)
setInterval(() => {
    const currentText = document.body.innerText.substring(0, 800);
    if (currentText !== lastScan) {
        lastScan = currentText;
        adviceBox.innerText = "اسکرین اپ ڈیٹ: نیا مواد مل گیا ہے";
    }
}, 5000);

document.getElementById('start-discussion').onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    
    recognition.onstart = () => {
        statusLabel.innerText = "جی شہزاد صاحب، فرمائیے...";
        document.getElementById('start-discussion').style.background = "#ff4444";
    };

    recognition.onresult = (e) => {
        const query = e.results[0][0].transcript;
        const pageTitle = document.title;
        const screenBrief = document.body.innerText.substring(0, 500);

        if (query.includes("پیج") || query.includes("دیکھ") || query.includes("مشورہ")) {
            // گٹ ہب لاجک کو استعمال کرتے ہوئے جواب
            let response = `شہزاد صاحب، میں دیکھ رہی ہوں کہ ہم ${pageTitle} پر ہیں۔ `;
            if (screenBrief.includes("Price") || screenBrief.includes("Chart")) {
                response += "یہ ٹریڈنگ کا صفحہ لگ رہا ہے، قیمتوں پر نظر رکھیں۔ کیا میں چارٹ کا تجزیہ کروں؟";
            } else {
                response += "یہاں مجھے کچھ معلومات نظر آ رہی ہیں۔ اس کام کو بہتر کرنے کے لیے آپ کا کیا ارادہ ہے؟";
            }
            speak(response);
        } else if (typeof processISOSCommand === "function") {
            const result = processISOSCommand(query, "EXT");
            speak(result.response);
        } else {
            speak("شہزاد صاحب، میں اسکرین پر موجود ڈیٹا دیکھ رہی ہوں۔ ہم مل کر اس کام کو کیسے حل کریں؟");
        }
    };

    recognition.onend = () => {
        document.getElementById('start-discussion').style.background = "#28a745";
    };
    
    recognition.start();
};

// کنٹرولز (Min/Close)
document.getElementById('ai-min').onclick = () => {
    const body = document.getElementById('ai-body');
    body.style.display = body.style.display === "none" ? "block" : "none";
};
document.getElementById('ai-close').onclick = () => { aiPanel.style.display = "none"; };
