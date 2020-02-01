import { PriceCodes } from './PriceCodes';
import { RentalService } from './Rental';

export class Movie implements RentalService {
    private _title: string = null;
    private _priceCode: PriceCodes;

    constructor(title: string, priceCode: PriceCodes) {
        this._title = title;
        this._priceCode = priceCode;
    }

    public get priceCode(): PriceCodes {
        return this._priceCode;
    }

    public set priceCode(value: PriceCodes) {
        this._priceCode = value;
    }

    public get title(): string {
        return this._title;
    }

    public getThisAmount(daysRented: number): number {
        return this.priceCode.getThisAmount(daysRented);
    }

    public getFrequentRentalPoints(daysRented: number): number {
        return this.priceCode.getFrequentRentalPoints(daysRented);
    }
}