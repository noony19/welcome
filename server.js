const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://trealo-wlc.glitch.me/`);
}, 280000);
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const botversion = require("./package.json").version;
client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//
/*
This code was published for the first time in Toxic Codes server;
All copyrights reserved to 'Baron' , 'Idiots Group';
you can contact with me here : https://baron.netlify.com/

-- ALERT  : "Some times getting erros while tring to get the inviter so i put a default setting as a try from
            me to avoids the errors, i hope u got it guys"

requirements : 
npm i canvas-constructor
npm i node-fetch
npm i fs-nextra

Upload this images next to the bot file :
1- "https://cdn.discordapp.com/embed/avatars/0.png" name it "0.png"
2- "https://cdn.glitch.com/c14fde5b-d052-4693-9b02-da838719a538%2Fwlc.png?v=1582643997240" name it "wlc.png" 

*/
const { Canvas } = require("canvas-constructor");
const fetch = require("node-fetch");
const fsn = require("fs-nextra");
const invites = {};
const wait = require("util").promisify(setTimeout);

client.on("guildMemberAdd", async member => {
  let channel = await member.guild.channels.get("762603474356666378");
  var imageUrlRegex = /\?size=2048$/g;
  var wlcImage = await fsn.readFile("./wlc.png"); //Baron#0001

  var result = await fetch(
    member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128")
  );

  if (result.ok) {
    var avatar = await result.buffer();
  } else if (!result.ok) {
    var avatar = await fsn.readFile("./0.png"); //Baron#0001
  }

  let name =
    member.user.username.length > 14
      ? member.user.username.substring(0, 13) + "..."
      : member.user.username;

  const buffer = new Canvas(962, 579)
    .addImage(wlcImage, 0, 0, 950, 470)
   .addCircularImage(avatar, 252, 253, 183) //Baron#0001
    .setTextAlign("left")
    .setTextFont("50pt Times New Roman")
    .setColor("#FFFFFF")
    .addText(name, 500, 275)
    .toBuffer();

  try {
    var { Attachment } = await require("discord.js");
    const filename = `baron-wlc-${member.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await channel.send(attachment);
  } catch (error) {
    return channel.send(`An error ocurred: **${error.message}**`);
  }
});
 






///


 
const SQLite = require('sqlite'); // SQLpackage
const path = require('path'); // PATHpackage
const Invites = {}; // Codes
 
client.on("ready", () => { // ready ?
    client.guilds.forEach(g => { // for each guilds ?
        g.fetchInvites().then(guildInvites => { // fetch invites ?
                invites[g.id] = guildInvites; // push guild invites on invites ^^
        }); // end
}); // end
}); // end
SQLite.open(path.join(__dirname, 'links.sql')) // read path ?
.then(() => { // then ?
    console.log('Opened') // seccussfull opened
    SQLite.run(`CREATE TABLE IF NOT EXISTS linkSysteme (code TEXT, id VARCHAR(30))`) // create table if not exisit
}) // end
.catch(err => console.error(err)) // on error
 
client.on("message", async msg => { // message ?
    if(msg.author.bot || !msg.channel.guild) return; // if bot or private return
    if(msg.content.startsWith("رابط")) { // message content
        let invite = await msg.channel.createInvite({ //  create invites
            maxAge: 86400, // one day // limit time for invite ^^
            maxUses: 5 // 5 people can enter // limit users for invites ^^
        }, `Requested by ${msg.author.tag}`).catch(console.log); // reason // end
       
        SQLite.run(`INSERT INTO linkSysteme VALUES ('${invite.code}','${msg.author.id}')`) // insert into table
        msg.author.send(invite ? /*seccussfull*/`**مدة الرابط : يـوم عدد استخدامات الرابط : 5 **:\n ${invite}` /*error catch*/: "يوجد خلل في البوت :( \n  يتم حل المشكل قريبا ...");
    }
 
})
 
let inv_room = "762603474356666378" // room id
client.on('guildMemberAdd', async member => { // membed add event
    member.guild.fetchInvites().then(async guildInvites => { // fetch invites ?
            const inv = invites[member.guild.id]; // get invite :)
            invites[member.guild.id] = guildInvites; // push guild invites on invites
            let invite = guildInvites.find(i => inv.get(i.code).uses < i.uses); // find ?
            let res = await SQLite.get(`SELECT * FROM linkSysteme WHERE code = '${invite.code}'`) // select from sql
            if(!res) { // if the code does'nt exists
            console.log(invite.code) // for test 
          client.channels.get(inv_room).send(`
You'r in **trealo** ${invite.inviter} 
 `) // send message to welcome room/// 
      //      client.channels.get(inv_room).send(`**via** :${member}`) // send message to welcome room///
            } else { // if the code link exitst
                client.channels.get(inv_room).send("") // send message to welcome room
                console.log(res.code) // for test
        } // end if
    }); // end fetchs :)
}); // end events :) ) )) ))  )) )) )) )) ) )) ))



 
 client.on('ready',async () => { 
   client.channels.find(ch=>ch.id===""&&ch.type==='voice').join();
 });