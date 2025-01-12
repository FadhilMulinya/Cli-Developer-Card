#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";

// Enhanced cyberpunk color palette
const neonPink = "#ff00ff";
const neonCyan = "#00fff9";
const matrixGreen = "#00ff00";
const retroBlue = "#0066ff";
const synthPurple = "#b026ff";
const hotPink = "#ff1493";

const boxenOptions = {
  padding: 1,
  width: 72,
  title: chalk.hex(hotPink).bold("FADHIL.DEV"),
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: neonPink,
  float: "center",
};

// Enhanced ASCII art with FADHIL
const asciiArt = chalk.hex(neonCyan)(`
    ███████╗░█████╗░██████╗░██╗░░██╗██╗██╗░░░░░
    ██╔════╝██╔══██╗██╔══██╗██║░░██║██║██║░░░░░
    █████╗░░███████║██║░░██║███████║██║██║░░░░░
    ██╔══╝░░██╔══██║██║░░██║██╔══██║██║██║░░░░░
    ██║░░░░░██║░░██║██████╔╝██║░░██║██║███████╗
    ╚═╝░░░░░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚══════╝
`);

// New personalized introduction
const personalIntro = chalk.hex(neonCyan)(`
Hey there! My name is Fadhil and I'm a smart contract developer,
Developer Avocate,Community Manager as well as researcher.
While I'm not coding, I like reading books and writing articles.
`);

const intro = chalk.hex(synthPurple).bold(
  "═══════════ SMART CONTRACT DEV | RESEARCHER ═══════════\n\n" +
  personalIntro + "\n" +
  chalk.hex(hotPink)(">> DIGITAL NEXUS POINTS <<\n\n")
);

const links = [
  { 
    name: chalk.hex("#fff").bgHex("#1a1a1a")("TERMINAL"),
    url: chalk.hex(neonCyan)("   https://fadhil.dev") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#333")("GITHUB"),
    url: chalk.hex(matrixGreen)("     https://github.com/FadhilMulinya") 
  },
  { 
    name: chalk.hex("#fff").bgHex(retroBlue)("LINKEDIN"),
    url: chalk.hex(neonPink)("   https://www.linkedin.com/in/fadhil-mulinya-35464b238/") 
  },
  { 
    name: chalk.hex("#fff").bgHex(synthPurple)("WEBSITE"),
    url: chalk.hex(hotPink)("    https://fadhilmulinya.vercel.app") 
  },
  { 
    name: chalk.hex("#fff").bgHex(hotPink)("DISCORD"),
    url: chalk.hex(synthPurple)("    https://discord.gg/fadhil_dev") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#1da1f2")("TWITTER"),
    url: chalk.hex(neonCyan)("    https://x.com/mulinyafadhil") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#0088cc")("TELEGRAM"),
    url: chalk.hex(matrixGreen)("   https://t.me/fadhil_dev") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#ff9900")("FARCASTER"),
    url: chalk.hex(neonPink)("  https://warpcast.com/mulinya") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#29a19c")("BLOG"),
    url: chalk.hex(neonCyan)("       https://hashnode.com/@fadhil047") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#f7931a")("SOLIDITY-BOOK"),
    url: chalk.hex(matrixGreen)(" https://solidity-book.vercel.app/") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#5865f2")("CALENDLY"),
    url: chalk.hex(hotPink)("    https://calendly.com/mulinyafadhil/coffee-chat-s-with-fadhil") 
  },
  { 
    name: chalk.hex("#fff").bgHex("#f7931a")("EMAIL"),
    url: chalk.hex(matrixGreen)(" mulinyafadhil@gmail.com") 
  }
];

const footer = chalk.hex(neonCyan)(`
╔════════════════════════════════════════════════════╗
║  ${chalk.hex(hotPink)("[ CODE             REVIEW              UPSKILL ]")}  ║
╚════════════════════════════════════════════════════╝
`);

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n\n");

// Adding some matrix-style decorative elements with smart contract theme
const decorBorder = chalk.hex(matrixGreen)("▓▒░ ") + 
                    chalk.hex(neonPink)("▀▄▀▄▀▄ ") + 
                    chalk.hex(neonCyan)("  Blockchain Developer || Developer Advocate  ") + 
                    chalk.hex(neonPink)(" ▄▀▄▀▄▀ ") + 
                    chalk.hex(matrixGreen)(" ░▒▓");

// Combining everything with improved spacing and decorative elements
console.log(boxen(
  asciiArt + 
  intro + 
  linkList + 
  "\n\n" + 
  decorBorder +
  "\n" + 
  footer, 
  boxenOptions
));
