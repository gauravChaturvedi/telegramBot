var token = '234426917:AAEqZBrGkyrTKxqaHvFKK_eI_T1mpYW2xtM';

var Bot = require('node-telegram-bot-api'), bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook('https://.com/' + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('started the bot server.');

bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = (match[1] === 'Akshay' ? 'Makkhi': match[1]);
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});


module.exports = bot;
