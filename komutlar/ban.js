const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`Sunucunda mod-log kanalı bulamadım. mod-log Kanalını Ekle');
  if (reason.length < 1) return message.reply('Sebebini Söyle');
  if (message.mentions.users.size < 1) return message.reply('Kim O Banlayacam Söyle Bana').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply(':no_entry_sign: Onlar Yetkililer Onları Banlayamam:no_entry_sign:');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('İş:', 'Ban')
    .addField('Banlanan:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Banı Atan Kişi:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebeb', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
