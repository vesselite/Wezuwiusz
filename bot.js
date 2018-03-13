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

client.login(process.env.NDIyNzQ2NTU3MTEzNDM0MTEy.DYmDpg.2nXXeVEBMwR6HRVyHyMxR3lxRnU)
