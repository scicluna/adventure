import {player, hp, ap, gp} from "./player.js"

export const map = [
    {
        id: 0, 
        desc:"I take my shortsword and make the final preparations for my journey. I look down at my last piece of silver and figure i should spend it before taking off on my joureny to defeat the Demon Lord. (Health is in the lower left. Armor is in the lower right. Armor mitigates damage that you would take. If you hit 0 health, you die. To view your inventory, use dev-tools (right click and inspect -> console.)", 
        options:[
            {
                oid: 0,
                txt:"Buy an old shield",
                destination: 1,
                get state(){
                    player.ap = ap+1
                    player.shield = true
                }
            },
            {
                oid: 1,
                txt:"Buy extra rations",
                destination: 1,
                get state(){
                    player.rations = true
                }
            },
            {
                oid: 2,
                txt:"Buy a grappling hook",
                destination: 1,
                get state(){
                    player.rope = true
                }
            },
            {
                oid: 3,
                txt:"Buy a shovel",
                destination: 1,
                get state(){
                    player.shovel = true
                }
            },
         ]
    },
    {
        id: 1, 
        desc:"Finally, I leave town and head out on a great adventure! My destination is unclear, all I know is that the Demon Lord's castle is far to the north.", 
        options:[
            {
                oid: 0,
                txt:"I spend extra time in town to gather information",
                destination: 2
            },
            {
                oid: 1,
                txt:"I head towards the town gate, ready to leave on a great adventure",
                destination: 19
            },
            {
                oid: 2,
                txt:"Honestly. This is a bad idea, I'm just going to stay home instead.",
                destination: -1
            },
        ]
    },
    {
        id: 2, 
        desc:"After a while of asking around town, a man shrouded with a gray cloak walks up to me. He says 'I've heard that you seek the Demon Lord's Castle.' The journey will surely be rough and full of peril. Follow the river northwards and avoid the main roads, for great evil seeks to stop you on your journey. Once you reach the river fork, fjord the river and follow the river northwest. Take the trechorous pass come the mountain and you shall arrive at your destination.", 
        options:[
            {
                oid: 0,
                txt:"No, but really, I'd better find someone less sketchy to get information from.",
                destination: 3
            },
            {
                oid: 1,
                txt:"Good to know...",
                destination: 1
            },
            {
                oid: 2,
                txt:"I inquire as to how he knows this, and why I should believe his words.",
                destination: 3
            },
            {
                oid: 3,
                txt:"That sounds too dangerous. I'd better just not go on this awesome adventure.",
                destination: -1
            },
        ]
    },
    {
        id: 3, 
        desc:"Before I knew it, the strange man in the cloak had dissapeared. What now?", 
        options:[
            {
                oid: 0,
                txt:"I head towards the town gate, ready to leave on a great adventure",
                destination: 19
            },
            {
                oid: 1,
                txt:"I head over to the tavern, hoping that i can learn more there.",
                destination: 4
            },
        ]
    },
    {
        id: 4, 
        desc:"I enter a busy tavern filled with rough and tumble adventurers. I walk up to the bar and take a seat. The barkeep walks up to me and asks 'What can I do for you?'", 
        options:[
            {
                oid: 0,
                txt:"Tell me all that you know about the Demon Lord, old man!!!!",
                destination: 5
            },
            {
                oid: 1,
                txt:"Have you heard any stories about the Demon Lord?",
                destination: 5
            },
            {
                oid: 2,
                txt:"Where is the Demon Lord's castle?",
                destination: 5
            },
            {
                oid: 3,
                txt:"A pint of mead. Put it on my tab.",
                destination: 11,
                get state(){
                    player.mead = true
                }
            },
        ]
    },
    {
        id: 5, 
        desc:"'Woah there, Information isn't free or anything. Do you not even have enough money to buy a drink?' The tavern bouncers begin looking in my direction, their large figures looming over me.", 
        options:[
            {
                oid: 0,
                txt:"Come on, just tell me about the Demon Lord",
                destination: 6
            },
            {
                oid: 1,
                txt:"Please?",
                destination: 6
            },
            {
                oid: 2,
                txt:"I curse out the bartender, doesn't he know that I am to save the world?",
                destination: 6
            },
            {
                oid: 3,
                txt:"Sorry. I really don't have any money left, I've spent it all preparing for a great journey. Can't you please understand?",
                destination: 11
            },
        ]
    },
    {
        id: 6, 
        desc:"One of the bouncers puts a hand on my shoulder. 'If you don't have coin, I think its time for you to leave.'", 
        options:[
            {
                oid: 0,
                txt:"I start a bar fight by assaulting the bouncer",
                destination: 7,
                get state(){
                    player.hp = hp-7+ap
                }
            },
            {
                oid: 1,
                txt:"I take out my shortsword and stab the bouncer",
                destination: 7,
                get state(){
                    player.hp = hp-6+ap
                    player.criminal = true
                }
            },
            {
                oid: 2,
                txt:"I leave the tavern with no further fuss.",
                destination: 18,
            },
            {
                oid: 3,
                txt:"Look, I'll owe you one for this. Come on, you know I'm good for it.",
                destination: 11
            },
        ]
    },
    {
        id: 7, 
        desc:"The tavern erupts into violence as I begin to resist the bouncers. Tables are flipping and fists are flying. The barkeep hides and the bouncers fight to gain order over the situation. A stray fist catches me across the torso.", 
        options:[
            {
                oid: 0,
                txt:"I join in the brawl, revelling in the mayhem.",
                destination: 8,
                get state(){
                    player.hp = hp-7+ap
                }
            },
            {
                oid: 1,
                txt:"I stab everyone I can with my shortsword",
                destination: 13,
                get state(){
                    player.hp = hp-6+ap
                    player.criminal = true
                }
            },
            {
                oid: 2,
                txt:"I quickly leave the tavern before I get even more hurt.",
                destination: 18,
            },
            {
                oid: 3,
                txt:"I hop the bar and rob the barkeep during the chaos.",
                destination: 16,
                get state(){
                    player.gp = gp+10
                    player.criminal = true
                }
            },
        ]
    },
    {
        id: 8, 
        desc:"I stand atop a writhing mass of taverngoers, having defeated them with my bare hands.", 
        options:[
            {
                oid: 0,
                txt:"I walk out like a badass.",
                destination: 18,
            },
            {
                oid: 1,
                txt:"I yell 'Anyone else want some?'",
                destination: 9,
            },
            {
                oid: 2,
                txt:"I grab the barkeeper by the scruff of his shirt and ask him one more time to devulge what he knows about the Demon Lord.",
                destination: 12,
                get state(){
                    player.criminal = true
                }
            },
            {
                oid: 3,
                txt:"I quickly scruff the bodies for coinage and other loot.",
                destination: 17,
                get state(){
                    player.criminal = true
                }
            },
        ]
    },
    {
        id: 9, 
        desc:"A voice calls back out 'You don't look so tough.' I see a large man atleast 10 foot tall approach me from the tavern entrance. He  says 'I'll tell you what, if you can beat me in a fight, I'll give you all the money in my pocket, and my golden chain.'", 
        options:[
            {
                oid: 0,
                txt:"Bring it on!",
                destination: 10,
                get state(){
                    player.hp = hp-10+ap
                }
            },
            {
                oid: 1,
                txt:"On second thought... I quickly leave the tavern",
                destination: 18,
            },
        ]
    },
    {
        id: 10, 
        desc:"The fight is brutal, but you manage to overcome the large man claiming his money and golden chain as a prize well earned.", 
        options:[
            {
                oid: 0,
                txt:"Now I'd better get out of here...",
                destination: 18,
                get state(){
                    player.goldchain = true
                    player.gp = gp+15
                }
            },
            {
                oid: 1,
                txt:"I grab the barkeeper by the scruff of his shirt and ask him one more time to devulge what he knows about the Demon Lord.",
                destination: 12,
                get state(){
                    player.goldchain = true
                    player.gp = gp+15
                    player.criminal = true
                }
            },
        ]
    },
    {
        id: 11, 
        desc:"Gods you're pathetic. Fine, I've heard that the Demon Lord's Castle can be reached by following the main road north and over the Caprice Mountains. But I should warn you, kid. There are bandits on that road as of late, if you travel that way, you should take extra care.", 
        options:[
            {
                oid: 0,
                txt:"Thanks barkeep!",
                destination: 18,
            },
        ]
    },

    {
        id: 12, 
        desc:"My gods, you psychopath. Fine fine, I'll tell you all I know. The Demon Lord's Castle is north along the main road and past the Carpice Mountains. That's all I know, I swear.", 
        options:[
            {
                oid: 0,
                txt:"Now that wasn't so hard, was it?",
                destination: 18,
            },
        ]
    },
    {
        id: 13, 
        desc:"I stand in a pile of mangled corpses and a deep pool of crimson. My blade shimmering with blood as my last victim breaths their last.", 
        options:[
            {
                oid: 0,
                txt:"I walk out like a badass.",
                destination: 18,
            },
            {
                oid: 1,
                txt:"I yell 'Anyone else want some?'",
                destination: 14,
            },
            {
                oid: 2,
                txt:"I grab the barkeeper by the scruff of his shirt and ask him one more time to devulge what he knows about the Demon Lord.",
                destination: 12,
            },
            {
                oid: 3,
                txt:"I quickly scruff the bodies for coinage and other loot.",
                destination: 17,
            },
        ]
    },
    {
        id: 14, 
        desc:"'As a matter of fact, we do!' The town guard shows up in force halberds at the ready as they surround me.", 
        options:[
            {
                oid: 0,
                txt:"You'll never take me alive!",
                destination: 15,
            },
            {
                oid: 1,
                txt:"I surrender to the guards",
                destination: 15,
            },
        ]
    },
    {
        id: 15, 
        desc:"As it turns out, the penalty for my crimes was death.", 
        options:[
            {
                oid: 0,
                txt:"RIP",
                destination: -1,
            },
        ]
    },

    {
        id: 16, 
        desc:"I point my shortsword at the barkeep and rob him for all he's worth. I snatch from him a sack of coins.", 
        options:[
            {
                oid: 0,
                txt:"Cool beans, time to split.",
                destination: 18,
                get state(){
                    player.gp = gp+10
                    player.criminal = true
                }
            },
        ]
    },
    {
        id: 17, 
        desc:"I ruffle through the bodies and steal their coin purses and any other valuables I could find before making a quick exit.", 
        options:[
            {
                oid: 0,
                txt:"I find a compass",
                destination: 18,
                get state(){
                    player.compass = true
                    player.gp = gp+10
                }
            },
            {
                oid: 1,
                txt:"I find a shining gem",
                destination: 18,
                get state(){
                    player.gem = true
                    player.gp = gp+10
                }
            },
            {
                oid: 2,
                txt:"I found someones house keys",
                destination: 18,
                get state(){
                    player.housekey = true
                    player.gp = gp+10
                }
            },
            {
                oid: 3,
                txt:"I found a spare dagger",
                destination: 18,
                get state(){
                    player.dagger = true
                    player.gp = gp+10
                }
            },
        ]
    },
    {
        id: 18, 
        desc:"I leave the tavern and head back out onto the streets.", 
        options:[
            {
                oid: 0,
                txt:"I head north along the main road",
                destination: 19
            },
            {
                oid: 1,
                txt:"I head north along the river",
                destination: 19,
            },
            {
                oid: 2,
                txt:"I quickly run from town to evade the town guard",
                destination: 20,
                get req(){
                    return player.criminal === true
                }
            },
            {
                oid: 3,
                txt:"I go find the house that these keys belong to.",
                destination: 22,
                get req(){
                    return player.housekey === true
                }
            },
        ]
    },
    {
        id: 19, 
        desc:"I head out towards the town gate as I attempt to leave town.", 
        options:[
            {
                oid: 0,
                txt:"The guards let me by, with only a solemn nod. I'm apparently in acceptable standing with them.",
                destination: 24,
                get req(){
                    return player.criminal === undefined
                }
            },
            {
                oid: 1,
                txt:"The guards surround and arrest me. The gaul!",
                destination: 15,
                get req(){
                    return player.criminal === true
                }
            },
        ]
    },
    {
        id: 20, 
        desc:"The guards are at the gates, how on earth am I going to get out of here alive?", 
        options:[
            {
                oid: 0,
                txt:"Climb the wall with my grappling hook",
                destination: 21,
                get req(){
                    return player.rope === true
                }
            },
            {
                oid: 1,
                txt:"Jump into the river",
                destination: 23,
                get state(){
                    player.hp = hp-1
                }
            },
        ]
    },
    {
        id: 21, 
        desc:"I hoist my way onto the wall, but my grappling hook is stuck in the masonry. A guard spots me and I quickly lower myself down the other side and run.", 
        options:[
            {
                oid: 0,
                txt:"Damn, I lost my grappling hook",
                destination: 24,
                get state(){
                    player.rope = false
                }
            },
        ]
    },
    {
        id: 22, 
        desc:"I run down the street trying the housekey on every house I can think of. Lucky for me, I get it right on the second try. Nobody is home so I ransack the place. Unfortunately, the only thing worth bringing with me is a sack of potatoes.", 
        options:[
            {
                oid: 0,
                txt:"Atleast I've got rations now.",
                destination: 18,
                get state(){
                    player.houskey = false
                    player.rations = true
                },
                get req(){
                    return player.rations === false || player.rations === undefined
                }
            },
            {
                oid: 1,
                txt:"I'm really carrying all the food I can already, though...",
                destination: 18,
                get state(){
                    player.housekey = false
                },
                get req(){
                    return player.rations === true
                }
            },
        ]
    },

    {
        id: 23, 
        desc:"I dive into the river and swim my way out of town. I brush against some sharp rocks during my dive, but swim onwards. Before I know it, I wash up on the river bank clear from the town. Hopefully the guards don't chase me.", 
        options:[
            {
                oid: 0,
                txt:"I'm drenched, but atleast I got away alive.",
                destination: 24,
                get state(){
                    player.criminal = false
                },
                get req(){
                    return player.rations === false || player.rations === undefined
                }
            },
            {
                oid: 1,
                txt:"I'm drenched and all of my rations are ruined.",
                destination: 24,
                get state(){
                    player.rations = false
                    player.criminal = false
                },
                get req(){
                    return player.rations === true
                }
            },
        ]
    },

    {
        id: 24, 
        desc:"I leave town for the first time in my life. And set off heading north.", 
        options:[
            {
                oid: 0,
                txt:"I follow the main road.",
                destination: 25,
            },
            {
                oid: 1,
                txt:"I follow the river.",
                destination: 0,
            },
        ]
    },
    
    {
        id: 25, 
        desc:"Along the roadway, I come across a man wearing leather armor slouched over on the road. He calls out 'Traveler, help me please, I'm injured and cannot move my leg'", 
        options:[
            {
                oid: 0,
                txt:"I approach the stranger and offer him my assistance",
                destination: 26,
                get state(){
                    player.hp = hp-7+ap
                }
            },
            {
                oid: 1,
                txt:"I walk off of the road and avoid getting too close to him",
                destination: 30
            },
            {
                oid: 2,
                txt:"I charge the stranger with my shortsword and attempt to take his life",
                destination: 28,
                get state(){
                    player.hp = hp-6+ap
                }
            },
            {
                oid: 3,
                txt:"I yell back to him and try to learn more information",
                destination: 29
            },
        ]
    },
    {
        id: 26, 
        desc:"I approach the stranger to inspect his wounds. And then he stabs me with a knife! I stumble backwards and then realize that I'm surrounded by armed bandits. The 'wounded' man yells 'Drop your belongings, and we'll spare your life.'", 
        options:[
            {
                oid: 0,
                txt:"En guarde, bandit scum",
                destination: 27,
                get state(){
                    player.hp = hp-10+ap
                }
            },
            {
                oid: 1,
                txt:"Fine, fine, take my things.",
                destination: 33,
                get state(){
                    player.gp = 0
                    if (player.shield === true){
                        delete player.shield
                        player.ap = ap-1
                    }
                    delete player.shortsword
                    delete player.rations
                    delete player.shovel
                    delete player.coins
                    delete player.gem
                    delete player.compass
                    delete player.dagger
                    delete player.mead
                    delete player.goldchain
                    delete player.housekey
                }
            },
            {
                oid: 2,
                txt:"I make a run for it",
                destination: 32,
                get state(){
                    player.hp = hp-8+ap
                }
            },
        ]
    },
    {
        id: 27, 
        desc:"The battle is bloody and fierce as I swing my sword and fight off the ten bandits single-handedly. After I slay the third bandit, the rest flee leaving me to lick my wounds. The three bandits leave me a handful of coins, a spare dagger, some rope, a shortbow, and a whistle.", 
        options:[
            {
                oid: 0,
                txt:"That was a close one...",
                destination: 33,
                get state(){
                    player.hp = hp-7+ap
                    player.gp = gp+5
                    player.rope = true
                    player.dagger = true
                    player.shortbow = true
                    player.whistle = true
                }
            },
        ]
    },
    {
        id: 28, 
        desc:"I slay the man only to be surrounded by ten of his friends. They yell 'You killed Thomas, we'll kill you, you bastard!!'", 
        options:[
            {
                oid: 0,
                txt:"En guarde, bandit scum",
                destination: 27,
                get state(){
                    player.hp = hp-10+ap
                }
            },
            {
                oid: 1,
                txt:"I make a run for it",
                destination: 32,
                get state(){
                    player.hp = hp-8+ap
                }
            },
        ]
    },
    {
        id: 29, 
        desc:"I yell out to the man asking him what happened. He groans and says, 'Look kid, you're surrounded by my boys. Your money or your life.'", 
        options:[
            {
                oid: 0,
                txt:"En guarde, bandit scum",
                destination: 27,
                get state(){
                    player.hp = hp-10+ap
                }
            },
            {
                oid: 1,
                txt:"I make a run for it",
                destination: 31,
                get state(){
                    player.hp = hp-6+ap
                }
            },
        ]
    },
    {
        id: 30, 
        desc:"I notice that the man's limp suddenly vanishes as he begins to chase me off of the road, other men appearing in tow.", 
        options:[
            {
                oid: 0,
                txt:"En guarde, bandit scum",
                destination: 27,
                get state(){
                    player.hp = hp-10+ap
                }
            },
            {
                oid: 1,
                txt:"I make a run for it",
                destination: 31,
            },
        ]
    },
    {
        id: 31, 
        desc:"I take my headstart and run with it, the footchase lasts for an hour before I think they've given up.", 
        options:[
            {
                oid: 0,
                txt:"Huff huff... I'm exhausted... Where even am I now?",
                destination: 0,
                get state(){
                    player.hp = hp-1
                }
            },
        ]
    },
    {
        id: 32, 
        desc:"As I flee, an arrow hits my shoulder. But i continue running strong. After an hour, I think they've given up.c", 
        options:[
            {
                oid: 0,
                txt:"Huff huff... I'm exhausted... Where even am I now?",
                destination: 0,
                get state(){
                    player.hp = hp-1
                }
            },
        ]
    },
    {
        id: 33, 
        desc:"After my run-in with the bandits, I continue north along the main road until I reach the town of 'Yorish'. The guards wave me through the town gate after questioning me, and I spend some much needed time here.", 
        options:[
            {
                oid: 0,
                txt:"I head over to the inn for some much needed rest (5 gp)",
                destination: 36,
                get state(){
                    player.day++
                    player.gp = gp-5
                    player.rested = true
                    if (player.hp+3 < 10){
                        player.hp = hp+3
                    } else player.hp = 10
                },
                get req(){
                    return player.gp >= 5 && player.rested === false
                }
            },
            {
                oid: 1,
                txt:"I spend some time gathering information about the upcomming leg of my journey.",
                destination: 34,
            },
            {
                oid: 2,
                txt:"I visit the shops, looking to buy more supplies.",
                destination: 35,
 
            },
            {
                oid: 3,
                txt:"I continue on my journey, passing quickly through the town.",
                destination: 0,
            },
        ]
    },
    {
        id: 34, 
        desc:"I ask all around town regarding my further journey north and learn that a landslide has blocked the northern road towards the capitol city.", 
        options:[
            {
                oid: 0,
                txt:"Good to know...",
                destination: 36,
            },
        ]
    },
    {
        id: 35, 
        desc:"I head over to the marketplace and browse the merchant's wares. The merchant is selling a ring of protection for 15 gp, spices for 5gp, and a compass for 10gp", 
        options:[
            {
                oid: 0,
                txt:"Buy the ring of protection",
                destination: 35,
                get state(){
                    player.ring = true
                    player.ap = ap+1
                    player.gp = gp-15
                },
                get req(){
                    return player.gp >= 15 && player.ring === false
                }
            },
            {
                oid: 1,
                txt:"Buy the spices",
                destination: 35,
                get state(){
                    player.spices = true
                    player.gp = gp-5
                },
                get req(){
                    return player.gp >= 5 && player.spices === false
                }
            },
            {
                oid: 2,
                txt:"Buy the compass",
                destination: 35,
                get state(){
                    player.compass = true
                    player.gp = gp-10
                },
                get req(){
                    return player.gp >= 10 && player.compass === false
                }
 
            },
            {
                oid: 3,
                txt:"I leave the store",
                destination: 36,
            },
        ]
    },
    {
        id: 36, 
        desc:"I continue to browse the town", 
        options:[
            {
                oid: 0,
                txt:"Head to the marketplace",
                destination: 35,

            },
            {
                oid: 1,
                txt:"Gather information",
                destination: 34,
            },
            {
                oid: 2,
                txt:"Continue my journey",
                destination: 0,
                
            },
            {
                oid: 3,
                txt:"I wait until nightfall, and then attempt to rob the marketplace",
                destination: 37,
                get state(){
                    player.day++
                    player.criminal = true
                }
            },
        ]
    },
    {
        id: 0, 
        desc:"", 
        options:[
            {
                oid: 0,
                txt:"",
                destination: 0,

            },
            {
                oid: 1,
                txt:"",
                destination: 0,
            },
            {
                oid: 2,
                txt:"",
                destination: 0,
 
            },
            {
                oid: 3,
                txt:"",
                destination: 0,
            },
        ]
    },
]