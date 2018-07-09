const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Duyurular Sanki Havadan Geliyor AAA Havadan Kağit Geliyor Huşşşşşş !:cloud: ');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(0xff7f00)
    .setDescription(`Duyuru: **${mesaj}**`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
