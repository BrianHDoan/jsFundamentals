const vacationSpots = ['Florence, IT', 'CopenHagen, DN', 'Istanbul, TK']

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for ( let i = 0; i < 10; i++ ) {
    console.log(i);
}

for ( let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for ( let i = 10; i >= 0; i-- ) {
    console.log(i);
}

for ( let i = 0; i >= -24; i-= 2) {
    console.log(i);
}

let name = 'Brian'
for ( let i = 0; i < name.length; i++ ) {
    console.log(name[i]);
}

let sum = 0;
for ( i = 1; i <= 50; i++) {
   sum +=i
    console.log(sum)
}
