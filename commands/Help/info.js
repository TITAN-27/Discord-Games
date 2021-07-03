const Discord = require('discord.js')

module.exports = {
  name: 'info', // Optional
  commands: ['botinfo', 'bot'], // Optional
  slash: 'both',
  description: "Shows info about the Bot.",
  category: 'Help',
  maxArgs: 0,
  callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Discord Games")
      .setURL('https://www.youtube.com/c/ItsDino')
      .setAuthor('Made by Diino#0403')
      .setThumbnail('https://cdn.discordapp.com/attachments/858371116627787776/860809512852389908/discordgamespfp.png')
      .setFooter('?help')
      .setColor('BLUE')
      .setTimestamp()
      .addFields(
        {
          name: '👨‍💻Creator',
          value: 'Diino#0403',
          inline: true,
        },
        {
          name: '💁‍♂️Server',
          value: '[Support Server](https://discord.gg/kz4Ak8g7hf)',
          inline: true,
        },
        {
          name: '📬Invite Me',
          value: '[Invite Link](https://discord.com/api/oauth2/authorize?client_id=854039748749164564&permissions=8&scope=bot%20applications.commands)',
          inline: true,
        },
        {
          name: '💻Website',
          value: '[Website](https://itsdiino.github.io)',
          inline: true,
        },
        {
          name: '🏘Total Servers',
          value: `${client.guilds.cache.size}`,
          inline: true,
        },
        {
          name: '👥Total Users',
          value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
          inline: true,
        }
      )
  if (message) {
    message.channel.send(embed)
  }
      return embed
  }
}