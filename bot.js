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



client.on('message', m => {
    var prefix = "!!"
    if (m.content.startsWith(prefix + 'say')) {
        var args = m.content.split(" ");
        var str = ``
        if (!args[1]) {
            str+=`You Have To Type Something ..`
        } else {
            str+=args.join(" ").slice(args[1].length);
        };
        m.channel.send(str);
    };
});


client.login(process.env.BOT_TOKEN); 
