const Discord = require('discord.js')
const { hangman } = require('reconlx')

module.exports = {
  name: 'hangman', // Optional
  description: "Hangman game.",
  category: 'Games',
  maxArgs: 0,
  callback: async ({ message, args, text, client, prefix, instance }) => {
    const word = ['Test', 'Testing', 'Animal', 'Dino', 'Gravity Falls', 'Car', 'Monkey', 'Banana', 'Food', 'Pizza', 'Hamburger', 'Pie', 'Cartoon', 'Game', 'Minecraft', 'Roblox', 'Word', 'TickTacToe', 'Hangman', 'Snake', 'Tiger', 'Thing', 'Object', 'TV', 'Phone', 'PC', 'Laptop', 'Idiot', 'Red', 'Blue', 'Color', 'Rainbow', 'Rap', 'Legal', 'Illegal', 'SixNine', 'Bruh', 'Bitch', 'Obama', 'Bot', 'Discord', 'YouTube', 'Twitter', 'SnapChat', 'Instagram', 'Fast Food', 'Bully', 'Girlfriend', 'Boyfriend', 'Friend', 'Best Friend', 'Channel', 'Server', 'Java', 'Bedrock', 'Lion', 'Nemo', 'City', 'Paris', 'London', 'USA', 'PewDiePie', 'Youtuber', 'Twitch','Message', 'Ping', 'Commands', 'Math', 'Country', 'Germany', 'English', 'German', 'King', 'Queen', 'Online', 'Offline', 'Download', 'Install', 'Error', 'Year', 'Birthday', 'Table', 'JavaScript', 'Mother', 'Father', 'Sister', 'Brother', 'Baby', 'DaBaby', 'SUS', 'Among Us', 'OMEGA BRUH', 'Lol', 'lmao', 'lmfao', 'omg', 'random', 'colour', 'font', 'android', 'ios', 'windows', 'macos', 'linux', 'computer', 'personal', 'text', 'hear', 'talk', 'more', 'core', 'host', 'hive', 'bee', 'creative', 'survival', 'steam', 'steal', 'tired', 'singer', 'sing', 'motor', 'bike', 'motorbike', 'hello', 'troll', 'lyric', 'potato', 'fruit', 'vegetable', 'carrot', 'water', 'fire', 'earth', 'sun', 'sea', 'ocean', 'pool', 'guess', 'please', 'zoo', 'furry', 'monster', 'stop', 'start', 'void', 'stan', 'fan', 'dream', 'nightmare', 'super', 'guild', 'app', 'use', 'little', 'long', 'short', 'gang', 'blood', 'crip', 'api', 'monke', 'idiot', 'omfg', 'swear', 'god', 'idea', 'photosynthesis', 'solar system', 'saturn', 'cancer', 'Pneumonoultramicroscopicsilicovolcanoconiosis', 'strength', 'cardib', 'asian', 'europe', 'black', 'white', 'brown', 'racist', 'sexist', 'gay', 'lgbtqa', 'emoji', 'anime', 'animated', 'trump', 'lime', 'lemonade', 'rtx', 'cpu', 'gpu', 'card', 'uno']

    const hang = new hangman({
      message: message,
      word: `${word[Math.floor(Math.random() * word.length)]}`,
      client: client,
      channelID: message.channel.id,
    })

    hang.start();
  }
}