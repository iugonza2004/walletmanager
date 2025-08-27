
import { TransactionType } from "./TransactionType";

export class Category {
    private _id: string;
    private _name: string;
    private _incomePercentage: number;
    private _type: TransactionType;

    get id(): string {
        return this._id;
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

    get type(): TransactionType {
        return this._type;
    }

    set type(value: TransactionType) {
        this._type = value;
    }

    constructor(id: string, name: string, incomePercentage: number, type: TransactionType) {
        this._id = id;
        this._name = name;
        this._incomePercentage = incomePercentage;
        this._type = type;
    }
}
