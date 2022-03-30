function Game(name, type) {
    this.name = name
    this.type = type;
}

function ConquerorBlade(name, type, published)  {
    Game.call(this, name, type);        // add this row for inherited from Game
    this.published = published;
}

const warface = new ConquerorBlade('Warface', 'Shooting game', '2012');

console.log(warface);
// ConquerorBlade {published: '2012'}
// ConquerorBlade {name: 'Warface', type: 'Shooting', published: '2012'}