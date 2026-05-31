/* ==========================================================
   ISOS BRAIN ENGINE 2026
   Islamabad Online Services Official AI Assistant
   Version: 20.0
   ========================================================== */

const ISOS = {

company: "Islamabad Online Services",

website: "https://onlinehubs.world/isos/",

phone: "+923044841012",

whatsapp: "https://wa.me/923044841012",

office: "G-9 Markaz Islamabad",

services: [

"Visa Guidance",
"Document Attestation",
"MOFA Attestation",
"Embassy Attestation",
"Police Character Certificate",
"Power of Attorney",
"Affidavit Services",
"Family Registration Certificate",
"NICOP Guidance",
"Passport Guidance",
"Visa Appointment Support",
"Work Visa Support",
"Study Visa Guidance",
"Visit Visa Guidance",
"Immigration Documentation"

]

};

function talk(text, callback=null){

window.speechSynthesis.cancel();

const speech = new SpeechSynthesisUtterance(text);

speech.lang = "ur-PK";

speech.rate = 0.95;

speech.pitch = 1;

speech.onend = ()=>{

if(callback){
callback();
}

};

window.speechSynthesis.speak(speech);

}

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition;

if(SpeechRecognition){

recognition = new SpeechRecognition();

recognition.lang = "ur-PK";

recognition.continuous = false;

recognition.interimResults = false;

recognition.onresult = (event)=>{

const text =
event.results[0][0].transcript;

processISOSQuery(text);

};

recognition.onerror = ()=>{

console.log("Recognition Error");

};

}

function startListening(){

try{

recognition.start();

}catch(e){}

}

function welcomePublic(){

talk(

"اسلام آباد آن لائن سروسز میں خوش آمدید۔ میں کوکو ہوں۔ ویزا، اٹیسٹیشن، ایمبیسی یا ڈاکومنٹیشن کے بارے میں سوال پوچھ سکتے ہیں۔"

);

}

function processISOSQuery(input){

const q = input.toLowerCase();

let answer = "";

/* Greeting */

if(

q.includes("سلام") ||

q.includes("ہیلو") ||

q.includes("ہائے")

){

answer =
"وعلیکم السلام۔ اسلام آباد آن لائن سروسز میں خوش آمدید۔";

}

/* Who are you */

else if(

q.includes("کون ہو") ||

q.includes("تعارف")

){

answer =
"میں اسلام آباد آن لائن سروسز کی ڈیجیٹل اسسٹنٹ کوکو ہوں۔";

}

/* Visa */

else if(

q.includes("ویزا")

){

answer =
"ہم مختلف ممالک کے ورک، وزٹ اور اسٹڈی ویزا کے لیے رہنمائی فراہم کرتے ہیں۔";

}

/* MOFA */

else if(

q.includes("موفا") ||

q.includes("mofa")

){

answer =
"موفا اٹیسٹیشن پاکستان میں دستاویزات کی سرکاری تصدیق کا عمل ہے۔";

}

/* Embassy */

else if(

q.includes("ایمبیسی") ||

q.includes("embassy")

){

answer =
"ہم مختلف ایمبیسیز کی اپائنٹمنٹ اور دستاویزات کے متعلق رہنمائی فراہم کرتے ہیں۔";

}

/* PCC */

else if(

q.includes("پولیس") ||

q.includes("character certificate")

){

answer =
"پولیس کریکٹر سرٹیفکیٹ بیرون ملک ویزا اور امیگریشن میں استعمال ہوتا ہے۔";

}

/* POA */

else if(

q.includes("پاور آف اٹارنی")

){

answer =
"ہم پاور آف اٹارنی کی تیاری اور اٹیسٹیشن کے متعلق رہنمائی فراہم کرتے ہیں۔";

}

/* Contact */

else if(

q.includes("رابطہ") ||

q.includes("واٹس ایپ")

){

answer =
"براہ کرم واٹس ایپ نمبر صفر تین صفر چار چار آٹھ چار ایک صفر ایک دو پر رابطہ کریں۔";

}

/* Default */

else{

answer =
"اس موضوع پر مزید معلومات کے لیے براہ کرم واٹس ایپ پر رابطہ کریں۔";

}

talk(answer);

}

function openWhatsApp(){

window.open(
ISOS.whatsapp,
"_blank"
);

}

function openWebsite(){

window.open(
ISOS.website,
"_blank"
);

}

function callISOS(){

window.open(
"tel:+923044841012"
);

}

window.addEventListener(

"load",

()=>{

setTimeout(

()=>{

welcomePublic();

},

1500

);

}

);





