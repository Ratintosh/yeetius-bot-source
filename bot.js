const Discord = require('discord.js')
const client = new Discord.Client()
const snekfetch = require('snekfetch');

require('events').EventEmitter.defaultMaxListeners = 100;


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
var food1 = myArray[Math.floor(Math.random()*myArray.length)];
var food2 = myArray[Math.floor(Math.random()*myArray.length)];
var food3 = myArray[Math.floor(Math.random()*myArray.length)];
var food4 = myArray[Math.floor(Math.random()*myArray.length)];



client.on('ready', () => { client.user.setGame('Use .help for help!'); });




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
	if (message.content === 'Im bored') {
		message.channel.send('go jump off a building then');
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
  if (message.content === '.info') {
		message.reply('check your dms!');
    message.author.send('**Welcome to The Rat Army.**\nBe sure to read #rules in my server.\n``This bot was created by Thomas H.``');
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
	if (message.content === 'F') {
		message.channel.send('f');
	}
});

client.on('message', message => {
	if (message.content === 'f') {
		message.channel.send('f');
	}
});


client.on('message', message => {
   if (message.content.startsWith(".say")) {
      message.delete(); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});

client.on('message', message => {
	if (message.content === '.sandwich') {
		message.channel.send(food1);
    message.channel.send(food2);
    message.channel.send(food3);
    message.channel.send(food4);
    message.channel.send('``This script was pulled from my website: https://foxxgaming.github.io/Projects/gen.html?``');
	}
});


client.on('message', message => {
   if (message.content === ".help") { //Supposed to delete message
      message.channel.send('**COMMANDS**\n-------------------\n.say <message> **Makes me say something**\n.info **Sends you bot info**\n.sandwich **Generates a random sandwich that you must eat**');
   }
});

exports.run = async (client, message, args) => {
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provided by r/dankmemes")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}


client.login(process.env.BOT_TOKEN)
