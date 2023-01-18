import Validator from '../validator';

test('testing symbols', () => {
    const validate = new Validator('super@%samurai');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('testing name with a num at the beginning or end', () => {
    const validate = new Validator('strelok49');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('testing name with - or _ ', () => {
    const validate = new Validator('_silverhand-');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('testing name with 4 or more num', () => {
    const validate = new Validator('9999luckyArm');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});
