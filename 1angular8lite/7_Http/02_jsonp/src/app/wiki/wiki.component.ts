import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  ngOnInit(): void {

  }

  items: any[] = [];

  constructor(private wiki: WikiService) { }

  public search(term: string) {
    this.wiki.search(term).subscribe(
      (res: any[]) => this.items = res
    )
  }

  public search2(term: string) {
    this.wiki.searchJsonp(term)
      .subscribe(
        (result: any[]) => {
          this.items = result;
        }
      )
  }

  public getLns() {
    this.wiki.getLns()
      .subscribe(
        (result: any[]) => console.log(result)
      )
  }

}