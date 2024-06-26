import gplay from 'google-play-scraper'
const handler = async (m, {
  conn,
  text,
  command,
  usedPrefix
}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
  let name = conn.getName(who)
  if (!text) throw 'Input Query'
  m.react(wait)
  try {
    let res = await gplay.search({
      term: text
    })
    if (!res.length) throw `Query "${text}" not found :/`
    let teks = Object.values(res).map((v, index) => {
      return `🔍 *[ RESULT ${index + 1} ]*

📰 *title:* ${v.title || 'Tidak diketahui'}
👩‍💻 *developer:* ${v.developer || 'Tidak diketahui'}
⭐️ *score:* ${v.score || 'Tidak diketahui'}
💬 *scoreText:* ${v.scoreText || 'Tidak diketahui'}
💲 *price:* ${v.price || 'Tidak diketahui'}
🆔 *appId:* ${v.appId || 'Tidak diketahui'}
📝 *summary:* ${cleanHtml(v.summary) || 'Tidak diketahui'}
🔗 *url:* ${v.url || 'Tidak diketahui'}
🖼️ *icon:* ${v.icon || 'Tidak diketahui'}
💰 *free:* ${v.free || 'Tidak diketahui'}`
    }).filter(v => v).join("\n\n________________________\n\n")
    m.reply(teks)
  } catch (e) {
    m.react(eror)
  }
}
handler.help = ['apksearch']
handler.tags = ['tools']
handler.command = /^(ap([kp]search|(ps|k))|searchapk)$/i
export default handler

function cleanHtml(html) {
  const regex = /<[^>]+>/g;
  return html.replace(regex, "");
}
