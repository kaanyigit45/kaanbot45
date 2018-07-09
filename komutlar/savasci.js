const Discord = require('discord.js')

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username + 'Sen asil bir askersin adamım! Dayı seni beğendi!')
.setImage(`https://cdn.discordapp.com/attachments/411867030506176524/465066515578880010/2Q.png`)
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
  name: 'savaşcı',
  description: 'savaşcı',
  usage: 'savaşcı'
};
