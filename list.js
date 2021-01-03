var colorArray = [
			'#3375FF', //blue
			'#66FFBF', //teal
			'#BF00BF', //purple
			'#F3F00B', //yellow
			'#FF6B00', //orange
			'#FE86C2', //pink
			//'#A1B447', //olive
			'#65D9F7', //light blue
			'#008321' //dark green
			//'#A46900'  //brown
			];
			
var hexColor = colorArray[Math.floor(Math.random() * colorArray.length)];

var heroNames = [
			["UNDEFINED"],
            ["abaddon", "abba", "abbadon"],
            ["alchemist", "alc", "razzil", "alch"],
            ["ancient_apparition", "ancientapparition", "ancientapprition", "aa", "kaldr"],
            ["antimage", "am", "magina"],
			["wei", "ampersona", "antimagepersona", "persona"],
			["arc_warden", "arcwarden", "aw", "arc", "warden", "zet"],
			["axe", "mogulkhan"],
			["bane", "atropos"],
			["batrider", "bat"],
			["beastmaster", "bm", "beast", "rexxar"],
			["bloodseeker", "bs", "blood", "seeker", "strygwyr"],
			["bounty_hunter", "bountyhunter", "bounty", "bh", "gondar"],
			["brewmaster", "brew", "panda"],
			["bristleback", "bristle", "bb"],
			["broodmother", "brood", "spider"],
			["centaur", "centaurwarrunner", "cent", "bradwarden"],
			["chaos_knight", "chaosknight", "ck", "chaos", "nessaj"],
			["chen"],
			["clinkz", "bone", "bonefletcher", "brooklynkurtz"],
			["clockwerk", "rattletrap", "clock", "cw"],
			["crystal_maiden", "crystalmaiden", "cm", "maiden", "rylai"],
			["dark_seer", "darkseer", "ds"],
			["dark_willow", "darkwillow", "willow", "dw", "mireska", "biggestoversight"],
			["dazzle", "dazz", "shadowpriest"],
			["death_prophet", "deathprophet", "dp", "krobe", "krobelus"],
			["disruptor", "disraptor", "thrall"],
			["doom", "doombringer"],
			["dragon_knight", "dragonknight", "dk", "davion"],
			["drow_ranger", "drowranger", "drow", "trax", "traxex"],
			["earth_spirit", "earthspirit", "kaolin", "earth"],
			["earthshaker", "shaker", "raigor", "es"],
			["elder_titan", "eldertitan", "et"],
			["ember_spirit", "emberspirit", "ember", "xin"],
			["enchantress", "ench", "bambi"],
			["enigma"],
			["faceless_void", "facelessvoid", "faceless", "darkterror", "void", "fv"],
			["grimstroke", "grim"],
			["gyrocopter", "gyro", "aurel"],
			["hoodwink", "hood", "hoo"],
			["huskar", "husk"],
			["invoker", "voker", "carl", "arsenalmagus"],
			["io", "wisp"],
			["jakiro", "jak", "thd"],
			["juggernaut", "jugg", "yunero"],
			["keeper_of_the_light", "keeperofthelight", "kotl", "ezalor", "keeper"],
			["kunkka", "admiral"],
			["legion_commander", "legioncommander", "legioncomander", "legion", "lc"],
			["leshrac", "lesh"],
			["lich"],
			["lifestealer", "naix"],
			["lina", "linainverse", "slayer"],
			["lion", "demonwitch"],
			["lone_druid", "lonedruid", "ld", "sylla", "syllabear", "druid", "bear"],
			["luna", "moonrider"],
			["lycan", "lycanthrope", "banehollow", "wolf"],
			["magnus", "magnataur", "mag"],
			["mars"],
			["medusa", "dusa", "gorgon"],
			["meepo"],
			["mirana", "potm"],
			["monkey_king", "monkeyking", "mk", "monkey"],
			["morphling", "morph"],
			["naga_siren", "nagasiren", "naga", "siren"],
			["natures_prophet", "naturesprophet", "furion", "prophet", "np", "nature"],
			["necrophos", "necrolyte", "necro"],
			["night_stalker", "nightstalker", "night", "ns"],
			["nyx_assassin", "nyxassassin", "nyx", "nyxnyxnyx"],
			["ogre_magi", "ogremagi", "ogre", "om"],
			["omniknight", "omni", "purist"],
			["oracle"],
			["outworld_destroyer", "outworlddestroyer", "obsidiandestroyer", "outworlddevourer", "od", "harbinger", "outworld", "outhousedecorator"],
			["pangolier", "pango"],
			["phantom_assassin", "phantomassassin", "pa", "mortred"],
			["phantom_lancer", "phantomlancer", "pl", "azwraith"],
			["phoenix", "bird", "birb"],
			["puck", "faeriedragon"],
			["pudge", "pudka", "butcher"],
			["pugna", "pug"],
			["queenofpain", "qop", "akasha"],
			["razor"],
			["riki", "rikimaru", "sa"],
			["rubick", "rub", "grandmagus"],
			["sand_king", "sand", "sandyclaws", "sandking", "sk"],
			["shadow_demon", "shadowdemon", "sd"],
			["shadow_fiend", "shadowfiend", "sf", "nevermore"],
			["shadow_shaman", "shadowshaman", "shaman", "rhasta", "ss"],
			["silencer", "nortrom"],
			["skywrath_mage", "skywrathmage", "skywrath", "sky"],
			["slardar", "slar"],
			["slark"],
			["snapfire", "snap", "granny"],
			["sniper", "kardel"],
			["spectre", "spec", "specter", "mercurial"],
			["spirit_breaker", "spiritbreaker", "sb", "spiritbreaker"],
			["storm_spirit", "stormspirit", "raijin", "storm"],
			["sven", "rogueknight"],
			["techies", "goblintechies", "pieceofshit"],
			["templar_assassin", "templarassassin", "ta", "lanaya"],
			["terrorblade", "tb"],
			["tidehunter", "tide"],
			["timbersaw", "shredder", "timber", "rizzrak"],
			["tinker", "boush", "tink"],
			["tiny", "tony", "tuny"],
			["treant", "tree", "treantprotector", "tp", "rooftrellen"],
			["troll_warlord", "trollwarlord", "troll"],
			["tusk", "tuskarr", "tuskar", "walrus"],
			["underlord", "pitlord", "abyssalunderlord"],
			["undying", "undy", "dirge"],
			["ursa", "fuzzywuzzy"],
			["vengefulspirit", "venge", "vs"],
			["venomancer", "veno", "lesale"],
			["viper", "netherdrake"],
			["visage"],
			["void_spirit", "voidspirit"],
			["warlock"],
			["weaver"],
			["windranger", "windrunner", "wr", "wind", "lyralei"],
			["winter_wyvern", "winterwyvern", "wyvern", "ww"],
			["witch_doctor", "witchdoctor", "wd"],
			["wraith_king", "wraithking", "skeletonking", "wk", "wraith", "skele", "leoric"],
			["zeus", "zuus"]
			];

var masterQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["The fog of war is no match for the mist of fate."], //Abaddon
			["Failure is just another kind of success. The wrong kind."], //Alc
			["Icefog!"], //AA
			["Send thy Dead God's legions, I will put them all to death."], //AM
			["Did you hear the one about how magic sucks?"], //AM Persona
			["You do not have to be mad."], //Arc
			["What happened? Axe happened!"], //Axe
			["Ah ya ya ya ya ya yai eeyas!"], //Bane
			["Aw yeah, off we ride into the sunset."], //Batrider
			["Hoo hoo hoo."], //Beastmaster
			["Over the field of battle, the smell of blood rises like a promise."], //Bloodseeker
			["You can run but you can't hide."], //Bounty Hunter
			["What kind of pub is this?"], //Brewmaster
			["Who's squealing now, eh? Ha, aha ha heh."], //Bristleback
			["Sss-sss-ssslurp!"], //Broodmother
			["Oh, yes, fear my hoofbeats."], //Centaur
			["We descend into chaos."], //Chaos Knight
			["A fulfillment of the prophecy."], //Chen
			["Fire grows hungrier the more it's fed."], //Clinkz
			["That is so metal!"], //Clockwerk
			["Is it cold in here or is it just me?"], //Crystal Maiden
			["We are not so different, my enemies and I. Except my brain is much larger."], //Dark Seer
			["This makes absolutely no sense."], //Dark Willow
			["That was almost a disaster."], //Dazzle
			["I died a little just now."], //Death Prophet
			["I call down the thunder."], //Disruptor
			["All hell's broken loose."], //Doom
			["Face the knight, face the dragon."], //Dragon Knight
			["Now that you're dead, I find it easy to respect you."], //Drow Ranger
			["Who dares face me now."], //Earth Spirit
			["There may be many earths, but there's only one Earthshaker."], //Earthshaker
			["You must learn respect for your elders."], //Elder Titan
			["Through anger lies failure."], //Ember Spirit
			["You know what I love? Everything!"], //Enchantress
			["If light cannot escape me, what hope have you?"], //Enigma
			["An eternity of embarrassment!"], //Faceless Void
			["Watch the master at work!"], //Grimstroke
			["I belong in the sky, and you belong in the ground."], //Gyrocopter
			["Sleep tight little guy."], //Hoodwink
			["You gave all you could give but it was not enough."], //Huskar
			["Glorious invocation!"], //Invoker
			["Meditative Beeps"], //Io
			["That was cold blooded."], //Jakiro
			["Mmm, snazzy."], //Juggernaut
			["Do not fear the light--fear me!"], //Keeper of the Light
			["You set sail for fail."], //Kunkka
			["That escalated quickly!"], //Legion Commander
			["A thousand of your kind have fallen before me."], //Leshrac
			["Ah, IceFrog!"], //Lich
			["Ta-da!"], //Lifestealer
			["Come to mama!"], //Lina
			["I've been to hell and back, and back to hell... and back."], //Lion
			["Auuuuuhhh!"], //Lone Druid
			["Let the sky tear down the unworthy!"], //Luna
			["I've taken a Lycan to you. Ha ha ha ha ha."], //Lycan
			["I tell you what. You touch my horn, I break your face."], //Magnus
			["THIS IS DOOOOTAAAAA!"], //Mars
			["Gaze upon Medusa's beauty, and despair!"], //Medusa
			["Freakin' unbelievable."], //Meepo
			["It was not luck but skill!"], //Mirana
			["Ohh, I'll be signing autographs out front."], //Monkey King
			["You're washed up!"], //Morphling
			["My legs! I can't feel my legs."], //Naga Siren
			["New life will make its home amongst your bones."], //Nature's Prophet
			["I am the rotten apple that spoils the bunch."], //Necrophos
			["I'm the beast of bedtime tales."], //Night Stalker
			["Nyx, Nyx, Nyx, Nyx."], //Nyx Assassin
			["That had to hurt. I almost feel bad."], //Ogre Magi
			["The All-knowing One senses your regret."], //Omniknight
			["You will die in a house fire."], //Oracle
			["You're insane."], //Outworld Devourer
			["Beep beep!"], //Pangolier
			["I'm an immaterial girl!"], //Phantom Assassin
			["We outnumbered you. We outnumber them all!"], //Phantom Lancer
			["Contented Squawk"], //Phoenix
			["I am unfamiliar with this feeling. Is it joy?"], //Puck
			["You'll look good with an apple in yer mouth!"], //Pudge
			["You're wasting your life."], //Pugna
			["I know I'm a pain, but you love me anyway."], //Queen of Pain
			["Zapped your ass!"], //Razor
			["Oh you're dead. What a surprise."], //Riki
			["Exquisite! Absolutely exquisite!"], //Rubick
			["It's good to be King!"], //Sand King
			["Cry some more."], //Shadow Demon
			["Ozh icha gluth izh sol."], //Shadow Fiend
			["Au-mosu-atikanu!"], //Shadow Shaman
			["Shhh, did you hear something?"], //Silencer
			["I shall not report you. NO IN THE BAG LINE. SORRY, NOT HAPPENING."], //Skywrath Mage
			["Oh, how the deep ones will feast!"], //Slardar
			["On your belly and crawl."], //Slark
			["You looking for cookin tips, violence, or both?"], //Snapfire
			["Ho ho ha ha!"], //Sniper
			["Miserable and ignorant."], //Spectre
			["This is complete and utter bullshit!"], //Spirit Breaker
			["Glorious!"], //Storm Spirit
			["Hm... now what did we learn from this."], //Sven
			["I can't believe that worked."], //Techies
			["Feed me if you must."], //Templar Assassin
			["Fight me, cowards!"], //Terrorblade
			["Who needs a big brain when you've got teeth like mine?"], //Tidehunter
			["Run run run runrunrunrunrunrunrunrunrun!"], //Timbersaw
			["You can keep your magic, I have laser beams!"], //Tinker
			["It's hard to be this good."], //Tiny
			["Mmm? What happened?"], //Treant Protector
			["Why doesn't anybody like me?"], //Troll Warlord
			["That was a big ball of failure."], //Tusk
			["Hold on to your butts!"], //Underlord
			["I need... gummy vitamins."], //Undying
			["Mtlap tlap, not bad! Sllleup tlap tlap tlap."], //Ursa
			["The pain of my enemies is the only pleasure left to me."], //Vengeful Spirit
			["Ah, sweet toxicity!"], //Venomancer
			["Who needs legs, when you got wings?"], //Viper
			["I am the unyielding face of death."], //Visage
			["How can you carry hope in the face of the void?"], //Void Spirit
			["Can you believe this? Ah ha ha ha ha ha ha ha ha ha!"], //Warlock
			["Ho, snap!"], //Weaver
			["I blow you a kiss."], //Windranger
			["Ah, I've never felt this good! Ah ha ha ha ha!"], //Winter Wyvern
			["Oyeaaaaah."], //Witch Doctor
			["WELCOME TO ALL MY NEW SUBJECTS. NOW LET'S GET TO KNOW EACH OTHER."], //Wraith King
			["Did you think you could hide from a god?"] //Zeus
			];
			
var platinumQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["By what right do you tread here?"], //Abaddon
			["What a mess!"], //Alc
			["Time to break the ice!"], //AA
			["Thou art damned!"], //AM
			["This is the part where I embarrass you before you die."], //AM Persona
			["Frowny face."], //Arc
			["Axe has no time for all this jibber jabber."], //Axe
			["Now your nightmare lasts forever!"], //Bane
			["Whoa, sick burn!"], //Batrider
			["Hmm, wish I'd learned how to read."], //Beastmaster
			["Lie down... have a cookie."], //Bloodseeker
			["They'll tell tales of this."], //Bounty Hunter
			["It's happy hour!"], //Brewmaster
			["Well, what have we here."], //Bristleback
			["Oh so beautiful."], //Broodmother
			["Hurts you more than it hurts me."], //Centaur
			["Long have I waited."], //Chaos Knight
			["The persecution starts now!"], //Chen
			["Yeeeeeees!"], //Clinkz
			["Bleep bloop, I am a robot. Eh, just kidding."], //Clockwerk
			["It just keeps getting better."], //Crystal Maiden
			["You've hit a wall."], //Dark Seer
			["I don't know what I was expecting."], //Dark Willow
			["Tricked you."], //Dazzle
			["It did not take a prophet to see that coming."], //Death Prophet
			["Did I interrupt you?"], //Disruptor
			["Hemmehm, you were lucky this time."], //Doom
			["Of course."], //Dragon Knight
			["This couldn't have ended any other way."], //Drow Ranger
			["Really? Really?"], //Earth Spirit
			["It was getting far too crowded."], //Earthshaker
			["A pitiable attempt."], //Elder Titan
			["Even a master falters."], //Ember Spirit
			["Sproink."], //Enchantress
			["A welcome manifestation of randomness."], //Enigma
			["I may be faceless, but I'm not maceless."], //Faceless Void
			["You've a mind like a child."], //Grimstroke
			["That'll learn ya!"], //Gyrocopter
			["Time to die!"], //Hoodwinked
			["Is that all?"], //Huskar
			["Profitable engagement."], //Invoker
			["Angry Beeps"], //Io
			["We are not amused."], //Jakiro
			["There's a fine line between bravery and stupidity."], //Juggernaut
			["Lights out for you."], //Keeper of the Light
			["Just to be clear, if I call you mate, I don't mean it literally."], //Kunkka
			["Son of a...!"], //Legion Commander
			["A foregone conclusion."], //Leshrac
			["Who's the number one now?"], //Lich
			["You feel the red hand of death."], //Lifestealer
			["What in the blazes?"], //Lina
			["I've got the magic touch."], //Lion
			["What have you done?"], //Lone Druid
			["Piece of shite wizard."], //Luna
			["Wolves need no armor."], //Lycan
			["How shameful."], //Magnus
			["DADADA DA DA DA-DA-DA! DADADA DA DA DA-DA-DA!"], //Mars
			["Nobody look at anybody!"], //Medusa
			["I feel fine. Don't know what everyone's worried about."], //Meepo
			["Here, kitty-kitty-kitty..."], //Mirana
			["I'll pretend I didn't enjoy this."], //Monkey King
			["Didn't you see me waving?"], //Morphling
			["It had to be."], //Naga Siren
			["Aww... Too bad."], //Nature's Prophet
			["To your health. Ha ha ha ha ha ha ha ha ha."], //Necrophos
			["It's feeding time."], //Night Stalker
			["Assassinated."], //Nyx Assassin
			["We gave you a head start!"], //Ogre Magi
			["You chose poorly."], //Omniknight
			["Even you should've seen that coming. But you didn't."], //Oracle
			["I am ill disposed towards you."], //Outworld Devourer
			["Now it's just unfair."], //Pangolier
			["Ha, ahhh, ha ha, no no no."], //Phantom Assassin
			["Numbers have accomplished what strategy alone could not."], //Phantom Lancer
			["Angry Squawk"], //Phoenix
			["Was that smart?"], //Puck
			["Delicious..."], //Pudge
			["You did that to yourself."], //Pugna
			["You want me? Come get me."], //Queen of Pain
			["This will only hurt forever."], //Razor
			["I've been here the whole time."], //Riki
			["Whoops!"], //Rubick
			["You were expecting... Sandy Claws?"], //Sand King
			["Bow down."], //Shadow Demon
			["You can never hide!"], //Shadow Fiend
			["Tastes like chicken!"], //Shadow Shaman
			["All for naught."], //Silencer
			["The skies are dark with Skywrath power!"], //Skywrath Mage
			["You were out of your depth."], //Slardar
			["Oh this makes it all worthwhile."], //Slark
			["I won't eat you, dear. But Mortimer might."], //Snapfire
			["What a dum-dum!"], //Sniper
			["Can no one understand me?"], //Spectre
			["That's the spirit."], //Spirit Breaker
			["Looking good!"], //Storm Spirit
			["An expected outcome."], //Sven
			["Just have a seat right over there. And let the smart people work."], //Techies
			["Oh, snap!"], //Templar Assassin
			["A wise blade takes a fool's life."], //Terrorblade
			["Did you think I'd blunder? You must have mistaken me for Kunkka."], //Tidehunter
			["Saw that coming. Ha! Get it?"], //Timbersaw
			["I'm going to call that experiment, a failure."], //Tinker
			["You haven't got the stones."], //Tiny
			["Ah, fresh fertilizer."], //Treant Protector
			["This can't be happening."], //Troll Warlord
			["Oh, that had to hurt!"], //Tusk
			["There is no hope."], //Underlord
			["Not feed."], //Undying
			["Sweet as honey."], //Ursa
			["Prepare for the wave of terror: boo!"], //Vengeful Spirit
			["I owe it all to me."], //Venomancer
			["Burns... doesn't it?"], //Viper
			["Ahh this is much better."], //Visage
			["Living things die."], //Void Spirit
			["Pipsqueak."], //Warlock
			["A feast for my beetles."], //Weaver
			["Tell me this did not just happen."], //Windranger
			["Well deserved!"], //Winter Wyvern
			["Stick a bone in it. You're done."], //Witch Doctor
			["I NOW HAVE ALL THE SEXY."], //Wraith King
			["Thunderous applause!"] //Zeus
			];
			
var goldQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["How can such a thing be?"], //Abaddon
			["Talk about overreacting."], //Alc
			["I'm too old for this!"], //AA
			["Magic thyself out of that."], //AM
			["What can I say? I'm gifted."], //AM Persona
			["What have you done?"], //Arc
			["I said good day, sir!"], //Axe
			["I've been dreaming of this moment."], //Bane
			["I'm sappin' your will to live!"], //Batrider
			["Aroo arooew!"], //Beastmaster
			["Don't be negative... be positive!"], //Bloodseeker
			["A wise hunter knows patience."], //Bounty Hunter
			["What's wrong? Can't hold your liquor? ...hello?"], //Brewmaster
			["Oh, you want some of this... eh?"], //Bristleback
			["Don't die, my darlings."], //Broodmother
			["What a waste."], //Centaur
			["Your reputation precedes you."], //Chaos Knight
			["What blasphemy is this?"], //Chen
			["Thanks for the target practice."], //Clinkz
			["Ha, that tickles!"], //Clockwerk
			["I didn't see that coming."], //Crystal Maiden
			["Hoooahahaaaheeh."], //Dark Seer
			["Never had a chance."], //Dark Willow
			["Jzap!"], //Dazzle
			["How disappointing."], //Death Prophet
			["They're trying to kill me!"], //Disruptor
			["Oh, crap."], //Doom
			["I'll take that."], //Dragon Knight
			["Amateur."], //Drow Ranger
			["Perfect timing."], //Earth Spirit
			["Slammin'...?"], //Earthshaker
			["What have I done now?"], //Elder Titan
			["What did you learn?"], //Ember Spirit
			["You did your best."], //Enchantress
			["Silence is golden."], //Enigma
			["I can't bear to look."], //Faceless Void
			["Know your place."], //Grimstroke
			["I'm getting too old for this horse shit."], //Gyrocopter
			["Starting to feel a bit nutty."], //Hoodwink
			["My life now has meaning!"], //Huskar
			["Fight me!"], //Invoker
			["Triumphant Beeps"], //Io
			["We'll see about that."], //Jakiro
			["I'll be back to finish this later."], //Juggernaut
			["Get off my lawn... eh, what's a lawn?"], //Keeper of the Light
			["You're all washed up!"], //Kunkka
			["Nice mustache."], //Legion Commander
			["I'll take that."], //Leshrac
			["Does it tingle?"], //Lich
			["Alone with my rage!"], //Lifestealer
			["What a punk."], //Lina
			["To hell with you!"], //Lion
			["I should know better by now."], //Lone Druid
			["Isn't that a pretty thing!"], //Luna
			["The wolf is at your door."], //Lycan
			["This is bullshit!"], //Magnus
			["The only one surprised by this is you."], //Mars
			["You knew I was cold-blooded."], //Medusa
			["This is a real freakin' embarrasment."], //Meepo
			["Nicely done!"], //Mirana
			["Ok, that was unexpected."], //Monkey King
			["The tide has turned!"], //Morphling
			["That's got to suck."], //Naga Siren
			["Very nice."], //Nature's Prophet
			["What do you mean, cheer up? I'm quite cheerful."], //Necrophos
			["Darkness hungers."], //Night Stalker
			["Nyx chichcichcihcihchi."], //Nyx Assassin
			["You need to work on your skill. Like us."], //Ogre Magi
			["Be at peace you wretched fool."], //Omniknight
			["That was odd indeed!"], //Oracle
			["You let yourself get carried away."], //Outworld Devourer
			["So this whole mess is all your fault?"], //Pangolier
			["That went well, I think."], //Phantom Assassin
			["Now this is just silly."], //Phantom Lancer
			["Sorrowful Squawk"], //Phoenix
			["Someone chose a poor time to put me out of commission."], //Puck
			["Whateva."], //Pudge
			["Time to earn myself a bad reputation."], //Pugna
			["I love it when you resist."], //Queen of Pain
			["Shocking."], //Razor
			["Peek-aboo."], //Riki
			["What a surprise!"], //Rubick
			["Where do you think you're going?"], //Sand King
			["Just your bad luck."], //Shadow Demon
			["Fear my presence."], //Shadow Fiend
			["You're not going anywhere."], //Shadow Shaman
			["Silence, fool!"], //Silencer
			["That my friend was a mistake."], //Skywrath Mage
			["Jig's up."], //Slardar
			["You took the bait."], //Slark
			["There's too many darn wizards!"], //Snapfire
			["Dance! Ha ha ha ha! Dance!"], //Sniper
			["What is this?"], //Spectre
			["That did not go as expected."], //Spirit Breaker
			["Told you a storm was coming!"], //Storm Spirit
			["You deserved it."], //Sven
			["Where'd he go? Everywhere!"], //Techies
			["It's a trap!"], //Templar Assassin
			["Perhaps that wasn't wise."], //Terrorblade
			["Put a cork in it."], //Tidehunter
			["Oh God I think I'm going to be sick."], //Timbersaw
			["That was genius!"], //Tinker
			["My apologies."], //Tiny
			["Trees can be ferocious if provoked."], //Treant Protector
			["Try not to feed."], //Troll Warlord
			["Dohmvzm!"], //Tusk
			["Bow to your new lord."], //Underlord
			["No brains."], //Undying
			["Fuzzy Wuzzy!"], //Ursa
			["Swapsies!"], //Vengeful Spirit
			["Ssss, that burns."], //Venomancer
			["I fly into a rage."], //Viper
			["You shall not pass!"], //Visage
			["Such a limited imagination you have."], //Void Spirit
			["Another name in my grimoire."], //Warlock
			["A pattern repeats."], //Weaver
			["If you weren't so damned dead, I'd shoot you again."], //Windranger
			["Poor dear."], //Winter Wyvern
			["Oh, look at it go."], //Witch Doctor
			["I MISS MY BONES."], //Wraith King
			["That's all it takes to kill you?"] //Zeus
			];
			
var silverQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["Bow to your lord."], //Abaddon
			["That was genius!"], //Alc
			["Your blood runs cold."], //AA
			["Are you even trying?"], //AM
			["Crushing dreams is kind of my job."], //AM Persona
			["Busted."], //Arc
			["You deserve nothing!"], //Axe
			["Better luck next time."], //Bane
			["That was lame."], //Batrider
			["I'll be creeping while you are sleeping."], //Beastmaster
			["I'm seeing red... and it's amazing!"], //Bloodseeker
			["How many of you do I have to kill?"], //Bounty Hunter
			["Now I'm feeling it."], //Brewmaster
			["Oooh, that's lovely that is."], //Bristleback
			["Delicious."], //Broodmother
			["Stomped."], //Centaur
			["I consign you to dust."], //Chaos Knight
			["Can't escape your sins."], //Chen
			["You almost had it too."], //Clinkz
			["Tell me someone saw that!"], //Clockwerk
			["Now nobody wins!"], //Crystal Maiden
			["Your life, much like your head, lacked a point."], //Dark Seer
			["No. Just... no."], //Dark Willow
			["That's not right."], //Dazzle
			["Poor dear."], //Death Prophet
			["What weathermancery is this?"], //Disruptor
			["He he heh heh he, handsome devil, aren't I?"], //Doom
			["Just what I've been waiting for."], //Dragon Knight
			["You'll have to do better than that!"], //Drow Ranger
			["Yes, I just did that."], //Earth Spirit
			["It was your own damn fault."], //Earthshaker
			["Get off my lawn!"], //Elder Titan
			["Prepare for a lesson."], //Ember Spirit
			["Don't be mad."], //Enchantress
			["An astronomical price."], //Enigma
			["Some things were just not meant to be."], //Faceless Void
			["You die, yet your failure lives on."], //Grimstroke
			["Lucky!"], //Gyrocopter
			["Caught ya in your stubbies did we?"], //Hoodwink
			["Another life squandered."], //Huskar
			["One of my favorites!"], //Invoker
			["Denying Beeps"], //Io
			["Burninated."], //Jakiro
			["You will be forever alone."], //Juggernaut
			["Really now, you should have seen that coming."], //Keeper of the Light
			["Straight to the bottom with ya!"], //Kunkka
			["Try harder."], //Legion Commander
			["Two legged abomination."], //Leshrac
			["Watch your step, it's six feet down."], //Lich
			["The master is here!"], //Lifestealer
			["Burns, doesn't it?"], //Lina
			["Ah, sorry to disappoint you."], //Lion
			["Synergy!"], //Lone Druid
			["Interesting!"], //Luna
			["Go ahead, just try to kill me!"], //Lycan
			["Are you kidding me?"], //Magnus
			["Ha ha ha! I'll always remember how foolish you looked..."], //Mars
			["In your face."], //Medusa
			["How ya doin?"], //Meepo
			["You have learned nothing."], //Mirana
			["I feel better already."], //Monkey King
			["You're in over your head."], //Morphling
			["You're in deep now."], //Naga Siren
			["Feed the trees."], //Nature's Prophet
			["That was costly."], //Necrophos
			["Just what I needed!"], //Night Stalker
			["Talentless."], //Nyx Assassin
			["Ye gods, how'd that happen? What the. Who'd the. How'd that happen?"], //Ogre Magi
			["Nailed it."], //Omniknight
			["I want to die."], //Oracle
			["Your future is grim."], //Outworld Devourer
			["Were you watching? That's how it's done."], //Pangolier
			["All according to plan."], //Phantom Assassin
			["Such simple minds."], //Phantom Lancer
			["Denying Squawk"], //Phoenix
			["Greetings!"], //Puck
			["Oops. Was that me?"], //Pudge
			["You're only making it worse."], //Pugna
			["That was perfect."], //Queen of Pain
			["You can run. You should run."], //Razor
			["Why prolong the inevitable?"], //Riki
			["I almost feel bad."], //Rubick
			["Stings, don't it?"], //Sand King
			["You conspired against me."], //Shadow Demon
			["Outplayed."], //Shadow Fiend
			["Bukaw, bukaw!"], //Shadow Shaman
			["Calm yourselves."], //Silencer
			["Down you go!"], //Skywrath Mage
			["My deepest sympathies."], //Slardar
			["I can't hear you."], //Slark
			["Yeee-haw!"], //Snapfire
			["Say goodbye to your head!"], //Sniper
			["I do not understand."], //Spectre
			["My patience is rewarded."], //Spirit Breaker
			["I love this part!"], //Storm Spirit
			["You look stunned."], //Sven
			["I was told there'd be a mushroom cloud!"], //Techies
			["I saw that ending from miles away."], //Templar Assassin
			["Oh, they're gonna hate me for this."], //Terrorblade
			["Ha ha ha ha ha ha, Now you're fish food."], //Tidehunter
			["You mad? Cuz I am! Hahah!"], //Timbersaw
			["Pew, pew, pew pew pew!"], //Tinker
			["Rock em, sock em!"], //Tiny
			["Are you lost?"], //Treant Protector
			["Unfortunate."], //Troll Warlord
			["Well I tried."], //Tusk
			["Oh yes."], //Underlord
			["I hate life."], //Undying
			["A loss so small, the world will hardly notice."], //Ursa
			["I feel better already."], //Vengeful Spirit
			["Oh, costly."], //Venomancer
			["Close but not quite."], //Viper
			["You again?"], //Visage
			["Your anger is useless here."], //Void Spirit
			["Really? You just did that?"], //Warlock
			["You thought you had me, didn't you?"], //Weaver
			["Could be worse. Oh, wait, no it couldn't."], //Windranger
			["Chill, baby."], //Winter Wyvern
			["Wait for it... wait for it..."], //Witch Doctor
			["SO WHAT IF I SWAGGER?"], //Wraith King
			["Wait for it!"] //Zeus
			];

var bronzeQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["The House Avernus will disown me for that."], //Abaddon
			["We've got pretty good chemistry."], //Alc
			["Interesting."], //AA
			["Ha ha ha ha ha ha ha ha ha ha ha ha!"], //AM
			["Neh hah ha ha ha haa."], //AM Persona
			["Your grace is noted."], //Arc
			["Axe likes this very much."], //Axe
			["You're so nice."], //Bane
			["Ah, that's what I'm talking about!"], //Batrider
			["Sic 'Em!"], //Beastmaster
			["So much blood."], //Bloodseeker
			["Ah ha ha ha ha ha ha ha ha."], //Bounty Hunter
			["Ah, I love you guys."], //Brewmaster
			["Bright and breezy."], //Bristleback
			["What a lovely brood."], //Broodmother
			["I shall honor your name."], //Centaur
			["Yes. Yes!"], //Chaos Knight
			["Oh, thank God."], //Chen
			["Well done."], //Clinkz
			["That oughta rattle em, yeah!"], //Clockwerk
			["Very cool of you!"], //Crystal Maiden
			["Heheh yeheheh hey heehhhe yehhey yehe heheh eheh yeh."], //Dark Seer
			["Just what I was waiting for."], //Dark Willow
			["Oh, what a beauty!"], //Dazzle
			["Oh ah ha ha ha ha ha ho ho haa! Ha ha ha ha ha ha!"], //Death Prophet
			["Heheha."], //Disruptor
			["Heheh heh hah heh hah hah hah."], //Doom
			["Tehh, heh he huh heh heh huh."], //Dragon Knight
			["Ah ha ha ha ha ha ha ha ha ha ha ha ha ha!"], //Drow Ranger
			["You rock."], //Earth Spirit
			["Let's shake things up!"], //Earthshaker
			["Eh ha ha ha ha ha."], //Elder Titan
			["Eh he he he he he!"], //Ember Spirit
			["I love winning!"], //Enchantress
			["He-he-huh-heh-heh."], //Enigma
			["Heh heh hah ha hah heh heah heh."], //Faceless Void
			["Oh, that is too good."], //Grimstroke
			["Something for everybody!"], //Gyrocopter
			["Proper skux."], //Hoodwink
			["Ahh, this will please the gods."], //Huskar
			["Ha ha ha ha ha ha ha ha ha ha!"], //Invoker
			["Thankful Beeps"], //Io
			["Ha ha ha ha ha ha ha ha ha ha ha!"], //Jakiro
			["Oh... that's nice."], //Juggernaut
			["Eh hee hee hee hee hee."], //Keeper of the Light
			["He-hu-hu-hu-hu-huhhuha!"], //Kunkka
			["Not bad at all!"], //Legion Commander
			["To a future of grief."], //Leshrac
			["Stay frosty!"], //Lich
			["This pleases the Master."], //Lifestealer
			["That was hot!"], //Lina
			["Oh, hell yes."], //Lion
			["Skill comes with age!"], //Lone Druid
			["Ah ha ha ha ha ha ha!"], //Luna
			["You fought well and true."], //Lycan
			["Yes, this will do just fine."], //Magnus
			["My thanks will come later, when you least expect it."], //Mars
			["Brilliant."], //Medusa
			["Hnya Hnyahnyaha ha ha ha!"], //Meepo
			["Ha ha ha ha ha ha!"], //Mirana
			["Ah ha ha ha ha ha. Woohoohoohoo. Ohhh heee."], //Monkey King
			["I like what I see."], //Morphling
			["That went swimmingly."], //Naga Siren
			["Admirable."], //Nature's Prophet
			["Breathe it in."], //Necrophos
			["Heh heh heh hah heh hehhhh."], //Night Stalker
			["Nice."], //Nyx Assassin
			["That was skill all right. Pure skill."], //Ogre Magi
			["Beautiful."], //Omniknight
			["He ha ha he ha ha!"], //Oracle
			["I have solid intelligence on what is to come."], //Outworld Devourer
			["Was that intentional? It looked intentional."], //Pangolier
			["Ho ho ho ho ho ha ha ha!"], //Phantom Assassin
			["What an amazing thing!"], //Phantom Lancer
			["Thankful Squawk"], //Phoenix
			["Ha ha!"], //Puck
			["That's a bit of all right."], //Pudge
			["Ah, this is going to be good."], //Pugna
			["Uh ha ha ha ha ha ha ha ha ha ha ha!"], //Queen of Pain
			["I sense a connection between us!"], //Razor
			["Contract complete."], //Riki
			["Excellent idea!"], //Rubick
			["Ha ha ha ha ha ha ha!"], //Sand King
			["And they thought it could get no darker."], //Shadow Demon
			["Well bless your soul."], //Shadow Fiend
			["My prayers are answered."], //Shadow Shaman
			["You almost had that."], //Silencer
			["Ha ha!"], //Skywrath Mage
			["Heh heeh heh hah hah ha hah hah!"], //Slardar
			["I know I can trust you guys."], //Slark
			["Why thank you!"], //Snapfire
			["Hee hee hee hee hee hee hee hee hee hee!"], //Sniper
			["Ehha ha ha ha ha ha ha!"], //Spectre
			["Hah, it's all coming together!"], //Spirit Breaker
			["That's the spirit!"], //Storm Spirit
			["You are a true friend."], //Sven
			["Fun! Huhuhu!"], //Techies
			["Ha ha ha ha ha ha ha!"], //Templar Assassin
			["What a handsome devil."], //Terrorblade
			["We'll turn this tide to our advantage."], //Tidehunter
			["I almost trust you."], //Timbersaw
			["Your talents surpass your loveliness."], //Tinker
			["Are you ready to rubble?"], //Tiny
			["I'm really freaking out."], //Treant Protector
			["Go crazy!"], //Troll Warlord
			["Fist bump!"], //Tusk
			["I do not thank."], //Underlord
			["Heh heh heh heh ha ha ha ha ha ha ha ha ha ha!"], //Undying
			["Hah! Hah! Hah-hah-hah!"], //Ursa
			["So sweet..."], //Vengeful Spirit
			["Plague our enemies!"], //Venomancer
			["Air support arrives."], //Viper
			["Ah ha ha ha ha ha ha ha ha!"], //Visage
			["This pleases me to no end."], //Void Spirit
			["Ho ha ha ha ha ha ha ha ha!"], //Warlock
			["The pattern is complete."], //Weaver
			["Easy breezy."], //Windranger
			["Ah ha ha ha ha ha ha ha ha ha ha!"], //Winter Wyvern
			["Feeling good, man."], //Witch Doctor
			["I'LL HELP MY WEAK AND PUNY ALLIES WHERE I CAN."], //Wraith King
			["By my whiskers, that's good stuff!"] //Zeus
			];
			
var grandmasterQuotes = [
			["You didn't type a hero in correctly..."], //UNDEFINED
			["Oh no you di'nt."], //Abaddon
			["I can't feel my legs."], //Alc
			["No shard feelings. Hm hm hm hm hm hm hm."], //AA
			["Thou and I must have a frank discussion."], //AM
			["Hey! Who killed these creeps?"], //AM Persona
			["You will just have to accept this, and move on."], //Arc
			["Axe-actly!"], //Axe
			["Some dreams never die! Ahahahahahah!"], //Bane
			["A message from on high: You're dead!"], //Batrider
			["It's not the size of the beast in the fight but... well, actually, size kinda helps."], //Beastmaster
			["My drive for blood has found a donor!"], //Bloodseeker
			["Ka-ching! Your bounty is mine."], //Bounty Hunter
			["Having trouble seeing straight?"], //Brewmaster
			["Oy, oy, oy, save some of that keg for me, will ya, lads?"], //Bristleback
			["My palps are all atingle."], //Broodmother
			["I forgot about the kick on that one."], //Centaur
			["Chaos is Fun...damental."], //Chaos Knight
			["Say your prayers."], //Chen
			["Hot damn!"], //Clinkz
			["Hard on the outside, but with a soft delicious center."], //Clockwerk
			["You only live ice!"], //Crystal Maiden
			["You're no peer of the seer."], //Dark Seer
			["Ugh, fine. I guess you're my little PogChamp. Come here."], //Dark Willow
			["If killing you is wrong, I don't want to be right."], //Dazzle
			["No no. Tsk tsk tsk."], //Death Prophet
			["Feeling under the weather?"], //Disruptor
			["Mess with Doom, you get the horns."], //Doom
			["Never make a deal with a dragon, unless you're prepared to keep your end of it."], //Dragon Knight
			["I thought they warned you not to speak with rangers."], //Drow Ranger
			["You are learned in the ways of dying."], //Earth Spirit
			["Don't take that magnitude with me."], //Earthshaker
			["So puny compared to a Titan."], //Elder Titan
			["My favorite: medium rare!"], //Ember Spirit
			["You okay?"], //Enchantress
			["Is this real? Am I... real?"], //Enigma
			["Where do you think you're going."], //Faceless Void
			["Aaah ha ha ha ha ha ha ha ha, my masterpiece!"], //Grimstroke
			["Gagagagagagaga!"], //Gyrocopter
			["Catch ya later dingleberry!"], //Hoodwink
			["Offering accepted."], //Huskar
			["I am a beacon of knowledge blazing out across a black sea of ignorance!"], //Invoker
			["Ominous Beeps"], //Io
			["Hot damn."], //Jakiro
			["How many blades am I holding up?"], //Juggernaut
			["Kundalini!"], //Keeper of the Light
			["No room to swing a cat in this crowd."], //Kunkka
			["Augh!"], //Legion Commander
			["Ah ha ha! A world out of balance!"], //Leshrac
			["Ha ha! Who's ready for a cold one?"], //Lich
			["Life, given freely?"], //Lifestealer
			["It's not the heat, it's the humiliation."], //Lina
			["When you get to hell, tell them I sent you."], //Lion
			["This burden may be more than I can bear. Heh."], //Lone Druid
			["Poor wee thing."], //Luna
			["Tasty morsel."], //Lycan
			["Was there ever any doubt?"], //Magnus
			["WITNESS MEEEE!"], //Mars
			["Whatever will I do with you?"], //Medusa
			["I guess size ain't everything, eh? Eh!? Ha ha ha aww it is."], //Meepo
			["Mee-ow!"], //Mirana
			["Hey, you're almost as good as me."], //Monkey King
			["H Two Owned."], //Morphling
			["Wave goodbye!"], //Naga Siren
			["Ah, the sun in my leaves."], //Nature's Prophet
			["Oh, this is sick!"], //Necrophos
			["Nighty night."], //Night Stalker
			["You almost had it."], //Nyx Assassin
			["Oh, skillshot! Not luck at all."], //Ogre Magi
			["Judgment comes!"], //Omniknight
			["I admit this comes as a huge surprise."], //Oracle
			["I could hear your caterwauling from clear out on the rim."], //Outworld Devourer
			["You broke my fall perfectly!"], //Pangolier
			["Something in your eye?"], //Phantom Assassin
			["From one: an army."], //Phantom Lancer
			["Battle Squawk"], //Phoenix
			["I find myself strangely drawn to this odd configuration of activity."], //Puck
			["Oh, kidneys. Kidneys is nice."], //Pudge
			["Oh don't take it personally."], //Pugna
			["I'm sorry, did you say stop?"], //Queen of Pain
			["Ah ahaha ha! You forgot to ground me!"], //Razor
			["Sneaky, aren't I?"], //Riki
			["Yoink!"], //Rubick
			["Sand and deliver!"], //Sand King
			["That's it: You're out of the cult."], //Shadow Demon
			["It's true, I have the soul of a poet. I just can't remember where I put it."], //Shadow Fiend
			["Beat you like a drum!"], //Shadow Shaman
			["What is that horrible noise?"], //Silencer
			["Hayah!"], //Skywrath Mage
			["Schooled you good."], //Slardar
			["Here, fishy-fishy."], //Slark
			["Yee haw! Job's done before ya know it!"], //Snapfire
			["He shoots, he scores!"], //Sniper
			["What strange properties this world has."], //Spectre
			["And there I go. Psyche!"], //Spirit Breaker
			["Ooh, who's that handsome devil?"], //Storm Spirit
			["I'm going to count to one. One."], //Sven
			["Bomb has been planted."], //Techies
			["The only mystery is how you lasted so long."], //Templar Assassin
			["Stop hitting yourself, stop hitting your... stop hitting yourself."], //Terrorblade
			["Ha ha ha! Women and children and Kunkka first."], //Tidehunter
			["De-li-cious."], //Timbersaw
			["Consider my curiosity, piqued!"], //Tinker
			["I peaked!"], //Tiny
			["A tree killed you. A tree!"], //Treant Protector
			["Oh, come on!"], //Troll Warlord
			["Ta-da!"], //Tusk
			["What's the matter? Ha ha ha ha ha!"], //Underlord
			["You must be this tall to die."], //Undying
			["For the cubs!"], //Ursa
			["Revenge is a dish best served NOW."], //Vengeful Spirit
			["I'm a perfect 10... on the pain scale."], //Venomancer
			["Blewhehowowoe!"], //Viper
			["In an eternity of watching, I have seen none like it."], //Visage
			["I must admit to enjoying that."], //Void Spirit
			["Have you ever seen this many demons?"], //Warlock
			["Shuttle and loom, I weave your doom."], //Weaver
			["Buh-bye!"], //Windranger
			["Wyvern? Why not."], //Winter Wyvern
			["Abutalabashuneba."], //Witch Doctor
			["GUYS? GUYS?!"], //Wraith King
			["God's gift to the world: Me."] //Zeus
			];
			
var otherNames = [
			["UNDEFINED"],
			["sadness", "sadeness", "iadmit", "iadmitnothingbutmysadness"],
			["bock", "bockbockbock"],
			["waow", "wow"],
			["gg", "Это ГГ"],
			["nextlevel", "next", "nextlevelplay", "thenextlevelplay"],
			["lakad", "lakadmatatag", "normalin", "normalinnormalin"],
			["woo", "comingthrough"],
			["holymoly", "holy"],
			["questionable"]
			];
			
var otherQuotes = [
			["UNDEFINED"], //UNDEFINED
			["I admit nothing but my sadness that you\'re gone."], //Sadness
			["BOCK BOCK BOCK! That is what you sound like!"], //BOCK BOCK BOCK
			["Waow!"], //Waow
			["Это ГГ"], //GG
			["The next level play!"], //Next Level
			["Lakad Matataaag! Normalin, Normalin."], //Lakad Matatag
			["Coming through with the wooooo"], //Coming Through
			["Holy Moly!"], //Holy Moly
			["I... uh... That was questionable at the... at the best."] //Questionable
			];
			
        var table = document.createElement('table'),
            thead = document.createElement('thead'),
            tbody = document.createElement('tbody'),
            th,
            tr,
            td;
            th = document.createElement('th'),          
            th.innerHTML="Hero Names";
			table.setAttribute("id", "myTable");
            table.appendChild(th);
            th = document.createElement('th'); 
            th.innerHTML= "Quotes"
            table.appendChild(th);
            table.appendChild(thead);            
            table.appendChild(tbody);
			
			
			document.body.appendChild(table);
			for(var i=1;i<otherNames.length;i++){
            tr = document.createElement('tr'),
            //for otherNames
            td= document.createElement('td');
            td.innerHTML=otherNames[i];
			td.setAttribute("rowspan", "1");
            tr.appendChild(td);

            //for otherQuotes
            td = document.createElement('td');
            td.innerHTML='<span id="speaker"><audio id="' + otherNames[i][0] + '_default" preload="none"><source src="./assets/audio/other/' + otherNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + otherNames[i][0] + '_default.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="default">' + otherQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			}
            
            document.body.appendChild(table);
			for(var i=1;i<heroNames.length;i++){
            tr = document.createElement('tr'),
            //for heroNames
            td= document.createElement('td');
            td.innerHTML=heroNames[i];
			td.setAttribute("rowspan", "6");
            tr.appendChild(td);

            //for masterQuotes
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Master" src="./assets/images/hero_badges/master.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_master" preload="none"><source src="./assets/audio/master/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_master.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="master">' + masterQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			
			//grandmasterQuotes
			tr = document.createElement('tr'),
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Grandmaster"  src="./assets/images/hero_badges/grandmaster.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_grandmaster" preload="none"><source src="./assets/audio/grandmaster/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_grandmaster.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="grandmaster">' + grandmasterQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			
			//platinumQuotes
			tr = document.createElement('tr'),
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Platinum" src="./assets/images/hero_badges/platinum.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_platinum" preload="none"><source src="./assets/audio/platinum/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_platinum.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="platinum">' + platinumQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			
			//goldQuotes
			tr = document.createElement('tr'),
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Gold"  src="./assets/images/hero_badges/gold.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_gold" preload="none"><source src="./assets/audio/gold/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_gold.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="gold">' + goldQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			
			//silverQuotes
			tr = document.createElement('tr'),
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Silver" src="./assets/images/hero_badges/silver.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_silver" preload="none"><source src="./assets/audio/silver/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_silver.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="silver">' + silverQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
			
			//bronzeQuotes
			tr = document.createElement('tr'),
            td = document.createElement('td');
            td.innerHTML='<span id="dotaplus"><img id ="tier" title="Bronze" src="./assets/images/hero_badges/bronze.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_bronze" preload="none"><source src="./assets/audio/bronze/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_bronze.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="bronze">' + bronzeQuotes[i]; + '</span>';
            tr.appendChild(td);
            tbody.appendChild(tr);
         }

			/*function myFunction(userInput) {			
				var tier;
				
				if (userInput.search(/\bplatinum\b|\bplat\b|0/g) != -1)
				{
					tier = "platinum";
				}
				else if (userInput.search(/\bgold\b|1/g) != -1)
				{
					tier = "gold";
				}
				else if (userInput.search(/\bsilver\b|\bsliver\b|2/g) != -1)
				{
					tier = "silver";
				}
				else if (userInput.search(/\bbronze\b|3/g) != -1)
				{
					tier = "bronze";
				}
				else if (userInput.search(/\bgrandmaster\b|\bgm\b|4/g) != -1)
				{
					tier = "grandmaster";
				}
				else
				{
					tier = "master";
				}
				//console.log("Line tier = " + tier);
				
				var cleanHero = userInput.replace(/\bmaster\b|\bimmortal\b|\bplatinum\b|\bplat\b|0|\bgold\b|1|\bsilver\b|\bsliver\b|2|\bbronze\b|3|\bgrandmaster\b|\bgm\b|4|\btier\b| /g, "");
				//console.log("Cleaned hero = " + cleanHero);
				
				var rowNumber = heroNames.findIndex(x=>x.includes(cleanHero));
				//console.log("True hero = " + heroNames[rowNumber][0]);
				
				document.getElementById("name").style.color = hexColor;	
				
				if (tier == "master")
				{
					document.getElementById("message").innerHTML = masterQuotes[rowNumber]
				}
				if (tier == "platinum")
				{
					document.getElementById("message").innerHTML = platinumQuotes[rowNumber]
				}
				if (tier == "gold")
				{
					document.getElementById("message").innerHTML = goldQuotes[rowNumber]
				}
				if (tier == "silver")
				{
					document.getElementById("message").innerHTML = silverQuotes[rowNumber]
				}
				if (tier == "bronze")
				{
					document.getElementById("message").innerHTML = bronzeQuotes[rowNumber]
				}
				if (tier == "grandmaster")
				{
					document.getElementById("message").innerHTML = grandmasterQuotes[rowNumber]
				}
				
				if (rowNumber != -1)
				{
					document.getElementById("message").className = tier
					document.getElementById("tier").src = "file://D:/Stream/Images/channelpoints/hero_badges/" + tier + ".png"
					document.getElementById("portraitimage").src = "file://C:/Users/Neal Khandheria/Documents/GitHub/tsunami643.github.io/assets/media/heroes/large/" + heroNames[rowNumber][0] + ".jpg"
					document.getElementById("voiceline").src = "file://D:/Stream/Audio/heroQuotes/" + tier + "/" + heroNames[rowNumber][0] + ".mp3"
					//document.getElementById("message").innerHTML = heroQuotes[rowNumber]
				}
				else{
					document.getElementById("portraitimage").src = "file://C:/Users/Neal Khandheria/Documents/GitHub/tsunami643.github.io/assets/media/heroes/large/" + heroNames[0][0] + ".jpg"
					document.getElementById("voiceline").src = "file://D:/Stream/Audio/heroQuotes/" + tier + "/" + heroNames[0][0] + ".mp3"
					document.getElementById("message").className = "default"
					document.getElementById("message").innerHTML = masterQuotes[0]
				}
			}*/