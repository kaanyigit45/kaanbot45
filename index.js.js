const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCO5YZJdRx0V9wk5Hn1JxGn3jG-C2SWD84');
const queue = new Map();
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
    var sans = ["Bok", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "USP-S | Leş Onaylandı", "Kancalı Bicak | Fade :dagger:", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "M9 Bayonet | Gamma Doppler :dagger:"];
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

var servers = {};
var prefix = 'm.';
client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "oynat":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send(':x: Lütfen Sesli Bir Kanala Giriniz.');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(':x: Odaya Girme Yetkim Yok');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(':x: Kanalda Konuşma Yetkim Yok');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`Oynatma Listesi: **${playlist.title}** Listeye Eklendi`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					message.channel.send(`
__**Şarkı Listesi:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Lütfen Hangi Şarkıyı Seçmek İstiyosan 1'den 10'a Kadar Bir Sayı Yaz.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send(':x: Geçersiz Değer Girildi.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: Arama Sonucu Elde Edemedim');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "geç":
		if (!message.member.voiceChannel) return message.channel.send(':x: Sesli Kanalda Değilsin.');
		if (!serverQueue) return message.channel.send(':x: Şarkı Çalmıyor.');
		serverQueue.connection.dispatcher.end(':white_check_mark:  Şarkı Başarıyla Geçildi');
		return undefined;
        break;
      case "kapat":
		if (!message.member.voiceChannel) return message.channel.send(':x: Sesli Kanalda Değilsin.');
		if (!serverQueue) return message.channel.send(':x: Şarkı Çalmıyor.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(':white_check_mark:  Şarkı Başarıyla Kapatıldı');
		return undefined;
break;
      case "ses":
		if (!message.member.voiceChannel) return message.channel.send(':x: Sesli Kanalda Değilsin.');
		if (!serverQueue) return message.channel.send(':x: Şarkı Çalmıyor.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
break;
      case "çalınan":
		if (!serverQueue) return message.channel.send(':x: Şarkı Çalmıyor.');
		return message.channel.send(`Şuanda Çalınan Şarkı İsmi: **${serverQueue.songs[0].title}**`);
break;
      case "şarkılistesi":
		if (!serverQueue) return message.channel.send(':x: Şarkı Çalmıyor.');
		return message.channel.send(`
__**Şarkı Listesi:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Şuanda Çalınan:** ${serverQueue.songs[0].title}
		`);
break;
      case "durdur":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('Şarkı Başarıyla Durduruldu!');
		}
		return message.channel.send(':x: Şarkı Çalmıyor.');
break;
      case "devamet":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('Şarkı Devam Ettiriliyor!');
		}
		return message.channel.send(':x: Şarkı Çalmıyor.');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`:x: Ses Kanalına Giremedim HATA: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`:x: Ses Kanalına Giremedim HATA: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`Şarkı Listesine **${song.title}** Adlı Bir Şarkı Eklendi.`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('``Şarkı Bitti Yeni Şarkıya Geçiliyor...``');
			if (reason === 'İnternetten Kaynaklı Bir Sorun Yüzünden Şarkılar Kapatıldı.') console.log('Şarkılar Bitti..');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Çalınan Şarkı: **${song.title}**`);
}
});

client.login(process.env.BOT_TOKEN);
