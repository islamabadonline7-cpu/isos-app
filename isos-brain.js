// ISOS Universal Brain - Version 1.0
// Shehzad Sahib, this is the center of your entire system.

const ISOS_KNOWLEDGE = {
    services: "شہزاد صاحب، ہم ویزہ، اٹیسٹیشن، اور اپائنٹمنٹ کی خدمات دیتے ہیں۔",
    visa_portal: "https://isos.onlinehubs.world/p/global-visa-portal.html",
    status_url: "https://isos.onlinehubs.world/p/status.html",
    contact_url: "https://isos.onlinehubs.world/p/contact-us.html"
};

function processISOSCommand(cmd, source) {
    let response = "";
    let actionURL = "";

    if (cmd.includes("سروس")) {
        response = ISOS_KNOWLEDGE.services;
    } else if (cmd.includes("ویزہ")) {
        response = "جی، میں ویزہ پورٹل کھول رہی ہوں۔";
        actionURL = ISOS_KNOWLEDGE.visa_portal;
    } else if (cmd.includes("اسٹیٹس")) {
        response = "اسٹیٹس چیک کرنے کا صفحہ حاضر ہے۔";
        actionURL = ISOS_KNOWLEDGE.status_url;
    }

    return { response, actionURL };
}