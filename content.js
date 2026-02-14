// ISOS AI Master Partner v6.0 - Voice & Logic Updated
const brainLink = document.createElement('script');
brainLink.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(brainLink);

const aiPanel = document.createElement('div');
aiPanel.id = "isos-voice-panel";
aiPanel.style = "position:fixed; bottom:20px; right:20px; width:360px; background:#001f3f; color:white; border:2px solid #00d4ff; border-radius:15px; z-index:9999999; box-shadow:0 15px 50px rgba(0,0,0,0.5); font-family:Arial; direction:rtl; overflow:hidden;";

aiPanel.innerHTML = `
    <div id="drag-handle" style="background:#00d4ff; color:#001f3f; padding:12px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:5px;">
             <img src="https://islamabadonline7-cpu.github.io/isos-app/logo.png" style="width:20px;">
             <span>ISOS اے آئی پارٹنر</span>
        </div>
        <div style="display:flex; gap:10px;">
            <span id="ai-mute" style="cursor:pointer;" title="میوٹ">🔇</span>
            <span id="ai-min" style="cursor:pointer;" title="چھپائیں">➖</span>
            <span id="ai-close" style="cursor:pointer;" title="بند کریں">✕</span>
        </div>
    </div>
    <div id="ai-body" style="padding:20px; text-align:center;">
        <div id="status-indicator" style="font-size:12px; color:#00d4ff; margin-bottom:10px;">سسٹم پیج کو اسکین کر رہا ہے...</div>
        <div id="voice-waves" style="height:40px; display:flex; align-items:center; justify-content:center; gap:6px; margin-bottom:20px;">
            <div class="wave" style="width:4px; height:20px; background:#00d4ff; border-radius:10px;"></div>
            <div class="wave" style="width:4px; height:35px; background:#00d4ff; border-radius:10px;"></div>
            <div class="wave" style="width:4px; height:20px; background:#00d4ff; border-radius:10px;"></div>
        </div>
        <button id="start-discussion" style="width:100%; padding:15px; background:#28a745; color:white; border:none; border-radius:12px; cursor:pointer; font-weight:bold; font-size:16px;">🎤 گفتگو شروع کریں</button>
        <div id="live-advice" style="margin-top:15px; font-size:13px; color:#aaa; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
            تیار: میں آپ کے ساتھ اسکرین دیکھ رہی ہوں
        </div>
    </div>
`;
document.body.appendChild(aiPanel);

const statusLabel = document.getElementById('status-indicator');
const chatBtn = document.getElementById('start-discussion');

function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ur-PK';
    msg.pitch = 1.0;
    msg.onstart = () => { statusLabel.innerText = "AI بول رہا ہے..."; };
    msg.onend = () => { statusLabel.innerText = "میں آپ کو سن رہی ہوں..."; };
    window.speechSynthesis.speak(msg);
}

chatBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    recognition.onstart = () => {
        statusLabel.innerText = "میں سن رہی ہوں، فرمائیے...";
        chatBtn.style.background = "#ff4444";
    };

    recognition.onresult = (e) => {
        const query = e.results[0][0].transcript;
        const pageTitle = document.title;
        const screenContent = document.body.innerText.substring(0, 1000);

        let response = "";
        if (query.includes("پیج") || query.includes("دیکھ")) {
            response = `شہزاد صاحب، میں دیکھ رہی ہوں کہ آپ اس وقت ${pageTitle} پر ہیں۔ یہاں مجھے ${screenContent.length > 100 ? "کافی معلومات" : "تھوڑا ڈیٹا"} نظر آ رہا ہے۔ میرا مشورہ ہے کہ ہمیں احتیاط سے آگے بڑھنا چاہیے۔`;
        } else if (typeof processISOSCommand === "function") {
            const result = processISOSCommand(query, "EXT");
            response = result.response;
        } else {
            response = "جی شہزاد صاحب، میں آپ کے ساتھ ہوں اور اسکرین دیکھ رہی ہوں۔ فرمائیے کیا حکم ہے؟";
        }
        speak(response);
    };

    recognition.onend = () => { chatBtn.style.background = "#28a745"; };
    recognition.start();
};

document.getElementById('ai-min').onclick = () => {
    const body = document.getElementById('ai-body');
    body.style.display = body.style.display === "none" ? "block" : "none";
};
document.getElementById('ai-mute').onclick = () => { window.speechSynthesis.cancel(); };
document.getElementById('ai-close').onclick = () => { aiPanel.style.display = "none"; };
