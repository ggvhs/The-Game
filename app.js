
//WIZARD class 
class wizard{
    constructor(name, hp , mp){
        this.name = name;
        this.hp = hp;
        this.maxHp = 100;
        this.mp = mp;
        this.maxMp = 100;
    }

    //A full heal for the wizard
    heal(){
        this.hp = this.maxHp;
        console.log(`${this.name} now has full hp ${this.hp}`)
    }

    //A full mp up for the wizard
    mpUp(){
        this.mp = this.maxMp
        console.log(`${this.name} now has full mp`)
    }

    //Allows the wizard to be damaged
    getHit(ammount){
        this.hp -= ammount
        console.log(`${this.name} lost ${ammount} health. Current HP ${this.hp}`)
    }
}
const bobbyWizard = new wizard('Bobby',50,50)


//reset From death screen


// takes the user from title to grass
const changeSceneFromTitleToGrass = function(){
    let fromTitle = document.querySelector('#title-screen')
    fromTitle.style.display = 'none';
    let toGrass = document.querySelector('#grass');
    toGrass.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-grass')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`
}

const toGrass = document.getElementById('toGrass')

toGrass.addEventListener('click' , changeSceneFromTitleToGrass)

//Grabs reset by id
const resetGrass = document.getElementById('reset-grass');

resetGrass.addEventListener('click', function() {
   const grandparentDiv = resetGrass.parentNode.parentNode;
   grandparentDiv.style.display = 'none';
   const toTitle = document.querySelector('#title-screen')
   toTitle.style.display = 'flex';
   bobbyWizard.heal();
})










//Goes From grass to goblins

const changeSceneFromGrassToGoblin = function(){

    let fromGrass = document.querySelector('#grass')
    fromGrass.style.display = 'none';
    let toGoblin = document.querySelector('#goblin');
    toGoblin.style.display = 'flex';

    bobbyWizard.getHit(20);

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-goblin')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromGoblin =document.querySelector('#goblin');
        fromGoblin.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }

    
}

const toGoblin = document.getElementById('toGoblin')
toGoblin.addEventListener('click' , changeSceneFromGrassToGoblin)

//Grabs reset by id
const resetGoblin = document.getElementById('reset-goblin');

resetGoblin.addEventListener('click', function() {
    const grandparentDiv = resetGoblin.parentNode.parentNode;
    grandparentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen')
    toTitle.style.display = 'flex';
    bobbyWizard.heal();
 })




//From Goblin to Fire
 const changeSceneFromGoblinToFire = function(){
    let fromGoblin = document.querySelector('#goblin')
    fromGoblin.style.display = 'none';
    let toFire = document.querySelector('#fire');
    toFire.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-fire')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromFire =document.querySelector('#fire');
        fromFire.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }
}

const toFire = document.getElementById('toFire')
toFire.addEventListener('click' , changeSceneFromGoblinToFire)

//Grabs reset by id
const resetFire = document.getElementById('reset-fire');

resetFire.addEventListener('click', function() {
    const grandparentDiv = resetFire.parentNode.parentNode;
    grandparentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen')
    toTitle.style.display = 'flex';
    bobbyWizard.heal();
 })


 const resetDeath = document.getElementById('reset-death');

 resetDeath.addEventListener('click', function(){
    const parentDiv = resetDeath.parentNode;
    parentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen');
    toTitle.style.display = 'flex';
 })
 