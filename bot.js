const Discord * require('discord.js');
const client * new Discord.Client();

client.on('ready', () => {
    conslole.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.replay('pong');
      }
});

client.login(process.env.BOT_TOKEN)
