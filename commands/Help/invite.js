const Discord = require('discord.js')

module.exports = {
  name: 'invite', // Optional
  commands: ['inviteme', 'invitebot'], // Optional
  slash: 'both',
  description: "Sends Invite Link of Bot.",
  category: 'Help',
  maxArgs: 0,
  callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Illumium")
      .setURL('https://discord.com/oauth2/authorize?client_id=860802859611455488&permissions=4228381809&scope=bot%20applications.commands')
      .setAuthor('Made by Diino#0403')
      .setThumbnail('https://cdn.discordapp.com/attachments/858371116627787776/860809512852389908/discordgamespfp.png')
      .setFooter('?help')
      .setColor('BLUE')
      .setTimestamp()
      .addFields(
        {
          name: '📬Invite Me',
          value: '[Invite Link](https://discord.com/oauth2/authorize?client_id=860802859611455488&permissions=4228381809&scope=bot%20applications.commands)',
        }
      )
  if (message) {
    message.channel.send(embed)
  }
  return embed
  }
}