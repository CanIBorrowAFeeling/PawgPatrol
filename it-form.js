const formItems = [];

class FormItem {

    constructor(id) {
        this.id = id;
        formItems.push(this);
    };

    addToPage() {

        let d = this.domElement = document.createElement('div');
        d.classList.add('add-character-box');
        d.setAttribute('id', `form-item${this.id}`);
        document.getElementById('halfpage-right').appendChild(d);

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
        sgoodBox.setAttribute('type', 'radio');
        sgoodBox.setAttribute('id', `sgood${this.id}`);
        sgoodBox.setAttribute('name', `alignment${this.id}`);
        sgoodBox.setAttribute('value', 'good');


        let sgoodText = secondDiv.appendChild(document.createElement('label'));
        sgoodText.setAttribute('for', `sgood${this.id}`);
        sgoodText.innerHTML = 'Good';

        secondDiv.appendChild(document.createElement('br'));

        let sevilBox = secondDiv.appendChild(document.createElement('input'));
        sevilBox.setAttribute('type', 'radio');
        sevilBox.setAttribute('id', `sevil${this.id}`);
        sevilBox.setAttribute('name', `alignment${this.id}`);
        sevilBox.setAttribute('value', 'evil');


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
        let m = this.domElement = document.createElement('div');
        m.setAttribute('id', `char${this.id}`);
        m.setAttribute('class', `character-box order${this.order}`);
        m.style.order = this.order;
        document.getElementById('char-container').appendChild(m);

        if (this.alignment == 'evil') {
            m.classList.add('evil-character');
        } else if (this.alignment == 'good') {
            m.classList.add('good-character');
        } else if (this.status == 'dead') {
            m.classList.add('knocked-out neutral-char');
        } else {
            m.classList.add('neutral-character');
        };

        let pictureDiv = m.appendChild(document.createElement('div'));
        pictureDiv.setAttribute('class', 'character-box-left');

        if (this.image != '') {
        let pic = pictureDiv.appendChild(document.createElement('img'));
        pic.setAttribute('id', `charPic${this.id}`);
        pic.setAttribute('class', 'character-pic')
        pic.setAttribute('height', '100');
        pic.setAttribute('src', `files/pics/${this.image}`);
        };

        let d = m .appendChild(document.createElement('div'));
        d.setAttribute('class', 'character-box-right');

        let firstDiv = d.appendChild(document.createElement('div'));
        firstDiv.setAttribute('class', 'first-char-div');

        let sname = firstDiv.appendChild(document.createElement('span'));
        sname.setAttribute('class', 'attribute-label character-box-name');
        sname.innerHTML = `${this.name}`;

        let secondDiv = d.appendChild(document.createElement('div'));
        secondDiv.setAttribute('class', 'second-char-div');

        let sHP = secondDiv.appendChild(document.createElement('span'));
        sHP.setAttribute('class', 'attribute-label');
        sHP.innerHTML = "HP ";

        let sHPinput = secondDiv.appendChild(document.createElement('input'));
        sHPinput.setAttribute('type', 'number');
        sHPinput.setAttribute('size', '4');
        sHPinput.value = this.HP;

        let sHPslash = secondDiv.appendChild(document.createElement('span'));
        sHPslash.innerHTML = ' / ';

        let sHPmax = secondDiv.appendChild(document.createElement('span'));
        sHPmax.innerHTML = this.maxHP;

        let skill = secondDiv.appendChild(document.createElement('button'));
        skill.setAttribute('class', 'smooth kill-button');
        skill.setAttribute('onclick', `kill(${this.id})`);
        skill.innerHTML = 'Kill';

        let sko = secondDiv.appendChild(document.createElement('button'));
        sko.setAttribute('class', 'smooth KO-button');
        sko.setAttribute('onclick', `knockout(${this.id})`);
        sko.innerHTML = 'Knock-Out';

        let thirdDiv = d.appendChild(document.createElement('div'));
        thirdDiv.setAttribute('class', 'third-char-div');

        let sAC = thirdDiv.appendChild(document.createElement('span'));
        sAC.setAttribute('class', 'attribute-label');
        sAC.innerHTML = 'AC';

        let sACinput = thirdDiv.appendChild(document.createElement('input'));
        sACinput.setAttribute('size', '2');
        if (this.alignment == 'good') {
            sACinput.value = this.AC;
        };

        let sstatus = thirdDiv.appendChild(document.createElement('span'));
        sstatus.setAttribute('class', 'attribute-label');
        sstatus.innerHTML = `Status `;

        let sstatusInput = thirdDiv.appendChild(document.createElement('input'));
        sstatusInput.setAttribute('type', 'text');
        sstatusInput.setAttribute('size', '10');
        sstatusInput.value = this.status;

    };

};

function addFormItems() {
    input = document.getElementById('char-num');
    x = input.value;
    current = document.querySelectorAll('div.add-character-box').length;

    if (current <= x) {
        for(let i=current; i<x; i++) {
            let l = new FormItem(i);
            l.addToPage();
        };
        return 0;
    }
    removeChild();
    
    function removeChild() {
        container = document.getElementById('halfpage-right');
        for (let i = 0; i < (current - x); i++) {
            container.removeChild(container.lastChild);
            formItems.pop();
        };
        return 1;
    };
};

function selectChar(id, choice) {
    charName = document.getElementById(`fname-select${id}`).value;

    document.getElementById(`fname-input${id}`).value = characterStats[choice].firstName;
    document.getElementById(`fHP-input${id}`).value = characterStats[choice].currentHP;
    document.getElementById(`fHPmax-input${id}`).value = characterStats[choice].maxHP;
    document.getElementById(`fAC${id}`).value = characterStats[choice].AC;
    document.getElementById(`fstatus-input${id}`).value = characterStats[choice].status;

    if (charName != 'none') {
        if (characterStats[choice].image) {
        document.getElementById(`image${id}`).setAttribute('name', `${characterStats[choice].image}`);
        };
    };

    thisCharAlign = characterStats[choice].alignment

    if(thisCharAlign == 'good') {
        document.getElementById(`sgood${id}`).checked = true;
    } 

    if(thisCharAlign == 'evil') {
        document.getElementById(`sevil${id}`).checked = true;
    };
};

// Create game

let charItems = [];
let round = 1;
let turn = 1;

function playGame() {

    document.getElementById('halfpage-right').style.display = 'none';

    currentTurn = turn;

    for (n = charItems.length; n < formItems.length; n++) {
        createCharFromForm(n);
        newChar = new Character(charItems[n])
        newChar.addToPage();
    }

    charItems.sort(
        function (a,b) {return b.order - a.order}
        );

    document.getElementById('turn-counter').innerHTML = 'Turn 1';

    turn = 1;
    
    for (let i=1; i<currentTurn; i++) {
        cycle();
    };

    highlightCurrentChar()

    function createCharFromForm(i) {
        
        dom = formItems[i].domElement;
        const char = {
            'id': parseInt(formItems[i].id, 0),
            'name': dom.children[0].children[`fname-input${i}`].value,
            'HP': parseInt(dom.children[0].children[`fHP-input${i}`].value, 0),
            'maxHP': dom.children[0].children[`fHPmax-input${i}`].value,
            'AC': dom.children[0].children[`fAC${i}`].value,
            'status': dom.children[0].children[`fstatus-input${i}`].value,
            'order': parseInt(dom.children[1].children[`finit-input${i}`].value, 0),
            'alignment': 'neutral',
            'image': dom.children[1].children[`image${i}`].getAttribute('name'),
            };

            if (dom.children[1].children[`sevil${i}`].checked) {
                char.alignment = 'evil';
            };
            
            if (dom.children[1].children[`sgood${i}`].checked) {
                char.alignment = 'good';
            };

            charItems.push(char);
        };
    };

function cycle() {

    let characters = document.querySelectorAll('div.character-box');
    first = characters[0].style.order;

    for(let i=1; i<characters.length; i++) {
        let temp = characters[i].style.order;
        characters[i].style.order = first;
        first = temp;
    };

    characters[0].style.order = first;

    highlightCurrentChar()

    if(turn < charItems.length) {
        turn += 1;
    } else {
        round += 1;
        turn = 1;
    };

    document.getElementById('round-counter').innerHTML = `Round ${round}`;
    document.getElementById('turn-counter').innerHTML = `Turn ${turn}`;

};

function highlightCurrentChar() {
    let highestOrder = 0;
    let highestID = 0;

    function evaluateOrder(charOrder, i) {
        if (charOrder > highestOrder) {
            highestOrder = charOrder;
            highestID = i;
        }
    }
    
    for (let i = 0; i < charItems.length; i++) {
        let thisChar = document.getElementById(`char${i}`)
        let charOrder = thisChar.style.order;
        thisChar.classList.remove('current-char')

        evaluateOrder(charOrder, i);
    }
    
    let currentCharDom = document.getElementById(`char${highestID}`)
    if(!currentCharDom.classList.contains('current-char')) {
        currentCharDom.classList.add('current-char');
    }
}

function addCharacters() {
        document.getElementById('halfpage-right').style.display = '';
};

function knockout(charID) {
    let div = document.getElementById(`char${charID}`);
    if( div.classList.contains('knockedout-character') ) {
        div.classList.remove('knockedout-character')
    } else {
        div.classList.add('knockedout-character');
    };
};

function kill(charID) {
    // Delete the div
    let div = document.getElementById(`char${charID}`);
    div.parentNode.removeChild(div);

    // Remove character from js array
    let x = charItems.findIndex(charItem => charItem.id == charID);
    charItems.pop(x);
    
    // Correct turn counter if needed
    if(turn > charItems.length) {
        turn -= 1;
    };
};
