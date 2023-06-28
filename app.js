
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

const changeSceneFromTitleToGrass = function(){
    let fromTitle = document.querySelector('#title-screen')
    fromTitle.style.display = 'none';
    let toGrass = document.querySelector('#grass');
    toGrass.style.display = 'flex';
}

const toGrass = document.getElementById('toGrass')

toGrass.addEventListener('click' , changeSceneFromTitleToGrass)


const theRestButton = document.getElementById('reset');

theRestButton.addEventListener('click', function() {
   const grandparentDiv = theRestButton.parentNode.parentNode;
   grandparentDiv.style.display = 'none';
   const toTitle = document.querySelector('#title-screen')
   toTitle.style.display = 'flex';
   bobbyWizard.heal();
})

