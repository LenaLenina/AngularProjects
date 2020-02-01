import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class WikiService {

  constructor(private http: HttpClient) { }

  public search(term: string) {
    let wikiUrl = "http://ru.wikipedia.org/w/api.php";

    let options = {
      params: new HttpParams()
        .set("search", term)
        .set("action", "opensearch")
        .set("format", "json")
        .set("callback", "JSONP_CALLBACK")
    };

    // cors exception
    return this.http.get(wikiUrl, options);
  }

  public searchJsonp(term: string) {
    // let wikiUrl = "https://ru.wikipedia.org/w/api.php?search=dog&action=opensearch&format=json";

    let wikiUrl = "https://ru.wikipedia.org/w/api.php";

    // how use HttpParams
    let options = {params: new HttpParams()
      .set("search", term)
      .set("action", "opensearch")
      .set("format", "json")};

    wikiUrl += "?" +  options.params.toString();

    return this.http.jsonp(wikiUrl, 'callback')
      .pipe(
        map(response => {
          let responseData =  <string[]>response;
          let names = responseData[1];
          let descriptions = responseData[2];
          let links = responseData[3];
          let length = names.length;

          let result: any[] = [];

          for(let i = 0; i < length; ++i){
            result.push({
              name: names[i],
              link: links[i],
              description: descriptions[i]
            });
          }

          return result;
        })
      );
  }

  public getLns(){
    let url = "https://lineslip-dev.azurewebsites.net/api/RfcTeam?rfcMainID=35157";

    //Status Code: 401 Unauthorized

    return this.http.jsonp(url, 'callback');
  }
}
