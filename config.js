const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61VyY6rRhT9l9rabTMPlloKo40BG88NURYFlHFhM5jBBj/1HyS77N8q//c+IaLdrX7RG9KRwqpEVZ177r3nnvoE0gyXyEQtGH0CeYEvsELdsmpzBEZArvd7VIA+CGEFwQgEiqxAm9pnSq8Oo+ENpper4U22Jy3Z+B5lkdseZcY4Ph7dR/DcB3ntn3DwE0DOwgRk3Cpfmu3wsCFUSVXamD4vN2cmuhhwV51rY6aYOo4ewXOHCHGB00jLDyhBBTyZqHUgLj5GXzCbsjS3/Hq6nwcazgnbkcW0FwcaqhuVFZ7cWRTLYuwfg4/RZ6co8JXehjGHNksbweUSWQy1bKbzI60wyaRhU4NLZk/ulbjTL3GUotAIUVrhqv1w3V0912Ax0fbw3BipRK0EcxM11ySwtiQT1zR19Q3PXFzmuvQx4tvLgs9sf+vPr86sxOt4l8YiJd1I0pOapaGsvTWlrjU2bv5B3CnetHL8L3UPVGY1n3DMOJN0x41I+6bOSQKmwWw1bGP5LAr2RJ7aWy75YN33PWzVbZYuvTHlSdr4ph89bxNp21IaG7GjmplnNdC/hNvrO31Y1cVPi+yuzwdb6MXq8uw6kDmf/KOguhe0EF1NyI6iyU5uQ/lsKEo2qdrU45dW2jNoz1Dx5XoJb0tmRV6unkbenLi28y2VzmXp8SWjI2qNEIzI5z4oUITLqoAVztLuH0v0AQwvKxQUqHqpLpjrE0lmTyvP97O0UXYHKls9FYpJL+QNp8nOCumJudEkdeg+gj7IiyxAZYnCCS6rrGhtVJYwQiUY/frSqC7nAiVZhaY4BCNAcTQv8KJI8yT9Szm4HmBVwjwfpKgCfbAvssRGYFQVNeqDlwsEyWmyoLKkyNG8qMs8S5KsrikEo7A8r8pdhsk96BonqKxgkoMRyTMsJ3IUKzz3/x8eGiGpEqHrAk0zHMHIhCirBEfwhKbIjEir/8rjtz5IUVPdZdwVn2b7YI+LstqkdX7KYPim8bdNGARZnVarNg2UboEKMCLff6OqwmlUdpnVKSyCA74gpcvjzvu5D0J0wQHq4MD0ViZRTjoL4cHxKU9BwWo2kboGHrL0foQTKZrkBeEhoCn4wDA8+QCFkHoQSIFkQh5CBjGgq8bdQLo7P9SzuWswnhvGKQhPmVXeBBeX2mJP6MPoRZN3IaIChW9F9mFwrPN1dkTpT3BtpnB8eHyarPJxvkOCSPJPieLZ+Fp+hXsXOBh9ejdtJQs7PGnLczOXn4KuWV2cb8Qw4qlv9ZDC7jT48vn3P758/vOvwWawGkwG2mD5sBvMB8uBNVAH3UZ3oKPx2qIuQIgqiE8lGAHF9pfHJbHgezVxlVxXXkmSKUndFL219M0p7qMYVXnGTenjukimjafPzvFYl4fhwT0VKtUesBCjOojsaBxr3wMBI0COe0wbSeehbJ3P1jU1dyfpKonn80l7aq2gtmr6QI7ZxG6HgbM0rvJmw9bJxN9bTW7ousPJDeuMmbKCnKLVpgLbw16OHrtod219HawkIZekU8mPt0NDPASpdLKKRiP03m0z9Hv8eLqokGHRRdUo68rRhgxHLVIiaTU7dJbZTFQ5h2APkXwbkmQZJWw+JKXo7mEvHnp6fbvwq73clbjH6OUpeO3Rv/byfSiI5/5XGK+Pyw+EJ7sWhHMcshrH4mC3XMOsOSz2tLubwqtYZu7FoIvUUA05a8BzN+z5CVb7rEjACMA0LDIcgj44wbKS3sf6e05B9UHSSnm+qmD15gZAevmWK/D8N8WHG7E3CQAA",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "25566862457",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by B.m.b-xmd 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
