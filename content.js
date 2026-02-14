// ISOS AI Master Partner v6.0 - Shehzad Sahib Edition
// Features: Full Voice Discussion, Screen Awareness, Window Controls.

const brainLink = document.createElement('script');
brainLink.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(brainLink);

// 1. ونڈو کا نیا ڈیزائن
const aiPanel = document.createElement('div');
aiPanel.id = "isos-voice-panel";
aiPanel.style = "position:fixed; bottom:20px; right:20px; width:360px; background:#001f3f; color:white; border:2px solid #D4AF37; border-radius:18px; z-index:9999999; box-shadow:0 10px 40px rgba(0,0,0,0.5); font-family:Arial; direction:rtl; overflow:hidden; transition:0.4s;";

aiPanel.innerHTML = `
    <div id="ai-header" style="background:#D4AF37; color:#001f3f; padding:12px 18px; display:flex; justify-content:space-between; align-items:center; cursor:move;">
        <div style="display:flex; align-items:center; gap:8px;">
            <img src="https://islamabadonline7-cpu.github.io/isos-app/logo.png" style="width:22px; height:22px;">
            <b style="font-size:14px;">ISOS وائس اسسٹنٹ</b>
        </div>
        <div style="display:flex; gap:12px; font-weight:bold; font-size:16px;">
            <span id="ai-pause" style="cursor:pointer;" title="پاز">⏸️</span>
            <span id="ai-min" style="cursor:pointer;" title="چھپائیں">➖</span>
            <span id="ai-close" style="cursor:pointer;" title="بند کریں">✕</span>
        </div>
    </div>
    <div id="ai-body" style="padding:20px; text-align:center;">
        <div id="ai-status" style="font-size:13px; color:#D4AF37; margin-bottom:15px;">جی شہزاد صاحب، میں دیکھ رہی ہوں...</div>
        <div class="voice-waves" id="waves" style="height:40px; display:flex; align-items:center; justify-content:center; gap:5px; margin-bottom:20px; display:none;">
            <div style="width:4px; height:20px; background:#D4AF37; border-radius:5px;"></div>
            <div style="width:4px; height:40px; background:#D4AF37; border-radius:5px;"></div>
            <div style="width:4px; height:20px; background:#D4AF37; border-radius:5px;"></div>
        </div>
        <button id="ai-chat-btn" style="width:100%; padding:15px; background:#28a745; color:white; border:none; border-radius:12px; cursor:pointer; font-weight:bold; font-size:16px; box-shadow:0 4px 10px rgba(40,167,69,0.3);">🎤 گفتگو شروع کریں</button>
        <div id="ai-log" style="margin-top:15px; font-size:12px; color:#aaa; max-height:80px; overflow-y:auto; border-top:1px solid rgba(212,175,55,0.2); padding-top:10px;">
            تیار: میں اسکرین مانیٹر کر رہی ہوں۔
        </div>
    </div>
`;
document.body.appendChild(aiPanel);

// 2. وائس اور لاجک فنکشنز
const chatBtn = document.getElementById('ai-chat-btn');
const statusLabel = document.getElementById('ai-status');
const waveUI = document.getElementById('waves');

function talk(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ur-PK';
    msg.onstart = () => { waveUI.style.display = 'flex'; statusLabel.innerText = "AI بول رہا ہے..."; };
    msg.onend = () => { waveUI.style.display = 'none'; statusLabel.innerText = "میں آپ کو سن رہی ہوں..."; };
    window.speechSynthesis.speak(msg);
}

chatBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    
    recognition.onstart = () => {
        statusLabel.innerText = "جی فرمائیے، میں دیکھ رہی ہوں...";
        chatBtn.style.background = "#ff4444";
        chatBtn.innerText = "🛑 سن رہی ہوں...";
    };

    recognition.onresult = (e) => {
        const userWords = e.results[0][0].transcript;
        const pageTitle = document.title;
        const pageText = document.body.innerText.substring(0, 600); 

        if (userWords.includes("پیج") || userWords.includes("دیکھو") || userWords.includes("کیا ہے")) {
            let response = `شہزاد صاحب، آپ اس وقت ${pageTitle} دیکھ رہے ہیں۔ `;
            if(pageText.includes("Visa")) response += "یہ ویزہ سروسز کا پیج ہے، کیا میں سلاٹس چیک کروں؟";
            else if(pageText.includes("Cloud")) response += "آپ گوگل کلاؤڈ مینیجمنٹ پر ہیں، یہاں سیٹنگز کو احتیاط سے دیکھیں م";
            else response += "میں پیج کا ڈیٹا دیکھ رہی ہوں، فرمائیے اس کے متعلق کیا مدد کروں؟";
            talk(response);
        } else {
            talk("جی شہزاد صاحب، میں آپ کے ساتھ ہوں اور اسکرین کو مانیٹر کر رہی ہوں۔");
        }
    };

    recognition.onend = () => {
        chatBtn.style.background = "#28a745";
        chatBtn.innerText = "🎤 گفتگو شروع کریں";
    };
    recognition.start();
};

// 3. بٹن کنٹرولز
document.getElementById('ai-min').onclick = () => {
    const body = document.getElementById('ai-body');
    body.style.display = body.style.display === "none" ? "block" : "none";
};
document.getElementById('ai-pause').onclick = () => {
    window.speechSynthesis.cancel();
    statusLabel.innerText = "سسٹم پاز کر دیا گیا ہے۔";
};
document.getElementById('ai-close').onclick = () => { aiPanel.style.display = "none"; };
