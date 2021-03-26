const
{
   WAConnection,
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
   mentionedJid,
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
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
    readme
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
const delay = require('delay')
const { ht } = require('./lib/tahta.js')
const nekopoi = require('./lib/nekopoi.js')
const _afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
const translate = require('translation-google');
const textpro = require('./lib/textpro.js')
const resep = require('./lib/resep')
const antivirtex = JSON.parse(fs.readFileSync('./src/antiV.json'))
const ytdl = require('ytdl-core')
cr = `*SYSTEM*`
const path = require('path')
prefix = setting.prefix
limitCount = 30
baterai = 100
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
					ppimg = './gambar/depresi.jpeg'
				}
				const memJid = anu.participants[0]
				const pushnem = caliph.contacts[memJid] !== undefined ? caliph.contacts[memJid].notify : PhoneNumber('+' + memJid.replace('@s.whatsapp.net', '')).getNumber('international')
				const mdata = await caliph.groupMetadata(anu.jid)
				const iniGc = anu.jid.endsWith('@g.us')
				const jumlahMem = iniGc ? mdata.participants : ''
		try {
			if (!caliph.user.jid.includes(memJid) && anu.action == 'add' && welkom.includes(anu.jid)) {
					exec(`magick './gambar/welcome.jpg' -gravity west -fill '#ffffff' -font './src/font/Dimbo Italic.ttf' -size 1280x710 -pointsize 65 -interline-spacing 7.5 -annotate +70-45 '${getName(memJid)}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+63 '# ${user.length}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+160 'Welcome To ${mdata.subject}' -fill '#ffffff' -font './src/font/Panton-BlackitalicCaps.otf' -pointsize 25 -interline-spacing 7.5 -annotate +35+260 '${jumlahMem.length} th members!' '${ppimg}' -resize %[fx:t?u.w*0.5:u.w]x%[fx:t?u.h*0.5:u.h] -gravity center -geometry +430+60 -composite 'tmp/welkom.jpg'`)
					.on('error', () => reply('Gagal Untuk Mengambil Data Welcome'))
					.on('exit', async () => {
					caliph.sendMessage(mdata.id, fs.readFileSync('tmp/welkom.jpg'), MessageType.image, {caption: `${setting.welcome.replace('{user}', '@'+memJid.split('@')[0]).replace('{name}', getName(memJid)).replace('{chatname}', mdata.subject)}`, contextInfo: { mentionedJid: [memJid] }})
					await fs.unlinkSync('./tmp/welkom.jpg')
					})
			} 
			if (!caliph.user.jid.includes(memJid) && anu.action == 'remove' && left.includes(anu.jid)) {
					exec(`magick 'gambar/leave.jpg' -gravity west -fill '#ffffff' -font './src/font/Dimbo Italic.ttf' -size 1280x710 -pointsize 65 -interline-spacing 7.5 -annotate +70-45 '${getName(memJid)}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+63 '# ${user.length}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+160 'Leaving From ${mdata.subject}' -fill '#ffffff' -font './src/font/Panton-BlackitalicCaps.otf' -pointsize 25 -interline-spacing 7.5 -annotate +35+260 '${jumlahMem.length} th members!' '${ppimg}' -resize %[fx:t?u.w*0.5:u.w]x%[fx:t?u.h*0.5:u.h] -gravity center -geometry +430+60 -composite 'tmp/leave.jpg'`)
					.on('error', () => reply('Gagal Untuk Mengambil Data Leave'))
					.on('exit', async () => {
					caliph.sendMessage(mdata.id, fs.readFileSync('tmp/leave.jpg'), MessageType.image, {caption: `${setting.left.replace('{user}', '@'+memJid.split('@')[0]).replace('{name}', getName(memJid)).replace('{chatname}', mdata.subject)}`, contextInfo: { mentionedJid: [memJid] }})
					await fs.unlinkSync('./tmp/leave.jpg')
					})
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
       if (['6281215199447@s.whatsapp.net'].includes(penelpon)) return caliph.sendMessage(penelpon.replace('c.us', 's.whatsapp.net'), `Maaf, saya tidak bisa menerima panggilan. telpon = block!.\nJika ingin membuka block harap chat Owner!`, MessageType.text)
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
    caliph.sendMessage(m.key.remoteJid, `Terdeteksi, @${m.participant.split("@")[0]} Telah Menghapus Pesan`, MessageType.text, {contextInfo: {"mentionedJid": [m.participant]}})
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
	simple.smsg(caliph, msg)
		try {
			if (!msg.message) return
			if (msg.key && msg.key.remoteJid == 'status@broadcast') return 
			//if (!msg.key.fromMe) return 
			const content = JSON.stringify(msg.message)
			const from = msg.key.remoteJid
			const type = Object.keys(msg.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    let locale = 'id'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let hari = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      // console.log(WA_MESSAGE_STUB_TYPES[msg.messageStubType])
			let hari2 = `${hari} ${weton}, ${date}`
			body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
			budu = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
			const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
			const budy = budu.toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const bodys = msg.message.conversation
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
const wallpaper5 = [                                                                                            "https://c4.wallpaperflare.com/wallpaper/800/831/598/digital-art-neon-mountains-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-preview.jpg",                                                                                         "https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg",                                                                                              "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg",                                                                                                      "https://c4.wallpaperflare.com/wallpaper/242/236/855/mountains-river-snow-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg",                                                                                           "https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg",                                                                                         "https://c4.wallpaperflare.com/wallpaper/983/716/976/mount-scenery-national-park-alberta-banff-national-park-wallpaper-preview.jpg",                                                                      "https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg",                                                                         "https://c4.wallpaperflare.com/wallpaper/600/360/964/digital-art-landscape-forest-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/71/196/981/digital-art-minimalism-nature-hills-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-anime-girls-original-characters-short-hair-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/428/434/322/art-computer-digital-art-concept-art-wallpaper-preview.jpg",                                                                                         "https://c4.wallpaperflare.com/wallpaper/946/379/721/artwork-landscape-mountains-forest-wallpaper-preview.jpg",                                                                                           "https://c4.wallpaperflare.com/wallpaper/558/625/87/fox-trees-fantasy-art-dreamland-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg",                                                                       "https://c4.wallpaperflare.com/wallpaper/649/484/984/photography-landscape-nature-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/13/960/9/digital-art-fantasy-art-colorful-space-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/714/495/609/landscape-artwork-digital-art-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/531/351/797/firewatch-video-games-forest-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/919/575/783/nature-landscape-lake-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/976/74/465/multiple-display-mountains-snow-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/375/751/675/mountains-landscape-winter-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/305/537/127/middle-earth-shadow-of-mordor-eagle-video-games-fire-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/252/42/firewatch-video-games-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/816/62/518/digital-art-nature-trees-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/719/787/stars-planet-space-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/229/745/183/world-1920x1200-sea-coast-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/203/203/693/sunset-drawing-animals-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/339/179/774/digital-art-low-poly-artwork-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/664/373/122/forest-mikael-gustafsson-landscape-horizon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/959/654/multiple-display-space-planet-space-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/36/569/176/nature-landscape-mist-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/591/300/904/mountains-minimalism-forest-firewatch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/57/819/651/sky-nature-starry-night-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/325/997/284/chains-landscape-tera-online-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/944/10/504/reflection-nature-sky-water-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/542/842/420/stars-mountains-nebula-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/186/380/857/your-name-sky-stars-kimi-no-na-wa-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/687/194/405/digital-digital-art-artwork-illustration-concept-art-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/55/897/164/science-fiction-landscape-space-planet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/294/495/artwork-deer-antlers-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/734/890/487/nature-landscape-spring-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/788/765/277/nature-landscape-mountains-mist-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/750/664/987/night-starry-stars-milky-way-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1004/4/846/synthwave-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/203/697/217/fkyhdino-landscape-artwork-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/799/610/330/blue-stars-mountains-starry-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/462/564/865/mountains-reflection-lake-water-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/83/363/762/skull-and-bones-game-concept-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/802/141/184/milky-way-nature-sky-atmosphere-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/444/19/627/sunrise-annapurna-massif-himalayas-minimal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/9/859/737/train-canada-landscape-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/912/256/892/landscape-forest-deer-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/772/543/720/close-up-photo-of-spiral-form-smoke-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/734/254/409/sky-purple-atmosphere-galaxy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/566/335/681/forest-firewatch-nature-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/908/576/938/nature-landscape-mountains-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/270/709/236/macos-mojave-macbook-pro-apple-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/911/205/312/artwork-digital-art-landscape-river-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/884/751/661/artwork-fantasy-art-mountains-galaxy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/742/683/711/landscape-the-lord-of-the-rings-fantasy-art-rivendell-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/301/89/macos-mojave-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/822/923/603/firewatch-mountains-forest-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/33/221/77/airships-digital-art-artwork-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/749/524/21/artwork-fantasy-art-digital-art-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/843/66/529/illustration-mountains-low-poly-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/735/236/877/vaporwave-sun-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/890/877/129/landscape-lake-mountains-waterfall-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/535/907/806/mountain-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/320/987/627/lake-rock-formation-peak-chille-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/282/382/horizon-minimalism-illustration-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/33/261/282/5bd28eeaec175-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/235/432/34/painting-japan-winter-white-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/20/481/77/landscape-nature-lake-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/191/747/794/mount-scenery-pink-sky-alps-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/973/932/1022/sunset-digital-art-mountains-low-poly-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/95/493/114/purple-flower-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/364/649/257/norway-pier-dock-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/611/55/737/lake-mountains-nature-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/816/443/752/80s-retro-retro-style-style-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/142/135/685/winter-mountains-sky-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/868/284/966/landscape-mountains-sunset-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/769/272/artwork-painting-digital-art-asian-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/7/954/516/snow-winter-lights-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/272/558/421/two-orange-and-red-flowers-with-drew-drops-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/908/148/844/nature-landscape-mountains-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/97/833/155/mountains-firewatch-green-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/165/657/130/monitor-montagne-mountain-multi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/963/794/503/anime-anime-girls-cherry-blossom-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/114/25/77/artwork-illustration-mountains-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/631/667/675/reflection-hallstattersee-alps-tourism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/324/728/62/nature-landscape-rock-bridge-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/132/401/75/painting-clouds-sky-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/127/310/423/cityscape-night-hallstatt-see-lake-chruch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/533/163/784/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/981/660/903/retrowave-synthwave-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/208/967/794/lake-artwork-gradient-vector-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/662/647/638/nature-landscape-sea-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/375/1004/16/5k-cgi-dark-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/586/751/643/moraine-lake-valley-of-the-ten-peaks-banff-national-park-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/879/812/880/harry-potter-artistic-blue-castle-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/714/107/583/purple-nature-colorful-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/312/159/584/firewatch-night-forest-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/558/777/255/8k-ultra-hd-mountain-lake-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/891/712/starry-sky-4k-8k-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/784/1005/239/son-goku-dragon-ball-dragon-ball-super-dragon-ball-super-movie-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/846/284/992/lofoten-norway-island-cityscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/612/299/795/anime-girls-anime-game-wlop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/1015/792/digital-art-landscape-sun-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/9/519/764/mountains-best-for-desktop-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/442/465/141/digital-art-mountains-forest-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/86/440/1017/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/305/713/112/sawmill-landscape-minimalism-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/267/779/729/mark-kirkpatrick-illustration-mountains-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/590/262/493/christmas-winter-4k-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/822/321/mark-kirkpatrick-illustration-mountains-sun-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/994/609/183/universe-space-digital-art-dual-monitors-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/48/742/559/retrowave-retrowave-digital-art-purple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1015/936/992/new-retro-wave-neon-synthwave-retro-style-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/982/411/642/green-bird-perching-on-branch-during-daytime-green-honeycreeper-green-honeycreeper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/404/546/505/lake-deck-boat-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/540/477/194/dark-souls-dark-souls-ii-video-games-sword-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/134/543/610/mountain-grass-landscape-valley-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/89/831/798/mountains-field-hills-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/871/821/multiple-display-dual-monitors-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/994/253/68/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/342/293/176/macos-sierra-new-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/487/168/1002/waffen-ss-nazi-world-war-ii-colorized-photos-mountains-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/118/216/2/mountains-trees-moon-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/790/930/398/stars-blue-landscape-reflection-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/162/333/164/anime-kimi-no-na-wa-sky-anime-girls-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/581/138/530/nature-valley-mountain-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/70/417/78/mountains-digital-art-artwork-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/79/17/251/landscape-night-mountain-starry-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/609/51/728/nature-landscape-mountains-starry-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/48/337/112/nature-landscape-sunset-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/983/422/352/fantasy-art-sunset-digital-art-magic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/92/397/293/movie-howl-s-moving-castle-black-hair-cloud-flower-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/880/841/120/mountains-forest-artwork-firewatch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/583/92/973/digital-art-landscape-mountains-palm-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/367/978/496/mountains-deer-landscape-earth-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/449/968/939/pixel-art-fire-moon-the-sin-of-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/337/871/597/naruto-shippuuden-anime-uzumaki-naruto-uchiha-sasuke-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/851/831/580/the-witcher-the-witcher-3-wild-hunt-simple-background-monochrome-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/780/51/nature-landscape-lake-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/347/704/apple-ios-mountains-and-galaxy-hd-wallpaper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-clouds-landscape-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/563/303/650/horizon-zero-dawn-snow-mountains-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/100/130/573/china-guangxi-guilin-li-river-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/739/666/digital-art-soldier-sword-warrior-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/133/434/430/nature-landscape-digital-art-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/92/666/432/digital-art-low-poly-artwork-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/802/376/3/digital-digital-art-artwork-drawing-digital-painting-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/551/480/932/island-sea-boat-mountains-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/329/260/23/self-portrait-wanderer-above-the-sea-of-fog-caspar-david-friedrich-1818.jpg",
    "https://c4.wallpaperflare.com/wallpaper/28/23/751/ultra-hd-8k-resolution-7680x4320-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/568/75/606/cherry-blossom-volcano-mountain-fuji-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/786/722/475/snow-winter-nature-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/737/508/851/national-park-reflected-ten-peaks-valley-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/826/586/471/ultrawide-space-blue-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/26/399/594/mountain-top-car-drive-movie-ford-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/708/35/nature-landscape-digital-art-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/455/253/179/artwork-fantasy-art-illustration-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/205/54/443/digital-art-nature-landscape-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/624/371/696/mountains-purple-synthwave-grid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/724/892/981/clouds-trees-nature-hills-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/568/805/139/nature-pixel-art-pixels-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/790/734/537/landscape-digital-art-coast-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/521/588/904/5k-uhd-gmunden-mountain-lake-bad-goisern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/732/537/223/death-stranding-video-game-art-hideo-kojima-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/742/358/556/artwork-landscape-forest-mikael-gustafsson-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/241/416/986/valley-alps-italy-bolzano-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/760/851/774/sake-sword-game-pirate-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/252/305/85/croatia-plitvice-lakes-national-park-nature-mountain-forest-landscape-waterfall-ultra-hd-4k-wallpaper-2560%C3%971600-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/548/569/72/castle-sunlight-landscape-ruin-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/393/911/700/mountain-range-world-dolomites-dolomite-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/723/362/489/funny-water-sea-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/328/43/708/artwork-fantasy-art-chinese-architecture-mountains-cherry-blossom-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/262/277/207/vancouver-sunset-city-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/613/343/766/nature-minimalism-mountains-sunlight-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/637/229/82/1366x768-px-chapel-mountain-video-games-street-fighter-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/800/831/598/neon-synthwave-digital-art-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/581/881/172/neon-genesis-evangelion-anime-girls-asuka-langley-soryu-spear-of-longinus-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/325/171/705/snow-winter-landscape-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/475/550/570/the-elder-scrolls-v-skyrim-mountains-snow-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/446/500/946/digital-art-space-sky-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/134/234/391/photography-mountains-snow-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/794/366/406/tron-movies-tron-legacy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/283/881/127/the-great-wave-off-kanagawa-painting-japanese-waves-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/570/535/nature-trees-hills-mist-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/778/821/245/minimalism-minimal-art-minimalist-airplane-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/759/478/411/video-games-video-game-art-assassin-s-creed-odyssey-greece-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/386/775/759/neon-genesis-evangelion-eva-unit-01-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/137/776/932/digital-art-mountains-landscape-science-fiction-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/744/875/623/sky-cloud-trees-pine-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/827/3/788/digital-art-fall-nature-mountain-chain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/806/571/730/microsoft-windows-windows-10-galaxy-tent-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/773/113/197/illustration-landscape-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/224/617/248/studio-ghibli-only-yesterday-multiple-display-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/732/347/681/lion-artwork-sky-animals-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/892/9/atmosphere-night-retrofuturism-graphic-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1017/880/838/castle-the-legend-of-zelda-breath-of-the-wild-sunlight-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1011/53/70/fantasy-art-lava-landscape-cherry-blossom-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/739/951/613/mountains-nature-landscape-waterfall-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/77/172/913/digital-art-fantasy-art-nature-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/669/485/176/nature-milky-way-stars-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/160/763/714/digital-art-pixel-art-pixels-8-bit-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/200/440/16/2d-digital-art-landscape-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/406/760/960/digital-art-artwork-dark-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/594/12/907/nature-landscape-grass-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/916/933/131/mountains-fantasy-art-moon-night-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/517/94/410/winter-mountain-europe-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/833/422/340/trees-landscape-flowers-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/772/500/970/photography-japan-mount-fuji-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/280/187/611/digital-art-warrior-landscape-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/218/264/7/reine-norway-lake-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/858/770/385/fantasy-art-sunset-dragon-birds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/718/327/mountains-snow-bagaxiang-gang-rinpoche-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/15/689/131/nature-sky-atmosphere-matterhorn-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/693/720/1003/mountains-landscape-clouds-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/33/730/564/the-legend-of-zelda-the-legend-of-zelda-breath-of-the-wild-mountains-dusk-trees-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/931/578/348/phenomenon-astronomy-starry-sky-asia-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/242/236/855/river-landscape-mountains-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/482/935/584/nature-landscape-clouds-bird-s-eye-view-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/811/818/436/planes-city-clouds-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/352/18/330/4k-landscape-8k-panorama-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/75/818/456/nature-landscape-fall-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/877/196/900/pixel-art-mountains-waterfall-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/742/496/36/firewatch-minimalism-sunset-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/482/377/5bd3c57fd2e8d-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/801/349/251/digital-art-mountains-cinema-4d-low-poly-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/878/61/227/landscape-nature-rice-paddy-terraces-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/903/720/59/architecture-old-building-ancient-montenegro-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/311/193/182/trees-nature-road-forest-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/796/157/118/mount-kailash-mountains-snow-mountain-blue-sky.jpg",
    "https://c4.wallpaperflare.com/wallpaper/972/669/149/fantasy-science-fiction-mountains-sci-fi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/643/54/374/wubalubadubdub-mountains-gamer-rick-and-morty-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/344/980/911/mozilla-firefox-mozilla-night-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/955/952/868/minimalist-minimalism-darkness-mountain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/134/324/cloud-slovakia-strbske-pleso-high-tatras-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/881/154/323/nature-landscape-mountains-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/688/446/433/digital-digital-art-artwork-illustration-photography-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/48/541/99/stars-sky-landscape-switzerland-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/901/769/79/nature-landscape-sky-travel-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/436/169/248/nature-landscape-mountains-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/466/488/974/winter-santa-claus-sleigh-sledge-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/187/748/909/animals-mountain-snow-ice-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/378/209/233/studio-ghibli-howl-s-moving-castle-mountains-anime-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg",
    "https://c4.wallpaperflare.com/wallpaper/240/654/397/nature-landscape-painting-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/370/616/23/mountains-landscape-nature-snow-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/673/855/752/lake-landscape-landscapes-mountains.jpg",
    "https://c4.wallpaperflare.com/wallpaper/165/383/672/halo-video-games-halo-infinite-xbox-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/654/395/831/panoramas-nature-river-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/396/974/397/nature-landscape-panoramas-canada-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/921/610/548/the-witcher-3-wild-hunt-the-witcher-map-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/580/911/830/artwork-fantasy-art-waterfall-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/657/791/735/simple-background-nature-mountains-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/521/741/140/city-game-landscape-grand-theft-auto-v-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/4/947/761/closeup-photography-of-green-flower-buds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/857/182/486/nature-snow-mountain-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/339/964/49/christmas-night-landscape-christmas-tree-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1006/87/624/zermatt-valley-switzerland-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/590/145/272/nature-landscape-house-green-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/238/928/57/nature-landscape-mountains-canada-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/806/990/536/digital-digital-art-artwork-illustration-landscape-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/375/206/386/firewatch-video-games-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/637/947/777/village-salzkammergut-hallstatt-eu-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/11/417/189/nature-landscape-forest-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/36/14/561/minimalism-minimalist-mountains-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/608/802/518/nature-landscape-mist-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/306/119/776/hawaii-haleakala-dawn-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/819/255/806/watchtower-in-oled-style-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/348/125/169/white-rose-petal-rose-rose-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/630/128/64/x-wing-star-wars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/392/379/786/night-landscape-space-winter-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1004/185/182/landscape-illustration-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/354/393/235/landscape-digital-art-minimalism-illustration-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/676/581/295/mountains-landscape-mist-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/487/794/386/landscape-mountains-artwork-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/771/911/776/horizon-zero-dawn-playstation-4-video-games-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/86/402/firewatch-animals-mountains-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/731/628/1012/digital-art-artwork-fantasy-art-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/267/800/mountains-nature-ultrawide-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/18/908/42/nature-landscape-mount-roraima-venezuela-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/158/774/427/anime-studio-ghibli-spirited-away-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/885/382/474/nature-road-arches-national-park-utah-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/833/926/572/motivational-mountains-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/988/888/mountains-nature-landscape-river-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/75/548/987/vaporwave-mountains-kanji-chinese-characters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/520/293/126/sunset-fantasy-art-lava-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/694/508/876/peak-mountains-switzerland-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1014/396/913/hohenschwangau-valley-europe-bavaria-germany-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/888/138/364/moon-game-forest-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/947/583/747/mountain-nature-hd-wallpapers-top-beautiful-desktop-nature-images-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1/757/189/japan-mount-fuji-clean-sky-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/478/44/2/nature-landscape-desert-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/742/681/203/the-sun-mountains-music-space-star-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/747/990/344/digital-art-fantasy-art-nature-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/1018/551/fantasy-art-drawing-nature-psychedelic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/442/914/498/mountain-3840x2160-lake-nature-4k-14996-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/204/716/944/nature-travel-architecture-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/749/337/189/firewatch-video-games-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/532/857/84/5k-good-morning-mountain-hill-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/460/28/989/drainage-between-black-metal-rail-surrounded-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/24/265/239/digital-art-drawing-painting-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/852/748/905/stars-sky-milky-way-alone-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/815/503/612/sky-landscape-red-fall-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/672/956/927/tourism-sunset-europe-tatras-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/611/512/852/firewatch-video-games-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/548/930/towns-hallstatt-austria-lake-mountain-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/165/607/615/neon-1980s-retro-style-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/748/786/390/kimi-no-na-wa-your-name-landscape-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/242/969/144/nature-stars-water-mount-fuji-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/941/993/168/nature-mountains-mount-everest-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/996/982/388/the-witcher-3-wild-hunt-landscape-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/388/920/ultrawide-star-wars-x-wing-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/217/808/917/star-wars-star-destroyer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/768/665/147/twilight-road-sky-desert-landscape-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/920/697/298/nature-landscape-armenia-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/657/918/354/himalaya-afterglow-mountain-himalayas-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/64/826/489/peacock-feather-photography-moss-plant-moss-plant-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/948/572/925/digital-art-landscape-mountains-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/647/977/120/low-poly-mountains-abstract-poly-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/160/350/464/darth-vader-star-wars-sith-lightsaber-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/278/326/513/star-wars-desert-bounty-hunter-weapon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/775/317/210/artwork-illustration-sky-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/442/341/147/firewatch-forest-landscape-in-game-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/248/93/99/glacier-flower-sky-wildflower-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/612/219/718/reflection-nature-sky-mountainous-landforms-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/816/153/96/summer-nature-grass-beautiful-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/451/601/98/kimi-no-na-wa-anime-landscape-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/747/760/958/close-up-photo-of-a-bald-eagle-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/575/581/148/nature-landscape-fjord-lofoten-islands-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/877/365/150/forest-mountains-landscape-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/790/172/951/video-games-nier-automata-2b-nier-automata-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/248/866/542/oil-painting-artwork-house-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/116/628/968/canada-moraine-lake-mountains-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/859/455/634/horizon-zero-dawn-2017-video-game-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/431/256/977/house-near-green-grass-field-near-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/544/506/453/aenami-digital-art-landscape-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/574/216/992/milky-way-stars-lake-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/552/667/818/atmosphere-tre-cime-natural-park-drei-zinnen-tyrol-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/404/577/296/mountains-cityscape-river-fall-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/167/388/37/low-poly-mountains-river-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/750/882/355/artwork-illustration-mountains-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/286/886/546/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/502/940/904/panoramas-mountains-landscape-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/58/607/585/emerald-lake-nature-canada-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/171/592/851/trees-near-houses-on-green-grass-field-at-daytime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/975/256/910/macos-mojave-macbook-pro-apple-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/910/1001/198/sky-mountain-nature-ridge-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/747/990/502/nature-landscape-water-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/810/815/814/star-trek-space-planet-spaceship-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/342/712/941/mark-kirkpatrick-landscape-illustration-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/218/805/101/makoto-shinkai-kimi-no-na-wa-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/355/199/817/artwork-digital-art-science-fiction-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/407/727/668/north-america-canada-alberta-banff-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/978/43/763/digital-art-samurai-candles-sky-lanterns-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/744/678/482/landscape-ultra-wide-mountain-pass-panorama-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/680/388/949/nature-landscape-field-terraces-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/458/751/728/winter-austria-salzkammergut-bad-goisern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/572/813/186/reflection-nature-wilderness-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/478/648/872/grand-teton-national-park-8k-8k-uhd-blue-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/702/511/709/upper-austria-salzkammergut-lake-hallstatt-hallstatter-see-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/92/340/6/the-sun-reflection-mountains-music-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/339/595/682/nature-bicycle-mountain-bikes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/831/173/228/movies-fantasy-art-the-lord-of-the-rings-the-fellowship-of-the-ring-artwork-mountains-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/478/661/225/5bd32176862fb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/672/517/150/fantasy-art-pagoda-asian-architecture-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/17/260/neon-genesis-evangelion-eva-unit-01-vaporwave-synthwave-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/706/739/590/the-witcher-3-wild-hunt-geralt-of-rivia-triple-screen-the-witcher-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/333/691/669/rock-formation-on-brown-field-during-daytime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/74/901/298/ultrawide-snow-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/829/247/731/grayscale-photo-of-storm-approaching-towards-isolated-house-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/280/939/fantasy-art-digital-art-artwork-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/419/103/606/dragon-prince-netflix-rayla-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/237/22/441/two-white-and-gray-kitten-beside-wooden-surface-cats-cats-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/893/41/93/superhero-artwork-mountains-mount-rushmore-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/349/987/690/quote-motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/296/180/986/synthwave-retrowave-retrowave-scanlines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/681/948/838/architectural-photo-of-lake-under-the-bridge-during-daytime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/533/443/658/5bd37e1a105dc-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/833/471/770/mountains-giant-sword-skeleton-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/578/978/337/landscape-photography-of-mountain-surrounded-by-trees-berchtesgaden-berchtesgaden-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/27/999/737/star-wars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/985/28/56/mountain-range-united-states-cathedral-rocks-el-capitan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/911/505/204/star-wars-star-destroyer-landscape-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/704/976/sunset-landscape-artwork-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/645/897/163/egor-klyuchnyk-113-character-universe-113-character-poster-universe-113-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/433/770/366/studio-ghibli-anime-hauru-no-ugoku-shiro-howl-s-moving-castle-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/117/568/858/the-legend-of-zelda-breath-of-the-wild-the-legend-of-zelda-hyrule-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/134/676/941/artwork-fantasy-art-mountains-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/246/567/689/artwork-fantasy-art-landscape-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/689/806/460/mist-clouds-trees-dark-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/213/42/432/the-sky-water-clouds-sea-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/862/528/50/mountains-apple-mac-os-x-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/82/481/241/landscape-mountains-nature-annapurna-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/565/221/94/5bd32fc4eb6b8-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/885/928/937/nature-landscape-trees-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/13/48/50/landscape-snow-reflection-monochrome-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/716/986/338/fjord-sea-cliff-canyon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1018/756/882/anime-neon-genesis-evangelion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/435/718/386/typography-digital-art-2d-depth-of-field-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/610/917/261/sunset-mountains-firewatch-minimal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/786/181/112/landscape-mountains-lake-water-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/411/895/583/water-north-america-ten-peaks-moraine-lake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/194/860/902/nature-landscape-mist-valley-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/666/593/241/drawing-evening-sun-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/365/858/383/landscape-sky-clouds-meadow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/70/309/249/hot-air-balloons-landscape-nature-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/446/348/moon-fantasy-forest-dragon-sky-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/857/365/312/vikings-mythology-fantasy-art-helmet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/307/282/404/italy-mountain-backgrounds-lake-building-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/292/473/286/artwork-bears-sunrise-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/512/839/621/landscape-nature-sea-resort-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/785/337/308/landscape-nature-mountains-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/18/952/1000/nature-landscape-lake-hills-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/75/688/62/reflection-nature-mountain-wilderness-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/404/91/620/nature-landscape-mountains-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/733/1023/808/mac-os-x-os-x-mountains-mist-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/246/782/339/mountain-beside-sea-at-daytime.jpg",
    "https://c4.wallpaperflare.com/wallpaper/754/312/1006/digital-art-nature-landscape-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/301/235/737/hot-air-balloons-clouds-snow-cliff-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/773/547/640/zermatt-switzerland-alps-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/933/89/71/landscape-torii-cliff-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/175/80/887/vincent-van-gogh-the-starry-night-crescent-moon-painters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/588/582/522/the-elder-scrolls-v-skyrim-video-games-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/729/149/299/mountain-sky-star-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/850/143/611/nature-lake-landscape-natural-light-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/580/307/643/panorama-lake-panorama-mountain-panorama-reflection-panorama.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/708/35/nature-digital-art-mountains-clouds-winter-house-snow-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/763/961/160/vaporwave-aesthetic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/741/651/640/black-and-white-bird-taking-flight-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/953/540/909/mountain-low-poly-art-low-poly-lowpoly-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/463/647/742/nature-mountain-forest-landscape-fog-lake-ultrahd-4k-wallpaper-2560%C3%971600-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/807/727/815/natural-park-fanes-tyrol-dolomites-italy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/147/193/227/avengers-infinity-war-planet-planet-titan-the-avengers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/691/881/314/vaporwave-glitch-art-mountains-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/768/176/989/sunrise-yosemite-national-park-morning-macos-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/683/186/563/macos-mojave-day-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/158/888/959/nature-landscape-trees-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/776/192/961/landscape-clouds-mountains-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/306/751/641/mountains-nature-lake-water-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/213/499/697/moraine-lake-valley-of-the-ten-peaks-mountain-lake-mountain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/282/382/valley-pine-trees-river-fox-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/547/574/576/firewatch-landscape-forest-minimalistic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/285/770/344/dual-monitor-montagne-mountain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/114/138/513/shrine-water-mountains-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/85/73/spring-yamanashi-fujiyoshida-chureito-pagoda-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/182/721/153/moraine-lake-reflection-wilderness-mountain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/917/489/277/nature-mountains-trees-stars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/451/789/111/nature-landscape-spring-sunset-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/692/579/812/tibet-everest-himalaya-himalayas-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/270/375/653/abstract-mountain-airplane-pink-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/951/871/643/nature-landscape-trees-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/591/243/641/peru-cordillera-huayhuash-mountains-valley-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/54/779/831/national-park-cathedral-rocks-tunnel-view-california-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1/706/520/4k-e3-2018-screenshot-death-stranding-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/323/699/nature-scenery-beautiful-mountain-wallpaper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/86/402/mountains-forest-animals-firewatch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/804/433/162/digital-digital-art-artwork-landscape-lines-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/297/18/527/digital-art-artwork-illustration-science-fiction-planet-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/106/429/185/digital-digital-art-artwork-drawing-digital-painting-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/315/709/285/5bd37e2ab58d4-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/868/284/966/matterhorn-lake-snow-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/505/296/888/digital-art-cherry-blossom-fantasy-art-lava-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/492/895/726/god-of-war-god-of-war-2018-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/416/454/421/mont-blanc-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/508/165/121/movies-oz-the-great-and-powerful-fantasy-art-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/993/4/848/macro-photography-of-snowflake-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/607/154/376/pixel-art-pixels-8-bit-rock-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/140/141/156/landscape-4k-hd-backgrounds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/179/758/386/nature-sky-snow-winter-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/998/886/524/digital-art-cgi-nature-hills-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/134/401/152/apple-ios-snow-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/386/596/1000/nature-landscape-road-trees-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/218/718/531/photo-of-green-leaf-plant-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1006/393/192/landscape-mountains-sunlight-blurred-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/279/904/985/dragon-monochrome-digital-art-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/715/678/snow-night-animals-doge-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/895/488/925/neon-sunset-retro-style-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/291/558/355/landscape-simple-nature-moon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/267/779/729/mountains-mark-kirkpatrick-low-poly-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/752/656/1016/mountains-sky-snow-stars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/535/519/712/road-mountains-fire-smoke-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/178/992/36/andes-mountain-range-santiago-chile-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/193/786/379/cityscape-river-castle-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/927/27/816/rice-terraces-mountain-landscape-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/72/462/545/596ca0f862f70.jpg",
    "https://c4.wallpaperflare.com/wallpaper/178/456/43/nature-painting-mountain-landscape-painting-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/29/996/894/landscape-nature-beach-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/605/836/6/ama-dablam-himalayas-sagarmatha-national-park-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/829/347/743/halo-master-chief-4gamers-xbox-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/542/937/244/lake-nature-sunset-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/311/862/574/nature-landscape-trees-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/302/334/528/cinque-terre-italy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/744/341/313/lofoten-norway-mountains-cityscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/327/367/757/illustration-fantasy-art-mountains-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/253/196/865/microsoft-windows-windows-10-rock-cliff-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/112/128/971/nature-fantasy-art-low-poly-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/760/457/249/minimal-sky-nature-horizon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/20/557/188/yellow-and-white-hummingbird-hovering-mid-air-selective-photography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/823/216/51/switzerland-mountains-snow-winter-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/529/596/1018/artwork-fantasy-art-concept-art-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/41/175/landscape-mountains-moon-moonlight-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/594/951/591/austria-nature-salzkammergut-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/872/192/890/minimalism-abstract-sun-geometry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/905/864/941/nature-landscape-trees-forest-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/246/45/172/road-highway-sky-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/309/141/221/digital-art-nature-mountains-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/756/1014/339/body-of-water-over-the-horizon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/319/174/467/photography-landscape-nature-water-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/51/666/437/black-sea-rock-with-body-of-water-and-blue-skies-photography-during-daytime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/268/205/96/nature-water-turquoise-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/286/355/748/warrior-digital-art-landscape-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/327/997/237/studio-ghibli-castle-in-the-sky-robot-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/345/983/615/digital-art-nature-mountains-portrait-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/222/1004/1015/landscape-digital-art-river-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/335/558/345/untitled-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/429/174/526/landscape-nature-sailboats-lake-mountains-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1002/965/140/nevada-lake-tahoe-water-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/146/645/120/landscape-mountains-sea-monochrome-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/174/141/137/5bd321bdb324e-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/737/853/236/digital-art-typography-sea-photoshop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/405/133/235/landscape-nature-waterfall-iceland-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/456/346/437/firewatch-video-games-mountains-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/406/131/696/mountain-torres-del-paine-sky-torres-del-paine-national-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/366/369/251/cityscape-city-mist-skyscraper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/439/955/577/mountains-minimalism-red-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/821/540/865/artwork-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/566/706/469/the-elder-scrolls-v-skyrim-video-games-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/960/458/514/mountain-blue-lake-8k-desktop-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/347/94/465/sunset-sky-water-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/775/978/565/artwork-digital-art-mountains-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/130/79/609/the-sky-trees-mountains-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/531/441/235/downhill-mountain-biking-mountain-bikes-dirt-sport-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/266/831/645/low-poly-3d-cinema-4d-digital-art-wallpaper-preview.jpg"
  ]
  
const wallpaper4 = [                                                                                            "https://c4.wallpaperflare.com/wallpaper/590/276/49/allah-islamic-font-islam-wallpaper-preview.jpg",                                                                                                      "https://c4.wallpaperflare.com/wallpaper/47/23/762/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/935/577/300/quran-faith-islamic-muslim.jpg",
    "https://c1.wallpaperflare.com/preview/860/676/901/house-of-allah-mecca-mosque-muslim.jpg",
    "https://c0.wallpaperflare.com/preview/234/82/467/makkah-islam-allah.jpg",                           "https://c4.wallpaperflare.com/wallpaper/320/483/815/islam-muslim-praying-kaaba-wallpaper-preview.jpg",                                                                                                   "https://c0.wallpaperflare.com/preview/267/712/965/islamic-prayer-dusk-sun.jpg",
    "https://c4.wallpaperflare.com/wallpaper/526/765/292/landscape-mosque-architecture-panoramas-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/140/729/193/99-names-of-allah-white-and-black-allah-illustration-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/603/632/998/house-of-allah-mecca-mosque-muslim.jpg",          "https://c4.wallpaperflare.com/wallpaper/594/242/532/islam-muslim-religion-wallpaper-preview.jpg",                                                                                                        "https://c1.wallpaperflare.com/preview/61/561/165/architecture-mosque-islam-religion.jpg",
    "https://c1.wallpaperflare.com/preview/419/950/548/religious-muhammad-religion-islam.jpg",           "https://c4.wallpaperflare.com/wallpaper/71/282/336/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/547/168/46/cami-minaret-islam-architecture.jpg",              "https://c1.wallpaperflare.com/preview/610/873/118/ramadan-masjid-islamic-shikh.jpg",
    "https://c4.wallpaperflare.com/wallpaper/665/887/674/architecture-islamic-architecture-mosque-nasir-al-mulk-mosque-wallpaper-preview.jpg",                                                                "https://c4.wallpaperflare.com/wallpaper/405/219/724/photography-islam-kaaba-mecca-cities-3600x2391-abstract-photography-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/376/349/121/allah-god-islam-entertainment-other-hd-art-wallpaper-preview.jpg",                                                                                   "https://c4.wallpaperflare.com/wallpaper/588/543/631/islam-iran-sunset-islamic-architecture-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/878/589/135/quran-holy-book-islam.jpg",                       "https://c4.wallpaperflare.com/wallpaper/285/518/469/5bd361cc9fda5-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/483/971/783/city-cityscape-istanbul-turkey-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/839/873/66/photography-nature-landscape-mosque-wallpaper-preview.jpg",                                                                                           "https://c4.wallpaperflare.com/wallpaper/200/416/938/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/285/471/673/illustration-background-ramadan-fanoos.jpg",
    "https://c0.wallpaperflare.com/preview/567/617/215/cami-minaret-islam-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/111/63/795/iran-architecture-symmetry-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/470/493/134/islam-islamic-architecture-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/329/376/837/horse-animals-men-praying-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/358/17/110/mosque-lahore-pakistan-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/167/618/346/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/561/888/20/book-quran-islam-holy.jpg",
    "https://c1.wallpaperflare.com/preview/727/20/905/holy-quran-islam-words.jpg",
    "https://c4.wallpaperflare.com/wallpaper/674/966/562/makkah-masjid-islam-islamic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/198/574/mosque-architecture-islamic-architecture-islam-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/620/158/481/saudi-arabia-%D9%85%D9%83%D8%A9-makkah-royal-clock-tower-wallpaper.jpg",
    "https://c4.wallpaperflare.com/wallpaper/589/227/778/space-islam-allah-qur-an-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/458/731/776/madinah-religion-hajj-muhammad.jpg",
    "https://c0.wallpaperflare.com/preview/319/1000/44/muslim-islam-religion-person.jpg",
    "https://c4.wallpaperflare.com/wallpaper/469/150/434/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/377/753/226/persian-art-tradiotional-islamic.jpg",
    "https://c0.wallpaperflare.com/preview/1019/493/70/ramadan-ramadhan-night-religious.jpg",
    "https://c4.wallpaperflare.com/wallpaper/771/595/679/turkey-islamic-architecture-reflection-sultan-ahmed-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/165/52/938/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/545/250/529/allah-arabia-arabic-blessing-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/289/177/allah-arab-arabian-arabic-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/102/669/284/ayat-al-kursi-islam-muslims-arabic-typography.jpg",
    "https://c4.wallpaperflare.com/wallpaper/199/762/443/abolfazl-imam-hussain-imam-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/774/474/484/religion-islam-muslim-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/43/907/605/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/285/2/472/religious-muslim-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/935/253/212/nasir-al-mulk-mosque-mosque-architecture-islamic-architecture-islam-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/446/120/951/girl-hijab-islam-eyes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/574/783/673/islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/922/795/831/casablanca-mosque-sea-morocco.jpg",
    "https://c0.wallpaperflare.com/preview/689/52/14/woman-headscarf-exotic-beautiful.jpg",
    "https://c4.wallpaperflare.com/wallpaper/50/747/795/abu-dhabi-islamic-architecture-architecture-sunlight-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/308/4/851/masjid-raya-baiturrahman-islam-moslem-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/860/151/589/islam-ottoman-empire-hagia-sophia-fossati-brothers-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/373/75/766/dome-of-the-rock-mosque-islam-jerusalem.jpg",
    "https://c1.wallpaperflare.com/preview/547/685/74/quran-islamic-muslim-arabic-holy-islam.jpg",
    "https://c1.wallpaperflare.com/preview/763/210/396/prophet-mosque-masjid-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/921/473/172/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/720/949/217/masjid-masjid-nabawi-medina-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/336/563/700/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/209/988/960/muslim-islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/222/851/588/mosque-abu-dhabi-grand-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/69/985/198/allaah-god-holy-holy-book-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/552/473/313/religious-islam-god-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/43/866/472/al-aqsa-mosque-mecca-sunset-mohammadkhan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/831/1014/410/islam-muslim-mecca-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/131/236/983/sheikh-zayed-mosque-sheikh-zayed-grand-mosque-mosque-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/729/683/623/makkah-muslim-islam-love-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/134/648/982/ramadan-morocco-traditional-mosque.jpg",
    "https://c1.wallpaperflare.com/preview/547/336/914/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/726/442/416/religious-islam-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/156/567/763/dome-of-the-rock-islam-palestine-love-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/88/561/176/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/877/714/439/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/876/728/853/mosque-islamic-architecture-religion-chandeliers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/996/669/208/turkey-mosque-istanbul-islamic-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/105/373/309/ramadan-islamic-islam-moon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/519/288/44/al-kaaba-al-musharrafah-holy-kaaba-is-a-building-in-the-center-of-islams-holiest-mosque-al-masjid-al-haram-in-makkah-al-hejaz-saudi-arabia-wallpaper-hd-1920%C3%971080-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/271/864/910/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/808/490/495/medina-saudi-arabia-muslim-moslem.jpg",
    "https://c4.wallpaperflare.com/wallpaper/83/875/702/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/878/504/925/blue-mosque-sultan-ahmed-mosque-mosque-architecture-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/760/946/517/india-taj-mahal-agra-architecture.jpg",
    "https://c1.wallpaperflare.com/preview/387/345/213/moshe-white-mosque-abu-dhabi-arabic.jpg",
    "https://c1.wallpaperflare.com/preview/764/998/483/mecca-msgkah-saudi-arabia-saudi.jpg",
    "https://c1.wallpaperflare.com/preview/394/870/382/tasbeeh-counter-mosque-beeds.jpg",
    "https://c4.wallpaperflare.com/wallpaper/572/383/772/arabic-islam-calligraphy-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/799/264/994/anime-uchiha-madara-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/80/981/143/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/310/389/religious-islam-god-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/198/574/islamic-architecture-mosques-architecture-islam-iran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/354/7/826/sultan-ahmed-mosque-mosque-istanbul-turkey-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/242/655/611/arabic-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/67/960/840/national-geographic-books-ancient-paper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/459/109/197/religious-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/413/517/212/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/497/881/196/medinei-to-minevver-masjid-nabawi-religion-islam.jpg",
    "https://c0.wallpaperflare.com/preview/630/249/106/nasir-ol-fluid-iran-mosque-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/590/380/869/religious-islam-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/686/157/115/holly-quran-islam-allah-book.jpg",
    "https://c4.wallpaperflare.com/wallpaper/726/942/379/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/382/287/739/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/830/52/847/holy-quran-ramadan-holy-month.jpg",
    "https://c4.wallpaperflare.com/wallpaper/419/140/867/closed-up-photo-of-pink-petaled-flower-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/948/57/allah-arabic-blessing-city-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/848/246/529/medina-saudi-arabia-masjid-quba-a-masjid.jpg",
    "https://c0.wallpaperflare.com/preview/374/120/948/indonesia-bandung-religion-sajadah.jpg",
    "https://c4.wallpaperflare.com/wallpaper/841/163/577/photography-islam-mosque-abu-dhabi-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/996/907/598/muhammad-prophet-madinah-city.jpg",
    "https://c4.wallpaperflare.com/wallpaper/40/403/608/ali-ibn-abi-talib-islam-imam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/746/626/518/islam-muslim-name-typo-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/527/649/319/morocco-casablanca-hassan-ii-mosque-marocco.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1016/34/552/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/839/810/385/islamic-prayer-silhouette-flat.jpg",
    "https://c4.wallpaperflare.com/wallpaper/973/715/737/eagle-ali-ibn-abi-talib-quote-islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/682/173/209/quran-ramadhan-muslim-islamic-religious-mubarak.jpg",
    "https://c4.wallpaperflare.com/wallpaper/893/148/905/islam-nature-quran-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/362/361/152/prophet-mosque-masjid-islam.jpg",
    "https://c0.wallpaperflare.com/preview/785/1006/440/mecca-mosque-muslim-kaaba.jpg",
    "https://c4.wallpaperflare.com/wallpaper/647/806/368/allah-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/660/194/574/cami-minaret-istanbul-islam.jpg",
    "https://c1.wallpaperflare.com/preview/276/117/79/blue-mosque-istanbul-turkey-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/786/409/272/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/717/1010/460/religious-islam-god-quran-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/719/523/789/islamic-prayer-dusk-sun.jpg",
    "https://c4.wallpaperflare.com/wallpaper/860/442/545/blue-mosque-mosque-turkey-sultan-ahmed-mosque-istanbul-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/449/1006/419/cami-minaret-islam-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/111/694/329/allah-arab-arabic-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/41/242/394/nature-islam-istanbul-hagia-sophia-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/559/464/921/eyes-girl-scarf-mysterious-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/10/943/696/allah-arab-arabian-holy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/946/656/877/abu-dhabi-dubai-united-arab-emirates-arabic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/798/512/940/qatar-museum-of-islamic-art-doha-doha-city-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/94/526/504/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/998/750/544/holy-quran-ramadan-ramadhan-religious.jpg",
    "https://c4.wallpaperflare.com/wallpaper/222/43/597/istanbul-turkey-city-boat-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/594/736/4/al-aqsa-mosque-muslim-jerusalem.jpg",
    "https://c4.wallpaperflare.com/wallpaper/718/246/457/close-up-focus-photo-of-white-orchids-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/400/493/266/illustration-background-shikh-pray.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1010/498/395/air-allah-background-beautiful-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/728/837/112/islamic-prayer-silhouette-female.jpg",
    "https://c4.wallpaperflare.com/wallpaper/198/740/834/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/11/913/315/mosque-istanbul-turkey-sultan-ahmed-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/909/576/988/sheikh-zayed-mosque-mosque-united-arab-emirates-uae-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/987/570/513/illustration-mosque-muslims-arabian-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/865/725/250/allah-god-air-background.jpg",
    "https://c4.wallpaperflare.com/wallpaper/596/233/162/islam-kaaba-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/809/356/860/islam-tughra-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/581/863/750/muhammad-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/340/306/409/calligraphy-islam-quran-religions-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/756/756/857/mosque-national-geographic-glowing-building-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/79/751/732/2013-2014-hussain-imam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/316/341/153/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/205/163/757/archaeological-historical-tourism-historic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/647/1012/47/grateful-holy-holy-book-islam-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/828/532/1011/masjid-nabawi-i-ve-to-medina-medina-minaret.jpg",
    "https://c4.wallpaperflare.com/wallpaper/638/245/258/aesthetics-architecture-asian-cami-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/584/184/995/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1023/967/621/allah-islam-s-vista-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/757/445/270/islam-qur-an-allah-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/691/986/363/painting-history-royal-prisons-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/472/885/nature-city-istanbul-turkey-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/555/122/571/hagia-sophia-islam-istanbul-nature-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/682/473/139/sheikh-zayed-mosque-abu-dhabi-uae-arab.jpg",
    "https://c4.wallpaperflare.com/wallpaper/749/794/536/background-patterns-vintages-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/784/453/143/arabic-faith-fasting-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/838/1024/865/ali-ibn-muhammad-hadi-imam-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/178/321/276/islam-kaabah-makkah-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/499/630/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/730/853/179/prophet-mosque-masjid-islam.jpg",
    "https://c1.wallpaperflare.com/preview/111/934/341/mecca-msgkah-saudi-arabia-saudi.jpg",
    "https://c4.wallpaperflare.com/wallpaper/444/9/291/islam-quran-birds-hands-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/426/76/915/islam-kaabah-makkah-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/966/46/555/arabian-architecture-asian-background.jpg",
    "https://c4.wallpaperflare.com/wallpaper/562/735/718/photography-islam-islamic-architecture-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/729/208/872/cityscape-mosque-islam-kazakhstan-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/649/5/198/malaysia-shah-alam-masjid-sultan-salahuddin-abdul-aziz-shah-sunset.jpg",
    "https://c4.wallpaperflare.com/wallpaper/391/1021/205/islam-istanbul-sultanahmet-mosque-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/145/406/454/mecca-tower-saudi-quran-msgkah.jpg",
    "https://c1.wallpaperflare.com/preview/23/676/941/prophet-mosque-masjid-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/40/857/244/islam-bismillah-islam-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/201/1001/166/mosque-palestina-muslim-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/658/365/islamic-architecture-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/209/988/960/muslim-islam-minimalism-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/360/860/835/quran-shrine-scripture-muslims.jpg",
    "https://c4.wallpaperflare.com/wallpaper/973/715/737/ali-ibn-abi-talib-islam-imam-quote-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/838/65/151/mosque-sky-holy-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/542/5/207/islam-allah-water-nature-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/634/155/636/book-islam-quran-quran-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/877/411/591/architecture-mosque-islam-religion.jpg",
    "https://c4.wallpaperflare.com/wallpaper/870/311/705/islam-qur-an-nature-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/822/117/163/architecture-building-photos-lahore.jpg",
    "https://c0.wallpaperflare.com/preview/600/928/895/masjid-nabawi-i-ve-to-medina-medina-minaret.jpg",
    "https://c4.wallpaperflare.com/wallpaper/672/326/434/islam-nature-prayer-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/635/980/842/mosque-islam-saudi-arabia-islamic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/406/989/318/sheikh-zayed-mosque-in-abu-dhabi-domes-islamic-architecture-desktop-backgrounds-190%C3%971200-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/452/266/495/quran-holy-book-guide.jpg",
    "https://c4.wallpaperflare.com/wallpaper/528/383/821/islam-arabic-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/241/335/736/russia-mosque-church-religion-architecture.jpg",
    "https://c1.wallpaperflare.com/preview/237/195/684/attractive-beautiful-beauty-cute.jpg",
    "https://c4.wallpaperflare.com/wallpaper/464/386/349/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/380/826/552/religious-muhammad-religion-islam.jpg",
    "https://c0.wallpaperflare.com/preview/1000/274/343/saudi-arabia-medina-al-masjid-an-nabawi-islam.jpg",
    "https://c1.wallpaperflare.com/preview/932/887/589/mosque-prayers-green-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/819/851/767/islam-religion-qur-an-calligraphy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/924/615/763/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/949/174/462/shallow-focus-photo-of-decorative-plates.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/999/650/ali-ibn-abi-talib-imam-islam-depth-of-field-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/72/666/532/girl-oriental-cover-eye.jpg",
    "https://c4.wallpaperflare.com/wallpaper/419/977/119/islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/867/310/575/kid-praying-muslim-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/837/50/507/texture-flowers-patterns-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/278/720/37/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/639/20/846/architecture-islam-islamic-muslim.jpg",
    "https://c1.wallpaperflare.com/preview/814/677/248/the-holy-qur-an-jerusalem-quran-religion.jpg",
    "https://c1.wallpaperflare.com/preview/242/683/698/photos-islam-islamabad-mosque.jpg",
    "https://c4.wallpaperflare.com/wallpaper/562/762/437/mosque-lahore-islamic-architecture-pakistan-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/614/946/402/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/10/342/qur-an-islam-worship-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1018/892/865/city-cityscape-istanbul-turkey-sultan-ahmed-mosque-hagia-sophia-sea-bosphorus-sunset-ship-architecture-islamic-architecture-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/200/307/626/596edca285846.jpg",
    "https://c4.wallpaperflare.com/wallpaper/368/1001/82/allah-god-islam-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/440/218/495/moshe-white-mosque-abu-dhabi-arabic.jpg",
    "https://c0.wallpaperflare.com/preview/733/390/537/islam-mecca-kaaba-religion.jpg",
    "https://c4.wallpaperflare.com/wallpaper/268/497/231/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/400/976/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/175/80/910/mosque-abu-dhabi-white-mosque-emirates.jpg",
    "https://c4.wallpaperflare.com/wallpaper/35/38/381/iran-mosque-architecture-shiraz-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/897/104/22/makkah-ksa-saudi-arabia-masjid-al-haram.jpg",
    "https://c4.wallpaperflare.com/wallpaper/998/458/333/persian-carpet-iran-carpets-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/635/154/463/stained-glass-indoors-carpets-islamic-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/987/930/409/islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/166/934/517/muslim-islam-religion-islamic-ramadan-mosque.jpg",
    "https://c4.wallpaperflare.com/wallpaper/440/139/601/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/141/650/464/photography-turkey-istanbul-islamic-architecture-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/325/392/30/book-quran-islam-read.jpg",
    "https://c0.wallpaperflare.com/preview/78/854/327/prayer-beads-prayer-quran-tasbeeh.jpg",
    "https://c0.wallpaperflare.com/preview/763/64/1004/holly-quran-islam-allah-book.jpg",
    "https://c4.wallpaperflare.com/wallpaper/665/887/674/colorful-column-mosque-stained-glass-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/85/1022/488/building-clock-tower-tower-apse.jpg",
    "https://c4.wallpaperflare.com/wallpaper/503/45/244/2pac-tupac-shakur-tupac-birthday-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/152/43/623/texture-islamic-architecture-tile-persian.jpg",
    "https://c4.wallpaperflare.com/wallpaper/812/833/191/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/665/887/674/1920x1200-px-arch-architecture-colorful-column-indoors-islamic-architecture-mosque-mulk-mosque-nasir-video-games-mario-hd-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/524/624/963/arabic-beads-belief-black.jpg",
    "https://c0.wallpaperflare.com/preview/920/286/573/mosque-casablanca-morocco-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/72/367/675/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/289/590/405/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/402/118/381/prophet-mosque-masjid-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/954/204/27/2013-2014-hussain-islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/383/927/627/cami-minaret-dome-building-islam-religion.jpg",
    "https://c0.wallpaperflare.com/preview/817/46/484/building-architecture-city-night.jpg",
    "https://c4.wallpaperflare.com/wallpaper/281/151/735/arabian-dark-design-islamic-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/227/53/154/quran-shrine-scripture-muslims.jpg",
    "https://c4.wallpaperflare.com/wallpaper/734/809/72/khaju-bridge-night-iran-lights-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/996/112/41/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/360/378/493/mountains-islam-allah-qur-an-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/319/578/490/islam-quran-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/28/501/289/mosque-prophet-green-religion.jpg",
    "https://c4.wallpaperflare.com/wallpaper/759/836/850/the-city-dome-jerusalem-israel-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/733/80/33/mosque-sunrise-architecture-landmark.jpg",
    "https://c4.wallpaperflare.com/wallpaper/989/148/1004/the-bmth-horizon-sempiternal-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/221/759/585/quran-ramadan-ramadhan-religious.jpg",
    "https://c4.wallpaperflare.com/wallpaper/297/449/226/allah-wallpaper-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/681/416/923/mosque-al-amin-islam-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/469/174/sky-building-historic-site-tourism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/7/853/319/islam-allah-water-nature-river-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/14/684/50/arch-nasir-al-mulk-mosque-mosque-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/859/248/855/earth-landscape-cloud-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/761/454/498/islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/217/561/311/house-of-allah-mecca-mosque-muslim.jpg",
    "https://c1.wallpaperflare.com/preview/814/679/655/blue-mosque-istanbul-turkish-cami.jpg",
    "https://c0.wallpaperflare.com/preview/824/930/463/children-girl-man-homeless.jpg",
    "https://c1.wallpaperflare.com/preview/784/67/733/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/24/374/382/qur-an-islam-calligraphy-kufic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/24/812/873/husayn-ibn-ali-islam-imam-hussain-imam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/518/582/454/abu-dhabi-moshe-islam-building.jpg",
    "https://c4.wallpaperflare.com/wallpaper/351/730/428/abu-dhabi-islamic-architecture-architecture-sunlight-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/830/804/12/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/228/493/272/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/702/342/518/mosque-new-mosque-granada-culture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/536/92/989/smashing-magazine-mandalas-symmetry-abstract-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/670/541/265/ceiling-church-roof-jesus.jpg",
    "https://c1.wallpaperflare.com/preview/109/793/94/girl-happy-female-beautiful.jpg",
    "https://c4.wallpaperflare.com/wallpaper/566/698/425/islam-qur-an-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/122/814/469/book-close-up-faith-holy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/830/973/230/islamic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/366/571/islam-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/956/765/235/architecture-buildings-cairo-egypt-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/570/547/609/ali-ibn-muhammad-hadi-imam-islam-earth-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/307/236/837/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/738/298/485/animals-men-indonesia-monochrome-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/866/799/746/sicily-chapel-palatine-geometric-mosaic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1001/512/855/islam-istanbul-ortakoy-mosque-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/315/918/524/ali-ibn-musa-imam-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/801/561/133/arabic-book-calligraphy-holy-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/255/793/145/jerusalem-mosque-holy-religion-israel-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/561/567/788/turkey-islamic-architecture-sultan-ahmed-mosque-typography-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/323/842/463/ramadan-muslim-islam-arabic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/439/903/750/game-of-thrones-map-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/816/840/963/architecture-indoors-decoration-sky.jpg",
    "https://c1.wallpaperflare.com/preview/629/495/604/mosque-arcade-corridor-interior.jpg",
    "https://c4.wallpaperflare.com/wallpaper/296/676/874/islam-religion-colorful-allah-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/736/995/696/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/200/158/512/landscape-mosque-architecture-panoramas-islam-urban-iran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/773/897/313/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/506/332/929/mosque-islam-saudi-arabia-islamic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/351/677/299/allah-islam-quran-motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/216/15/690/ramadan-moon-islamic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/552/428/902/religious-islam-calligraphy-islamic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/515/7/609/makkah-house-of-allah-mecca-islam.jpg",
    "https://c1.wallpaperflare.com/preview/799/201/283/mesjid-raya-baiturrahman-aceh-islamic.jpg",
    "https://c1.wallpaperflare.com/preview/539/500/858/girl-scarf-cover-oriental.jpg",
    "https://c1.wallpaperflare.com/preview/944/900/38/tashkent-uzbekistan-mosque-east.jpg",
    "https://c4.wallpaperflare.com/wallpaper/632/395/687/picture-frames-turkey-istanbul-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/70/108/844/allah-islam-qur-an-stars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/314/461/123/artwork-architecture-islamic-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/943/419/808/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/669/518/550/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/425/879/725/ali-ibn-abi-talib-imam-islam-quote-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/685/656/839/taj-mahal-mausoleum-marble-white.jpg",
    "https://c4.wallpaperflare.com/wallpaper/914/620/56/islamic-architecture-islam-white-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/736/39/641/islam-qur-an-justice-verse-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/257/651/707/oman-%D8%A7%D9%84%D8%B3%D9%8A%D8%A8-1805-way-sky.jpg",
    "https://c0.wallpaperflare.com/preview/636/859/729/egypt-country-university-al-azhar-scholars.jpg",
    "https://c1.wallpaperflare.com/preview/588/739/615/girl-muslim-dress-woman.jpg",
    "https://c1.wallpaperflare.com/preview/878/913/162/hagia-sophia-istanbul-church-turkey.jpg",
    "https://c4.wallpaperflare.com/wallpaper/611/472/36/minimalism-religion-war-coffins-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/627/892/877/islam-islamic-architecture-mosque-iraq-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/814/735/620/2013-2014-hussain-islam-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/164/985/73/white-concrete-tower.jpg",
    "https://c1.wallpaperflare.com/preview/420/175/830/dusk-photos-lahore-pakistan.jpg",
    "https://c0.wallpaperflare.com/preview/132/835/712/arches-architecture-arabic-modernist.jpg",
    "https://c4.wallpaperflare.com/wallpaper/234/298/489/islamic-architecture-islam-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/431/77/171/islam-qur-an-calligraphy-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/117/1020/1003/islam-hasan-ibn-ali-imam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/484/1019/640/islamic-zamadan-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/390/490/478/quran-shrine-scripture-muslims-mosque-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/832/720/977/architecture-iran-islam-landscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/577/836/931/1366x768-px-islam-istanbul-mosques-ortakoy-mosque-video-games-tekken-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/750/616/1005/god-religion-allah-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/886/385/photography-city-islamic-architecture-mosque-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/211/1021/239/architecture-photo-palace-court-public-domain.jpg",
    "https://c0.wallpaperflare.com/preview/278/337/175/mosque-masjid-nabawi-medina.jpg",
    "https://c4.wallpaperflare.com/wallpaper/535/371/696/religious-islam-calligraphy-islamic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/541/1009/282/mecca-msgkah-saudi-arabia-saudi.jpg",
    "https://c4.wallpaperflare.com/wallpaper/518/409/195/ali-ibn-abi-talib-imam-islam-desert-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/425/481/222/islamic-book-book-islam-muslim-design-arab.jpg",
    "https://c1.wallpaperflare.com/preview/992/749/139/arabian-ceiling-chandelier-arabic.jpg",
    "https://c0.wallpaperflare.com/preview/823/582/432/masjid-nabawi-cami-islam-religion.jpg",
    "https://c1.wallpaperflare.com/preview/985/72/873/israel-dome-of-the-rock-jerusalem-temple-mount.jpg",
    "https://c4.wallpaperflare.com/wallpaper/352/599/705/city-doha-museum-of-islamic-art-qatar-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/828/362/553/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/794/637/210/religious-muhammad-religion-islam.jpg",
    "https://c1.wallpaperflare.com/preview/701/940/972/kaaba-mecca-harem-religion.jpg",
    "https://c4.wallpaperflare.com/wallpaper/780/696/878/ali-ibn-abi-talib-islam-imam-quote-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/962/963/666/dome-dome-of-the-rock-jerusalem-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/740/57/books-islam-islamic-library-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/90/469/149/alhambra-peek-window-view.jpg",
    "https://c4.wallpaperflare.com/wallpaper/30/326/370/black-islam-muslim-pak-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/714/724/929/architecture-inside-church-religion.jpg",
    "https://c0.wallpaperflare.com/preview/487/907/602/clock-tower-big-clock-clock-makkah.jpg",
    "https://c0.wallpaperflare.com/preview/396/682/351/morocco-marrakech-travel-africa.jpg",
    "https://c4.wallpaperflare.com/wallpaper/138/741/135/islam-arabic-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/368/455/618/koran-allah-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/640/506/385/mosque-islamic-architecture-sword-art-online-sun-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/350/566/553/scarf-face-eyes-brown-eyed-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/334/242/329/abu-dhabi-photos-islam-mosque.jpg",
    "https://c4.wallpaperflare.com/wallpaper/748/957/186/qur-an-islam-typography-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/463/594/522/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/625/857/306/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/198/510/333/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/811/294/434/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/567/572/870/quran-islam-alanya-book.jpg",
    "https://c0.wallpaperflare.com/preview/722/901/261/makkah-ksa-saudi-arabia-masjid-al-haram.jpg",
    "https://c4.wallpaperflare.com/wallpaper/703/181/263/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/478/999/673/patterns-dark-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/854/848/840/cityscape-dubai-city-urban-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/369/50/446/kaaba-mecca-the-pilgrim-s-guide-religion-worship-islam.jpg",
    "https://c1.wallpaperflare.com/preview/711/84/872/red-fort-delhi-india-travel.jpg",
    "https://c4.wallpaperflare.com/wallpaper/801/561/133/arabic-book-calligraphy-holy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/248/508/968/ali-ibn-abi-talib-imam-islam-quote-mountain-pass-mountain-town-stars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/706/680/48/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/660/5/131/kazakhstan-astana-islam-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/899/15/748/mosque-islamic-architecture-architecture-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/166/465/276/al-azhar-mosque-cairo-egypt.jpg",
    "https://c0.wallpaperflare.com/preview/387/283/618/cami-circle-islam-geometry.jpg",
    "https://c4.wallpaperflare.com/wallpaper/385/519/717/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/733/696/966/qatar-doha-corniche-buildings-city-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/499/437/251/religious-islam-calligraphy-islamic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/538/464/902/women-eyes-people-muslim-islam-hazel-eyes-scarf-faces-hijab-2544x1680-people-eyes-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/458/827/693/pink-gerbera-daisy-with-water-drops-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/951/204/948/istanbul-turkey-islamic-architecture-islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/422/666/406/abu-dhabi-photo-holy-interior.jpg",
    "https://c1.wallpaperflare.com/preview/760/218/570/abu-dhabi-moshe-islam-building.jpg",
    "https://c4.wallpaperflare.com/wallpaper/402/937/182/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/724/661/65/mosque-al-amine-islam-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/551/875/669/islam-quote-matterhorn-zermatt-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/385/589/304/husayn-ibn-ali-imam-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/225/587/679/oriental-arhcetecture-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/261/760/983/architecture-arabic-islam-islamic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/251/752/51/islam-mosques-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/671/412/899/alhambra-granada-andalusia-spain.jpg",
    "https://c1.wallpaperflare.com/preview/759/823/596/sheikh-zayed-mosque-masjid.jpg",
    "https://c4.wallpaperflare.com/wallpaper/492/169/266/ali-ibn-abi-talib-imam-islam-quote-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/13/872/6/mecca-msgkah-saudi-arabia-saudi.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/435/593/hip-hop-actor-rapper-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/226/523/794/prishtina-mosque-mezquita-muslim.jpg",
    "https://c0.wallpaperflare.com/preview/81/699/763/istanbul-day-nativity-marine-minaret.jpg",
    "https://c1.wallpaperflare.com/preview/240/434/468/monument-islamic-art-taman-tamadun-islam-islamic.jpg",
    "https://c1.wallpaperflare.com/preview/302/160/34/ramadan-islam-muslim-islamic.jpg",
    "https://c1.wallpaperflare.com/preview/975/985/81/religious-muhammad-religion-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/413/517/212/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/647/469/93/jerusalem-city-temple-israel.jpg",
    "https://c4.wallpaperflare.com/wallpaper/750/295/815/1280x1024-px-islam-video-games-crysis-hd-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/243/347/727/playing-card-back-pattern.jpg",
    "https://c4.wallpaperflare.com/wallpaper/777/875/592/architecture-islamic-masjed-masjid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/574/727/746/the-mosque-the-dome-oriental-ornaments-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/730/811/599/architecture-islamic-architecture-modern-castle-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/351/1023/767/turkey-mihrimah-sultan-mosque-architecture-mosque.jpg",
    "https://c1.wallpaperflare.com/preview/828/11/610/hagia-sofia-istanbul-church-sofia.jpg",
    "https://c1.wallpaperflare.com/preview/779/217/90/granada-world-heritage-site-alhambra-islamic-art.jpg",
    "https://c1.wallpaperflare.com/preview/904/627/728/architecture-travel-outdoors-tourism.jpg",
    "https://c4.wallpaperflare.com/wallpaper/336/563/700/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/941/376/993/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/194/523/651/mosque-praying-muslim-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/251/666/428/jafar-ibn-muhammad-imam-islam-simple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/9/930/349/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/440/139/601/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/177/303/796/malaysia-shah-alam-sultan-salahuddin-abdul-aziz-mosque-drone.jpg",
    "https://c1.wallpaperflare.com/preview/55/388/902/ramadhan-men-guy-religion.jpg",
    "https://c1.wallpaperflare.com/preview/632/204/939/mosque-muhammad-ali-pray-pasha.jpg",
    "https://c4.wallpaperflare.com/wallpaper/175/727/706/qur-an-islam-typography-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/477/140/925/israel-jerusalem-holy-city-city.jpg",
    "https://c4.wallpaperflare.com/wallpaper/844/987/736/religious-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/663/121/197/jerusalem-worship-history-holiday.jpg",
    "https://c4.wallpaperflare.com/wallpaper/774/474/484/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/492/484/30/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/634/859/625/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/738/941/68/haji-ali-shrine-mumbai-bombay-muslim.jpg",
    "https://c4.wallpaperflare.com/wallpaper/109/941/185/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/520/503/738/islam-mosque-pray-prayer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/584/1010/561/allah-islam-mountain-quran-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/463/492/30/religious-samarinda-islamic-center-borneo-east-kalimantan-province-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/431/948/945/islam-qur-an-verse-paper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/732/862/345/islam-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/276/671/740/abu-dhabi-moshe-islam-building.jpg",
    "https://c4.wallpaperflare.com/wallpaper/425/879/725/islam-stars-imam-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/129/88/996/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/721/257/200/al-azhar-architecture-cairo-egypt.jpg",
    "https://c4.wallpaperflare.com/wallpaper/757/345/296/india-city-agra-taj-mahal-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/130/492/27/iran-shiraz-nasir-al-mulk-mosque%E2%80%8C-picture.jpg",
    "https://c1.wallpaperflare.com/preview/376/422/402/alhambra-patio-granada-spain.jpg",
    "https://c0.wallpaperflare.com/preview/574/431/804/interior-light-up-mosque-turkey.jpg",
    "https://c1.wallpaperflare.com/preview/470/794/354/religious-muhammad-religion-islam.jpg",
    "https://c1.wallpaperflare.com/preview/216/392/890/israel-dome-of-the-rock-jerusalem-temple-mount.jpg",
    "https://c1.wallpaperflare.com/preview/283/24/10/mosque-putrajaya-malaysia-islamic.jpg",
    "https://c0.wallpaperflare.com/preview/157/408/23/white-concrete-building.jpg",
    "https://c1.wallpaperflare.com/preview/509/126/552/mosque-pray-muslim-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/668/63/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/717/578/332/berry-bowl-closeup-cultural.jpg",
    "https://c4.wallpaperflare.com/wallpaper/168/944/981/prophet-joseph-qur-an-god-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/313/355/821/islam-architecture-camel-street-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/800/153/96/architecture-buildings-faisal-islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/226/522/418/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/305/523/701/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/318/442/400/islam-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/655/470/339/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/457/640/6/islam-qur-an-jonah-prophet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/387/707/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/402/251/822/damascus-syria-umayyad-mosque.jpg",
    "https://c1.wallpaperflare.com/preview/58/184/17/religious-muhammad-religion-islam.jpg",
    "https://c1.wallpaperflare.com/preview/18/627/763/seville-spain-alcazar-islamic-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/53/976/981/islam-belief-religion-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/42/531/751/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/511/7/593/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/610/372/842/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/634/552/910/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/592/1011/729/islam-muslim-religion-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/217/468/937/taj-mahal-temple-india.jpg",
    "https://c0.wallpaperflare.com/preview/437/752/934/arabic-belief-black-and-white-carpet.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/66/557/islam-evil-qur-an-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/439/873/301/qur-an-islam-verse-calligraphy-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/930/638/382/the-square-the-city-of-malang-indonesian-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/638/237/114/ali-ibn-abi-talib-imam-islam-gold-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/749/551/800/architecture-building-dome-castle.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/198/574/architecture-red-islamic-architecture-mosque-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/733/379/747/mandala-tibet-nepal-monk.jpg",
    "https://c1.wallpaperflare.com/preview/205/17/226/quran-holy-book-islam.jpg",
    "https://c4.wallpaperflare.com/wallpaper/625/446/466/islam-ancient-national-geographic-paper-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/835/295/594/book-islam-islamic-arabic.jpg",
    "https://c4.wallpaperflare.com/wallpaper/980/618/430/mosque-istanbul-turkey-sultan-ahmed-mosque-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/716/59/832/imam-hasan-hasan-ibn-ali-islam-imam-wallpaper-preview.jpg"
  ]
  
const wallpaper3 = [
    "https://c4.wallpaperflare.com/wallpaper/654/555/787/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/763/922/571/geometry-cyberspace-digital-art-red-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/520/346/488/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/626/511/the-dark-knight-heath-ledger-movies-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/364/505/149/geometry-cyberspace-digital-art-red-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/444/262/334/geometry-cyberspace-digital-art-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/612/19/690/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",                                                                                         "https://c4.wallpaperflare.com/wallpaper/447/85/162/computer-lights-glow-blur-wallpaper-preview.jpg",                                                                                                     "https://c4.wallpaperflare.com/wallpaper/351/447/799/circuits-minimalism-electronic-abstract-wallpaper-preview.jpg",                                                                                      "https://c4.wallpaperflare.com/wallpaper/207/615/632/fantasy-art-texture-computer-wallpaper-preview.jpg",                                                                                                 "https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg",                                                                               "https://c4.wallpaperflare.com/wallpaper/533/489/290/geometry-cyberspace-lines-digital-art-wallpaper-preview.jpg",                                                                                        "https://c4.wallpaperflare.com/wallpaper/537/870/560/geometry-cyberspace-lines-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1007/636/49/dragon-ball-super-ultra-instinct-ultra-instinct-goku-dragon-ball-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/456/660/955/the-avengers-avengers-age-of-ultron-superhero-costumes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/391/422/547/plexus-atoms-protons-neutrons-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/711/831/816/geometry-cyberspace-digital-art-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg",                                                                                                "https://c4.wallpaperflare.com/wallpaper/290/228/26/digital-art-circuits-minimalism-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/643/613/304/red-hewlett-packard-omen-black-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/311/587/retrowave-retrowave-purple-purple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/310/541/152/asus-motherboards-tilt-shift-technology-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/697/898/445/cloud-computing-illustration-technology.jpg",
    "https://c0.wallpaperflare.com/preview/198/135/731/cyber-attack-abstract-access.jpg",
    "https://c4.wallpaperflare.com/wallpaper/899/846/539/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/868/789/272/geometry-cyberspace-abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/232/394/544/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/518/75/784/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/976/862/444/geometry-cyberspace-digital-art-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/936/743/649/404-not-found-microsoft-windows-minimalism-humor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/631/161/245/futuristic-cityscape-city-skyscraper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/808/390/522/women-geometry-black-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/276/608/34/geometry-cyberspace-abstract-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1021/163/815/technology-networking-abstract-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/806/429/165/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/68/643/740/kali-linux-kali-linux-nethunter-linux-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/148/196/849/abstract-artwork-multiple-display-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/580/900/864/geometry-cyberspace-digital-art-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/596/57/130/iron-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/718/282/457/servers-connection-computer-science-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/608/821/147/abstract-digital-art-triangle-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/179/449/151/technology-networking-abstract-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/131/705/104/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/70/220/916/technology-binary-numbers-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/159/645/247/blur-the-camera-lens-camera-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/155/294/538/blue-light-electric-blue-connection-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/511/27/710/women-anime-girls-realistic-render-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/416/182/375/blue-chip-color-fee-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/692/951/815/geometry-cyberspace-digital-art-green-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/122/994/496/batman-the-dark-knight-gotham-city-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/483/913/258/advanced-ai-anatomy-artificial.jpg",
    "https://c4.wallpaperflare.com/wallpaper/625/965/182/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/132/13/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/462/222/574/linux-arch-linux-unix-unixporn-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/378/304/3/abstract-eyes-dots-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/738/49/192/cloud-computing-illustration-technology.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/897/305/computer-render-technology-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/251/997/271/digital-art-numbers-binary-cyberspace-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/355/80/891/geometry-cyberspace-abstract-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/144/222/411/code-rainbows-lights-colorful-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/428/915/830/blue-science-fiction-anime-dna-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/127/560/883/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/822/208/26/futuristic-cube-artwork-lacza-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/494/559/digital-art-video-games-play-station-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/797/969/97/geometry-cyberspace-red-lines-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/655/355/690/programming-keyboard-computer-environment-syntax-program.jpg",
    "https://c1.wallpaperflare.com/preview/185/698/502/matrix-communication-software-pc.jpg",
    "https://c4.wallpaperflare.com/wallpaper/618/108/910/macro-blue-chip-color-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/1017/138/mountains-music-neon-hills-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/737/93/233/technology-computer-hi-tech-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/753/227/832/cr7-hd-wallpaper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/933/905/299/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/400/800/53/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/8/281/157/mathematics-chemistry-science-physics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/586/151/677/retrofuture-digital-art-synthwave-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/469/369/195/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/627/632/978/sql-computer-minimalism-syntax-highlighting-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/103/807/711/abstract-the-matrix-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/925/552/941/digital-art-numbers-technology-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/756/916/916/5bd29f2a0096d-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/278/663/591/posting-post-computer-icon.jpg",
    "https://c4.wallpaperflare.com/wallpaper/282/676/926/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/650/142/455/iron-man-digital-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/157/1014/336/hacking-coding-code-hack.jpg",
    "https://c4.wallpaperflare.com/wallpaper/314/623/805/dragon-ball-super-son-goku-ultra-instinct-ultra-instinct-goku-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/849/858/484/digital-art-blade-runner-2049-blade-runner-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1004/350/396/abstract-php-c-analytics.jpg",
    "https://c0.wallpaperflare.com/preview/360/533/202/health-medical-healthcare-health.jpg",
    "https://c4.wallpaperflare.com/wallpaper/983/535/576/abstract-4k-hd-pic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/764/561/222/artwork-video-games-cyborg-futuristic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1016/985/292/digital-art-black-dark-background-circuit-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/694/888/914/keyboards-hands-internet-network-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1000/133/257/globalization-global-network-abstract.jpg",
    "https://c4.wallpaperflare.com/wallpaper/619/986/551/programming-programming-language-syntax-highlighting-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/867/379/789/alan-walker-music-minimalism-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/877/480/1003/trace-board-technology-science.jpg",
    "https://c4.wallpaperflare.com/wallpaper/58/941/182/nintendo-super-mario-video-games-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/52/868/blue-screen-of-death-microsoft-windows-windows-errors-errors-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/402/900/917/geometry-simple-background-blue-background-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/200/547/701/technology-blue-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/294/361/190/the-avengers-avengers-age-of-ultron-superhero-costumes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/371/680/950/psychedelic-abstract-gods-books-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/426/481/274/the-matrix-matrix-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/945/625/175/multiple-display-star-trek-uss-defiant-spaceship-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/287/473/127/access-close-up-code-coded.jpg",
    "https://c4.wallpaperflare.com/wallpaper/334/872/911/chip-fee-track-blur-processor-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/714/340/932/technology-blue-digital-art-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/192/925/140/the-matrix-binary-abstract-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/938/428/1020/purple-abstract-low-poly-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1024/697/120/son-goku-dragon-ball-beerus-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/510/28/894/vayne-digital-art-league-of-legends-vayne-league-of-legends-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/729/37/117/advanced-ai-anatomy-artificial.jpg",
    "https://c4.wallpaperflare.com/wallpaper/124/740/1010/technology-the-matrix-quote-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/296/881/computer-internet-digital-art-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/474/438/481/matrix-computer-desktop-backgrounds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/493/577/128/javascript-minified-computer-code-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/786/375/580/security-hacker-computer-internet.jpg",
    "https://c1.wallpaperflare.com/preview/242/531/581/hallway-blue-neon-neon-light-modern-architecture.jpg",
    "https://c4.wallpaperflare.com/wallpaper/818/539/644/minimalism-gruvbox-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/226/63/724/matrix-background-desktop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/744/825/122/search-one-code-antena-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/228/1010/440/artificial-intelligence-robot-ai-ki.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/451/678/technology-the-matrix-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/450/567/619/servers-room-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/98/823/733/business-communication-concept-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/445/191/635/green-hacker-darkness-matrix-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/243/125/209/abstract-future-design-modern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/283/182/460/microsoft-windows-shiba-inu-doge-memes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/939/921/121/binary-brain-technology-electricity-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/762/336/hdr-rainmeter-cityscape-long-exposure-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/139/965/96/broadband-internet-internet-optic-fiber-lan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/888/865/269/detroit-become-human-detroit-become-human-games-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/392/502/372/digital-art-numbers-technology-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/351/469/119/5bd00e379be84-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/676/51/744/face-portrait-digital-art-robot-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/721/581/196/android-operating-system-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/228/642/570/satan-satanism-anton-salazar-lavey-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/230/173/141/the-matrix-typography-text-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/135/165/230/data-center-server-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/760/133/294/crossover-v-for-vendetta-anonymous-the-matrix-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/971/784/the-matrix-movies-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1015/56/948/future-castle-hi-tech-bokeh-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/979/547/661/computer-circuit-boards-leds-pcb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/504/194/490/iron-man-the-avengers-marvel-comics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/760/865/ripple-xrp-hd-wallpaper-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/690/183/611/code-coding-connection-css.jpg",
    "https://c4.wallpaperflare.com/wallpaper/859/693/127/retro-wave-4k-desktop-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/999/653/318/anonymous-hacking-the-matrix-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/858/453/316/anime-lsd-women-psychedelic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/664/733/156/acer-blue-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/956/344/866/background-bit-bytes-close-up.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/4/853/abstract-ae-plexus-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/181/719/757/business-communication-concept-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/213/216/867/iron-man-the-avengers-marvel-comics-marvel-cinematic-universe-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/449/690/548/noisia-cyberspace-futuristic-techno-punk-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/32/429/95/computer-currency-cyberspace-data-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/589/211/782/hacking-hack-tools-metasploit-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/693/694/388/blue-chip-color-fee-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/768/835/772/digital-art-minimalism-abstract-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/674/808/55/artwork-microchip-technology-numbers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/449/632/904/architecture-business-cabinet-data-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/484/356/919/digital-art-simple-background-glowing-cgi-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/856/202/494/black-laptop.jpg",
    "https://c4.wallpaperflare.com/wallpaper/8/622/541/technology-hands-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/776/831/670/gas-masks-digital-art-skull-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/824/857/120/multiple-display-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/461/838/523/doctor-who-the-doctor-tardis-time-travel-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/351/871/737/cpu-hardware-digital-art-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/753/390/535/surface-line-point-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/269/473/208/abstract-colorful-waveforms-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/496/380/29/men-thomas-alva-edison-nikola-tesla-war-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/817/193/279/eye-information-technology-digital.jpg",
    "https://c4.wallpaperflare.com/wallpaper/940/830/400/video-games-typography-technology-circuits-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/946/98/570/acer-blue-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/143/688/3/daft-punk-music-computer-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/630/26/515/technics-laser-oscilloscope-digital-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/448/15/724/geek-circuit-boards-pcb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/623/532/839/band-music-metallica-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/229/496/14/technology-networking-abstract-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/688/1001/281/coding-developer-quotes-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/47/728/849/gundam-gunpla-mobile-suit-gundam-00-gundam-build-fighters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/358/299/645/code-typography-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/33/177/163/business-communication-concept-illustration.jpg",
    "https://c0.wallpaperflare.com/preview/125/118/381/security-analyzing-black-close-up.jpg",
    "https://c0.wallpaperflare.com/preview/536/351/703/access-app-application-archive.jpg",
    "https://c4.wallpaperflare.com/wallpaper/182/748/33/ultraboss-synthwave-vaporwave-neon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/543/116/52/the-avengers-avengers-age-of-ultron-superhero-costumes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/419/782/394/nvidia-windows-7-computer-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/993/374/570/technology-developer-touch-finger.jpg",
    "https://c4.wallpaperflare.com/wallpaper/949/174/329/acer-laptop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/73/797/261/open-source-openbsd-unix-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/466/861/65/linux-cli-commands-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/43/840/856/hieroglyphics-pattern-one-piece-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/931/845/157/one-protection-blur-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/286/147/796/new-retro-wave-synthwave-neon-1980s-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/71/371/604/funny-diagram-drawing-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/370/158/366/4k-a-e-s-t-h-e-t-i-c-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/480/456/897/cabinet-data-data-center-database.jpg",
    "https://c4.wallpaperflare.com/wallpaper/936/844/62/blue-kanji-the-matrix-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/278/145/294/technology-fingers-digital-art-lights-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/463/591/5bd07537a26a2-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/188/1022/digital-art-minimalism-chemistry-atoms-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/65/503/714/blue-abstraction-chip-color-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/795/358/450/video-game-horizon-zero-dawn-aloy-horizon-zero-dawn-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/695/312/990/synthwave-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/602/798/411/abstract-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/908/858/539/glitch-art-abstract-ascii-art-skull-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/315/7/776/matrix-computer-desktop-backgrounds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/953/551/710/abstraction-passage-light-black-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/600/236/858/the-sky-search-mesh-station-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/587/587/714/human-brain-blue-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/6/536/893/linkin-park-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/523/998/418/digital-art-abstract-electronics-lights-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/46/234/452/music-word-clouds-typography-guitar-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/89/9/222/server-lights-glass-tiles-technology-hi-tech-transparent-background-abstract-room-architecture-door-operative-system-data-center-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/360/73/269/cyberspace-immersion-schemes-forms-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/575/99/760/while-she-sleeps-cyberspace-abstract-monuments-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/172/940/852/laptop-aspire-acer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/175/253/203/abstract-digital-art-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1006/964/896/halo-halo-4-video-games-anime-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/313/769/293/career-leadership-success-businessman.jpg",
    "https://c4.wallpaperflare.com/wallpaper/371/242/408/digital-art-glowing-abstract-geometry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/758/570/469/movies-men-actor-tom-cruise-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/610/420/977/binary-binary-code-binary-system-http.jpg",
    "https://c4.wallpaperflare.com/wallpaper/999/474/536/the-matrix-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/363/815/740/security-finger-businessman-binary.jpg",
    "https://c4.wallpaperflare.com/wallpaper/85/638/533/technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/239/36/982/code-programming-javascript-java-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/726/16/940/hexagon-minimalism-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/917/965/102/code-hacker-data-security.jpg",
    "https://c4.wallpaperflare.com/wallpaper/613/948/4/abstract-digital-blasphemy-mazes-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/695/58/414/hacker-cyber-code-angrfiff.jpg",
    "https://c4.wallpaperflare.com/wallpaper/244/522/321/facebook-world-world-map-map-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/490/500/pc-gaming-computer-keyboards-master-race-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/854/184/8/anime-blue-exorcist-ao-no-exorcist-kurikara-blue-exorcist-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/284/386/548/devops-business-process-improvement-development.jpg",
    "https://c4.wallpaperflare.com/wallpaper/415/250/518/cat-space-light-humor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/612/318/357/anime-anime-boys-naruto-shippuuden-rasengan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/867/379/789/alan-walker-music-minimalism-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/44/1022/401/smart-home-house-technology-multimedia.jpg",
    "https://c1.wallpaperflare.com/preview/486/41/106/coding-computer-hacker-hacking.jpg",
    "https://c4.wallpaperflare.com/wallpaper/599/483/636/5bd12a6dcb706-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/211/296/14/microsoft-windows-blue-screen-of-death-blue-window-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/200/369/276/technology-developer-continents-touch.jpg",
    "https://c4.wallpaperflare.com/wallpaper/271/310/545/computers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/429/647/784/abstract-pink-purple-grid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/17/496/843/the-matrix-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/926/492/891/code-c-c-plus-plus-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/870/550/531/blue-light-optical-fiber-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/343/193/286/video-games-mega-man-pixel-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/241/388/987/anonymous-code-computers-fawkes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1011/203/704/linux-gnu-blueprints-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/417/578/464/spider-man-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/328/37/320/businessman-tablet-control-city.jpg",
    "https://c1.wallpaperflare.com/preview/115/772/840/stock-exchange-boom-economy-pay.jpg",
    "https://c0.wallpaperflare.com/preview/464/568/956/technology-business-communication-concept.jpg",
    "https://c4.wallpaperflare.com/wallpaper/451/298/346/amd-eyefinity-radeon-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/273/849/296/abstract-ad-ai-artificial-intelligence-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/228/917/292/computer-wordpress-html-front-end.jpg",
    "https://c4.wallpaperflare.com/wallpaper/167/805/221/devil-may-cry-devil-may-cry-4-nero-devil-may-cry-vergil-devil-may-cry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/472/634/448/synthwave-cityscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/886/102/399/the-matrix-code-digital-art-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/228/994/498/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/955/226/359/blue-background-circuit-board-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/13/476/879/neo-urban-laptop-hardware-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/643/743/chip-fee-robots-light-bulb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/411/670/451/hardware-computer-android-operating-system-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/55/233/65/notebook-lines-hacker-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/225/705/246/nvidia-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/439/560/922/neo-urban-laptop-hardware-computer.jpg",
    "https://c0.wallpaperflare.com/preview/531/627/804/business-communication-concept-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/188/799/634/quote-typography-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/366/129/134/ransomware-cybersecurity-cyber-security.jpg",
    "https://c4.wallpaperflare.com/wallpaper/38/936/1018/vaporwave-1980s-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/897/329/76/matrix-pack-1080p-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/283/523/740/binary-eye-woman-beautiful-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/186/501/abstract-pattern-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/207/310/366/neon-black-lights-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/207/907/719/web-design-typography-motivational-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/591/43/770/3d-digital-art-blue-purple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/967/288/934/digimon-digimon-tri-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/973/508/979/abstract-tunnel-numbers-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/214/1000/1000/ghost-in-the-shell-laughing-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/635/97/95/drawing-star-trek-starship-nc-1701-b-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/30/911/661/turn-on-turn-off-industry-energy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/316/855/matrix-images-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/224/310/556/terrorblade-dota-2-demon-marauder-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/650/796/872/code-programming-coding-web.jpg",
    "https://c4.wallpaperflare.com/wallpaper/942/856/991/portal-game-aperture-laboratories-video-games-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/90/425/technics-digital-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/972/56/965/the-legend-of-zelda-zelda-link-triforce-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/728/627/644/abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/880/862/abstract-tunnel-numbers-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/62/583/774/simple-background-digital-art-abstract-sphere-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/916/420/2/the-flash-season-3-grant-gustin-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1015/27/686/hands-anime-passwords-binary-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/573/453/115/career-businessman-arrows-business.jpg",
    "https://c0.wallpaperflare.com/preview/219/707/590/css3-css-code-java.jpg",
    "https://c1.wallpaperflare.com/preview/29/746/330/cyber-attack-encryption-smartphone.jpg",
    "https://c4.wallpaperflare.com/wallpaper/427/996/890/technology-blur-internet-internet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/653/228/905/internet-internet-hi-tech-security-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/157/273/265/anime-fictional-logo-laughing-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/94/714/565/simple-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/844/415/674/technology-acer-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/397/295/749/abstract-colorful-geometry-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/158/960/25/earth-mozilla-firefox-hands-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/179/238/555/look-eyes-interface-one-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/446/343/720/windows-logo-operating-system-dark-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/667/1022/334/square-grid-technology-information-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/11/313/74/code-coder-coding-html.jpg",
    "https://c4.wallpaperflare.com/wallpaper/518/348/1021/binary-computer-tech-code-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/72/1009/305/security-binary-binary-code-castle.jpg",
    "https://c4.wallpaperflare.com/wallpaper/49/145/121/abstract-shapes-square-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/240/979/782/abstract-low-poly-depth-of-field-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/427/862/416/technology-hacker-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/452/767/750/binary-code-binary-blue-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/671/80/17/computer-logo-phone-electronics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/552/148/877/matrix-backgrounds-for-widescreen-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/886/235/582/illusion-spiral-rotation-shape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/728/1023/652/macro-video-games-game-over-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/215/603/715/cyber-security-smartphone-cell-phone-protection.jpg",
    "https://c4.wallpaperflare.com/wallpaper/335/38/496/audio-spectrum-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/594/274/520/drawing-autocad-plan-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/419/811/828/city-panorama-tablet-control.jpg",
    "https://c4.wallpaperflare.com/wallpaper/576/151/793/abstract-simple-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/101/281/code-the-matrix-green-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/1022/447/blue-digital-art-optical-illusion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/8/1000/blue-high-resolution-widescreen-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/392/970/347/police-officers-old-playmobil-green.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1011/806/554/techno-punk-futuristic-noisia-speedforce-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/986/542/pattern-abstract-fractalius-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/28/641/314/hacking-hack-tools-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/834/316/975/geforce-gtx-titan-z-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/224/392/876/dots-glare-blue-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/672/850/506/forward-digitization-automation-traffic.jpg",
    "https://c0.wallpaperflare.com/preview/633/410/327/business-communication-concept-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/103/905/140/captain-america-quote-green-lantern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/222/910/567/gundam-gunpla-gundam-build-fighters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/220/298/560/quotes-book-jacket-blackboard-jacket-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/802/141/231/server-space-the-server-room-dark.jpg",
    "https://c4.wallpaperflare.com/wallpaper/811/358/465/code-technology-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/81/9/282/binary-binary-code-binary-system-http.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/868/1013/numbers-typography-quantistic-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/845/526/395/dark-background-stadium-soccer-pitches-top-view-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/755/708/nvidia-green-blue-white-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/690/169/121/code-geass-lamperouge-lelouch-zero-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/693/365/74/spacesuit-space-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/652/39/669/anime-girls-snow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/771/740/2/blogging-content-marketing-internet-marketing-marketing-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/220/42/383/star-wars-tie-fighter-concept-art-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/452/825/299/digital-art-portrait-display-cgi-the-matrix-text-falling-green-chinese-characters-black-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/660/458/323/quote-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/42/982/539/movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/347/933/231/pattern-texture-code-phantasy-star-online-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/65/222/543/the-prisoner-original-uk-series-tv-number-6-typographic-portraits-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/861/393/319/technology-fingers-digital-art-internet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/203/575/749/music-design-pattern-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/247/956/1001/code-4k-5k-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/456/899/796/the-swastika-russia-valkyrie-slavs-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/708/250/564/facebook-black-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/988/496/27/abstract-3d-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/198/305/105/system-web-digitization-technology.jpg",
    "https://c4.wallpaperflare.com/wallpaper/401/260/875/digital-art-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/362/125/268/naruto-akatsuki-rinnegan-pain-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/79/540/53/abstract-colorful-artwork-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/838/433/104/website-screen-web-tech.jpg",
    "https://c4.wallpaperflare.com/wallpaper/343/595/740/the-matrix-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/652/110/437/computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/45/815/650/text-hacking-typography-green-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/781/180/881/star-wars-r2-d2-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/77/933/301/matrix-screensavers-backgrounds-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/228/103/748/matrix-communication-software-pc.jpg",
    "https://c4.wallpaperflare.com/wallpaper/833/1017/124/abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/588/68/873/birdman-life-earth-love-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/458/150/456/server-machines-hallway-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/789/71/durarara-anime-boys-glowing-ryuugamine-mikado-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/465/513/249/ethernet-cable-network-fiber-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/117/663/827/motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/465/881/112/imam-ali-ibn-abi-talib-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/873/636/890/abstract-render-futuristic-neon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/467/620/959/shapes-digital-art-colorful-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/255/43/777/steelseries-sensei-computer-mice-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/378/297/160/fibre-fiber-optics-blender.jpg",
    "https://c1.wallpaperflare.com/preview/987/533/173/coding-programming-code-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/731/193/197/digital-art-hexagon-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/1011/125/291/computer-keyboard-electronics-modern.jpg",
    "https://c1.wallpaperflare.com/preview/51/968/867/industry-industry-4-internet-of-things.jpg",
    "https://c4.wallpaperflare.com/wallpaper/210/246/480/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/24/962/480/android-motherboard-hd-wallpaper-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/976/376/911/industry-industry-4-network-interfaces.jpg",
    "https://c4.wallpaperflare.com/wallpaper/504/945/79/binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/356/565/210/vector-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/91/704/936/abstract-background-canvas-code.jpg",
    "https://c4.wallpaperflare.com/wallpaper/205/228/1012/overwatch-sombra-sombra-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/927/349/183/internet-cyber-network-finger.jpg",
    "https://c4.wallpaperflare.com/wallpaper/233/804/879/matrix-images-for-backgrounds-desktop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/474/209/83/portal-game-aperture-laboratories-video-games-valve-corporation-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/736/144/879/forward-businessman-tablet-control.jpg",
    "https://c1.wallpaperflare.com/preview/808/231/767/coder-programming-computer-screen-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/323/431/733/futuristic-headphones-cityscape-science-fiction-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/472/997/abstract-pattern-texture-design-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/393/501/210/anonymous-we-are-legion-internet-cyberspace.jpg",
    "https://c4.wallpaperflare.com/wallpaper/15/267/798/artwork-new-retro-wave-cityscape-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/212/262/498/abstract-biotechnology-eye-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/475/215/816/notes-music-sound-treble-clef-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/286/95/776/wallhaven-simple-blue-gray-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/355/100/880/artistic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/859/61/276/network-earth-net-world-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/556/536/973/coding-numbers-binary-code-developer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/710/356/dark-death-heavy-metal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/579/458/496/computer-unixporn-unix-command-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/157/251/681/microsoft-windows-cellphone-photography-lights-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/802/898/452/fractal-abstract-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/965/738/408/technology-developer-touch-finger.jpg",
    "https://c4.wallpaperflare.com/wallpaper/99/575/693/binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/195/196/11/mass-effect-4-mass-effect-andromeda-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/422/878/518/htc-one-m7-htc-sense-5-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/214/714/441/abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/698/766/359/difficult-maze-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/281/500/13/digital-art-head-face-numbers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/792/371/658/quote-atheism-text-isaac-asimov-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/866/102/333/binary-binary-code-matrix-binary-system.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/310/480/rotation-circles-cubes-geometry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/75/818/369/typography-circuitry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/679/587/671/technology-men-digital-art-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/163/889/204/minimalism-white-background-geometry-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/85/147/vaporwave-france-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/412/192/33/logo-digital-art-dark-background-grid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/892/978/407/martin-garrix-moti-virus-how-about-now-songs-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/384/251/700/daft-punk-typography-pixelated-pixel-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/616/912/durarara-anime-boys-glowing-ryuugamine-mikado-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/527/124/852/blue-red-and-pink-abstract-artwork.jpg",
    "https://c4.wallpaperflare.com/wallpaper/22/68/953/league-of-legends-twitch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/160/779/788/abstract-waveforms-colorful-digital-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/390/289/284/businessman-intelligent-networked-control.jpg",
    "https://c4.wallpaperflare.com/wallpaper/429/156/877/video-games-aperture-laboratories-logo-valve-corporation-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/132/52/926/cyberpunk-2077-cyberpunk-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/97/133/opensuse-linux-gecko-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/652/110/437/computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/45/815/650/text-hacking-typography-green-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/781/180/881/star-wars-r2-d2-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/77/933/301/matrix-screensavers-backgrounds-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/228/103/748/matrix-communication-software-pc.jpg",
    "https://c4.wallpaperflare.com/wallpaper/833/1017/124/abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/588/68/873/birdman-life-earth-love-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/458/150/456/server-machines-hallway-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/789/71/durarara-anime-boys-glowing-ryuugamine-mikado-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/465/513/249/ethernet-cable-network-fiber-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/117/663/827/motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/465/881/112/imam-ali-ibn-abi-talib-islam-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/873/636/890/abstract-render-futuristic-neon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/467/620/959/shapes-digital-art-colorful-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/255/43/777/steelseries-sensei-computer-mice-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/378/297/160/fibre-fiber-optics-blender.jpg",
    "https://c1.wallpaperflare.com/preview/987/533/173/coding-programming-code-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/731/193/197/digital-art-hexagon-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/1011/125/291/computer-keyboard-electronics-modern.jpg",
    "https://c1.wallpaperflare.com/preview/51/968/867/industry-industry-4-internet-of-things.jpg",
    "https://c4.wallpaperflare.com/wallpaper/210/246/480/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/24/962/480/android-motherboard-hd-wallpaper-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/976/376/911/industry-industry-4-network-interfaces.jpg",
    "https://c4.wallpaperflare.com/wallpaper/504/945/79/binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/356/565/210/vector-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/91/704/936/abstract-background-canvas-code.jpg",
    "https://c4.wallpaperflare.com/wallpaper/205/228/1012/overwatch-sombra-sombra-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/927/349/183/internet-cyber-network-finger.jpg",
    "https://c4.wallpaperflare.com/wallpaper/233/804/879/matrix-images-for-backgrounds-desktop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/474/209/83/portal-game-aperture-laboratories-video-games-valve-corporation-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/736/144/879/forward-businessman-tablet-control.jpg",
    "https://c1.wallpaperflare.com/preview/808/231/767/coder-programming-computer-screen-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/323/431/733/futuristic-headphones-cityscape-science-fiction-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/472/997/abstract-pattern-texture-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/141/593/220/code-syntax-highlighting-php-programming-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/393/501/210/anonymous-we-are-legion-internet-cyberspace.jpg",
    "https://c4.wallpaperflare.com/wallpaper/15/267/798/artwork-new-retro-wave-cityscape-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/212/262/498/abstract-biotechnology-eye-illustration.jpg",
    "https://c4.wallpaperflare.com/wallpaper/475/215/816/notes-music-sound-treble-clef-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/286/95/776/wallhaven-simple-blue-gray-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/355/100/880/artistic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/859/61/276/network-earth-net-world-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/556/536/973/coding-numbers-binary-code-developer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/710/356/dark-death-heavy-metal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/579/458/496/computer-unixporn-unix-command-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/157/251/681/microsoft-windows-cellphone-photography-lights-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/802/898/452/fractal-abstract-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/965/738/408/technology-developer-touch-finger.jpg",
    "https://c4.wallpaperflare.com/wallpaper/99/575/693/binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/195/196/11/mass-effect-4-mass-effect-andromeda-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/422/878/518/htc-one-m7-htc-sense-5-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/214/714/441/abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/698/766/359/difficult-maze-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/281/500/13/digital-art-head-face-numbers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/870/817/226/anime-anime-girls-long-hair-blue-eyes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/792/371/658/quote-atheism-text-isaac-asimov-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/866/102/333/binary-binary-code-matrix-binary-system.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/310/480/rotation-circles-cubes-geometry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/75/818/369/typography-circuitry-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/679/587/671/technology-men-digital-art-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/163/889/204/minimalism-white-background-geometry-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/85/147/vaporwave-france-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/412/192/33/logo-digital-art-dark-background-grid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/892/978/407/martin-garrix-moti-virus-how-about-now-songs-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/384/251/700/daft-punk-typography-pixelated-pixel-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/616/912/durarara-anime-boys-glowing-ryuugamine-mikado-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/527/124/852/blue-red-and-pink-abstract-artwork.jpg",
    "https://c4.wallpaperflare.com/wallpaper/22/68/953/league-of-legends-twitch-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/160/779/788/abstract-waveforms-colorful-digital-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/390/289/284/businessman-intelligent-networked-control.jpg",
    "https://c4.wallpaperflare.com/wallpaper/429/156/877/video-games-aperture-laboratories-logo-valve-corporation-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/132/52/926/cyberpunk-2077-cyberpunk-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/424/97/133/opensuse-linux-gecko-wallpaper-preview.jpg"
  ]
  
const wallpaper = [
    "https://c4.wallpaperflare.com/wallpaper/954/5/66/code-programmers-programming-doom-game-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/603/260/908/programmers-programming-motivational-code-text-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/562/372/1012/programmers-javascript-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/34/4/853/programmer-coding-developer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/69/523/577/programmers-life-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/172/34/484/code-coding-geek-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/304/550/447/coding-computer-hacker-hacking-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/627/632/978/sql-computer-minimalism-syntax-highlighting-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/300/702/343/programmers-programming-motivational-code-text-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/676/293/313/programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/122/85/216/geek-programmer-black-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/67/603/linux-humor-programmers-tux-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/999/599/785/html-code-coffee-programmers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/733/132/870/programmers-life-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/967/71/738/javascript-minimalism-programmers-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/974/718/449/turned-on-macbook-pro.jpg",
    "https://c1.wallpaperflare.com/preview/655/355/690/programming-keyboard-computer-environment-syntax-program.jpg",
    "https://c1.wallpaperflare.com/preview/511/756/14/keyboard-gamer-computer-technology.jpg",
    "https://c4.wallpaperflare.com/wallpaper/923/289/124/java-programmer-coder-by-pcbots-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/803/820/833/humor-programmers-monkey-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/817/668/914/code-poetry-programmers-html-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/857/383/601/programmers-logo-php-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/138/546/498/technology-programming-coder-garfield-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/619/986/551/programming-programming-language-syntax-highlighting-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/817/87/825/programmer-coder-admin-administrator-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/257/925/144/mathematics-programming-computer-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/664/43/677/1240x775-px-life-programmer-sports-wrestling-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/820/559/740/connection-diagnosis-blur-cable-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/574/450/495/computer-developer-geek-informatique-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/974/810/394/macro-depth-of-field-laptop-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/493/577/128/javascript-minified-computer-code-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/157/1014/336/hacking-coding-code-hack.jpg",
    "https://c4.wallpaperflare.com/wallpaper/664/43/677/life-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/616/946/444/code-coding-profile-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/801/1010/392/programmers-simple-edit-code-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/595/1003/783/code-coder-coding-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/891/306/441/code-notebooks-programmers-motivational-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/348/29/220/code-coding-computer-developer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/195/687/738/autohotkey-programmers-code-programming-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/183/501/299/close-up-code-coding-css.jpg",
    "https://c4.wallpaperflare.com/wallpaper/357/193/225/linux-hackers-1337-pcbots-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/435/683/594/business-close-up-code-coding.jpg",
    "https://c0.wallpaperflare.com/preview/391/749/308/computer-source-code.jpg",
    "https://c4.wallpaperflare.com/wallpaper/8/533/170/cup-tool-cade-programmer-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/704/134/461/black-and-white-business-code-coding.jpg",
    "https://c4.wallpaperflare.com/wallpaper/999/599/785/programmers-orange-background-code-html-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/142/554/engineer-programmers-science-mathematics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/995/266/500/syntax-highlighting-code-html-css-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/702/612/1022/poetry-code-html-programmers-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/592/255/624/laptop-dark-background-macbook-pro-programmer.jpg",
    "https://c1.wallpaperflare.com/preview/228/1010/440/artificial-intelligence-robot-ai-ki.jpg",
    "https://c4.wallpaperflare.com/wallpaper/328/756/951/programmer-coding-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/346/92/879/code-coding-programmer-programming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/62/718/358/motivational-success-programmers-programming-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/218/40/1006/coder-developer-programmer-programming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/920/183/624/programmer-coder-admin-administrator-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/786/588/917/arduino-circuit-cables-breadboard.jpg",
    "https://c4.wallpaperflare.com/wallpaper/968/1007/710/technology-programming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1021/196/945/programmer-programmer-code-digital-illustration-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/803/820/833/monkey-programmers-computer-humor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/323/713/wordpress-html-text-code-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/784/834/506/computer-screen-black-background-dark.jpg",
    "https://c4.wallpaperflare.com/wallpaper/891/306/441/notebooks-coffee-macbook-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/372/843/684/chip-connection-diagnosis-blur-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/650/796/872/code-programming-coding-web.jpg",
    "https://c4.wallpaperflare.com/wallpaper/931/814/469/blur-damn-device-prevention-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/262/712/966/airpod-macbook-wallpaper-developer.jpg",
    "https://c0.wallpaperflare.com/preview/1/406/520/codes-coding-hacker-hacking.jpg",
    "https://c4.wallpaperflare.com/wallpaper/290/871/819/jack-dorsey-twitter-programmer-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/183/501/299/code-coding-programming-css.jpg",
    "https://c1.wallpaperflare.com/preview/906/1/293/abstract-business-code-coding.jpg",
    "https://c1.wallpaperflare.com/preview/314/296/971/abstract-achievement-bright-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/698/430/520/developers-wallpaper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/627/632/978/green-computer-hacking-syntax-highlighting-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/486/41/106/coding-computer-hacker-hacking.jpg",
    "https://c4.wallpaperflare.com/wallpaper/763/818/424/comics-the-programme-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/916/437/219/programmers-knight-magic-anime-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/449/564/1003/business-office-computer-keyboard.jpg",
    "https://c1.wallpaperflare.com/preview/839/683/615/programming-code-numbers-coding.jpg",
    "https://c4.wallpaperflare.com/wallpaper/211/727/813/programmers-life-motto-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/593/373/123/access-blur-close-up-code.jpg",
    "https://c0.wallpaperflare.com/preview/334/138/323/artificial-intelligence-background-blue.jpg",
    "https://c1.wallpaperflare.com/preview/1006/313/155/close-up-code-coding-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/207/88/1022/programmers-programming-motivational-code-text-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/78/855/714/background-code-coder-communication.jpg",
    "https://c0.wallpaperflare.com/preview/91/704/936/abstract-background-canvas-code.jpg",
    "https://c1.wallpaperflare.com/preview/664/919/586/laptop-programming-desktop-working.jpg",
    "https://c4.wallpaperflare.com/wallpaper/976/548/25/blur-device-laptop-winchester-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/142/554/engineer-humor-science-mathematics-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/663/399/690/web-page-htlm-code-programming.jpg",
    "https://c0.wallpaperflare.com/preview/582/661/291/business-laptop-office-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/427/862/416/technology-hacker-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/141/593/220/code-syntax-highlighting-php-programming-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/306/896/901/laptop-computer-keyboard-sale.jpg",
    "https://c0.wallpaperflare.com/preview/288/244/904/blur-close-up-code-coding.jpg",
    "https://c0.wallpaperflare.com/preview/294/143/653/blur-connection-data-center-datacenter.jpg",
    "https://c1.wallpaperflare.com/preview/404/181/207/code-code-editor-coding-computer.jpg",
    "https://c0.wallpaperflare.com/preview/971/679/638/person-using-laptop-in-programming.jpg",
    "https://c0.wallpaperflare.com/preview/591/474/555/dark-script-jetbrain-webstorm.jpg",
    "https://c0.wallpaperflare.com/preview/622/1009/80/mindset-programmer-machine-learning-brain.jpg",
    "https://c1.wallpaperflare.com/preview/767/199/766/programming-computer-environment-syntax-highlight.jpg",
    "https://c4.wallpaperflare.com/wallpaper/349/822/353/technology-geek-men-men-with-glasses-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/240/237/121/programmer-administrator-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/409/928/883/unicorn-math-math-unicorns-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/219/707/590/css3-css-code-java.jpg",
    "https://c4.wallpaperflare.com/wallpaper/812/525/134/code-coder-coding-computer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/544/289/167/file-script-dark-jetbrain.jpg",
    "https://c4.wallpaperflare.com/wallpaper/156/772/945/minimalism-blue-screen-bsod-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/694/628/967/code-programming-programmers-developer-linux-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/513/455/662/apple-businesswoman-coding-company.jpg",
    "https://c0.wallpaperflare.com/preview/66/740/843/programmer-computer-woman-support.jpg",
    "https://c4.wallpaperflare.com/wallpaper/820/619/692/programmers-programming-language-programming-vb-net-problem-solving-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/243/254/468/bed-bedroom-code-coding.jpg",
    "https://c0.wallpaperflare.com/preview/932/932/11/code-html-technology-programming.jpg",
    "https://c1.wallpaperflare.com/preview/392/325/144/apps-business-caf%C3%A9-coding.jpg",
    "https://c1.wallpaperflare.com/preview/574/155/736/computer-screen-man-male.jpg",
    "https://c4.wallpaperflare.com/wallpaper/870/699/795/computer-code-screen-communication-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/358/183/789/autohotkey-code-laptop-programmers-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/746/514/508/netherlands-neede-code-coding.jpg",
    "https://c4.wallpaperflare.com/wallpaper/254/329/285/ecmascript-javascript-programmers-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/985/650/492/white-imac-apple-keyboard.jpg",
    "https://c4.wallpaperflare.com/wallpaper/681/355/662/computer-desktop-developer-developing-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/619/514/569/code-coding-computer-data-development-html.jpg",
    "https://c4.wallpaperflare.com/wallpaper/694/767/643/bridge-of-spies-tom-hanks-james-donovan-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/421/458/465/laptop-mockup-business-office.jpg",
    "https://c1.wallpaperflare.com/preview/517/599/592/code-coding-computer-data.jpg",
    "https://c0.wallpaperflare.com/preview/852/439/732/setup-wide-code-maxcodes.jpg",
    "https://c4.wallpaperflare.com/wallpaper/747/509/197/apple-businesswoman-coding-company-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/997/984/929/code-coding-computer-data.jpg",
    "https://c4.wallpaperflare.com/wallpaper/14/784/837/services-hand-hosting-contract-servers-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/334/209/126/coding-programming-css-software-development.jpg",
    "https://c4.wallpaperflare.com/wallpaper/205/295/772/doctor-who-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/45/446/330/screen-code-work-office.jpg",
    "https://c1.wallpaperflare.com/preview/869/436/943/woman-interior-office-workspace.jpg",
    "https://c4.wallpaperflare.com/wallpaper/942/282/446/macbook-apple-laptop-keyboard-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/633/719/637/software-code-program-screen.jpg",
    "https://c0.wallpaperflare.com/preview/843/709/111/angry-annoyed-coffee-developer.jpg",
    "https://c1.wallpaperflare.com/preview/3/31/590/filmmaker-youtuber-script-screenwriter.jpg",
    "https://c0.wallpaperflare.com/preview/345/991/826/woman-developers-laptop-meeting.jpg",
    "https://c0.wallpaperflare.com/preview/510/731/812/close-up-coding-contemporary-dark.jpg",
    "https://c4.wallpaperflare.com/wallpaper/369/933/213/words-i-love-i-love-you-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1009/989/259/man-in-grey-shirt-using-grey-laptop-computer.jpg",
    "https://c0.wallpaperflare.com/preview/9/872/948/macbook-pro-turned-on.jpg",
    "https://c4.wallpaperflare.com/wallpaper/674/118/554/black-code-computing-developer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/838/951/635/apple-code-coding-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/368/53/apple-blue-buttons-device-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/414/59/632/code-programming-love-computer.jpg",
    "https://c1.wallpaperflare.com/preview/930/687/666/programming-php-web-photoshop-coding-code.jpg",
    "https://c0.wallpaperflare.com/preview/12/624/878/coaching-coders-coding-company.jpg",
    "https://c4.wallpaperflare.com/wallpaper/699/296/958/programmers-simple-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/50/876/832/engineer-programmers-science-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/105/587/711/adult-city-commerce-data-center.jpg",
    "https://c0.wallpaperflare.com/preview/1013/377/219/adult-beard-business-computer.jpg",
    "https://c0.wallpaperflare.com/preview/1011/227/664/computer-screen-workspace-table.jpg",
    "https://c0.wallpaperflare.com/preview/463/859/696/flat-screen-monitor-turned-on.jpg",
    "https://c1.wallpaperflare.com/preview/124/712/877/structure-plan-coding-strategy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/228/17/computer-humor-monkey-programmers-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/461/160/10/data-internet-computer-technology-business-information.jpg",
    "https://c0.wallpaperflare.com/preview/683/800/1024/adult-blur-connection-developer.jpg",
    "https://c0.wallpaperflare.com/preview/399/260/995/woman-programming-glasses-reflect.jpg",
    "https://c4.wallpaperflare.com/wallpaper/821/169/302/simple-science-philosophy-programmers-thoughtful-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/624/623/718/computer-fingers-keyboard-computer-programmer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/660/954/449/apple-black-and-white-camera-coder.jpg",
    "https://c0.wallpaperflare.com/preview/1014/984/39/blurred-background-code-coding-commerce.jpg",
    "https://c0.wallpaperflare.com/preview/678/254/330/desk-artsy-coffee-macbook.jpg",
    "https://c0.wallpaperflare.com/preview/52/311/802/netherlands-groningen-macbook-apple.jpg",
    "https://c1.wallpaperflare.com/preview/986/560/906/computer-notebook-office-code.jpg",
    "https://c1.wallpaperflare.com/preview/806/142/408/electrician-electric-electricity-worker.jpg",
    "https://c1.wallpaperflare.com/preview/485/291/675/codes-computer-electronics-laptop.jpg",
    "https://c4.wallpaperflare.com/wallpaper/509/136/840/close-up-code-coding-computer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/380/866/488/desktop-developer-developing-hacker.jpg",
    "https://c0.wallpaperflare.com/preview/425/840/851/developer-development-from-above-laptops.jpg",
    "https://c0.wallpaperflare.com/preview/725/29/216/united-states-orem-code-programming.jpg",
    "https://c4.wallpaperflare.com/wallpaper/192/616/42/coaching-coders-coding-company-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/420/456/6/drums-drummer-floor-sticks.jpg",
    "https://c1.wallpaperflare.com/preview/511/619/772/computer-computer-code-screen-monitor-computer-screen-programming.jpg",
    "https://c4.wallpaperflare.com/wallpaper/101/2/523/apple-blogging-business-coding-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/185/114/349/business-man-laptop-work-outdoor.jpg",
    "https://c1.wallpaperflare.com/preview/109/427/670/apple-blogging-business-coding.jpg",
    "https://c0.wallpaperflare.com/preview/270/973/189/woman-coding-dark-night.jpg",
    "https://c0.wallpaperflare.com/preview/377/406/573/businessman-coder-desk-guy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/871/196/860/apple-coder-coding-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/298/50/506/code-coffee-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/498/354/473/code-programmer-the-program-code-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/734/295/740/coder-coding-contemporary-desk.jpg",
    "https://c4.wallpaperflare.com/wallpaper/819/497/298/computer-laptop-programmer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/885/290/450/adult-coder-coding-company.jpg",
    "https://c0.wallpaperflare.com/preview/486/39/706/coding-computer-developer-development.jpg",
    "https://c0.wallpaperflare.com/preview/438/429/302/gear-minimal-code-maxcodes.jpg",
    "https://c1.wallpaperflare.com/preview/407/873/267/business-man-laptop-work-outdoor.jpg",
    "https://c1.wallpaperflare.com/preview/181/223/831/blueprint-company-concept-creative.jpg",
    "https://c4.wallpaperflare.com/wallpaper/279/797/185/jack-dorsey-twitter-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/337/584/954/business-codes-coding-communication-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/893/842/416/laptop-business-man-from-above-it-expert.jpg",
    "https://c0.wallpaperflare.com/preview/740/416/901/coding-computer-connection-data.jpg",
    "https://c4.wallpaperflare.com/wallpaper/937/481/144/programmer-coding-white-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/10/680/974/code-coding-computer-cyberspace.jpg",
    "https://c4.wallpaperflare.com/wallpaper/206/743/698/adult-apple-device-business-code-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/171/181/102/men-machinery-hardware-server-connectivity-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/346/410/552/computers-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/156/471/791/blog-writing-blogging-coding.jpg",
    "https://c4.wallpaperflare.com/wallpaper/30/484/1007/code-coffee-headphones-macbook-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/781/173/243/podcast-popular-shows-announcement.jpg",
    "https://c4.wallpaperflare.com/wallpaper/350/659/616/programmer-code-notebooks-motivational-macbook-headphones-coffee-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/410/772/40/home-office-programming-programmer-laptop.jpg",
    "https://c1.wallpaperflare.com/preview/522/339/740/satellite-dishes-reception-satellite-broadcasting-satellite-tv-radio-watch-tv.jpg",
    "https://c1.wallpaperflare.com/preview/284/288/968/antenna-television-reception-watch-tv-reception.jpg",
    "https://c0.wallpaperflare.com/preview/816/925/156/web-developer-conference-room-coding-meeting.jpg",
    "https://c4.wallpaperflare.com/wallpaper/350/906/521/inscriptions-letters-texture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/377/406/489/developer-illustration-node-js-javascript-typescript-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/230/347/796/adult-computer-developer-development.jpg",
    "https://c1.wallpaperflare.com/preview/990/311/594/beverage-coffee-computer-cup.jpg",
    "https://c0.wallpaperflare.com/preview/612/154/485/pc-programmer-office-stress.jpg",
    "https://c1.wallpaperflare.com/preview/766/989/307/burnout-programmer-computer-stress.jpg",
    "https://c1.wallpaperflare.com/preview/732/662/461/computer-from-above-hands-first-person.jpg",
    "https://c4.wallpaperflare.com/wallpaper/545/781/174/businessman-coder-computer-desk-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/432/566/421/company-concept-creative-creativity-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/621/109/191/sound-engineer-mixer-console-smile-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/744/714/575/sofa-macbook-laptop-code.jpg",
    "https://c1.wallpaperflare.com/preview/904/680/975/man-despair-problem-null.jpg",
    "https://c4.wallpaperflare.com/wallpaper/235/206/515/close-up-code-coding-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/715/111/593/adult-blur-business-code-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/286/535/806/close-up-code-coding-communication.jpg",
    "https://c4.wallpaperflare.com/wallpaper/855/550/561/administrator-attack-burnout-calculator-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/544/8/957/close-up-code-coding-computer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/65/135/577/access-code-coding-connection.jpg",
    "https://c0.wallpaperflare.com/preview/654/218/515/adult-coder-coding-connection.jpg",
    "https://c0.wallpaperflare.com/preview/891/403/761/black-android-smartphone.jpg",
    "https://c0.wallpaperflare.com/preview/523/948/881/programmer-typing-silhouette-computer.jpg",
    "https://c0.wallpaperflare.com/preview/487/795/616/turned-on-flat-screen-compute-monitor-on-gray-desk.jpg",
    "https://c0.wallpaperflare.com/preview/881/902/571/adult-blur-business-chair.jpg",
    "https://c0.wallpaperflare.com/preview/736/894/409/united-states-palm-bay-coding-apple.jpg",
    "https://c1.wallpaperflare.com/preview/889/353/297/coding-macbook-laptop-computer.jpg",
    "https://c0.wallpaperflare.com/preview/367/467/797/adult-apple-blouse-businesswoman.jpg",
    "https://c4.wallpaperflare.com/wallpaper/250/39/627/board-browser-computer-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/584/623/586/planet-uranus-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/55/448/918/laptop-apple-keyboard-technology.jpg",
    "https://c1.wallpaperflare.com/preview/989/740/1/smartphone-keyboard-desk-workplace.jpg",
    "https://c0.wallpaperflare.com/preview/830/645/300/adult-attractive-beautiful-brunette.jpg",
    "https://c1.wallpaperflare.com/preview/526/609/150/close-up-code-coding-computer.jpg",
    "https://c1.wallpaperflare.com/preview/752/432/975/satellite-dishes-reception-satellite-broadcasting-satellite-tv.jpg",
    "https://c0.wallpaperflare.com/preview/864/598/424/adult-app-developer-coding-coffee.jpg",
    "https://c1.wallpaperflare.com/preview/282/563/731/application-blur-business-code.jpg",
    "https://c4.wallpaperflare.com/wallpaper/161/219/652/computer-naruto-keyboard-tablet-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/647/522/573/persno-screen-monitor-desk.jpg",
    "https://c1.wallpaperflare.com/preview/218/478/338/antenna-roof-antenna-watch-tv-television-reception.jpg",
    "https://c0.wallpaperflare.com/preview/539/894/561/coding-computer-developer-development.jpg",
    "https://c0.wallpaperflare.com/preview/218/971/769/code-coding-computer-css.jpg",
    "https://c1.wallpaperflare.com/preview/942/598/381/data-hand-keyboard-laptop.jpg",
    "https://c1.wallpaperflare.com/preview/741/522/337/skills-competition-exhibition-programming-programmer.jpg",
    "https://c1.wallpaperflare.com/preview/921/407/790/programmable-hour-hands-time.jpg",
    "https://c4.wallpaperflare.com/wallpaper/594/949/87/code-coffee-programmer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/473/148/944/blueprint-company-concept-creative-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/612/880/863/text-menu-computer-screen.jpg",
    "https://c0.wallpaperflare.com/preview/409/45/195/furniture-grass-plant-human.jpg",
    "https://c4.wallpaperflare.com/wallpaper/990/659/585/clinic-comptuer-dentist-doctor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/185/518/439/code-developer-programmers-hd-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/39/638/424/automata-programmable-sensors-automation.jpg",
    "https://c0.wallpaperflare.com/preview/507/992/967/adult-connection-daylight-developer.jpg",
    "https://c0.wallpaperflare.com/preview/115/184/957/adult-black-and-white-developer-development.jpg",
    "https://c0.wallpaperflare.com/preview/745/227/672/busy-developer-development-girl.jpg",
    "https://c0.wallpaperflare.com/preview/476/13/286/adult-coding-collaborate-colleagues.jpg",
    "https://c0.wallpaperflare.com/preview/322/158/480/adult-coder-developer-education.jpg",
    "https://c0.wallpaperflare.com/preview/287/920/898/adult-book-series-books-bookshelves.jpg",
    "https://c0.wallpaperflare.com/preview/423/1005/156/adult-data-developer-education.jpg",
    "https://c0.wallpaperflare.com/preview/998/789/242/computers-developer-development-friends.jpg",
    "https://c0.wallpaperflare.com/preview/185/488/963/computer-design-man-male.jpg",
    "https://c0.wallpaperflare.com/preview/1013/186/325/alone-communication-device-digital.jpg",
    "https://c0.wallpaperflare.com/preview/1007/135/592/adult-business-communication-computer.jpg",
    "https://c0.wallpaperflare.com/preview/505/789/80/coding-computer-developer-development.jpg",
    "https://c1.wallpaperflare.com/preview/801/10/435/skills-competition-exhibition-programming-programmer.jpg",
    "https://c1.wallpaperflare.com/preview/140/120/954/television-remote-control-television-programme-tv-news.jpg",
    "https://c1.wallpaperflare.com/preview/570/638/326/apple-keyboard-mac-typing.jpg",
    "https://c1.wallpaperflare.com/preview/762/17/255/computer-programmer-it-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/287/978/353/adult-apple-coder-coding-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/552/659/802/coder-computer-laptop-macbook-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/464/141/225/band-close-up-concert-drum-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/96/870/511/mockup-business-office-laptop.jpg",
    "https://c1.wallpaperflare.com/preview/291/892/973/book-programme-cover-planes.jpg",
    "https://c1.wallpaperflare.com/preview/1013/812/43/computer-code-coding-programming.jpg",
    "https://c0.wallpaperflare.com/preview/510/846/372/business-computer-connection-daylight.jpg",
    "https://c0.wallpaperflare.com/preview/21/520/1024/photo-xamarin-hacking.jpg",
    "https://c0.wallpaperflare.com/preview/280/420/918/code-html-technology-programming.jpg",
    "https://c0.wallpaperflare.com/preview/430/149/151/iqp8blvfjvll6l7k77vpflr5nb.jpg",
    "https://c1.wallpaperflare.com/preview/332/305/125/apple-code-coding-computer.jpg",
    "https://c1.wallpaperflare.com/preview/141/349/170/laptop-apple-keyboard-technology.jpg",
    "https://c1.wallpaperflare.com/preview/527/675/655/alone-casual-caucasian-communication-device-digital.jpg",
    "https://c4.wallpaperflare.com/wallpaper/541/176/958/car-bmw-video-the-program-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/837/766/361/keyboard-macbook-mouse-office-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/388/779/775/business-cellphone-computer-connection-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/451/930/488/simple-programmers-programming-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/437/965/74/programmers-programming-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/794/495/691/keyboard-gloves-hacker-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/4/198/477/5bd1b57269a2e-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/374/413/184/adult-apple-blouse-businesswoman-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/585/824/865/programmer-administrator-computer-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/323/575/634/search-engine-optimization-seo-programmer-man.jpg",
    "https://c1.wallpaperflare.com/preview/141/780/36/stress-programmer-etnwickler-ibm.jpg",
    "https://c1.wallpaperflare.com/preview/842/893/109/framework-computer-ddr-ddr2.jpg",
    "https://c0.wallpaperflare.com/preview/765/696/900/developer-development-friends-indoors.jpg",
    "https://c0.wallpaperflare.com/preview/9/944/863/adult-desk-developer-developing.jpg",
    "https://c0.wallpaperflare.com/preview/54/1013/198/turned-on-laptop-showing-different-photos.jpg",
    "https://c0.wallpaperflare.com/preview/946/729/135/artificial-intelligence-fine-looking-hacking-laptop.jpg",
    "https://c0.wallpaperflare.com/preview/393/570/327/connection-data-desk-device.jpg",
    "https://c0.wallpaperflare.com/preview/360/468/953/genesis-big-bang-explosion-flash.jpg",
    "https://c0.wallpaperflare.com/preview/78/453/219/adult-business-businessman-caucasian.jpg",
    "https://c0.wallpaperflare.com/preview/451/512/911/adult-black-and-white-business-chair.jpg",
    "https://c0.wallpaperflare.com/preview/758/454/348/black-and-white-black-and-white-code-coding.jpg",
    "https://c0.wallpaperflare.com/preview/956/76/24/access-adult-business-coffee.jpg",
    "https://c0.wallpaperflare.com/preview/413/182/530/apple-code-coding-desk.jpg",
    "https://c0.wallpaperflare.com/preview/21/271/769/adult-computer-connection-convenience.jpg",
    "https://c0.wallpaperflare.com/preview/235/887/820/apple-coder-coding-internet.jpg",
    "https://c0.wallpaperflare.com/preview/816/925/156/web-developer-conference-room-coding-meeting.jpg",
    "https://c0.wallpaperflare.com/preview/718/27/666/web-developer-working-coder.jpg",
    "https://c0.wallpaperflare.com/preview/183/501/299/code-coding-programming-css.jpg",
    "https://c0.wallpaperflare.com/preview/428/545/231/alone-blogger-coffee-shop-counter.jpg",
    "https://c0.wallpaperflare.com/preview/807/763/603/laptop-computer-internet-people.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/591/607/adult-agency-business-coder-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/336/349/97/apple-black-and-white-camera-coder-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/62/744/833/engineer-programmers-science-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/640/871/683/typography-1920x1200-code-coffee-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/769/714/517/close-up-code-coding-computer.jpg",
    "https://c0.wallpaperflare.com/preview/371/947/638/developer-books-java-computer.jpg",
    "https://c0.wallpaperflare.com/preview/483/225/91/access-code-connection-contemporary.jpg",
    "https://c0.wallpaperflare.com/preview/987/665/212/chairs-developer-development-device.jpg",
    "https://c0.wallpaperflare.com/preview/187/980/970/data-diagram-hands-information.jpg",
    "https://c0.wallpaperflare.com/preview/128/506/328/adult-coding-connection-desk.jpg",
    "https://c0.wallpaperflare.com/preview/653/714/335/adult-communication-cute-developer.jpg",
    "https://c0.wallpaperflare.com/preview/204/716/6/adult-developer-development-facial-expression.jpg",
    "https://c0.wallpaperflare.com/preview/362/303/824/adult-developer-development-eyewear.jpg",
    "https://c0.wallpaperflare.com/preview/132/579/636/chairs-developer-development-electronics.jpg",
    "https://c0.wallpaperflare.com/preview/360/448/911/adult-coding-developer-development.jpg",
    "https://c0.wallpaperflare.com/preview/860/947/715/woman-programming-glasses-reflect.jpg",
    "https://c0.wallpaperflare.com/preview/270/973/189/woman-coding-dark-night.jpg",
    "https://c0.wallpaperflare.com/preview/432/151/768/guy-man-work-people.jpg",
    "https://c0.wallpaperflare.com/preview/705/847/615/work-workspace-it-computer.jpg",
    "https://c0.wallpaperflare.com/preview/882/205/69/laptop-macbook-wallpaper-developer.jpg",
    "https://c1.wallpaperflare.com/preview/218/535/774/computer-development-programmer-computer-programmer-software-development-hacker.jpg",
    "https://c1.wallpaperflare.com/preview/900/702/442/book-programme-timetable-events.jpg",
    "https://c1.wallpaperflare.com/preview/24/224/925/code-coding-computer-developer.jpg",
    "https://c1.wallpaperflare.com/preview/250/888/60/university-education-school-studying.jpg",
    "https://c1.wallpaperflare.com/preview/652/505/214/accountant-programmer-guys-joy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/494/796/60/services-hand-hosting-contract-servers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/152/540/51/funny-programmer-code-coffee-wallpaper-preview.jpg",
    
  ]
  
  
  const wallpaper2 = [
  "https://c4.wallpaperflare.com/wallpaper/288/623/752/technology-asus-rog-asus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1007/71/635/windows-10-technology-minimalism-black-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/137/542/433/technology-asus-rog-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/126/117/95/quote-motivational-digital-art-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1000/580/1015/88-girl-anime-girls-cyberpunk-futuristic-wallpaper-preview.jpg",                                                                                   "https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg",
    "https://c4.wallpaperflare.com/wallpaper/124/329/88/technology-amd-ryzen-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/663/947/813/oldboy-japanese-digital-art-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/900/842/city-digital-light-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/373/655/596/technology-asus-rog-city-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/336/163/715/honeycombs-abstract-minimalism-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/914/746/419/abstract-digital-art-minimalism-simple-background-wallpaper-preview.jpg",                                                                            "https://c4.wallpaperflare.com/wallpaper/670/883/685/plexus-atoms-neutrons-electrons-wallpaper-preview.jpg",                                                                                              "https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-anime-girls-original-characters-short-hair-wallpaper-preview.jpg",                                                                              "https://c4.wallpaperflare.com/wallpaper/104/517/295/dragon-ball-super-vegeta-super-saiyajin-blue-super-saiyan-blue-wallpaper-preview.jpg",                                                               "https://c4.wallpaperflare.com/wallpaper/795/764/910/skeleton-head-technology-bone-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/654/555/787/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",                                                                                        "https://c4.wallpaperflare.com/wallpaper/212/806/349/technology-amd-ryzen-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/351/447/799/circuits-minimalism-electronic-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/345/388/36/map-typography-colorful-world-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/857/457/204/iron-man-artwork-comic-books-superhero-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/793/103/631/typography-quote-bokeh-motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/204/67/597/technics-design-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/848/833/258/girl-chest-blonde-body-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/880/723/711/life-digital-design-graphic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1023/915/631/nasa-space-suit-digital-art-space-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/275/953/312/3d-digital-art-abstract-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/554/29/143/cyber-science-fiction-digital-art-concept-art-cyberpunk-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/913/752/910/digital-art-blue-leaves-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/93/298/371/steampunk-3d-artwork-eyes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/7/827/804/light-web-sky-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/538/723/588/the-avengers-avengers-age-of-ultron-superhero-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/945/420/8/asus-republic-of-gamers-logo-rog-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/470/652/917/anime-naruto-naruto-uzumaki-sasuke-uchiha-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/380/488/1016/technology-asus-rog-asus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/950/855/589/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/178/471/787/rick-and-morty-run-the-jewels-vector-graphics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/359/676/935/windows-10-blue-sky-galaxy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/547/376/904/technology-asus-rog-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/712/712/13/artwork-map-water-drops-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/760/708/868/spider-man-miles-morales-spider-man-into-the-spider-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/112/977/222/technology-hacker-hacking-virus-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/613/607/640/3d-abstract-abstract-neon-glow-teal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/590/506/446/dragon-ball-son-goku-ultra-instict-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/82/238/385/abstract-digital-art-technology-yellow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/483/576/977/abstract-hexagon-simple-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/835/254/325/gigabyte-aorus-logo-pc-gaming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/100/12/944/car-ferrari-458-vehicle-ferrari-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/690/443/technology-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/310/541/152/asus-motherboards-tilt-shift-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/456/660/955/the-avengers-avengers-age-of-ultron-superhero-costumes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/851/501/292/programming-code-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/648/716/840/iron-man-dark-background-superhero-grid-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/411/694/389/black-business-computer-desk.jpg",
    "https://c4.wallpaperflare.com/wallpaper/81/633/303/technology-asus-rog-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/58/483/756/digital-digital-art-artwork-illustration-romain-trystram-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/278/73/132/technology-amd-ryzen-amd-logo-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/845/91/817/solar-system-mercury-venus-earth-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/900/551/689/minimalism-hexagon-abstract-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/440/997/189/uchiha-itachi-naruto-shippuuden-edo-tensei-sharingan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/725/642/559/abstract-digital-light-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/183/732/1024/multiple-display-planet-space-solar-system-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/47/95/705/anonymus-hacker-computer-mask-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/406/979/698/amiga-retro-games-window-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/920/631/638/technology-windows-95-aesthetic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/250/869/141/road-depth-of-field-nature-bench-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/227/920/27/technology-asus-rog-asus-republic-of-gamers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/821/34/358/circuits-city-cpu-skyscraper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/196/131/596/star-wars-darth-vader-movies-anakin-skywalker-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/790/659/761/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/568/358/498/technics-design-data-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/678/58/326/abstract-laser-optical-device-device-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/364/318/503/digital-art-illustration-artwork-cityscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/66/41/250/cyberpunk-futuristic-computer-interfaces-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/139/610/492/quote-simple-motivational-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/654/495/649/motivational-black-background-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/626/511/the-dark-knight-heath-ledger-movies-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/464/336/901/digital-art-abstract-lines-cgi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/807/970/560/psychedelic-abstract-colorful-wolf-headphones-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/718/944/928/minimalism-geometry-triangle-nebula-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/850/12/1018/technology-dell-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/930/703/604/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/784/118/362/technology-digital-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/623/487/747/technology-code-coding-computer.jpg",
    "https://c4.wallpaperflare.com/wallpaper/517/673/184/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/338/479/585/windows-10-windows-vista-operating-system-technology-windows-7-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/161/571/676/abstract-digital-art-depth-of-field-hexagon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/681/945/301/windows-10-microsoft-gradient-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/718/282/457/servers-connection-computer-science-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/243/559/623/space-circles-graphics-planet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/403/467/730/technology-bitcoin-coin-money-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/815/939/650/technology-amd-radeon-red-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/415/710/452/windows-10-microsoft-operating-system-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/776/211/785/iron-man-marvel-comics-superhero-tony-stark-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/35/536/33/iron-man-marvel-comics-superhero-tony-stark-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/641/392/895/typography-quote-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/410/227/670/dragon-ball-super-son-goku-ultra-instinct-goku-kamehameha-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/525/561/186/abstract-design-fractal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/395/267/738/neon-abstract-digital-art-3d-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/293/952/22/iron-man-marvel-comics-superhero-the-avengers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/127/830/482/sword-art-online-anime-kirigaya-kazuto-sword-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/489/750/377/hacking-hackers-computer-anonymous-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/228/684/1/video-games-spider-man-2018-spider-man-marvel-comics-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/131/457/166/apple-black-colorful-colors.jpg",
    "https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/555/34/486/digital-art-robot-3d-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/650/710/378/windows-10-logo-minimalism-blurred-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/457/885/300/quote-typography-minimalism-text-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/353/981/279/brain-splitting-selective-coloring-musical-notes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/434/593/222/star-wars-darth-vader-sith-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/207/615/632/fantasy-art-texture-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/657/662/388/uchiha-itachi-naruto-anime-uchiha-sasuke-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/183/425/255/technology-shine-glow-abstract-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/88/907/625/razer-logo-pc-gaming-technology-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/14/432/956/laptop-computer-dark-room.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1008/284/1020/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/103/209/306/minimalism-window-windows-8-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/736/273/179/technology-circuit-boards-pcb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/244/41/128/quote-inspirational-typography-motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/666/714/531/windows-10-microsoft-windows-operating-system-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/269/523/701/marvel-comics-movies-marvel-heroes-iron-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/262/610/554/cpu-motherboard-geek-electrical-network-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/447/85/162/computer-lights-glow-blur-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/162/894/557/colorful-neon-computer-keyboards-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/617/934/481/abstract-3d-digital-art-render-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/436/521/237/asus-rog-republic-of-gamers-1920x1080-technology-asus-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/58/397/197/nvidia-gpus-technology-pc-gaming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/231/614/501/retrowave-retrowave-vaporwave-purple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/883/1014/427/hexagon-colorful-pattern-gradient-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/378/369/242/windows-8-microsoft-windows-nighttime-3840x1200-technology-windows-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/595/616/960/digital-art-delorean-time-travel-back-to-the-future-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/70/220/916/technology-binary-numbers-code-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/524/860/912/screen-code-coding-programming.jpg",
    "https://c1.wallpaperflare.com/preview/182/936/1023/hacker-silhouette-hack-anonymous.jpg",
    "https://c4.wallpaperflare.com/wallpaper/763/922/571/geometry-cyberspace-digital-art-red-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/537/890/341/technology-kali-linux-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/22/728/16/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/303/112/935/ps4-hd-4k-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/452/816/905/circuits-electronics-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/967/89/86/minimalism-code-quote-text-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/869/846/349/son-goku-dragon-ball-super-ultra-instinct-goku-dragon-ball-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/398/425/165/abstract-technology-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/700/312/942/digital-art-artwork-aoi-ogata-women-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/383/883/768/technology-4k-desktop-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/659/492/8/gigabyte-red-eye-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/14/642/346/technology-amd-ryzen-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/462/278/452/technology-abstract-shape-icon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/845/180/954/space-light-circle-planet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/559/874/482/animals-black-digital-graphic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/25/451/628/night-city-light-pixel-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/610/713/297/cpu-computer-circuit-boards-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/860/946/365/pc-gaming-motherboards-msi-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/719/640/12/marvel-comics-the-avengers-spider-man-avengers-infinity-war-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1021/44/55/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/453/844/953/enter-skull-hacker-hacking-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/224/784/911/5bd29f10b38f7-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/431/935/818/technology-anonymous-bitcoin-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/979/909/262/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/513/292/11/sketches-gradient-doodle-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/207/420/989/gigabyte-aorus-logo-pc-gaming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/995/290/473/humor-minimalism-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/697/441/184/naruto-shippuuden-anime-akatsuki-sharingan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/108/252/903/linux-kali-linux-nethunter-kali-linux-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/476/393/214/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/802/755/680/quote-computer-typography-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/548/294/490/artwork-digital-art-purple-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1024/891/821/music-steampunk-digital-art-typography-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/830/150/561/sackcloth-sackcloth-textured-laptop-ipad.jpg",
    "https://c4.wallpaperflare.com/wallpaper/339/994/508/technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/520/346/488/geometry-cyberspace-digital-art-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/737/93/233/technology-computer-hi-tech-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/869/40/914/windows10-microsoft-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/611/595/814/abstract-3d-neon-glow-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/662/910/457/minimalism-simple-background-quote-motivational-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/644/560/36/business-cafe-coffee-drinking.jpg",
    "https://c4.wallpaperflare.com/wallpaper/290/228/26/digital-art-circuits-minimalism-multiple-display-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/233/885/77/ball-light-3d-bubble-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/259/235/829/blue-technology-electric-blue-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/59/305/180/blue-world-social-network-line-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/84/546/439/technology-asus-rog-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/897/305/computer-render-technology-digital-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/114/619/629/designer-desk-gardens-home-office.jpg",
    "https://c4.wallpaperflare.com/wallpaper/635/977/307/digital-art-computer-map-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/240/743/659/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/958/359/831/msi-dragon-logo-pc-gaming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/90/66/377/pc-gaming-lenovo-computer-hardware-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1001/537/160/minimalism-linux-command-lines-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/346/806/481/low-poly-abstract-blue-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/567/897/304/naruto-shippuuden-uchiha-itachi-akatsuki-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/103/209/306/minimalism-technology-blue-windows-8-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/649/598/466/dragon-ball-dragon-ball-super-vegeta-super-saiyajin-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/883/138/328/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/425/883/754/simple-background-simple-motivational-quote-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/52/431/722/justice-league-superman-batman-wonder-woman-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/307/184/920/ubuntu-linux-terminal-hacker-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/747/739/iron-man-marvel-comics-cartoon-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/151/622/416/technology-omen-hp-omen-hewlett-packard-hd-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/636/118/480/commerce-africa-asia-australia.jpg",
    "https://c4.wallpaperflare.com/wallpaper/82/204/3/keanu-reeves-john-wick-movies-john-wick-chapter-2-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/727/296/877/rick-and-morty-sunset-rick-sanchez-delorean-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/388/395/818/abstract-color-pattern-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/418/430/3840x1080-px-cityscape-monochrome-night-skyline-technology-other-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/144/109/144/multiple-display-minimalism-pacman-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/677/807/774/pc-gaming-computer-pc-cases-technology-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/874/965/110/black-business-computer-desk.jpg",
    "https://c4.wallpaperflare.com/wallpaper/869/140/994/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/512/288/956/technology-amd-ryzen-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/738/200/850/technology-alienware-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/99/965/176/car-lamborghini-lamborghini-aventador-bokeh-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/155/294/538/blue-light-electric-blue-connection-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/144/521/235/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/610/533/164/hp-omen-notebook-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/618/374/502/digital-light-fractal-graphic-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/933/766/507/asus-republic-of-gamers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/297/790/473/asus-rog-republic-of-gamers-1920x1080-technology-asus-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/442/14/493/abstract-texture-pattern-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/932/506/331/nature-digital-light-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/178/891/583/guardians-of-the-galaxy-vol-2-marvel-cinematic-universe-rocket-raccoon-groot-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/743/421/76/geometry-abstract-lines-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/765/94/547/technics-planet-earth-globe-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/580/191/825/space-planet-abstract-space-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/867/221/226/razer-pc-gaming-colorful-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/681/372/0/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/252/655/739/digital-art-abstract-lines-cgi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/109/20/884/lenovo-lenovo-legion-pc-gaming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/311/587/retrowave-retrowave-purple-purple-background-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/79/806/473/book-business-drawing-education.jpg",
    "https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/155/716/gray-abstract-textured-texture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1007/636/49/dragon-ball-super-ultra-instinct-ultra-instinct-goku-dragon-ball-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1012/460/1013/asus-owl-pc-gaming-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/341/65/160/coffee-laptop-notes-5k-uhd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/467/696/839/blue-light-network-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/628/1009/137/leonardo-watch-kekkai-sensen-anime-anime-boys-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/631/161/245/futuristic-cityscape-city-skyscraper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/121/20/857/digital-art-illustration-sunset-city-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/9/737/99/carbon-fiber-textured-texture-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/293/54/537/circuit-boards-technology-multiple-display-pcb-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/510/269/202/apple-inc-iphone-technology-macbook-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/670/757/116/background-bed-headboard-decoration-design.jpg",
    "https://c4.wallpaperflare.com/wallpaper/504/528/842/star-wars-darth-vader-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/42/522/438/3d-3d-abstract-abstract-neon-glow-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/751/2/550/chart-graph-business-finance.jpg",
    "https://c4.wallpaperflare.com/wallpaper/223/136/926/anime-naruto-itachi-uchiha-kunai-naruto-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/442/506/466/technology-lenovo-black-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/315/320/18/music-digital-graphic-motion-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/615/275/818/boombox-sound-dark-technology-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/661/326/378/black-business-desk-diary.jpg",
    "https://c4.wallpaperflare.com/wallpaper/72/387/739/technology-asus-rog-nvidia-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/578/493/137/geometry-poly-vector-dots-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg",
    "https://c4.wallpaperflare.com/wallpaper/804/592/905/anime-star-light-digital-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/391/422/547/plexus-atoms-protons-neutrons-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/764/702/540/artwork-skull-neon-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/458/699/803/building-animated-movies-movies-spider-man-into-the-spider-verse-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/557/622/449/computer-microchip-digital-art-cgi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/995/406/443/code-dark-humor-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/905/678/526/green-matrix-code-world-map-hd-wallpaper-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/697/898/445/cloud-computing-illustration-technology.jpg",
    "https://c4.wallpaperflare.com/wallpaper/794/320/992/windows-7-dark-microsoft-windows-blue-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/708/932/8/technics-digital-light-laser-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/374/708/1000/typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/675/643/715/astronaut-space-simple-background-popsicle-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/561/918/410/vaporwave-windows-95-classical-art-simple-background-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/198/135/731/cyber-attack-abstract-access.jpg",
    "https://c4.wallpaperflare.com/wallpaper/342/166/508/windows-10-abstract-gmunk-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/111/885/280/abstract-design-graphic-digital-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/374/183/709/illustration-artwork-aenami-road-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/510/145/85/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/966/752/913/windows-8-microsoft-windows-windows-10-window-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/48/915/610/technology-hacker-anonymous-black-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/694/888/914/keyboards-hands-internet-network-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/414/1005/88/republic-of-gamers-asus-rog-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/929/892/9/atmosphere-night-retrofuturism-graphic-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/200/547/701/technology-blue-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/16/14/469/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/383/713/309/typography-quote-creativity-motivational-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/404/275/807/cartoons-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/384/186/395/cortana-windows-10-microsoft-windows-technology-video-games-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/838/267/661/artwork-city-anime-girls-room-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/962/854/477/orb-abstract-3d-abstract-glowing-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/509/682/370/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/734/762/470/digital-art-samurai-mask-picture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/547/177/100/dragon-ball-super-ultra-instinct-goku-dragon-ball-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/414/978/531/brain-technology-artwork-minimalism-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/248/992/890/business-business-meeting-coffee-conference-room.jpg",
    "https://c4.wallpaperflare.com/wallpaper/165/607/615/neon-1980s-retro-style-space-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/807/1021/167/chart-graph-business-finance.jpg",
    "https://c4.wallpaperflare.com/wallpaper/643/777/87/exercising-motivational-text-dark-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/819/205/214/minimalism-programming-code-lyrics-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/560/441/72/nvidia-gpus-logo-metal-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/636/189/292/minimalism-motivational-inspirational-typography-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/486/761/306/aesthetics-vaporwave-seapunk-light-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/214/451/779/avid-technology-computer-design-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/660/1007/743/abstract-pattern-design-texture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/762/1013/129/artwork-colorful-justin-maller-facets-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/724/737/268/windows-10-microsoft-windows-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/534/736/989/dmc-delorean-delorean-back-to-the-future-car-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/596/57/130/iron-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/85/257/190/hacker-text-technology-anonymous-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/517/601/185/acer-computer-predator-movie-tablet-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/263/921/102/business-communication-computer-concept.jpg",
    "https://c4.wallpaperflare.com/wallpaper/627/632/978/sql-computer-minimalism-syntax-highlighting-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/979/356/878/naruto-shippuuden-red-eyes-hat-akatsuki-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/873/916/901/infographics-network-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/663/689/high-tech-earth-hd-wallpaper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/807/298/411/life-quote-typography-green-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/695/533/68/science-fiction-fantasy-art-eyes-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/82/587/742/digital-art-venom-miles-morales-spider-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/877/791/778/minimalism-sunset-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/710/959/585/1920x1080-px-avid-technology-computer-simple-sports-other-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/651/1015/792/digital-art-landscape-sun-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/423/753/73/world-map-time-zones-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/809/627/607/iron-man-2-tony-stark-robert-downey-jr-iron-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/960/661/200/5bd463bb7b62a-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/308/1018/458/republic-of-gamers-asus-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/652/531/737/wood-aerial-background-beverage.jpg",
    "https://c4.wallpaperflare.com/wallpaper/981/660/903/retrowave-synthwave-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1021/163/815/technology-networking-abstract-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/246/462/453/laptop-macbook-iphone-apple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/947/120/979/technics-globe-design-world-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/435/808/918/shigatsu-wa-kimi-no-uso-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/575/25/99/digital-art-minimalism-cube-cross-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/236/155/603/technology-msi-dragon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/364/505/149/geometry-cyberspace-digital-art-red-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/951/991/685/star-wars-darth-vader-low-poly-stormtrooper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/53/100/907/map-time-zones-infographics-time-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/777/165/94/nvidia-gpus-geforce-computer-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/124/110/387/block-blockchain-business-chain.jpg",
    "https://c4.wallpaperflare.com/wallpaper/124/740/1010/technology-the-matrix-quote-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/581/864/856/imperial-class-star-destroyer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/588/504/858/asus-republic-of-gamers-pc-gaming-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/869/662/349/technology-green-razer-keyboards-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/166/619/692/data-center-server-technology-network-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/105/687/604/spiderman-into-the-spider-verse-2018-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/74/858/446/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/534/99/742/code-microsoft-visual-studio-programming-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/631/85/159/room-anime-girls-original-characters-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/306/871/598/technics-design-graphic-information-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/68/643/740/kali-linux-kali-linux-nethunter-linux-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/656/526/448/leaf-nature-green-spring.jpg",
    "https://c4.wallpaperflare.com/wallpaper/811/818/436/planes-city-clouds-sky-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/32/159/609/windows-10-windows-vista-operating-system-technology-windows-7-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/527/102/511/programming-code-php-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/756/651/772/tirpitz-azur-lane-glowing-eyes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/425/996/41/technics-computer-technology-internet-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/740/824/907/solar-system-planet-sun-digital-art-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/449/329/157/closeup-photo-of-eyeglasses.jpg",
    "https://c4.wallpaperflare.com/wallpaper/252/752/885/technology-amd-ryzen-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/90/662/484/abstract-geometry-dark-black-background-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/1007/355/640/industry-industry-4-web-network.jpg",
    "https://c0.wallpaperflare.com/preview/179/449/151/technology-networking-abstract-business.jpg",
    "https://c4.wallpaperflare.com/wallpaper/31/909/218/digital-art-cityscape-city-lights-colorful-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/903/766/544/movies-space-star-wars-millennium-falcon-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/814/460/873/microsoft-windows-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/264/769/193/windows-windows-10-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/998/393/minimalism-light-bulb-dark-simple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/677/116/37/abstract-design-graphic-pattern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/450/780/877/pattern-rectangular-cube-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/30/49/301/play-station-sony-video-games-controllers-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/588/623/690/interior-white-office-workspace.jpg",
    "https://c4.wallpaperflare.com/wallpaper/240/372/908/background-widescreen-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/464/938/326/artwork-digital-art-aenami-clouds-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/429/718/350/simple-background-robot-digital-art-machine-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1011/743/584/artwork-fantasy-art-concept-art-spaceship-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/511/27/710/women-anime-girls-realistic-render-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/599/451/727/microsoft-windows-windows-10-androids-robot-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/601/939/767/laser-neon-stars-grid-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/766/878/400/technology-cracked-screen-broken-screen-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/960/830/338/chart-graph-business-finance.jpg",
    "https://c4.wallpaperflare.com/wallpaper/878/69/159/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/834/602/559/computer-keyboards-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/426/231/774/windows-7-microsoft-windows-logos-1920x1080-technology-windows-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/812/77/148/anime-anime-girls-vocaloid-hatsune-miku-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/509/101/311/pixiv-fantasia-pixiv-fantasia-t-archer-natus-original-characters-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/29/673/216/rick-and-morty-rick-sanchez-morty-smith-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/913/616/944/technology-programming-coding-python-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/676/215/815/abstract-graphic-design-vector-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/203/713/300/physics-equation-dynamic-science-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/195/688/power-buttons-black-background-texture-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/457/342/531/digital-light-fractal-laser-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/697/957/breaking-bad-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/464/114/381/naruto-shippuuden-hatake-kakashi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/26/27/767/computer-internet-life-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/904/821/218/headset-music-purple-nice-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/936/743/649/404-not-found-microsoft-windows-minimalism-humor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/94/357/66/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/375/507/587/science-fiction-futuristic-neon-futuristic-city-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/99/400/55/typography-quote-minimalism-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/577/493/313/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/476/548/972/anime-anime-girls-battlefield-battlefield-1-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/558/262/490/technology-asus-rog-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/271/682/513/notebooks-cat-laptop-monochrome-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/910/680/7/anime-anime-boys-stars-cowboy-bebop-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/855/198/481/terminal-hacker-computer-ubuntu-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/792/460/915/1920x1080-px-code-coding-programming-simple-background-anime-ah-my-goddess-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1000/1006/366/network-server-bokeh-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/301/711/793/1920x1080-px-anarchy-anonymous-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/137/923/759/harry-potter-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/229/305/291/ryzen-red-yellow-tech-technology-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/243/73/138/royal-enfield-macro-logo-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/783/165/261/technology-visual-studio-code-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/718/465/267/science-fiction-robot-digital-art-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/499/507/628/science-fiction-artwork-digital-art-futuristic-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/739/93/119/computer-keyboard-connection-contemporary-desk.jpg",
    "https://c4.wallpaperflare.com/wallpaper/949/116/862/nvidia-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/197/17/282/windows-vista-microsoft-windows-operating-system-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/606/1006/492/computer-person-technology-adobe.jpg",
    "https://c4.wallpaperflare.com/wallpaper/936/850/568/technology-nzxt-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/445/808/986/bitcoin-cash-coins-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/91/83/586/weapons-background-rifle-sniper-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/217/814/556/tv-show-la-casa-de-papel-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/142/643/636/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/159/645/247/blur-the-camera-lens-camera-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/494/472/28/artwork-terminator-cyborg-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/137/319/618/80s-spaceship-planet-energy-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/902/813/220/digital-art-render-abstract-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/32/959/594/abstract-digital-art-dna-3d-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/847/342/380/galaxy-space-digital-art-abstract-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1004/573/189/typography-motivational-word-clouds-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/35/579/807/tv-test-patterns-monoscope-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/323/934/342/shingeki-no-kyojin-mikasa-ackerman-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/260/237/126/59687788344d1.jpg",
    "https://c0.wallpaperflare.com/preview/303/224/922/interior-tech-technology-coffee.jpg",
    "https://c1.wallpaperflare.com/preview/961/162/325/space-view-cupola-iss.jpg",
    "https://c4.wallpaperflare.com/wallpaper/645/183/650/harrier-royal-navy-cockpit-helicopters-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/483/913/258/advanced-ai-anatomy-artificial.jpg",
    "https://c4.wallpaperflare.com/wallpaper/133/601/142/amd-technology-cpu-simple-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/439/45/172/abstract-digital-color-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/586/447/591/fantasy-art-digital-art-science-fiction-artwork-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/714/340/932/technology-blue-digital-art-binary-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/966/194/527/world-black-white-simple-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/243/125/209/abstract-future-design-modern-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/857/388/968/iron-man-marvel-comics-superhero-the-avengers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/416/182/375/blue-chip-color-fee-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/471/767/754/abstract-ae-plexus-cyan-dots-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/738/425/71/msi-dragon-logo-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/79/358/432/military-military-aircraft-spain-flag-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/835/683/707/asus-carbon-1920x1080-technology-asus-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/910/473/239/ryzen-amd-minimalism-black-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/144/222/411/code-rainbows-lights-colorful-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/55/1021/309/digital-art-science-fiction-mask-futuristic-armor-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/759/70/489/data-center-server-geometry-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/120/286/377/cristiano-ronaldo-sanchez-desing-numbers-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/40/849/87/anime-girls-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/885/625/125/computer-gigabyte-msi-gpus-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/72/379/768/technology-security-multimedia-electronic-device-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/33/308/858/minimal-art-marvel-iron-man-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/462/222/574/linux-arch-linux-unix-unixporn-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/104/564/872/katana-samurai-sword-monochrome-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/373/817/275/star-wars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/901/752/17/gandalf-linux-debian-command-lines-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/84/858/370/triple-screen-colorful-lines-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/294/86/418/monochrome-neon-logo-memes-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/697/714/348/vaporwave-purple-windows-xp-windows-98-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/180/800/976/errors-black-simple-background-minimalism-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/67/926/344/black-background-camera-technology-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/37/455/807/5760x1080-px-simple-background-skull-triple-screen-technology-linux-hd-art-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/510/217/278/technology-business-computer-designer.jpg",
    "https://c1.wallpaperflare.com/preview/499/312/897/paper-business-finance-document.jpg",
    "https://c4.wallpaperflare.com/wallpaper/745/925/176/asus-pc-asus-rog-technology-other-hd-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/494/986/408/dragon-ball-super-son-goku-super-saiyan-god-dragon-ball-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/591/584/998/battery-humor-minimalism-dark-humor-wallpaper-preview.jpg",
    "https://c0.wallpaperflare.com/preview/944/356/969/concept-construction-page-site.jpg",
    "https://c4.wallpaperflare.com/wallpaper/491/837/145/solar-system-simple-background-minimalism-sun-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/751/81/104/technology-gigabyte-aorus-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/810/9/232/music-sony-alien-vin-diesel-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1012/939/595/technics-technology-internet-web-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/22/174/532/abstract-low-poly-triangle-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/870/921/133/car-ford-mustang-khyzyl-saleem-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/570/202/574/vector-planet-abduzeedo-8-bit-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/822/27/818/computer-technology-glowing-circuit-boards-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/760/732/851/data-center-server-technology-network-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/358/477/298/titanfall-2-video-games-titanfall-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/385/337/229/simple-simple-background-minimalism-blueprints-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/146/773/70/makoto-shinkai-kimi-no-na-wa-anime-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/11/624/62/simple-desk-clocks-books-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/224/762/335/technology-nvidia-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/399/220/936/minimalism-dark-black-computer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/366/1001/165/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/608/821/147/abstract-digital-art-triangle-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/984/376/15/full-metal-alchemist-elric-edward-fullmetal-alchemist-brotherhood-full-metal-alchemist-brotherhood-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/835/841/278/galaxy-space-space-art-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/305/441/244/abstract-pattern-digital-art-geometry-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/367/577/132/black-black-and-white-keyboard-laptop.jpg",
    "https://c4.wallpaperflare.com/wallpaper/496/595/628/asus-computer-electronic-gamer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/294/586/569/minimalism-digital-art-simple-background-music-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/566/684/979/dragon-ball-super-saiyan-blue-son-goku-dragon-ball-super-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/409/193/technology-gigabyte-aorus-hd-wallpaper-preview.jpg"
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
				const groupDesc = isGroup ? groupMetadata.desc : ''
			const isPremium = premium.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
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
			try {
			ff = await serialize(msg)
			const m = simple.smsg(caliph, ff)
			} catch {}
			
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
            if (isOwner) return reply(`*「 GROUP LINK DETECTOR 」*\nKamu Owner Bot, Aku Tidak Akan kick kamu!`)
                    await reply(`*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
                    await delay(2000)
                    await caliph.groupRemove(m.chat, [sender])
              }
            }
            if (isGroup && antiVirtex && !isGroupAdmins) {
            if (budy.length > 5001) {
            await reply(`*「 VIRTEX DETECTOR 」*\nMaaf Teks melebihi 5000 karakter, bot anggap virus!`)
            await delay(2000)
            await caliph.groupRemove(m.chat, [sender])
            }
        }
              if ('19:15:00' == time) {
              loaded.splice(time)
              fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
              sendMess(ownerNumber, 'Sukses reset Loaded Message')
              }
              if (!isCmd && !msg.key.fromMe && isGroup && isSimi && budy != undefined) {
						loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
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
                  if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
              loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
 } else if ('cekprefix' == budy) {
        costum(`*CALIPH BOT USING PREFIX [ ${prefix} ]*`, text, '0@s.whatsapp.net', cr)
                 loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
} else if (msg.message.extendedTextMessage.contextInfo.mentionedJid.includes('6281215199447@s.whatsapp.net')) {
tes = await caliph.sendMessage(from, 'lord @6281215199447', 'conversation', { contextInfo: { mentionedJid : ownerNumber }, quoted: msg })
caliph.reply(from, 'Ada yang cariin tuh', tes)
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
			if (isCmd && !isGroup) {console.log(color('[EXEC]'), color(moment(msg.messageTimestamp.low * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroup) {console.log(color('[EXEC]'), color(moment(msg.messageTimestamp.low * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupMetadata.subject))}

			if (isCmd) {
                  loaded.push("@caliph91_")
fs.writeFileSync('./src/mess.json', JSON.stringify(loaded))
 }
      //[AUTO READ] Auto read message 

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
       if (isCmd && isFiltered(sender)) return reply('Kamu Terdeteksi Spam command Bot\nSilahkan Tunggu 5 detik')
		switch(command) {
				case 'help':
				case 'menu':
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
┃ ❏ Api: 「 http://caliph-apis.herokuapp.com 」
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
╚═〘 CALIPH BOT 〙`, freply)
addFilter(sender)
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
               caliph.reply(from, Buffer.from(args.join(' '), 'utf-8').toString('base64'), msg)
               addFilter(sender)
					break
               case 'decode64':
               if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply('limit lu abis')
				if (isBanned) return reply(mess.only.benned)
               caliph.reply(from, Buffer.from(args.join(' '), 'base64').toString('utf-8'), msg)
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
					{
					let stik = fs.readFileSync('./tmp/' + 'stikergradient' + '.webp')
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
					caliph.reply(from, teks, freply)
					
addFilter(sender)
					break
                case 'asmaulhusna':
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                data = await fetchJson(`https://recoders-area.herokuapp.com/api/muslim/asmaulhusna?apikey=FreeApi`)
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
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
                                                
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', async function () {
								console.log('Finish')
								caliph.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: msg})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								limitAdd(sender)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=120, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && msg.message.videoMessage.seconds < 16 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 16)) {
						if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								caliph.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else {
						reply(`kirim Gambar/video/gif dengan caption *${prefix}sticker*`)
						}
					//	await reply('stiker Terkirim '+(`${latensi.toFixed(4)}`) + 'detik')
						
						addFilter(sender)
					break
               case 'stikergif':
               case 'stickergif':
               case 'sgif':
               if (!isUser) return reply(mess.only.userB)
               old = new Date
                if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                if ((isMedia && msg.message.videoMessage.seconds < 16 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 16)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						const media = await caliph.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								caliph.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=10, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}  else {
						reply(`hanya untuk gif/video yang berdurasi -15 detik`)
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
					    data = await fetchJson('https://tobz-api.herokuapp.com/api/randomloli?apikey='+tobzkey)
					reply(mess.wait)
					pine = await getBuffer(data.result)
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
                for (let i = 0; i < 20000; i++) {
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
  await sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${await bitly(dl_link)}`)
  limitAdd(sender)
  if (!isPremium) return await reply('Maaf Audio Tidak Dapat Dikirim, Karena Anda Bukan User Premium')
  buffer = await getBuffer(dl_link)
  caliph.sendMessage(from, buffer, audio, { quoted: msg, filename: title+'.mp3', mimetype: 'audio/mp4' })
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
					anu = await fetchJson(`https://mhankbarbar.moe/api/ytsearch?q=${encodeURIComponent(args.join(' '))}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					teks = '--------------------------\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*links* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
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
              
				case 'tiktok':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImgFromUrl('https://i.ibb.co/f8K14jz/327aae709c00.jpg','Terjadi Kesalahan')
					buffer = await getBuffer(anu.result)
					caliph.sendMessage(from, buffer, video, {caption: anu.quote, quoted:msg, mimetype:'video/mp4'})
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
					linkimg = await shortlink(await uploadimg(await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100&full_page=true`), 'ssweb')) || ''
					 try {
       await sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100&full_page=true`, linkimg)
       } catch {
       await sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100`, linkimg)
       }
       limitAdd(sender)
				 addFilter(sender)
					break
                case 'ssf':
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
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', cr)
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
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
					exec(`wget ${random} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', cr)
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
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
						    await delay(3000)
							await caliph.sendMessage(_.jid, buff, image, {caption: `*「 INFO 」*\n\n${broadcast}`, contextInfo: { mentionedJid: user }})
						}
					} else {
						for (let _ of anu) {
						await delay(3000)
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
					if (args.length < 1) return reply('.......')
					if (isMedia && !msg.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buff = await caliph.downloadMediaMessage(encmedia)
							caliph.sendMessage('status@broadcast', buff, image, {caption: `${args.join(' ')}`})
					} else {
							sendMess('status@broadcast', `${args.join(' ')}`)
						reply('Suksess broadcast')
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
                members_id = []
               mentioned = members_id
               for (let mem of groupMembers) {
               members_id.push(mem.jid)
					}
                     using = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    for (let member of using) {
                    if (member.endsWith('@s.whatsapp.net')) 
                    await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
              await sendMess(from, 'sukses kick all member')
              members_id.splice('reset')
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
                members_id = []
               mentioned = members_id
               for (let mem of groupMembers) {
               members_id.push(mem.jid)
					}
                     using = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    for (let member of using) {
                    if (member.endsWith('@s.whatsapp.net')) 
                    await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
              await sendMess(from, 'sukses kick all member')
              members_id.splice('reset')
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
						await deplay(1500)
							await caliph.sendMessage(_, buff, image, {caption: `*「 INFO 」*\n\n${args.join(' ')}`})
						}
					} else {
						for (let _ of groups) {
						await delay(1500)
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
					if (mentioned[0] === botNumber) return await caliph.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', msg)
                    let users = mentioned.filter(u => !(u == groupOwner || u.includes(caliph.user.jid)))
                    if (groupAdmins.includes(mentioned[0])) return await caliph.reply(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.')
                    for (let member of users) {
                    if (member.endsWith('@s.whatsapp.net')) 
                     await delay(3000)
                    await caliph.groupRemove(m.chat, [member])
                    }
					addFilter(sender)
					break
               case 'qkick':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					quoteds = msg.message.extendedTextMessage.contextInfo.participant
					try {
					 await caliph.groupRemove(from, [quoteds])
					 } catch {
					 caliph.sendMessage(from, `Gagal Kick Member @${quoteds.split('@')[0]}`, text, {contextInfo: { mentionedJid : [quoteds] }})
					 }
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
                    if (groupAdmins.includes(sender)) return await caliph.reply(from, 'Kamu Admin Grup, Saya Tidak Akan kick anda...', msg)
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
                var kali1 = kalian.split("x")[0];
                var kali2 = kalian.split("x")[1];
                perkalian = bdr.rdb.perkalian(kali1, kali2)
                reply(perkalian)
            addFilter(sender)
					break
           case 'kodepos': // Update By RzkyO & ItsmecaliphXSec404	
				caliph.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://recoders-area.herokuapp.com/api/kodepos?kota=${args.join(' ')}&apikey=FreeApi`)
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
                inz = ban.indexOf(heh)
						samih.splice(inz, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi�')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
addFilter(sender)
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
                inz = ban.indexOf(heh)
						welkom.splice(inz, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ��')
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
                inz = ban.indexOf(heh)
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
		           if (err) return caliph.sendMessage(from, 'Error!', text, { quoted: msg })
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
					linkgc = await caliph.bagilinkgrup(from)
					caliph.sendMessage(from, `${linkgc.link}\n\nLink Group *${linkgc.title}*`, text, {quoted: msg, detectLinks: false})
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
				niowner = await caliph.sendMessage(from, {displayName: "Caliph", vcard: vcard}, contact)
                caliph.sendMessage(from, 'Jika Ada Bug Silahkan Chat Owner!', text, {quoted: niowner})
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
                caliph.sendMessage(from, `Status :\n- *${loaded.length}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${personal.length}* Personal Chats\n- *${totalchat.length}* Total Chats\n- ${baterai}% Battery level\n*Speed :* ${processTime(msg.messageTimestamp.low, moment())} _second_\nPenggunaan Ram : ${ram}`, text, {quoted: msg})
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
		 // caliph.reply(from, '```Downloading....```', msg)
             var encmedia  = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            try {
           // caliph.reply(from, '```Uploading....```', msg)
          linkimg = await uploadimg(fs.readFileSync(media), `${sender}_img`)
          namafile = args.join(' ')
          db_img.push({namafile : namafile, url : linkimg})
          fs.writeFileSync('./src/db_img.json', JSON.stringify(db_img, null, '\t'))
          reply('Success Save image to database')
          limitAdd(sender)
          fs.unlinkSync(media)
          } catch (e) {
          caliph.reply(from, `${e}`, msg)
          }
          addFilter(sender)
					break
         case 'getimg':
         data = await getimage(args.join(' ')) || 'A Server Error Occurred'
         caliph.reply(from, data, msg)
         addFilter(sender)
					break
        case 'listimg':
         caliph.reply(from, JSON.stringify(db_img, null, '\t'), msg)
         addFilter(sender)
					break
        case 'quotes':
         if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
        try {
        data = await fetchJson('https://tobz-api.herokuapp.com/api/randomquotes?apikey='+tobzkey)
        reply(`Quotes : ${data.quotes}\nAuthor : ${data.author}`)
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
            if (args.length == 0) return caliph.reply(from, `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, msg)
            cariresep = args.join(' ')
            hasilresep = await resep.resep(cariresep)
            await caliph.reply(from, hasilresep + '\n\nIni kak resep makanannya..', msg)
            .catch(() => {
                caliph.reply(from, 'Ada yang Error!', msg)
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
			        random = Math.floor(Math.random() * 6) + 1
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, '0@s.whatsapp.net', 'DADU '+random)
						//fs.unlinkSync(rano)
						limitAdd(sender)
					})
					
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
				case 'demote':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					for (let i of mentioned) {
                    await caliph.groupDemoteAdmin(m.chat, [i])
                     }
				    addFilter(sender)
					break
                  case 'promote':
					 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					for (let i of mentioned) {
                    await caliph.groupMakeAdmin(m.chat, [i])
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
                    caliph.reply(from, `Title: ${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`, msg)
                })
            })
            .catch(() => {
                caliph.reply(from, 'Ada yang Error!', msg)
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
  buffer = await getBuffer(dl_link)
  caliph.sendMessage(from, buffer, video, { quoted: msg, filename: title+'.mp4', thumbnail: await toBase64(thumb)})
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
               case 'neonime':
					  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
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
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
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
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
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
        exec(`wget ${data} -O ${ranp}`, (err) => {
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						caliph.sendMessage(from, buffer, image, { quoted: msg })
						limitAdd(sender)
						fs.unlinkSync(ranp)
					})
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
                data = await fetchJson(`https://mhankbarbar.moe/api/jadwalshalat?daerah=${body.slice(9)}&apiKey=${apiKey}`)
                hasil = `�� shubuh : ${data.Subuh}\n�� Dzuhur : ${data.Dzuhur}\n�� Ashar : ${data.Ashar}\n�� Maghrib : ${data.Maghrib}\n�� isya : ${data.isya}`
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
                 caliph.reply(from, randKey.teks, msg)
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
				random = wallpaper[Math.floor(Math.random() * wallpaper.length)]
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case 'wallpaper3':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				random = wallpaper2[Math.floor(Math.random() * wallpaper2.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case 'wallpaper4':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				random = wallpaper3[Math.floor(Math.random() * wallpaper3.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case 'wallpaper5':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				random = wallpaper4[Math.floor(Math.random() * wallpaper4.length)]
				reply(mess.wait)
       caliph.sendMessage(from, await getBuffer(random), image, { quoted: msg})
       limitAdd(sender)
       addFilter(sender)
					break
case 'wallpaper6':
      if (isLimit(sender)) return
     if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				random = wallpaper5[Math.floor(Math.random() * wallpaper5.length)]
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
          caliph.groupLeave(from)
          caliph.deleteChat(from)
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
                case 'run':
                if (!isOwner) return reply(mess.only.ownerB)
                try {
                sy = args.join(' ')
                eval(sy) 
                } catch(e) {
                meng = await caliph.sendMessage(from, `${e}`, text, { quoted: msg })
                }
                addFilter(sender)
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
		   caliph.reply(from, '```Downloading....```', msg)
             var encmedia  = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
            var media = await caliph.downloadAndSaveMediaMessage(encmedia)
            try {
            caliph.reply(from, '```Uploading....```', msg)
          linkimg = await uploadimg(fs.readFileSync(media), `${sender}_img`)
          caliph.sendMessage(from, linkimg, text, { quoted: msg })
          limitAdd(sender)
          } catch (e) {
          caliph.reply(from, `${e}`, msg)
          }
addFilter(sender)
					break
     case 'delptt':
     if (!isQuotedAudio) return caliph.reply(from, 'Reply Audionya Om', msg)
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
				      Math_js = require('mathjs')
				    mtk = args.join(' ')
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
 thumbnail = await caliph.sendMessage(from, await getBuffer(thumb), image, { caption:`*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${await bitly(dl_link) || await shortlink(dl_link)}`, quoted:msg})
//  if (!isPremium) await reply('Maaf Audio Tidak Dapat Dikirim, Karena Anda Bukan User Premium')
 // if (!isPremium) return caliph.sendMessage(from, 'Download Sendiri, gosah Manja!', text, { quoted: thumbnail })
 if (filesize > 30000) return sendImgFromUrl(thumb, `*「 YOUTUBE PLAY 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${filesizeF}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${await shortlink(dl_link)}`)
  buffer = await getBuffer(dl_link)
  caliph.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: msg, filename: title+'.mp3' })
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
case 'mengetes':
results = await yts(query)
console.log(results)
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
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                                         reply(mess.wait)
                                         owgi = await caliph.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${anu.display_url}`
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
   data = await fetchJson('https://caliph-apis.herokuapp.com/api/fakta?apikey=CaliphGans')
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
               case 'tovideo':
					if (!isQuotedSticker) return caliph.reply(from, 'Reply Stickernya om', msg)
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
                   datas = await fetchJson(`https://caliph-apis.herokuapp.com/api/hilih?kata=${quotedText}&apikey=CaliphGans`)
                   reply(datas.teks.after)
                   } catch {
                   quotedText = args.join(' ')
                   datas = await fetchJson(`https://caliph-apis.herokuapp.com/api/hilih?kata=${quotedText}&apikey=CaliphGans`)
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
                     var imgbb = require('imgbb-uploader')
                     teks = encodeURIComponent(args.join(' '))
                     reply(mess.wait)
                     try {
                     pp = `https://api.zeks.xyz/api/emoji-image?apikey=${zekskey}&emoji=${teks}`
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
                                       axios.get(`https://recoders-area.herokuapp.com/api/qrread?url=${teks}&apikey=FreeApi`)
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
case 'return':
if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
   if (!isOwner) return reply(mess.only.ownerB)
    try {
    caliph.sendMessage(from, JSON.stringify(await perintah(args.join(' ')), null, '\t'), text, { quoted: msg }) 
 //   console.log(JSON.stringify(await perintah(args.join(' ')), null, '\t'))
    } catch (e) {
    reply(`${e}`)
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
                     var imgbb = require('imgbb-uploader')
                     teks = encodeURIComponent(args.join(' '))
                     reply(mess.wait)
                     try {
                     pp = `https://api.vhtear.com/textxgif?text=${teks}&apikey=${vkey}`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('attp.gif', datae, 'base64')
                ran = getRandom('.webp')
                media_ = './attp.gif'
					exec(`ffmpeg -i ${media_} ${ran}`, (err) => {
						fs.unlinkSync(media_)
						if (err) return reply('� Gagal, pada saat mengkonversi sticker ke gambar �')
						buffer = fs.readFileSync(ran)
						caliph.sendMessage(from, buffer, sticker, {quoted: msg})
						fs.unlinkSync(ran)
						limitAdd(sender)
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
         caliph.reply(from, mess.wait, msg)
         data = await fetchJson(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(args.join(' '))}`)
         base64 = data.base64
         var buffer = Buffer.from(base64.slice(22), 'base64')
          linkimg = await uploadimg(buffer, `${sender}_img`)
          ranp = getRandom('.png')
          rano = getRandom('.webp')
          exec(`wget ${linkimg} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=60 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
          //fs.unlinkSync(ranp)
          if (err) return reply(mess.error.stick)
          pps = fs.readFileSync(rano)
          caliph.sendMessage(from, pps, sticker, {quoted: msg})
          //fs.unlinkSync(rano)
          })
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
                inz = ban.indexOf(heh)
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
               sendImgFromUrl(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=https://google.com/search?q=${googleQuery}&quality=100&full_page=true`, result)
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
              data = await fetchJson(`https://caliph-apis.herokuapp.com/api/textmaker/game?text=${teks[0]}&text2=${teks[1]}&theme=pubg&apikey=CaliphGans`)
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
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=onlyonedev`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				pp = await caliph.getProfilePicture(botNumber)
				caliph.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Caliph Bot_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await toBase64(pp)} } }})
				limitAdd(sender)
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
  await reply('_Testing ping..._')
 await reply((new Date - old) + 'ms')
  addFilter(sender)
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
   buffer = await fetchJson(`https://caliph-apis.herokuapp.com/api/textmaker?text=${teks[0]}&text2=${teks[1]}&text3=${teks[2]}&theme=google-suggestion&apikey=CaliphGans`)
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
    case 'restart':
    if (!isOwner) return caliph.reply(from, mess.only.ownerB, msg)
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
    if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
   if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
   ngetag = `${args[0]}@s.whatsapp.net`
   caliph.sendMessage(from, `@${args[0]} Tagged!`, text, {quoted:msg, contextInfo: {"mentionedJid": [ngetag]}})
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
                await sendMess(gclist, `Maaf bot sedang pembersihan, total chat aktif : ${groupall.length}`)
                await delay(2000)
                await caliph.groupLeave(gclist)
            }
            reply('Success leave all group!')
            addFilter(sender)
					break
    case 'fetch':
    var util = require('util')
    teks = args.join(' ')
    res = await fetch(teks)
  var txt = await res.text()
  try {
    txt = util.format(JSON.parse(txt))
  } catch (e) {
    txt = txt
  } finally {
    reply(txt.slice(0, 65536))
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
  data = await fetchJson('https://api.zeks.xyz/api/epep?text='+args.join(' ')+'&apikey='+zekskey)
  sendImgFromUrl(data.result, 'GAME 8 BIT')
  limitAdd(sender)
  addFilter(sender)
					break
   case 'translate':
  translate(body.slice(11+args[0].length), {tld: 'cn', to: args[0]}).then(res => {
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
              reply(`*Speed :* ${processTime(msg.messageTimestamp.low, moment())} _second_`)
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

var dataString = '{ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Bk8kew9JldP", "title": "Bitly API Documentation", "tags": [ "bitly", "api" ], "deeplinks": [ { "app_id": "com.bitly.app", "app_uri_path": "/store?id=123456", "install_url": "https://play.google.com/store/apps/details?id=com.bitly.app&hl=en_US", "install_type": "promote_install" } ] }';

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
reply(`${ngetes}`)
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
                 /*if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }*/
        }                 
        if (reading) {
		await caliph.chatRead(from)
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

}
starts()
/*
spawn('convert', [
						'./database/gambar/welcome.jpg',
						'-gravity',
						'Center',
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'2540x1438',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0-65',
						pushnem,
						'-fill',
						'#ffffff',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+35',
						'# '+daftar.length,
						'-fill',
						'#ffffff',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+220',
						'Joining '+mdata.subject,
						'./database/gambar/welkom.jpg'
						])
				setTimeout( () => {
				ppimg = fs.readFileSync('database/gambar/welkom.jpg')
				alfa.sendMessage(mdata.id, ppimg, MessageType.image)
					}, 2000)
			} else if (anu.action == 'remove') {
				spawn('convert', [
						'./database/gambar/sayonara.jpg',
						'-gravity',
						'Center',
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'2540x1438',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0-65',
						pushnem,
						'-fill',
						'#ffffff',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+35',
						'# '+daftar.length,
						'-fill',
						'#ffffff',
						'-pointsize',
						'70',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+220',
						'Leaving '+mdata.subject,
						'./database/gambar/leave.jpg'
						])
				setTimeout( () => {
				ppimg = fs.readFileSync('database/gambar/leave.jpg')
				alfa.sendMessage(mdata.id, ppimg, MessageType.image)
					}, 2000)*/
					
					