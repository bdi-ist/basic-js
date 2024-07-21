// Функции высшего порядка

const customFilter = (removeFn, inputArray) => {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (!removeFn(inputArray[i])) {
            result.push(inputArray[i]);
        } else {
            console.log(`Необходимо ли удалить элемент ${inputArray[i]}? ` + true);
        }
        //возможно как-то по другому надо было, но вроде по логике "если не больше 5 - записываем, в противном - true на удалении, или надо было отдельной функцией?"
    }
    return result;
};

const removeMoreThanFive = (number) => number > 5;
const inputArray = [3, 10, 1, 2];

const outputArray = customFilter(removeMoreThanFive, inputArray);

console.log(outputArray);