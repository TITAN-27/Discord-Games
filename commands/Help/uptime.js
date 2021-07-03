const ms = require('ms');
const Discord = require('discord.js')
const Client = require('ms')

module.exports = {
  name: 'uptime', // Optional
  slash: 'both',
  description: "Shows how long the bot has been online for.",
  category: 'Help',
  maxArgs: 0,
  callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
      // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

    const uptimeembed = new Discord.MessageEmbed()
      .setTitle('Uptime')
      .setAuthor("Illumium")
      .setDescription(`**${days}d ${hours}h ${minutes}m ${seconds}s**`)
      .setThumbnail('https://cdn.discordapp.com/attachments/858371116627787776/860809512852389908/discordgamespfp.png')
      .setFooter('Uptime for the Bot')
      .setColor('BLUE')
      .setTimestamp()

      if (message) {
        message.channel.send(uptimeembed)
      }
    return uptimeembed
      //message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
}