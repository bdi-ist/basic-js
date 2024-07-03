const hasLicence = true;
const age = 18;
const isDrunk = false;

const result = (age >= 18)
    && hasLicence
    && !isDrunk;

console.log(`Может ли пользователь вести машину? ${result ? 'Да' : 'Нет'}`
)