function getBotResponse(input) {
    //--------------------rock paper scissors----------------------//
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    //------------------------how------------------------------//
    if ((input == "how") || (input == "how this works") || (input == "How this works")) {
        return "I am SG Bot. I help gamers. I can give Gaming tips, jokes and safety tips.";
    }

    
    //------------------------about-games-----------------------------//
    if ((input == "top rated games") || (input == "Top rated games") || (input == "top games") || (input == "Top games") || (input == "best games") || (input == "Best games")) {
        return "Please copy and paste your option from the below list, <br> <b>• Top Rated Games <br> • Best New Games <br> • Upcoming Games </b>"
    }

    //------------------------game-lists------------------------------//
    if ((input == "Top Rated Games")) {
        return "Top Rated Games, <br><b>• GTA V (2013) - 9.5<br>• Last of Us (2013) - 9.7<br>• Mass Effect 3 (2012) - 9.1<br>• God of War (2018) - 9.6<br>• Red Dead Redemption 2 (2018) - 9.7</b>";
    } else if ((input == "Best New Games")) {
        return "Best New Games, <br><b>• LEGO Star Wars: The Skywalker Saga (2022)<br>• Elden Ring (2022)<br>• WWE 2K22 (2022)<br>• Distant Worlds 2 (2022)<br>• Shadow Warrior 3 (2022)</b>"
    } else if ((input == "Upcoming Games")) {
        return "Upcoming Games, <br><b>•Two Point Campus (09-08-2022)<br>• Redfall (September 2022)<br>• Forespoken (11-10-2022)<br>• Gotham Knights (25-10-2022)<br>• Hogwarts Legacy (2022)</b>"
    } else if ((input == "Best Muliplayer Games")) {
        return "Best Muliplayer Games, <br><b>•Minecraft (2011)<br>• Fortnite (2014)<br>• Among Us (2018)<br>• Valorant (2020)<br>• Apex Legends (2019)</b>"
    } else if ((input == "Best Singleplayer Games")) {
        return "Best Singleplayer Games, <br><b>•The Witcher 3 (2015)<br>• God of War (2018)<br>• Red Dead Redemption 2 (2018)<br>• Metal Gear Solid V (2015)<br>• Spider-Man (2018)</b>"
    }


    //------------------------Owner------------------------------//
    if ((input == "who is the owner") || (input == "Who is the owner") || (input == "who Is the owner") || (input == "who is The owner") || (input == "who is the Owner") ||
    (input == "Who Is the owner") || (input == "Who is The owner") || (input == "Who is the Owner") || (input == "who Is The owner") || (input == "who Is the Owner") || (input == "who is The Owner") ||
    (input == "Who Is The owner") || (input == "Who Is the Owner") || (input == "Who is The Owner") || (input == "who Is The Owner")  || (input == "Who Is The Owner")) {
        return "Nimesh Fernando is the Owner & Developer of Safe Gamers.";
    } else if ((input == "who owns") || (input == "Who owns") || (input == "Who Owns") || (input == "who Owns") || (input == "WHO OWNS")) {
        return "Nimesh Fernando is the Owner & Developer of Safe Gamers.";
    } else if ((input == "owner") || (input == "Owner") || (input == "OWNER")) {
        return "Nimesh Fernando is the Owner & Developer of Safe Gamers.";
    }

    //--------------------------games----------------------------//
    if ((input == "game") || (input == "Game") || (input == "GAME") || (input == "games") || (input == "Games") || (input == "GAMES")) {
        return "Please copy and paste your Platform from the below list, <br><b>• PC<br>• PlayStation<br>• Mobile</b>";
    } else if ((input == "gaming") || (input == "Gaming") || (input == "GAMING")) {
        return "Please copy and paste your Platform from the below list, <br><b>• PC<br>• PlayStation<br>• XBox<br>• Mobile</b>";
    } 

    //--------------------------pc-games---------------------------//
    if ((input == "pc") || (input == "Pc") || (input == "pC") || (input == "PC")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pc game") || (input == "Pc game") || (input == "pC game") || (input == "PC game") || (input == "pc Game") ||
    (input == "Pc Game") || (input == "pC Game") || (input == "PC Game") || (input == "PC GAME")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pcgame") || (input == "Pcgame") || (input == "pCgame") || (input == "PCgame") || (input == "pcGame") ||
    (input == "PcGame") || (input == "pCGame") || (input == "PCGame") || (input == "PCGAME")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pc games") || (input == "Pc games") || (input == "pC games") || (input == "PC games") || (input == "pc Games") ||
    (input == "Pc Games") || (input == "pC Games") || (input == "PC Games") || (input == "PC GAMES")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pcgames") || (input == "Pcgames") || (input == "pCgames") || (input == "PCgames") || (input == "pcGames") ||
    (input == "PcGames") || (input == "pCGames") || (input == "PCGames") || (input == "PCGAMES")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pc gamer") || (input == "Pc gamer") || (input == "pC gamer") || (input == "PC gamer") || (input == "pc Gamer") ||
    (input == "Pc Gamer") || (input == "pC Gamer") || (input == "PC Gamer") || (input == "PC GAMER")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pcgamer") || (input == "Pcgamer") || (input == "pCgamer") || (input == "PCgamer") || (input == "pcGamer") ||
    (input == "PcGamer") || (input == "pCGamer") || (input == "PCGamer") || (input == "PCGAMER")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pc gamers") || (input == "Pc gamers") || (input == "pC gamers") || (input == "PC gamers") || (input == "pc Gamers") ||
    (input == "Pc Gamers") || (input == "pC Gamers") || (input == "PC Gamers") || (input == "PC GAMERS")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "pcgamers") || (input == "Pcgamers") || (input == "pCgamers") || (input == "PCgamers") || (input == "pcGamers") ||
    (input == "PcGamers") || (input == "pCGamers") || (input == "PCGamers") || (input == "PCGAMERS")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "computer") || (input == "Computer") || (input == "COMPUTER")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "computer game") || (input == "Computer game") || (input == "COMPUTER game")  || (input == "computer Game") ||
    (input == "Computer Game") || (input == "COMPUTER Game") || (input == "COMPUTER GAME")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "computer games") || (input == "Computer games") || (input == "COMPUTER games")  || (input == "computer Games") ||
    (input == "Computer Games") || (input == "COMPUTER Games") || (input == "COMPUTER GAMES")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "computer gamer") || (input == "Computer gamer") || (input == "COMPUTER gamer")  || (input == "computer Gamer") ||
    (input == "Computer Gamer") || (input == "COMPUTER Gamer") || (input == "COMPUTER GAMER")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "computer gamers") || (input == "Computer gamers") || (input == "COMPUTER gamers")  || (input == "computer Gamers") ||
    (input == "Computer Gamers") || (input == "COMPUTER Gamers") || (input == "COMPUTER GAMERS")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PC Heating Issues<br>• PC FPS Issues<br>• PC Graphics Issues<br>• PC RAM Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }

    if ((input == "PC Heating Issues")){
        return "Solutions for PC Heating Issues, <br> <b>• Clean your PC<br>• Improve airflow<br>• Check the fans<br>• Reapply thermal paste<br>• Use an external cooling system<br>• Close programs or shut them down</b>";
    } else if ((input == "PC FPS Issues")){
        return "Solutions for PC FPS Issues, <br> <b>• Meet the system requirements of your games<br>• Turn off fullscreen optimization<br>• Check for system file corruption<br>• Update your graphics card drivers<br>• Cooldown your CPU and GPU<br>• Upgrade to SSD</b>";
    } else if ((input == "PC Graphic Issues")){
        return "Solutions for PC Graphics Issues, <br> <b>• Update Graphics Card Drivers<br>• Check and Enable Display adapters<br>• Check and Fix Graphics Card Connections<br>• Replace the Graphics Card</b>";
    } else if ((input == "PC RAM Issues")){
        return "Solutions for PC RAM Issues, <br> <b>• Check the RAM for damage and replace<br>• Increase RAM</b>"
    } else if ((input == "Health Issues")){
        return "Solutions for Health Issues, <br> <b>• Set time limits for play and stick to them<br>• Avoid staying in the same position for hours<br>• Avoid playing games for hours in dark rooms<br>• Do other activities every day, including exercise.<br>• Keep phones and other gadgets out of the bedroom so you won't play at night</b>";
    } else if ((input == "Gaming Addiction Issues")){
        return "Some Gaming Addiction Issues, <br> <b>• Thinking about gaming all or a lot of the time<br>• Feeling bad when you can't play<br>• Not being able to quit or even play less<br>• Having problems at work, school, or home because of your gaming<br>• Lying to people close to you about how much time you spend playing</b>";
    }

    //--------------------------playstation----------------------------//
    if (( input == "play station") || (input == "Play station") || (input == "Play Station") || (input == "play Station") ||
    (input == "PLAY station") || (input == "PLAY Station") || (input == "play STATION") || (input == "Play STATION") || (input == "PLAY STATION")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation") || (input == "Playstation") || (input == "playStation") || (input == "PlayStation") || (input == "PLAYSTATION")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station2") || (input == "Play station2") || (input == "Play Station2") || (input == "play Station2") ||
    (input == "PLAY station2") || (input == "PLAY Station2") || (input == "play STATION2") || (input == "Play STATION2") || (input == "PLAY STATION2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station 2") || (input == "Play station 2") || (input == "Play Station 2") || (input == "play Station 2") ||
    (input == "PLAY station 2") || (input == "PLAY Station 2") || (input == "play STATION 2") || (input == "Play STATION 2") || (input == "PLAY STATION 2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation2") || (input == "Playstation2") || (input == "playStation2") || (input == "PlayStation2") || (input == "PLAYSTATION2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation 2") || (input == "Playstation 2") || (input == "playStation 2") || (input == "PlayStation 2") || (input == "PLAYSTATION 2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station3") || (input == "Play station3") || (input == "Play Station3") || (input == "play Station3") ||
    (input == "PLAY station3") || (input == "PLAY Station3") || (input == "play STATION3") || (input == "Play STATION3") || (input == "PLAY STATION3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station 3") || (input == "Play station 3") || (input == "Play Station 3") || (input == "play Station 3") ||
    (input == "PLAY station 3") || (input == "PLAY Station 3") || (input == "play STATION 3") || (input == "Play STATION 3") || (input == "PLAY STATION 3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation3") || (input == "Playstation3") || (input == "playStation3") || (input == "PlayStation3") || (input == "PLAYSTATION3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation 3") || (input == "Playstation 3") || (input == "playStation 3") || (input == "PlayStation 3") || (input == "PLAYSTATION 3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station4") || (input == "Play station4") || (input == "Play Station4") || (input == "play Station4") ||
    (input == "PLAY station4") || (input == "PLAY Station4") || (input == "play STATION4") || (input == "Play STATION4") || (input == "PLAY STATION4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station 4") || (input == "Play station 4") || (input == "Play Station 4") || (input == "play Station 4") ||
    (input == "PLAY station 4") || (input == "PLAY Station 4") || (input == "play STATION 4") || (input == "Play STATION 4") || (input == "PLAY STATION 4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation4") || (input == "Playstation4") || (input == "playStation4") || (input == "PlayStation4") || (input == "PLAYSTATION4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation 4") || (input == "Playstation 4") || (input == "playStation 4") || (input == "PlayStation 4") || (input == "PLAYSTATION 4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station5") || (input == "Play station5") || (input == "Play Station5") || (input == "play Station5") ||
    (input == "PLAY station5") || (input == "PLAY Station5") || (input == "play STATION5") || (input == "Play STATION5") || (input == "PLAY STATION5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (( input == "play station 5") || (input == "Play station 5") || (input == "Play Station 5") || (input == "play Station 5") ||
    (input == "PLAY station 5") || (input == "PLAY Station 5") || (input == "play STATION 5") || (input == "Play STATION 5") || (input == "PLAY STATION 5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation5") || (input == "Playstation5") || (input == "playStation5") || (input == "PlayStation5") || (input == "PLAYSTATION5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "playstation 5") || (input == "Playstation 5") || (input == "playStation 5") || (input == "PlayStation 5") || (input == "PLAYSTATION 5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps") || (input == "Ps") || (input == "pS") || (input == "PS")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps2") || (input == "Ps2") || (input == "pS2") || (input == "PS2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps 2") || (input == "Ps 2") || (input == "pS 2") || (input == "PS 2")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps3") || (input == "Ps3") || (input == "pS3") || (input == "PS3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps 3") || (input == "Ps 3") || (input == "pS 3") || (input == "PS 3")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps4") || (input == "Ps4") || (input == "pS4") || (input == "PS4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps 4") || (input == "Ps 4") || (input == "pS 4") || (input == "PS 4")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps5") || (input == "Ps5") || (input == "pS5") || (input == "PS5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "ps 5") || (input == "Ps 5") || (input == "pS 5") || (input == "PS 5")) {
        return "Please copy and paste your Problem from the below list, <br><b>• PS Heating Issues<br>• PS FPS Issues<br>• PS Graphics Issues<br>• PS Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }

    if ((input == "PS Heating Issues")) {
        return "Solutions for PS Heating Issues, <br><b>• Clean your Playstation<br>• Ensure proper placement for air flow<br>• Manually update your Playstaion<br>• Update your game software.<br>• Retart your Playstation";
    } else if ((input == "PS FPS Issues")) {
        return "Solutions for PS FPS Issues, <br><b>• Checking the hard drive<br>• Update the Playstation applications and the Playstation itself<br>• Free up the disk space<br>• Rebuild the PS database <br>• Check the internet connection<br>• Call the customer support of the PS4</b>";
    } else if ((input == "PS Graphics Issues")) {
        return "Solutions for PS Graphic Issues, <br><b>• Update your TV's firmware<br>• Check the HDMI ports<br>• Check the power supply<br>• Check the hard drive<br>• Check the internet connection<br>• Controller reset</b>";
    } else if ((input == "PS Storage Issues")) {
        return "Solutions for PS Storage Issues, <br><b>• Connect a USB external hard drive to your console<br>• Swap out your PlayStation's internal storage<br>• Reinstall games<br>• Rebuild the database</b>";
    }


    //--------------------------xbox----------------------------//
    if ((input == "xbox") || (input == "Xbox") || (input == "xBox") || (input == "XBox") || (input == "XBOX")) {
        return "Please copy and paste your Problem from the below list, <br><b>• XBox Heating Issues<br>• XBox FPS Issues<br>• XBox Graphics Issues<br>• XBox Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "x box") || (input == "X box") || (input == "x Box") || (input == "X Box") || (input == "X BOX")) {
        return "Please copy and paste your Problem from the below list, <br><b>• XBox Heating Issues<br>• XBox FPS Issues<br>• XBox Graphics Issues<br>• XBox Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }  else if ((input == "xbox 360") || (input == "Xbox") || (input == "xBox") || (input == "XBox") || (input == "XBOX")) {
        return "Please copy and paste your Problem from the below list, <br><b>• XBox Heating Issues<br>• XBox FPS Issues<br>• XBox Graphics Issues<br>• XBox Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if (input == "XBox") {
        return "Please copy and paste your Problem from the below list, <br><b>• XBox Heating Issues<br>• XBox FPS Issues<br>• XBox Graphics Issues<br>• XBox Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }  else if (input == "X Box") {
        return "Please copy and paste your Problem from the below list, <br><b>• XBox Heating Issues<br>• XBox FPS Issues<br>• XBox Graphics Issues<br>• XBox Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }

    if ((input == "XBox Heating Issues")) {
        return "Solutions for XBox Heating Issues, <br><b>• Reset or Replace the Power Supply<br>• Make Sure cooling system works Properly<br>• Remove Xbox from very hot heat sources<br>• Add some thermal paste into Processor<br>• Upgrade your Xbox one heat sink<br>• Give Proper Aeration<br>• Keep Away Dusty Environments";
    } else if ((input == "XBox FPS Issues")) {
        return "Solutions for XBox FPS Issues, <br><b>• Switch to a different graphics mode<br>• Restart the Xbox<br>• Make sure the XBox is adequately cooled<br>• Free up space on the XBox SSD<br>• Check your monitor or TV<br>• See if XBox stutter and lag happens with other games</b>";
    } else if ((input == "XBox Graphics Issues")) {
        return "Solutions for XBox Graphic Issues, <br><b>• Update your TV's firmware<br>• Use a “high-speed” HDMI cable<br>• Check the power supply<br>• Check the hard drive<br>• Check the internet connection<br>• Controller reset</b>";
    } else if ((input == "XBox Storage Issues")) {
        return "Solutions for XBox Storage Issues, <br><b>• Uninstall finished games.<br>• Clean up hidden leftover game add-ons<br>• Delete unused content in games<br>• Shrink your games on Xbox<br>• Play Xbox games via USB storage</b>";
    }

    // //--------------------------nintendo----------------------------//
    // if (input == "nintendo") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "Nintendo") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "nintendo wii") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "Nintendo wii") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "Nintendo Wii") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "Nintendo WII") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "NINTENDO Wii") {
    //     return "What is your Nintendo Gaming related problem?";
    // } else if (input == "NINTENDO WII") {
    //     return "What is your Nintendo Gaming related problem?";
    // }

    //--------------------------mobile----------------------------//
    if ((input == "mobile") || (input == "Mobile") || (input == "MOBILE")) {
        return "Please copy and paste your Problem from the below list, <br><b>• Mobile Heating Issues<br>• Mobile FPS Issues<br>• Mobile Graphics Issues<br>• Mobile Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "phone") || (input == "Phone") || (input == "PHONE")) {
        return "Please copy and paste your Problem from the below list, <br><b>• Mobile Heating Issues<br>• Mobile FPS Issues<br>• Mobile Graphics Issues<br>• Mobile Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "mobile phone") || (input == "Mobile phone") || (input == "mobile Phone") || (input == "Mobile Phone") ||
    (input == "MOBILE phone") || (input == "MOBILE Phone") || (input == "mobile PHONE") || (input == "Mobile PHONE") || (input == "MOBILE PHONE")) {
        return "Please copy and paste your Problem from the below list, <br><b>• Mobile Heating Issues<br>• Mobile FPS Issues<br>• Mobile Graphics Issues<br>• Mobile Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    } else if ((input == "mobilephone") || (input == "Mobilephone") || (input == "mobilePhone") || (input == "MobilePhone") ||
    (input == "MOBILEphone") || (input == "MOBILEPhone") || (input == "mobilePHONE") || (input == "MobilePHONE") || (input == "MOBILEPHONE")) {
        return "Please copy and paste your Problem from the below list, <br><b>• Mobile Heating Issues<br>• Mobile FPS Issues<br>• Mobile Graphics Issues<br>• Mobile Storage Issues<br>• Health Issues<br>• Gaming Addiction Issues</b>";
    }

    if ((input == "Mobile Heating Issues")) {
        return "Solutions for Mobile Heating Issues, <br><b>• Turn the brightness down.<br>• Keep apps and games up-to-date.<br>• Take a break from playing games<br>• Take off the case<br>• Check the charging cable<br>• Only charge your phone's battery to 80%";
    } else if ((input == "Mobile FPS Issues")) {
        return "Solutions for Mobile FPS Issues, <br><b>• Push your phone's performance<br>• Change your game settings<br>• Download from trusted resources<br>• Update your games<br>• Turn Off- Power Saving Mode<br>• Disable automatic sync<br>• Use a fast SD card</b>";
    } else if ((input == "Mobile Graphics Issues")) {
        return "Solutions for Mobile Graphic Issues, <br><b>• Restart smartphone or tablet<br>• Check internet connection<br>• Check server status<br>• Check the hard drive<br>• Clear cache</b>";
    } else if ((input == "Mobile Storage Issues")) {
        return "Solutions for Mobile Storage Issues, <br><b>• Clear app cache<br>• Use fast SD cards<br>• Uninstall unnecessary apps";
    }

    //---------------------------about-bot-------------------------------//
    if ((input == "who are you") || (input == "Who are you") || (input == "who Are you") || (input == "who are You") || (input == "Who Are you") ||
    (input == "Who are You") || (input == "who Are You") || (input == "Who Are You?") || (input == "WHO ARE YOU")) {
        return "I'm SG Bot.";
    } else if ((input == "who") || (input == "Who") || (input == "WHO")) {
        return "I'm SG Bot.";
    }

    //---------------------------joke-------------------------------//
    if ((input == "joke")) {
        return "The PC gamer was denied entry to a night club. It was EXCLUSIVE.";
    } else if ((input == "jokes")) {
        return "Mike Tyson hates people who play Playstation. It's may be because he's an Xboxer.";
    } else if ((input == "Joke")) {
        return "PC gamers can't use Uber. There are too many incompatible drivers.";
    } else if ((input == "Jokes")) {
        return "I asked a French man if he played video games. He said Wii.";
    } else if ((input == "funny")) {
        return "Gamers only like one type of fish - Cod.";
    } else if ((input == "Funny")) {
        return "I got a PS5 for Christmas. My neighbors haven't even noticed it's missing yet.";
    } else if ((input == "tell joke")) {
        return "Pirate gamers love to play games in ArrRGB";
    } else if ((input == "tell jokes")) {
        return "Gamers don't take hot showers. They like to take steamy ones.";
    }


    //---------------------------tips-------------------------------//

    if ((input == "tip") || (input == "Tip")) {
        return "Gaming Tips <br> <b>• Define your gaming goals. <br> • Learn the roles and characters in your preferred games. <br> • Level up with a new gaming PC.</b>";
     } else if ((input == "tips") || (input == "tips")) {
         return "Gaming Tips <br> <b>• Connect socially with other gamers. <br> • Buy a proper gaming mouse and keyboard. <br> • Follow your favourite streamers.</b>";
     } else if ((input == "gaming tip")) {
         return " Gaming Tips <br> <b>• Upgrade your display. <br> • Buy a proper gaming mouse and keyboard. <br> • Cool your PC/ Playstation/ Mobile properly.</b>";
     } else if ((input == "gaming tips")) {
        return "Gaming Tips <br> <b>• Take care of your body and mind. <br> • Set up your space and take breaks. <br> • Connect socially with other gamers.</b>";
     }

    
    //--------------------------saftey-tips-------------------------------//

    if ((input == "safe") || (input == "Safe")) {
        return "Safe Gaming Tips <br> <b>• Secure your computer. <br> • Create a good password. <br> • Stick to your username. </b>";
    } else if ((input == "safe gaming")  || (input == "Safe gaming") || (input == "safe Gaming") || (input == "Safe Gaming")) {
        return "Safe Gaming Tips <br> <b>• Protect your identity. <br> • Stand up to bullying. <br> • Report harassment.</b>";
    } else if ((input == "safe gamer")  || (input == "Safe gamer") || (input == "safe Gamer") || (input == "Safe Gamer")) {
        return "Safe Gaming Tips <br> <b>• Keep video and audio between friends. <br> • Keep your cool, remember: it's a game. <br> • Have fun playing games!</b>";
    } else if ((input == "safe gamers")  || (input == "Safe gamers") || (input == "safe Gamers") || (input == "Safe Gamers")) {
        return "Safe Gaming Tips <br> <b>• Take regular breaks while gaming. <br> • Only use trusted sources to find and download games. <br> • Do not addicted to games.</b>";
    }
    

    //-------------------------Greeting responses-----------------------//
    if ((input == "hello") || (input == "Hello") || (input == "HELLO")) {
        return "Hello there!";
    } else if ((input == "hey") || (input == "Hey") || (input == "HEY")) {
        return "Hey there!";
    } else if ((input == "hi") || (input == "Hi") || (input == "HI")) {
        return "Hi there!";
    } else if ((input == "ado") || (input == "Ado") || (input == "ADO")  || (input == "hola")  || (input == "Hola")) {
        return "Hello fellow Gamer!";
    } else if ((input == "goodbye") || (input == "Goodbye") || (input == "goodBye") || (input == "GoodBye") || (input == "GOODBYE") || (input == "good bye") || (input == "Good bye") ||
    (input == "good Bye") || (input == "Good Bye") || (input == "GOOD bye") || (input == "GOOD Bye") || (input == "good BYE") || (input == "Good BYE") || (input == "GOOD BYE")) {
        return "Good Bye fellow Gamer!";
    } else if ((input == "bye") || (input == "Bye") || (input == "BYE")) {
        return "Talk to you later!";
    } else if ((input == "cya") || (input == "Cya") || (input == "c ya") || (input == "CYA") || (input == "C ya") || (input == "C Ya")) {
        return "See you later!";
    } else if ((input == "see you") || (input == "See you") || (input == "See You") || (input == "see You") || (input == "SEE you") || (input == "SEE You") ||
    (input == "see YOU") || (input == "See YOU") || (input == "SEE YOU")) {
        return "See you later!";
    } else if ((input == "seeyou") || (input == "Seeyou") || (input == "SeeYou") || (input == "seeYou") || (input == "SEEyou") || (input == "SEEYou") ||
    (input == "seeYOU") || (input == "SeeYOU") || (input == "SEEYOU")) {
        return "See you later!";
    } else if ((input == "stop") || (input == "Stop") || (input == "STOP")) {
        return "Good Bye then!";
    } else {
        return "Try asking something else!";
    }
}