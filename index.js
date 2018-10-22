const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '.';
const hug_imgs = [
    'https://i.gyazo.com/0adfeff7f4a2a76a5d97b904b4aa04a3.gif',
]
const pat_imgs = [
    'https://i.gyazo.com/9d78da1ce45ffd94f9232f5e87cb0dec.gif',
]
const tumblr_imgs = [
    'https://i.gyazo.com/7b760d9a4c7cecd5d6a4c8d963ded344.png',
    'https://i.gyazo.com/093f388caab644a41f675d2805307d73.png',
    'https://i.gyazo.com/a1d168f7e7b3b2ed39f9d13516a64055.png',
    'https://i.gyazo.com/a740ff27074dae93c29a40a0c5bde035.png',
    'https://i.gyazo.com/8a9fc0403facebf7aaa22144f96b5cc7.png',
    'https://i.gyazo.com/8c7b8f1fd169236a12c20eca6c61e409.png',
    'https://i.gyazo.com/eb729bfffc042bad601d565aa5cc0cb1.png',
    'https://i.gyazo.com/1e4f340913f6497642a569cdb809d54f.png',
    'https://i.gyazo.com/b624cf54161ae0a0c803726c2fc069b8.png',
    'https://i.gyazo.com/c8cb6e1c759648deefe8fa14f3fbf3c0.png',
    'https://i.gyazo.com/67e5eee2cadd873244160a2557f3e020.png',
    'https://i.gyazo.com/1cf8b6256bb9d5d2d9661b760a73e5d0.png',
    'https://i.gyazo.com/4f6e223769275abf433bf30db4459693.png',
    'https://i.gyazo.com/f6606794c51f0a06769d0e79ca423114.png',
    'https://i.gyazo.com/8dd934a4d331a401301d2de8252117d3.png',
    'https://i.gyazo.com/35fb1731e496e71ae2014086dce775f7.png',
    'https://i.gyazo.com/5b367ac7dd0091ccfa67a5440f23dd3c.png',
    'https://i.gyazo.com/a31adf9b8522508c02b2d2a39322d07f.png',
    'https://i.gyazo.com/bbb6b9686d96332848a66aa54d90a9a7.png',
    'https://i.gyazo.com/c52ab779739d1166d75b0ed625f29785.png',
    'https://i.gyazo.com/d636973bff870aab5cc206bf75202093.png',
    'https://i.gyazo.com/9a4d1dd5c33237bf4779c68b21737642.png',
    'https://i.gyazo.com/2535a681132aa2d6c155571f8b468bcc.png',
    'https://i.gyazo.com/ed73619d9384a4052195d0210fed36c6.png',
    'https://i.gyazo.com/5d8fa4509ef939c616f2debd0b1628c4.png',
    'https://i.gyazo.com/8e13288338d2dc3b6eb8e9d6d3e216d7.png',
    'https://i.gyazo.com/67a8e99686582e3be9b4bb43d81e3d7e.png',
    'https://i.gyazo.com/1dabc942b74580025f3332a73c0bebfe.png',
    'https://i.gyazo.com/fcc949d17582869536e4d48918ce2156.png',
    'https://i.gyazo.com/a8afbe814578a7854b12d22a24f064c1.png',
    'https://i.gyazo.com/5ccd4a450a46bddd59d8008bb9765e61.png',
    'https://i.gyazo.com/ab744dc14eafeab3037bf87ae0b0ac46.png',
    'https://i.gyazo.com/b2e3e9adc85f5a23b0c459484c852c06.png',
    'https://i.gyazo.com/0852abbc138059bffa6d86daa4e535eb.png',
    'https://i.gyazo.com/73e977f9d7790be4420925fb7ddd4789.png',
    'https://i.gyazo.com/264c7b310b0cb76bf91976bdbf56af1b.png',
    'https://i.gyazo.com/e2c3134e5730b4e0580e99389652c10e.png',
    'https://i.gyazo.com/39f73a5b7bb75d09c4e83af7022f0336.png',
    'https://i.gyazo.com/7e6b16066be88d328e5e9532247bcde4.png',
    'https://i.gyazo.com/f5f73101410358523c926b63f9b6ce82.png',
    'https://i.gyazo.com/cea1c4ae3b85b18e75b4ff33e36d0248.png',
    'https://i.gyazo.com/5ce9f339f11ca4cdb1fbf741d242d540.png',
    'https://i.gyazo.com/aa27f7d50821c671d92378b54b3feb52.png',
    'https://i.gyazo.com/9185845ca2d5a2fb80a512133a54b61d.png',
    'https://i.gyazo.com/c17ddbc1877d522dba92dbd5a6583355.png',
    'https://i.gyazo.com/ad5d2859715203afc126063afa6c9619.png',
]

client.on('message', message => {


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    var msg = message.content.toUpperCase();

            if(message.content === "666") {
                message.channel.send(``, {
                    file: tumblr_imgs[Math.floor(Math.random() * tumblr_imgs.length)]
                });
            }
            if(command === "hug") {
                if(message.mentions.members.size == 1) {
                    let member = message.mentions.members.first()
                    message.channel.send(`${message.author} gave ${member} a hug!`, {
                        file: hug_imgs[Math.floor(Math.random() * hug_imgs.length)]
                    });
                }
            }
            if(command === "pat") {
                if(message.mentions.members.size == 1) {
                    let member = message.mentions.members.first()
                    message.channel.send(`${message.author} pats ${member} uwu`, {
                        file: pat_imgs[Math.floor(Math.random() * pat_imgs.length)]
                    });
                }
            }
            if(message.content === "Hey") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "hey") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "Hi") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "hi") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "Hello") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "hello") {
                message.channel.send(`stfu idiot`, {
                });
            }
            if(message.content === "Stfu") {
                message.channel.send(`you stfu you dumbass`, {
                });
            }
            if(message.content === "stfu") {
                message.channel.send(`you stfu you dumbass`, {
                });
            }
            if(message.content === "Welcome") {
                message.channel.send(`not welcome`, {
                });
            }
            if(message.content === "welcome") {
                message.channel.send(`not welcome`, {
                });
            }
            if(message.content === "Welcome!") {
                message.channel.send(`not welcome`, {
                });
            }
            if(message.content === "welcome!") {
                message.channel.send(`not welcome`, {
                });
            }
            if(message.content === "No") {
                message.channel.send(`yes?`, {
                });
            }
            if(message.content === "no") {
                message.channel.send(`yes?`, {
                });
            }
            if(message.content === "Yes") {
                message.channel.send(`no?`, {
                });
            }
            if(message.content === "yes") {
                message.channel.send(`no?`, {
                });
            }
            if(message.content === "Daddy") {
                message.channel.send(`k-kitten?`, {
                });
            }
            if(message.content === "daddy") {
                message.channel.send(`k-kitten?`, {
                });
            }
            if(message.content === "make me") {
                message.channel.send(`no u`, {
                });
            }
        }
    )
client.on('ready', () => {
    console.log('launched')
})

client.login("MTUxNzU5Nzk4Njk2NjczMjgw.DqjJCQ.wbJh3-62BkTAW9dJGRxCGqlN-Dk");