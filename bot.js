const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522782809530695694")
setInterval(function() {
channel.send(`Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);