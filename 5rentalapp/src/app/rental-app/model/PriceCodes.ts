export abstract class PriceCodes {
    abstract getThisAmount(daysRented: number): number;

    getFrequentRentalPoints(daysRented: number): number {
        return 1;
    }
}

export class NewReleasePriceCode extends PriceCodes {
    getThisAmount(daysRented: number): number {
        return daysRented * 3;
    }

    getFrequentRentalPoints(daysRented: number): number {
        let result = super.getFrequentRentalPoints(daysRented);

        if (daysRented > 1)
            result++;

        return result;
    }
}

export class RegularPriceCode extends PriceCodes {
    getThisAmount(daysRented: number): number {
        let result = 2;

        if (daysRented > 2)
            result += (daysRented - 2) * 1.5;

        return result;
    }
}

export class ChildrensPriceCode extends PriceCodes {
    getThisAmount(daysRented: number): number {
        let result = 1.5;

        if (daysRented > 3)
            result += (daysRented - 3) * 1.5;

        return result;
    }
}