const Discord = require('discord.js')

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username + ' Dayı pek sevmez ama afiyet bal şeker olsun dostum!')
.setImage(`https://cdn.discordapp.com/attachments/411867030506176524/465054660970151948/domates-luks.png`)
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
  name: 'domates',
  description: 'domates',
  usage: 'domates'
};