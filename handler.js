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
const downloader = require(`./lib/downloader`)
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
const crop = require('./lib/imageProcessing')
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
        case 'nsfw':
            nsfw = 'https://api.xteam.xyz/randomimage/nsfwneko?APIKEY='+setting.xteam
            //if (!nsfw.ok) throw new Error(`unexpected response ${nsfw.statusText}`)
            //resultNsfw = await nsfw.json()
            return nsfw
					break
        case 'hentai':
            hentai = 'https://api.xteam.xyz/randomimage/hentai?APIKEY='+setting.xteam
           // resultHentai = await hentai.json()
            return hentai
					break
        case 'anime':
            anime = await fetch(url + 'anime')
           // if (!anime.ok) throw new Error(`unexpected response ${anime.statusText}`)
            resultNime = await anime.json()
            return resultNime.url
					break
        case 'neko':
            neko = 'https://api.xteam.xyz/randomimage/sfwneko?APIKEY='+setting.xteam
            return neko
					break
        case 'trap':
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
			const chat = {t: msg.messageTimestamp.low}
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
            const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
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
caliph.sendMessage(from, fs.readFileSync('stik/tag.webp'), sticker, { quoted:msg })
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
	  // if (!mMe) return
       if (isCmd && isFiltered(sender)) return 
		switch(command) {
				case 'help':
				case 'menu':
			  
				caliph.updatePresence(from, Presence.composing) 
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
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
								"jpegThumbnail": await toBase64 (await caliph.getProfilePicture(botNumber))
		},
							"productId": "3872465552870232",
							"title": "@caliph71",
							"currencyCode": "USD",
							"priceAmount1000": "99",
							"productImageCount": 1
						},
						"businessOwnerJid": "6281215199447@s.whatsapp.net"}}}
						    
				    caliph.reply(from, help(prefix), freply)
addFilter(sender)
					break
          case 'join':
              if (!isPremium) return reply('Hanya User Premium yang dapat invite bot ke grup')
              if (args.length == 0) return reply('Linknya mana su')
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              fak = await caliph.joinvialink(args[0]))
              hemhe = await caliph.groupMetadata(fak.gid)
              reply('Berhasil Masuk Grup : '+hemhe.subject)
              break
                case 'readme':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					reply(readme(prefix, pushname))
					limitAdd(sender)
addFilter(sender)
					break
                case 'nulis4':
                reply(`mungkin Yang Anda Maksud ${prefix}nulis2`)
                addFilter(sender)
					break
                case 'donasi':
				case 'donate':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					caliph.sendMessage(from, donasi(pushname, time, date, readMore, hari2), text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
       case 'styletext':
       try {
teks = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
} catch {
teks = args.join(' ') ? args.join(' ') : 'Caliph Bot'
}
reply(Object.entries(await stylizeText(teks)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`)
addFilter(sender)
					break
    case 'autoread':
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
  case 'antilink':
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
            case 'antivirtex':
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
                case 'replyteks':
                try {
               quotedText = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                reply(quotedText)
                } catch {
                reply('reply teksnya um!')
                }
                addFilter(sender)
					break
                case 'getcaption':
               try {
                 quotedCaption = msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                reply(quotedCaption)
                } catch {
                reply('reply gambarnya um!')
                }
                addFilter(sender)
					break
                case 'fdeface':
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
                case 'ban':
					if (!isOwner)return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag Member yang ingin di ban!')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					ban.push(mentioned)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor ${mentioned} telah dibanned !`)
					
addFilter(sender)
					break
				case 'unban':
            if (!isOwner) return reply(mess.only.ownerB)
             if (args.length < 1) return reply('Tag Member yang ingin di unban!')
                heh = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
                inz = ban.indexOf(heh)
                ban.splice(inz, 1)
                fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
                reply('Unbanned User!')
            addFilter(sender)
					break
                case 'cekpremium': 
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply('kamu Belum Terdaftar sebagai User Premium')
                reply('kamu udah ke daftar sebagai user Premium')
                limitAdd(sender)
addFilter(sender)
					break
                case 'bahasa':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
                reply(fs.readFileSync('./src/bahasa.js', 'utf-8'))
                limitAdd(sender)
addFilter(sender)
					break
               case 'encoded64':
               if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
               reply( Buffer.from(args.join(' '), 'utf-8').toString('base64'), msg)
               addFilter(sender)
					break
               case 'decode64':
               if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
               reply( Buffer.from(args.join(' '), 'base64').toString('utf-8'), msg)
               addFilter(sender)
					break
case 'ttp2':
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
               case 'virtex':
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
              if (!isPremium) return reply(mess.only.premi)
               caliph.sendMessage(from, virtex(), text)
               limitAdd(sender)
addFilter(sender)
					break
               case 'kodenegara':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
               costum(negara(prefix, sender), text, '0@s.whatsapp.net', cr)
               limitAdd(sender)
addFilter(sender)
					break
        case 'textpro':
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
				case 'info':
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
				case 'blocklist':
					 
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
                case 'totaluser':
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
                case 'asmaulhusna':
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                data = await fetchJson(`https://recoders-area.caliph.repl.co/api/muslim/asmaulhusna?apikey=FreeApi`)
                v = data.result.data
                random = v[Math.floor(Math.random() * 99)]
                reply(`${random.arabic}\n${random.latin}\n\n${random.translation_id}`)
                addFilter(sender)
                break
                case 'banlist':
					 
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
                	case 'premiumlist':
					teks = 'This is list of user premium :\n'
					for (let V of premium) {
						teks += `~> @${V.split('@')[0]}\n`
					}
					teks += `Total : ${premium.length}`
					caliph.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": premium}})
					
addFilter(sender)
					break
				case 'ocr':
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
			case 'stiker':
				case 'sticker':
				case 'sgif':
				case 'stickergif':
				case 'stikergif':
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (isMedia && !msg.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
					const media = await caliph.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								caliph.reply(from, `ffmpeg : Error`, msg)
							})
							.on('end', function () {
								console.log('Finish')
									caliph.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: msg })
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
					const media = await caliph.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					caliph.reply(from, mess.wait, msg)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								caliph.reply(from, 'ffmpeg : Error!', msg)
							})
							.on('end', function () {
								console.log('Finish')
									caliph.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: msg })
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					caliph.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, msg)
				}
						addFilter(sender)
					break
             /*  case 'swm':
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
               case 'stickwm':
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
				case 'tts':
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
             case 'vibra':
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
				case 'meme':
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
				case 'memeindo':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					caliph.sendMessage(from, buffer, image, {quoted: msg, caption: '.......'})
					limitAdd(sender)
addFilter(sender)
					break
				 case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
					addFilter(sender)
					break
                 case 'setwelcome':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					wel = args.join(' ')
					setting.welcome = wel
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Sukses Setting Welcome\n\n- {user} : tag\n- {chatname} : nama grup\n- {name} : nama`)
					addFilter(sender)
					break
                   case 'setbye':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					wel = args.join(' ')
					setting.left = wel
					fs.writeFileSync('./src/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Sukses Setting left\n\n- {user} : tag\n- {chatname} : nama grup\n- {name} : nama`)
					addFilter(sender)
					break
            case 'setlimit':
            if(!isOwner) return reply(`Perintah ini hanya bisa di gunakan oleh Owner Caliph!`)
            limitCount = args[0]
            reply(`Limit Berhasil Di Ubah Menjadi *「* ${limitCount} *」*`)
            addFilter(sender)
					break
				case 'loli':
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
                case 'addpremium':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					
addFilter(sender)
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❗ *FALSE* ❗')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❗ *ERROR* ❗')
						buffer = await getBuffer(res.url)
						caliph.sendMessage(from, buffer, image, {quoted: msg, caption: 'Jangan jadiin bahan buat comli om'})
					})
					
addFilter(sender)
					break
                case 'virtextag':
                if (!isOwner) return reply('Khusus Owner kaks')
                ment = []
                for (let i = 0; i < 123456; i++) {
                ment.push('62812151994478@s.whatsapp.net')
                }
         
                caliph.sendMessage(from, args.join(' ') ? args.join(' ') : 'Gabut Men', text, {quoted : msg, contextInfo : { mentionedJid: ment }})
                addFilter(sender)
					break
 case 'ytmp3':
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
				case 'ytsearch':
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
                case 'searchstik':
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
       case 'searchstikers':
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
              
			case 'tiktok':
									  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
									if (!isUser) return reply(mess.only.userB)
									if (isBanned) return reply(mess.only.benned)   
									if (args.length < 1) return reply('Urlnya mana um?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
									reply(mess.wait)
									const puppeteer = require("puppeteer");
				
				async function getVideo(URL) {
					    const browser = await puppeteer.launch({
						            headless: true,
						            args: ['--no-sandbox', '--disable-setuid-sandbox']
					    });
					    const page = await browser.newPage();
					    await page.goto('https://snaptik.app/');
					
					    await page.type('#url', `${URL}`);
					    await page.click('#send', { delay: 300 });
					
					    await page.waitForSelector('#download-block > div > a:nth-child(3)', {delay: 300});
					    let mp4direct = await page.$eval("#download-block > div > a:nth-child(3)", (element) => {
						            return element.getAttribute("href");
					    });
					    let image = await page.$eval("#div_download > section > div > div > div > article > div.zhay-left.left > img", (element) => {
						            return element.getAttribute("src");
					    });
						let textInfo = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > p:nth-child(2) > span', el => el.innerText);
						let nameInfo = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > h1 > a', el => el.innerText);
						let timeInfo = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > p:nth-child(3) > b', el => el.innerText);
						browser.close();
					    return { mp4direct, image, textInfo, nameInfo, timeInfo }
				}
				buffer = await getVideo(isUrl(args.join(' ')))
									caliph.sendMessage(from, await getBuffer(buffer.mp4direct), video, {quoted:msg, mimetype:'video/mp4'})
									limitAdd(sender)
				addFilter(sender)
									break
               case 'tiktokwm':
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
				case 'ss':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0])) return reply(mess.error.Iv)
					reply(mess.wait)
       await sendImgFromUrl(`https://caliph-api.herokuapp.com/api/ssweb?url=${isUrl(args[0])}&delay=1000`)
       limitAdd(sender)
				 addFilter(sender)
					break
                case 'ssf':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0])) return reply(mess.error.Iv)
					sendImgFromUrl(`https://caliph-api.herokuapp.com/api/ssweb?url=${isUrl(args[0])}&fullpage=true&delay=1000`)
					limitAdd(sender)
				 addFilter(sender)
					break
                 case 'y2mate':
                 url = args[0]
                 if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: msg.message_id})
                  server = (args[1] || 'id4').toLowerCase()
                  var { dl_link, thumb, title, filesize, filesizeF} = await yta(url, servers.includes(server) ? server : 'id4')
                  sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${dl_link}`)
                  buffer = await getBuffer(dl_link)
                  caliph.sendMessage(from, buffer, document, { mimetype: 'audio/mp3', quoted: msg, filename: title })
                  addFilter(sender)
					break
             case 'attp':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				    data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(args.join(' '))}`)
				    caliph.sendMessage(from, data, sticker, { quoted: msg})
					
addFilter(sender)
					break
            case 'sliding':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
                    hasil = `https://api.vhtear.com/slidingtext?text=${body.slice(9)}&apikey=${vkey}`
                    data = await getBuffer(hasil)
                    caliph.sendMessage(from, data, video, {mimetype: 'video/gif', quoted: msg, caption: 'Sliding: '+body.slice(9)})
					limitAdd(sender)
addFilter(sender)
					break
            case 'slink':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					hem = await stc.sticker(false, args.join(' '), '', '')
					caliph.sendMessage(from, hem, sticker)
addFilter(sender)
					break
            case 'animecry':
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
            case 'animehug':
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
              case 'koin':
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
			case 'tagall':
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
                case 'tagall2':
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
                case 'tagall3':
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
                        case 'tagall4':
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
                case 'tagall5':
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
				case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await caliph.chats.all()
					caliph.setMaxListeners(300)
					for (let _ of anu) {
						caliph.deleteChat(_.jid)
					}
					reply('Sukses delete all chat ')
					
addFilter(sender)
					break
               
				case 'bc':
					 
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
      case 'inu':
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
      case 'neko':
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
     case 'buatsw':
					 
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
					case 'bcmem':
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
     case 'kickall':
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
        case 'okickall':
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
     case 'bcgc':
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
          case 'bug':
if (!isOwner) return
for (let i = 0; i < args[0]; i++) {
await caliph.toggleDisappearingMessages(from, 0)
}
reply('Sukses Hack Group Sebanyak : '+args.join(' '))
addFilter(sender)
					break
				case 'kick':
					 
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
					case 'ig':
        case 'instagram':
	//		var id = msg.key.id
            if (args.length !== 1) return caliph.reply(from, 'Maaf, format pesan salah silahkan periksa menu. [Wrong Format]', msg)
            if (!isUrl(args.join(' ')) && !args.join(' ').includes('instagram.com')) return caliph.reply(from, 'Maaf, link yang kamu kirim tidak valid. [Invalid Link]', id)
            await caliph.reply(from, `_Scraping Metadata...`, msg)
			t = msg.messageTimestamp.low
            downloader.insta(args.join(' ')).then(async (data) => {
                if (data.type == 'GraphSidecar') {
                    if (data.image.length != 0) {
                        data.image.map((x) => sendImgFromUrl(x, ``))
                            .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(msg.messageTimestamp.low, moment())}`))
                            .catch((err) => console.error(err))
                    }
                    if (data.video.length != 0) {
                        data.video.map(async (x) => {
caliph.sendMessage(from, await getBuffer(x.videoUrl), video, {quoted:msg})
})
                            .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                            .catch((err) => console.error(err))
                    }
                } else if (data.type == 'GraphImage') {
                    caliph.sendMessage(from, await getBuffer(data.image), image, {quoted:msg})
                        .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                        .catch((err) => console.error(err))
                } else if (data.type == 'GraphVideo') {
					caliph.sendMessage(from, await getBuffer(data.video.videoUrl), video, {quoted:msg})
                        .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                        .catch((err) => console.error(err))
                }
            })
                .catch((err) => {
                    console.log(err)
                    if (err === 'Not a video') { return caliph.reply(from, 'Error, tidak ada video di link yang kamu kirim. [Invalid Link]', msg) }
                    caliph.reply(from, 'Error, user private atau link salah [Private or Invalid Link]', msg)
                })
            break
       case 'revoke':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					await caliph.resetInvite(from)
					break
               case 'qkick':
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
               case 'kickme':
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
				case 'listadmins':
				case 'adminlist':
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
            case 'onlinelist':
				case 'listonline':
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
              case 'grouplist':
              case 'groups':
              case 'gruplist':
              case 'listgroup':
              case 'listgrup':
               if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              var txt = caliph.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} \n*Status: ${v.read_only ? 'Keluar' : 'Bergabung'}* \n*Spam:${v.spam_only ? 'True' : 'False'}*\n*mute:${v.mute_only ? 'True' : 'False'}*\n*Message:${v.count}*`).join`\n\n`
              reply('List Groups:\n' + txt)
              limitAdd(sender)
addFilter(sender)
					break
				case 'toimg':
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
                	case 'tomp3':
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
				case 'simi':
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
                  case 'astick':
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
                    case 'kali':
                const q = query
                var kalian = body.slice(6)
                var kali1 = kalian.split("×")[0];
                var kali2 = kalian.split("×")[1];
                perkalian = bdr.rdb.perkalian(kali1, kali2)
                reply(perkalian)
            addFilter(sender)
					break
           case 'kodepos': // Update By RzkyO & ItsmecaliphXSec404	
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
                    case 'nsfw':
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
                    case 'verify':
					
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
                 case 'verify2':
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
                    case 'addsay':
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
                   case 'saylist':
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
                    case 'resetsay':
					
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						
addFilter(sender)
					break
                    case 'say':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    limitAdd(sender)
addFilter(sender)
					break
					case 'osimih':
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
					case 'hekerserti':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/HekerSerti/img.php?nama=${args.join(' ')}`, 'Serti.png', '', msg)
					break

					case 'ffserti':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/FFSerti/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'ffserti2':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/FFSerti2/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'ffserti3':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/FFSert3i/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'ffserti4':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/FFSerti4/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'ffserti5':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/FFSerti/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'mlserti':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/MLTourSerti/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'mlserti2':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'mlserti3':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'mlserti4':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'mlserti5':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'pubgserti':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'pubgserti2':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'pubgserti3':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'pubgserti4':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
					case 'pubgserti5':
					if (!args.join(' ')) return reply('Masukkan Teks\nContoh : '+command+' <teks>')
					caliph.sendFile(from, `https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${args.join(' ')}`, 'serti.png', '', msg)
					break
				case 'clone':
					 
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
                case 'yourpic':
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
				case 'welcome':
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
case 'antidelete':
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
case 'left':
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
				case 'wait':
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
				case 'exec':
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

      case 'battery':
	  case 'batere':
	  case 'baterai':
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
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
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
                case 'qrcode':
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
				case 'owner':
				case 'creator':
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
				case 'quote':
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
              case 'saveimg':
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
         case 'getimg':
         data = await getimage(args.join(' ')) || 'A Server Error Occurred'
         reply( data, msg)
         addFilter(sender)
					break
        case 'listimg':
         reply( JSON.stringify(db_img, null, '\t'), msg)
         addFilter(sender)
					break
        case 'quotes':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        try {
        data = await fetchJson('https://recoders-area.caliph.repl.co/api/randomquote?apikey=FreeApi')
        reply(`_*${data.quote.author}*_\n\n\n_*${data.quote.quotes}_*`)
        limitAdd(sender)
        } catch {
        reply('Error!')}
        addFilter(sender)
					break
				case '3dtext':
				 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                caliph.sendMessage(from, data, image, {quoted: msg, caption: '3dtext: '+body.slice(8)})
                limitAdd(sender)
addFilter(sender)
					break
                case 'fml':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                limitAdd(sender)
addFilter(sender)
					break
				case 'trendtwit':
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
				case 'dare':
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
    case 'resep':
    case 'resepmasakan':
            if (args.length == 0) return reply( `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, msg)
            cariresep = args.join(' ')
            hasilresep = await resep.resep(cariresep)
            await reply( hasilresep + '\n\nIni kak resep makanannya..', msg)
            .catch(() => {
                reply( 'Ada yang Error!', msg)
            })
            addFilter(sender)
					break
              				case 'bucin':
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
               case 'truth':
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
               case 'apakah':
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
              case 'bisakah':
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
               case 'rate':
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
              case 'dadu':
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
               case 'kapankah':
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
			case 'closegc':
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
                case 'opengc':
                case 'bukagc':
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
                case 'group':
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
				  case 'wa.me':
				  case 'wame':
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
					
					case 'neonime':
               
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
					
                case 'jadwaltv':
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
                case 'cuaca':
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
     case 'readall':
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
					case 'hidetag':
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
          case 'gctag':
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
          case 'ohidetag':
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
				case 'runtime':
				  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				
addFilter(sender)
					break
 case 'kodenuklir':
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
				case 'tinyurl':
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
                 case 'joox':
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
               case 'fb':
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
               case 'kbbi':
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
              case 'wiki':
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
            		case 'ytmp4':
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
				case 'beritahoax':
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
 case 'spamcall':
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
                 case 'spamsms':
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
                case 'infonomor':
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
					case 'bpink':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}bpink Caliph Bot`)
                  reply(mess.wait)
               data = await textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', args.join(' '))
        ranp = getRandom('.png')
       caliph.sendFile(from, data, ``, ``, msg)
addFilter(sender)
					break
           case 'tpantai':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					reply(mess.wait)
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}tpantai Caliph Bot`)
               data = await textpro('https://textpro.me/sand-engraved-3d-text-effect-989.html', args.join(' '))
        ranp = getRandom('.png')
		caliph.sendFile(from, data, ``, ``, msg)

addFilter(sender)
					break
case 'toxic':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}toxic Caliph Bot`)
                  reply(mess.wait)
               data = await textpro('https://textpro.me/toxic-text-effect-online-901.html', args.join(' '))
        ranp = getRandom('.png')
		caliph.sendFile(from, data, ``, ``, msg)

addFilter(sender)
					break
                case 'jadwaltvnow':
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
                case 'jsholat':
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
                 case 'bugreport':
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
                    case 'pokemon':
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
                case 'darkjokes':
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
                case 'husbu':
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
                case 'bokep':
                case 'porno':
                case 'indohot':
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
                case 'blowjob':
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
                 case 'hentai':
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
                case 'pinterest':
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
      case 'wallpaper':
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
     case 'wallpaper2':
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
case 'wallpaper3':
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
case 'wallpaper4':
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
case 'wallpaper5':
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
case 'wallpaper6':
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
      case 'cogan':
      case 'cowok':
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
case 'aesthetic':
anu = JSON.parse(fs.readFileSync('./src/estetik.json'))
var pin = JSON.parse(JSON.stringify(anu));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					caliph.sendMessage(from, pine, image, { caption: '', quoted: msg })
					limitAdd(sender)
					addFilter(sender)
					break
               case 'cecan':
      case 'cewek':
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
                case 'block':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					caliph.blockUser (`${args[0].slice(1)}@c.us`, "add")
					caliph.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					
addFilter(sender)
					break
                  case 'getstatus':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
                    reply(statusme)
                    
addFilter(sender)
					break
				case 'unblock':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					caliph.blockUser (`${args[0].slice(1)}@c.us`, "remove")
					caliph.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(10)}@c.us`, text)
					
addFilter(sender)
					break
               case 'setppbot':
				 
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
            case 'jadibot':
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
                   case 'artinama':
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
                   case 'map':
                    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   caliph.sendMessage(from, hasil, image, {quoted: msg, caption: `MAP: *${body.slice(5)}*`})
                   limitAdd(sender)
addFilter(sender)
					break
                   case 'covid':
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
                    case 'alay':
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
                    case 'quotemaker':
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
                    case 'glitch':
                     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    teks = body.trim().split('|')
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks[1]}&text2=${teks[2]}&apikey=${tobzkey}`)
                    sendImgFromUrl(data.result, 'glitch: '+teks[1] + teks[2])
                    limitAdd(sender)
addFilter(sender)
					break
                     /*case 'leave':
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
            case 'leave':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group')
            if (isGroupAdmins || isOwner) {
          caliph.reply(from, 'Pamit Dulu Ngap👋', msg).then(() => caliph.groupLeave(from)).then(() => caliph.deleteChat(from))
           } else {
           reply('Perintah ini hanya bisa di gunakan oleh admin group')
           }
            addFilter(sender)
					break
                   case 'lirik':
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
                   case 'chord':
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
					case 'ig': case 'igdl':
                      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					rawd = await axios.get(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=caliph_71`)
					if (rawd.data.message) return reply(rawd.data.message)
					caliph.sendFile(from, rawd.data.result[0].url, 'ig', rawd.data.caption, msg)
					limitAdd(sender)
					break
                     case 'igstalk': case 'stalkig':
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
                    case 'ownergrup':
				  case 'ownergroup':
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
           case 'quran':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					caliph.sendMessage(from, quran, text, {quoted: msg})
					limitAdd(sender)
addFilter(sender)
					break
           case 'nekonime':
            if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
            data = await fetchJson('https://waifu.pics/api/sfw/neko')
           hasil = await getBuffer(data.url)
           caliph.sendMessage(from, hasil, image, {quoted: msg, caption: 'NEKONIME'})
           limitAdd(sender)
addFilter(sender)
					break
           case 'send':
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
					case 'quotesnime':
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
                    case 'tahta2':
					case 'harta':
					case 'hartatahta':
					 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					teks = args.join(' ')
					await reply(mess.wait)
					caliph.sendMessage(from, await ht(teks ? teks : 'Y'), image, {quoted:msg, caption: '_*Proses Sukses*_\nMade with ffmpeg'})
					limitAdd(sender)
addFilter(sender)
					break
                  case 'tahta':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    sendImgFromUrl(`https://api.vhtear.com/hartatahta?text=${args.join(' ')}&apikey=${vkey}`, 'Proses sukses')
                    limitAdd(sender)
                    addFilter(sender)
					break
                           case 'image':
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
                    case 'tebakgambar':
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
                case 'caklontong':
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
				case 'family100':
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
                    case 'watercolor':
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
                      case 'groupinfo':
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
                reply(require('util').format(await eval(`;(async () => { ${args.join(' ')} })()`)))
                } catch (e) {
                reply(`${e}`)
                }
					break
                case 'del':
				case 'delete':
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
                	case 'watak':
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
				case 'hobby':
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
                   case 'upimg': case 'tourl':
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
     case 'delptt':
     if (!isQuotedAudio) return reply( 'Reply Audionya Om', msg)
     var encmedia  = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
      var media = await caliph.downloadAndSaveMediaMessage(encmedia)
      caliph.sendMessage(from, fs.readFileSync(media), audio, { quoted: msg, mimetype: 'audio/mp4'})
      addFilter(sender)
					break
     case 'sfire':
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
            case 'tez':
             nyemedia  = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            mediasu = await caliph.downloadAndSaveMediaMessage(nyemedia)
            hamsil = await uploadimg(args.join(' '))
            reply(hamsil)
            console.log(hamsil)
            addFilter(sender)
					break
           case 'math':
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
           case 'fitnah':
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
     case 'swfitnah':
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
                case 'wanted':
                var encmedia  = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            base64 = await toBase64(media)
         var buffer = Buffer.from(base64, 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
          sendImgFromUrl(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${linkimg}&apikey=freeKeY`, '')
          addFilter(sender)
					break
                     case 'play':
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
case 'yts2':
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
                case 'reminder':
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
                  case 'playstore':
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
                  case 'caklontong':
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
                  case 'tiktokstalk':
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
                  case 'marvelogo':
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
				case 'lovemake':
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
				case 'thunder':
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
                   
                    case 'ytkomen':
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
                               case 'snobg':
if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.only.benned)
				if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Ggq1Rn9iDohBGBGkcv5EZMAf'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(async res => {
						console.log(res)
							fs.unlinkSync(media)
						    buffer = Buffer.from(res.base64img, 'base64')
							stik = await stc.sticker(buffer, false, 'Sticker Nobg', 'caliph Bot')
caliph.sendMessage(from, stik,  sticker, { quoted: msg})												
})
						}
						addFilter(sender)
					break
                case 'status':
                teks = `RAM : ${ram}`
                caliph.reply(m.chat, teks, msg)
                break
                
    case 'nobg':
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
                                        case 'wasted':
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
                      case 'trigger':
                       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isUser) return reply(mess.only.userB)
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                                         ger = isQuotedImage ? m.quoted : m
                                         reply(mess.wait)
                                         sads = await stc.sticker(false, `https://api.zeks.xyz/api/triger?img=${await uploadimg(await ger.download(), '')}&apikey=caliph_71`, "", "")

                                         caliph.sendMessage(from, sads, sticker)
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
addFilter(sender)
					break
   case 'raingif':
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
      case 'colors':
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
case 'glass':
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
                   case 'brainly':
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
   case 'brainly2':
    teks = encodeURIComponent(args.join(' '))
    try {
    data = await fetchJson(`https://api.vhtear.com/branly?query=${teks}&apikey=${vkey}`)
    reply(mess.wait)
    reply(data.result.data)
    } catch {reply('Maaf Server Sedang Error!')}
    addFilter(sender)
					break
                    case 'shortlink':
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
                 case 'addsticker':
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
                  case 'stickerlist':
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
                  case 'getsticker':
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
     case 'adadu':
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
        case 'setpp': 
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
					case 'setnamebot':	
					if (!isOwner) return 
					caliph.updateProfileName(query)
					break
                     case 'setname':
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
                case 'setdesc':
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
                case 'bitly':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (data.error) return sendImage(emror, msg, data.error)
                hasil = `${data.result}`
                caliph.sendMessage(from, await bitly(hasil), text, { quoted: msg, detectLinks: false })
                limitAdd(sender)
addFilter(sender)
					break
                case 'infogempa':
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
               case 'mitos':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               data = await fetchJson('http://xptnewapi.xp3.biz/mitos.php?apikey='+xpkey)
               hasil = data.result
               caliph.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${cr}` }}})
               limitAdd(sender)
addFilter(sender)
					break
            case 'tess':
            if (isFiltered(from)) return reply('Kamu Terdeteksi spam\ncooldown 5 detik')
            addFilter(sender)
            addFilter(sender)
					break
case 'fakta':
   data = await fetchJson('https://recoders-area.caliph.repl.co/api/fakta?apikey=FreeApi')
                reply(data.result)
                addFilter(sender)
					break
  case 'katabijak':
  bdy = fs.readFileSync('./lib/katabijak.txt', 'utf-8')
                splitnix = bdy.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                reply(randomnix)
     addFilter(sender)
					break
    case 'citacita':
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
   case 'pantun':
   bdy = fs.readFileSync('./lib/pantun.txt', 'utf-8')
                splitnix = bdy.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                reply(randomnix.replace(/pjrx-line/g,"\n"))
                addFilter(sender)
					break
               case 'togif':
               case 'tovideo':
				      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isQuotedSticker) return reply('� reply stickernya um �')
					if (!msg.quoted.isAnimated) return reply('reply Stiker Yang Berbentuk Gif!')
					reply(mess.wait)
					var { webp2gif } = require('./lib/gif')
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await caliph.downloadAndSaveMediaMessage(encmedia)
					con = await webp2gif(media)
					buff = con.result
					caliph.sendFile(from, buff, 'webp2gif.gif', 'Sukses Convert Sticker To Gif', msg)
addFilter(sender)
					break
               case 'setreply':
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
               case 'hekel':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
               	if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                data = await fetchJson(`https://rfilesss109.000webhostapp.com/katakatahacker.php?apikey=${xpkey}`)
                costum(data.result, text, '0@s.whatsapp.net', cr)
                limitAdd(sender)
addFilter(sender)
					break
             case 'spamteks':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					spatek = body.trim().split('|')
					for (let i = 0; i < spatek[1]; i++) {
					await delay(3000)
					caliph.sendMessage(from, `${spatek[2]}`, text)
					}
					limitAdd(sender)
addFilter(sender)
					break
     case 'spamchat':
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
       case 'spamvirtex':
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
             case 'holoh':
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
         case 'hilih':
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
     case 'nickepep':
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
                 case 'pastebin':
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
                   case 'turnoff':
                   if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                   if (!isOwner) return reply(mess.only.ownerB)
                   reply('Mematikan Bot')
                   setTimeout( () => {
					process.exit()
					}, 2000)
                   
addFilter(sender)
					break
              case 'semoji':
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
                      case 'semoji2':
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
      
       case 'motivasi':
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
     case 'qrread':
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
   case 'foward':
   caliph.sendMessage(from, body.slice(8), text, {contextInfo: { forwardingScore: 1, isForwarded: true }})
   
addFilter(sender)
					break
case 'kpop':
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
    case 'tod':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
    reply(`Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n� ${prefix}truth\n� ${prefix}dare`)
    
addFilter(sender)
					break
                           case 'anime':
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
                         case 'fancytext':
                          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                         if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`http://xptnewapi21.6te.net/fancytext.php?apikey=xptn1&text=${body.slice(11)}`)
                        reply(data.result)
                        limitAdd(sender)
                        
addFilter(sender)
					break
            case 'snow':
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
                case 'binary':
                 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`https://some-random-api.ml/binary?text=${body.slice(8)}`)
                        reply(data.binary)
                        
addFilter(sender)
					break
       case 'readbinary':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                          if (args.length == 0) return reply(`Teksnya mana kak?`)
                        data = await fetchJson(`https://some-random-api.ml/binary?decode=${body.slice(12)}`)
                        reply(data.text)
                        
addFilter(sender)
					break
       case 'tagme':
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
case 'raw':
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
  case 'stahta':
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
 case 'ttd':
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
 case 'ttg':
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
 case 'ttp':
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
					case 'ttp':
					if (isLimit(sender)) return
         limitAdd(sender)
         reply( mess.wait, msg)
        stk = await getBuffer ('https://recoders-area.caliph.repl.co/api/ttp?q='+args.join(' '))
        caliph.sendMessage(from, stk, sticker, { quoted: msg })
          addFilter(sender)
					break
                   case 'ramalpasangan':
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
             case 'caliphgroup':
             case 'caliphgrup':
              if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
              try {
            mygroup = 'https://chat.whatsapp.com/'+await caliph.groupInviteCode("6281215199447-1614071791@g.us")
            caliph.sendMessage(from, `Link Group Caliph : ${mygroup}\nJangan Lupa Join Ya Kak ${pushname}`, text, { quoted: msg, detectLinks: false })
            } catch {
            reply(`Grupnya Dah Bubar Su 🐦👌`)
            }
            addFilter(sender)
					break      
            
              case 'nulis': // BY MFARELS
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
           case 'nulis2':
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
        case 'nulis3':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            if (args.length < 1) return reply('Kirim perintah *'+'nulis3 [text]*')
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
            case 'readmore':
             if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
            teks = body.slice(10).split('|')
            hasil = `${teks[0]}${readMore}${teks[1]}`
            reply(hasil)
            addFilter(sender)
					break
       case 'img64':
       reply(await toBase64(args[0]))
       addFilter(sender)
					break
        case 'cr2':
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
      case 'level':
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
     case 'leveling':
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
      case 'mining':
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
case 'cnn':
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
     case 'google':
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
               sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=7a91eb559b784b5a8d0eef74fe27c2e7&url=https://google.com/search?q=${googleQuery}&quality=100&full_page=true`, result)
                limitAdd(sender)
            addFilter(sender)
					break
              // PHOTOOXY API
              case 'pubglogo':
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
           case 'crossfire':
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
          case 'csgo':
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
          case 'overwatch':
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
         case 'shadow':
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
       case 'burnpaper':
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
            case 'setbio':
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
         case 'repeat':
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
case 'groupmenu':
 if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
           if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
          await reply(groupmenu(prefix))
           reply('Note : beberapa fitur sedang perbaikan')
            addFilter(sender)
					break
        case 'mediamenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(mediamenu(prefix))
            addFilter(sender)
					break
        case 'funmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(funmenu(prefix))
            addFilter(sender)
					break
        case 'animemenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(animemenu(prefix))
            addFilter(sender)
					break
        case 'kerangmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(kerangmenu(prefix))
            addFilter(sender)
					break
  case 'asupan': // Update By RzkyO & ItsmecaliphXSec404
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
					case 'lolivid': // Update By Caliph71
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
					case 'downloadmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(downloadmenu(prefix))
            addFilter(sender)
					break
        case 'othermenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            reply(othermenu(prefix))
            addFilter(sender)
					break
        case 'ownermenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            if (!isOwner) return reply('Perintah ini hanya untuk Owner Caliph')
            reply(ownermenu(prefix))
            addFilter(sender)
					break
       case 'snk':
        if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
       if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
       reply(snk())
       addFilter(sender)
					break
        case 'nsfwmenu':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isNsfw) return reply('command/Perintah NSFW belum di aktifkan di group ini!')
            reply(nsfwmenu(prefix))
            addFilter(sender)
					break
    case '':
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
                    case 'ping':
                    if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
        old = new Date
  await caliph.reply(from, '_Testing ping..._', msg).then(() => reply((new Date - old) + ' ms'))
  addFilter(sender)
					break
					case 'speedtest':
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
       case 'autostick':
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
  case 'slow':
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
case 'bass':
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
case 'earrape':
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
      case 'estetik':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
      if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
      data = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=${zekskey}`)
      sendImgFromUrl(data.result.result, '� ESTETIK �')
      limitAdd(sender)
      addFilter(sender)
					break
    case 'clear':
    if (!isOwner) return reply(mess.only.ownerB)
    await exec('rm -f media/**')
    reply('sukses clear media')
    addFilter(sender)
					break
    case 'lightext':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
          if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
    data = await fetchJson('https://api.zeks.xyz/api/lithgtext?text='+args.join(' ')+'&apikey='+zekskey)
    sendImgFromUrl(data.result, 'Done.')
    limitAdd(sender)
    addFilter(sender)
					break
   case 'mycontact':
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
   case 'murothal':
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
    
    case 'pornhub':
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
  
   case 'nhentai':
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
  
    case 'googletext':
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
   
   case 'jarak':
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

   case 'goldbutton':
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

   case 'narutotext':
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
    case 'burning':
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
case 'sider':
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
    case 'restart':
    if (!isOwner) return reply( mess.only.ownerB, msg)
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    await reply('Wait, Sedang Merestart Bot!')
    await exec('rm -f media/**')
    await process.send('reset')
    addFilter(sender)
					break
   case 'addlevel':
   if (!isOwner) return reply(mess.only.ownerB)
  try {
  ngetag = `${args[0].slice(1)}@s.whatsapp.net`
    await addLevelingLevel(args[0].slice(1)+'@s.whatsapp.net', args[1])
   caliph.sendMessage(from, `Sukses menambahkan level @${args[0].slice(1)}`, text, {contextInfo: {"mentionedJid": [ngetag]}})
   } catch {
   reply('Error!')}
  addFilter(sender)
					break
   case 'addxp':
   if (!isOwner) return reply(mess.only.ownerB)
  try {
  ngetag = `${args[0].slice(1)}@s.whatsapp.net`
   await addLevelingXp(args[0].slice(1)+'@s.whatsapp.net', args[1])
   caliph.sendMessage(from, `Sukses menambahkan XP @${args[0].slice(1)}`, text, {contextInfo: {"mentionedJid": [ngetag]}})
   } catch {
   reply('Error!')}
   addFilter(sender)
					break
   case 'tag':
   case 'mention':
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
   case 'profile': case 'me':
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
    case 'film':
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
    case 'nightcore':
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
    case 'getjodoh':
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
    case 'partytext':
     if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
	if (args.length < 1) return reply('Teksnya apa kak?')
    sendImgFromUrl(`https://api.vhtear.com/partytext?text=${args.join(' ')}&apikey=${vkey}`, 'Done!')
    limitAdd(sender)
    addFilter(sender)
					break
   case 'galaxtext':
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
     case 'igvid':
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
   case 'cpu':
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
					case 'limit':
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
       case 'game1':
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
case 'game2':
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
case 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwner) return reply('Perintah ini hanya untuk Owner bot')
            for (let gclist of groupall) {
            await delay(3000)
                await sendMess(gclist, `Maaf bot sedang pembersihan, total chat aktif : ${groupall.length}`).then(() => caliph.groupLeave(gclist))
            }
            reply('Success leave all group!')
            addFilter(sender)
					break
    case 'fetch':
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
   case 'waifu':
   if (isLimit(sender)) return 
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
   data = await fetchJson('https://waifu.pics/api/sfw/waifu')
   sendImgFromUrl(data.url) 
   limitAdd(sender)
   addFilter(sender)
					break
  case 'epep':
  case 'freefire':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
  data = 'https://api.lolhuman.xyz/api/ephoto1/freefire?text='+args.join(' ')+'&apikey='+setting.lol
  sendImgFromUrl(data, '')
  limitAdd(sender)
  addFilter(sender)
					break
					case 'carbon':
      if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
    if (isBanned) return reply(mess.only.benned)
	if (!isUser) return reply(mess.only.userB)
  data = 'https://api.lolhuman.xyz/api/carbon?code='+args.join(' ')+'&apikey='+setting.lol
  sendImgFromUrl(data, '')
  limitAdd(sender)
  addFilter(sender)
					break
   case 'translate':
  translate(args.slice(1).join(' '), {tld: 'cn', to: args[0]}).then(res => {
            caliph.sendMessage(from, `${res.text}`, text, {quoted: msg})
            console.log(res)
        }).catch(err => {
            sendMess(from, `ERROR | ${err}`);
        });
   addFilter(sender)
					break
   case 'barcode':
   try {
   reply(mess.wait)
   sendImgFromUrl(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${args.join(' ')}`)
   } catch {reply('Error!')}
   addFilter(sender)
					break
   case 'tiktok2':
   data = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=a72abb5d0420ef3e`)
   base64 = await toBase64(data.result.cover)
   teks = '*「 TIKTOK DOWNLOADER 」*\n\n'
   caliph.sendMessage(from, await getBuffer(data.result.url_nwm || data.result.url), video, { quoted: msg, thumbnail: base64, caption: teks+data.result.caption })
   addFilter(sender)
					break
case 'buylimit':
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
    case 'lb':
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
      case 'tahta2':
      await reply(mess.wait)
      caliph.sendMessage(from, await ht(args.join(' ')), image, {quoted:msg, caption: '#Caliph Bot\nMake with ffmpeg'})
addFilter(sender)
					break
     case 'afk':
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
         case 'up':
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
         case 'get':
         if (!isOwner) return reply(mess.only.ownerB)
         try {
         sendImgFromUrl('./gambar/'+args.join(' '))
         } catch {
         reply('Error!')
         }
         addFilter(sender)
					break
case 'cekwarna':
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
case 'vibra':
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
    case 'addlimit':
                
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
case 'reverb':
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
                  case 'nowm':
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
     case 'blur':
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
				case 'negativegreen':
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
				case 'hapusaudio':
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
              case 'speed':
              reply(`*Speed :* ${processTime(chat.t, moment())} _second_`)
              addFilter(sender)
					break
              case 'cbass':
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
        case 'volume':
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
			case 'kecepatan':
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
			case 'distord':
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
        case 'karoke':
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
    case 'passed':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				encmediaP = await caliph.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" 'gambar/respect.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './tmp/passed.png'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Passed'))
					.on('exit', () => {
					caliph.sendMessage(from, fs.readFileSync('./tmp/passed.png'), image, { quoted: msg })
					})
					addFilter(sender)
					break
    case 'sad':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
				encmediaP = await caliph.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" 'gambar/sad.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './tmp/sadded.png'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Passed'))
					.on('exit', () => {
					caliph.sendMessage(from, fs.readFileSync('./tmp/sadded.png'), image, { quoted: msg })
					})
					addFilter(sender)
					break
    case 'stickmeme':
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
      case 'tesbitly':

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
case 'getses':
				if (isOwner) return reply(mess.only.OwnerB)
				const ses = await caliph.getSnapshot()
				caliph.sendMessage(from, ses, image, {quoted: msg})
				addFilter(sender)
					break
  case 'wiki2':
  data = await fetchJson(`https://id.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${args.join(' ')}`)
  reply(data.query.pages.extract)
  addFilter(sender)
					break
   case 'laptop':
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
case 'gta5':
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
   case 'nightbeach':
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
      case 'raindrop':
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
if (isCmd) caliph.logger.error(`COMMAND NOT FOUND : ${command}`)
                  
        }                 
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

}
starts()
					
