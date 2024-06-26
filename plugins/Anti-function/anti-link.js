const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;
export async function before(m, {
  isAdmin,
  isBotAdmin
}) {
  if (m.isBaileys || !m.isGroup) return false;
  const chat = db.data.chats[m.chat];
  const isGroupLink = linkRegex.exec(m.text);
  const kickMessage = isAdmin ? `❌ *Tautan Terdeteksi*\nAnda admin grup tidak bisa dikeluarkan dari grup.` :
    `❌ *Tautan Terdeteksi*\nAnda akan dikeluarkan dari grup.`;
  if (chat.antiLink && isGroupLink) {
    this.reply(m.chat, kickMessage, null, {
      mentions: [m.sender]
    });
    await this.sendMessage(m.chat, {
      delete: m.key
    });
    if ((!isBotAdmin && isAdmin) || (isBotAdmin && !isAdmin)) {
      await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      this.reply(m.chat, kickMessage, null, {
        mentions: [m.sender]
      });
      await this.sendMessage(m.chat, {
        delete: m.key
      });
    }
  }
  return true;
}
