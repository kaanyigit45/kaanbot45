const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return msg.author.sendEmbed(ozelmesajuyari); }
  let guild = msg.guild
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return msg.reply('`Bak mod-log Kanalını Bulamıyom. Oluşturda Gel');
  if (reason.length < 1) return msg.reply('Sebebi Ne');
  if (msg.mentions.users.size < 1) return msg.reply('Kimi Atadam Söyle Kendimi Kickleyecek Halim Yok :D').catch(console.error);

  if (!msg.guild.member(user).kickable) return msg.reply('Yetkilileri sunucudan atamam.');
  msg.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
	.setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('İş:', 'Sunucudan atma')
    .addField('Kıck Yiyen Kişi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kıck Atan Kiişi:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Sebepi', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
