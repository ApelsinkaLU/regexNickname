export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUserName() {
        const checkSymbol = /^[a-zA-Z0-9-_]+$/;
        const checkOrder = /^[A-Z][A-Z0-9-_]+[A-Z]$/i;
        const checkNum = /\d{4,}/;

        if (!checkSymbol.test(this.name)) {
            throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
        }

        if (!checkOrder.test(this.name) || !checkNum.test(this.name)) {
            throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
        }
    }
}
