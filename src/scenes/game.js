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

        let song = this.sound.add('song1');
        song.play({
            loop: true
        });

        let detune = this.add.image(100, 50, 'detune').setScale(0.5).setInteractive();
        this.plugins.get('rexdragrotateplugin').add(this, {
            origin: detune,
            x: 0,
            y: 0,
            maxRadius: 30,
            minRadius: 0,
            // enable: true,
        })
        .on('drag', function (dragRotate) {
            detune.angle += dragRotate.deltaAngle;
            if (song.isPlaying){
                let newDetune = song.detune + dragRotate.deltaAngle * 10;
                song.detune = Phaser.Math.Clamp(newDetune, -1200, 1200);
                
                // Sincronizar la rotación visual con el valor del detune
                // Mapear el rango de detune (-1200 a 1200) a rotación (-180° a 180°)
                detune.rotation = (song.detune / 1200) * Math.PI;
            }
            // let color = (dragRotate.isRadiusChanged) ? 0x00ff00 : 0xffff00;
        })
        .on('dragend', function () {
            
        });

        let rate = this.add.image(200, 50, 'detune').setScale(0.5).setInteractive();
        this.plugins.get('rexdragrotateplugin').add(this, {
            origin: rate,
            x: 0,
            y: 0,
            maxRadius: 30,
            minRadius: 0,
            // enable: true,
        })
        .on('drag', function (dragRotate) {
            rate.angle += dragRotate.deltaAngle;
            // let color = (dragRotate.isRadiusChanged) ? 0x00ff00 : 0xffff00;
            if (song.isPlaying){
                let newRate = song.rate + dragRotate.deltaAngle * 0.01;
                song.rate = Phaser.Math.Clamp(newRate, 0.5, 2);
                
                // Sincronizar la rotación visual con el valor del rate
                // Mapear el rango de rate (0.5 a 2) a rotación (-90° a 90°)
                // Normalizar: (rate - 1.25) / 0.75 da un rango de -1 a 1
                // Luego multiplicar por π/2 para obtener -90° a 90°
                rate.rotation = ((song.rate - 1.25) / 0.75) * (Math.PI / 2);
            }
        })
        .on('dragend', function () {
            
        });
    }

    init(){
        
    }
    
    update(){

    }
}
