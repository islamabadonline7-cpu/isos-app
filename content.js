// ISOS AI Manager v4.0 - Universal Intelligent Extension
// Shehzad Sahib, this version includes Screen Analysis & Window Controls.

// 1. گٹ ہب سے مرکزی دماغ لوڈ کرنا
const script = document.createElement('script');
script.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(script);

// 2. پینل کا ڈھانچہ (UI)
const panel = document.createElement('div');
panel.id = "isos-master-panel";
panel.style = "position:fixed; bottom:20px; right:20px; width:350px; background:#001f3f; color:white; border:2px solid #FFD700; border-radius:12px; z-index:9999999; box-shadow:0 10px 40px rgba(0,0,0,0.6); overflow:hidden; font-family:'Segoe UI', Arial; direction:rtl;";

panel.innerHTML = `
    <div id="panel-header" style="background:#FFD700; color:#001f3f; padding:10px; display:flex; justify-content:space-between; align-items:center; cursor:move;">
        <div style="display:flex; align-items:center; gap:8px;">
            <img src="https://islamabadonline7-cpu.github.io/isos-app/logo.png" style="width:22px; height:22px; border-radius:4px;">
            <b style="font-size:14px;">ISOS AI MANAGER</b>
        </div>
        <div style="display:flex; gap:12px; font-weight:bold; font-size:16px;">
            <span id="ai-min" style="cursor:pointer;" title="چھپائیں">➖</span>
            <span id="ai-close" style="cursor:pointer;" title="بند کریں">✕</span>
        </div>
    </div>
    <div id="ai-content-area">
        <div id="ai-log" style="height:160px; overflow-y:auto; background:rgba(0,0,0,0.3); padding:15px; font-size:13px; line-height:1.6; border-bottom:1px solid rgba(255,215,0,0.2);">
            جی شہزاد صاحب، میں پیج کا مطالعہ کر کے مشورہ دینے کے لیے تیار ہوں۔
        </div>
        <div style="padding:15px; display:flex; gap:10px;">
            <button id="ai-mic" style="flex:3; padding:12px; background:#28a745; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">🎤 بات کریں</button>
            <button id="ai-analyze" style="flex:2; padding:12px; background:#00d4ff; color:#001f3f; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">🔍 مشورہ</button>
        </div>
    </div>
`;
document.body.appendChild(panel);

// 3. فنکشنز (بٹن کنٹرول اور اسکرین ریڈنگ)
const aiLog = document.getElementById('ai-log');
const micBtn = document.getElementById('ai-mic');

function talk(text) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK';
    window.speechSynthesis.speak(utter);
}

// اسکرین پڑھنے کا فنکشن
document.getElementById('ai-analyze').onclick = () => {
    const pageData = document.body.innerText.substring(0, 1500); // پہلے 1500 حروف پڑھنا
    aiLog.innerHTML += `<p style="color:#00d4ff;"><i>سسٹم پیج کا مطالعہ کر رہا ہے...</i></p>`;
    
    // اگر گٹ ہب فائل میں اینالائسز فنکشن موجود ہے
    if (typeof analyzeISOSPage === "function") {
        const advice = analyzeISOSPage(pageData);
        aiLog.innerHTML += `<p><b>مشورہ:</b> ${advice}</p>`;
        talk(advice);
    } else {
        const simpleAdvice = "شہزاد صاحب، میں نے پیج پڑھ لیا ہے۔ یہ معلومات آپ کے کام کی ہو سکتی ہیں۔";
        aiLog.innerHTML += `<p><b>مشورہ:</b> ${simpleAdvice}</p>`;
        talk(simpleAdvice);
    }
    aiLog.scrollTop = aiLog.scrollHeight;
};

// مائیک اور وائس کمانڈ
micBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    recognition.onstart = () => { micBtn.innerText = "🎧 سن رہا ہوں..."; };
    recognition.onresult = (e) => {
        const cmd = e.results[0][0].transcript;
        aiLog.innerHTML += `<p><b>آپ:</b> ${cmd}</p>`;
        if (typeof processISOSCommand === "function") {
            const result = processISOSCommand(cmd, "EXT");
            talk(result.response);
            if(result.actionURL) window.open(result.actionURL, '_blank');
        }
    };
    recognition.onend = () => { micBtn.innerText = "🎤 بات کریں"; };
    recognition.start();
};

// کنٹرول بٹنز (Minimize & Close)
document.getElementById('ai-min').onclick = () => {
    const content = document.getElementById('ai-content-area');
    content.style.display = content.style.display === "none" ? "block" : "none";
};
document.getElementById('ai-close').onclick = () => {
    panel.style.display = "none";
};
