const Discord = require('discord.js')

const embed = new Discord.RichEmbed()
.setTitle('Bilgi')
  .addField(" 😂 Eğlence ve Kullanıcı Komutları", `• .ıq - IQ'nu Gösterir
\• .savaşçı - Kaslı bir savaşçı olursunuz!
\• .yazitura - Yazi Tura Atarsınız
\• .ödev - İnek olursunuz
\• .espriyap - Hayattan sogursunuz`)

.setTitle(' Bot Hakkında')
  .addField(' 🔫 CSGO Komutları', `• .kasaaç kasa açarsınız ;)`)
.setFooter('Dayı Bot - Bot Hakkında')
.setColor("#00f2ff")

.setTitle(' Bot Hakkında')
  .addField(':pick:Minecraft Komutları', `• .mcbasarim Başarım kazanırsınız! ;)`)
.setFooter('Dayı Bot - Bot Hakkında')
.setColor("#00f2ff")

.setTitle('Bot Hakkında')
  .addField(' 🍔Yemek kodları', `• .çayiç - Dayıya çay ısmarlarsınız
\• .domates - Domates yersiniz`)
.setFooter('Dayı Bot - Bot Hakkında')
.setColor("#36ff20")

.addField(' 👨‍💼 Yetkili Komutları', `• .ban [**kişi**] [**sebeb**] - Kişi Banlar
• .kick [**kişi**] [**sebeb**] - Kişiyi Kickler
• .temizle - Sohbeti Temizler`)
.setColor("#FFFF66")

.setTitle(' 🤖 Bot Hakkında')
  .addField('Yapımcı', `• <@!379302081577746433> - Bot Sahibi`)
.setFooter('Dayı Bot - Bot Hakkında')
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
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};
