import {
  kbbi
} from '@bochilteam/scraper'
import fetch from 'node-fetch'
const handler = async (m, {
      text,
      usedPrefix,
      command
    }) => {
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
      let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
      let name = conn.getName(who)
      if (!text) throw `Example use ${usedPrefix}${command} halo`
      try {
        const res = await kbbi(text)
        let caption = `
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim()
conn.reply(m.chat, caption, m)
} catch {
m.react(eror)
}
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler
