import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from './model/Customer';
import { Rental, RentalService } from './model/Rental';
import { Movie } from './model/Movie';
import { RegularPriceCode, NewReleasePriceCode } from './model/PriceCodes';

@Component({
  selector: 'app-rental-app',
  templateUrl: './rental-app.component.html',
  styleUrls: ['./rental-app.component.css']
})
export class RentalAppComponent implements OnInit {

  public customer: Customer = new Customer("Dima");
  public movie: RentalService = new Movie("Matrix", new NewReleasePriceCode());
  public rental: CustomerService = new Rental(this.movie, 2);

  public movie2: RentalService = new Movie("Matrix2", new RegularPriceCode());
  public rental2: CustomerService = new Rental(this.movie2, 3);

  constructor() { }

  ngOnInit() {
    this.customer.addRental(this.rental);
    this.customer.addRental(this.rental2);
  }
}