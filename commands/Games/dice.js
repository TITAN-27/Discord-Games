const Discord = require('discord.js')

module.exports = {
  name: 'dice', // Optional
  commands: ['roll', 'dice', 'diceroll'], // Optional
  description: "Roll the dice.",
  category: 'Games',
  callback: ({ message, args, text, client, prefix, instance, channel }) => {
    let dice = Math.floor(Math.random() * 6) + 1
      - 1 +1 ;

    let diceembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
		.setTimestamp()    
    .setDescription(`You got a **${dice}**`);

    message.channel.send(diceembed);
  }
} 