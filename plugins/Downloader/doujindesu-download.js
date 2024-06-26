import {
  doujindesu
} from '../../lib/scraper/scraper-copy.js'
import fetch from 'node-fetch'
const handler = async (m, {
  text,
  command,
  usedPrefix,
  conn
}) => {
  var salah_input = "*Example:*\n" + usedPrefix + command + " url"
  if (!text) throw salah_input
  try {
    let djds = await doujindesu(text)
    let item = djds.chapter
    let mp = `*${htki} 📺 Doujin Downloader 🔎 ${htka}*

*Title:* ${item[0]?.title}
*Url:* ${item[0]?.url}
*Download Url:* ${item[0]?.dl_url}

`
    m.reply(mp)
  } catch (e) {
    m.react(eror)
  }
}
handler.help = ["doujindesudown"]
handler.tags = ['internet']
handler.command = ["doujindesudown"]
export default handler

function ArrClean(str) {
  return str.map((v, index) => ++index + ". " + v).join('\r\n')
}
