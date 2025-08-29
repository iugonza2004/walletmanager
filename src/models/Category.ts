
import { TransactionType } from "./TransactionType";

export class Category {
    private _id: string;
    private _name: string;
    private _incomePercentage: number;
    private _balance: number;

    get id(): string {
        return this._id;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get incomePercentage(): number {
        return this._incomePercentage;
    }

    set incomePercentage(value: number) {
        this._incomePercentage = value;
    }


    constructor(id: string, name: string, incomePercentage: number, balance: number) {
        this._id = id;
        this._name = name;
        this._incomePercentage = incomePercentage;
        this._balance = balance;
    }
}
