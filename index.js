const Discord = require('discord.js');
const bot = new Discord.Client(({ intents: 32639 }));
const {token} = require("./config.json") ;
const ms = require('ms'); 
bot.on('ready',() =>{
    console.log('This bot is online');
  
})


const PREFIX = '!';
//NEWBIES
bot.on('guildMemberAdd',GuildMember =>{
    let welcomeRole = GuildMember.guild.roles.cache.find(role => role.name ==='AbobaGuys');
    GuildMember.roles.add(welcomeRole);
});
bot.on("guildMemberAdd",member=>{
    var embed = new Discord.MessageEmbed()
        .setTitle("Welcome to our server")
        .setDescription(`Hi , ${member}`)
        .setImage(member.user.displayAvatarURL())
    bot.channels.cache.get("914517457765564426").send(embed);
    member.send("We are very glad that you CUM to us ");
    member.roles.add("914501078425419816")
});
//SOMEONE LEAVE US
bot.on("guildMemberRemove",member=>{
    var embed = new Discord.MessageEmbed()
        .setTitle("Wtf just happened?")
        .setDescription(`${member.user.tag} Agh,this creature just leave us`)
        .setImage(member.user.displayAvatarURL())        
    bot.channels.cache.get("914517457765564426").send(embed);   
});
//BOT EMBED
bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){        
        case 'embed':
        const Moderator = message.guild.roles.cache.find(role => role.name == "Я ТУТ ГЛАВНЫЙ");
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#24DA95 ')
            .setTitle('Rules')
            .setThumbnail(message.guild.iconURL())
            .setDescription("Ur Welcome buddy!")
            .addFields(
              { name: 'Regular field title', value: message.author.username },
              { name: 'User Role', value:("All Roles", `This is the ${Moderator ? `${Moderator}` : "Here you - just nobody"} role.`) },//add display of role
              { name: 'Current Server', value: message.guild.name},
              { name: 'Warm thanks from '+ message.guild.name, value: "Espesialy for you "+ message.author.username},
         )         
             
             .setImage(("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg"))
             .setTimestamp()
             .setFooter('Ur Welcome', message.guild.iconURL());

             message.channel.send({ embeds: [newEmbed] });
             break;
       
          };
    }
    
);
//BOT DEFAULT COMMANDS
bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'link':
            message.channel.send('https://mangalib.me/darling-in-the-swamp?section=info://www.youtube.com/watch?v=OQsUnFDT7iE&list=PLbbLC0BLaGjoYVIoS6rms3aKtDtBJ4HtM&index=2');
            break;
        case 'info':
            if(args[1] === 'aboba'){
                message.channel.send('Tf ur doing here');
            }else{
                message.reply('Oh well,what wew gonna do now?');
            }
        case 'clear': 
            const deleteCount = parseInt(args[1], 10);
            if (!args[1]) return message.reply("Error invalid second arg")
            if (!deleteCount || deleteCount < 1 || deleteCount > 100) return;
            message.channel.bulkDelete(deleteCount + 1);    
            break;     
    }
});
//BOT STATUSES
bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'invisible':            
        bot.user.setStatus('invisible');
        break;
    case 'online':
        bot.user.setStatus('online')
        break;
    case 'idle':
        bot.user.setStatus('idle');
        break;
    case 'dnd':
        bot.user.setStatus('dnd');
        break;
    case 'status_null':
        bot.user.setPresence({ activity: null });
        break;
    case 'dead':
        bot.destroy();
        break;
    case 'depressed':
        bot.user.setActivity("with depression", {
        type: "STREAMING",
        url: "https://www.twitch.tv/example-url"
    })
        break;
    }
});
//MUTE 


bot.login(token);
