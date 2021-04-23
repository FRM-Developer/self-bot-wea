/*


AUTHOR: Mhankbarbar
RECODE: CALIPH 
*/
const
{
 WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   MimetypeMap,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { 
    help,
   ownermenu,
    nsfwmenu,
    kerangmenu,
    mediamenu,
    animemenu,
    othermenu,
    groupmenu,
    funmenu,
    snk,
    readme,
    downloadmenu
    } = require('./src/help.js')
const { donasi } = require('./src/donasi.js')
const { negara } = require('./src/kodenegara.js')
const { uploadimg, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, emojiStrip, banner2, processTime, bitly, shortlink } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const axios = require('axios');
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const { virtex } = require('./src/virtex.js')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const tiktod = require('tiktok-scraper')
const fetch = require('node-fetch')
const isNumber = require('is-number');
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const emror = fs.readFileSync('./src/404.jpg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const astik = JSON.parse(fs.readFileSync('./src/autos.json'))
const left = JSON.parse(fs.readFileSync('./src/left.json'))
const brainly = require('brainly-scraper');
const randomString = require('random-string');
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const pantun = JSON.parse(fs.readFileSync('./src/pantun.js'))
const googleIt = require('google-it')
const setiker = JSON.parse(fs.readFileSync('./src/sticker.json'))
const sayrandom = JSON.parse(fs.readFileSync('./src/say.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const loaded = JSON.parse(fs.readFileSync('./src/mess.json'))
const db_img = JSON.parse(fs.readFileSync('./src/db_img.json'))
const speed = require('performance-now')
const terminal = require('qrcode-terminal')
const emojiUnicode = require('emoji-unicode')
ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const limit = JSON.parse(fs.readFileSync('./src/msgLimit.json'))
const setting = JSON.parse(fs.readFileSync('./src/setting.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const revoke = JSON.parse(fs.readFileSync('./src/antirevoke.json'))
const delay = require('delay')
const { ht } = require('./lib/tahta.js')
const nekopoi = require('./lib/nekopoi.js')
const _afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
const translate = require('translation-google');
const textpro = require('./lib/textpro.js')
const resep = require('./lib/resep')
const antivirtex = JSON.parse(fs.readFileSync('./src/antiV.json'))
const ytdl = require('ytdl-core')
const stc= require('./lib/sticker.js')
cr = `*SYSTEM*`
const path = require('path')
limitCount = 30
baterai = 100
const canvas = require('discord-canvas')
charging = ''
reading = setting.read
const { JSDOM } = require('jsdom')
broadcast = 'kosong :D'
const {
    isFiltered,
    addFilter
} = require('./lib/antispam')
const { servers, yta, ytv } = require('./lib/y2mate')
const os = require('os')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const PhoneNumber = require('awesome-phonenumber')
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:+62 812-1519-9447\n' // full name
            + 'ORG:Owner Caliph Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=BUSSINES;waid=6281215199447:6281215199447\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const request = require('request');
const yts = require('yt-search')
let d = new Date
//const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
const {
vkey, 
apiKey,
tobzkey,
apikey,
zekskey
} = setting

function monospace(string) {
return '```'+ string +'```'
}

blocked = []

const caliph = new WAConnection()

function timeConverter(UNIX_timestamp, ribuan){
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }
 
  //buat index bulan
  var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

  // ambil pecahan waktu masing-masing
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  // gabungkan ke dalam variable time
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
var hariRamadhan = Math.floor(15 - moment().format('DD'))
			var bulanRamadhan = Math.floor(4 - moment().format('MM'))
			var jamRamadhan = Math.floor(24 - moment().format('HH'))
			
			const randomNimek = async (type) => {
    var url = 'https://api.computerfreaker.cf/v1/'
    switch(type) {
        case prefix+'nsfw':
            nsfw = 'https://api.xteam.xyz/randomimage/nsfwneko?APIKEY='+setting.xteam
            //if (!nsfw.ok) throw new Error(`unexpected response ${nsfw.statusText}`)
            //resultNsfw = await nsfw.json()
            return nsfw
					break
        case prefix+'hentai':
            hentai = 'https://api.xteam.xyz/randomimage/hentai?APIKEY='+setting.xteam
           // resultHentai = await hentai.json()
            return hentai
					break
        case prefix+'anime':
            anime = await fetch(url + 'anime')
           // if (!anime.ok) throw new Error(`unexpected response ${anime.statusText}`)
            resultNime = await anime.json()
            return resultNime.url
					break
        case prefix+'neko':
            neko = 'https://api.xteam.xyz/randomimage/sfwneko?APIKEY='+setting.xteam
            return neko
					break
        case prefix+'trap':
             trap = await fetch(url + 'trap')
          //  if (!trap.ok) throw new Error(`unexpected response ${trap.statusText}`)
            resultTrap = await trap.json()
            return resultTrap.url
					break
    }
}

const neonime = () => new Promise((resolve, reject) => {
    
console.log('Get Neonime latest update...')
    
fetchJson('https://enznoire.herokuapp.com/neolatest')
        
.then((result) => resolve(result))
        
.catch((err) => reject(err))

})


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    console.log(obj)
    return obj
}

function serialize(chat) {
	m = JSON.parse(JSON.stringify(chat))
	content = m.message
	//.text = m.message.conversation 
	m.isGroup = m.key.remoteJid.endsWith('@g.us')
	try {
		const berak = Object.keys(content)[0]
		m.type = berak
	} catch {
		m.type = null
	}
	try {
		const context = m.message.extendedTextMessage.contextInfo.quotedMessage
		m.quoted = context
	} catch {
		m.quoted = null
	}
 
    try { 
    m.chat = m.key.remoteJid 
    } catch {
    m.chat = null
    }
    
	try {
		const mention = m.message[m.type].contextInfo.mentionedJid
		m.mentionedJid = mention
	} catch {
		m.mentionedJid = null
	}

	if (m.isGroup) {
		m.sender = m.participant
	} else {
		m.sender = m.key.remoteJid
	}
	if (m.key.fromMe) {
		m.sender = caliph.user.jid
	}
	txt = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ""
	m.text = txt
	return m
}
const confirmLimit = (sender, amount) => {
        	let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount
                fs.writeFileSync('./src/msgLimit.json', JSON.stringify(limit))
            }
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}
config = {
group: 'https://chat.whatsapp.com/BDb0bBJ4aYU1y3Ine2a4DM'
}
async function starts() {
	//caliph.logger.level = 'warn'
	/*await console.log('starting...')
	console.log(banner.string)
	console.log(banner2.string)*/
	
	caliph.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	caliph.on('credentials-updated', () => {
		fs.writeFileSync('./session.data.json', JSON.stringify(caliph.base64EncodedAuthInfo(), null, '\t'))
	})
	fs.existsSync('./session.data.json') && caliph.loadAuthInfo('./session.data.json')
	await caliph.connect({timeoutMs: 30*1000})
	
function getName(jid)  {
  		let v = jid === caliph.user.jid ? caliph.user : caliph.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  		return v.name || v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
  	}
  	caliph.on('group-participants-update', async (hem) => {
  	sender = hem.participants[0]
  	if (hem.action == 'add' && sender.includes(caliph.user.jid)) {
  	caliph.sendMessage(hem.jid, `Terima kasih Telah Menambahkan Bot Ke grup, ketik ${prefix}menu untuk menampilkan Menu!`, MessageType.text)
  	}
  	})
  	/*
  	caliph.on('group-add', async (chatt) => {
  	console.log(participants)
  	try {
  	for (let i of chatt.participants) {
  	pp = await caliph.getProfilePicture(i)
    buffer = await getBuffer(pp)
    caliph.sendMessage(chatt.m.key.remoteJid, buffer, MessageType.image, { caption: `${setting.welcome.replace('{user}', '@'+i.split('@')[0]).replace('{name}', getName(i)).replace('{chatname}', caliph.getName(chatt.m.key.remoteJid))}`})
    }
    } catch {
    for (let i of chatt.participants) {
    caliph.sendMessage(chatt.m.key.remoteJid, `${setting.welcome.replace('{user}', '@'+i.split('@')[0]).replace('{name}', getName(i)).replace('{chatname}', caliph.getName(chatt.m.key.remoteJid))}`, MessageType.text)
    }
    }
     })*/
                
    function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}
	caliph.on('group-participants-update', async (anu) => {
	console.log(anu)
		try {
					ppimg = await caliph.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/25bee11ec86f7956f6bdf.jpg'
				}
				const memJid = anu.participants[0]
				const pushnem = caliph.contacts[memJid] !== undefined ? caliph.contacts[memJid].notify : PhoneNumber('+' + memJid.replace('@s.whatsapp.net', '')).getNumber('international')
				const mems = anu.participants
				const pushname = await getName(memJid)
				const from = anu.jid
				const mdata = await caliph.groupMetadata(anu.jid)
				const iniGc = anu.jid.endsWith('@g.us')
				const jumlahMem = iniGc ? mdata.participants : ''
		try {
			if (!caliph.user.jid.includes(memJid) && anu.action == 'add' && welkom.includes(anu.jid)) {
			for (let i of mems) {
					const pic = ppimg
                const welcomer = await new canvas.Welcome()
                    .setUsername(await getName(i))
                    .setDiscriminator(mdata.participants.length)
                    .setMemberCount(mdata.participants.length)
                    .setGuildName(mdata.subject)
                    .setAvatar(pic)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb')
                    .toAttachment()
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                await caliph.sendMessage(anu.jid, Buffer.from(base64, 'base64'), MessageType.image, { caption: `Welcome ${await getName(i)}`})
                }
			} 
			if (!caliph.user.jid.includes(memJid) && anu.action == 'remove' && left.includes(anu.jid)) {
					for (let i of mems) {
					const bye = await new canvas.Goodbye()
                    .setUsername(await getName(i))
                    .setDiscriminator(mdata.participants.length)
                    .setMemberCount(mdata.participants.length)
                    .setGuildName(mdata.subject)
                    .setAvatar(ppimg)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb')
                    .toAttachment()
                const base64 = `${bye.toBuffer().toString('base64')}`
                await caliph.sendMessage(anu.jid, Buffer.from(base64, 'base64'), MessageType.image, { caption: `Goodbye ${await getName(i)}`})
			}
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	caliph.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	caliph.on('blocklist-update', async (chat) => {
    // ADD BLOCK
    for (i of chat.added){
        target = i.replace('@c.us', '@s.whatsapp.net')
        blocked.push(target)
        console.log(color("[ BLOCK ] ",'red')+target)
    }
    // REMOVE BLOCK
    for (i of chat.removed){
        target = i.replace('@c.us', '@s.whatsapp.net')
        blocked.splice(blocked.indexOf(target), 1)
        console.log(color("[ UNBLOCK ] ", 'green')+target)
    }
    })
  caliph.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('battery level: ' + batterylevel+'%')
	})
	caliph.on('CB:action,,call', async json => {
	console.log(json[2][0][1])
        const penelpon = json[2][0][1].from;
       console.log(color(`[WARN] ${penelpon} is calling!`,'red'))
       if (['6282136888623@s.whatsapp.net'].includes(penelpon)) return 
//caliph.sendMessage('6282387804410@s.whatsapp.net', `MENELPON BOT!  @${penelpon.split('@')[0]}`, MessageType.text, { contextInfo: { mentionedJid: [penelpon] } })
        caliph.sendMessage(penelpon.replace('c.us', 's.whatsapp.net'), `Maaf, saya tidak bisa menerima panggilan. telpon = block!.\nJika ingin membuka block harap chat Owner!`, MessageType.text)
        await delay(2000)
        caliph.blockUser(penelpon, "add")
});
/*
	caliph.on('group-participants-update', async (groups) => {
	 const meta = await caliph.groupMetadata(groups.jid)
	 if (groups.action == 'promote') {
			num = groups.participants[0]
			caliph.sendMessage(meta.id, '• *PROMOTE DETECT* •\n'+`@${num.split("@")[0]}\nTELAH DI TAMBAHKAN MENJADI ADMIN`, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
	} else if (groups.action == 'demote') {
			num = groups.participants[0]
			caliph.sendMessage(meta.id, '*• DEMOTE DETECT •*\n'+`@${num.split("@")[0]}\nTELAH DI HAPUS SEBAGAI ADMIN`, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
		}
		})*/
    caliph.on('message-delete', async (m) => {
    if (!revoke.includes(m.key.remoteJid)) return
    if (m.key.remoteJid == 'status@broadcast') return 
    caliph.sendMessage(m.key.remoteJid, `Terdeteksi, @${m.participant.split("@")[0]} Telah Menghapus Pesan`, MessageType.text, {quoted: m, contextInfo: {"mentionedJid": [m.participant]}})
      caliph.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
    console.log(m.message)
    })
    caliph.on('close', async () => {
  if (caliph.state == 'close') {
  caliph.logger.error('Reconnecting...')
    await caliph.loadAuthInfo('./session.data.json')
    await caliph.connect()
    global.timestamp.connect = new Date
  }
})

const toBase64 = (gambar) => new Promise(async (resolve, reject) => {
			imageToBase64(gambar)
					.then(
					(ress) => {
					resolve(ress)
			})
		})
   caliph.on('message-new', async (msg) => {
		try {
			if (!msg.message) return
            msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
			if (msg.key && msg.key.remoteJid == 'status@broadcast') return 
			m = simple.smsg(caliph, msg)
			if (m.isBaileys) return
			//if (!msg.key.fromMe) return 
			const content = JSON.stringify(msg.message)
			const from = msg.key.remoteJid
			const type = Object.keys(msg.message)[0]
    let locale = 'id'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const jam = moment.tz('Asia/Jakarta').format('HH')
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let hari = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
			let hari2 = `${hari} ${weton}, ${date}`
		//	body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
			budy = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
			body = budy
		//	const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const bodys = msg.message.conversation
			const command = budy.toLowerCase().split(' ')[0] || ''
            const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~`,*zxcv!?@#$%^&.\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|~`,*zxcv!?@#$%^&.\/\\©^]/gi) : '-'
            const isCmd = body.startsWith(prefix)
			const truth =[
        'menurut kamu crush kamu sekarang itu cocok gak sama kamu?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'telpon crush kamu, kalo ditanya bilang aja kepencet',
        'kalo kamu diputusin sama mantan,apa yang kamu lakuin?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'siapa yang sempet bikin lu kecewa?',
        'hal yang bikin kecewa?',
        'yang paling pendek menurut kamu tapi imut siapa?',
        'seberapa sayang kmu pada bumi?',
        'lagu yang akhir2 ini di denger?',
        'siapa nama artis yang pernah kamu bucinin diam-diam?',
        'tujuan yang lagi dipengen itu apa?',
        'punya berapa akun ig? sebutin smua',
        'kebiasaan terburuk lo pas di sekolah apa?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'apa ketakutan terbesar kamu?',
        'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
        'pernah nolak orang? alasannya kenapa?',
        'suka mabar(main bareng)sama siapa?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        '(bgi yg muslim) pernah ga solat seharian?',
        'hal yang paling ditakutin?',
        'pernah jadi selingkuhan orang?',
        'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
        'suka sayur gak?',
        'hal yang bikin seneng pas lu lagi sedih apa?',
        'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'siapa first love mu?',
        'apa ketakutan terbesar kamu?',
        'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
        'Pernah suka sama siapa aja? berapa lama?']
         
         
         
         
         const dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "��" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah� ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen�����"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
    const bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu encaliph. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrcaliph.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?<br><br>Kalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine msg 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]


  

const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }
        
        const getimage = (name) => {
            let position = false
            Object.keys(db_img).forEach((i) => {
                if (db_img[i].namafile === name) {
                    position = i
                }
            })
            if (position !== false) {
                return db_img[position].url
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }
        const minLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            _level.push({
            jid: userId, 
            xp: 1, 
            level: 1
            })
            fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, '\t'))
        }
        
    const apakah = ['Ya','Tidak']
    const bisakah = ['Bisa','Tidak Bisa']
    const kapankah = ['detik','menit','jam','hari','minggu','bulan','tahun','dekade','abad']
    const koin = ['http://bit.ly/Koin1','http://bit.ly/Koin5','https://i.ibb.co/q7kdBjm/be27e6f849da.jpg','https://i.ibb.co/BCxNPD5/a42ef753a321.jpg']
			const botNumber = caliph.user.jid
			const groupLimit = 15
			const groupall = caliph.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
			const totalchat = await caliph.chats.all()
			const ownerNumber = [botNumber, '6281215199447@s.whatsapp.net'] // replace this with your number
            const premium = [botNumber, '6281215199447@s.whatsapp.net','6285746657092@s.whatsapp.net','6285642337380@s.whatsapp.net','6289652338235@s.whatsapp.net','6289616428453@s.whatsapp.net','6282155515961@s.whatsapp.net']
			const isGroup = from.endsWith('@g.us')
			const sender = msg.key.fromMe ? caliph.user.jid : isGroup ? msg.participant : msg.key.remoteJid
			const groupMetadata = isGroup ? await caliph.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const SN = randomString({length: 24});
			const more = String.fromCharCode(8206)
			const GroupLinkDetector = antilink.includes(from)
			const antiVirtex = antivirtex.includes(from)
            const readMore = more.repeat(4001)
            const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*`
			const groupOwner = `${from.split('-')[0]}@s.whatsapp.net`
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isLeft = isGroup ? left.includes(from) : false
			const isNsfw = nsfw.includes(from)
			const isSimi = isGroup ? samih.includes(from) : false
            const isStiker = isGroup ? astik.includes(from) : false
            const isRevoke = revoke.includes(from)
				const groupDesc = isGroup ? groupMetadata.desc : ''
			const isPremium = premium.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isUser = true
			const isBanned = ban.includes(sender)
			const isGroupOwner = groupOwner.includes(sender)
			let query = args.join(' ')
			//const quotedText = msg.message.extendedTextMessage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation : null
          const statusme = caliph.getStatus(`${sender}`).status
const isLevelingOn = isGroup ? _leveling.includes(from) : false
	     var v = caliph.contacts[sender] || { notify: sender.replace(/@.+/, '') }
          const pushname = msg.key.fromMe ? caliph.user.name : v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
       const levelRole =  getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole <= 100) {
            role = 'Exterminator'
        }
        
              var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				}
			const addAfkUser = (userId, reason) => {
				const obj = { id: userId, time: time, reason: reason }
					_afk.push(obj)
					fs.writeFileSync('./database/json/afk.json', JSON.stringify(_afk))
				}
			const getAfkPosition = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
					}
						})
					return position
					}
			const checkAfkUser = (userId, _dir) => {
				let status = false
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					status = true
					}
				})
				return status
			}
			const getAfkReason = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
				return _dir[position].reason
				}
			}
			const getAfkTime = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].time
						}
					}
			const getAfkId = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].id
						}
					}
			const isAfkOn = checkAfkUser(sender, _afk)
			
			
			function isLimit(id){
                    if (isPremium) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                mentions('Limit Anda Sudah Mencapai Batas, Unlimited limit ? Chat owner', [sender], true)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./src/msgLimit.json',JSON.stringify(limit, null, '\t'));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isPremium) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./src/msgLimit.json',JSON.stringify(limit, null, '\t'));
                    }
                }
            function getLimit(jid) {
            var found = false
            limidat = JSON.parse(fs.readFileSync('./src/msgLimit.json'))
            for(let lmt of limidat){
                if(lmt.id === jid){
                    let limitCounts = limitCount-lmt.limit
                    if (limitCounts <= 0) return (`0`)
                    return (`${limitCount}`)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${jid}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./src/msgLimit.json',JSON.stringify(limit, 1, '\t'));
                return (`${limitCounts}`)
            }
        }
       
			 // caliph.updatePresence(from, Presence.available)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
		  const reply = (teks) => {
				caliph.sendMessage(from, teks, text, {quoted:msg})
			}
			const sendMess = (hehe, teks) => {
				caliph.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? caliph.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
			caliph.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
            const sendImage = (teks, rep, cap) => {
		    caliph.sendMessage(from, teks, image, {quoted:rep, caption:cap})
			}
			const repeat = (text, total) => {
			return text.repeat(total)
			}
			const freplytoko = (judul) => {
			{
			key:
			{ fromMe:false, 
			participant: `0@s.whatsapp.net`, 
			...(from ? { remoteJid: `status@broadcast` } : {}) }, 
			message: 
			{
					
			"productMessage": {
						
			"product": {
							
			"productImage": {
								
			"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",
								
			"mimetype": "image/jpeg",
								
			"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								
			"fileLength": "43344",
								
			"height": 1080,
								
			"width": 1080,
								
			"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",
							
         	"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								
         	"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								
         	"mediaKeyTimestamp": "1612168223",
								
         	"jpegThumbnail": "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"
         	},
							
         	"productId": "3872465552870232",
							
         	"title": "@caliph71",
							
         	"currencyCode": "USD",
							
         	"priceAmount1000": "99999",
							
         	"productImageCount": 1
						
         	},
						
         	"businessOwnerJid": "6281215199447@s.whatsapp.net"}}}
         	}
			const sendImgFromUrl = (teks, teks2) => {
				imageToBase64(teks)
					.then(
					(ress) => {
					var buf = Buffer.from(ress, 'base64')
					caliph.sendMessage(from, buf, image, { quoted: msg, caption: teks2 })
					})
			}
			mess = {
				  wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
				success: '✅ Berhasil ✅',
				error: {
					stick: '[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker!',
					Iv: '[❗] link yang kamu kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group!',
					ownerG: '[❗] Perintah ini hanya bisa di gunakan oleh owner group!',
					ownerB: '[❗] Perintah ini hanya bisa di gunakan oleh owner bot!',
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: '[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin!',
				premi: '[❗] PERINTAH INI KHUSUS USER *PREMIUM*',
				benned: '[❗] KAMU KEBAN:)',
				userB: `=「 VERIFY 」=\nHalo ${pushname} !\nKamu belum Terverifikasi sebagai user bot\n\nSilahkan Ketik\n${prefix}verify`
				}
			}
			
			if ( isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                amountXp = Math.floor(Math.random() * 100) + 1
                requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
                getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`Selamat ${pushname}! kamu naik ke level ${getLevelingLevel(sender)}`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (isGroup && GroupLinkDetector && !isGroupAdmins){
            if (budy.includes('chat.whatsapp.com')) {
            if (isOwner) return m.reply(`*「 GROUP LINK DETECTOR 」*\nKamu Owner Bot, Aku Tidak Akan kick kamu!`)
            risen = `*KICKED GROUP*\n\n\nSubject : ${groupMetadata.subject}\nAdmins : @${botNumber.split('@')[0]}\nReason : Sending a Invite Link`
                    await m.reply(`*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`).then(() => caliph.groupRemove(m.chat, [sender]))
                    caliph.sendMessage(sender, risen, text, { contextInfo: { mentionedJid: caliph.parseMention(risen) }})
              }
            }
            if (isGroup && antiVirtex && !isGroupAdmins) {
            if (budy.length > 5001) {
            await caliph.sendMessage(from, `*「 VIRTEX DETECTOR 」*\nMaaf Teks melebihi 5000 karakter, bot anggap virus!`, text, { quoted: msg}).then(() => caliph.groupRemove(m.chat, [sender]))
            }
        }
              if ('19:15:00' == time) {
              loaded.splice(time)
              fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
              sendMess(ownerNumber, 'Sukses reset Loaded Message')
              }
              
        
                  /*if (budy.includes(`Bot`)) {
                  reply(`Ada Apa Kak ${pushname}, ketik ${prefix}menu untuk menampilkan menu!`)
                  }*/
                  
                  /* if (!isCmd && !isGroup) {
                 reply(`Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup Caliph, Link Ada Di Bio atau Bisa Mengetik ${prefix}caliphgroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik *${prefix}iklan*`)
                  
                  }*/
                  if (isGroup) {
				if (checkAfkUser(sender, _afk) && isUser ) {
				_afk.splice(getAfkPosition(sender, _afk), 1)
				fs.writeFileSync('./database/json/afk.json', JSON.stringify(_afk))
				await reply(`*${pushname}* Sudah tidak afk, selamat datang kembali~`)
					}
				}
				try {
				mend = msg.message.extendedTextMessage.contextInfo.mentionedJid || false
				for (let ment of mend) {
				if (checkAfkUser(ment, _afk)) {
					const getId = getAfkId(ment, _afk)
					const getReason = getAfkReason(getId, _afk)
					const getTime = getAfkTime(getId, _afk)
					await reply(`*${getName(getId)}* Sedang Afk Sejak ${getTime} WIB\n\n*Alasan:* ${getReason}`)
				}
			}
				} catch(e) {
				
			}
			try {
                  if (budy.toLowerCase().includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
              loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
 } else if ('cekprefix' == budy.toLowerCase()) {
        costum(`*CALIPH BOT USING PREFIX [ MULTI PREFIX ]*`, text, sender, body)
                 loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
} else if (msg.message.extendedTextMessage.contextInfo.mentionedJid.includes('6281215199447@s.whatsapp.net')) {
tes = await caliph.sendMessage(from, 'lord @6281215199447', 'conversation', { contextInfo: { mentionedJid : ownerNumber }, quoted: msg })
reply( 'Ada yang cariin tuh', tes)
} else if (msg.message.extendedTextMessage.contextInfo.mentionedJid.includes(botNumber)) {
caliph.reply(from, 'Ada Apa kak?', msg)
}
} catch {}
async function perintah(teks){
                return eval(teks)
                }
			colors = ['red','white','blue','yellow','green']
			rainbow = colors[Math.floor(Math.random() * (colors.length))]
  	
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			try {
        require('./lib/print')(msg, caliph)
      } catch (e) {
        console.log(m, m.quoted, e)
      }

			if (isCmd) {
                  loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
 }

      //[AUTO READ] Auto read message 
 if (setting.read && isCmd) {
 caliph.chatRead(from)
}
       //FILTER BANNED
       if (isBanned && isCmd) {console.log(color('[BAN]', 'red'), color(moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))}
       
      /* if (budy.includes('gay')) {
       caliph.sendMessage(from, fs.readFileSync('./stik/gay.webp'), sticker, { quoted: msg })
       } else if (budy.includes('mastah')) {
       caliph.sendMessage(from, fs.readFileSync('./stik/mastah.webp'), sticker, { quoted: msg })
       }*/
      try {
					   buffer = fs.readFileSync(`./stik/${budy}.webp`)
				    caliph.sendMessage(from,buffer, sticker,{quoted: msg})
				} catch (e) {
					
					}
       /*if (!budy.startsWith(prefix) && m.isPrivate && !msg.key.fromMe && !budy.includes('cekprefix') && !budy.includes('assalamualaikum')) {
       reply(`Maap, gua kagak ngarti gan:(\nKetik ${prefix}help untuk melihat list command`)
       }*/
       if (isBanned) return
       if (isCmd && isFiltered(sender)) return 
		switch(command) {
				case prefix+'help':
				case prefix+'menu':
			   freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Caliph Bot_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await toBase64(await caliph.getProfilePicture(botNumber))} } }
			
				caliph.updatePresence(from, Presence.composing) 
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				    caliph.reply(from, `
╔══✪〘 INFO 〙✪══
║
┃ ❏ Runtime: ${kyun(process.uptime())}
┃ ❏ Prefix: 「 ${prefix} 」
┃ ❏ Api: 「 http://recoders-area.caliph.repl.co 」
║
║
╠══✪〘 LIST MENU 〙✪══
║
┣ ❏ *${prefix}ownermenu*
┣ ❏ *${prefix}groupmenu*
┣ ❏ *${prefix}nsfwmenu*
┣ ❏ *${prefix}funmenu*
┣ ❏ *${prefix}mediamenu*
┣ ❏ *${prefix}animemenu*
┣ ❏ *${prefix}kerangmenu*
┣ ❏ *${prefix}downloadmenu*
┣ ❏ *${prefix}othermenu*
║
╠══✪〘 OTHER 〙✪══
║
┣ ❏ *cekprefix*
┣ ❏ *${prefix}setprefix*
┣ ❏ *${prefix}verify*
┣ ❏ *${prefix}bugreport [teks]*
┣ ❏ *${prefix}banlist*
┣ ❏ *${prefix}blocklist*
┣ ❏ *${prefix}grouplist*
┣ ❏ *${prefix}info*
┣ ❏ *${prefix}snk*
┣ ❏ *${prefix}readme*
┣ ❏ *${prefix}donate*
┣ ❏ *${prefix}ping*
┣ ❏ *${prefix}speed*
┣ ❏ *${prefix}caliphgroup*
┣ ❏ *${prefix}owner*
┣ ❏ *${prefix}botstat*
║
╚═〘 CALIPH BOT 〙`, freplytoko)
addFilter(sender)
					break
          case prefix+'join':
              if (!isPremium) return reply('Hanya User Premium yang dapat invite bot ke grup')
              if (args.length == 0) return reply('Linknya mana su')
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              fak = await caliph.joinvialink(args[0].replace('https://chat.whatsapp.com/', ''))
              hemhe = await caliph.groupMetadata(fak.gid)
              reply('Berhasil Masuk Grup : '+hemhe.subject)
              break
                case prefix+'readme':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					reply(readme(prefix, pushname))
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'nulis4':
                reply(`mungkin Yang Anda Maksud ${prefix}nulis2`)
                addFilter(sender)
					break
                case prefix+'donasi':
				case prefix+'donate':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					caliph.sendMessage(from, donasi(pushname, time, date, readMore, hari2), text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
       case prefix+'styletext':
       try {
teks = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
} catch {
teks = args.join(' ') ? args.join(' ') : 'Caliph Bot'
}
reply(Object.entries(await stylizeText(teks)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`)
addFilter(sender)
					break
    case prefix+'autoread':
    if (!isOwner) return reply(mess.only.ownerB)
    switch(args[0]) {
    case 'on': case 'nyala': case 'enable':
    setting.read = true
	fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
    reply('sukses menyalakan autoread')
					break
    case 'off': case 'mati': case 'disable':
    setting.read = false
	fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
    reply('sukses mematikan autoread')
    }
					break
  case prefix+'antilink':
            if (!isGroup) return reply(`Perintah ini hanya bisa di gunakan dalam group!`)
            if (!isGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan oleh Admin group!`)
            if (!isBotGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`)
            if (args[0] == 'enable') {
                var cek = antilink.includes(from);
                if(cek){
                    return reply(`*「 ANTI GROUP LINK 」*\nStatus : Sudah Aktif`) //if number already exists on database
                } else {
                    antilink.push(from)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
                    reply(`*「 ANTI GROUP LINK 」*\nStatus : Aktif`)
                }
            } else if (args[0] == 'disable') {
                var cek = antilink.includes(from);
                if(!cek){
                    return reply(`*「 ANTI GROUP LINK 」*\nStatus : Sudah DiNonaktif`) //if number already exists on database
                } else {
                    nixx = from
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
                    reply(`*「 ANTI GROUP LINK 」*\nStatus : Nonaktif`)
                }
            } else {
                reply(`Pilih enable atau disable udin!`)
            }
            addFilter(sender)
					break    
            case prefix+'antivirtex':
            if (!isGroup) return reply(`Perintah ini hanya bisa di gunakan dalam group!`)
            if (!isGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan oleh Admin group!`)
            if (!isBotGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`)
            if (args[0] == 'enable') {
                var cek = antivirtex.includes(from);
                if(cek){
                    return reply(`*「 ANTI VIRTEX 」*\nStatus : Sudah Aktif`) //if number already exists on database
                } else {
                    antivirtex.push(from)
                    fs.writeFileSync('./src/antiV.json', JSON.stringify(antivirtex))
                    reply(`*「 ANTI VIRTEX 」*\nStatus : Aktif`)
                }
            } else if (args[0] == 'disable') {
                var cek = antivirtex.includes(from);
                if(!cek){
                    return reply(`*「 ANTI VIRTEX 」*\nStatus : Sudah DiNonaktif`) //if number already exists on database
                } else {
                    let nixx = from
                    antivirtex.splice(nixx, 1)
                    fs.writeFileSync('./src/antiV.json', JSON.stringify(antivirtex))
                    reply(`*「 ANTI VIRTEX 」*\nStatus : Nonaktif`)
                }
            } else {
                reply(`Pilih enable atau disable udin!`)
            }
            addFilter(sender)
					break    
                case prefix+'replyteks':
                try {
               quotedText = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                reply(quotedText)
                } catch {
                reply('reply teksnya um!')
                }
                addFilter(sender)
					break
                case prefix+'getcaption':
               try {
                 quotedCaption = msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                reply(quotedCaption)
                } catch {
                reply('reply gambarnya um!')
                }
                addFilter(sender)
					break
                case prefix+'fdeface':
                                var nn = args.join(' ')
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                                media = await caliph.downloadAndSaveMediaMessage(encmedia)
                                ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                                caliph.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                addFilter(sender)
					break
                case prefix+'ban':
					if (!isOwner)return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag Member yang ingin di ban!')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					ban.push(mentioned)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor ${mentioned} telah dibanned !`)
					
addFilter(sender)
					break
				case prefix+'unban':
            if (!isOwner) return reply(mess.only.ownerB)
             if (args.length < 1) return reply('Tag Member yang ingin di unban!')
                heh = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
                inz = ban.indexOf(heh)
                ban.splice(inz, 1)
                fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
                reply('Unbanned User!')
            addFilter(sender)
					break
                case prefix+'cekpremium': 
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply('kamu Belum Terdaftar sebagai User Premium')
                reply('kamu udah ke daftar sebagai user Premium')
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'bahasa':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
                reply(fs.readFileSync('./src/bahasa.js', 'utf-8'))
                limitAdd(sender)
addFilter(sender)
					break
               case prefix+'encoded64':
               if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
               reply( Buffer.from(args.join(' '), 'utf-8').toString('base64'), msg)
               addFilter(sender)
					break
               case prefix+'decode64':
               if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
               reply( Buffer.from(args.join(' '), 'base64').toString('utf-8'), msg)
               addFilter(sender)
					break
case prefix+'ttp2':
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 0) return reply('teksnya apa kak?')
				random = Math.floor(Math.random() * 2) 
			    warna = `Aesthetic_00${random}.jpg`
				spawn('convert', [
						'./bg.png',
						'-gravity',
						'Center',
						'-fill',
						'./src/Aesthetic/gambar/'+warna,
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'1280x1280',
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'-fill',
						'./src/Aesthetic/'+warna,
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'./tmp/ttp.png'
						])
					await delay(2000)
					exec('cwebp -q 50 ' + './tmp/ttp.png' + ' -o tmp/' + 'stikergradient' + '.webp', (error, stdout, stderr) =>
					{					let stik = fs.readFileSync('./tmp/' + 'stikergradient' + '.webp')
				    caliph.sendMessage(from, stik, sticker, { quoted: msg } )
					});
					await delay(3000)
					await fs.unlinkSync('./tmp/stikergradient.webp')
                await fs.unlinkSync('./tmp/ttp.png')
					addFilter(sender)
					break
               case prefix+'virtex':
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
              if (!isPremium) return reply(mess.only.premi)
               caliph.sendMessage(from, virtex(), text)
               limitAdd(sender)
addFilter(sender)
					break
               case prefix+'kodenegara':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
               costum(negara(prefix, sender), text, '0@s.whatsapp.net', cr)
               limitAdd(sender)
addFilter(sender)
					break
        case prefix+'textpro':
        if (isLimit(sender)) return 
        try {
        data = await textpro(args.join(' ').split('#')[0], args.join(' ').split('#')[1])
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
					} catch (err) {
					reply(`${err}`)
					}
        addFilter(sender)
					break
				case prefix+'info':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					
					me = caliph.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*Uptime* : ${kyun(uptime)}\n*Total User Premium* : ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Readall Message* : ${reading}\n*Verify User* : ${user.length}`
					try {
					pp = await caliph.getProfilePicture(botNumber)
					} catch {
				   pp = 'https://i.ibb.co/f8K14jz/327aae709c00.jpg'}
				   buffer = await getBuffer(pp)
					caliph.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'blocklist':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": blocked}})
					
addFilter(sender)
					break
                case prefix+'totaluser':
					 freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Caliph Bot_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await toBase64(await caliph.getProfilePicture(botNumber))} } }
			
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`Ini adalah user Caliph Bot :\n\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no}] ~> ${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total Pengguna : ${user.length}\`\`\``
					reply( teks, freply)
					
addFilter(sender)
					break
                case prefix+'asmaulhusna':
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                data = await fetchJson(`https://recoders-area.caliph.repl.co/api/muslim/asmaulhusna?apikey=FreeApi`)
                v = data.result.data
                random = v[Math.floor(Math.random() * 99)]
                reply(`${random.arabic}\n${random.latin}\n\n${random.translation_id}`)
                addFilter(sender)
                break
                case prefix+'banlist':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": ban}})
					
addFilter(sender)
					break
                	case prefix+'premiumlist':
					teks = 'This is list of user premium :\n'
					for (let V of premium) {
						teks += `~> @${V.split('@')[0]}\n`
					}
					teks += `Total : ${premium.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": premium}})
					
addFilter(sender)
					break
				case prefix+'ocr':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
							limitAdd(sender)
								costum(teks.trim(), text, '0@s.whatsapp.net', cr)
								//fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								//fs.unlinkSync(media)
								
							})
					} else {
						reply('Foto aja mas')
					}
					
addFilter(sender)
					break
			case prefix+'stiker':
				case prefix+'sticker':
				case prefix+'sgif':
				case prefix+'stickergif':
				case prefix+'stikergif':
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				try {
						encmedia = m.quoted ? m.quoted : m
						media = await encmedia.download()
						if (!media) return reply('Media Tidak Ditemukan')
						stiker = await stc.sticker(media, false, 'Caliph Bot', '@caliph71')
						caliph.sendMessage(from, stiker, sticker)
						} catch (e) {
						reply(`${e}`)
			            }
						addFilter(sender)
					break
             /*  case prefix+'swm':
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('webp')
						reply(mess.wait)
						require('./lib/exif.js').createExif('Caliph Bot', 'Sticker Maker')
						require('./lib/exif.js').modMedia(media, caliph, msg, from)
							limitAdd(sender)
						} else {
						}
						addFilter(sender)
					break*/
               case prefix+'stickwm':
               if (!isQuotedSticker) return reply('Stiker aja om')
               encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			  media = await caliph.downloadAndSaveMediaMessage(encmedia)
              reply(mess.wait)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : 'Caliph Bot'
              dua = typeof anu[1] !== 'undefined' ? anu[1] : 'Sticker Maker'
              require('./lib/exif.js').createExif(satu, dua)
			require('./lib/exif.js').modStick(media, caliph, msg, from)
				addFilter(sender)
					break
				case prefix+'tts':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return caliph.sendMessage(from, 'Kode bahasanya mana kak?', text, {quoted: msg})
				gtts = require('./lib/gtts.js')(args[0])
					if (args.length < 2) return caliph.sendMessage(from, 'Textnya mana kak', text, {quoted: msg})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Ngotak lah babi')
					: gtts.save(ranm, dtt, function() {
					caliph.updatePresence(from, Presence.recording) 
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							if (err) return reply('Err 404, unexpected syntax')
							buffer = fs.readFileSync(rano)
							if (err) return reply('Err 404, unexpected syntax')
							caliph.sendMessage(from, buffer, audio, {quoted: msg, ptt:true})
							fs.unlinkSync(rano)
							limitAdd(sender)
						})
					})
					addFilter(sender)
					break
             case prefix+'vibra':
					tels = args.join(' ')
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					caliph.updatePresence(from, Presence.recording) 
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${tels}" ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						caliph.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: msg, ptt:true})
						})
						addFilter(sender)
					break
				case prefix+'meme':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					meme = await kagApi.memes()
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					buffer = await getBuffer(`https://imgur.com/${meme.hash}${meme.ext}`)
					console.log(meme)
					if (meme.ext == '.mp4' || meme.ext == '.gif') return caliph.sendMessage(from, buffer, video, {mimetype: meme.mimetype, quoted: msg, caption: meme.titile})
					caliph.sendMessage(from, buffer, image, {mimetype: meme.mimetype, quoted: msg, caption: meme.titile})
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'memeindo':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					caliph.sendMessage(from, buffer, image, {quoted: msg, caption: '.......'})
					limitAdd(sender)
addFilter(sender)
					break
				 case prefix+'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
					addFilter(sender)
					break
                 case prefix+'setwelcome':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					wel = args.join(' ')
					setting.welcome = wel
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Sukses Setting Welcome\n\n- {user} : tag\n- {chatname} : nama grup\n- {name} : nama`)
					addFilter(sender)
					break
                   case prefix+'setbye':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					wel = args.join(' ')
					setting.left = wel
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Sukses Setting left\n\n- {user} : tag\n- {chatname} : nama grup\n- {name} : nama`)
					addFilter(sender)
					break
            case prefix+'setlimit':
            if(!isOwner) return reply(`Perintah ini hanya bisa di gunakan oleh Owner Caliph!`)
            limitCount = args[0]
            reply(`Limit Berhasil Di Ubah Menjadi *「* ${limitCount} *」*`)
            addFilter(sender)
					break
				case prefix+'loli':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					try { 
					reply(mess.wait)
					pine = await getBuffer(`https://recoders-area.caliph.repl.co/api/loli`)
					caliph.sendMessage(from, pine, image, { quoted: msg })
					} catch (e) {
					return reply(`${e}`)
					}
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'addpremium':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					
addFilter(sender)
					break
				case prefix+'nsfwloli':
					if (!isNsfw) return reply('❗ *FALSE* ❗')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❗ *ERROR* ❗')
						buffer = await getBuffer(res.url)
						caliph.sendMessage(from, buffer, image, {quoted: msg, caption: 'Jangan jadiin bahan buat comli om'})
					})
					
addFilter(sender)
					break
                case prefix+'virtextag':
                if (!isOwner) return reply('Khusus Owner kaks')
                ment = []
                for (let i = 0; i < 123456; i++) {
                ment.push('62812151994478@s.whatsapp.net')
                }
         
                caliph.sendMessage(from, args.join(' ') ? args.join(' ') : 'Gabut Men', text, {quoted : msg, contextInfo : { mentionedJid: ment }})
                addFilter(sender)
					break
 case prefix+'ytmp3':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
 url5 = args[0]
         if(ytdl.validateURL(url5)){
        server = (args[1] || 'id4').toLowerCase()
  var { dl_link, thumb, title, filesize, filesizeF} = await yta(url5, servers.includes(server) ? server : 'id4')
  await sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${await shortlink(dl_link)}`)
  limitAdd(sender)
  //if (!isPremium) return await reply('Maaf Audio Tidak Dapat Dikirim, Karena Anda Bukan User Premium')
  caliph.sendMessage(from, await getBuffer(dl_link), document, { mimetype: 'audio/mp3', filename: title+'.mp3', quoted: msg})
  //caliph.sendMessage(from, buffer, audio, { quoted: msg, filename: title+'.mp3', mimetype: 'audio/mp4' })
    }else{
      await reply("Error | Video tidak ditemukan...");
    }
         addFilter(sender)
					break
				case prefix+'ytsearch':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://recoders-area.caliph.repl.co/api/ytsearch?q=${encodeURIComponent(args.join(' '))}&apikey=FreeApi`, {method: 'get'})
					if (anu.error) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					teks = '--------------------------\n\n'
					for (let i of anu.yt) {
						teks += `*Title* : ${i.title}\n*links* : https://youtu.be/${i.videoId}\n*Type* : ${i.type}\n*Published* : ${i.ago}\n*Duration* : ${i.duration.timestamp}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
					}
					reply(teks.trim())
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'searchstik':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(12)}&apikey=${vkey}`, {method: 'get'})
					teks = '--------------------------\n'
					for (let i of anu.result.data) {
						teks += `*Url* : ${i}\n--------------------------\n`
					}
					reply(teks.trim())
					limitAdd(sender)
					
addFilter(sender)
					break
       case prefix+'searchstikers':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${args.join(' ')}&apikey=${vkey}`, {method: 'get'})
					teks = '--------------------------\n'
					no = 0
					for (let i of anu.result.data) {
					no += 1
						stik = await stc.sticker(false, i, args.join(' '), 'Caliph Bot\'s')
						caliph.sendMessage(from, stik, sticker, { quoted: m })
					}
					
addFilter(sender)
					break
              
				case prefix+'tiktok':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
buffer = await getBuffer(`https://recoders-area.caliph.repl.co/api/tiktod?url=${args[0]}&apikey=FreeApi`)
					caliph.sendMessage(from, buffer, video, {quoted:msg, mimetype:'video/mp4'})
					limitAdd(sender)
addFilter(sender)
					break
               case prefix+'tiktokwm':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args[0]}`)
					costum(buffer, video, '0@s.whatsapp.net', cr)
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'ss':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0])) return reply(mess.error.Iv)
					reply(mess.wait)
					linkimg = await shortlink(await uploadimg(await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100&full_page=true`), 'ssweb')) || ''
					 try {
       await sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100&full_page=true`, linkimg)
       } catch {
       await sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100`, linkimg)
       }
       limitAdd(sender)
				 addFilter(sender)
					break
                case prefix+'ssf':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/sswebf?url=${args[0]}&apikey=${zekskey}`, {method: 'get'})
					if (anu.message) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					buffer = await getBuffer(anu.result)
					caliph.sendMessage(from, buffer, document, {quoted: msg, mimetype: Mimetype.pdf, filename: `ss.pdf`})
					limitAdd(sender)
				 addFilter(sender)
					break
                 case prefix+'y2mate':
                 url = args[0]
                 if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: msg.message_id})
                  server = (args[1] || 'id4').toLowerCase()
                  var { dl_link, thumb, title, filesize, filesizeF} = await yta(url, servers.includes(server) ? server : 'id4')
                  sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${dl_link}`)
                  buffer = await getBuffer(dl_link)
                  caliph.sendMessage(from, buffer, document, { mimetype: 'audio/mp3', quoted: msg, filename: title })
                  addFilter(sender)
					break
             case prefix+'attp':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				    data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(args.join(' '))}`)
				    caliph.sendMessage(from, data, sticker, { quoted: msg})
					
addFilter(sender)
					break
            case prefix+'sliding':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
                    hasil = `https://api.vhtear.com/slidingtext?text=${body.slice(9)}&apikey=${vkey}`
                    data = await getBuffer(hasil)
                    caliph.sendMessage(from, data, video, {mimetype: 'video/gif', quoted: msg, caption: 'Sliding: '+body.slice(9)})
					limitAdd(sender)
addFilter(sender)
					break
            case prefix+'slink':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					hem = await stc.sticker(false, args.join(' '), '', '')
					
addFilter(sender)
					break
            case prefix+'animecry':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey'+tobzkey, {method: 'get'})
					if (anu.error) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', cr)
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
addFilter(sender)
					break
            case prefix+'animehug':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey'+tobzkey, {method: 'get'})
					if (anu.error) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', cr)
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
addFilter(sender)
					break
              case prefix+'koin':
               if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = koin[Math.floor(Math.random() * (koin.length))]
	      stc.sticker(false, random, 'Random Koin', 'Caliph Bot').then(v => caliph.sendMessage(from, v, sticker, { quoted: msg}))
		limitAdd(sender)
					
addFilter(sender)
					break
			case prefix+'tagall':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('�══�� Mention All ��══\n��'+teks+'�═� CALIPH BOT �', members_id, true)
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'tagall2':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `�� ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					caliph.sendMessage(from, '�══�� Mention All ��══\n��'+teks+'�═� CALIPH BOT �', text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'tagall3':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `�� https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					caliph.sendMessage(from, '�══�� Mention All ��══\n��'+teks+'�═� CALIPH BOT �', text, {detectLinks: false, quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
                        case prefix+'tagall4':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `�� ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					caliph.sendMessage(from, '�══�� Mention All ��══\n��'+teks+'�═� CALIPH BOT �', text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'tagall5':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `�� ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('�══�� Mention All ��══\n��'+teks+'�═� CALIPH BOT �')
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await caliph.chats.all()
					caliph.setMaxListeners(300)
					for (let _ of anu) {
						caliph.deleteChat(_.jid)
					}
					reply('Sukses delete all chat ')
					
addFilter(sender)
					break
               
				case prefix+'bc':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await caliph.chats.all()
					broadcast = args.join(' ')
					if (isMedia && !msg.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buff = await caliph.downloadMediaMessage(encmedia)
						for (let _ of anu) {
						    await require('delay')(3000)
							await caliph.sendMessage(_.jid, buff, image, {caption: `*「 INFO 」*\n\n${broadcast}`, contextInfo: { mentionedJid: user }})
						}
					} else {
						for (let _ of anu) {
						await require('delay')(3000)
							await caliph.sendMessage(_.jid, `*「 INFO 」*\n\n${broadcast}`, text, { contextInfo: { mentionedJid: user }})
						}
						reply('Suksess broadcast')
					}
					
addFilter(sender)
					break
      case prefix+'inu':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
      if (!isUser) return reply(mess.only.userB)
      if (isBanned) return reply(mess.only.benned) 
      data = await fetchJson('https://random.dog/woof.json')
      link = data.url
      buffer = await getBuffer(link)
      if (link.endsWith('.gif') || link.endsWith('.mp4')) return caliph.sendMessage(from, buffer, video, { mimetype: 'video/gif', quoted: msg })
      sendImgFromUrl(link, '')
      limitAdd(sender)
      addFilter(sender)
					break 
      case prefix+'neko':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
      if (!isUser) return reply(mess.only.userB)
      if (isBanned) return reply(mess.only.benned) 
      data = await fetchJson('https://api.thecatapi.com/v1/images/search')
      link = data[0].url
      buffer = await getBuffer(link)
      if (link.endsWith('.gif')) return caliph.sendMessage(from, buffer, video, { mimetype: 'video/gif', quoted: msg })
     if (link.endsWith('.mp4')) return caliph.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: msg })
      sendImgFromUrl(link, '')
      limitAdd(sender)
      addFilter(sender)
					break 
     case prefix+'buatsw':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					if (m.quoted.mtype == 'imageMessage') {
							caliph.sendMessage('status@broadcast', await m.quoted.download(), image, {caption: `${args.join(' ')}`})
					} else if (m.quoted.mtype == 'videoMessage') {
						caliph.sendMessage('status@broadcast', await m.quoted.download(), video, {caption: `${args.join(' ')}`})
					} else {
					sendMess('status@broadcast', args.join(' '))
					}
					
addFilter(sender)
					break
					case prefix+'bcmem':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = msg.participant
					if (isMedia && !msg.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buff = await caliph.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							await caliph.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(7)}`})
						}
					} else {
						for (let _ of anu) {
							await sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(7)}`)
						}
						reply('Sukses broadcast group')
					}
					
addFilter(sender)
					break
     case prefix+'kickall':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               caliph.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
          //    if (!isOwner) return reply(mess.only.ownerB)
                if (!isGroupOwner) return reply(mess.only.ownerG)
                members_id = groupMembers.map(v => v.jid)
               mentioned = members_id
                     using = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    for (let member of using) {
                    if (member.endsWith('@s.whatsapp.net')) 
                    await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
              await sendMess(from, 'sukses kick all member')
              limitAdd(sender)
               addFilter(sender)
					break
        case prefix+'okickall':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               caliph.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
          //    if (!isOwner) return reply(mess.only.ownerB)
                if (!isOwner) return reply(mess.only.ownerB)
                members_id = groupMembers.map(v => v.jid)
               mentioned = members_id
                     using = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    for (let member of using) {
                    if (member.endsWith('@s.whatsapp.net')) 
                    await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
              await sendMess(from, 'sukses kick all member')
              limitAdd(sender)
               addFilter(sender)
					break
     case prefix+'bcgc':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					groups = caliph.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
					nom = msg.participant
					if (isMedia && !msg.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buff = await caliph.downloadMediaMessage(encmedia)
						for (let _ of groups) {
							await caliph.sendMessage(_, buff, image, {caption: `*「 INFO 」*\n\n${args.join(' ')}`})
						}
					} else {
						for (let _ of groups) {
							await caliph.sendMessage(_, `*「 INFO 」*\n\n${args.join(' ')}`, text, {})
						}
						reply(`Sukses broadcast ${groups.length} group`)
					}
					
addFilter(sender)
					break
          case prefix+'bug':
if (!isOwner) return
for (let i = 0; i < args[0]; i++) {
await caliph.toggleDisappearingMessages(from, 0)
}
reply('Sukses Hack Group Sebanyak : '+args.join(' '))
addFilter(sender)
					break
				case prefix+'kick':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) mentioned = [msg.message.extendedTextMessage.contextInfo.participant]
					if (mentioned[0] === botNumber) return await reply( 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', msg)
                    let users = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    if (groupAdmins.includes(mentioned[0])) return await reply( 'Gagal, kamu tidak bisa mengeluarkan admin grup.')
                    for (let member of users) {
                    if (member.endsWith('@s.whatsapp.net')) 
                     await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
					addFilter(sender)
					break
       case prefix+'revoke':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					await caliph.resetInvite(from)
					break
               case prefix+'qkick':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					risen = `*KICKED GROUP*\n\n\nSubject : ${groupMetadata.subject}\nAdmins : ${sender.split('@')[0]}\nReason : ${args.join(' ') || ''}`
					quoteds = msg.message.extendedTextMessage.contextInfo.participant
					 await caliph.groupRemove(from, [quoteds]).then(() => caliph.sendMessage(quoteds, risen, text, { contextInfo: { mentionedJid: caliph.parseMention(risen) }}))
					addFilter(sender)
					break
               case prefix+'kickme':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					quoteds = sender
                    if (groupAdmins.includes(sender)) return await reply( 'Kamu Admin Grup, Saya Tidak Akan kick anda...', msg)
					await reply('Tidak Masalah, aku akan kick kamu!')
					await delay(2000)
					await caliph.groupRemove(from, [quoteds])
					addFilter(sender)
					break
				case prefix+'listadmins':
				case prefix+'adminlist':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					limitAdd(sender)
addFilter(sender)
					break
               case 'report':
               if (!isGroup) return reply(mess.only.group)
                caliph.sendMessage(from, 'Reported To Admins Group', text, { contextInfo: { mentionedJid: groupAdmins }})
                break
            case prefix+'onlinelist':
				case prefix+'listonline':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					online = Object.keys(caliph.chats.get(from).presences)
					teks = `List online of group *${groupMetadata.subject}*\nTotal : ${online.length}\n\n`
					no = 0
					for (let O of online) {
						no += 1
						teks += `[${no.toString()}] @${O.split('@')[0]}\n`
					}
					mentions(teks, online, true)
					limitAdd(sender)
addFilter(sender)
					break
              case prefix+'grouplist':
              case prefix+'groups':
              case prefix+'gruplist':
              case prefix+'listgroup':
              case prefix+'listgrup':
               if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              var txt = caliph.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} \n*Status: ${v.read_only ? 'Keluar' : 'Bergabung'}* \n*Spam:${v.spam_only ? 'True' : 'False'}*\n*mute:${v.mute_only ? 'True' : 'False'}*\n*Message:${v.count}*`).join`\n\n`
              reply('List Groups:\n' + txt)
              limitAdd(sender)
addFilter(sender)
					break
				case prefix+'toimg':
				      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isQuotedSticker) return reply('� reply stickernya um �')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						//fs.unlinkSync(media)
						if (err) return reply('� Gagal, pada saat mengkonversi sticker ke gambar �')
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, image, {quoted: msg, caption: '>//<'})
						//fs.unlinkSync(ran)
						limitAdd(sender)
					})
					
addFilter(sender)
					break
                	case prefix+'tomp3':
                	 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if ((isMedia && msg.message.videoMessage || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) && args.length == 0) {
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
			      media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						buffer = fs.readFileSync(ran)
					    caliph.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: msg})
						fs.unlinkSync(ran)
						limitAdd(sender)
					})
					} else {
					reply(`Kirim video dengan caption ${prefix}tomp3 atau tag video yang sidah dikirim`)
					}
					addFilter(sender)
					break
				case prefix+'simi':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply(`Sukses mengaktifkan mode simi\n*Contoh* : �${prefix} hai simi`)
					} else if (args[0] == 'disable') {
					heh = from
                inz = ban.indexOf(heh)
						samih.splice(inz, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi�')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
addFilter(sender)
					break
                  case prefix+'astick':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isStiker) return reply('Mode autosticker sudah aktif')
						astik.push(from)
						fs.writeFileSync('./src/autos.json', JSON.stringify(astik))
						reply(`Sukses mengaktifkan mode auto sticker`)
					} else if (args[0] == 'disable') {
					heh = from
                inz = ban.indexOf(heh)
						astik.splice(inz, 1)
						fs.writeFileSync('./src/autos.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode autosticker')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
addFilter(sender)
					break
                    case prefix+'kali':
                const q = query
                var kalian = body.slice(6)
                var kali1 = kalian.split("×")[0];
                var kali2 = kalian.split("×")[1];
                perkalian = bdr.rdb.perkalian(kali1, kali2)
                reply(perkalian)
            addFilter(sender)
					break
           case prefix+'kodepos': // Update By RzkyO & ItsmecaliphXSec404	
				caliph.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://recoders-area.caliph.repl.co/api/kodepos?kota=${args.join(' ')}&apikey=FreeApi`)
				teks = '=================\n'
				if (!asu.result.success) return reply(asu.data)
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				addFilter(sender)
					break
                    case prefix+'nsfw':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply(`Sukses mengaktifkan Mode nsfw`)
					} else if (args[0] == 'disable') {
					heh = from
                inz = ban.indexOf(heh)
						nsfw.splice(inz, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
addFilter(sender)
					break
                    case prefix+'verify':
					
					if (isBanned) return reply(mess.only.benned)
					if (isUser) return reply('kamu sudah terverifikasi')
		            if (!sender.startsWith('62')) return caliph.reply(from, 'Sorry Friends, This Bot Only Work Indonesian Number'.trim(), msg)
						user.push(sender)
						var times = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss')
						try {
						pp = await caliph.getProfilePicture(sender)
						} catch { 
						pp = 'https://tinyurl.com/yj2zbwmc'
                        }
						fs.writeFileSync('./src/user.json', JSON.stringify(user, null, '\t'))
						caliph.sendMessage(from, await getBuffer(pp), image, {caption : `
╭─「 *VERIFY-SUCCES* 」
│
├ NAMA : ${pushname}
├ NOMOR : [@${sender.split('@')[0]}]
├ API : wa.me/${sender.split('@')[0]}
├ WAKTU : ${times}
│
├ Sebelum mulai silahkan kirim ${prefix}help
│ Total User yang telah terdaftar ${user.length}
│ 
│
╰─「 *Caliph-BOT* 」`, quoted: msg, contextInfo: {"mentionedJid": [sender]}})
					addFilter(sender)
					break
                 case prefix+'verify2':
                if (isBanned) return reply(mess.only.benned)
					if (!isOwner) return reply('only owner')
		          senders = msg.message.extendedTextMessage.contextInfo.participant
						user.push(senders)
						var times = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss')
						try {
						pp = await caliph.getProfilePicture(senders)
						} catch { 
						pp = 'https://tinyurl.com/yj2zbwmc'
                        }
						fs.writeFileSync('./src/user.json', JSON.stringify(user, null, '\t'))
						caliph.sendMessage(from, await getBuffer(pp), image, {caption : `
╭─「 *VERIFY-SUCCES* 」
│
├ NAMA : ${getName(senders)}
├ NOMOR : [@${senders.split('@')[0]}]
├ API : wa.me/${senders.split('@')[0]}
├ WAKTU : ${times}
│
├ Sebelum mulai silahkan kirim #help
│ Total User yang telah terdaftar ${user.length}
│
╰─「 *Caliph-BOT* 」`, quoted: msg, contextInfo: {"mentionedJid": [senders]}})
					addFilter(sender)
					break
                    case prefix+'addsay':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						costum(`Sukses, kata ${hai} Telah Ditambahkan ke database`, text, '0@s.whatsapp.net', cr)
						limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'saylist':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `�� ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": sayrandom}})
					limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'resetsay':
					
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						
addFilter(sender)
					break
                    case prefix+'say':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    limitAdd(sender)
addFilter(sender)
					break
					case prefix+'osimih':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (args[0]== 'enable') {
						if (isSimi) return reply('pilih enable atau disable udin!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply(`Sukses mengaktifkan mode simi\n*Contoh* : �${prefix} hai simi`)
					} else if (args[0] == 'disable') {
					heh = from
                inz = samih.indexOf(heh)
						samih.splice(inz, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi�')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
addFilter(sender)
					break
				case prefix+'clone':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.onlyownerB)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await caliph.getProfilePicture(id)
						buffer = await getBuffer(pp)
						caliph.updateProfilePicture('0@s.whatsapp.net', buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						costum('Gagal Kak!' , text, '0@s.whatsapp.net', cr)
					}
					
addFilter(sender)
					break
                case prefix+'yourpic':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return 
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await caliph.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						sendImage(buffer, msg, 'Nih mank')
						limitAdd(sender)
					} catch (e) {
						costum('Gagal Kak!', text, '0@s.whatsapp.net', cr)
					}
					
addFilter(sender)
					break
				case prefix+'welcome':
					   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ��')
					} else if (args[0] == 'disable') {
					heh = from
                inz = welkom.indexOf(heh)
						welkom.splice(inz, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ��')
					} else {
						reply('pilih enable atau disable udin!!')
					}
		           
addFilter(sender)
					break
case prefix+'antidelete':
					   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isRevoke) return reply('Udah aktif um')
						revoke.push(from)
						fs.writeFileSync('./src/antirevoke.json', JSON.stringify(revoke))
						reply('Sukses mengaktifkan fitur Antidelete di group ini ‼️')
					} else if (args[0] == 'disable') {
					heh = from
                inz = revoke.indexOf(heh)
						revoke.splice(inz, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(revoke))
						reply('Sukses menonaktifkan fitur Antidelete di group ini ‼️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
		           
addFilter(sender)
					break
case prefix+'left':
					   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isLeft) return reply('Udah aktif um')
						left.push(from)
						fs.writeFileSync('./src/left.json', JSON.stringify(left))
						reply('Sukses mengaktifkan fitur welcome di group ini ��')
					} else if (args[0] == 'disable') {
					heh = from
                inz = left.indexOf(heh)
						left.splice(inz, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(left))
						reply('Sukses menonaktifkan fitur welcome di group ini ��')
					} else {
						reply('pilih enable atau disable udin!!')
					}
		           
addFilter(sender)
					break
				case prefix+'wait':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						media = await caliph.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							caliph.sendMessage(from, res.video, video, {quoted: msg, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						hasil = await getBuffer('https://i.ibb.co/tK9RptS/ddb643abe915.jpg')
						caliph.sendMessage(from, hasil, image, {quoted: msg, caption: 'Ni Contoh'})
					}
					limitAdd(sender)
					
addFilter(sender)
					break
				case prefix+'exec':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	              if (!isOwner) return reply(mess.only.ownerB)
	               exec(args.join(' '), (err, stdout) => {
		           if (err) return caliph.sendMessage(from, `${err}`, text, { quoted: msg })
		           if (stdout) {
			       caliph.sendMessage(from, stdout, text, { quoted: msg })
		           }
	           })
                  
addFilter(sender)
					break

      case prefix+'battery':
	  case prefix+'batere':
	  case prefix+'baterai':
	   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
	               cmds = 'termux-battery-status'
	               exec(cmds, (err, stdout) => {
		           if(err) return caliph.sendMessage(from, 'Error!', text, { quoted: msg })
		           if (stdout) {
			       caliph.sendMessage(from, stdout, text, { quoted: msg })
		           limitAdd(sender)
		           }
	           })
                  
addFilter(sender)
					break
                 case prefix+'linkgroup':
				case prefix+'linkgrup':
				case prefix+'linkgc':
				      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				     if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					mygroup = 'https://chat.whatsapp.com/'+await caliph.groupInviteCode(from)
					caliph.sendMessage(from, `${mygroup}\n\nLink Group *${groupMetadata.subject}*`, text, {quoted: msg, detectLinks: false})
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'qrcode':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 QRCode = require('qrcode')
   QRCode.toDataURL(args.join(' '), async function (err, url) {
        file = url
        fileOpts = {
        filename: 'qrcode.jpg',
        mimetype: 'image/jpg',
        }
        await caliph.sendMessage(from, Buffer.from(file.substr(22), 'base64'), image, {fileOpts})
       })
				limitAdd(sender)
addFilter(sender)
					break
				case prefix+'owner':
				case prefix+'creator':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				niowner = await caliph.sendMessage(from, {displayName: "Caliph", vcard: vcard}, contact, { quoted: msg })
                console.log(niowner)
                
addFilter(sender)
					break
					case `botstat`:
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				 personal = caliph.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net') && !v.read_only && v.message).map(v => v.jid)
            groups = caliph.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				
				timestamp = speed()
                latensi = speed() - timestamp
                const pingnya = `Speed: ${latensi.toFixed(4)} Second`
                caliph.sendMessage(from, `Status :\n- *${loaded.length}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${personal.length}* Personal Chats\n- *${totalchat.length}* Total Chats\n- ${baterai}% Battery level\n*Speed :* ${processTime(chat.t, moment())} _second_\nPenggunaan Ram : ${ram}`, text, {quoted: msg})
					addFilter(sender)
					break
addFilter(sender)
					break
				case prefix+'quote':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
				costum(`${randKey.quote} - ${randKey.by}`, text, '0@s.whatsapp.net', cr)
				limitAdd(sender)
addFilter(sender)
					break
              case prefix+'saveimg':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
		 // reply( '```Downloading....```', msg)
             var encmedia  = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            try {
           // reply( '```Uploading....```', msg)
          linkimg = await uploadimg(fs.readFileSync(media), `${sender}_img`)
          namafile = args.join(' ')
          db_img.push({namafile : namafile, url : linkimg})
          fs.writeFileSync('./src/db_img.json', JSON.stringify(db_img, null, '\t'))
          reply('Success Save image to database')
          limitAdd(sender)
          fs.unlinkSync(media)
          } catch (e) {
          reply( `${e}`, msg)
          }
          addFilter(sender)
					break
         case prefix+'getimg':
         data = await getimage(args.join(' ')) || 'A Server Error Occurred'
         reply( data, msg)
         addFilter(sender)
					break
        case prefix+'listimg':
         reply( JSON.stringify(db_img, null, '\t'), msg)
         addFilter(sender)
					break
        case prefix+'quotes':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        try {
        data = await fetchJson('https://recoders-area.caliph.repl.co/api/randomquote?apikey=FreeApi')
        reply(`_*${data.quote.author}*_\n\n\n_*${data.quote.quotes}_*`)
        limitAdd(sender)
        } catch {
        reply('Error!')}
        addFilter(sender)
					break
				case prefix+'3dtext':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                caliph.sendMessage(from, data, image, {quoted: msg, caption: '3dtext: '+body.slice(8)})
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'fml':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                limitAdd(sender)
addFilter(sender)
					break
				case prefix+'trendtwit':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'dare':
			  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
		     hisil = await fs.readFileSync('./gambar/tod.jpeg')
		    hasil = dare[Math.floor(Math.random() * (dare.length))]
              caliph.sendMessage(from, hisil, image, {quoted: msg, caption: '*DARE*\n\n'+hasil})
                limitAdd(sender)
addFilter(sender)
					break
    case prefix+'resep':
    case prefix+'resepmasakan':
            if (args.length == 0) return reply( `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, msg)
            cariresep = args.join(' ')
            hasilresep = await resep.resep(cariresep)
            await reply( hasilresep + '\n\nIni kak resep makanannya..', msg)
            .catch(() => {
                reply( 'Ada yang Error!', msg)
            })
            addFilter(sender)
					break
              				case prefix+'bucin':
			  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
		    hasil = bucin[Math.floor(Math.random() * (bucin.length))]
              costum(hasil, text, '0@s.whatsapp.net', cr)
                limitAdd(sender)
addFilter(sender)
					break
               case prefix+'truth':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               hisil = await fs.readFileSync('./gambar/tod.jpeg')
               hasil = truth[Math.floor(Math.random() * (truth.length))]
			   caliph.sendMessage(from, hisil, image, {quoted: msg, caption: '*TRUTH*\n\n'+hasil})
			   limitAdd(sender)
addFilter(sender)
					break
               case prefix+'apakah':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
addFilter(sender)
					break
              case prefix+'bisakah':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
addFilter(sender)
					break
               case prefix+'rate':
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 random = Math.floor(Math.random() * 100) + 1
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}%*`
              reply(hasil)
                limitAdd(sender)
addFilter(sender)
					break
              case prefix+'dadu':
               if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = Math.floor(Math.random() * 5) + 1
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					stc.sticker(false, hasil, 'Random Dadu', 'Caliph Bot').then(v => caliph.sendMessage(from, v, sticker, { quoted: msg}))
				limitAdd(sender)
					
addFilter(sender)
					break
               case prefix+'kapankah':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  	
               random2 = Math.floor(Math.random() * 10) + 1
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random2} ${random}* *lagi*`
              reply(hasil)
addFilter(sender)
					break
			case prefix+'closegc':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = msg.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					caliph.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					
addFilter(sender)
					break
                case prefix+'opengc':
                case prefix+'bukagc':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
					contextInfo: { mentionedJid: [sender] }
					}
					caliph.groupSettingChange (from, GroupSettingChange.messageSend, false)
					caliph.sendMessage(from, open, text, {quoted: msg})
					
addFilter(sender)
					break
                case prefix+'group':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('pilih open atau close udin!!')
					if (args[0] == 'open' || args[0] == 'buka') {
				    caliph.groupSettingChange (from, GroupSettingChange.messageSend, false)
					} else if (args[0] == 'close' || args[0] == 'tutup') {
					caliph.groupSettingChange (from, GroupSettingChange.messageSend, true);
					} else {
						reply('pilih open atau close udin!!')
					}
					
addFilter(sender)
					break
				  case prefix+'wa.me':
				  case prefix+'wame':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
      if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    caliph.sendMessage(from, options, text, { quoted: msg } )
				
addFilter(sender)
					break
					
					case prefix+'neonime':
               
					  if (isLimit(sender)) return 
					  limitAdd(sender)
               
					  await caliph.reply(from, mess.wait, msg)
               
					  neonime()
                  
					  .then(async ({ status, result }) => {
                       
					  if (status !== 200) return await caliph.reply(from, 'Not found.', msg)
                        
					 let neoInfo = '*── 「 NEONIME LATEST 」 ──*'
                       
					  for (let i = 0; i < result.length; i++) {
                            
					  const { date, title, link, desc } = result[i]
                           
					   neoInfo += `\n\n➸ *Title*: ${title}\n➸ *Date*: ${date}\n➸ *Synopsis*: ${desc}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                   
				    }
                     
				      await caliph.reply(from, neoInfo, id)
                        
				      console.log('Success sending Neonime latest update!')
                    
				      })
                   
				      .catch(async (err) => {
                       
				      console.error(err)
                     
				      await caliph.reply(from, 'Error!', id)
                 
				      })
           
				       break
					
                case prefix+'jadwaltv':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson(`https://mhankbarbar.moe/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
				if (data.error) return reply(data.error)
				reply(data.result)
				limitAdd(sender)
addFilter(sender)
					break
                case prefix+'cuaca':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${body.slice(7)}&apikey=${apikey}`)
                if (data.respon.cuaca == null) return reply('Maaf daerah kamu tidak tersedia')
                if (data.error) return reply(data.error)
                hasil = `╠➥  Tempat : ${data.respon.tempat}\n╠➥  angin : ${data.respon.angin}\n╠➥  cuaca : ${data.respon.cuaca}\n╠➥  desk : ${data.respon.deskripsi}\n╠➥  kelembapan : ${data.respon.kelembapan}\n╠➥  suhu : ${data.respon.suhu}\n╠➥  udara : ${data.respon.udara}`
                reply(hasil)
                limitAdd(sender)
addFilter(sender)
					break
     case prefix+'readall':
					if (!isOwner) return reply(mess.only.ownerB)
					var chats = await caliph.chats.all()
                    chats.map( async ({ jid }) => {
                          await caliph.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					await caliph.sendMessage(from, teks, MessageType.text, {quoted: msg})
					console.log(chats.length)
					addFilter(sender)
					break
					case prefix+'hidetag':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               caliph.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                ppgc = await caliph.getProfilePicture(from)
                teks = args.join(' ')
                group = await caliph.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                contextInfo: {mentionedJid: groupMembers.map(v => v.jid)},
                quoted: msg,
               sendEphemeral: true, 
               thumbnail: await toBase64(ppgc)
                }
              await caliph.sendMessage(from, teks, text, options)
              limitAdd(sender)
               addFilter(sender)
					break
          case prefix+'gctag':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isOwner) return 
                meng = args.join(' ').split('|')
                group = await caliph.groupMetadata(meng[0]);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: meng[1],
                contextInfo: {mentionedJid: jids},
                quoted: msg
                }
              await caliph.sendMessage(meng[0], options, text, { contextInfo: { forwardingScore: 99999, isForwarded: true }})
              limitAdd(sender)
               addFilter(sender)
					break
          case prefix+'ohidetag':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               caliph.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner) return reply(mess.only.admin)
                teks = args.join(' ')
                group = await caliph.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: msg
                }
              await caliph.sendMessage(from, options, text)
              limitAdd(sender)
               addFilter(sender)
					break
				case prefix+'runtime':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				
addFilter(sender)
					break
 case prefix+'kodenuklir':
             nekopoi.getLatest()
            .then((result) => {
                nekopoi.getVideo(result.link)
                .then((res) => {
                    let heheq = '\n'
                    for (let i = 0; i < res.links.length; i++) {
                        heheq += `${res.links[i]}\n`
                    }
                    reply( `Title: ${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`, msg)
                })
            })
            .catch(() => {
                reply( 'Ada yang Error!', msg)
            })
            addFilter(sender)
					break
				case prefix+'tinyurl':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
			if (!isUrl(args[0])) return reply(mess.error.Iv)
			  reply('Creating short url...')
             data = await fetchText(`https://tinyurl.com/api-create.php?url=${args[0]}`)
				hasil = `${data}`
				caliph.sendMessage(from, hasil, text, {quoted: msg, detectLinks: true})
				limitAdd(sender)
addFilter(sender)
					break
                 case prefix+'joox':
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                caliph.sendMessage(from, buffer, image, {quoted: msg, caption: infomp3})
                caliph.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: msg})
                limitAdd(sender)
addFilter(sender)
					break
               case prefix+'fb':
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               if (!isPremium) return reply(mess.only.premi)
               data = await fetchJson(`https://mhankbarbar.moe/api/epbe?url=${body.slice(4)}&apiKey=${apiKey}`)
               if (data.error) return reply(data.error)
               buffer = await getBuffer(data.result)
               caliph.sendMessage(from, buffer, video, {quoted: msg, caption: `judul : ${data.title}\nsize : ${data.filesize}\ndiupload : ${data.published}`})
               limitAdd(sender)
addFilter(sender)
					break
               case prefix+'kbbi':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}kbbi asu`)
              data = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${args.join(' ')}&apikey=${zekskey}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              limitAdd(sender)
addFilter(sender)
					break
              case prefix+'wiki':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}wiki anjing`)
              data = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${args.join(' ')}&apikey=${zekskey}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result.result}`
              reply(hasil)
              limitAdd(sender)
addFilter(sender)
					break
            		case prefix+'ytmp4':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
				url5 = args[0]
         if(ytdl.validateURL(url5)){
        server = (args[1] || 'id4').toLowerCase()
  var { dl_link, thumb, title, filesize, filesizeF} = await ytv(url5, servers.includes(server) ? server : 'id4')
  console.log(await ytv(url5, servers.includes(server) ? server : 'id4'))
  limitAdd(sender)
//  if (!isPremium) return await reply('Maaf Video Tidak Dapat Dikirim, Karena Anda Bukan User Premium')
if (filesize > 30000) return sendImgFromUrl(thumb, `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${filesizeF}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${await shortlink(dl_link)}`)
await sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${await shortlink(dl_link)}`)
 caliph.sendMessage(from, await getBuffer(dl_link), document, { mimetype: 'video/mp4', filename: title+'.mp4', quoted: msg})
    }else{
      await reply("Error | Video tidak ditemukan...");
    }
addFilter(sender)
					break
				case prefix+'beritahoax':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					limitAdd(sender)
addFilter(sender)
					break  
 case prefix+'spamcall':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premi)
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                      // if ('62'+args[0].includes(botNumber.split("@")[0])) return reply('Gagal tidak dapat menelpon nomer bot')
                                     //  if (args[0].includes(ownerNumber.split("@")[0])) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = args[0]
                                       data1 = await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       reply(JSON.stringify(data1, null, '\t'))
                                       
                                     data2 = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=62${data}&APIKEY=a72abb5d0420ef3e`)
                                     reply(JSON.stringify(data2, null, '\t'))

                                     data3 = await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                     reply(JSON.stringify(data3, null, '\t'))
                                       
                                       data4 = await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       reply(JSON.stringify(data4, null, '\t'))
                                      
                                        data5 = await fetchJson(`https://api.zeks.xyz/api/spamcall?no=`+data+`&apikey=${zekskey}`, {method: 'get'})
                                       reply(JSON.stringify(data5, null, '\t'))
                                       
                                       data6 = await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=62${data}&APIKEY=a72abb5d0420ef3e`)
                                       reply(JSON.stringify(data6, null, '\t'))
                                       
                                       data7 = await fetchJson(`https://api.xteam.xyz/spammer/icq?no=62${data}&APIKEY=a72abb5d0420ef3e`)
                                       reply(JSON.stringify(data7, null, '\t'))
                                       
                                       data8 = await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=62${data}&APIKEY=a72abb5d0420ef3e`)
                                       reply(JSON.stringify(data8, null, '\t'))
addFilter(sender)
					break
                 case prefix+'spamsms':
                 data = args[0]
                 if (!args[0].startsWith('62')) return reply('Gunakan nomor awalan 62/n ex : *62796662*')
                 data8 = await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${data}&APIKEY=a72abb5d0420ef3e`)
                 reply(JSON.stringify(data8, null, '\t'))
                 
                 data7 = await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${data}&APIKEY=a72abb5d0420ef3e`)
                 reply(JSON.stringify(data7, null, '\t'))
                 
                 data6 = await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${data}&APIKEY=a72abb5d0420ef3e`)
                 reply(JSON.stringify(data6, null, '\t'))
                 
                 data4 = await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=`+data.replace('62','0') , {method: 'get'})
                 reply(JSON.stringify(data4, null, '\t'))
                 
                 data1 = await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/`+data, {method: 'get'})
                reply(JSON.stringify(data1, null, '\t'))
                                       
                data2 = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${data}&APIKEY=a72abb5d0420ef3e`)
               reply(JSON.stringify(data2, null, '\t'))

              data3 = await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=`+data, {method: 'get'})
               reply(JSON.stringify(data3, null, '\t'))
               limitAdd(sender)
               addFilter(sender)
					break
                case prefix+'infonomor':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `�� internasional : ${data.international}\n�� nomor : ${data.nomor}\n�� operator : ${data.op}`
                reply(hasil)
                limitAdd(sender)
addFilter(sender)
					break
					case prefix+'bpink':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}bpink Caliph Bot`)
                  reply(mess.wait)
               data = await textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', args.join(' '))
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
addFilter(sender)
					break
           case prefix+'tpantai':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					reply(mess.wait)
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}tpantai Caliph Bot`)
               data = await textpro('https://textpro.me/sand-engraved-3d-text-effect-989.html', args.join(' '))
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
addFilter(sender)
					break
case prefix+'toxic':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}toxic Caliph Bot`)
                  reply(mess.wait)
               data = await textpro('https://textpro.me/toxic-text-effect-online-901.html', args.join(' '))
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
addFilter(sender)
					break
                case prefix+'jadwaltvnow':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
                hasil = `Jam : ${data.result.jam}\n\n${data.result.jadwalTV}`
                reply (hasil)
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'jsholat':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (args.length < 1) return reply(`Masukan Nama tempat\nContoh : ${prefix}jsholat Pekalongan`)
                data = await fetchJson(`https://recoders-area.caliph.repl.co/api/jsholat?apikey=FreeApi&daerah=${args.join(' ')}`)
                hasil = `~> shubuh : ${data.jadwal.Fajr}\n~> Dzuhur : ${data.jadwal.Dhuhr}\n~> Ashar : ${data.jadwal.Asr}\n~> Maghrib : ${data.jadwal.Maghrib}\n~> isya : ${data.jadwal.Isha}`
                reply(hasil)
					limitAdd(sender)
addFilter(sender)
					break
                 case prefix+'bugreport':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				if (args.length < 1) return reply('Bugnya apa kak?')
					tek = args.join` `
					bug = {
          text: `*===BUG REPORT===*\n\nDari :\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nNama : ${pushname}\nDikirim Tanggal : ${moment.tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\nPesan :\n${tek}`,
          contextInfo: { mentionedJid: [sender] }
    }
					await caliph.sendMessage("6281215199447@s.whatsapp.net", bug, text, {quoted: msg})
					await caliph.sendMessage(from, 'Laporan mu telah dikirim ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'pokemon':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimsg =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimsg)
					caliph.sendMessage(from, pok, image, { quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'darkjokes':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, msg, '\`\`\`DARKJOKES\`\`\`')
				limitAdd(sender)
addFilter(sender)
					break
                case prefix+'husbu':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                sendImage(hasil, msg, 'HUSBU: '+randKey.teks)
				limitAdd(sender)
addFilter(sender)
					break
                case prefix+'bokep':
                case prefix+'porno':
                case prefix+'indohot':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					try {
				 data = fs.readFileSync('./src/18+.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 reply( randKey.teks, msg)
				limitAdd(sender)
				} catch (e) {
				reply(`${e}`)
				}
addFilter(sender)
					break
                case prefix+'blowjob':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                ranp = getRandom('.gif')
					rano = getRandom('.webp')
					data = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey='+tobzkey, {method: 'get'})
					if (data.error) return sendImage(emror, msg, data.error)
					exec(`wget ${data.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', 'sange ya om')
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
addFilter(sender)
					break
                 case prefix+'hentai':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                ranp = getRandom('.png')
					rano = getRandom('.webp')
					hen = await randomNimek('hentai')
					console.log(hen)
					caliph.sendMessage(from, await getBuffer(hen), image, { quoted: msg, caption: 'HENTAI', thumbnail: await toBase64('https://tinyurl.com/yg3qhl7q') })
					limitAdd(sender)
					
addFilter(sender)
					break
                case prefix+'pinterest':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = args.join` `
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: msg })
					limitAdd(sender)
					addFilter(sender)
					break
      case prefix+'wallpaper':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = args.join` `
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=wallpaper ${pinte}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '*Wallpaper*\n\n*Hasil Pencarian : '+pinte+'*', quoted: msg })
					limitAdd(sender)
					addFilter(sender)
					break
     case prefix+'wallpaper2':
     if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				wallpaper = await fetchJson(`https://recoders-area.caliph.repl.co/api/wallpaper/teknologi?apikey=FreeApi`)
				random = wallpaper.result[Math.floor(Math.random() * wallpaper.result.length)]
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case prefix+'wallpaper3':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				wallpaper2 = await fetchJson(`https://recoders-area.caliph.repl.co/api/wallpaper/programming?apikey=FreeApi`)
				random = wallpaper2.result[Math.floor(Math.random() * wallpaper2.result.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case prefix+'wallpaper4':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				wallpaper3 = await fetchJson(`https://recoders-area.caliph.repl.co/api/wallpaper/cyberspace?apikey=FreeApi`)
				random = wallpaper3.result[Math.floor(Math.random() * wallpaper3.result.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case prefix+'wallpaper5':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				wallpaper4 = await fetchJson(`https://recoders-area.caliph.repl.co/api/wallpaper/muslim?apikey=FreeApi`)
				random = wallpaper4.result[Math.floor(Math.random() * wallpaper4.result.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case prefix+'wallpaper6':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				wallpaper5 = await fetchJson(`https://recoders-area.caliph.repl.co/api/wallpaper/pegunungan?apikey=FreeApi`)
				random = wallpaper5.result[Math.floor(Math.random() * wallpaper5.result.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
      case prefix+'cogan':
      case prefix+'cowok':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${cewe}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '', quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
case prefix+'aesthetic':
anu = JSON.parse(fs.readFileSync('./src/estetik.json'))
var pin = JSON.parse(JSON.stringify(anu));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '', quoted: msg })
					limitAdd(sender)
					addFilter(sender)
					break
               case prefix+'cecan':
      case prefix+'cewek':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${cewe}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '', quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'block':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					caliph.blockUser (`${args[0].slice(1)}@c.us`, "add")
					caliph.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					
addFilter(sender)
					break
                  case prefix+'getstatus':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
                    reply(statusme)
                    
addFilter(sender)
					break
				case prefix+'unblock':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					caliph.blockUser (`${args[0].slice(1)}@c.us`, "remove")
					caliph.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(10)}@c.us`, text)
					
addFilter(sender)
					break
               case prefix+'setppbot':
				 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
				   ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                    reply(mess.wait)
                    owgi = await caliph.downloadAndSaveMediaMessage(ger)
					await caliph.updateProfilePicture(botNumber, owgi)
					reply('Makasih profil barunya�')
					} else {
					reply('Gunakan foto!')}
					
addFilter(sender)
					break
            case prefix+'jadibot':
            caliph.on('qr', async qr => {
      var scan = await caliph.sendMessage(from, qr, image, {quoted:msg, caption:'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik'})
      setTimeout(() => {
      caliph.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    caliph.on('connection-validated', user => {
      reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
    })
    addFilter(sender)
					break
                   case prefix+'artinama':
                    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                  if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    data = await fetchJson(`https://arugaz.herokuapp.com/api/artinama?nama=${body.slice(10)}`)
                   reply(data.result)
                   limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'map':
                    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   caliph.sendMessage(from, hasil, image, {quoted: msg, caption: `MAP: *${body.slice(5)}*`})
                   limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'covid':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'alay':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'quotemaker':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    gh = body.slice(12)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    teks3 = gh.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    hasil = await getBuffer(data.result)
                    caliph.sendMessage(from, hasil, image, {quoted: msg, caption: 'neh...'})
                    limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'glitch':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    teks = body.trim().split('|')
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks[1]}&text2=${teks[2]}&apikey=${tobzkey}`)
                    sendImgFromUrl(data.result, 'glitch: '+teks[1] + teks[2])
                    limitAdd(sender)
addFilter(sender)
					break
                     /*case prefix+'leave':
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					caliph.groupLeave (from) 
					caliph.deleteChat(from)
					}, 2000)
                     setTimeout( () => {
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					costum('Sayonaraa�', text, '0@s.whatsapp.net', cr) // ur cods
					}, 0)
                     
addFilter(sender)
					break*/
            case prefix+'leave':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group')
            if (isGroupAdmins || isOwner) {
          caliph.reply(from, 'Pamit Dulu Ngap👋', msg).then(() => caliph.groupLeave(from)).then(() => caliph.deleteChat(from))
           } else {
           reply('Perintah ini hanya bisa di gunakan oleh admin group')
           }
            addFilter(sender)
					break
                   case prefix+'lirik':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/lirik?judul=${body.slice(7)}`)
                   if (data.error) return reply(data.error)
                   reply(data.result)
                   limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'chord':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${body.slice(7)}`)
                   if (data.error) return reply(data.error)
                   reply(data.result)
                   limitAdd(sender)
addFilter(sender)
					break
					case prefix+'ig': case prefix+'igdl':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					rawd = await axios.get(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=apivinz`)
					if (rawd.data.message) return reply(rawd.data.message)
					caliph.sendFile(from, rawd.data.result[0].url, 'ig', rawd.data.caption, msg)
					limitAdd(sender)
					break
                     case prefix+'igstalk': case prefix+'stalkig':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     hmm = await fetchJson(`https://api.vhtear.com/igprofile?query=${args.join(' ').replace('@', '')}&apikey=${vkey}`)
                     buffer = await getBuffer(hmm.result.picture)
                     hasil = `Fullname : ${hmm.result.full_name}\npengikut : ${hmm.result.follower}\nMengikuti : ${hmm.result.follow}\nStatus : ${hmm.result.is_private ? 'Private' : 'Publik'}\nbio : ${hmm.result.biography}`
                    caliph.sendMessage(from, buffer, image, {quoted: msg, caption: hasil})
                    limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'ownergrup':
				  case prefix+'ownergroup':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
              options = {
          text: `Owner Grup Ini adalah : @${groupOwner.split("@")[0]}`,
          contextInfo: { mentionedJid: [groupOwner] }
    }
    caliph.sendMessage(from, options, text, { quoted: msg } )
				
addFilter(sender)
					break
           case prefix+'quran':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					caliph.sendMessage(from, quran, text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
           case prefix+'nekonime':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
            data = await fetchJson('https://waifu.pics/api/sfw/neko')
           hasil = await getBuffer(data.url)
           caliph.sendMessage(from, hasil, image, {quoted: msg, caption: 'NEKONIME'})
           limitAdd(sender)
addFilter(sender)
					break
           case prefix+'send':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					var pc = body.slice(6)
					var nomor = pc.split(" | ")[0];
					var pesan = pc.split(" | ")[1];
					target = nomor.slice(1)
					caliph.sendMessage(target+'@s.whatsapp.net', pesan, text)
				    caliph.sendMessage(from, `pesan telah terkirim ke nomor ${nomor}`, text, {quoted:msg, contextInfo: {"mentionedJid": `${nomor}@s.whatsapp.net`}})
				    limitAdd(sender)
addFilter(sender)
					break
					case prefix+'quotesnime':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					nimsg = await fetchJson('https://mhankbarbar.moe/api/quotesnime?apiKey='+apiKey)
					quoteid = await translate(nimsg.quote, {tld: 'cn', to: 'id'})
					hasil = `anime : ${nimsg.anime}\nCharacter : ${nimsg.author}\nQuote : ${nimsg.quote}\ntranslate : ${quoteid.text}`
					reply(hasil)
					limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'tahta2':
					case prefix+'harta':
					case prefix+'hartatahta':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					teks = args.join(' ')
					await reply(mess.wait)
					caliph.sendMessage(from, await ht(teks ? teks : 'Y'), image, {quoted:msg, caption: '_*Proses Sukses*_\nMade with ffmpeg'})
					limitAdd(sender)
addFilter(sender)
					break
                  case prefix+'tahta':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    sendImgFromUrl(`https://api.vhtear.com/hartatahta?text=${args.join(' ')}&apikey=${vkey}`, 'Proses sukses')
                    limitAdd(sender)
                    addFilter(sender)
					break
                           case prefix+'image':
				     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = encodeURIComponent(args.join(' '))
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					caliph.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
                    case prefix+'tebakgambar':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = fs.readFileSync('./src/tebakgambar.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 console.log(randKey)
					buffer = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					caliph.sendMessage(from, '*Jawaban :* '+randKey.result.jawaban, text, {quoted: soal}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( async () => {
					soal = await caliph.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: msg })
					limitAdd(sender) // ur cods
					}, 0) // 1000 = 1s,
					
addFilter(sender)
					break
                case prefix+'caklontong':
				     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vkey}`, {method: 'get'})
					setTimeout( () => {
					caliph.sendMessage(from, '*Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: soal}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( async () => {
					soal = await caliph.sendMessage(from, anu.result.soal, text, { quoted: msg })
					limitAdd(sender) // ur cods
					}, 0) // 1000 = 1s,
					
addFilter(sender)
					break
				case prefix+'family100':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${vkey}`, {method: 'get'})
					setTimeout( () => {
					caliph.sendMessage(from, '*Jawaban :* '+anu.result.jawaban, text, {quoted: soal}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( async () => {
					soal = await caliph.sendMessage(from, anu.result.soal, text, { quoted: msg }) 
					limitAdd(sender)// ur cods
					}, 0) // 1000 = 1s,
					
addFilter(sender)
					break
                    case prefix+'watercolor':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					var gh = body.slice(12)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=${vkey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					caliph.sendMessage(from, buffer, image, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
                      case prefix+'groupinfo':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isGroup) return reply(mess.only.group)
                ppUrl = await caliph.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
			    var welgrp = welkom.includes(from)
			    var lgrp = welkom.includes(from)
            var ngrp = nsfw.includes(from)
            var simu = samih.includes(from)
		        caliph.sendMessage(from, buffer, image, {quoted: msg, caption: `*「 GROUP INFO 」*
*╠➥  Name : ${groupName}* 
*╠➥  Members : ${groupMembers.length}*
*╠➥  Welcome : ${welgrp ? 'Aktif' : 'Mati'}*
*╠➥  Left : ${lgrp ? 'Aktif' : 'Mati'}*
*╠➥  NSFW : ${ngrp ? 'Aktif' : 'Mati'}*
*╠➥  Simsimi : ${simu ? 'Aktif' : 'Mati'}*
*╠➥ Group Description* 
${groupDesc}`})
                
addFilter(sender)
					break
                case '>':
                case '=>':
                if (!isOwner) return 
                try {
                reply(require('util').format(eval(`;(async () => { ${args.join(' ')} })()`)))
                } catch (e) {
                reply(`${e}`)
                }
					break
                case prefix+'del':
				case prefix+'delete':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					try {
					if (msg.message.extendedTextMessage.contextInfo.participant != caliph.user.jid) return reply('Tidak Dapat Menghapus Pesan Orang Lain!')
					caliph.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					 } catch (e) {
			caliph.sendMessage(from, `Salah!!, kirim perintah *${prefix}delete [replypesanbot]*`, text, {quoted: msg})
		}
					
addFilter(sender)
					break
                	case prefix+'watak':
                	 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				watak = body.slice(1)
					const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu','topdeh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					caliph.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'hobby':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','ngegay']
					const by = hob[Math.floor(Math.random() * hob.length)]
					caliph.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: msg })
					limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'upimg': case prefix+'tourl':
                    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
		   reply( '```Downloading....```', msg)
             var encmedia  = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            try {
            reply( '```Uploading....```', msg)
          linkimg = await uploadimg(fs.readFileSync(media), `${sender}_img`)
          caliph.sendMessage(from, linkimg, text, { quoted: msg })
          limitAdd(sender)
          } catch (e) {
          reply( `${e}`, msg)
          }
addFilter(sender)
					break
     case prefix+'delptt':
     if (!isQuotedAudio) return reply( 'Reply Audionya Om', msg)
     var encmedia  = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
      var media = await caliph.downloadAndSaveMediaMessage(encmedia)
      caliph.sendMessage(from, fs.readFileSync(media), audio, { quoted: msg, mimetype: 'audio/mp4'})
      addFilter(sender)
					break
     case prefix+'sfire':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
             var encmedia  = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
          ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${linkimg}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                caliph.sendMessage(from, nobg, sticker, {quoted: msg})
                                                fs.unlinkSync(rano)
                                                limitAdd(sender)
                                         })
            case prefix+'tez':
             nyemedia  = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            mediasu = await caliph.downloadAndSaveMediaMessage(nyemedia)
            hamsil = await uploadimg(args.join(' '))
            reply(hamsil)
            console.log(hamsil)
            addFilter(sender)
					break
           case prefix+'math':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				     if (args.length < 1) return reply(`[�] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				  try {
				    mtk = args.join(' ')
				    Math_js = require('mathjs')
				    let val = mtk
                    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                   .replace(/π|pi/gi, 'Math.PI')
                   .replace(/e/gi, 'Math.E')
                    .replace(/\/+/g, '/')
                   .replace(/\++/g, '+')
                   .replace(/-+/g, '-')
                   
				reply(`*${mtk} = *${Math_js.evaluate(val)}*`)
				limitAdd(sender)
				} catch (err) {
				reply(`${err}`)
				}
addFilter(sender)
					break
           case prefix+'fitnah':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					caliph.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					limitAdd(sender)
addFilter(sender)
					break
     case prefix+'swfitnah':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					caliph.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { conversation: `${target}` }}})
					limitAdd(sender)
addFilter(sender)
					break
                case prefix+'wanted':
                var encmedia  = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
          sendImgFromUrl(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${linkimg}&apikey=freeKeY`, '')
          addFilter(sender)
					break
                     case prefix+'play':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length === 0) return reply('Masukkan Judulnya Kak')
				try {
                reply('Tunggu Sebentar Ya kak:D')
                results = await yts(query)
  var vid = results.all.find(video => video.seconds < 3600)
  //console.log(vid)
  url5 = vid.url
  server = (args[1] || 'id4').toLowerCase()
  var { dl_link, thumb, title, filesize, filesizeF} = await yta(url5, servers.includes(server) ? server : 'id4')
  console.log(await yta(url5, servers.includes(server) ? server : 'id4'))
 thumbnail = await caliph.sendMessage(from, await getBuffer(thumb), image, { caption:`*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${await shortlink(dl_link)}`, quoted:msg})
// if (filesize > 10000) return sendImgFromUrl(thumb, `*「 YOUTUBE PLAY 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${filesizeF}\n\n__Maaf, Durasi video melebihi 10 MB. Silahkan download video melalui link dibawah_.\n${await shortlink(dl_link)}`)
  caliph.sendMessage(from, await getBuffer(dl_link), audio, { quoted: msg, mimetype: 'audio/mp4'})
  } catch (e) {
  reply(`${e}`)}  
addFilter(sender)
					break
case prefix+'yts2':
results = await yts(query)
hemm = results.channels
teks = '--------------------------\n'
thumb = results.channels[0].thumbnail
for (let i of hemm) {
bitlyy = await bitly(i.url)
teks += `Channel : ${i.name}\nSubs : ${h2k(i.subCount)}\nVideo : ${i.videoCount}\nLink : ${bitlyy}\n--------------------------\n`
}
sendImgFromUrl(thumb, teks.trim())
addFilter(sender)
					break
                case prefix+'reminder':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					caliph.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n��  *Pesan*: ${ani}\n��  *Durasi*: ${anu} detik\n��  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					caliph.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n��  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					
addFilter(sender)
					break    
                  case prefix+'playstore':
                   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					kuji = body.slice(7)
					reply(mess.wait)
			   response = await fetch('https://api.vhtear.com'+ '/playstore?query=' + kuji + '&apikey=' + vkey)
				ppek = await response.json()
				pler = ppek.result
				no = 0
				ve_ = "*Playstore*\n"
				for (var cg of pler) {
					no += 1
					ve_ += "\n\n" + no + ". AppID : " + cg.app_id
					ve_ += "\nAppID : " + cg.app_id
					ve_ += "\nUrl : https://play.google.com"+ cg.url
					ve_ += "\nTitle : " + cg.title
					ve_ += "\nDeveloper : " + cg.developer
					ve_ += "\nDescription : " + cg.description
				}
				await reply(ve_)
					limitAdd(sender)
addFilter(sender)
					break
                  case prefix+'caklontong':
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					setTimeout( () => {
					caliph.sendMessage(from, '*� Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: msg}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					caliph.sendMessage(from, anu.result.soal, text, { quoted: msg })
					limitAdd(sender) // ur cods
					}, 0) // 1000 = 1s,
					
addFilter(sender)
					break
                  case prefix+'tiktokstalk':
                   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					try {
						if (args.length < 1) return caliph.sendMessage(from, 'Usernamenya mana um?', text, {quoted: msg})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						caliph.sendMessage(from, buffer, image, {quoted: msg, caption: teks})
						console.log(user)
						console.log(stats)
						limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg', '� username tidak ditemukan!')
					}
					
addFilter(sender)
					break
                  case prefix+'marvelogo':
                   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					var gh = args.join(' ')
					teks = gh.split('|')
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/marvellogo?text1=${teks[0]}&text2=${teks[1]}&apikey=${zekskey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					caliph.sendMessage(from, buffer, image, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'lovemake':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vkey}`)
					caliph.sendMessage(from, buffer, image, {quoted: msg, caption: 'LOVEMAKER: '+love})
					limitAdd(sender)
addFilter(sender)
					break
				case prefix+'thunder':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (args.length < 1) return reply('Teksnya mana um')
					thun = args.join(' ')
					if (thun.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					data = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${thun}&apikey=${zekskey}`)
					sendImgFromUrl(data.result, 'THUNDER: '+thun)
					limitAdd(sender)
addFilter(sender)
					break
                   
                    case prefix+'ytkomen':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         reply(mess.wait)
                                         var imgbb = require('imgbb-uploader')
                                         ghost = msg.participant
                                         try {
                                         pp = await caliph.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         buff = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         caliph.sendMessage(from, buff, image, {quoted: msg, caption: `*${usnm}* : ${cmn}`})
                                         limitAdd(sender)
addFilter(sender)
					break
                               case prefix+'snobg':
if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.only.benned)
				if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Ggq1Rn9iDohBGBGkcv5EZMAf'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
						console.log(res)
							fs.unlinkSync(media)
						    buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
									caliph.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: msg})
									fs.unlinkSync(ranw)
									limitAdd(sender)
								//caliph.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: msg})
							})
						})
						}
						addFilter(sender)
					break
                case prefix+'status':
                teks = `RAM : ${ram}`
                caliph.reply(m.chat, teks, msg)
                break
                
    case prefix+'nobg':
                                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                        reply(mess.wait)
                                        owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${vkey}`, {method: 'get'})
                                        sendImgFromUrl(anu1.result.image, 'Proses Sukses *#Caliph Bot*')
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                    
                                          } else {
                                                 sendImgFromUrl ('https://i.ibb.co/tCvKxXB/642581305f30.jpg', 'Ni Contoh!')
                                          }
                                        
addFilter(sender)
					break
                                        case prefix+'wasted':
                                         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.jpg')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                caliph.sendMessage(from, nobg, sticker, {quoted: msg})
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
                      case prefix+'trigger':
                       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                                         ger = isQuotedImage ? m.quoted : m
                                         reply(mess.wait)
                                         sads = await stc.sticker(false, `https://api.zeks.xyz/api/triger?img=${await uploadimg(await ger.download(), '')}&apikey=apivinz`, "", "")

                                         caliph.sendMessage(from, sads, sticker)
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
   case prefix+'raingif':
                       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://docs-jojo.herokuapp.com/api/rain_gif?image_url=${anu.display_url}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                caliph.sendMessage(from, nobg, sticker, {quoted: msg})
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
      case prefix+'colors':
          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                caliph.sendMessage(from, nobg, sticker, {quoted: msg})
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
case prefix+'glass':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                caliph.sendMessage(from, nobg, sticker, {quoted: msg})
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
                   case prefix+'brainly':
				if (!isUser) return reply(mess.only.usetB)
				if (isBanned) return reply(mess.only.benned)
					brien = args.join(' ')
					try {
					brainly(`${brien}`).then(async bren => {
					teks = '*「 _BRAINLY_ 」*\n\n'
					reply(`${teks}${bren.length} jawaban Ditemukan`)
					no = 0
					for (let data of bren.data) {
					hem = await data.jawaban
					console.log(hem)
						no += 1
						teks += `\n*➸ Pertanyaan ${no}:* ${data.pertanyaan}\n\n*➸ Jawaban ${no}:* ${data.jawaban[0].text}\n\n❉───────────❉\n`
					}
					caliph.sendMessage(from, teks, text, {quoted: msg, detectLinks: false})
                    })
					addFilter(sender)
					} catch (e) {
					m.reply(`${e}`)
					}
					break
   case prefix+'brainly2':
    teks = encodeURIComponent(args.join(' '))
    try {
    data = await fetchJson(`https://api.vhtear.com/branly?query=${teks}&apikey=${vkey}`)
    reply(mess.wait)
    reply(data.result.data)
    } catch {reply('Maaf Server Sedang Error!')}
    addFilter(sender)
					break
                    case prefix+'shortlink':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					yuerel = args[0]
					if (!isUrl(args[0])) return reply(mess.error.Iv)
					shortUrl = require('node-url-shortener');
					bitlu = await bitly(yuerel)
					tinyurl = await shortlink(yuerel)
					shortUrl.short(yuerel, function(err, url){
					caliph.sendMessage(from, 'Prosses Berhasil!!\n\n'+url+`\n${bitlu}\n${tinyurl}`, text, {quoted: msg})
					limitAdd(sender)
					console.log(url);
					});
 					
addFilter(sender)
					break
                 case prefix+'addsticker':
                   if (!isPremium) return reply(mess.only.premi)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     svst = body.slice(12)
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await caliph.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan file!')
                    setiker.push(`${body.slice(12)}`)
					fs.writeFileSync('./src/sticker.json', JSON.stringify(setiker))
                     addFilter(sender)
					break
                  case prefix+'stickerlist':
					if (!isUser) return reply(mess.only.userB)
					teks = `*「 _STICKER LIST_ 」*\n`
					no = 0
					for (let hehe of setiker) {
						no += 1
						teks += `� ${hehe.split('@')[0]}\n`
					}
					teks += `Total: ${setiker.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg})
					
addFilter(sender)
					break
                  case prefix+'getsticker':
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(12)
				    try {
				    result = fs.readFileSync(`./stik/${namastc}.webp`)
				    costum(result, sticker, '0@s.whatsapp.net', cr)
                } catch (e) {
			caliph.sendMessage(from, 'Error, mungkin stiker tidak ada di dalam database', text, {quoted: msg})
		}
		
addFilter(sender)
					break
     case prefix+'adadu':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    try {
				    random = Math.floor(Math.random() * 6) + 1
				    result = fs.readFileSync(`./dadu/${random}.webp`)
				    costum(result, sticker, '0@s.whatsapp.net', cr)
                limitAdd(sender)
                } catch (e) {
			caliph.sendMessage(from, 'Error, mungkin stiker tidak ada di dalam database', text, {quoted: msg})
		}
		
addFilter(sender)
					break
        case prefix+'setpp': 
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                         reply(mess.wait)
                        owgi = await caliph.downloadAndSaveMediaMessage(ger)
                         await caliph.updateProfilePicture (from, owgi)
                        reply('������ ��������� ���� ����')
                     limitAdd(sender)
                        } else {
                        reply('Gunakan foto!')}
                                        
addFilter(sender)
					break				
					case prefix+'setnamebot':	
					if (!isOwner) return 
					caliph.updateProfileName(query)
					break
                     case prefix+'setname':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('������� ���')
			//		ppUrl = await caliph.getProfilePicture(from) // leave empty to get your own
			   // buffer = await getBuffer(ppUrl)
                caliph.groupUpdateSubject(from, `${args.join(' ')}`)
            //    caliph.sendMessage(from, buffer, image, {quoted: msg, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}* Menjadi \`\`\`${body.slice(9)}\`\`\``})
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'setdesc':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				//ppUrl = await caliph.getProfilePicture(from) // leave empty to get your own
			  //  buffer = await getBuffer(ppUrl)
                caliph.groupUpdateDescription(from, `${args.join(' ')}`)
              //  caliph.sendMessage(from, buffer, image, {quoted: msg, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}* Menjadi \`\`\`${body.slice(9)}\`\`\``})
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'bitly':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (data.error) return sendImage(emror, msg, data.error)
                hasil = `${data.result}`
                caliph.sendMessage(from, await bitly(hasil), text, { quoted: msg, detectLinks: false })
                limitAdd(sender)
addFilter(sender)
					break
                case prefix+'infogempa':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${tobzkey}`, {method: 'get'})
                   if (data.error) return reply(data.error)
                   buff = await getBuffer(data.map)
                   hasil = ` *potensi* : ${data.potensi}\n*lokasi* : ${data.lokasi}\n*magnitude* : ${data.magnitude}\n*koordinat* : ${data.koordinat}\n*kedalaman* : ${data.kedalaman}`
                   caliph.sendMessage(from, buff, image, {quoted: msg, caption: hasil})
                   limitAdd(sender)
addFilter(sender)
					break
               case prefix+'mitos':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               data = await fetchJson('http://xptnewapi.xp3.biz/mitos.php?apikey='+xpkey)
               hasil = data.result
               caliph.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${cr}` }}})
               limitAdd(sender)
addFilter(sender)
					break
            case prefix+'tess':
            if (isFiltered(from)) return reply('Kamu Terdeteksi spam\ncooldown 5 detik')
            addFilter(sender)
            addFilter(sender)
					break
case prefix+'fakta':
   data = await fetchJson('https://recoders-area.caliph.repl.co/api/fakta?apikey=FreeApi')
                reply(data.result)
                addFilter(sender)
					break
  case prefix+'katabijak':
  bdy = fs.readFileSync('./lib/katabijak.txt', 'utf-8')
                splitnix = bdy.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                reply(randomnix)
     addFilter(sender)
					break
    case prefix+'citacita':
    bdy = fs.readFileSync('./lib/cita-cita.txt', 'utf-8')
                splitnix = bdy.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                    ranp = 'cita-cita.opus'
                    ran = 'cita-cita.mp3'
					exec(`wget ${randomnix} -O ${ranp} && ffmpeg -i ${ranp} ${ran}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: msg , ptt : true })
						fs.unlinkSync(ranp)
						fs.unlinkSync(ran)
						limitAdd(sender)
					})
					addFilter(sender)
					break
   case prefix+'pantun':
   bdy = fs.readFileSync('./lib/pantun.txt', 'utf-8')
                splitnix = bdy.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                reply(randomnix.replace(/pjrx-line/g,"\n"))
                addFilter(sender)
					break
               case prefix+'tovideo':
					if (!isQuotedSticker) return reply( 'Reply Stickernya om', msg)
					reply(mess.wait)
					anumedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await caliph.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						caliph.sendMessage(from, buffers, video, { quoted: msg, caption: 'DONE...' })
						fs.unlinkSync(ran)
					})
					addFilter(sender)
					break
               case prefix+'setreply':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					limitAdd(sender)
addFilter(sender)
					break
               case prefix+'hekel':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               	if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                data = await fetchJson(`https://rfilesss109.000webhostapp.com/katakatahacker.php?apikey=${xpkey}`)
                costum(data.result, text, '0@s.whatsapp.net', cr)
                limitAdd(sender)
addFilter(sender)
					break
             case prefix+'spamteks':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					spatek = body.trim().split('|')
					for (let i = 0; i < spatek[1]; i++) {
					await delay(3000)
					caliph.sendMessage(from, `${spatek[2]}`, text)
					}
					limitAdd(sender)
addFilter(sender)
					break
     case prefix+'spamchat':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (args.length == 0) return reply(`Masukkan Parameter\n\ncommand : ${prefix}spamchat nomor|jumlah|teks`)
					spatek = args.join(' ').split('|')
					if (isNaN(spatek[0])) return reply('Nomor Harus Berupa Angka!')
					for (let i = 0; i < spatek[1]; i++) {
					caliph.sendMessage(spatek[0]+'@s.whatsapp.net', `${spatek[2]}`, text)
					}
					reply(`Spam Terkirim Ke nomor ${spatek[0]}`)
					limitAdd(sender)
addFilter(sender)
					break
       case prefix+'spamvirtex':
          if (!isOwner) return reply('Only Owner')
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (args.length == 0) return reply(`Masukkan Parameter\n\ncommand : ${prefix}spamvirtex nomor|jumlah`)
					spatek = args.join(' ').split('|')
					if (isNaN(spatek[0])) return reply('Nomor Harus Berupa Angka!')
					for (let i = 0; i < spatek[1]; i++) {
					await caliph.sendMessage(spatek[0]+'@s.whatsapp.net', virtex(), text)
					}
					reply(`Spam Terkirim Ke nomor ${spatek[0]}`)
					limitAdd(sender)
					caliph.deleteChat(spatek[0]+'@s.whatsapp.net')
addFilter(sender)
					break
             case prefix+'holoh':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					try {
                   quotedText = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					o = (teks) => {
					return teks.replace(/['a','i','u','e','A','I','U','E']/g, "o");
					}
					reply(o(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					o = (teks) => {
					return teks.replace(/['a','i','u','e','A','I','U','E']/g, "o");
					}
					reply(o(args.join(' ')))
					limitAdd(sender)
					}
					addFilter(sender)
					break
         case prefix+'hilih':
          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				   try {
                   quotedText = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                   datas = await fetchJson(`https://recoders-area.caliph.repl.co/api/hilih?kata=${quotedText}&apikey=FreeApi`)
                   reply(datas.teks.after)
                   } catch {
                   quotedText = args.join(' ')
                   datas = await fetchJson(`https://recoders-area.caliph.repl.co/api/hilih?kata=${quotedText}&apikey=FreeApi`)
                   reply(datas.teks.after)
                   }
					addFilter(sender)
					break
     case prefix+'nickepep':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
     data = await fetchJson('http://api.zeks.xyz/api/nickepep?apikey='+zekskey)
     teks = '--------------------------\n'
					for (let i of data.result) {
						teks += `${i}\n--------------------------\n`
					}
					reply(teks.trim())
     limitAdd(sender)
addFilter(sender)
					break
                 case prefix+'pastebin':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    gh = body.slice(10)
                    teks1 = gh.split(" | ")[0];
                    teks2 = gh.split(" | ")[1];
                    data = await fetchJson(`http://api.zeks.xyz/api/pastebin?text=${teks2}&name=${teks1}&apikey=${zekskey}`)
                    reply(`PROSES SUKSES!!!\n\n${data.result}`)
                    limitAdd(sender)
addFilter(sender)
					break
                   case prefix+'turnoff':
                   if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                   if (!isOwner) return reply(mess.only.ownerB)
                   reply('Mematikan Bot')
                   setTimeout( () => {
					process.exit()
					}, 2000)
                   
addFilter(sender)
					break
              case prefix+'semoji':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     reply(mess.wait)
                     try{
                     stc.sticker(false, `https://api.vhtear.com/emojitopng?code=${emojiUnicode(query)}&apikey=${vkey}`, "Emoji sticker", "Caliph Bot").then(v => caliph.sendMessage(from, v, sticker, { quoted: msg}))
                             limitAdd(sender)
                    } catch(e) {
                       reply('Error!')
                       console.log(e)
                       }

addFilter(sender)
					break
                      case prefix+'semoji2':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     var imgbb = require('imgbb-uploader')
                     teks = encodeURIComponent(args.join(' '))
                     reply(mess.wait)
                     try {
                     pp = `https://api.xteam.xyz/sticker/emojitopngsamsung?emo=${teks}&APIKEY=a72abb5d0420ef3e`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('semoji.jpeg', datae, 'base64')
                     res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'semoji.jpeg')
                     console.log(res)
                     ranp = getRandom('.png')
                     rano = getRandom('.webp')
                     exec(`wget ${res.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=60 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                             //fs.unlinkSync(ranp)
                             if (err) return reply(mess.error.stick)
                             pps = fs.readFileSync(rano)
                             caliph.sendMessage(from, pps, sticker, {quoted: msg})
                             //fs.unlinkSync(rano)
                             limitAdd(sender)
                            })
                    } catch(e) {
                       reply('Error!')
                       console.log(e)
                       }

addFilter(sender)
					break
      
       case prefix+'motivasi':
        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                reply(randommotivasi)
            })
            .catch(() => {
                reply(from, 'Ada yang Error!', id)
            })
            
addFilter(sender)
					break
     case prefix+'qrread':
                                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)    
                                          if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                       axios.get(`https://recoders-area.caliph.repl.co/api/qrread?url=${teks}&apikey=FreeApi`)
		.then((res) => {
			reply('HASIL : '+res.data.result)
		})
                                            }else {
                                                 sendImgFromUrl ('https://i.ibb.co/Fb1t6kg/c96c13fe455f.jpg', 'NI CONTOH!!')
                                          }
                                             
addFilter(sender)
					break
   case prefix+'foward':
   caliph.sendMessage(from, body.slice(8), text, {contextInfo: { forwardingScore: 1, isForwarded: true }})
   
addFilter(sender)
					break
case prefix+'kpop':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    sendImgFromUrl(randomkpopx, 'Nee..')
                limitAdd(sender)
                })
                .catch(() => {
                    reply('Ada yang Error!')
                })
            } else {
                reply(`Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
            }
            
addFilter(sender)
					break
    case prefix+'tod':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
    reply(`Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n� ${prefix}truth\n� ${prefix}dare`)
    
addFilter(sender)
					break
                           case prefix+'anime':
                            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                           if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
            if (args.length == 0) return reply(`Untuk menggunakan ${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`)
            if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomnime = body.split('\n')
                    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                    sendImgFromUrl(randomnimex, 'Nee..')
                    limitAdd(sender)
                })
                .catch(() => {
                    reply('Ada yang Error!')
                })
            } else {
                reply(`Maaf query tidak tersedia. Silahkan ketik ${prefix}anime untuk melihat list query`)
            }
            
addFilter(sender)
					break
                         case prefix+'fancytext':
                          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                         if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`http://xptnewapi21.6te.net/fancytext.php?apikey=xptn1&text=${body.slice(11)}`)
                        reply(data.result)
                        limitAdd(sender)
                        
addFilter(sender)
					break
            case prefix+'snow':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
            teks = body.slice(6)
             if (args.length == 0) return reply(`Command:\n${prefix}snow teks\n\nContoh:\n${prefix}snow Caliph Bot`)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${teks}&apikey=${tobzkey}`)
                buffer = await getBuffer(data.result)
                caliph.sendMessage(from, buffer, image, {quoted: msg, caption: 'neh...'})
                limitAdd(sender)
addFilter(sender)
					break       
                case prefix+'binary':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`https://some-random-api.ml/binary?text=${body.slice(8)}`)
                        reply(data.binary)
                        
addFilter(sender)
					break
       case prefix+'readbinary':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`https://some-random-api.ml/binary?decode=${body.slice(12)}`)
                        reply(data.text)
                        
addFilter(sender)
					break
       case prefix+'tagme':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
       options = {
          text: `*@${sender.split("@s.whatsapp.net")[0]}* tagged!`,
          contextInfo: { mentionedJid: [sender] }
    }
    reply(options)
    
addFilter(sender)
					break
case prefix+'raw':
if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
   if (!isOwner) return reply(mess.only.ownerB)
    try {
                    let evaled = await eval(args.join(' '))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    if (command.slice(1) == 'raw') {
await fs.writeFileSync('raw.json', evaled)
 caliph.sendMessage(from, fs.readFileSync('raw.json'), document, { quoted: msg, mimetype: 'text/txt', filename: 'raw.txt'}) } else caliph.reply(from, evaled, msg)
                } catch (err) {
                    console.error(err)
                    await caliph.reply(from, `${err}`, msg)
                }
    
addFilter(sender)
					break
  case prefix+'stahta':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     var imgbb = require('imgbb-uploader')
                     teks = body.slice(8)
                     reply(mess.wait)
                     try {
                     pp = `https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=${zekskey}`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('stahta.jpeg', datae, 'base64')
                     res = await imgbb('2685f71965fa6c56702e9e70644ff0ad', 'stahta.jpeg')
                     ranp = getRandom('.png')
                     rano = getRandom('.webp')
                     exec(`wget ${res.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                             //fs.unlinkSync(ranp)
                             if (err) return reply(mess.error.stick)
                             pps = fs.readFileSync(rano)
                             caliph.sendMessage(from, pps, sticker, {quoted: msg})
                             //fs.unlinkSync(rano)
                             limitAdd(sender)
                            })
                    } catch(e) {
                       reply(`Error!`)
                       }

addFilter(sender)
					break
 case prefix+'ttd':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     var imgbb = require('imgbb-uploader')
                     teks = body.slice(5)
                     reply(mess.wait)
                     try {
                     const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
                     const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
                     pp = `https://api.vhtear.com/textmaker?text=${teks}&warna=${rttp2}&apikey=${vkey}`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('ttd.jpeg', datae, 'base64')
                     res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'ttd.jpeg')
                     ranp = getRandom('.png')
                     rano = getRandom('.webp')
                     exec(`wget ${res.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                             //fs.unlinkSync(ranp)
                             if (err) return reply(mess.error.stick)
                             pps = fs.readFileSync(rano)
                             caliph.sendMessage(from, pps, sticker, {quoted: msg})
                             //fs.unlinkSync(rano)
                             limitAdd(sender)
                            })
                    } catch(e) {
                       reply(`Emoji ${emo} tidak terdaftar didalam database`)
                       }

addFilter(sender)
					break
 case prefix+'ttg':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     teks = encodeURIComponent(args.join(' '))
                     reply(mess.wait)
                     try {
                     pp = `https://api.vhtear.com/textxgif?text=${teks}&apikey=${vkey}`
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     res = await Buffer.from(datae, 'base64')
                     await stc.sticker(res, false, 'Text Gif', 'Caliph Bot').then(gege => {
                     caliph.sendMessage(from, gege, sticker, { quoted: msg })
                     })
					} catch {
					reply('Error mhank!')
					}

addFilter(sender)
					break
/*
 case prefix+'ttp':
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
    spawn('convert', [
	                	'./bg.png',
                		'-gravity',
             	 	    'Center',
	                	'-fill',
	                	'#ffffff',
		                '-font',
		                './src/font/Dimbo Italic.ttf',
	    	            '-size',
	        	        '1280x1280',
	            	    '-pointsize',
                		'240',
		                '-interline-spacing',
	    	            '-7.5',	
	        	        '-annotate',
	            	    '+360',
   	    	         	args.join(' '),
   	    	         	'-strokewidth', 
   	    	         	'5', 
   	    	         	'-stroke',
   	    	         	'#000000',
    	            	'./tmp/ttp.png'
            		])
                  .on('error', () => caliph.sendMessage(from, 'Error | Not Found', MessageType.text))
            .on('exit', () => {
                media = './tmp/ttp.png'
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						//fs.unlinkSync(media)
						if (err) return reply('� Gagal, pada saat mengkonversi sticker ke gambar �')
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, sticker, {quoted: msg})
						//fs.unlinkSync(ran)
						limitAdd(sender)
					})
            })
					addFilter(sender)
					break*/
					case prefix+'ttp':
					if (isLimit(sender)) return
         limitAdd(sender)
         reply( mess.wait, msg)
         data = await fetchJson(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(args.join(' '))}`)
         base64 = data.base64
         var buffer = Buffer.from(base64.slice(22), 'base64')
        stk = await stc.sticker(buffer, false, 'Text Maker', 'Caliph Bot')
        caliph.sendMessage(from, stk, sticker, { quoted: m })
          addFilter(sender)
					break
                   case prefix+'ramalpasangan':
                    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            if (isBanned) return reply(mess.only.benned)
		   if (!isUser) return reply(mess.only.userB)
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            arg = args.join(' ')
            if (arg.length >= 2) {
            reply(mess.wait)
            const kamu = arg.split('|')[0]
            const pacar = arg.split('|')[1]
            await delay(1500)
            const rpmn = Math.floor(Math.random() * 100)
            const rpmn2 = Math.floor(Math.random() * 100)
            await delay(1500)
            const rpmn3 = Math.floor(Math.random() * 100)
            const rpmn4 = Math.floor(Math.random() * 100)
            await delay(1500)
            const rpmn5 = Math.floor(Math.random() * 100)
            const rpmn6 = Math.floor(Math.random() * 100)
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n� Cinta : ${rpmn}\n� Jodoh : ${rpmn2}\n� Kemiripan : ${rpmn3}\n� Kesukaan : ${rpmn4}\n� Kesamaan : ${rpmn5}\n� Kebucinan ${rpmn6}`
            reply(rjh2)
            limitAdd(sender)
            } else {
            await reply(`Kirim perintah *${prefix}ramalpasangan [kamu|pasangan]**`)
            }
            
addFilter(sender)
					break
             case prefix+'caliphgroup':
             case prefix+'caliphgrup':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              try {
            mygroup = 'https://chat.whatsapp.com/'+await caliph.groupInviteCode("6281215199447-1614071791@g.us")
            caliph.sendMessage(from, `Link Group Caliph : ${mygroup}\nJangan Lupa Join Ya Kak ${pushname}`, text, { quoted: msg, detectLinks: false })
            } catch {
            reply(`Grupnya Dah Bubar Su 🐦👌`)
            }
            addFilter(sender)
					break      
            
              case prefix+'nulis': // BY MFARELS
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            if (args.length < 1) return reply(`Kirim perintah *${prefix}nulis nama|kelas|teks*`)  // BY MFARELS
            inputPath = 'src/kertas/magernulis1.jpg'
            fontPath = 'src/font/212BabyGirl.otf'
  outputPath = 'media/magernulis1.jpg'
  y = args.join` `
  d = new Date
  tgl = d.toLocaleDateString('id-Id')
  teks = y.split('|')
  panjangKalimat = teks[2].replace(/(\S+\s*){1,10}/g, '$&\n')
  tulisan = panjangKalimat.split('\n').slice(0, 33).join('\n')
  console.log(`fontPath : ${fontPath}\ninputPath : ${inputPath}\noutputPath : ${outputPath}\nhari : ${hari}\ntgl : ${tgl}\nnama : ${teks[0]}\nkelas : ${teks[1]}\nteks : ${tulisan}`)
  spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    tulisan,
    '-annotate',
    '+360+120',
     teks[1], 
   '-annotate',
   '+360+100',
    teks[0],
    outputPath
  ])
            .on('error', () => reply('Error Bjeer, keknya scriptnya lagi error'))
            .on('exit', () => {
                sendImgFromUrl(outputPath, '*Sukses Nulis Di Buku1*')
                limitAdd(sender)
            })
            addFilter(sender)
					break  // BY MFARELS
           case prefix+'nulis2':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                 console.log("writing...")
      teks = args.join` `
      split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
            "src/kertas/magernulis2.jpg",
            "-font",
            "font/IndieFlower.ttf",
            "-size",
            "700x960",
            "-pointsize",
            "18",
            "-interline-spacing",
            "3",
            "-annotate",
            "+170+222",
            fixedHeight,
            "media/magernulis2.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", () =>
         {
            buffer = fs.readFileSync("media/magernulis2.jpg") // can send mp3, mp4, & ogg -- but for mp3 files the mimetype must be set to ogg

            caliph.sendMessage(from, buffer, image, {quoted: msg, caption: '*SUKSES NULIS DIBUKU3*'})
            limitAdd(sender)
            console.log("done")
         })
         addFilter(sender)
					break
        case prefix+'nulis3':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            if (args.length < 1) return reply('Kirim perintah *'+prefix+'nulis3 [text]*')
            diTulis = args.join` `
            await reply(mess.wait)
            panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
            panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
            spawn('convert', [
                'src/kertas/magernulis1.jpg',
                '-font',
                'src/font/212BabyGirl.otf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris,
                './media/magernulis3.jpg'
            ])
            .on('error', () => reply('Error gan'))
            .on('exit', () => {
                sendImgFromUrl('./media/magernulis3.jpg', 'Nih mhank')
                limitAdd(sender)
            })
            addFilter(sender)
					break
            case prefix+'readmore':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            teks = body.slice(10).split('|')
            hasil = `${teks[0]}${readMore}${teks[1]}`
            reply(hasil)
            addFilter(sender)
					break
       case prefix+'img64':
       reply(await toBase64(args[0]))
       addFilter(sender)
					break
        case prefix+'cr2':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Usage :\n${prefix}cr2 [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}cr2 @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var tekstarget = gh.split("|")[1];
					var teksbot = gh.split("|")[2];
					caliph.sendMessage(`${mentioned}`, `${teksbot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(`${mentioned}` ? { remoteJid: `${mentioned}` } : {}) }, message: { conversation: `${tekstarget}` }}})
					limitAdd(sender)
					addFilter(sender)
					break
      case prefix+'level':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isGroup) return reply(mess.only.group)
               if (!isLevelingOn) return reply(`Leveling Belum diaktifkan`)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply('*LEVEL KAKAK MASIH* 0 °-°')
                sem = sender.replace('@s.whatsapp.net','')
                resul = `� *LEVEL*\n  ├─ � *Name* : ${pushname}\n  ├─ � *User XP* : ${userXp}\n  └─ � *User Level* : ${userLevel}`
               caliph.sendMessage(from, resul, text, { quoted: msg})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            addFilter(sender)
					break
     case prefix+'leveling':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan fitur')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     reply('Sukses mengaktifkan leveling')
                } else if (args[0] === 'disable') {
                heh = from
                inz = _leveling.indexOf(heh)
                    _leveling.splice(inz, 1)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     reply('Sukses menonaktifkan leveling')
                } else {
                    reply(`*Ketik perintah enable untuk mengaktifkan, disable untuk menonaktifkan* \n *Contoh: ${prefix}leveling enable*`)
                }
            addFilter(sender)
					break
      case prefix+'mining':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
      if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)   
    if (!isGroup) return reply(mess.only.group)
    if (!isLevelingOn) return reply(`Leveling Belum diaktifkan`)
         random = Math.floor(Math.random() * 20) + 1
         reply(`selamat anda mendapatkan ${random} XP`)
       addLevelingXp(sender, random)
       limitAdd(sender)
       addFilter(sender)
					break
case prefix+'cnn':
      if (args[0].toLowerCase() == 'nasional' || args[0].toLowerCase() == 'internasional') {
      require('axios').get(`https://www.cnnindonesia.com/${args[0].toLowerCase()}`).then(async res => {
const $ = require('cheerio').load(res.data)
hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const judul = $(b).find('img').attr('alt')
hasil.push({ judul, link, thumb })
})
result = hasil.map(({ judul, link, snippet}) => {
    return `*${judul}*\n_${link}_`
  }).join`\n\n`
  await sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=https://www.cnnindonesia.com/${args[0].toLowerCase()}&quality=100&full_page=true`, result)
hasil = []
})
} else { 
reply('Masukkan Query nasional / internasional')
}
break
     case prefix+'google':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
     if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(mess.wait)
            googleQuery = args.join(' ')
            if (args.length < 1) return reply('YANG MAU DICARI APAAN?')
           // ss = await fetchJson(`https://api.zeks.xyz/api/ssweb?url=https://google.com/search?q=${googleQuery}&apikey=${zekskey}`)
            if(googleQuery == undefined || googleQuery == '') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
      search = await googleIt({ query: googleQuery })
     result = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
               sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=https://google.com/search?q=${googleQuery}&quality=100&full_page=true`, result)
                limitAdd(sender)
            addFilter(sender)
					break
              // PHOTOOXY API
              case prefix+'pubglogo':
               if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}pubglogo teks1|teks2*`)
              teks = args.join(' ').split('|')
              try {
              data = await fetchJson(`https://recoders-area.caliph.repl.co/api/textmaker/game?text=${teks[0]}&text2=${teks[1]}&theme=pubg&apikey=FreeApi`)
              sendImgFromUrl(data.result.url, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Error detail : ${e}`) }
              addFilter(sender)
					break
           case prefix+'crossfire':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}crossfire teks`)
              teks = body.slice(11)
              try {
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=crossfire&text=${teks}&apikey=${tobzkey}`)
              sendImgFromUrl(data.result, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Detail Erorr : ${e}`) }
              addFilter(sender)
					break
          case prefix+'csgo':
           if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}crossfire teks`)
              teks = body.slice(6)
              try {
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${teks}&apikey=${tobzkey}`)
              sendImgFromUrl(data.result, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Detail Erorr : ${e}`) }
              addFilter(sender)
					break
          case prefix+'overwatch':
           if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}overwatch teks*`)
              teks = body.slice(11)
              try {
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${teks}&apikey=${tobzkey}`)
              sendImgFromUrl(data.result, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Detail Erorr : ${e}`) }
              addFilter(sender)
					break
         case prefix+'shadow':
          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
         if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}crossfire teks`)
              teks = body.slice(8)
              try {
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${teks}&apikey=${tobzkey}`)
              sendImgFromUrl(data.result, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Detail Erorr : ${e}`) }
              addFilter(sender)
					break
       case prefix+'burnpaper':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
              if (args.length < 1) return reply(`Kirim perintah *${prefix}crossfire teks`)
              teks = body.slice(11)
              try {
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${teks}&apikey=${tobzkey}`)
              sendImgFromUrl(data.result, 'neh...')
              limitAdd(sender)
             } catch (e) {
             reply(`Detail Erorr : ${e}`) }
              addFilter(sender)
					break
            case prefix+'setbio':
            if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
      if (!isOwner) return reply(mess.only.ownerB)
       try { 
   quotedText = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
   caliph.setStatus(quotedText)
   reply(`berhasil ubah bio ke ${quotedText}`)
   } catch {
  if (args.length < 1) return ('teksnya mana um!')
   caliph.setStatus(args.join(' '))
   reply(`berhasil ubah bio ke ${args.join(' ')}`)
   }
         addFilter(sender)
					break
         case prefix+'repeat':
          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
         if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
        reply(mess.wait)
        if (args.length < 1) return reply(`Kirim perintah *${prefix}repeat [jumlah|teks]`)
         teks = args.join(' ').split("|")
         if(isNaN(teks[0])) return reply('Jumlah Harus berupa angka!')
         if (teks[0] > 5001) return reply('repeater max 5000')
      //   ngetag = msg.message.extendedTextMessage.contextInfo ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
    caliph.sendMessage(from, repeat(teks[1], teks[0]), text, { quoted: msg})
         addFilter(sender)
					break
case prefix+'groupmenu':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
           if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
          await reply(groupmenu(prefix))
           reply('Note : beberapa fitur sedang perbaikan')
            addFilter(sender)
					break
        case prefix+'mediamenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(mediamenu(prefix))
            addFilter(sender)
					break
        case prefix+'funmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(funmenu(prefix))
            addFilter(sender)
					break
        case prefix+'animemenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(animemenu(prefix))
            addFilter(sender)
					break
        case prefix+'kerangmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(kerangmenu(prefix))
            addFilter(sender)
					break
  case prefix+'asupan': // Update By RzkyO & ItsmecaliphXSec404
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=${setting.onlycity}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				pp = await caliph.getProfilePicture(botNumber)
			//	caliph.sendFile(from, anu.result.url, 'asupan.mp4', 'Neh asupannya', m, false)
				caliph.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Caliph Bot_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await toBase64(pp)} } }})
				limitAdd(sender)
				addFilter(sender)
					break
					case prefix+'lolivid': // Update By Caliph71
  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
				reply(`[❕] Loading`)
				buff = await getBuffer('https://recoders-area.caliph.repl.co/api/lolivid?apikey=FreeApi')
				pp = await caliph.getProfilePicture(botNumber)
			//	caliph.sendFile(from, anu.result.url, 'asupan.mp4', 'Neh asupannya', m, false)
				caliph.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Caliph Bot_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await toBase64(pp)} } }})
				limitAdd(sender)
				addFilter(sender)
					break
					case prefix+'downloadmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(downloadmenu(prefix))
            addFilter(sender)
					break
        case prefix+'othermenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(othermenu(prefix))
            addFilter(sender)
					break
        case prefix+'ownermenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            if (!isOwner) return reply('Perintah ini hanya untuk Owner Caliph')
            reply(ownermenu(prefix))
            addFilter(sender)
					break
       case prefix+'snk':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
       reply(snk())
       addFilter(sender)
					break
        case prefix+'nsfwmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isNsfw) return reply('command/Perintah NSFW belum di aktifkan di group ini!')
            reply(nsfwmenu(prefix))
            addFilter(sender)
					break
    case prefix+'':
       if (!isStiker) return  
       if ((isMedia && !msg.message.videoMessage)) {
						hhhh = await caliph.downloadAndSaveMediaMessage(msg)
						ran = getRandom('.webp')
						await ffmpeg(`./${hhhh}`)
							.input(hhhh)
							.on('start', function (cmd) {
							})
							.on('error', function (err) {
								//fs.unlinkSync(hhhh)
								reply(mess.error.stick)
							})
							.on('end', function () {
								buff = fs.readFileSync(ran)
								costum(buff, sticker, '0@s.whatsapp.net', monospace('AUTOSTICKER'))
								//fs.unlinkSync(hhhh)
								//fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
				}
					addFilter(sender)
					break
                    case prefix+'ping':
                    if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
        old = new Date
  await caliph.reply(from, '_Testing ping..._', msg).then(() => reply((new Date - old) + ' ms'))
  addFilter(sender)
					break
					case prefix+'speedtest':
					if (!isOwner) return

					reply('```CHECKING SERVER SPEED.....```')
					exec('speed-test --json', (err, stdout) => {
		           if (err) return caliph.sendMessage(from, `${err}`, text, { quoted: msg })
		           if (stdout) {
			     hi = JSON.parse(stdout); 
			     caliph.sendMessage(from, `=== SPEED TEST ===\n\nPing : ${hi.ping} ms\nUpload : ${hi.upload} mbps\nDownload : ${hi.download} mbps`, text, { quoted: msg })
		           }
	           })
	           break
       case prefix+'autostick':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
      if (!isGroup) return reply(mess.only.group)
      reply(`
     ketik ${prefix}astick enable = mengaktifkan
     ketik ${prefix}astick disable = menonaktifkan
     `)
     addFilter(sender)
					break
  case prefix+'slow':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (!isQuotedAudio) return reply('Reply audio yang akan di slowmo')
				 encmediad = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				mediad = await caliph.downloadAndSaveMediaMessage(encmediad)
			ranm = "slowmo.mp3"
					try {
		exec(`ffmpeg -i ${mediad} -filter:a "atempo=0.9,asetrate=26500*1.25" ${ranm}`, (err, stderr, stdout) => {
			if (err) return caliph.sendMessage(from, "Gagal Mank:v", text, { quoted: msg})
			buffer = fs.readFileSync(ranm)
			caliph.sendMessage(from, buffer, audio, {quoted: msg, mimetype: 'audio/mp4', ptt:false, duration: 99999999999})
			fs.unlinkSync(ranm)
			fs.unlinkSync(mediad)
			limitAdd(sender)
		})
	} catch (err) {
		caliph.sendMessage(from, "Gagal Membuat Suara MP3 Menjadi Slowmotion!!", text, { quoted: msg })
		console.log(err)
	}
	addFilter(sender)
					break
case prefix+'bass':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
				encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				media = await caliph.downloadAndSaveMediaMessage(encmedia)
				ran = 'bass.mp3'
				try { 
				exec(`ffmpeg -i ${media} -af equalizer=f=20:width_type=o:width=2:g=25 ${ran}`, (err, stderr, stdout) => {
								fs.unlinkSync(media)
								if (err) return reply('Error!')
								ntc1 = fs.readFileSync(ran)
								caliph.sendMessage(from, ntc1, audio, {mimetype: 'audio/mp4', ptt:false, quoted: msg})
								fs.unlinkSync(ran)
								limitAdd(sender)
								})
								} catch (err) {
		caliph.sendMessage(from, "Gagal Membuat Suara MP3 Menjadi Bass!!", text, { quoted: msg })
		console.log(err)
	}
								addFilter(sender)
					break
case prefix+'earrape':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
				encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				media = await caliph.downloadAndSaveMediaMessage(encmedia)
				ran = 'bass.mp3'
				try {
				exec(`ffmpeg -i ${media} -af volume=12 ${ran}`, (err, stderr, stdout) => {
								fs.unlinkSync(media)
								if (err) return reply('Error!')
								ntc1 = fs.readFileSync(ran)
								caliph.sendMessage(from, ntc1, audio, {mimetype: 'audio/mp4', ptt:false, quoted: msg})
								fs.unlinkSync(ran)
								limitAdd(sender)
								})
								} catch (err) {
		caliph.sendMessage(from, "Gagal Membuat Suara MP3 Menjadi Earrape!!", text, { quoted: msg })
		console.log(err)
	}
								addFilter(sender)
					break
      case prefix+'estetik':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
      if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
      data = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=${zekskey}`)
      sendImgFromUrl(data.result.result, '� ESTETIK �')
      limitAdd(sender)
      addFilter(sender)
					break
    case prefix+'clear':
    if (!isOwner) return reply(mess.only.ownerB)
    await exec('rm -f media/**')
    reply('sukses clear media')
    addFilter(sender)
					break
    case prefix+'lightext':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
    data = await fetchJson('https://api.zeks.xyz/api/lithgtext?text='+args.join(' ')+'&apikey='+zekskey)
    sendImgFromUrl(data.result, 'Done.')
    limitAdd(sender)
    addFilter(sender)
					break
   case prefix+'mycontact':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.benned)
				    pcard = 'BEGIN:VCARD\n' // metadata of the contact card
					+ 'VERSION:3.0\n' 
					+ `FN:${pushname}\n` // full name
					+ 'ORG: Caliph Bot;\n' // the organization of the contact
					+ `TEL;type=CELL;type=VOICE;waid=${(sender.split('@')[0])}:${(sender.split('@')[0])}\n` // WhatsApp ID + phone number
					+ 'END:VCARD'
					caliph.sendMessage(from, {displayname: "Caliph", vcard: pcard}, contact)
					limitAdd(sender)
					addFilter(sender)
					break
   case prefix+'murothal':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.benned)
   reply(` 
QUR\'AN BOT:
Via Copas {SEBARKAN}

*Instagram:*
_@caliph91__

Juz 1 ~> http://j.mp/2b8SiNO
Juz 2 ~> http://j.mp/2b8RJmQ
Juz 3 ~> http://j.mp/2bFSrtF
Juz 4 ~> http://j.mp/2b8SXi3
Juz 5 ~> http://j.mp/2b8RZm3
Juz 6 ~> http://j.mp/28MBohs
Juz 7 ~> http://j.mp/2bFRIZC
Juz 8 ~> http://j.mp/2bufF7o
Juz 9 ~> http://j.mp/2byr1bu
Juz 10 ~> http://j.mp/2bHfyUH
Juz 11 ~> http://j.mp/2bHf80y
Juz 12 ~> http://j.mp/2bWnTby
Juz 13 ~> http://j.mp/2bFTiKQ
Juz 14 ~> http://j.mp/2b8SUTA
Juz 15 ~> http://j.mp/2bFRQIM
Juz 16 ~> http://j.mp/2b8SegG
Juz 17 ~> http://j.mp/2brHsFz
Juz 18 ~> http://j.mp/2b8SCfc
Juz 19 ~> http://j.mp/2bFSq95
Juz 20 ~> http://j.mp/2brI1zc
Juz 21 ~> http://j.mp/2b8VcBO
Juz 22 ~> http://j.mp/2bFRxNP
Juz 23 ~> http://j.mp/2brItxm
Juz 24 ~> http://j.mp/2brHKw5
Juz 25 ~> http://j.mp/2brImlf
Juz 26 ~> http://j.mp/2bFRHF2
Juz 27 ~> http://j.mp/2bFRXno
Juz 28 ~> http://j.mp/2brI3ai
Juz 29 ~> http://j.mp/2bFRyBF
Juz 30 ~> http://j.mp/2bFREcc
`)
addFilter(sender)
					break
    
    case prefix+'pornhub':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.benned)
    if (args.length < 1) return reply(`kirim perintah ${prefix}pornhub *[teks1|teks2]*`)
    reply(mess.wait)
    try {
    teks = args.join(' ').split("|")
    sendImgFromUrl(`https://api.vhtear.com/pornlogo?text1=${teks[0]}&text2=${teks[1]}&apikey=${vkey}`, 'Done...')
    limitAdd(sender)
    } catch {
    reply('Error!')
    }
    addFilter(sender)
					break
  
   case prefix+'nhentai':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.benned)
    data = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${args[0]}&apikey=${vkey}`)
    if (data.result.response == 204) return reply(`kode nuklir ${args[0]} tidak ditemukan`)
    buffer = await getBuffer(data.result.pdf_file)
    reply(mess.wait)
    caliph.sendMessage(from, buffer, document, {quoted:msg, filename: `${data.result.title}.pdf`, mimetype: Mimetype.pdf })
    limitAdd(sender)
    addFilter(sender)
					break
  
    case prefix+'googletext':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
   if (isBanned) return reply(mess.benned)
   if (args.length < 1) return reply(`kirim perintah ${prefix}googletext *[teks1|teks2|teks3]*`)
   try {
   teks = args.join(` `).split('|')
   buffer = await fetchJson(`https://recoders-area.caliph.repl.co/api/textmaker?text=${teks[0]}&text2=${teks[1]}&text3=${teks[2]}&theme=google-suggestion&apikey=FreeApi`)
   sendImgFromUrl(buffer.result.url, 'done!')
   limitAdd(sender)
   addFilter(sender)
   } catch {
   reply('Error!')}
   addFilter(sender)
					break
   
   case prefix+'jarak':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.benned)
   if (args.length < 1) return reply(`kirim perintah ${prefix}jarak *[query1-query2]*\n\nContoh : ${prefix}jarak surabaya-jakarta`)
  try {
   teks = args.join(` `).split('-')
   data = await fetchJson(`https://api.vhtear.com/distance?from=${teks[0]}&to=${teks[1]}&apikey=${vkey}`)
   reply(data.result.data)
   limitAdd(sender)
   } catch {
   reply('Error!')}
   addFilter(sender)
					break

   case prefix+'goldbutton':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.benned)
   if (args.length < 1) return reply(`kirim perintah ${prefix}goldbutton *[teks]*`)
  try {
   data = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${args.join` `}&apikey=${zekskey}`)
   sendImgFromUrl(data.result, 'Ini Fake!')
   limitAdd(sender)
   } catch {
   reply('Error!')}
   addFilter(sender)
					break

   case prefix+'narutotext':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (!isUser) return reply(mess.only.userB)
   if (isBanned) return reply(mess.benned)
   if (args.length < 1) return reply(`kirim perintah ${prefix}${command} *[teks]*`)
   try {
   data = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${args.join(` `)}&apikey=${zekskey}`)
   sendImgFromUrl(data.result, 'Done...')
   limitAdd(sender)
   } catch {
   reply('Error!')}
   addFilter(sender)
					break
    case prefix+'burning':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                     var imgbb = require('imgbb-uploader')
                     if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                     ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                      reply(mess.wait)
                     owgi = await caliph.downloadAndSaveMediaMessage(ger)
                     anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                     reply(mess.wait)
                     try {
                     pp = `https://api.vhtear.com/burning_fire?link=${anu.display_url}&apikey=${vkey}`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('burning.gif', datae, 'base64')
                     res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'burning.gif')
                     ranp = getRandom('.gif')
                     rano = getRandom('.webp')
                     exec(`wget ${res.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                             //fs.unlinkSync(ranp)
                             if (err) return reply(mess.error.stick)
                             pps = fs.readFileSync(rano)
                             caliph.sendMessage(from, pps, sticker, {quoted: msg})
                             //fs.unlinkSync(rano)
                             limitAdd(sender)
                            })
                    } catch(e) {
                       reply(`Error!`)
                       }
                       }

addFilter(sender)
					break
case prefix+'sider':
      if (!isGroup) return 
      if (!m.quoted.fromMe) return reply('Reply Pesan Bot')
      infom = await caliph.messageInfo(from, m.quoted.id)
      hemm = infom.reads
      readdin = hemm.map(v => v.jid)

      stamp = hemm.map(v => v.t)
    function toTime(UNIX_timestamp, ribuan){
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }
 
  //buat index bulan
  var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

  // ambil pecahan waktu masing-masing
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  // gabungkan ke dalam variable time
  var time = hour + ':' + min + ':' + sec ;
  return time;
}
      teksx = `Wayoloh, ngeread mulu :\n`
hiks = 0
      for (let i of hemm) {
hiks += 1
      teksx += `~> @${i.jid.split('@')[0]} > ${toTime(i.t, true)}\n`
      }
      caliph.sendMessage(from, teksx, text, { contextInfo: { mentionedJid: readdin }})
      break
    case prefix+'restart':
    if (!isOwner) return reply( mess.only.ownerB, msg)
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    await reply('Wait, Sedang Merestart Bot!')
    await exec('rm -f media/**')
    await process.send('reset')
    addFilter(sender)
					break
   case prefix+'addlevel':
   if (!isOwner) return reply(mess.only.ownerB)
  try {
  ngetag = `${args[0].slice(1)}@s.whatsapp.net`
    await addLevelingLevel(args[0].slice(1)+'@s.whatsapp.net', args[1])
   caliph.sendMessage(from, `Sukses menambahkan level @${args[0].slice(1)}`, text, {contextInfo: {"mentionedJid": [ngetag]}})
   } catch {
   reply('Error!')}
  addFilter(sender)
					break
   case prefix+'addxp':
   if (!isOwner) return reply(mess.only.ownerB)
  try {
  ngetag = `${args[0].slice(1)}@s.whatsapp.net`
   await addLevelingXp(args[0].slice(1)+'@s.whatsapp.net', args[1])
   caliph.sendMessage(from, `Sukses menambahkan XP @${args[0].slice(1)}`, text, {contextInfo: {"mentionedJid": [ngetag]}})
   } catch {
   reply('Error!')}
   addFilter(sender)
					break
   case prefix+'tag':
   case prefix+'mention':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					texxt = args.join(' ')
   caliph.sendMessage(from, texxt, text, {
   quoted: msg,
    contextInfo: {
      mentionedJid: caliph.parseMention(texxt)
    }
  })
   addFilter(sender)
					break
   case prefix+'profile': case prefix+'me':
   bio = (await caliph.getStatus(sender)).status
  pcard = 'BEGIN:VCARD\n' // metadata of the contact card
					+ 'VERSION:3.0\n' 
					+ `FN:${pushname}\n` // full name
					+ `TEL;type=CELL;type=VOICE;waid=${(sender.split('@')[0])}:${(sender.split('@')[0])}\n` // WhatsApp ID + phone number
					+ `ORG:${bio};\n`
					+ 'END:VCARD'
   str = `
Name: ${pushname} (@${sender.split`@`[0]})
ID: ${sender.split`@`[0]}@c.us
Bio = ${bio}
Link: https://wa.me/${sender.split`@`[0]}
Level: ${getLevelingLevel(sender)}
Xp: ${getLevelingXp(sender)}
Limit: ${getLimit(sender)}
`.trim()
try {
ppUrl = await caliph.getProfilePicture(sender) 
pp = await getBuffer(ppUrl)
} catch {
pp = await fs.readFileSync('./lib/avatar_contact.png')
}
hadeh = await caliph.sendMessage(from, pp, image, {caption: str, quoted:msg, contextInfo: {"mentionedJid": [sender]}})
caliph.sendMessage(from, {displayname: "Caliph", vcard: pcard}, contact, { quoted: hadeh })
addFilter(sender)
					break
    case prefix+'film':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
		data = await fetchJson(`https://api.zeks.xyz/api/film?q=${args.join(' ')}&apikey=${zekskey}`)
		teks = '\n'
		for (let i of data.result) {
		teks += `Judul: ${i.title}\nLink: ${i.url}`
		}
		buffs = await getBuffer(data.result[0].thumb)
		caliph.sendMessage(from, buffs, image, {quoted: msg, caption: teks}) 		
limitAdd(sender)
		addFilter(sender)
					break
    case prefix+'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg ,duration:99999999999999})
						fs.unlinkSync(ran)
					   })
				       addFilter(sender)
					break 
    case prefix+'getjodoh':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)

if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)

                    up = user

                    aku = up[Math.floor(Math.random() * up.length)];

                    pcard = 'BEGIN:VCARD\n' // metadata of the contact card
					+ 'VERSION:3.0\n' 
					+ `FN:${getName(aku)}\n` // full name
					+ `TEL;type=CELL;type=VOICE;waid=${(aku.split('@')[0])}:${(aku.split('@')[0])}\n` // WhatsApp ID + phone number
					+ 'END:VCARD'

                 caliph.sendMessage(from, {displayname: "Caliph", vcard: pcard}, contact, {quoted:msg})
limitAdd(sender)
                    addFilter(sender)
					break
    case prefix+'partytext':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
	if (args.length < 1) return reply('Teksnya apa kak?')
    sendImgFromUrl(`https://api.vhtear.com/partytext?text=${args.join(' ')}&apikey=${vkey}`, 'Done!')
    limitAdd(sender)
    addFilter(sender)
					break
   case prefix+'galaxtext':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('mau apa om')
					teks = args.join(' ')
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=${vkey}`)
					caliph.sendMessage(from, buffer, image, {quoted: msg})
					limitAdd(sender)
					addFilter(sender)
					break
     case prefix+'igvid':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
     try {
     data = await fetchJson(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${zekskey}`)
     buffer = await getBuffer(data.result.url)
     reply(mess.wait)
     caliph.sendMessage(from, buffer, video, {quoted:msg, mimetype: 'video/mp4'})
     limitAdd(sender)
     } catch {
     reply('Error!')
     }
     addFilter(sender)
					break
   case prefix+'cpu':
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   timestamp = speed();
latensi = speed() - timestamp
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString('utf-8')
teks = child.replace(/Memory:/, "Ram:")
caliph.sendMessage(from, `*CPU!!!*\n${teks}Speed: ${latensi.toFixed(4)} _Second_`, text, {quoted: msg})
})
					addFilter(sender)
					break 
					case prefix+'limit':
					if (isPremium) return reply(`Sisa limit request anda tersisa : *Unlimited*\n\n_Note : Limit akan direset setiap jam 21:00!_`)
            var found = false
            limidat = JSON.parse(fs.readFileSync('./src/msgLimit.json'))
            for(let lmt of limidat){
                if(lmt.id === sender){
                    let limitCounts = limitCount-lmt.limit
                    if (limitCounts <= 0) return reply(`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`)
                    reply(`Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${sender}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./src/msgLimit.json',JSON.stringify(limit, 1));
                reply(`Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`)
            }
            addFilter(sender)
					break
       case prefix+'game1':
       buah = ['🍊','🍒','🍐'] // Versi Simpel
          satu = buah[Math.floor(Math.random() * (buah.length))]	
          dua = buah[Math.floor(Math.random() * (buah.length))]	
          tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga){
	reply(`😁KAMU MENANG😁

${satu} - ${dua} - ${tiga}

`)
	} else {
		reply(`😭Kamu Kalah😭

${satu} - ${dua} - ${tiga}
`)
		}
		addFilter(sender)
					break
case prefix+'game2':
       buah = ['✅','❌',] // Versi Simpel
          satu = buah[Math.floor(Math.random() * (buah.length))]	
          dua = buah[Math.floor(Math.random() * (buah.length))]	
          tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga){
	reply(`KAMU MENANG

${satu} - ${dua} - ${tiga}

`)
	} else {
		reply(`Kamu Kalah

${satu} - ${dua} - ${tiga}
`)
		}
		addFilter(sender)
					break
case prefix+'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwner) return reply('Perintah ini hanya untuk Owner bot')
            for (let gclist of groupall) {
            await delay(3000)
                await sendMess(gclist, `Maaf bot sedang pembersihan, total chat aktif : ${groupall.length}`).then(() => caliph.groupLeave(gclist))
            }
            reply('Success leave all group!')
            addFilter(sender)
					break
    case prefix+'fetch':
    var util = require('util')
    teks = args.join(' ')
    res = await fetch(teks)
  if (!/text|json/.test(res.headers.get('content-type'))) return caliph.sendFile(from, teks, 'file', '', msg)
  txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
    addFilter(sender)
					break
   case prefix+'waifu':
   if (isLimit(sender)) return 
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
   data = await fetchJson('https://waifu.pics/api/sfw/waifu')
   sendImgFromUrl(data.url) 
   limitAdd(sender)
   addFilter(sender)
					break
  case prefix+'epep':
  case prefix+'freefire':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
  data = 'https://api.lolhuman.xyz/api/ephoto1/freefire?text='+args.join(' ')+'&apikey='+setting.lol
  sendImgFromUrl(data, '')
  limitAdd(sender)
  addFilter(sender)
					break
					case prefix+'carbon':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
  data = 'https://api.lolhuman.xyz/api/carbon?code='+args.join(' ')+'&apikey='+setting.lol
  sendImgFromUrl(data, '')
  limitAdd(sender)
  addFilter(sender)
					break
   case prefix+'translate':
  translate(args.slice(1).join(' '), {tld: 'cn', to: args[0]}).then(res => {
            caliph.sendMessage(from, `${res.text}`, text, {quoted: msg})
            console.log(res)
        }).catch(err => {
            sendMess(from, `ERROR | ${err}`);
        });
   addFilter(sender)
					break
   case prefix+'barcode':
   try {
   reply(mess.wait)
   sendImgFromUrl(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${args.join(' ')}`)
   } catch {reply('Error!')}
   addFilter(sender)
					break
   case prefix+'tiktok2':
   data = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=a72abb5d0420ef3e`)
   base64 = await toBase64(data.result.cover)
   teks = '*「 TIKTOK DOWNLOADER 」*\n\n'
   caliph.sendMessage(from, await getBuffer(data.result.url_nwm || data.result.url), video, { quoted: msg, thumbnail: base64, caption: teks+data.result.caption })
   addFilter(sender)
					break
case prefix+'buylimit':
				payout = args[0]
				koinPerlimit = 320
				total = koinPerlimit * payout
				if ( getLevelingXp(sender) >= total ) {
					confirmLimit(sender, total)
					bayarLimit(sender, payout)
					totalpayout = getLevelingXp(sender) - total
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\npengirim : Admin\npenerima : ${pushname}\nnominal pembelian : ${payout} \n harga limit : ${koinPerlimit} / limit\n xp mu : ${getLevelingXp(sender)}\nSisa xp ${totalpayout}\n\nproses berhasil dengan nomer pembayaran`)
				} else {reply(`xp kamu belum mencukupi untuk membeli ${payout} limit!`)}
				addFilter(sender)
					break
    case prefix+'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				lb_id = []
                leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                nrmp = 0
                    for (let i = 0; i < _level.length; i++) {
                        nrmp++
                        leaderboardlvl += `*[${nrmp}]* @${_level[i].jid.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        lb_id.push(_level[i].jid)
                    }
                    await caliph.sendMessage(from, leaderboardlvl, text, {contextInfo: { mentionedJid: lb_id }})
				addFilter(sender)
					break
      case prefix+'tahta2':
      await reply(mess.wait)
      caliph.sendMessage(from, await ht(args.join(' ')), image, {quoted:msg, caption: '#Caliph Bot\nMake with ffmpeg'})
addFilter(sender)
					break
     case prefix+'afk':
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (isLimit(sender)) return reply('Limit lu abis tod')
				if (isBanned) return reply(mess.only.benned)
				if (isAfkOn) return reply(`Anda sudah afk sejak ${getAfkTime(sender, _afk)} WIB\n*Alasan:* ${getAfkReason(sender, _afk)}`)
				reson = body.slice(5) || 'Tanpa Alasan'
				addAfkUser(sender, reson)
				reply(`*${pushname}* kini sedang afk!!\n\n*Alasan:* ${reson}\n*Sejak:* ${time} WIB`)
				limitAdd(sender)
				addFilter(sender)
					break
         case prefix+'up':
         if (!isOwner) return reply(mess.only.ownerB)
         try {
         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
         owgi = await caliph.downloadAndSaveMediaMessage(ger, `./gambar/${args.join(' ')}`)
         reply('Berhasil Menyimpan File!')
         } catch (f) {
         reply('gagal kak!')
         conn.logger.error(f)
         }
         addFilter(sender)
					break
         case prefix+'get':
         if (!isOwner) return reply(mess.only.ownerB)
         try {
         sendImgFromUrl('./gambar/'+args.join(' '))
         } catch {
         reply('Error!')
         }
         addFilter(sender)
					break
case prefix+'cekwarna':
				if (!isUser) return reply(mess.only.userB)
				//if (isLimit(sender)) return reply(mess.limit)
		//	if (!isOwner) return reply(mess.only.ownerB)
						const comen = 'magick -size 480x480 gradient:'+args.join(' ')+'-'+args.join(' ')+' default.png'
						exec(comen, (err, stdout) => {
							if(err) return caliph.sendMessage(from, "Error Mank", text, { quoted: msg })
							sendImgFromUrl('default.png')
						})
					//limitAdd(sender)
					addFilter(sender)
					break
case prefix+'vibra':
					tels = body.slice(7)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${tels}" ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						caliph.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: msg, ptt:true})
						})
						fs.unlinkSync(ran)
						addFilter(sender)
					break
    case prefix+'addlimit':
                
					if (!isOwner) return reply(`asu`)
                
               var gh = args.join(' ')
				mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				
					var replace = gh.split("|")[0];
					if(mentioned = null) return caliph.reply('Masukkan nomor yang akan di gift limit, /giftlimit NOMOR|Jumlah\n=> Contoh : #giftlimit @tagmember |10')
					var amount = gh.split("|")[1];
					console.log(+[]); //=> 0
					console.log(+''); //=> 0
					console.log(+'   '); //=> 0
					console.log(typeof NaN); //=> 'number'
					if(isNaN(amount)) return reply(`jangan ngelunjak lah pake nomor jing`)
                limitAdd(mentioned)
             let nay = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == mentioned) {
                    nay = i
                }
            })
            if (nay !== false) {
                limit[nay].limit -= `${amount}`
                fs.writeFileSync('./src/msgLimit.json', JSON.stringify(limit))
            }
        
        await reply(`*GIFT LIMIT*\n*Limit: ${amount}*`)
                                        
					
                                        
                                                
                                        
                                        addFilter(sender)
					break
case prefix+'reverb':
					tels = args.join(' ')
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "aecho=0.8:0.9:40|50|70:0.4|0.3|0.2" ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						caliph.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: msg, ptt:true})
						})
						fs.unlinkSync(ran)
						addFilter(sender)
					break
                  case prefix+'nowm':
                  		encmedia2 = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						medias = await caliph.downloadAndSaveMediaMessage(encmedia2)
                          if (!isQuotedSticker) return reply('� reply stickernya um �')                      
						ran = getRandom('.webp')
					exec(`ffmpeg -i ${medias} ${ran}`, (err) => {
						fs.unlinkSync(medias)
						if (err) return reply('� Gagal menghapus watermark �')
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, sticker, {quoted: msg})
						fs.unlinkSync(ran)
						limitAdd(sender)
					})
							addFilter(sender)
					break
     case prefix+'blur':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                 //   if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf tmix=frames=8:weights="1 1 1 1 1 1 1 1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
				case prefix+'negativegreen':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                  //  if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrance=intensity=-2:gbal=10" -pix_fmt yuv420p ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
				case prefix+'hapusaudio':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                   // if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -an -vcodec copy ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
              case prefix+'speed':
              reply(`*Speed :* ${processTime(chat.t, moment())} _second_`)
              addFilter(sender)
					break
              case prefix+'cbass':
					bass = body.slice(7)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=100:width_type=o:width=2:g=${bass}/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
        case prefix+'volume':
					tels = body.slice(8)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${tels}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
			case prefix+'kecepatan':
					tels = body.slice(11)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=${tels}" -vn ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
			case prefix+'distord':
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=26:width_type=o:width=2:g=34 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
        case prefix+'karoke':
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af pan="stereo|c0=c0|c1=-1*c1" -ac 1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						caliph.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
						fs.unlinkSync(ran)
					})
				addFilter(sender)
					break
    case prefix+'passed':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				encmediaP = await caliph.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" 'gambar/respect.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './tmp/passed.png'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Passed'))
					.on('exit', () => {
					caliph.sendMessage(from, fs.readFileSync('./tmp/passed.png'), image, { quoted: msg })
					})
					addFilter(sender)
					break
    case prefix+'sad':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				encmediaP = await caliph.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" 'gambar/sad.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './tmp/sadded.png'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Passed'))
					.on('exit', () => {
					caliph.sendMessage(from, fs.readFileSync('./tmp/sadded.png'), image, { quoted: msg })
					})
					addFilter(sender)
					break
    case prefix+'stickmeme':
				if (!isUser) return reply(mess.daftar)
				if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (isBanned) return reply(mess.only.benned)
				try {
				ger = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				reply(mess.wait)
				owgimbal = await caliph.downloadAndSaveMediaMessage(ger)
				spawn('convert', [owgimbal, '-gravity', 'Center', '-fill', '#ffffff', '-font', './src/font/Digitalt.ttf', '-strokewidth', '5', '-stroke', '#000000', '-resize', '1280x1280', '-pointsize', '230', '-interline-spacing', '7.5', '-annotate', '+0+500', args.join(' ').toUpperCase(), './tmp/stickmeme.png'])
				.on('error', () => reply('Gagal Untuk Membuat!!'))
				.on('exit', () => {
				media = './tmp/stickmeme.png'
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						if (err) return reply('� Gagal, pada saat mengkonversi sticker ke gambar �')
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, sticker, {quoted: msg})
					})
				})
				} catch {
				reply(`Reply sticker dengan tulisan ${prefix}stickmeme teksmu!!`)
				}
				await limitAdd(sender)
				fs.unlinkSync(media)
               fs.unlinkSync(ran)
				addFilter(sender)
					break
      case prefix+'tesbitly':

var headers = {
    'Authorization': 'Bearer {TOKEN}',
    'Content-Type': 'application/json'
};

var dataString = `{ "long_url": ${args[0]}, "domain": "bit.ly", "group_guid": "o_1fsiehs2qu"}`;

var options = {
    url: 'https://api-ssl.bitly.com/v4/bitlinks',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

ngetes = await request(options, callback);
reply(`${JSON.stringify(await ngetes)}`)
addFilter(sender)
					break
case prefix+'getses':
				if (isOwner) return reply(mess.only.OwnerB)
				const ses = await caliph.getSnapshot()
				caliph.sendMessage(from, ses, image, {quoted: msg})
				addFilter(sender)
					break
  case prefix+'wiki2':
  data = await fetchJson(`https://id.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${args.join(' ')}`)
  reply(data.query.pages.extract)
  addFilter(sender)
					break
   case prefix+'laptop':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
             var encmedia  = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
           sendImgFromUrl(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${linkimg}`)
           limitAdd(sender)
           addFilter(sender)
					break
case prefix+'gta5':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
             var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
           sendImgFromUrl(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${linkimg}`)
           limitAdd(sender)
           addFilter(sender)
					break
   case prefix+'nightbeach':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
             var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
           sendImgFromUrl(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${linkimg}`)
           limitAdd(sender)
           addFilter(sender)
					break
      case prefix+'raindrop':
   if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
           if (!isUser) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)  
             var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
   
                 linkimg = await uploadimg(buffer, `${sender}_img`)
           sendImgFromUrl(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${linkimg}`)
           limitAdd(sender)
           addFilter(sender)
					break
             default:
             if (!isCmd && isGroup && isSimi && budy != undefined) {
						loaded.push("@caliph91_")
              fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
                          }
                          
                  if ('tes' == body) {
                  reply('tes Di respon')
                  }
                  
        }                 
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

}
starts()
					