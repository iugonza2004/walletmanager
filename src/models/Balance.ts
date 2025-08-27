export class Balance {
    private _total: number;
    private _incomes: number;
    private _expenses: number;
    private _positiveDebt: number;
    private _negativeDebt: number;

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get incomes(): number {
        return this._incomes;
    }

    set incomes(value: number) {
        this._incomes = value;
    }

    get expenses(): number {
        return this._expenses;
    }

    set expenses(value: number) {
        this._expenses = value;
    }

    get positiveDebt(): number {
        return this._positiveDebt;
    }

    set positiveDebt(value: number) {
        this._positiveDebt = value;
    }

    get negativeDebt(): number {
        return this._negativeDebt;
    }

    set negativeDebt(value: number) {
        this._negativeDebt = value;
    }

    constructor(total: number, incomes: number, expenses: number, positiveDebt: number, negativeDebt: number) {
        this._total = total;
        this._incomes = incomes;
        this._expenses = expenses;
        this._positiveDebt = positiveDebt;
        this._negativeDebt = negativeDebt;
    }
}
