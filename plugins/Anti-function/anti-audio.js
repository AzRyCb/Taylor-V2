export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
  if (m.isBaileys && m.fromMe) return true;
  if (!m.isGroup) return false;
  if (
    m.isBaileys ||
    m.mtype !== "audioMessage" ||
    !db.data.chats[m.chat]?.antiAudio
  )
    return;
  const user = db.data.users[m.sender];
  user.warn += 1;
  if (!isOwner) user.banned = true;
  m.reply(
    "⚠️ *Audio Terdeteksi!* ⚠️\nMaaf, audio tidak diizinkan untuk dikirim di sini.",
  );
  if (!isAdmin && isBotAdmin) {
    await this.sendMessage(m.chat, {
      delete: m.key,
    });
    m.reply("❌ *Audio terdeteksi dan dihapus.*");
  } else if (!isAdmin && !isBotAdmin) {
    m.reply("❌ *Kamu tidak diizinkan mengirim audio.*");
  }
}
