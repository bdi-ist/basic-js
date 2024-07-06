let greeting = prompt(`Введите язык, на котором необходимо приветствовать
    Русский - ru;
    English - en;
    Deutsch - de;
    中文 - cn;
    Qazaqsha - kz`);

switch (greeting) {
    case 'ru':
        console.log('Добрый день');
        break;
    case 'en':
        console.log('Hello');
        break;
    case 'de':
        console.log('Hallo');
        break;
    case 'cn':
        console.log('你好!');
        break;
    case 'kz':
        console.log('Salem');
        break;
    default:
        console.log('Я не знаю этого');
}