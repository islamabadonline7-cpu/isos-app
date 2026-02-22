// COCO - فائنل انٹیگریٹڈ وائس اسسٹنٹ
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ur-PK';
recognition.continuous = true;

// 1. چنچل آواز کا فنکشن
const cocoSpeak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ur-PK';
    msg.pitch = 1.4; // شوخی کے لیے
    msg.rate = 1.1;  // تیزی کے لیے
    window.speechSynthesis.speak(msg);
};

// 2. آواز سن کر Groq (بیک گراؤنڈ) سے رابطہ کرنا
recognition.onresult = (event) => {
    const userSpeech = event.results[event.results.length - 1][0].transcript;
    console.log("شہزاد صاحب نے کہا:", userSpeech);

    // بیک گراؤنڈ فائل کو پیغام بھیجنا
    chrome.runtime.sendMessage({action: "askCOCO", query: userSpeech}, (response) => {
        if (response && response.reply) {
            cocoSpeak(response.reply); // Groq کا جواب چنچل آواز میں
        }
    });
};

// 3. پیج کھلتے ہی خوش آمدید
window.onload = () => {
    cocoSpeak("شہزاد صاحب! میں حاضر ہوں۔ بتائیے، آج انٹرنیٹ پر کیا دھوم مچانی ہے؟");
    recognition.start();
};