import fetch from 'node-fetch'
const handler = async (m, {
  conn,
  usedPrefix,
  text,
  args,
  command
}) => {
  if (command === 'jooxp') {
    if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
    let f = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${text}`)
    let x = await f.json()
    let teks = `*Result:*
*singer:* ${x.result.info.singer}
*song:* ${x.result.info.song}
*album:* ${x.result.info.album}
*date:* ${x.result.info.date}
*duration:* ${x.result.info.duration}
*duration:* ${x.result.lirik}
`
    conn.sendFile(m.chat, x.result.image, '', teks, m)
    conn.sendFile(m.chat, x.result.audio[0]?.link, '', '', m)
  }
}
handler.command = handler.help = ['jooxp']
handler.tags = ['tools']
export default handler
