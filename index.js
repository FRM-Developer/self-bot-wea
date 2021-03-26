console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('TERMUX WHATSAPP BOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Caliph-Bot\' By @caliph71', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'handler.js'), ...process.argv.slice(2)]
  
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESTART')
      p.kill()
      start()
      delete p
    }
  })
}

start()
