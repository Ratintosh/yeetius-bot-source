const Discord = require('discord.js')
const client = new Discord.Client()


save=0

salute=save;
salutescounter=1


require('events').EventEmitter.defaultMaxListeners = 280;

var streak = 0
var bruhs = ["bruh", 
":regional_indicator_b: :regional_indicator_r: :regional_indicator_u: :regional_indicator_h:", 
":regional_indicator_b: :regional_indicator_r: :regional_indicator_u: :regional_indicator_h: :grey_exclamation:",
	     "bruh momento",
	     "bruh moment",
	     "big bruh",
	     "big bruh moment",
	     "bru",
	     "br",
	     "bruh wtf",
	     "!br -s"
];



var step;

//Role picker
var myArray = [
  "Pickles",
  "Nutella",
  "Peanut Butter",
  "Relish",
  "Ketchup",
  "Cheese",
  "Mayo",
  "Eggs",
  "Pepper",
  "Lettuce",
  "Ham",
  "Turkey",
  "Olives"
];
//randomizer

var eightballarray = [
  "As I see it, yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don’t count on it.",
  "It is certain.",
  "It is decidedly so.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Signs point to yes.",
  "Very doubtful.",
  "Without a doubt.",
  "Yes.",
  "Yes – definitely.",
  "You may rely on it.",
  "Nutella"
];

var yum = 1;

client.on('ready', () => { client.user.setGame('SpaceBot || .help'); });

var forbidenWords = ["furry", "thomas is a furry", "thomas is a","th0mas is","th0mas_is","th0mas_i5","thomas_is","furry","a furry"];
client.on('message', message => {


if (forbidenWords.includes(message.content.toLowerCase())) {
    message.delete();
  }
});

client.on('message', message => {
if (message.content.toLowerCase().startsWith(forbidenWords)) {
    message.delete();
};
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
	if (message.content === ':c') {
		message.channel.send('HA!');
	}
});

client.on('message', message => {
	if (message.content === 'im bored') {
		message.channel.send('go jump off a building then');
	}
});

client.on('message', message => {
	if (message.content === 'im bored') {
		message.channel.send('go jump off a building then');
	}
});

client.on('message', message => {
	if (message.content === '!br -s') {
		message.channel.send('The current streak is: ' + streak + '!');
	}
});

client.on('message', message => {
	if (message.content === 'fuck you') {
		message.channel.send('no u');
	}
});

client.on('message', message => {
	if (message.content === 'Fuck you') {
		message.channel.send('no u');
	}
});

client.on('message', message => {
	if (message.content === 'Fuck You') {
		message.channel.send('no u');
	}
});

client.on('message', message => {
	if (message.content === 'Fuck You!') {
		message.channel.send('no u');
	}
});


client.on('message', message => {
	if (message.content === 'help') {
		message.channel.send('no');
	}
});

client.on('message', message => {
	if (message.content === 'kill me') {
		message.channel.send('k');
	}
});

client.on('message', message => {
	if (message.content === 'Kill me') {
		message.channel.send('k');
	}
});

client.on('message', message => {
	if (message.content === 'uwu') {
		message.reply('you are furry trash.');
	}
});

client.on('message', message => {
	if (message.content === 'im still working on him') {
		message.channel.send('yeah you are! hurry up tho its taking ages.');
	}
});

client.on('message', message => {
	if (message.content === 'give me a meme') {
		message.reply('go look in a mirror.');
	}
});

client.on('message', message => {
	if (message.content === 'creeper') {
    setTimeout(function(){
        message.channel.send('awwww man');
    }, 1000);
  }
});






client.on('message', message => {
   if (message.content.startsWith(".say")) {
      message.delete(); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});

client.on('message', message => {
   if (message.content.startsWith("GG")) {
      message.delete(); //Supposed to delete message
   }
});



client.on('message', message => {
	if (message.content === '.sandwich') {
    var food1 = myArray[Math.floor(Math.random()*myArray.length)];
    var food2 = myArray[Math.floor(Math.random()*myArray.length)];
    var food3 = myArray[Math.floor(Math.random()*myArray.length)];
    var food4 = myArray[Math.floor(Math.random()*myArray.length)];
//REFRESHER FIRST?

		message.channel.send(food1+"\n"+food2+"\n"+food3+"\n"+food4+"\n"+'``This script was pulled from my website: https://foxxgaming.github.io/Projects/gen.html?``');


	}
});


client.on('message', message => {
   if (message.content === ".help") { //Supposed to delete message
      message.channel.send('**COMMANDS**\n-------------------\n.say <message> **Makes me say something**\n.info **Sends you bot info**\n.sandwich **Generates a random sandwich that you must eat**\n.8ball **Ask the 8ball anything!**\n.status **Used for development purposes.**\n.salute **Salute to the cheese master!**\n.update **Check the latest update!**\n.yeet **YEETIUS**');
   }
});





client.on('message', message => {
   if (message.content === ".status") { //Supposed to delete message
      message.channel.send('All systems are go!');
   }
});

client.on('message', message => {
   if (message.content === ".salute") { //Supposed to delete message
     salute=salute+salutescounter
      message.channel.send(`${message.author} has saluted to the cheese god. Total salutes today: `+salute);
   }
});



client.on('message', message => {
   if (message.content.startsWith(".8ball")) { //Supposed to delete message
    var answer = eightballarray[Math.floor(Math.random()*eightballarray.length)];
      message.channel.send("You shake the ball...");
      setTimeout(function(){
          message.channel.send(answer);
      }, 3000);
   }
});

client.on('message', message => {
   if (message.content === ".update") { //Supposed to delete message
      message.channel.send('Last update: **New Name and Icon!**');
   }
});

client.on('message', message => {
   if (message.content === ".salute save") { //Supposed to delete message
      save=salute+1
      message.channel.send('Abandoned Command.')
   }
});

client.on('message', message => {
   if (message.content === ".yeet") { //Supposed to delete message
      message.channel.send('YEETIUS');
   }
});

client.on('message', message => {


if (message.channel.id === '669006382963490827') { //Change to 669006382963490827 after dev
      
    if (bruhs.includes(message.content.toLowerCase())) {  
        streak = streak + 1
        message.channel.setTopic(streak) 
    } else {
      if (message.author.bot) return;
      
      message.reply("you broke the chain! Now we have to restart from 0. **Last streak: ``" + streak + "``**")

      streak = 0
    }
  }
});



client.on('message', message => {
   if (message.content === ".testcommand") { //Supposed to delete message
   const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);

}
});



//update shit lolx

client.login(process.env.BOT_TOKEN)
