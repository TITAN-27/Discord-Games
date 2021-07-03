const Discord = require('discord.js');
const reconlx = require('reconlx');

module.exports = {
  name: 'ticktactoe', // Optional
  description: "Play ticktactoe.",
  category: 'Games',
  maxArgs: 1,
  callback: async ({ message, args, text, client, prefix, instance, channel }) => {
    const messageArray = message.content.split(' ');
    const args1 = messageArray.slice(1);
    
    if (!args1[0]) {
      message.reply('Please @someone to play with.')
    } 
      else {
    var game = new reconlx.tictactoe({
      message: message,
      player_two: message.mentions.members.first(),
      });
    }
  }
}