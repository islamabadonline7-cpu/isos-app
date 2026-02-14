// ISOS AI Master Manager v3.0 - Synchronized Version
// Shehzad Sahib, this script now fetches the "Brain" from GitHub.

// 1. گٹ ہب سے ماسٹر لاجک لوڈ کرنا
const brainScript = document.createElement('script');
brainScript.src = 'https://islamabadonline7-cpu.github.io/isos-app/isos-brain.js';
document.head.appendChild(brainScript);

// 2. پینل تیار کرنا
const assistantBox = document.createElement('div');
assistantBox.id = "isos-ai-panel";
assistantBox.style = "position:fixed; bottom:25px; right:25px; width:340px; background:#001f3f; color:white; border:2px solid #FFD700; border-radius:15px; padding:20px; z-index:9999999; box-shadow:0 0 25px rgba(255,215,0,0.3); font-family:'Segoe UI', Arial; direction:rtl;";
assistantBox.innerHTML = `
    <div style="border-bottom:1px solid #FFD700; padding-bottom:10px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
        <b style="color:#FFD700;">🤖 ISOS AI MANAGER v3.0</b>
        <span id="ai-status-dot" style="color:#00ff00; font-size:10px;">● لائیو</span>
    </div>
    <div id="ai-log" style="height:150px; overflow-y:auto; background:rgba(0,0,0,0.4); padding:12px; font-size:13px; border-radius:10px; line-height:1.7; border:1px solid rgba(255,215,0,0.1);">
        جی شہزاد صاحب، میں آپ کے گٹ ہب سے جڑی ہوئی ہوں۔ میں ہر ویب سائٹ پر آپ کی مدد کے لیے تیار ہوں۔
    </div>
    <button id="ai-mic" style="width:100%; margin-top:15px; padding:12px; background:#28a745; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; font-size:15px; transition:0.3s;">🎤 بات کریں (Command)</button>
`;
document.body.appendChild(assistantBox);

// 3. وائس انجن
const aiLog = document.getElementById('ai-log');
const micBtn = document.getElementById('ai-mic');

function aiTalk(text) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK';
    utter.onstart = () => { micBtn.style.background = "#ff4444"; micBtn.innerText = "AI بول رہا ہے..."; };
    utter.onend = () => { micBtn.style.background = "#28a745"; micBtn.innerText = "🎤 بات کریں (Command)"; };
    window.speechSynthesis.speak(utter);
}

micBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK';
    
    recognition.onstart = () => { 
        aiLog.innerHTML += `<p style="color:#FFD700;"><i>سن رہا ہوں...</i></p>`;
        micBtn.innerText = "🎧 سن رہا ہوں...";
    };

    recognition.onresult = (e) => {
        const cmd = e.results[0][0].transcript;
        aiLog.innerHTML += `<p><b>آپ:</b> ${cmd}</p>`;
        aiLog.scrollTop = aiLog.scrollHeight;

        // یہاں ہم گٹ ہب والے فنکشن کو کال کر رہے ہیں
        if (typeof processISOSCommand === "function") {
            const result = processISOSCommand(cmd, "extension");
            aiTalk(result.response);
            if(result.actionURL) {
                setTimeout(() => { window.open(result.actionURL, '_blank'); }, 2000);
            }
        } else {
            // اگر گٹ ہب فائل ابھی لوڈ نہیں ہوئی تو مقامی جواب
            if(cmd.includes("ویزہ")) {
                aiTalk("شہزاد صاحب، میں ویزہ پورٹل چیک کر رہی ہوں۔ فی الحال کوئی نئی اپ ڈیٹ نہیں ملی۔");
            } else {
                aiTalk("معذرت، میں آپ کے گٹ ہب لاجک سے جڑنے کی کوشش کر رہی ہوں۔");
            }
        }
    };
    
    recognition.start();
};
