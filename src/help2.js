const help = (prefix, pushname, readMore, hari2, time) => {
	return `
┏ ❣ *CALIPH BOT* ❣
╿ *${hari2}*
╿ *${time}*
╿${readMore}
┷┯ ☾ Group Commands ☽
   ╽
   ┠❥ *${prefix}add 62858xxxxx*
   ┠❥ *${prefix}kick @tagmember*
   ┠❥ *${prefix}promote @tagmember*
   ┠❥ *${prefix}demote @tagadmin*
   ┠❥ *${prefix}tagall*
   ┠❥ *${prefix}adminList*
   ┠❥ *${prefix}ownerGroup*
   ┠❥ *${prefix}leave*
   ┠❥ *${prefix}linkGroup*
   ┠❥ *${prefix}delete [replyChatBot]*
   ┠❥ *${prefix}NSFW [enable|disable]*
   ┠❥ *${prefix}welcome [enable|disable]*
   ┠❥ *${prefix}simi [enable|disable]*
   ┠❥ *${prefix}leveling [enable|disable]
   ┠❥ *${prefix}level
   ╿${readMore}
 ┷┯ ☾ Others Commands ☽
   ╽
   ┠❥ *${prefix}sticker*
   ┠❥ *${prefix}stickerGif*
   ┠❥ *${prefix}creator*
   ┠❥ *${prefix}jadwalShalat [daerah]*
   ┠❥ *${prefix}jadwalTv [channel]*
   ┠❥ *${prefix}cuaca [tempat]*
   ┠❥ *${prefix}tts [kode bhs] [teks]*
   ┠❥ *${prefix}igStalk [@username]*
   ┠❥ *${prefix}tiktokstalk [@username]*
   ┠❥ *${prefix}wiki [query]*
   ┠❥ *${prefix}brainly [pertanyaan]*
   ┠❥ *${prefix}loli*
   ┠❥ *${prefix}husbu*
   ┠❥ *${prefix}info*
   ┠❥ *${prefix}infoGempa*
   ┠❥ *${prefix}meme*
   ┠❥ *${prefix}quotemaker [|teks|author|theme]*
   ┠❥ *${prefix}quotes*
   ┠❥ *${prefix}quotesnime*
   ┠❥ *${prefix}wait*
   ┠❥ *${prefix}nulis [teks]*
   ┠❥ *${prefix}donasi*
   ┠❥ *${prefix}lirik [optional]*
   ┠❥ *${prefix}chord [query]*
   ╿
   ╰╼❥ Kirim perintah *${prefix}readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.`
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

exports.help = help
exports.readme = readme