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
		charStatus: "Raged",
		alignment: 'good',
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
		charStatus: "",
		alignment: 'good',
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
	charStatus: "",
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
	charStatus: "",
	alignment: 'good',
	},

{
	type: "NPC",
	name: "Champion",
	firstName: "Champion",
	level: 10,
	currentHP: 180,
	maxHP: 180,
	AC: 17,
	charStatus: "",
	alignment: 'bad'
	}]

/*
let charNames = [""]

for (i=0; i<characterStats.length; i++) {
	charNames.push(characterStats[i].name)
}
console.log(charNames)

window.onload = function() {
	for (n = 0; n < 10; n++) {
		let divId = "div" + n
		let selectId = "se" + n
		let main = document.getElementById("charFormDiv")
		let d = main.appendChild(document.createElement("div"))
		d.setAttribute("id", divId)
		d.setAttribute("class", "dropdown")
		let s = d.appendChild(document.createElement("select"))
		s.setAttribute("id", selectId)

		for (i=0; i<charNames.length; i++) {
			let idtag = selectId + "op" + i
			let o = s.appendChild(document.createElement("option"))
			o.setAttribute("id", idtag)
			o.innerHTML = charNames[i]

		}
	}
} //onload end*/