import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
  let name = conn.getName(who)
  let tqto = `*${htki} BIG THANKS TO ${htka}*

*whiskeysockets:*
https://github.com/whiskeysockets

*Nurutomo:*
https://github.com/Nurutomo

*Istikmal:* 
https://github.com/BochilGaming

*Ariffb:*
https://github.com/Ariffb25

*Ilman:*
https://github.com/ilmanhdyt

*Amirul:*
https://github.com/amiruldev20

*Rasel:*
https://github.com/raselcomel

*Fatur:*
https://github.com/Ftwrr

*Rominaru:*
https://github.com/Rominaru

*Kannachann:*
https://github.com/Kannachann

*The.sad.boy01:*
https://github.com/kangsad01

*Ameliascrf:*
https://github.com/Ameliascrf

*Fokus ID:*
https://github.com/Fokusdotid

*AmmarBN:*
https://github.com/AmmarrBN
`
  conn.reply(m.chat, tqto, m)
}
handler.help = ['tqto']
handler.tags = ['main', 'info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
