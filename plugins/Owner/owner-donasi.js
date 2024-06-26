import fetch from 'node-fetch'
const handler = async (m, {
  conn,
  command,
  usedPrefix
}) => {
  let str = `${conn.getName(m.sender)}
Want Support Bot?

*[ PAYMENT METHOD ]*

- Pulsa/pulse(Telkomsel): *${pulsa}*
- Dana/ovo: *${dana}*
- Paypal: *${paypal}*
- Saweria: *${saweria}*
- Trakteer: *${trakteer}*

Setelah melakukan donasi kirim bukti pembayaran ke owner
`
  await conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
        extendedTextMessage: {
          text: str,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler
