const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = ['#']
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say" ) {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Robben');
  if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.BOT_TOKEN); 
