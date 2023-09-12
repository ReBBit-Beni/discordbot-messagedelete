const http = require('http');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
//ページネーション
const { ReactionController } = require('discord.js-reaction-controller')

// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します
// GAS(Google Apps Script)からの受信(botの常時起動)
 http.createServer(function(req, res){
  res.write('OK');
  res.end();
 }).listen(8080);
 client.on('ready', message => {
   console.log('Bot準備完了～');
   client.user.setActivity(process.env.activity, { type: process.env.acttype }); 
 });
// トークンを使ってDiscordにログイン
client.login('OTE1ODMyNDM4MjM4OTAwMjQ0.YahVbA.V8xVAImZGkMUcuO8_Y-2IG_2jJw');

client.on('message', async message => {
 if (message.content === '野獣先輩') {
   message.delete()
   message.channel.send('不適切な発言は、削除するZOI!')
  }
  else if (message.content === '死ね') {
    message.delete()
    message.channel.send('不適切な発言は、削除するZOI!')
  }
  else if (message.content === 'しね') {
    message.delete()
    message.channel.send('不適切な発言は、削除するZOI!')
  }
  else if (message.content === 'ハゲ') {
    message.delete()
    message.channel.send('不適切な発言は、削除するZOI!')
  }
  else if (message.content === '伊藤誠') {
    message.delete()
    message.channel.send('不適切な発言は、削除するZOI!')
  }
});

client.on("message", async message => {
        if (message.content.match(/しね|ころす|死ね|殺す|きっしょ|ゴミ|野獣先輩|糞|カス|tinnko|tinko|tinnpo|tinpo/)) {
        message.delete();
        message.channel.send('不適切な表現が含まれていたため、削除しました。');
          }
});
//語録機能
client.on('message', async message => {
 if (message.content === '!nt') {
   message.channel.send('ntとはnice tryの略。「いい動きだったけど惜しかった！」ぐらいの意味。結果は良くなかったけどプレイの検討を称える際に使う。nfも似たような意味で使われることがある。')
  }

  else if (message.content === '!nf') {
    message.channel.send('nfとはNice Fightの略活躍したプレイヤーを称える際に使う。ntも似たような意味で使われることがある。')
  }

  else if (message.content === '!gg') {
    message.channel.send('ggとはgood gameの略。試合終了時に「良いゲームだった」ぐらいの意味で使う。「ナイスゲーム」「お疲れ」などの意味合いを持つことも。')
  }

  else if (message.content === '!glhf') {
    message.channel.send('glhfとはGood Luck, Have Funの略。ggとほぼ同様。')
  }

  else if (message.content === 'ggwp') {
    message.channel.send('ggwpとはGood Game Well Playedの略。「楽しんで」「幸運を祈る」のような意味。ゲーム開始時に「よろしく」ぐらいの意味で使われることもある。')
  }

  else if (message.content === '!lol') {
    message.channel.send('lolとはlaughing out loudの略。「大きな笑い声」とか「たくさんの笑い」ぐらいの意味で笑うことを表す。日本のネットスラングだと「www」が近い。')
  }

  else if (message.content === '!ty') {
    message.channel.send('tyとはthank youの略。「ありがとう」という意味。thxと同じ。')
  }

  else if (message.content === '!thx') {
    message.channel.send('thxとはthanksの略。「ありがとう」という意味。tyと同じ。')
  }

  else if (message.content === '!np') {
    message.channel.send('npとはno problemの略。「問題ないよ」ぐらいの意味。相手の感謝に「どういたしまして」ぐらいの意味で使われることもある。')
  }

  else if (message.content === '!sry') {
    message.channel.send('sryとはsorryの略。謝罪の意味。言ってくれる人は多分いい人。')
  }

  else if (message.content === '!afk') {
    message.channel.send('afkとはaway from keyboardの略。キーボードから離れている状態をいう。放置しているプレイヤーを指す場合に使われることもある。')
  }

  else if (message.content === '!wtf') {
    message.channel.send('wtfとはWhat the fuckの略。「なんてこった」「まじかよ」「信じられない」ぐらいの意味。使いどころによっては、味方に対して怒っているように伝わることがあるため使わないほうが無難。')
  }

  else if (message.content === '!bg') {
    message.channel.send('bgはbad gameの略。悪いゲームだった、ぐらいの意味。味方に言うと単なる負け惜しみになるので使わないほうが無難。')
  }

  else if (message.content === '!ez') {
    message.channel.send('ezとはeasyの略。楽勝だった、ぐらいの意味。敵に対して使うと煽りになるので使わないほうが無難。')
  }

  else if (message.content === '!noob') {
    message.channel.send('noobとは初心者に対しての蔑称。または初心者のようにお前は下手くそだ、のような意味。言うと煽りになるため言わないほうが無難。newbieを煽りっぽく使う人もいる模様。')
  }

  else if (message.content === '!op') {
    message.channel.send('[over power]の略。強すぎる敵、味方に言う')
  }

  else if (message.content === '!愛してる') {
    message.channel.send('僕も愛してるよ！')
  }

  else if (message.content === '!サバ缶') {
    message.channel.send('明るくてムードメーカーだが、ロリコンである。(ロリコンはネタです。)エンドで楽な道を選んだ挙句、装備全ロスした狐')
  }

  else if (message.content === '!赤ウサギ') {
    message.channel.send('??????????????????')
  }

  else if (message.content === '!teacup') {
    message.channel.send('我らが団長')
  }

  else if (message.content === '!ねおん') {
    message.channel.send('https://cdn.discordapp.com/attachments/909092827663847484/934004567211933767/neon.JPG')
  }

  else if (message.content === '!商人') {
    message.channel.send('未実装です')
  }

  else if (message.content === '!マロニー') {
    message.channel.send('「マロニー」とは、ジャガイモから採取したデンプンとコーンスターチを原料として作られる「はるさめ」の一種です。')
  }

});
//ゲーム内武器
client.on('message', message => {
  if (message.content === '!救い') {
    message.channel.send('https://cdn.discordapp.com/attachments/909092827663847484/932443811148361759/IMG_6735.png')
  }
  else if (message.content === '!レールガン') {
    message.channel.send('https://cdn.discordapp.com/attachments/909092827663847484/932469780710060062/IMG_6736.png')
  }
  else if (message.content === '!パルス') {
    message.channel.send('https://cdn.discordapp.com/attachments/909092827663847484/932470119597244436/IMG_6737.png')
  }
  else if (message.content === '!火炎放射器') {
    message.channel.send('https://cdn.discordapp.com/attachments/909092827663847484/932793279639076874/AA537747-3452-4EE8-A7D2-363F5BC0A662.png')
  }
  else if (message.content === '!レーザーR7') {
    message.channel.send ('https://cdn.discordapp.com/attachments/909092827663847484/932793280205299852/2FDA18E2-9039-4D79-AAE0-2CE0886E1DB9.png')
  }
  else if (message.content === '!FRF2') {
    message.channel.send ('https://cdn.discordapp.com/attachments/909092827663847484/932793280477941850/367C8296-85CA-4B75-902B-AC853C705535.png')
  }
  else if (message.content === '!AWPP') {
    message.channel.send ('https://cdn.discordapp.com/attachments/909092827663847484/932793280826077225/C6C9D570-FD8B-4FBD-9A1B-D2C007242FCC.png')
  }
  else if (message.content === '!デュアルサイバーレーザー') {
    message.channel.send ('https://cdn.discordapp.com/attachments/909092827663847484/932793279932690502/EF479311-27C0-4684-99B3-577D51A1A5E4.png')
  }
  else if (message.content === '!君への愛') {
    message.channel.send ('https://cdn.discordapp.com/attachments/909092827663847484/933957754274598922/IMG_3173.png')
  }
  else if (message.content === '!') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }
  else if (message.content === '') {
    message.channel.send ('')
  }

});
//ゲーム内武器画像