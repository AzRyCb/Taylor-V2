import fetch from "node-fetch";
import axios from "axios";
const handler = async (m, { conn, args }) => {
  let spas = "                ";
  if (!args[0]) throw "Uhm...url nya mana?";
  try {
    db.data.chats[m.chat],
      Object.entries(APIKeys).find(([key]) => key.includes("lolhuman"))?.[1],
      args[0],
      await (
        await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
      ).data;
    await conn.sendFile(
      m.chat,
      `https://api.lolhuman.xyz/api/tiktokwm?apikey=${Object.entries(APIKeys).find(([key]) => key.includes("lolhuman"))?.[1]}&url=${args[0]}`,
      "tiktokaudio.mp3",
      "\n┏┉━━━━━━━━━━━❏\n┆ *YOUTUBE MP3*\n├┈┈┈┈┈┈┈┈┈┈┈\n┆• *Judul:* \n│• *Type:* MP3\n┆• *📥 Ukuran File:* \n└❏\n".trim(),
      m,
      null,
      {
        document: {
          url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${Object.entries(APIKeys).find(([key]) => key.includes("lolhuman"))?.[1]}&url=${args[0]}`,
        },
        mimetype: "audio/mpeg",
        fileName: "tiktok.mp3",
        conntextInfo: {},
      },
    );
  } catch (e) {
    let cer = (
        await (
          await fetch("https://api.tikdl.caliphdev.codes/video?url=" + args[0])
        ).json()
      ).result,
      cap = `${spas}*[ T I K T O K ]*\n\n*ID:* ${cer.id}\n*Title:* ${cer.title}\n*Created:* ${cer.created_at}\n\n${spas}*[ S T A T S ]*\n*Like:* ${cer.stats.likeCount}\n*Comment:* ${cer.stats.commentCount}\n*Share:* ${cer.stats.shareCount}\n*Play:* ${cer.stats.playCount}\n*Saved:* ${cer.stats.saveCount}\n\n${spas}*[ A U D I O ]*\n*ID:* ${cer.music.id}\n*Title:* ${cer.music.title}\n*Author:* ${cer.music.author}\n*Duration:* ${cer.music.durationFormatted}\n`;
    await conn.sendFile(
      m.chat,
      cer.music.play_url,
      "tiktokaudio.mp3",
      cap,
      m,
      null,
      {
        document: {
          url: cer.music.play_url,
        },
        mimetype: "audio/mpeg",
        fileName: "tiktok.mp3",
        conntextInfo: {},
      },
    );
  }
};
(handler.tags = ["downloader"]),
  (handler.command = /^(tiktokaudio)$/i),
  (handler.limit = !0);
export default handler;
