/* SL-ID: ISOS-BRAIN-104.1 */
/* ISLAMABAD ONLINE SERVICES (ISOS) - PUBLIC VOICE ENGINE */

function talk(text) {
    // آواز کو صاف کرنے اور دوبارہ شروع کرنے کا عمل
    window.speechSynthesis.cancel();
    
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK'; // پاکستانی اردو [cite: 2025-12-31]
    utter.rate = 1.0;
    utter.pitch = 1.1;

    // موبائل براؤزر کی آواز بحال کرنا
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utter);
}

// پبلک کے لیے خوش آمدید کا پیغام
function welcomePublic() {
    const welcomeText = "اسلام آباد آن لائن سروسز میں خوش آمدید! میں کوکو ہوں، آپ کی ڈیجیٹل اسسٹنٹ۔ حکم کیجیے، میں آپ کی کیا مدد کر سکتی ہوں؟";
    talk(welcomeText);
}

// صارف کے پہلے ٹچ یا کلک پر آواز کا انجن بیدار ہوگا
function activateAudio() {
    window.speechSynthesis.resume();
    welcomePublic();
    // ایک بار چلنے کے بعد ایونٹ لسنر ختم کر دیں
    document.removeEventListener('click', activateAudio);
    document.removeEventListener('touchstart', activateAudio);
}

document.addEventListener('click', activateAudio);
document.addEventListener('touchstart', activateAudio);

console.log("ISOS Brain: Public Welcome Voice Engine Active");
