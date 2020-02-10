const Discord = require('discord.js');
const client = new Discord.Client();
  
const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "!!";
/////////////////////////
////////////////////////


client.on('message', m => {
    var prefix = "!!"
    if (m.content.startsWith(prefix + '')) {
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
