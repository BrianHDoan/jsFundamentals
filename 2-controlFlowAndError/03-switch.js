var friend = "Bob";

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing?");
        break;
    case "Dave":
        console.log("Hey Dave, hiw is Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let dessert = "cake"

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default: 
        console.log(`${dessert} is not on the menu.`);
}

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked');
        break;
    default:
        console.log("didn't work");
}

let age = 21;

switch (true) {
    case (age >= 25):
        console.log("You're old enough to rent a car!");
        break;
    case (age >= 21):
        console.log("You're old enough to drink!");
        break;
    case (age >= 18):
        console.log("You're old enough to vote!");
        break;
    default:
        console.log (`Sorry, ${age} is too young to be able to do anything.`);
}
