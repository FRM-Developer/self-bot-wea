
const help = (prefix, pushname, readMore, hari2, time, getLimit, sender, getLevelingXp, getLevelingLevel) => {
	return `
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
╚═〘 CALIPH BOT 〙
`
}

const readme = (prefix) => {
    return `*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linktiktok]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/ZSvTAXnR/*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}igStalk @caliph91_*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*`
}

const snk = (prefix) => {
return `Syarat dan Ketentuan Bot *CALIPH*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
const ownermenu = (prefix) => {
return `
╔══✪〘 OWNER 〙✪══
║
┣ ❏ *${prefix}block @user*
┣ ❏ *${prefix}unblock @user*
┣ ❏ *${prefix}unban @user*
┣ ❏ *${prefix}ban @user*
┣ ❏ *${prefix}restart*
┣ ❏ *${prefix}setppbot*
┣ ❏ *${prefix}setbio*
┣ ❏ *${prefix}run [kode JavaScript]*
┣ ❏ *${prefix}return [kode Javascript]
┣ ❏ *${prefix}exec [kode Executor] 
║
╚═〘 CALIPH BOT 〙`
}
const kerangmenu = (prefix) => {
    return `
╔══✪〘 KERANG 〙✪══
║
┣ ❏ *${prefix}apakah [optional]*
┣ ❏ *${prefix}rate* [optional]*
┣ ❏ *${prefix}bisakah* [optional]*
┣ ❏ *${prefix}kapankah* [optional]*
║
╚═〘 CALIPH BOT 〙`
}
const groupmenu = (prefix) => {
return `
╔══✪〘 GROUP 〙✪══
║
┣ ❏ Member: 
┣ ❏ *${prefix}wame*
┣ ❏ *${prefix}groupinfo*
┣ ❏ *${prefix}adminList*
┣ ❏ *${prefix}ownerGroup*
┣ ❏ *${prefix}listonline
┣ ❏ *${prefix}sider  [replyChatBot]
┣ ❏ *${prefix}delete [replyChatBot]*
┣ ❏ *${prefix}kickme 
║
┣ ❏ Admin: 
┣ ❏ *${prefix}kick @tagmember
┣ ❏ *${prefix}antilink [enable|disable]
┣ ❏ *${prefix}group [open|close]*
┣ ❏ *${prefix}NSFW [enable|disable]*
┣ ❏ *${prefix}left [enable|disable]*
┣ ❏ *${prefix}welcome [enable|disable]*
┣ ❏ *${prefix}simi [enable|disable]*
┣ ❏ *${prefix}leave
┣ ❏ *${prefix}hidetag [teks]
┣ ❏ *${prefix}tagall 
┣ ❏ *${prefix}antivirtex [enable/disable]
║
╚═〘 CALIPH BOT 〙`
}
const animemenu = (prefix) => {
return `
╔══✪〘 ANIME 〙✪══
║
┣ ❏ *${prefix}loli*
┣ ❏ *${prefix}waifu*
┣ ❏ *${prefix}husbu*
┣ ❏ *${prefix}quotesnime* 
┣ ❏ *${prefix}wait*
║
╚═〘 CALIPH BOT 〙`
}
const funmenu = (prefix) => {
    return `
╔══✪〘 FUN 〙✪══
║
┣ ❏ *${prefix}caklontong*
┣ ❏ *${prefix}family100*
┣ ❏ *${prefix}tebakgambar*
┣ ❏ *${prefix}cerpen*
┣ ❏ *${prefix}pantun*
┣ ❏ *${prefix}fakta*
┣ ❏ *${prefix}motivasi*
┣ ❏ *${prefix}katabijak*
┣ ❏ *${prefix}quotes*
┣ ❏ *${prefix}thunder [teks]*
┣ ❏ *${prefix}blackpink [teks]*
┣ ❏ *${prefix}pornhub [teks1|teks2]*
┣ ❏ *${prefix}ramalpasangan [kamu|pasangan]*
┣ ❏ *${prefix}artinama [nama]*
┣ ❏ *${prefix}nulis [nama|kelas|teks]*
┣ ❏ *${prefix}sandwriting [teks]*
┣ ❏ *${prefix}quotemaker [|teks|author|theme]*
┣ ❏ *${prefix}csgo [teks]*
┣ ❏ *${prefix}pubglogo [teks1|teks2]*
┣ ❏ *${prefix}nulis2 [teks]*
┣ ❏ *${prefix}nulis3 [teks]*
┣ ❏ *${prefix}crossfire [teks]*
║
╚═〘 CALIPH BOT 〙
`
}
const mediamenu = (prefix) => {
return `
╔══✪〘 MEDIA 〙✪══
║
┣ ❏ *${prefix}covid [negara]*
┣ ❏ *${prefix}jadwalTv [channel]*
┣ ❏ *${prefix}cuaca [tempat]*
┣ ❏ *${prefix}tts [kode bhs] [teks]*
┣ ❏ *${prefix}igstalk [@username]*
┣ ❏ *${prefix}tiktokstalk [@username]*
┣ ❏ *${prefix}kbbi [query]*
┣ ❏ *${prefix}wiki [query]*
┣ ❏ *${prefix}google [query]*
┣ ❏ *${prefix}pinterest [query]*
┣ ❏ *${prefix}brainly [query]*
┣ ❏ *${prefix}ytsearch [query]*
┣ ❏ *${prefix}lirik [optional]*
┣ ❏ *${prefix}chord [optional]*
┣ ❏ *${prefix}qrcode [optional]*
┣ ❏ *${prefix}qrread [reply|send image]
┣ ❏ *${prefix}map [optional]*
┣ ❏ *${prefix}checkip [ipaddress]*
┣ ❏ *${prefix}ss [linkWeb]*
┣ ❏ *${prefix}bitly [linkWeb]*
┣ ❏ *${prefix}tinyurl [url]
║
╚═〘 CALIPH BOT 〙`
}
const nsfwmenu = (prefix) => {
   return `
╔══✪〘 NSFW 〙✪══
║
┣ ❏ *${prefix}bokep
┣ ❏ *${prefix}hentai*
┣ ❏ *${prefix}blowjob*
║
╚═〘 CALIPH BOT 〙`
}
const othermenu = (prefix) => { 
    return `
╔══✪〘 OTHER 〙✪══
║
┣ ❏ *${prefix}bahasa*
┣ ❏ *${prefix}sticker*
┣ ❏ *${prefix}stickergif*
┣ ❏ *${prefix}ttp [teks]*
┣ ❏ *${prefix}attp [teks]*
┣ ❏ *${prefix}toimg*
┣ ❏ *${prefix}neko*
┣ ❏ *${prefix}pokemon*
┣ ❏ *${prefix}inu*
┣ ❏ *${prefix}infoGempa*
┣ ❏ *${prefix}quotes*
┣ ❏ *${prefix}dadu*
┣ ❏ *${prefix}owner [teks]*
┣ ❏ *${prefix}koin*
┣ ❏ *${prefix}wa.me*
┣ ❏ *${prefix}getjodoh
║
╚═〘 CALIPH BOT 〙`
}
const downloadmenu = (prefix) => { 
    return `
╔══✪〘 DOWNLOAD 〙✪══
║
┣ ❏ *${prefix}play* *[TITLE]*
┣ ❏ *${prefix}tiktok**[UrlTiktok]*
┣ ❏ *${prefix}ytmp3**[UrlYT]*
┣ ❏ *${prefix}ytmp4**[UrlYT]*
┣ ❏ *${prefix}fetch**[Url]*
┣ ❏ *${prefix}ig [linkIG]
║
╚═〘 CALIPH BOT 〙`
}

const stickermenu = (prefix) => { 
    return `
╔══✪〘 STICKER 〙✪══
║
┣ ❏ *${prefix}stickwm* *[PACKNAME|AUTHOR]*
┣ ❏ *${prefix}sticker**[caption|reply]*
┣ ❏ *${prefix}stickergif**[video/gif]*
┣ ❏ *${prefix}ttp *[teks]*
┣ ❏ *${prefix}toimg* *[reply stiker]*
┣ ❏ *${prefix}ttg *[teks]*
┣ ❏ *${prefix}ttd *[teks]*
┣ ❏ *${prefix}trigger *[caption|reply]*
┣ ❏ *${prefix}colors *[caption|reply]*
┣ ❏ *${prefix}attp [teks]*
║
╚═〘 CALIPH BOT 〙`
}
/********EXPORTS MENU***********/
exports.othermenu = othermenu //othermenu
exports.nsfwmenu = nsfwmenu // nsfwmenu
exports.mediamenu = mediamenu //mediamenu
exports.funmenu = funmenu //funmenu
exports.animemenu = animemenu //animemenu
exports.groupmenu = groupmenu //groupmenu
exports.downloadmenu = downloadmenu //downloadmenu
exports.kerangmenu = kerangmenu //kerangmenu
exports.ownermenu = ownermenu //ownermenu
exports.help = help //menu
exports.readme = readme // readme
exports.snk = snk // snk (syarat & ketentuan)
exports.stickermenu = stickermenu //stickermenu
/**********END EXPORTS***************/