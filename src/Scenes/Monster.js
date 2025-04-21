

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }


    create() {
        let my = this.my;   // create an alias to this.my for readability
        //new container(Phaser.Scene, this.bodyX,this.bodyY, this.my);
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        this.monsterContainer = this.add.container(this.bodyX,this.bodyY);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        const body  = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteF.png");
        const ant1 = this.add.sprite(this.bodyX-30, this.bodyY-120, "monsterParts", "detail_dark_antenna_large.png");
        ant1.setFlipX(true);
        const ant2 = this.add.sprite(this.bodyX+30, this.bodyY-120, "monsterParts", "detail_dark_antenna_large.png");
        const leg1 = this.add.sprite(this.bodyX-50, this.bodyY+120, "monsterParts", "leg_redC.png");
        leg1.setFlipX(true);
        const leg2 = this.add.sprite(this.bodyX+50, this.bodyY+120, "monsterParts", "leg_redC.png")
        const eye1 = this.add.sprite(this.bodyX+30, this.bodyY-40, "monsterParts", "eye_angry_red.png");
        eye1.scaleX = 0.8;
        eye1.scaleY = 0.8;
        const eye2 = this.add.sprite(this.bodyX-30, this.bodyY-40, "monsterParts", "eye_angry_red.png");
        eye2.setFlipX(true);
        eye2.scaleX = 0.8;
        eye2.scaleY = 0.8;
        const mouth = this.add.sprite(this.bodyX,this.bodyY+10,"monsterParts","mouthA.png");
        const arm1 = this.add.sprite(this.bodyX+80,this.bodyY+60, "monsterParts", "arm_redA.png");
        const arm2 = this.add.sprite(this.bodyX-70,this.bodyY+60, "monsterParts", "arm_redB.png");
        const smileMouth = this.add.sprite(this.bodyX,this.bodyY,"monsterParts","mouth_closed_happy.png");
        const fangMouth = this.add.sprite(this.bodyX,this.bodyY,"monsterParts","mouth_closed_fangs.png");
        arm2.setFlipX(true);
        this.monsterContainer.add([body,ant1,ant2,leg1,leg2,eye1,eye2,mouth,smileMouth,fangMouth,arm1,arm2]);
    
        this.monsterContainer.x -= 250;
        this.monsterContainer.y -= 400;
        smileMouth.visible = false;
        fangMouth.visible = false;
        this.input.keyboard.on('keydown-S',(event) => {
            smileMouth.visible = true;
            fangMouth.visible = false;
            mouth.visible = false;
        });
        this.input.keyboard.on('keyup-S', (event) => {
            smileMouth.visible = false;
            fangMouth.visible = false;
            mouth.visible = true;
        })
        this.input.keyboard.on('keydown-F', (event) => {
            fangMouth.visible = true;
            smileMouth.visible = false;
            mouth.visible = false;
        });
        this.input.keyboard.on('keyup-F', (event) => {
            fangMouth.visible = false;
            smileMouth.visible = false;
            mouth.visible = true;
        });

    }


    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown) {
            this.monsterContainer.x--;
        }
        if (this.dKey.isDown) {
            this.monsterContainer.x++;
        }
    }

}
