const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Allahhh Belanızı Versin Biktim. Ben Ne Yazadamda Yazıyorsunuz');
  message.delete();
  message.channel.send('Bu Mesaji Bana ' + '**' + message.author.username + '**' + ' Yazdırdı. Mesaji İse -> ' + '**' + mesaj + '**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
