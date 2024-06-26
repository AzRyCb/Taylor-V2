import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
const handler = async (m, {
  conn,
  command,
  usedPrefix
}) => {
  conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
  let id = m.chat
  if (id in conn.tebakanjime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanjime[id][0])
    throw false
  }
  let res = await fetch('https://api.jikan.moe/v4/random/characters')
  let jsn = await res.json()
  let json = jsn.data
  let caption = `*${command.toUpperCase()}*
Siapakah nama dari gambar ini

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hani untuk hint
Bonus: ${poin} XP
    `.trim()
  conn.tebakanjime[id] = [
    conn.sendFile(m.chat, json.images.jpg.image_url, '', caption, m),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanjime[id]) conn.reply(m.chat,
        `Waktu habis!\nJawabannya adalah *${json.name}*\n*Desk:* ${json.name_kanji}\n${json.about}`, conn
        .tebakanjime[id][0])
      delete conn.tebakanjime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
export default handler
const buttons = [
  ['Hint', '/hani'],
  ['Nyerah', 'menyerah']
]
