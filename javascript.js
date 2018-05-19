var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);
var text;
var counter = 0;

function preload ()
{
  // this.load.setBaseURL('http://labs.phaser.io');

  this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
  this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png');
  this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
  this.load.image('user', './beardAddie.jpg')
}

function create ()
{
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  var user = this.add.image(400, 300, 'user').setScale(0.1, 0.1);

  text = this.add.text(250, 16, 'HELLO', { fill: '#ffffff' });

  this.input.on('pointerdown', userClick, user);
}

function userClick () {
  console.log("clicked")
  counter++;
  text.setText(`You clicked ${counter} times!`)
}
