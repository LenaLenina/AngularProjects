import { CustomerService } from './Customer';

export interface RentalService {
    title: string;
    getThisAmount(daysRented: number): number;
    getFrequentRentalPoints(daysRented: number): number;
}

export class Rental implements CustomerService {

    private _movie: RentalService;
    private _daysRented: number = 0;

    constructor(movie: RentalService, daysRented: number) {
        this._movie = movie;
        this._daysRented = daysRented;
    }

    public get movie(): RentalService {
        return this._movie;
    }

    public get daysRented(): number {
        return this._daysRented;
    }

    public getThisAmount(): number {
        return this.movie.getThisAmount(this.daysRented);
    }

    public getFrequentRentalPoints(): number {
        return this.movie.getFrequentRentalPoints(this.daysRented);
    }
}