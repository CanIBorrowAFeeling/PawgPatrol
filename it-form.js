const formItems = []

class FormItem {

    constructor(id) {
        this.id = id
        formItems.push(this)
    }

    addToPage() {

        let d = this.domElement = document.createElement('div')
        d.classList.add('add-character-box')
        d.setAttribute('id', `form-item${this.id}`)
        document.getElementById('halfpage-left').appendChild(d)

        let firstDiv = d.appendChild(document.createElement('div'))
        firstDiv.setAttribute('class', 'first-form-div')

        let sname = firstDiv.appendChild(document.createElement('span'))
        sname.setAttribute('id', `fname${this.id}`)
        sname.setAttribute('class', 'fname')
        sname.innerHTML = "Name "

        let snameSelect = firstDiv.appendChild(document.createElement('select'))
        snameSelect.setAttribute('id', `fname-select${this.id}`)
        snameSelect.setAttribute('class', 'fname-input')
        snameSelect.setAttribute('onchange', `selectChar(${this.id}, this.value)`)

        let snameInput = firstDiv.appendChild(document.createElement('input'))
        snameInput.setAttribute('id', `fname-input${this.id}`)

        let option = snameSelect.appendChild(document.createElement('option'))
        option.setAttribute('value', 'none')

        for(let i in characterStats) {
            let optionChars = snameSelect.appendChild(document.createElement('option'))
            optionChars.value = i
            optionChars.innerHTML = characterStats[i].firstName
        }

        firstDiv.appendChild(document.createElement('br'))

        let sHP = firstDiv.appendChild(document.createElement('span'))
        sHP.setAttribute('id', `fHP${this.id}`)
        sHP.setAttribute('class', 'fHP')
        sHP.innerHTML = "HP "

        let sHPinput = firstDiv.appendChild(document.createElement('input'))
        sHPinput.setAttribute('id', `fHP-input${this.id}`)
        sHPinput.setAttribute('class', 'fHP-input')
        sHPinput.setAttribute('type', 'number')
        sHPinput.setAttribute('size', '4')

        let sHPslash = firstDiv.appendChild(document.createElement('span'))
        sHPslash.innerHTML = ' / '

        let sHPmax = firstDiv.appendChild(document.createElement('input'))
        sHPmax.setAttribute('id', `fHPmax-input${this.id}`)
        sHPmax.setAttribute('class', 'fHPmax-input')
        sHPmax.setAttribute('type', 'number')
        sHPmax.setAttribute('size', '4')

        let sAC = firstDiv.appendChild(document.createElement('span'))
        sAC.innerHTML = ' AC '

        let sACinput = firstDiv.appendChild(document.createElement('input'))
        sACinput.setAttribute('id', `fAC${this.id}`)
        sACinput.setAttribute('type', 'number')
        sACinput.setAttribute('size', '3')

        firstDiv.appendChild(document.createElement('br'))

        let sstatus = firstDiv.appendChild(document.createElement('span'))
        sstatus.setAttribute('id', `fstatus${this.id}`)
        sstatus.setAttribute('class', 'fstatus')
        sstatus.innerHTML = 'Status '

        let sstatusInput = firstDiv.appendChild(document.createElement('input'))
        sstatusInput.setAttribute('id', `fstatus-input${this.id}`)
        sstatusInput.setAttribute('class', 'fstatus-input')
        sstatusInput.setAttribute('type', 'text')

        let secondDiv = d.appendChild(document.createElement('div'))
        secondDiv.setAttribute('class', 'second-form-div')

        let sinit = secondDiv.appendChild(document.createElement('span'))
        sinit.setAttribute('id', `finit${this.id}`)
        sinit.setAttribute('class', 'finit')
        sinit.innerHTML = 'Initiative '

        let sinitInput = secondDiv.appendChild(document.createElement('input'))
        sinitInput.setAttribute('id', `finit-input${this.id}`)
        sinitInput.setAttribute('class', 'finit-input')
        sinitInput.setAttribute('type', 'text')
        sinitInput.setAttribute('size', '2')

        secondDiv.appendChild(document.createElement('br'))

        let sgoodBox = secondDiv.appendChild(document.createElement('input'))
        sgoodBox.setAttribute('id', `sgood${this.id}`)
        sgoodBox.setAttribute('name', `goodbad${this.id}`)
        sgoodBox.setAttribute('value', 'good')
        sgoodBox.setAttribute('type', 'radio')

        let sgoodText = secondDiv.appendChild(document.createElement('label'))
        sgoodText.setAttribute('for', `sgood${this.id}`)
        sgoodText.innerHTML = 'Good'

        secondDiv.appendChild(document.createElement('br'))

        let sbadBox = secondDiv.appendChild(document.createElement('input'))
        sbadBox.setAttribute('id', `sbad${this.id}`)
        sbadBox.setAttribute('name', `goodbad${this.id}`)
        sbadBox.setAttribute('value', 'bad')
        sbadBox.setAttribute('type', 'radio')

        let sbadText = secondDiv.appendChild(document.createElement('label'))
        sbadText.setAttribute('for', `sbad${this.id}`)
        sbadText.innerHTML = 'Bad'

    }
}

class Character {

    constructor(attributes) {
        Object.assign(this, attributes)
    }

    addToPage() {
        let d = this.domElement = document.createElement('div')
        d.setAttribute('id', `char${this.id}`)
        d.setAttribute('class', `character-box order${this.order}`)
        d.style.order = this.order
        document.getElementById('char-container').appendChild(d)

        if(this.goodbad) {
            d.classList.add('bad-character')
        } else {
            d.classList.add('good-character')
        }

        let firstDiv = d.appendChild(document.createElement('div'))
        firstDiv.setAttribute('class', 'first-char-div')

        let sname = firstDiv.appendChild(document.createElement('span'))
        sname.setAttribute('class', 'attribute-label character-box-name')
        sname.innerHTML = `${this.name}`

        let secondDiv = d.appendChild(document.createElement('div'))
        secondDiv.setAttribute('class', 'second-char-div')

        let sHP = secondDiv.appendChild(document.createElement('span'))
        sHP.setAttribute('class', 'attribute-label')
        sHP.innerHTML = "HP "

        let sHPinput = secondDiv.appendChild(document.createElement('input'))
        sHPinput.setAttribute('type', 'number')
        sHPinput.setAttribute('size', '4')
        sHPinput.value = this.HP

        let sHPslash = secondDiv.appendChild(document.createElement('span'))
        sHPslash.innerHTML = ' / '

        let sHPmax = secondDiv.appendChild(document.createElement('span'))
        sHPmax.innerHTML = this.maxHP

        let thirdDiv = d.appendChild(document.createElement('div'))
        thirdDiv.setAttribute('class', 'third-char-div')

        let sAC = thirdDiv.appendChild(document.createElement('span'))
        sAC.setAttribute('class', 'attribute-label')
        sAC.innerHTML = `<b>AC</b> ${this.AC}`

        let sstatus = thirdDiv.appendChild(document.createElement('span'))
        sstatus.setAttribute('class', 'attribute-label')
        sstatus.innerHTML = `Status `

        let sstatusInput = thirdDiv.appendChild(document.createElement('input'))
        sstatusInput.setAttribute('type', 'text')
        sstatusInput.setAttribute('size', '10')
        sstatusInput.value = this.status

    }

}

function addFormItems() {
    input = document.getElementById('char-num')
    x = input.value
    current = document.querySelectorAll('div.add-character-box').length

    if (current <= x) {
        for(let i=current; i<x; i++) {
            let x = new FormItem(i)
            x.addToPage()
        }
    } else {
        container = document.getElementById('halfpage-left')
        for(let i=0; i < (current - x); i++) {
            container.removeChild(container.lastChild)
            formItems.pop()
        }
    }
}

// Create game

let charItems = []
let round = 1
let turn = 1

function selectChar(id, choice) {
    document.getElementById(`fname-input${id}`).value = characterStats[choice].firstName
    document.getElementById(`fHP-input${id}`).value = characterStats[choice].currentHP
    document.getElementById(`fHPmax-input${id}`).value = characterStats[choice].maxHP
    document.getElementById(`fAC${id}`).value = characterStats[choice].AC
    document.getElementById(`fstatus-input${id}`).value = characterStats[choice].charStatus

    if(characterStats[choice].alignment == 'good') {
        document.getElementById(`sgood${id}`).checked = true
    } else {
        document.getElementById(`sbad${id}`).checked = true
    }
}

function playGame() {

    charItems = []

    for(let i in formItems) {
        const char = {
            'id': parseInt(formItems[i].id, 0),
            'name': formItems[i].domElement.children[0].children[`fname-input${i}`].value,
            'HP': parseInt(formItems[i].domElement.children[0].children[`fHP-input${i}`].value, 0),
            'maxHP': formItems[i].domElement.children[0].children[`fHPmax-input${i}`].value,
            'AC': formItems[i].domElement.children[0].children[`fAC${i}`].value,
            'status': formItems[i].domElement.children[0].children[`fstatus-input${i}`].value,
            'order': parseInt(formItems[i].domElement.children[1].children[`finit-input${i}`].value, 0),
            'goodbad': formItems[i].domElement.children[1].children[`sbad${i}`].checked
        }
        charItems.push(char)
    }

    charItems.sort(function (a,b) {
        return b.order - a.order
    })

    container = document.getElementById('char-container')
    container.innerHTML = ''

    for(let char in charItems) {
        newChar = new Character(charItems[char])
        newChar.addToPage()
    }

    document.getElementById('char-container').firstChild.classList.add('current-char')

    turn = 1
    document.getElementById('turn-counter').innerHTML = `Turn ${turn}`
}

function cycle() {

    let characters = document.querySelectorAll('div.character-box')
    first = characters[0].style.order

    for(let i=1; i<characters.length; i++) {
        let temp = characters[i].style.order
        characters[i].style.order = first
        first = temp
    }

    characters[0].style.order = first

    document.getElementById('char-container').children[turn-1].classList.remove('current-char')
    if(turn < charItems.length) {
        document.getElementById('char-container').children[turn].classList.add('current-char')
    } else {
        document.getElementById('char-container').children[0].classList.add('current-char')
    }

    if(turn < charItems.length) {
        turn += 1
    } else {
        round += 1
        turn = 1
    }

    document.getElementById('round-counter').innerHTML = `Round ${round}`
    document.getElementById('turn-counter').innerHTML = `Turn ${turn}`

}
