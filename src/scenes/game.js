export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        let mContext = this;
        let width = this.scale.width;

        let sample_btn1 = this.add.image(320, 365, 'sample_btn1').setInteractive();
        let sample_btn2 = this.add.image(sample_btn1.x + 150, 365, 'sample_btn2').setInteractive();
        let sample_btn3 = this.add.image(sample_btn2.x + 150, 365, 'sample_btn3').setInteractive();
        let sample_btn4 = this.add.image(sample_btn3.x + 150, 365, 'sample_btn4').setInteractive();

        let sample_btn5 = this.add.image(sample_btn1.x, sample_btn1.y + 180, 'sample_btn1').setInteractive();
        let sample_btn6 = this.add.image(sample_btn5.x + 150, sample_btn5.y, 'sample_btn2').setInteractive();
        let sample_btn7 = this.add.image(sample_btn6.x + 150, sample_btn6.y, 'sample_btn3').setInteractive();
        let sample_btn8 = this.add.image(sample_btn7.x + 150, sample_btn7.y, 'sample_btn4').setInteractive();
        let sine = this.add.sprite((width / 2), 145, 'sine').setOrigin(0.5);
        this.anims.create({
            key: 'sine_anim',
            frames: this.anims.generateFrameNumbers('sine', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });

        sample_btn1.on('pointerdown', () => {
            this.sound.play('kick1');
        });

        sample_btn2.on('pointerdown', () => {
            this.sound.play('kick2');
        });

        sample_btn3.on('pointerdown', () => {
            this.sound.play('snare1');
        });

        sample_btn4.on('pointerdown', () => {
            this.sound.play('snare2');
        });

        sample_btn5.on('pointerdown', () => {
            this.sound.play('kick3');
        });

        sample_btn6.on('pointerdown', () => {
            this.sound.play('kick4');
        });

        sample_btn7.on('pointerdown', () => {
            this.sound.play('hihat1');
        }); 

        sample_btn8.on('pointerdown', () => {   
            this.sound.play('hihat2');
        });

        let song = this.sound.add(`song${this.generateRandomInt(1,3)}`);
        song.on('play', () => {
            sine.anims.play('sine_anim');
        });
        song.play({
            loop: true,
            volume: 0.8
        });

        let sample_btn9 = this.add.image(sample_btn7.x + 428, 440, 'scrath_btn').setInteractive();
        sample_btn9.on('pointerdown', () => {
            mContext.sound.play('scrath');
            
            mContext.tweens.add({
                targets: sample_btn9,
                angle: sample_btn9.angle + 360,
                duration: 100,
                ease: 'Power2.easeOut',
                onComplete: () => {
                    sample_btn9.angle = 0;
                }
            });
        });        

        let detune = this.add.image(208, 145, 'spin_volume').setInteractive();
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

        let rate = this.add.image(1075, 145, 'spin_volume').setInteractive();
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
                sine.anims.msPerFrame = 1000 / (22 * song.rate);
            }
        })
        .on('dragend', function () {
            
        });

        // Botón de pantalla completa
        let fullscreenBtn = this.add.text(this.cameras.main.width - 40, 8, '⛶', {
            fontSize: '14px',
            fill: '#ffffff',
            // backgroundColor: '#333333',
            padding: { x: 10, y: 8 },
            borderRadius: 5
        }).setInteractive();

        fullscreenBtn.on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                fullscreenBtn.setText('⛶');
            } else {
                this.scale.startFullscreen();
                fullscreenBtn.setText('⛶');
            }
        });
    }

    init(){ 
        this.add.image(0, 0, 'background').setScale(.48).setOrigin(0, 0);
    }   
    
    update(){

    }

    generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }   
}
