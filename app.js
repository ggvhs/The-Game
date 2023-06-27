
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



    //A reusable function that will be called anytime health can be effected
    displayHealth(divId) {
        let healthDiv = document.getElementById(divId);
        healthDiv.innerText = `Health: ${this.hp}`;
    }


}


const bobbyWizard = new wizard('Bobby',50,50)



document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    bobbyWizard.displayHealth('health-div');
  });



function takeGoblinDamage(){
    bobbyWizard.getHit(20);
}

















//Scene Class that changes the background and story options
// class Chapter{
//     constructor(){
//         this.currentChapter = 1
//     }

//     startChapter(){
//         document.getElementById('title-screen').style.display = 'none';
//         document.getElementById('chapter-screen').style.display = 'block';

//         this.loadChapter(this.currentChapter);
//     }

//     loadChapter(sceneNumber){
//         if (sceneNumber === 1){
//             document.getElementById('chapter-image').style.backgroundImage = 'url(./images/grassyLandscape.jpg)'
//             this.currentChapter++;
//             this.continueChapter(this.currentChapter)
//         }
//     }

//     continueChapter(sceneNumber){
//         if( sceneNumber === 2){

//         }
//     }



// }


// const gameStory = new Chapter()
