const arr = ['10-02-2022', 'тест', '29-02-2024', '00/13/2022', '41/12/2023'];

const isValidDate = (day, month, year) => {
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day <= daysInMonth[month - 1];
}


const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const processDates = (arr) => {
    return arr
        .map(dateString => dateString.split(/[-/]/))
        .filter(parts => {
            if (parts.length !== 3) return false;
            const [day, month, year] = parts.map(Number);
            return isValidDate(day, month, year);

        })

        .map(parts => {
            const [day, month, year] = parts.map(String); // Дополняем нулями до двух символов
            return `${day}.${month}.${year}`;
        });

}
console.log(processDates(arr)); 
