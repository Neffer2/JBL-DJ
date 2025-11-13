export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        let square1 = this.add.rectangle(200, 200, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square2 = this.add.rectangle(square1.x + 250, 200, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square3 = this.add.rectangle(square2.x + 250, 200, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square4 = this.add.rectangle(square3.x + 250, 200, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square5 = this.add.rectangle(square1.x , square1.y + 250, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square6 = this.add.rectangle(square5.x + 250, square1.y + 250, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square7 = this.add.rectangle(square6.x + 250, square1.y + 250, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        let square8 = this.add.rectangle(square7.x + 250, square1.y + 250, 200, 200)
        .setOrigin(0.5)
        .setStrokeStyle(4, 0xffffff)
        .setInteractive();

        square1.on('pointerdown', () => {
            this.sound.play('kick1');
        });

        square2.on('pointerdown', () => {
            this.sound.play('kick2');
        });

        square3.on('pointerdown', () => {
            this.sound.play('snare1');
        });

        square4.on('pointerdown', () => {
            this.sound.play('snare2');
        });

        square5.on('pointerdown', () => {
            this.sound.play('kick3');
        });

        square6.on('pointerdown', () => {
            this.sound.play('kick4');
        });

        square7.on('pointerdown', () => {
            this.sound.play('hihat1');
        }); 

        square8.on('pointerdown', () => {   
            this.sound.play('hihat2');
        });
    }

    init(){
        
    }
    
    update(){

    }
}
