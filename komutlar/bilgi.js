const Discord = require('discord.js')

const embed = new Discord.RichEmbed()
.setTitle('Bilgi')
  .addField(" ?? Eðlence ve Kullanýcý Komutlarý", `• .ýq - IQ'nu Gösterir
\• .savaþçý - Kaslý bir savaþçý olursunuz!
\• .yazitura - Yazi Tura Atarsýnýz
\• .ödev - Ýnek olursunuz
\• .espriyap - Hayattan sogursunuz`)

.setTitle(' Bot Hakkýnda')
  .addField(' ?? CSGO Komutlarý', `• .kasaaç kasa açarsýnýz ;)`)
.setFooter('Dayý Bot - Bot Hakkýnda')
.setColor("#00f2ff")

.setTitle(' Bot Hakkýnda')
  .addField(':pick:Minecraft Komutlarý', `• .mcbasarim Baþarým kazanýrsýnýz! ;)`)
.setFooter('Dayý Bot - Bot Hakkýnda')
.setColor("#00f2ff")

.setTitle('Bot Hakkýnda')
  .addField(' ??Yemek kodlarý', `• .çayiç - Dayýya çay ýsmarlarsýnýz
\• .domates - Domates yersiniz`)
.setFooter('Dayý Bot - Bot Hakkýnda')
.setColor("#36ff20")

.addField(' ????? Yetkili Komutlarý', `• .ban [**kiþi**] [**sebeb**] - Kiþi Banlar
• .kick [**kiþi**] [**sebeb**] - Kiþiyi Kickler
• .temizle - Sohbeti Temizler`)
.setColor("#FFFF66")

.setTitle(' ?? Bot Hakkýnda')
  .addField('Yapýmcý', `• <@!379302081577746433> - Bot Sahibi`)
.setFooter('Dayý Bot - Bot Hakkýnda')
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
