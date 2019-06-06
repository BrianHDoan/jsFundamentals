// Object.keys() and Object.values()

// Object.keys() is a method that returns an array of a given objects own property names

/* Object.values() is a method that returns an array of a given object's own enumerable property values, 
in the same order as that provided by a for-in loop (the differeence being that a for-in loop enumerates
propeties in the prototype chain as well)

*/

let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs Bunny',
    rabbit2: 'Lola Bunny',
    duck: 'Daffy Duck',
    tDevil: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky Pig'
  },
  monstars: {
    0: 'Bupkus',
    1: 'Bang',
    2: 'Nawt',
    3: 'Pound',
    4: 'Blanko'
  },
  nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck));
// console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad));

// Square Bracket Notation
/* Square bracket notation can help us be ablw to find a value in a object. This way can be handy if we need to set a key to a
variable and then use that variable to parse through an object.
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'apple',
    water: true,
    sun: true,
    size: 10
}

// console.log(garden.water);
let x = 'vegetable';
console.log(garden[x]);
//console.log(garden.x);  //undefined, it's seaching in the object for a string named vegetable

let baking = {};
baking['zucchini'] = 'better make some bread'; //creating a new key/value pairing.
// console.log(baking.garden.vegetable);
console.log(baking[garden['vegetable']]);

let pie = {};
pie['apple'] = 'Pie me a river!';
// console.log(pie);
console.log(pie[garden['fruit']]);

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'apple',
    water: true,
    sun: true,
    size: 10
}

let key = 'water';
Object.keys(garden).forEach(g => {
    // console.log(g);
    if (key === g) {
        console.log(garden[key])
    }
});