import {
  readdirSync,
  rmSync
} from 'fs'
const handler = async (m, {
  conn,
  text
}) => {
  const dir = './tmp'
  readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
  let pesan = "The *tmp* folder has been cleaned"
  m.reply(pesan)
}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.owner = false
handler.command = /^(cleartmp)$/i
export default handler
