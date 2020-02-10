const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});






client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == "f5") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.login(process.env.BOT_TOKEN); 
