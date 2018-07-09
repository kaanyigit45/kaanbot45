const Discord = require('discord.js')

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username + ' | -> Dayı sana çay ısmarladı! Afiyet olsun yiğenim!')
.setImage(`https://cdn.discordapp.com/attachments/458004691402489856/464910601169141767/turkiyede-cay-kulturu22.jpg`)
.setColor("RANDOM")
	message.delete()
	message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'çayiç',
  usage: 'çayiç'
};