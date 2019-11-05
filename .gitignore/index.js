const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.login("NjQxMzMxMDIzMzA4NjUyNTUw.XcG0Jw.hhohG6vGCsR-6ywV4yCpUdEag2M")

client.on("ready", function(){
    client.user.setGame("En cour de build, $help")
    console.log('Le bot est bien connecter')
})

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("591016089618481152").send("Bienvenue dans la Pleb " + user + " !")
    user.addRole("593122173376397352")
})

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("591016089618481152").send("Le soldat " + user.user.username + " est mort au combat")
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content == prefix + "hello"){
        message.channel.send("Bonjour " + message.author + " !")
    }
    if(message.content == prefix + "impressionnemoi"){
        message.channel.send("https://fr.pornhub.com/ finit le #NoNutNovember :cherries: :eggplant:  ")
    }
    
});
