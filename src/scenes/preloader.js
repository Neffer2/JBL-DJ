export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    { 
        this.load.setPath('public/assets');
        // OBJECTS  
        this.load.image('background', 'objects/bg.jpg');
        this.load.image('background', 'objects/bg.jpg');
        this.load.image('sample_btn4', 'objects/sample_btn4.png');
        this.load.image('sample_btn1', 'objects/sample_btn1.png');
        this.load.image('sample_btn2', 'objects/sample_btn2.png');
        this.load.image('sample_btn3', 'objects/sample_btn3.png');
        this.load.image('scrath_btn', 'objects/scrath.png');
        this.load.image('logo', 'objects/logo.png');
        this.load.spritesheet('sine', 'objects/sine.png', { frameWidth: 601, frameHeight: 128 } );

        // Samples
        this.load.audio('hihat1', ['samples/Hihat1.wav']);
        this.load.audio('hihat2', ['samples/Hihat2.wav']);
        this.load.audio('kick1', ['samples/Kick1.wav']);
        this.load.audio('kick2', ['samples/Kick2.wav']);
        this.load.audio('kick3', ['samples/Kick3.wav']);
        this.load.audio('kick4', ['samples/Kick4.wav']);
        this.load.audio('snare1', ['samples/Snare1.wav']);
        this.load.audio('snare2', ['samples/Snare2.wav']);
        this.load.audio('scrath', ['samples/Scrath.wav']);

        // SONGS
        this.load.audio('song1', ['songs/Lensko - Circles.mp3']);
        this.load.audio('song2', ['songs/house.mp3']);
        this.load.audio('song3', ['songs/teamo.mp3']);

        // OBJECTS
        this.load.image('spin_volume', 'objects/detune.png');

        // PLUGINS
        this.load.plugin('rexdragrotateplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdragrotateplugin.min.js', true);
    } 

    create ()
    {
        this.scene.start('Game');
    } 
}