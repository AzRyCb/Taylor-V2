import * as baileys from "@whiskeysockets/baileys"
import {
  Brainly
} from "brainly-scraper-v2"
import fetch from "node-fetch"
Brainly.initialize();
const brainly = new Brainly("id");
const handler = async (m, {
  conn,
  text
}) => {
  if (!text) throw "Input Query"
  m.react(wait)
  try {
    let res = await brainly.search(text, "id")
    let answer = res.map(({
        question,
        answers
      }, i) =>
      `
*Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content.replace(/(<br \/>)/gi, '\n')}${answers.map((v, i) => `
*Jawaban Ke ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content.replace(/(<br \/>)/gi, '\n')
          .replace(/(<([^>]+)>)/gi, '')}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`
      ).join('\n' + '-'.repeat(45))
    m.reply(answer.trim())
  } catch (e) {
    m.react(eror)
  }
}
handler.help = handler.alias = ["brainly"]
handler.tags = ["tools"]
handler.command = /^(brainly)$/i
export default handler
