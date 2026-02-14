// ISOS Master Extension v7.0 - Final Voice & Control Fix
const brain = document.createElement('script');
brain.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(brain);

// 1. ونڈو انٹرفیس
const isosPanel = document.createElement('div');
isosPanel.id = "isos-master-v7";
isosPanel.style = "position:fixed; bottom:20px; right:20px; width:350px; background:#001f3f; color:white; border:2px solid #D4AF37; border-radius:15px; z-index:2147483647; box-shadow:0 0 30px rgba(0,0,0,0.7); font-family:'Segoe UI', Arial; direction:rtl; overflow:hidden;";

isosPanel.innerHTML = `
    <div style="background:#D4AF37; color:#001f3f; padding:10px 15px; display:flex; justify-content:space-between; align-items:center; cursor:move;">
        <div style="display:flex; align-items:center; gap:8px;">
            <img src="https://islamabadonline7-cpu.github.io/isos-app/logo.png" style="width:20px; border-radius:3px;">
            <b style="font-size:14px;">ISOS AI v7.0</b>
        </div>
        <div style="display:flex; gap:15px; font-weight:bold; font-size:18px;">
            <span id="isos-min" style="cursor:pointer;" title="چھپائیں">➖</span>
            <span id="isos-close" style="cursor:pointer;" title="بند کریں">✕</span>
        </div>
    </div>
    <div id="isos-content" style="padding:20px; text-align:center;">
        <div id="isos-status" style="font-size:12px; color:#D4AF37; margin-bottom:10px;">جی شہزاد صاحب، میں اسکرین دیکھ رہی ہوں...</div>
        <div id="isos-waves" style="height:40px; display:flex; justify-content:center; align-items:center; gap:5px; margin-bottom:15px;">
            <div style="width:4px; height:15px; background:#D4AF37; border-radius:5px;"></div>
            <div style="width:4px; height:30px; background:#D4AF37; border-radius:5px;"></div>
            <div style="width:4px; height:15px; background:#D4AF37; border-radius:5px;"></div>
        </div>
        <button id="isos-talk-btn" style="width:100%; padding:14px; background:#28a745; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold; font-size:16px; box-shadow:0 4px 15px rgba(40,167,69,0.3);">🎤 گفتگو شروع کریں</button>
        <div id="isos-log" style="margin-top:15px; font-size:11px; color:#aaa; max-height:60px; overflow-y:auto; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
            تیار: میں آپ کے ہر ٹیب کو مانیٹر کر رہی ہوں۔
        </div>
    </div>
`;
document.body.appendChild(isosPanel);

// 2. وائس انجن
const talkBtn = document.getElementById('isos-talk-btn');
const statusMsg = document.getElementById('isos-status');

function isosSpeak(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ur-PK';
    speech.pitch = 1.0;
    speech.onstart = () => { statusMsg.innerText = "AI جواب دے رہا ہے..."; };
    speech.onend = () => { statusMsg.innerText = "میں آپ کو سن رہی ہوں..."; };
    window.speechSynthesis.speak(speech);
}

talkBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    
    recognition.onstart = () => {
        statusMsg.innerText = "جی فرمائیے شہزاد صاحب...";
        talkBtn.style.background = "#ff4444";
        talkBtn.innerText = "🛑 سن رہی ہوں...";
    };

    recognition.onresult = (event) => {
        const userInput = event.results[0][0].transcript;
        const pageTitle = document.title;
        const pageContent = document.body.innerText.substring(0, 1000);

        let finalResponse = "";
        if (userInput.includes("پیج") || userInput.includes("دیکھو")) {
            finalResponse = `شہزاد صاحب، میں دیکھ رہی ہوں کہ آپ اس وقت "${pageTitle}" کے صفحے پر ہیں۔ یہاں مجھے کچھ اہم معلومات نظر آ رہی ہیں۔ اس کام کو بہتر کرنے کے لیے آپ کا کیا حکم ہے؟`;
        } else if (typeof processISOSCommand === "function") {
            const res = processISOSCommand(userInput, "EXT");
            finalResponse = res.response;
        } else {
            finalResponse = "جی شہزاد صاحب، میں آپ کے ساتھ ہوں اور اسکرین دیکھ رہی ہوں۔ فرمائیے میں کیا مدد کروں؟";
        }
        isosSpeak(finalResponse);
        document.getElementById('isos-log').innerText = "آپ نے کہا: " + userInput;
    };

    recognition.onend = () => {
        talkBtn.style.background = "#28a745";
        talkBtn.innerText = "🎤 گفتگو شروع کریں";
    };
    recognition.start();
};

// 3. کنٹرولز (بند اور منیمائز کرنا)
document.getElementById('isos-min').onclick = () => {
    const content = document.getElementById('isos-content');
    content.style.display = content.style.display === "none" ? "block" : "none";
};

document.getElementById('isos-close').onclick = () => {
    isosPanel.style.display = "none";
};
