
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

/*


*/








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


//From Fire to Lake
const changeSceneFromFireToLake = function(){
    let fromFire = document.querySelector('#fire')
    fromFire.style.display = 'none';
    let toLake = document.querySelector('#lake');
    toLake.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-lake')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromLake =document.querySelector('#lake');
        fromLake.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }
}

const toLake = document.getElementById('toLake')
toLake.addEventListener('click' , changeSceneFromFireToLake)

//Grabs reset by id
const resetLake = document.getElementById('reset-lake');

resetLake.addEventListener('click', function() {
    const grandparentDiv = resetLake.parentNode.parentNode;
    grandparentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen')
    toTitle.style.display = 'flex';
    bobbyWizard.heal();
 })



 //From Lake to Mountain
const changeSceneFromLakeToMountain = function(){
    let fromLake = document.querySelector('#lake')
    fromLake.style.display = 'none';
    let toMountain = document.querySelector('#mountain');
    toMountain.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-mountain')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromMountain =document.querySelector('#mountain');
        fromMountain.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }
}

const toMountain = document.getElementById('toMountain')
toMountain.addEventListener('click' , changeSceneFromLakeToMountain)

//Grabs reset by id
const resetMountain = document.getElementById('reset-mountain');

resetMountain.addEventListener('click', function() {
    const grandparentDiv = resetMountain.parentNode.parentNode;
    grandparentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen')
    toTitle.style.display = 'flex';
    bobbyWizard.heal();
 })


 //From Mountain to Egg
 const changeSceneFromMountainToEgg = function(){
    let fromMountain = document.querySelector('#mountain')
    fromMountain.style.display = 'none';
    let toEgg = document.querySelector('#egg');
    toEgg.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-egg')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromEgg = document.querySelector('#egg');
        fromEgg.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }
}

const toEgg = document.getElementById('toEgg')
toEgg.addEventListener('click' , changeSceneFromMountainToEgg)

//Grabs reset by id
const resetEgg = document.getElementById('reset-egg');

resetEgg.addEventListener('click', function() {
    const grandparentDiv = resetEgg.parentNode.parentNode;
    grandparentDiv.style.display = 'none';
    const toTitle = document.querySelector('#title-screen')
    toTitle.style.display = 'flex';
    bobbyWizard.heal();
 })






 //From Egg to Dragon
 const changeSceneFromEggToDragon = function(){
    let fromEgg = document.querySelector('#egg')
    fromEgg.style.display = 'none';
    let toDragon = document.querySelector('#dragon');
    toDragon.style.display = 'flex';

    //show hp display
    let wizardHp = document.querySelector('#wizard-hp-dragon')
    wizardHp.textContent = `Hp ${bobbyWizard.hp}`

    //A check for wizards hp
    if(bobbyWizard.hp <= 0){
        console.log(`${bobbyWizard.name} has died so sad....`)
        let fromDragon =document.querySelector('#dragon');
        fromDragon.style.display = 'none';
        let toDeath = document.querySelector('#death-screen');
        toDeath.style.display='flex'

    }
}

const toDragon = document.getElementById('toDragon')
toDragon.addEventListener('click' , changeSceneFromEggToDragon)

//Grabs reset by id
const resetDragon = document.getElementById('reset-dragon');

resetDragon.addEventListener('click', function() {
    const grandparentDiv = resetDragon.parentNode.parentNode;
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
 











