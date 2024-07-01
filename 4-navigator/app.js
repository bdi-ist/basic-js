const addressLat = 20;
const addressLong = 6;

let positionLat = 4;
let positionLong = 2;

let a = addressLong - positionLong;
let b = addressLat - positionLat;
console.log('Расстояние по оси Х: ' + a + ', Расстояние по оси Y:' + b)
let distance = ((a * a) + (b * b)) ** (0.5);

console.log('Расстояние до места назначения: ' + distance);