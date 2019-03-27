const Discord = require("discord.js");


const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Cupidon BOT Online :D`); 
  client.user.setActivity(`Weeblyz#1948`);
});

client.on("guildCreate", guild => {
  console.log(`J'ai rejoind: ${guild.name} (id: ${guild.id}).`);
});

client.on("guildDelete", guild => {
  console.log(`On m'as supprimé de: ${guild.name} (id: ${guild.id})`);
});


client.on("message", async message => {
	
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  let command = message.content.split(" ")[0];
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  command = args.shift().toLowerCase();
  
  
  if(command === "check") {
    let fonda = message.guild.roles.get("549612461435912212");
    let admin = message.guild.roles.get("549627288371855390");

    if(!message.member.roles.has(fonda.id) && !message.member.roles.has(admin.id)){
      return message.reply("Vous n'avez pas la permission d'exécuter cette commande.");
    }

    if(message.mentions.users.size === 0){
      return message.reply("Vous n'avez pas mentionner l'utilisateur vérifié.");
    }

    let checkMember = message.guild.member(message.mentions.users.first());
    if(!checkMember){
      return message.reply("Cet utilisateur est introuvable ou impossible à checker.");
    }

    const guildMember = message.member;
    checkMember.addRole('549684639099387904');
    checkMember.addRole('549977095124680704');
    checkMember.addRole('549977772118769684');
    checkMember.addRole('549979635945963520');
    checkMember.addRole('549982301400989706');
    checkMember.addRole('549984643823173646');
    checkMember.addRole('549986658469150721');
    checkMember.addRole('549988491094786069');
    checkMember.addRole('550106539348983839');
    checkMember.addRole('549980569480593411');
    checkMember.addRole('551580244117684228');
    checkMember.addRole('551601178077560843');
    checkMember.addRole('551573791076253746');
    checkMember.addRole('551573791076253746');
    checkMember.addRole('551573791076253746');
    checkMember.addRole('552904523920965642');
    checkMember.addRole('551566092024152077');
    checkMember.addRole('551603181155647509');
    checkMember.addRole('552908940006916098');
    checkMember.addRole('551547396778229764');
    checkMember.addRole('551566752585351168');
    checkMember.addRole('551561730057043979');
    checkMember.addRole('551603493522112515');
    checkMember.addRole('552905910914252800');
    checkMember.addRole('552908224886734858');
    checkMember.addRole('559781755511504947');

    return message.reply("Cet utilisateur à été vérifié avec succès.");
  }
});

client.login(config.token);
