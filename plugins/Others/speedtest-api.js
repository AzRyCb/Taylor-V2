import axios from 'axios'
const handler = async (m, {
  conn,
  args
}) => {
  let servers = "*" + htjava + " SPEEDTEST " + htjava + "*" + "\n\n";
  let numb
  if (Number(args[0]) < 100) {
    numb = args[0]
  } else {
    numb = 10
  }
  try {
    axios.get("https://www.speedtest.net/api/js/servers?engine=js&limit=" + numb + "&https_functional=true").then(
      res => res.data).then(data => {
      data.map((row) => {
        servers += "*ID:* " + row.id + "\n" + "*Name:* " + row.name + " (" + row.distance + "km)" + "\n" +
          "*Country:* " + row.country + "\n" + "*Sponsor:* " + row.sponsor + "\n" + "*Host:* " + row.host +
          "\n"
      })
      try {
        m.reply(servers + "\n" + packname + author);
      } catch (e) {
        m.reply("Could not save servers file")
      }
    });
  } catch (e) {
    m.reply("Could not get servers");
  }
}
handler.help = ['sptest']
handler.tags = ['info']
handler.command = /^(sptest)$/i
export default handler
