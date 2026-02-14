// ISOS AI Master Panel - Shehzad Sahib Special
const assistantBox = document.createElement('div');
assistantBox.style = "position:fixed; bottom:25px; right:25px; width:330px; background:#001f3f; color:white; border:2px solid #00d4ff; border-radius:15px; padding:20px; z-index:999999; box-shadow:0 0 30px rgba(0,212,255,0.5); font-family:Arial;";
assistantBox.innerHTML = `
    <div style="border-bottom:1px solid #00d4ff; padding-bottom:10px; margin-bottom:15px; display:flex; justify-content:space-between;">
        <b>🤖 ISOS AI MANAGER v2.0</b>
        <span style="color:#00ff00; font-size:10px;">● ACTIVE</span>
    </div>
    <div id="ai-log" style="height:120px; overflow-y:auto; background:rgba(0,0,0,0.3); padding:10px; font-size:12px; border-radius:8px; line-height:1.6;">
        جی شہزاد صاحب، میں ہر ویب سائٹ پر آپ کے ساتھ شاملِ گفتگو ہوں۔ مائیک دبائیں!
    </div>
    <button id="ai-mic" style="width:100%; margin-top:15px; padding:12px; background:#ff4b2b; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">🎤 بات کریں (Speak to Me)</button>
`;
document.body.appendChild(assistantBox);

// وائس رسپانس سسٹم
document.getElementById('ai-mic').onclick = () => {
    const speech = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    speech.lang = 'ur-PK';
    speech.start();
    speech.onresult = (e) => {
        const cmd = e.results[0][0].transcript;
        document.getElementById('ai-log').innerHTML += `<p><b>آپ:</b> ${cmd}</p>`;
        if(cmd.includes("ویزہ")) {
            const utter = new SpeechSynthesisUtterance("شہزاد صاحب، میں آپ کا ویزہ نمبر 382026046639 مانیٹر کر رہا ہوں، فی الحال کوئی سلاٹ نہیں ملا۔");
            utter.lang = 'ur-PK'; window.speechSynthesis.speak(utter);
        }
    };
};