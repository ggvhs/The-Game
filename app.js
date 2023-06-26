
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


}



const bobbyWizard = new wizard('Bobby',50,50)

bobbyWizard.displayHealth()

//Scene Class that changes the background and story options
class Chapter{
    constructor(){
        this.currentChapter = 1
    }

    // startChapter(){
    //     document.getElementById('title-screen').style.display = 'none';
    //     document.getElementById('chapter-screen').style.display = 'block';

    //     this.loadChapter(this.currentChapter);
    // }

    loadChapter(sceneNumber){
        if (sceneNumber === 1){

        }
    }


}




let gameStory = new Chapter()
