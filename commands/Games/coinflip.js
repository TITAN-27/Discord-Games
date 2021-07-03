const Discord = require('discord.js')

module.exports = {
  name: 'coinflip', // Optional
  aliases: ['cf'], // Optional
  description: "Flips a coin.",
  category: 'Games',
  maxArgs: 0,
  callback: async ({ message, args, text, client, prefix, instance, channel }) => {
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'heads';
    else result = 'tails';
    const embed = new Discord.MessageEmbed()
      .setTitle('½  Coinflip  ½')
      .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
      .setColor('RANDOM');
    message.channel.send(embed)
  }
}