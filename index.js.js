const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("message", (message) => {
  const arg = message.content.slice(prefix.length).trim().split(/ +/g);
  const komut = arg.shift().toLowerCase();
  if(komut === "çeviri") {
          var cevir = require('node-google-translate-skidz');
          let hdil = arg[0];
          if(!hdil) return message.channel.send("Kanaka Bak Yanliş Böyle Yaz `smt!çeviri [dil] [çeviriledek metin]`");
          if(hdil.length > 2) return message.channel.send("Kanaka Bak Yanliş Böyle Yaz `smt!çeviri [dil] [çeviriledek metin]`");
          var cevrt = arg.slice(1).join(" ");
          if(!cevrt){
              message.channel.send("Dil ne kvk");
          }
          cevir({
              text: cevrt,
              target: hdil
          }, function(result) {
              var dl = result.translation
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle('Çeviri')
              .addField("Çevrilmek istenen metin:", cevrt)
              .addField("Çevrilen Metin:", dl)
               message.channel.send({embed})
                  .catch(error => message.channel.send("Bir Hata Yok"))
          });
          }
});

client.on ('message', message => {
  if (message.content === prefix + "emojiler") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
    message.channel.send(emojiList);
  }
  })

  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'yazıtura') {
      var sans = ["**Tura**", "**Yazı**"];
      var sonuc = sans[Math.floor((Math.random() * sans.length))];
      msg.channel.send(`Yazımı Turamı->: ${sonuc}`)
    }
  });

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ıq') {
    var sans = ["IQ'un **-15**", "IQ'un **-13**", "IQ'un **-9**", "IQ'un **-5**", "IQ'un **-1**", "IQ'un **15**", "IQ'un **20**", "IQ'un **26**", "IQ'un **29**", "IQ'un **36**", "IQ'un **40**", "IQ'un **60**", "IQ'un **67**", "IQ'un **68**", "IQ'un **70**", "IQ'un **75**", "IQ'un **78**", "IQ'un **81**", "IQ'un **83**"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Senin ${sonuc}`)
  }
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === prefix + 'çik') {
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.leave();
    } else {
      message.reply('Hata Oldu Lütfen `Berat Selim #2711` Adlı Geliştiriciye Ulasın');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === prefix + 'katil') {
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
    } else {
      message.reply('Bir Ses Kanalına Girmen Gerekli. Kesin Emir');
    }
  }
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Bok", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade :dagger:", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "Hatıra Faction Bicaği :dagger:"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Sana **${sonuc}** Çikti`)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
