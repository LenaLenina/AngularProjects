import { RentalService } from './Rental';

export interface CustomerService {
    movie: RentalService;
    getThisAmount(): number;
    getFrequentRentalPoints(): number;
}

export class Customer {

    private _name: string = null;
    private _customerServices: CustomerService[] = [];

    constructor(name: string) {
        this._name = name;
    }

    public addRental(value: CustomerService) {
        this._customerServices.push(value);
    }

    public Statement(): string {
        let result = `Учет аренды для ${this._name}:<br>`;

        this._customerServices.forEach(customerService => {
            result += "<br>" + customerService.movie.title + " - " + customerService.getThisAmount();
        });

        result += "<br><br> Сумма задолженности составляет " + this.getTotalAmount() + "<br>";
        result += "Вы заработали " + this.getFrequentRentalPoints() + " очков за активность";

        return result;
    }

    private getTotalAmount(): number {
        let result: number = 0;

        this._customerServices.forEach(customerService => {
            result += customerService.getThisAmount();
        });

        return result;
    }

    private getFrequentRentalPoints(): number {
        let result: number = 0;

        this._customerServices.forEach(customerService => {
            result += customerService.getFrequentRentalPoints();
        });

        return result;
    }
}
