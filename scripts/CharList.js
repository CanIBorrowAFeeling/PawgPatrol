const characterStats = [
    {
		type: "PC",
        name: "Aug Gushgabagoc Shelahk",
		firstName: "Aug",
        race: "Half-Orc",
        Class: "Barbarian",
        subclass: "Fighter",
        level: 13,
        levelmain: 10,
        levelsub: 3,
		currentHP: 158,
		maxHP: 158,
        AC: 20,
        STR: 29,
        DEX: 15,
        CON: 20,
        INT: 8,
        WIS: 9,
        CHR: 12,
        walkSpeed: 40,
		status: "",
		alignment: 'good',
		image: 'pic-Aug.png'
    },

    {
	type: "PC",
	name: "Martha-Charlyne",
	firstName: "MC",
    race: "Gnome",
    Class: "Cleric",
    subclass: "Warlock",
    level: 13,
    levelmain: 11,
    levelsub: 2,
	currentHP: 107,
	maxHP: 107,
    AC: 19,
    STR: 14,
    DEX: 11,
    CON: 17,
    INT: 12,
    WIS: 18,
    CHR: 13,
    walkSpeed: 30,
	status: "",
	alignment: 'good',
	image: 'pic-MC.png'
    },

    {
	type: "PC",
	name: "Galileo Figarro",
	firstName: "Gally",
    race: "Dark Elf",
    race2: "Drow",
    Class: "Bard",
    subclass: "Rogue",
    level: 13,
    levelmain: 5,
    levelsub: 8,
	currentHP: 80,
	maxHP: 80,
    AC: 16,
    STR: 10,
    DEX: 14,
    CON: 14,
    INT: 13,
    WIS: 12,
    CHR: 16,
    walkSpeed: 30,
	status: "",
	alignment: 'good',
	},

    {
	type: "PC",
    name: "Uro-Zire Lal'Axle-Stelaltulath",
	firstName: "Uro",
    race: "Dragonborn",
    race2: null,
    Class: "Rogue",
    subclass: null,
    level: 11,
    levelmain: 11,
    levelsub: null,
	currentHP: 85,
	maxHP: 85,
    AC: 17,
    STR: 16,
    DEX: 20,
    CON: 16,
    INT: 12,
    WIS: 12,
    CHR: 11,
    walkSpeed: 30,
	status: "",
	alignment: 'good',
	image: 'pic-Uro.jpg'
},

    {
	type: "PC",
	name: "Aurora",
	firstName: "Aurora",
    race: "",
    race2: "",
    Class: "Wizard",
    subclass: "",
    level: 13,
    levelmain: 13,
    levelsub: 0,
	currentHP: "",
	maxHP: "",
    AC: 17,
    STR: 10,
    DEX: 14,
    CON: 14,
    INT: 13,
    WIS: 12,
    CHR: 16,
    walkSpeed: 30,
	status: "",
	alignment: 'good',
    image: 'pic-Chris.jpg'
	},

{
	type: "PC",
    name: "Tashlyn Yafeera",
	firstName: "Tashlyn",
    race: "Human",
    race2: null,
    Class: "Fighter",
    subclass: null,
    level: 11,
    levelmain: 11,
    levelsub: null,
	currentHP: 149,
	maxHP: 149,
    AC: 18,
    STR: 18,
    DEX: 15,
    CON: 14,
    INT: 10,
    WIS: 14,
    CHR: 12,
    walkSpeed: 30,
	status: "",
	alignment: 'good',
	image: 'pic-Tashlyn.png'
	},

{
	type: "NPC",
	name: "Champion",
	firstName: "Champion",
	level: 10,
	currentHP: 180,
	maxHP: 180,
	AC: 17,
	status: "",
	alignment: 'evil',
	image: 'pic-Champion.jpg',
	},

]

const monster_json = [{"firstName": "Aarakocra", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "12", "HP": "13", "Speeds": "20, 50 fly", "STR": "10", "DEX": "14", "CON": "10", "INT": "11", "WIS": "12", "CHA": "11", "Sav. Throws": "None", "Skills": "Perception", "WRI": "None", "Senses": "Normal", "Languages": "Auran", "CR": "0.25", "image": "pic-aarakocra.jpg", "status": ""}, {"firstName": "Banshee", "Size": "Large", "race": "Monstrosity", "alignment": "evil", "AC": "15", "HP": "84", "Speeds": "30", "STR": "20", "DEX": "12", "CON": "20", "INT": "11", "WIS": "14", "CHA": "8", "Sav. Throws": "None", "Skills": "Athletics, Stealth", "WRI": "Charmedimmu, frightenedimmu, poisonedimmu", "Senses": "Darkvision 120", "Languages": "Common, Any", "CR": "5.00", "image": "pic-banshee.jpg", "status": ""}, {"firstName": "Basilisk", "Size": "Medium", "race": "Monstrosity", "alignment": "evil", "AC": "15", "HP": "52", "Speeds": "30", "STR": "16", "DEX": "8", "CON": "15", "INT": "2", "WIS": "8", "CHA": "7", "Sav. Throws": "STR, CON, WIS, CHA", "Skills": "Deception, Insight, Perception", "WRI": "Coldres, nonmagicalres, nonsilvered immu, fireimmu, poisonimmu, poisonedimmu", "Senses": "Darkvision 120", "Languages": "Infernal, telepathy 120", "CR": "3.00", "image": "pic-basilisk.jpg", "status": ""}, {"firstName": "Beholder", "Size": "Large", "race": "Aberration", "alignment": "evil", "AC": "18", "HP": "180", "Speeds": "30", "STR": "10", "DEX": "14", "CON": "18", "INT": "17", "WIS": "15", "CHA": "17", "Sav. Throws": "STR, CON, WIS", "Skills": "None", "WRI": "Coldres, nonmagicalres, nonsilveredimmu, fireimmu, poisonimmu, poisonedimmu", "Senses": "Darkvision 120", "Languages": "Infernal, telepathy 120", "CR": "13.00", "image": "pic-beholder.jpg", "status": ""}, {"firstName": "Bugbear", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "16", "HP": "27", "Speeds": "30", "STR": "15", "DEX": "14", "CON": "13", "INT": "8", "WIS": "11", "CHA": "9", "Sav. Throws": "None", "Skills": "Stealth, Survival", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Goblin", "CR": "1.00", "image": "pic-bugbear.jpeg", "status": ""}, {"firstName": "Bugbear Chief", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "17", "HP": "65", "Speeds": "30", "STR": "17", "DEX": "14", "CON": "14", "INT": "11", "WIS": "12", "CHA": "11", "Sav. Throws": "None", "Skills": "Intimidation, Stealth, Survival", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Goblin", "CR": "3.00", "image": "pic-bugbear.jpeg", "status": ""}, {"firstName": "Chimera", "Size": "Large", "race": "Monstrosity", "alignment": "evil", "AC": "14", "HP": "114", "Speeds": "30, fly 60", "STR": "19", "DEX": "11", "CON": "19", "INT": "3", "WIS": "14", "CHA": "10", "Sav. Throws": "None", "Skills": "Perception", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Draconic", "CR": "6.00", "image": "", "status": ""}, {"firstName": "Deathlock", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "12", "HP": "36", "Speeds": "30", "STR": "11", "DEX": "15", "CON": "10", "INT": "14", "WIS": "12", "CHA": "16", "Sav. Throws": "INT, CHA", "Skills": "Arcana, History", "WRI": "Necroticres, nonmagicalres, nonsilveredres, poisonimmu, exhaustionimmu, poisonedimmu", "Senses": "Darkvision 60", "Languages": "Any", "CR": "4.00", "image": "", "status": ""}, {"firstName": "Devourer", "Size": "Large", "race": "Fiend", "alignment": "evil", "AC": "16", "HP": "178", "Speeds": "30", "STR": "20", "DEX": "12", "CON": "20", "INT": "13", "WIS": "10", "CHA": "16", "Sav. Throws": "None", "Skills": "None", "WRI": "Coldres, fireres, lightningres, poisonimmu, poisonedimmu", "Senses": "Darkvision 120", "Languages": "Abyssal, telepathy 120", "CR": "13.00", "image": "", "status": ""}, {"firstName": "Doppelganger", "Size": "Medium", "race": "Monstrosity", "alignment": "evil", "AC": "14", "HP": "52", "Speeds": "30", "STR": "11", "DEX": "18", "CON": "14", "INT": "11", "WIS": "12", "CHA": "14", "Sav. Throws": "None", "Skills": "Deception, Insight", "WRI": "Charmedimmu", "Senses": "Darkvision 60", "Languages": "Common", "CR": "3.00", "image": "", "status": ""}, {"firstName": "Dracolich", "Size": "", "race": "", "alignment": "evil", "AC": "", "HP": "", "Speeds": "", "STR": "", "DEX": "", "CON": "", "INT": "", "WIS": "", "CHA": "", "Sav. Throws": "", "Skills": "", "WRI": "", "Senses": "", "Languages": "", "CR": "", "image": "", "status": ""}, {"firstName": "Duergar", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "16", "HP": "26", "Speeds": "25", "STR": "14", "DEX": "11", "CON": "14", "INT": "11", "WIS": "10", "CHA": "9", "Sav. Throws": "None", "Skills": "None", "WRI": "Poisonres", "Senses": "Darkvision 120", "Languages": "Dwarvish, Undercommon", "CR": "1.00", "image": "", "status": ""}, {"firstName": "Goblin", "Size": "small", "race": "Humanoid", "alignment": "evil", "AC": "15", "HP": "7", "Speeds": "30", "STR": "8", "DEX": "14", "CON": "10", "INT": "10", "WIS": "8", "CHA": "8", "Sav. Throws": "None", "Skills": "Stealth", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Goblin", "CR": "0.25", "image": "", "status": ""}, {"firstName": "Gorgon", "Size": "Large", "race": "Construct", "alignment": "evil", "AC": "19", "HP": "114", "Speeds": "40", "STR": "20", "DEX": "11", "CON": "18", "INT": "2", "WIS": "12", "CHA": "7", "Sav. Throws": "None", "Skills": "Perception", "WRI": "Petrifiedimmu", "Senses": "Darkvision 60", "Languages": "None", "CR": "5.00", "image": "", "status": ""}, {"firstName": "Harpy", "Size": "Medium", "race": "Monstrosity", "alignment": "evil", "AC": "11", "HP": "38", "Speeds": "20, fly 40", "STR": "12", "DEX": "13", "CON": "12", "INT": "7", "WIS": "10", "CHA": "13", "Sav. Throws": "None", "Skills": "None", "WRI": "None", "Senses": "Normal", "Languages": "Common", "CR": "1.00", "image": "", "status": ""}, {"firstName": "Hell Hound", "Size": "Medium", "race": "Fiend", "alignment": "evil", "AC": "15", "HP": "45", "Speeds": "50", "STR": "17", "DEX": "12", "CON": "14", "INT": "6", "WIS": "13", "CHA": "6", "Sav. Throws": "None", "Skills": "Perception", "WRI": "Fireimmu", "Senses": "Darkvision 60", "Languages": "Infernal", "CR": "3.00", "image": "", "status": ""}, {"firstName": "Hippogriff", "Size": "Large", "race": "Monstrosity", "alignment": "evil", "AC": "11", "HP": "19", "Speeds": "40, fly 60", "STR": "17", "DEX": "13", "CON": "13", "INT": "2", "WIS": "12", "CHA": "8", "Sav. Throws": "None", "Skills": "Perception", "WRI": "None", "Senses": "Normal", "Languages": "None", "CR": "1.00", "image": "", "status": ""}, {"firstName": "Hobgoblin", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "18", "HP": "11", "Speeds": "30", "STR": "13", "DEX": "12", "CON": "12", "INT": "10", "WIS": "10", "CHA": "9", "Sav. Throws": "None", "Skills": "None", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Goblin", "CR": "0.50", "image": "", "status": ""}, {"firstName": "Lich", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "17", "HP": "135", "Speeds": "30", "STR": "11", "DEX": "16", "CON": "16", "INT": "20", "WIS": "14", "CHA": "16", "Sav. Throws": "CON, INT, WIS", "Skills": "Arcana, History, Insight, Perception", "WRI": "Coldres, lightningres, necroticres, poisonimmu, nonmagicalimmu, charmedimmu, exhaustionimmu, frightenedimmu, paralyzedimmu, poisonedimmu", "Senses": "Truesight 120", "Languages": "Common, Any", "CR": "21.00", "image": "", "status": ""}, {"firstName": "Mind Flayer", "Size": "Medium", "race": "Aberration", "alignment": "evil", "AC": "15", "HP": "71", "Speeds": "30", "STR": "11", "DEX": "12", "CON": "12", "INT": "19", "WIS": "17", "CHA": "17", "Sav. Throws": "INT, WIS, CHA", "Skills": "Arcana, Deception, Insight, Perception, Persuasion, Stealth", "WRI": "None", "Senses": "Darkvision 120,", "Languages": "Deep Speech, Undercommon, telepathy 120", "CR": "7.00", "image": "pic-mindflayer.jpg", "status": ""}, {"firstName": "Ogre", "Size": "Large", "race": "Giant", "alignment": "evil", "AC": "11", "HP": "59", "Speeds": "40", "STR": "19", "DEX": "8", "CON": "16", "INT": "5", "WIS": "7", "CHA": "7", "Sav. Throws": "None", "Skills": "None", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Giant", "CR": "2.00", "image": "", "status": ""}, {"firstName": "Orc", "Size": "Medium", "race": "Humanoid", "alignment": "evil", "AC": "13", "HP": "15", "Speeds": "30", "STR": "16", "DEX": "12", "CON": "16", "INT": "7", "WIS": "11", "CHA": "10", "Sav. Throws": "None", "Skills": "Intimidation", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Common, Orc", "CR": "0.50", "image": "", "status": ""}, {"firstName": "Rakshasa", "Size": "Medium", "race": "Fiend", "alignment": "evil", "AC": "16", "HP": "110", "Speeds": "40", "STR": "14", "DEX": "17", "CON": "18", "INT": "13", "WIS": "16", "CHA": "20", "Sav. Throws": "None", "Skills": "Deception, Insight", "WRI": "Magicalpiercingweak, nonmagicalres", "Senses": "Darkvision 60", "Languages": "Common, Infernal", "CR": "13.00", "image": "", "status": ""}, {"firstName": "Roc", "Size": "Gargantuan", "race": "Monstrosity", "alignment": "evil", "AC": "15", "HP": "248", "Speeds": "20, fly 120", "STR": "28", "DEX": "10", "CON": "20", "INT": "3", "WIS": "10", "CHA": "9", "Sav. Throws": "DEX, CON, WIS, CHA", "Skills": "Perception", "WRI": "None", "Senses": "Normal", "Languages": "None", "CR": "11.00", "image": "", "status": ""}, {"firstName": "Roper", "Size": "Large", "race": "Monstrosity", "alignment": "evil", "AC": "20", "HP": "93", "Speeds": "10, climb 10", "STR": "18", "DEX": "8", "CON": "17", "INT": "7", "WIS": "16", "CHA": "6", "Sav. Throws": "None", "Skills": "Perception, Stealth", "WRI": "None", "Senses": "Darkvision 60", "Languages": "None", "CR": "5.00", "image": "", "status": ""}, {"firstName": "Satyr", "Size": "Medium", "race": "Fey", "alignment": "evil", "AC": "14", "HP": "31", "Speeds": "40", "STR": "12", "DEX": "16", "CON": "11", "INT": "12", "WIS": "10", "CHA": "14", "Sav. Throws": "None", "Skills": "Perception, Performance, Stealth", "WRI": "None", "Senses": "Normal", "Languages": "Common, Elvish, Sylvan", "CR": "0.50", "image": "", "status": ""}, {"firstName": "Skeleton", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "13", "HP": "13", "Speeds": "30", "STR": "10", "DEX": "14", "CON": "15", "INT": "6", "WIS": "8", "CHA": "5", "Sav. Throws": "None", "Skills": "None", "WRI": "Bludgeoningweak, poisonimmu, exhaustionimmu, poisonedimmu", "Senses": "Darkvision 60", "Languages": "Any", "CR": "0.25", "image": "", "status": ""}, {"firstName": "Troll", "Size": "Large", "race": "Giant", "alignment": "evil", "AC": "15", "HP": "84", "Speeds": "30", "STR": "18", "DEX": "13", "CON": "20", "INT": "7", "WIS": "9", "CHA": "7", "Sav. Throws": "None", "Skills": "Perception", "WRI": "None", "Senses": "Darkvision 60", "Languages": "Giant", "CR": "5.00", "image": "", "status": ""}, {"firstName": "Vampire", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "16", "HP": "144", "Speeds": "30", "STR": "18", "DEX": "18", "CON": "18", "INT": "17", "WIS": "15", "CHA": "18", "Sav. Throws": "DEX, WIS, CHA", "Skills": "Perception, Stealth", "WRI": "Necroticres, nonmagicalres", "Senses": "Darkvision 120", "Languages": "Any", "CR": "13.00", "image": "", "status": ""}, {"firstName": "Wight", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "14", "HP": "45", "Speeds": "30", "STR": "15", "DEX": "14", "CON": "16", "INT": "10", "WIS": "13", "CHA": "15", "Sav. Throws": "None", "Skills": "Perception, Stealth", "WRI": "Necroticres, nonmagicalres, poisonimmu, exhaustionimmu, poisonedimmu", "Senses": "Darkvision 60", "Languages": "Any", "CR": "3.00", "image": "", "status": ""}, {"firstName": "Will-O'-Wisp", "Size": "Tiny", "race": "Undead", "alignment": "evil", "AC": "19", "HP": "22", "Speeds": "fly 50", "STR": "1", "DEX": "28", "CON": "10", "INT": "13", "WIS": "14", "CHA": "11", "Sav. Throws": "None", "Skills": "None", "WRI": "Lightningimmu, poisonimmu, acidres, coldres, fireres, necroticres, thunderres, nonmagicalres, exhaustionimmu, grappledimmu, paralyzedimmu, poisonedimmu, proneimmu, restrainedimmu, unconsciousimmu", "Senses": "Darkvision 120", "Languages": "Any", "CR": "2.00", "image": "", "status": ""}, {"firstName": "Wraith", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "13", "HP": "67", "Speeds": "fly 60", "STR": "6", "DEX": "16", "CON": "16", "INT": "12", "WIS": "14", "CHA": "15", "Sav. Throws": "None", "Skills": "None", "WRI": "Acidres, coldres, fireres, lightningres, thunderres, nonmagicalres, nonsilveredres, necroticimmu, poisonimmu, charmedimmu, exhaustionimmu, grappledimmu, paralyzedimmu, petrifiedimmu, poisonedimmu, proneimmu, restrainedimmu", "Senses": "Darkvision 60", "Languages": "Any", "CR": "5.00", "image": "", "status": ""}, {"firstName": "Zombie", "Size": "Medium", "race": "Undead", "alignment": "evil", "AC": "8", "HP": "22", "Speeds": "20", "STR": "13", "DEX": "6", "CON": "16", "INT": "3", "WIS": "6", "CHA": "5", "Sav. Throws": "WIS", "Skills": "None", "WRI": "Poisonimmu, poisonedimmu", "Senses": "Darkvision 60", "Languages": "Any", "CR": "0.25", "image": "", "status": ""}];
characterStats.push(...monster_json)