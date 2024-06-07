import {
  readFileSync,
  watchFile,
  unwatchFile
} from "fs";
import chalk from "chalk";
import {
  fileURLToPath
} from "url";
import moment from "moment-timezone";
moment.locale('id');
import colors from "colors";
import {
  WA_DEFAULT_EPHEMERAL
} from "@whiskeysockets/baileys";
const {
  cosplay,
  mountain,
  dynamic,
  flamming,
  galau,
  estetik,
  waifu,
  boneka
} = JSON.parse(readFileSync("./json/image/image.json"));
async function loadConfig() {
  try {
    /** custom colors for beautiful console.log()  **/
    colors.setTheme({
      main: ["brightBlue", "bold"],
      silly: "rainbow",
      input: "grey",
      verbose: "cyan",
      prompt: "grey",
      info: "green",
      data: "grey",
      help: "cyan",
      warn: "yellow",
      debug: "blue",
      error: "brightRed"
    });
    /** Oᴡɴᴇʀ number  **/
    global.owner = [
      ["6285211425532", "️𝑶𝒘𝒏𝒆𝒓", true]
    ];
    global.mods = ["6285211425532"];
    global.prems = ["6285211425532"];
    /** Website  **/
    global.APIs = {
      amel: "https://melcanz.com",
      bg: "http://bochil.ddns.net",
      dhnjing: "https://dhnjing.xyz",
      dzx: "https://api.dhamzxploit.my.id",
      fdci: "https://api.fdci.se",
      hardianto: "https://hardianto.xyz",
      lolhuman: "https://api.lolhuman.xyz",
      neoxr: "https://api.neoxr.my.id",
      pencarikode: "https://pencarikode.xyz",
      xteam: "https://api.xteam.xyz",
      xyro: "https://api.xyroinee.xyz",
      zeks: "https://api.zeks.xyz",
      zenz: "https://api.zahwazein.xyz",
      btchx: "https://api.botcahx.biz.id"
    };
    /** Apikey  **/
    global.APIKeys = {
      "https://api.neoxr.my.id": pickRandom(["5VC9rvNx", "lucycat"]),
      "https://api.lolhuman.xyz": pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc",
        "ed78c137a46873c5b8e5fe3b", "IchanZX", "GataDios", "elainaai"
      ]),
      "https://api.xteam.xyz": "HIRO",
      "https://api.xyroinee.xyz": "yqiBQF86F4",
      "https://api.zeks.xyz": "apivinz",
      "https://hardianto.xyz": "hardianto",
      "https://melcanz.com": "manHkmst",
      "https://pencarikode.xyz": "pais",
      "https://api.zahwazein.xyz": "zenzkey_1ec92f71d3bb",
      "https://api.botcahx.biz.id": "Admin"
    };
    /** Lolhuman  **/
    global.lolkey = pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc", "ed78c137a46873c5b8e5fe3b",
      "IchanZX", "GataDios", "elainaai"
    ]);
    /** XyroineeApi  **/
    global.xyro = "yqiBQF86F4";
    /** Number  **/
    global.nomorbot = "6281779570422";
    global.nomorown = "6282195322106";
    global.namebot = " ᴛᴀyʟᴏʀ-ʙᴏᴛ あ⁩ ";
    global.nameown = "「 AzRy 」";
    /** Random  **/
    global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥",
      "✗", "⚜", "⚚", "♪"
    ]);
    global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"]);
    /** Watermark  **/
    global.wm = "                「 ᴛᴀyʟᴏʀ-ʙᴏᴛ あ⁩ 」";
    global.wm2 = "꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷";
    global.wm3 = htjava + " ᴛᴀyʟᴏʀ-ʙᴏᴛ";
    /** Thumbnail  **/
    global.giflogo = (VideoGalau());
    global.fla = pickRandom((ImgLogoFlam()));
    global.flaaa = (ImgLogoFlam());
    global.brandc = (ImgLogoDynamic());
    /** Link  **/
    global.sig = "https://www.instagram.com/z_ryyw";
    global.sgh = "https://www.github.com/AzRyCb";
    global.sgc = "https://s.id/Taylor-V2";
    global.sdc = "https://www.discord.com/AzRyCb";
    global.snh = "https://www.tiktok.com/@upload_file";
    global.sfb = "https://www.facebook.com/";
    global.syt = "https://www.youtube.com/";
    /** Nsfw  **/
    global.premnsfw = true;
    /** Type  **/
    global.dpptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    global.ddocx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    global.dxlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    global.dpdf = "application/pdf";
    global.drtf = "text/rtf";
    /** Fake  **/
    global.fsizedoc = SizeDoc();
    global.fpagedoc = PageDoc();
    /** Hiasan  **/
    global.dmenut = htjava + "───『";
    global.dmenub = "│" + pmenus;
    global.dmenub2 = "│" + pmenus;
    global.dmenuf = "╰──────────⳹";
    global.dashmenu = "☰ *D A S B O A R D* ☰";
    global.htki = htjava + "───『";
    global.htka = "』───" + htjava;
    /** Thumbnail  **/
    global.hwaifu = (ImgWaifu());
    global.hbeach = (ImgCosplay());
    global.thumbnailUrl = (ImgBoneka());
    global.hoppai = (ImgCosplay());
    global.hloli = (ImgCosplay());
    global.hyuri = (ImgCosplay());
    global.hneko = (ImgCosplay());
    global.hLokun = (ImgCosplay());
    global.hbunny = (ImgCosplay());
    global.thumbs = (ImgBoneka());
    global.thumb = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300",
      "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300",
      "https://source.unsplash.com/2400x1300/?wallpapers", (ImgEstetik())
    ]);
    global.imagebot = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300",
      "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300",
      "https://source.unsplash.com/2400x1300/?wallpapers", (ImgMountain())
    ]);
    global.thumbdoc = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300",
      "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300",
      "https://source.unsplash.com/2400x1300/?wallpapers", (ImgEstetik())
    ]);
    global.logo = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300",
      "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300",
      "https://source.unsplash.com/2400x1300/?wallpapers", (ImgMountain())
    ]);
    /** Begin  **/
    global.ucapan = Pagi();
    global.ephemeral = WA_DEFAULT_EPHEMERAL;
    /** Global Random  **/
    global.doc = pickRandom(["application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel",
      "application/msword", "application/pdf", "text/rtf"
    ]);
    global.knimg = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300",
      "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300",
      "https://source.unsplash.com/2400x1300/?wallpapers", (ImgMountain())
    ]);
    /** Watermark  **/
    global.lopr = "🅟";
    global.lolm = "Ⓛ";
    global.cmenut = htjava + "───『";
    global.cmenuh = "』───" + htjava;
    global.cmenub = "│" + pmenus;
    global.cmenuf = "╰──────────⳹";
    global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ";
    global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭",
      "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"
    ]);
    global.packname = "𝑴𝒂𝒅𝒆 𝒃𝒚";
    global.stickpack = packname;
    global.author = "AzBoTz";
    global.stickauth = author + "\nwa.me/" + nomorbot;
    global.multiplier = 69;
    /** Pesan  **/
    global.eror = pickRandom(["❌", "🚫", "💥", "❎"]);
    global.wait = pickRandom(["⏳", "⌛", "⏰", "⏱️"]);
    global.render = pickRandom(["_*`Rendering 📍`*_", "_*`Processing 📍`*_", "_*`Generating content 📍`*_"]);
    global.webs = "https://s.id/Cerdasin62";
    global.gcwangsaf = "https://chat.whatsapp.com/FV3MU8D22P19dKEyA7EAfD";
    /** Donasi  **/
    global.saweria = "https://saweria.com/wudysoft";
    global.dana = "";
    global.pulsa = "083879175089";
    global.trakteer = "https://trakteer.id/AzRyCb";
    global.paypal = "";
    global.gopay = "0885211425532";
    global.pdana = "";
    global.povo = "";
    global.pgopay = "0885211425532";
    global.ppulsa = "083879175089";
    global.ppulsa2 = "0885211425532";
    global.psaweria = "https://saweria.com/AzRyCb";
    /** Emoji  **/
    global.rpg = {
      emoticon(string) {
        string = string.toLowerCase()
        const emot = {
          Fox: "🦊",
          agility: "🤸‍♂️",
          anggur: "🍇",
          apel: "🍎",
          aqua: "🥤",
          arc: "🏹",
          armor: "🥼",
          bank: "🏦",
          batu: "🧱",
          berlian: "💎",
          bibitanggur: "🍇",
          bibitapel: "🍎",
          bibitjeruk: "🍊",
          bibitmangga: "🥭",
          bibitpisang: "🍌",
          botol: "🍾",
          bow: "🏹",
          bull: "🐃",
          cat: "🐈",
          centaur: "🎠",
          chicken: "🐓",
          coal: "⚱️",
          common: "📦",
          cow: "🐄",
          crystal: "🔮",
          darkcrystal: "♠️",
          diamond: "💎",
          dog: "🐕",
          dragon: "🐉",
          eleksirb: "🧪",
          elephant: "🐘",
          emasbatang: "🪙",
          emasbiasa: "🥇",
          emerald: "💚",
          exp: "✉️",
          fishingrod: "🎣",
          foodpet: "🍱",
          fox: "🦊",
          gardenboc: "🗳️",
          gardenboxs: "📦",
          gems: "🍀",
          giraffe: "🦒",
          gold: "👑",
          griffin: "🦒",
          health: "❤️",
          healtmonster: "❤‍🔥",
          horse: "🐎",
          intelligence: "🧠",
          iron: "⛓️",
          jeruk: "🍊",
          kaleng: "🥫",
          kardus: "📦",
          kayu: "🪵",
          ketake: "💿",
          keygold: "🔑",
          keyiron: "🗝️",
          knife: "🔪",
          koinexpg: "👛",
          kucing: "🐈",
          kuda: "🐎",
          kyubi: "🦊",
          legendary: "🗃️",
          level: "🧬",
          limit: "🌌",
          lion: "🦁",
          magicwand: "⚕️",
          makanancentaur: "🥗",
          makanangriffin: "🥙",
          makanankyubi: "🍗",
          makanannaga: "🍖",
          makananpet: "🥩",
          makananphonix: "🧀",
          mana: "🪄",
          mangga: "🥭",
          money: "💵",
          mythic: "🗳️",
          mythic: "🪄",
          naga: "🐉",
          pancingan: "🎣",
          pet: "🎁",
          petFood: "🍖",
          phonix: "🦅",
          pickaxe: "⛏️",
          pisang: "🍌",
          pointxp: "📧",
          potion: "🥤",
          rock: "🪨",
          robo: "🤖",
          rubah: "🦊",
          sampah: "🗑️",
          serigala: "🐺",
          snake: "🐍",
          stamina: "⚡",
          strength: "🦹‍♀️",
          string: "🕸️",
          superior: "💼",
          sword: "⚔️",
          tiger: "🐅",
          tiketcoin: "🎟️",
          trash: "🗑",
          umpan: "🪱",
          uncommon: "🎁",
          upgrader: "🧰",
          wood: "🪵"
        };
        const results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string));
        if (!results.length) return ""
        else return emot[results[0][0]];
      }
    };
  } catch (err) {
    console.error(`Error in Load Config: ${err.message}`);
  } finally {
    setTimeout(loadConfig, 15 * 60 * 1000);
  }
}
export {
  loadConfig
}
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update config.js"));
  import(`${file}?update=${Date.now()}`);
})
/** Selamat Pagi  **/
function Pagi() {
  const waktunya = moment.tz("Asia/Makassar").format("HH");
  return waktunya >= 24 ? "Selamat Begadang 🗿" : waktunya >= 18 ? "Selamat malam 🌙" : waktunya >= 15 ?
    "Selamat sore 🌅" : waktunya > 10 ? "Selamat siang ☀️" : waktunya >= 4 ? "Selamat pagi 🌄" : "Selamat Pagi 🗿";
}
/** Randomizer  **/
function pickRandom(list) {
  const shuffledList = list.slice().sort(() => Math.random() - 0.5);
  return shuffledList[Math.floor(Math.random() * shuffledList.length)];
}
/** Img Array  **/
function ImgCosplay() {
  return cosplay;
}
/** Img Array  **/
function ImgMountain() {
  return pickRandom(mountain);
}
/** Img Dynamic  **/
function ImgLogoDynamic() {
  return dynamic.map((id) => `https://dynamic.brandcrowd.com/asset/logo/${id}/logo?v=4&text=`);
}
/** Img Flamming  **/
function ImgLogoFlam() {
  return flamming.map((id) =>
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=${id}&doScale=true&scaleWidth=480&scaleHeight=240&fontsize=120&backgroundColor=%23000300&shadowType=2&text=`
    );
}
/** Img Array  **/
function VideoGalau() {
  return `https://telegra.ph/file/${pickRandom(galau)}.mp4`;
}
/** Img Array  **/
function ImgEstetik() {
  return pickRandom(estetik);
}
/** Img Array  **/
function ImgWaifu() {
  return waifu;
}
/** Img Array  **/
function ImgBoneka() {
  return boneka;
}
/** Apa Kabar  **/
function Sapa() {
  return pickRandom(["Apa kabar ", "Halo ", "Hai "]);
}

function SizeDoc() {
  return Math.pow(10, 15);
}

function PageDoc() {
  return Math.pow(10, 10);
}

function businessOwnerJid() {
  return pickRandom([pickRandom([global.nomorown, "0", "628561122343", "6288906250517", "6282195322106",
    "6281119568305", "6281282722861", "6282112790446"
  ]) + "@s.whatsapp.net"]);
}
