const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (message.author.id !=379302081577746433) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Bir�ey Yazmal�s�n�z');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur'],
  permLevel: 3
};

exports.help = {
  name: '55432dmduyuru',
  description: '�stedi�iniz �eyi bota duyurtur.',
  usage: 'dmduyuru [duyurmak istedi�iniz �ey]'
  };