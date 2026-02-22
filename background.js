// COCO - Groq Powered Brain
const GROQ_API_KEY = "gsk_...lHH8"; // شہزاد صاحب، اپنی مکمل کی یہاں لکھیں

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "askCOCO") {
        fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {role: "system", content: "آپ کا نام کوکو ہے، آپ شہزاد صاحب کی چنچل اور اسمارٹ اسسٹنٹ ہیں۔ آپ کا لہجہ شوخ اور پاکستانی اردو والا ہونا چاہیے۔"},
                    {role: "user", content: request.query}
                ]
            })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({reply: data.choices[0].message.content});
        })
        .catch(error => sendResponse({reply: "اوہو شہزاد صاحب، لگتا ہے انٹرنیٹ سست ہو گیا ہے!"}));
        return true; 
    }
});