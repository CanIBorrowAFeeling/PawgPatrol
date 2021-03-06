class FormItem {

    constructor(id) {
        this.id = id;
        formItems.push(this);
    };

    addToPage() {

        let d = this.domElement = document.createElement('div');
        d.classList.add('add-character-box');
        d.setAttribute('id', `form-item${this.id}`);
        document.getElementById('form-container').appendChild(d);

        let firstDiv = d.appendChild(document.createElement('div'));
        firstDiv.setAttribute('class', 'first-form-div');

        let sname = firstDiv.appendChild(document.createElement('span'));
        sname.setAttribute('id', `fname${this.id}`);
        sname.setAttribute('class', 'fname');
        sname.innerHTML = "Name ";

        let snameSelect = firstDiv.appendChild(document.createElement('select'));
        snameSelect.setAttribute('id', `fname-select${this.id}`);
        snameSelect.setAttribute('class', 'fname-input');
        snameSelect.setAttribute('onchange', `selectChar(${this.id}, this.value)`);

        let snameInput = firstDiv.appendChild(document.createElement('input'));
        snameInput.setAttribute('id', `fname-input${this.id}`);
        snameInput.setAttribute('class', 'fname-input');

        let option = snameSelect.appendChild(document.createElement('option'));
        option.setAttribute('value', 'none');

        for(let i in characterStats) {
            let optionChars = snameSelect.appendChild(document.createElement('option'));
            optionChars.value = i;
            optionChars.innerHTML = characterStats[i].firstName;
        };

        firstDiv.appendChild(document.createElement('br'));

        let sHP = firstDiv.appendChild(document.createElement('span'));
        sHP.setAttribute('id', `fHP${this.id}`);
        sHP.setAttribute('class', 'fHP');
        sHP.innerHTML = "HP ";

        let sHPinput = firstDiv.appendChild(document.createElement('input'));
        sHPinput.setAttribute('id', `fHP-input${this.id}`);
        sHPinput.setAttribute('class', 'fHP-input');
        sHPinput.setAttribute('type', 'number');
        sHPinput.setAttribute('size', '4');

        let sHPslash = firstDiv.appendChild(document.createElement('span'));
        sHPslash.innerHTML = ' / ';

        let sHPmax = firstDiv.appendChild(document.createElement('input'));
        sHPmax.setAttribute('id', `fHPmax-input${this.id}`);
        sHPmax.setAttribute('class', 'fHP-input');
        sHPmax.setAttribute('type', 'number');
        sHPmax.setAttribute('size', '4');

        let sAC = firstDiv.appendChild(document.createElement('span'));
        sAC.innerHTML = ' AC ';

        let sACinput = firstDiv.appendChild(document.createElement('input'));
        sACinput.setAttribute('id', `fAC${this.id}`);
        sACinput.setAttribute('class', 'fHP-input');
        sACinput.setAttribute('type', 'number');
        sACinput.setAttribute('size', '3');

        firstDiv.appendChild(document.createElement('br'));

        let sstatus = firstDiv.appendChild(document.createElement('span'));
        sstatus.setAttribute('id', `fstatus${this.id}`);
        sstatus.setAttribute('class', 'fstatus');
        sstatus.innerHTML = 'Status ';

        let sstatusInput = firstDiv.appendChild(document.createElement('input'));
        sstatusInput.setAttribute('id', `fstatus-input${this.id}`);
        sstatusInput.setAttribute('class', 'fstatus-input');
        sstatusInput.setAttribute('type', 'text');

        let secondDiv = d.appendChild(document.createElement('div'));
        secondDiv.setAttribute('class', 'second-form-div');

        let sinit = secondDiv.appendChild(document.createElement('span'));
        sinit.setAttribute('id', `finit${this.id}`);
        sinit.setAttribute('class', 'finit');
        sinit.innerHTML = 'Initiative ';

        let sinitInput = secondDiv.appendChild(document.createElement('input'));
        sinitInput.setAttribute('id', `finit-input${this.id}`);
        sinitInput.setAttribute('class', 'finit-input');
        sinitInput.setAttribute('type', 'text');
        sinitInput.setAttribute('size', '2');

        secondDiv.appendChild(document.createElement('br'));

        let sgoodBox = secondDiv.appendChild(document.createElement('input'));
        sgoodBox.setAttribute('id', `sgood${this.id}`);
        sgoodBox.setAttribute('name', `alignment${this.id}`);
        sgoodBox.setAttribute('value', 'good');
        sgoodBox.setAttribute('type', 'radio');

        let sgoodText = secondDiv.appendChild(document.createElement('label'));
        sgoodText.setAttribute('for', `sgood${this.id}`);
        sgoodText.innerHTML = 'Good';

        secondDiv.appendChild(document.createElement('br'));

        let sevilBox = secondDiv.appendChild(document.createElement('input'));
        sevilBox.setAttribute('id', `sevil${this.id}`);
        sevilBox.setAttribute('name', `alignment${this.id}`);
        sevilBox.setAttribute('value', 'evil');
        sevilBox.setAttribute('type', 'radio');

        let sevilText = secondDiv.appendChild(document.createElement('label'));
        sevilText.setAttribute('for', `sevil${this.id}`);
        sevilText.innerHTML = 'Evil';

        let imageSpan = secondDiv.appendChild(document.createElement('span'));
        imageSpan.setAttribute('id', `image${this.id}`);
        imageSpan.setAttribute('name', '');

    };
};

class Character {

    constructor(attributes) {
        Object.assign(this, attributes);
    }

    addToPage() {
        let charDiv = this.domElement = document.createElement('div');
        charDiv.setAttribute('id', `char${this.id}`);
        charDiv.setAttribute('class', `character-box`);
        charDiv.style.order = ( (100 - this.order) * 100 ) + this.id;
        document.getElementById('char-container').appendChild(charDiv);

        if (this.alignment == 'evil') {
            charDiv.classList.add('evil-character');
        } else if (this.alignment == 'good') {
            charDiv.classList.add('good-character');
        } else {
            charDiv.classList.add('neutral-character');
        };

        if (this.isKnockedOut == true) {
            charDiv.classList.add('knockedout-character')
        }

        let pictureDiv = charDiv.appendChild(document.createElement('div'));
        pictureDiv.setAttribute('class', 'character-box-left');

        if (this.image != '') {
        let pic = pictureDiv.appendChild(document.createElement('img'));
        pic.setAttribute('id', `charPic${this.id}`);
        pic.setAttribute('class', 'character-pic')
        pic.setAttribute('height', '80');
        pic.setAttribute('src', `files/pics/${this.image}`);
        };

        let charDivRight = charDiv.appendChild(document.createElement('div'));
        charDivRight.setAttribute('class', 'character-box-right');

        let firstDiv = charDivRight.appendChild(document.createElement('div'));
        firstDiv.setAttribute('class', 'first-char-div');

        let cName = firstDiv.appendChild(document.createElement('span'));
        cName.setAttribute('class', 'attribute-label character-box-name');
        cName.innerHTML = `${this.name}`;

        let secondDiv = charDivRight.appendChild(document.createElement('div'));
        secondDiv.setAttribute('class', 'second-char-div');

        let cHP = firstDiv.appendChild(document.createElement('span'));
        cHP.setAttribute('class', 'attribute-label');
        cHP.innerHTML = "HP ";

        let cHPinput = firstDiv.appendChild(document.createElement('input'));
        cHPinput.setAttribute('id', `charHP${this.id}`);
        cHPinput.setAttribute('class','char-hp-input')
        cHPinput.setAttribute('type', 'number');
        cHPinput.setAttribute('size', '4');
        cHPinput.value = this.HP;

        let cHPslash = firstDiv.appendChild(document.createElement('span'));
        cHPslash.innerHTML = ' / ';

        let cHPmax = firstDiv.appendChild(document.createElement('span'));
        cHPmax.innerHTML = this.maxHP;

        let sAC = firstDiv.appendChild(document.createElement('span'));
        sAC.setAttribute('class', 'attribute-label');
        sAC.innerHTML = 'AC';

        let cACinput = firstDiv.appendChild(document.createElement('input'));
        cACinput.setAttribute('id', `charAC${this.id}`);
        cACinput.setAttribute('size', '2');
        if (this.alignment == 'good') {
            cACinput.value = this.AC;
        };

        let cInit = firstDiv.appendChild(document.createElement('span'));
        cInit.setAttribute('class', 'initiative-label attribute-label');
        cInit.innerHTML = 'Init'
        
        let cInitInput = firstDiv.appendChild(document.createElement('input'));
        cInitInput.setAttribute('id', `charOrder${this.id}`);
        cInitInput.setAttribute('class', 'char-init-input');
        cInitInput.setAttribute('type', 'number');
        cInitInput.setAttribute('size', '2');
        cInitInput.setAttribute('onchange', 'submitCharForm()')
        cInitInput.value = this.order;

        let cKill = firstDiv.appendChild(document.createElement('button'));
        cKill.setAttribute('class', 'smooth kill-button');
        cKill.setAttribute('onclick', `kill(${this.id})`);
        cKill.innerHTML = 'Kill';

        let cKO = firstDiv.appendChild(document.createElement('button'));
        cKO.setAttribute('class', 'smooth KO-button');
        cKO.setAttribute('onclick', `knockout(${this.id})`);
        cKO.innerHTML = 'Knock-Out';

        let cStatus = secondDiv.appendChild(document.createElement('span'));
        cStatus.setAttribute('class', 'attribute-label');
        cStatus.innerHTML = `Status `;

        let cStatusInput = secondDiv.appendChild(document.createElement('input'));
        cStatusInput.setAttribute('id', `charStatus${this.id}`);
        cStatusInput.setAttribute('type', 'text');
        cStatusInput.setAttribute('size', '10');
        cStatusInput.value = this.status;

    };

};

// Add form item to add characters tab
function createFormItems() {
    let val = document.getElementById('char-num').value;
    let current = document.querySelectorAll('div.add-character-box').length;
    let container = document.getElementById('form-container')

    if (current <= val) {
        for(let i=current; i<val; i++) {
            let l = new FormItem(i);
            l.addToPage();
        };
    } else {
        for(let i=0; i < (current - val); i++) {
            container.removeChild(container.lastChild);
            formItems.pop();
        };
    };
};

// Fill form based on dropdown selection
function selectChar(id, choice) {
    charName = document.getElementById(`fname-select${id}`).value;

    document.getElementById(`fname-input${id}`).value = characterStats[choice].firstName;


    document.getElementById(`fstatus-input${id}`).value = characterStats[choice].status;

    if (charName != 'none') {
        if (characterStats[choice].image) {
        document.getElementById(`image${id}`).setAttribute('name', `${characterStats[choice].image}`);
        };
    };

    if(characterStats[choice].alignment == 'good') {
        document.getElementById(`fHP-input${id}`).value = characterStats[choice].currentHP;
        document.getElementById(`fHPmax-input${id}`).value = characterStats[choice].maxHP;
        document.getElementById(`fAC${id}`).value = characterStats[choice].AC;
        document.getElementById(`sgood${id}`).checked = true;
    } else {
        document.getElementById(`sevil${id}`).checked = true;
    };
};

// Add characters to game board
function submitCharForm() {

    currentTurn = turn;
    // Update charList array with current attributes
    updateCharList()

    // Clean game board
    let container = document.getElementById('char-container')
    container.innerHTML = "";

    // add new characters to charList array
    for (let i = 0; i < formItems.length; i++) {
        let dom = formItems[i].domElement;
        let initiative = dom.children[1].children[`finit-input${i}`].value;
        if (isNaN(initiative) || initiative.length == 0) {
            continue;
        };
        const char = {
            'id': nextId,
            'name': dom.children[0].children[`fname-input${i}`].value,
            'HP': parseInt(dom.children[0].children[`fHP-input${i}`].value, 0),
            'maxHP': dom.children[0].children[`fHPmax-input${i}`].value,
            'AC': dom.children[0].children[`fAC${i}`].value,
            'status': dom.children[0].children[`fstatus-input${i}`].value,
            'order': parseInt(dom.children[1].children[`finit-input${i}`].value, 0),
            'alignment': 'neutral',
            'image': dom.children[1].children[`image${i}`].getAttribute('name'),
            'isKnockedOut': false,
        };

        if (dom.children[1].children[`sevil${i}`].checked) {
            char.alignment = 'evil';
        } else if (dom.children[1].children[`sgood${i}`].checked) {
            char.alignment = 'good';
        };

        charItems.push(char);
        nextId += 1;
    };
   
    // create game board
    charItems.sort(
        function (a,b) {return b.order - a.order}
        );

    for(let m in charItems) {
        newChar = new Character(charItems[m]);
        newChar.addToPage();
    };

    document.getElementById('turn-counter').innerHTML = 'Turn 1';


    if (container.hasChildNodes()) {
        container.firstElementChild.classList.add('current-char');
    }

    // cycle to current turn
    turn = 1;
    for (let i=1; i<currentTurn; i++) {
        cycle();
    };

    // Clear form
    document.getElementById('halfpage-right').style.display = 'none';
    document.getElementById('form-container').innerHTML = '';
    formItems = [];
};

function cycle() {

    let characters = document.querySelectorAll('div.character-box');
    let len = characters.length

    let last = characters[len-1].style.order;
    let temp = -1

    for(let i=0; i < len; i++) {
        temp = characters[i].style.order;
        characters[i].style.order = last;
        last = temp;
        characters[i].classList.remove('current-char')
    };

    characters[0].style.order = last;

    updateCurrentChar();

    if(turn < charItems.length) {
        turn += 1;
    } else {
        round += 1;
        turn = 1;
    };

    document.getElementById('round-counter').innerHTML = `Round ${round}`;
    document.getElementById('turn-counter').innerHTML = `Turn ${turn}`;

};

function updateCharList() {
    // There is an issue with a glitch occuring when updating order 
    charItems.forEach( function(item) {
        let x = item.id;
        let thisChar = charItems.filter(obj => {return obj.id == x});
        let divIsKnockedOut = document.getElementById(`char${x}`).classList.contains('knockedout-character');
        thisChar[0].HP = document.getElementById(`charHP${x}`).value;
        thisChar[0].AC = document.getElementById(`charAC${x}`).value;
        thisChar[0].status = document.getElementById(`charStatus${x}`).value;
        thisChar[0].order = document.getElementById(`charOrder${x}`).value;
        thisChar[0].isKnockedOut = divIsKnockedOut;
    })

};

function addCharacters() {
    
    document.getElementById('halfpage-right').style.display = '';

    updateCharList();

};

function updateCurrentChar() {
    let charactersToUpdate = document.querySelectorAll('div.character-box');
    let arrayToUpdate = Array.prototype.slice.call(charactersToUpdate, 0)
    arrayToUpdate.sort(
        function(a,b) {return a.style.order - b.style.order}
    );
    
    if (!arrayToUpdate[0].classList.contains('current-char')) {
        arrayToUpdate[0].classList.add('current-char') 
    };
};

function knockout(charID) {
    let div = document.getElementById(`char${charID}`);
    let thisChar = charItems.filter(obj => {return obj.id == charID });
    if( div.classList.contains('knockedout-character') ) {
        div.classList.remove('knockedout-character');
        thisChar[0].isKnockedOut = false;
    } else {
        div.classList.add('knockedout-character');
        thisChar[0].isKnockedOut = true;
    };
};

function kill(charID) {
    // Delete the div
    let div = document.getElementById(`char${charID}`);
    div.parentNode.removeChild(div);

    // Remove character from js array
    let x = charItems.findIndex(charItem => charItem.id == charID);
    console.log(charItems.splice(x,1));
    
    // Correct turn counter if needed
    if(turn > charItems.length) {
        turn -= 1;
    };
};

let formItems = [];
const charItems = [];
let round = 1;
let turn = 1;
let nextId = 0;