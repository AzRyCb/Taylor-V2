const handler = async (m, {
  conn,
  text,
  isROwner,
  isOwner
}) => {
  if (text) {
    if (isROwner) conn.bye = text
    else if (isOwner) conn.bye = text
    else db.data.chats.sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye <teks>']
handler.tags = ['group']
handler.command = /^setbye$/i
handler.group = true
handler.admin = true
export default handler
