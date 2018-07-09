const Discord = require('discord.js')

exports.run = (client, message) => {
	message.reply(`:ping_pong: Pingim **${client.ping}**`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};