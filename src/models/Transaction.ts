
import { TransactionType } from "./TransactionType";

export class Transaction {
    private _id: string;
    private _type: TransactionType;
    private _amount: number;
    private _categoryId: string;
    private _description?: string;
    private _date: Date;
    private _isPositiveDebt: boolean;
    private _isNegativeDebt: boolean;
    private _debtName: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get type(): TransactionType {
        return this._type;
    }

    set type(value: TransactionType) {
        this._type = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get categoryId(): string {
        return this._categoryId;
    }

    set categoryId(value: string) {
        this._categoryId = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get isPositiveDebt(): boolean {
        return this._isPositiveDebt;
    }

    set isPositiveDebt(value: boolean) {
        this._isPositiveDebt = value;
    }

    get isNegativeDebt(): boolean {
        return this._isNegativeDebt;
    }

    set isNegativeDebt(value: boolean) {
        this._isNegativeDebt = value;
    }

    get debtName(): string {
        return this._debtName;
    }

    set debtName(value: string) {
        this._debtName = value;
    }

    constructor(
        id: string,
        type: TransactionType,
        amount: number,
        categoryId: string,
        date: Date,
        description?: string,
        isPositiveDebt: boolean,
        isNegativeDebt: boolean,
        debtName: string,
    ) {
        this._id = id;
        this._type = type;
        this._amount = amount;
        this._categoryId = categoryId;
        this._date = date;
        this._description = description;
        this._isPositiveDebt = isPositiveDebt;
        this._isNegativeDebt = isNegativeDebt;
    }
}
