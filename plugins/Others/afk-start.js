const handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  conn.listAfk = conn.listAfk || {};
  try {
    let user = db.data.users[m.sender]
    user.afk = +new Date();
    user.afkReason = text;
    const username = m.name || m.pushName;
    const id = m.sender || m.key.remoteJid;
    conn.listAfk[m.chat] = conn.listAfk[m.chat] ? conn.listAfk[m.chat].some(user => user.id === id) ? conn.listAfk[m
      .chat] : [...conn.listAfk[m.chat], {
      username,
      id
    }] : [{
      username,
      id
    }];
    const caption =
      `\n🚀 ${conn.getName(m.sender)} @${m.sender.split("@")[0]} Sekarang lagi AFK\n*Dengan Alasan:*\n${text ? ' ' + text : 'Tanpa alasan'}`;
    conn.reply(m.chat, caption, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(caption),
        externalAdReply: {
          title: "AFK Start",
          thumbnail: await (await conn.getFile("https://cdn-icons-png.flaticon.com/128/742/742927.png")).data
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.group = true
handler.command = /^afk$/i
export default handler
