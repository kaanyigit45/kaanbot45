const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet Linkim: https://discordapp.com/oauth2/authorize?client_id=464833245792698368&scope=bot&permissions=8');
    return message.channel.send(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sana Botun Linkini Gönderir.',
  usage: 'davet'
};