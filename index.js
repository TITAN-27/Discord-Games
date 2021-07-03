const Discord = require('discord.js')
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

const testServer = '856944365251199006'
const ownerID = '612907221487058944'

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION']
})

client.on('ready', () => {
  console.log(`${client.user.username} is online`) 

  client.user.setPresence({ activity: { name: 'Discord Games' }, status: 'dnd' })

    new WOKCommands(client, {
    commandsDir: 'commands',
    featuresDir: 'features',
    messagesPath: 'messages.json',
    testServers: [testServer]
  })
    .setDefaultPrefix('?')
    .setColor('BLUE')
    .setMongoPath(process.env.MONGO_URI)
    .setBotOwner([ownerID])
    .setCategorySettings([
      {
        name: 'Games',
        emoji: '🎮',
      },
      {
        name: 'Development',
        emoji: '⚙',
        hidden: true
      },
      {
        // You can change the default emojis as well
        // "Configuration" is ⚙ by default
        name: 'Configuration',
        emoji: '🚧',
        // You can also hide a category from the help menu
        // Admins bypass this
        hidden: true
      }
  ])
})

client.login(process.env.TOKEN)
