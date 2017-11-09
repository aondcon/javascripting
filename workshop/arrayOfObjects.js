function isMoreThan(cost, restaurant) {
  return restaurant.cost > cost;
}

function isLessThan(cost, restaurant) {
  return restaurant.cost < cost;
}

function isEqualThan(cost, restaurant) {
  return restaurant.cost == cost;
}

// Input Array of objects
var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];

// Output - Array of objects for which the cost is less than 1500
var result = restaurants.filter(isLessThan.bind(this,10));
console.log(result);