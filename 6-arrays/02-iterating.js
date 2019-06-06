// Iterating

// forEach() method executes a provided function once for each array element.

// forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array
//  index = the index of the current element being processed 
//  array = the array the forEach method was called upon

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach( f => { console.log(f); });
food.forEach((food, number) => {console.log(number); console.log(food);})
food.forEach((food, number, array) => {console.log(number); console.log(food); console.log(array);}) //short way

let foodFunction = () => {
    for (f in food) {
      console.log(f),
      console.log(food[f]),
      console.log(food)
    }
  }
  
  foodFunction() //long way

  let movies = ['Avengers', 'Black Panther', 'Iron Man', 'Antman', 'Spiderman'];
  movies.push('War Games');
  movies.splice(0, 1, 'Caberet');

  movies.forEach((m, num, arr) => {console.log(m);}) 