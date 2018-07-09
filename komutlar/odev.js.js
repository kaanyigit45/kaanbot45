const Discord = require('discord.js')

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username + 'Tebrikler, artık bir ineksin!')
.setImage(`https://cdn.discordapp.com/attachments/411867030506176524/465065117881466880/38236093494072395480.png`)
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
  name: 'ödev',
  description: 'ödev',
  usage: 'ödev'
};