const handler = async (m, {
  conn
}) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (!(id in conn.tebakbendera)) throw false
  let json = conn.tebakbendera[id][1]
  conn.reply(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hben$/i
handler.limit = true
export default handler
