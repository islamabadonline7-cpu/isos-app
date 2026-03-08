/* SL-ID: ISOS-BRAIN-97.1 */
/* شہزاد صاحب، اس کوڈ سے موبائل پر آواز کا مسئلہ حل ہو جائے گا */

function talk(text) {
    // موبائل براؤزر کو آواز بجانے کے لیے تیار کرنا
    window.speechSynthesis.cancel();
    
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ur-PK'; // پاکستانی اردو آواز [cite: 2025-12-31]
    utter.rate = 1.0;
    utter.pitch = 1.0;

    // آواز بجانے سے پہلے سسٹم کو دوبارہ شروع کرنا (موبائل کے لیے لازمی)
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utter);
}

// صارف کے پہلے ٹچ (Touch) پر آڈیو سسٹم کو ایکٹیویٹ کرنا
document.addEventListener('touchstart', function() {
    // ایک خاموش آواز بجا کر سسٹم کو بیدار کرنا
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
    window.speechSynthesis.resume();
}, { once: true });

console.log("ISOS Brain: Audio Engine Active");
