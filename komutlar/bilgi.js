const Discord = require('discord.js')

const embed = new Discord.RichEmbed()
.setTitle('Bilgi')
  .addField(" ?? E�lence ve Kullan�c� Komutlar�", `� .�q - IQ'nu G�sterir
\� .sava��� - Kasl� bir sava��� olursunuz!
\� .yazitura - Yazi Tura Atars�n�z
\� .�dev - �nek olursunuz
\� .espriyap - Hayattan sogursunuz`)

.setTitle(' Bot Hakk�nda')
  .addField(' ?? CSGO Komutlar�', `� .kasaa� kasa a�ars�n�z ;)`)
.setFooter('Day� Bot - Bot Hakk�nda')
.setColor("#00f2ff")

.setTitle(' Bot Hakk�nda')
  .addField(':pick:Minecraft Komutlar�', `� .mcbasarim Ba�ar�m kazan�rs�n�z! ;)`)
.setFooter('Day� Bot - Bot Hakk�nda')
.setColor("#00f2ff")

.setTitle('Bot Hakk�nda')
  .addField(' ??Yemek kodlar�', `� .�ayi� - Day�ya �ay �smarlars�n�z
\� .domates - Domates yersiniz`)
.setFooter('Day� Bot - Bot Hakk�nda')
.setColor("#36ff20")

.addField(' ????? Yetkili Komutlar�', `� .ban [**ki�i**] [**sebeb**] - Ki�i Banlar
� .kick [**ki�i**] [**sebeb**] - Ki�iyi Kickler
� .temizle - Sohbeti Temizler`)
.setColor("#FFFF66")

.setTitle(' ?? Bot Hakk�nda')
  .addField('Yap�mc�', `� <@!379302081577746433> - Bot Sahibi`)
.setFooter('Day� Bot - Bot Hakk�nda')
.setColor("#FF0000")

exports.run = (client, message) => {
    message.delete()
    message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'bilgi',
  usage: 'bilgi'
};
