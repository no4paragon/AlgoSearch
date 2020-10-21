import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'O11NN7BWT9',
  '92c882983b934a695b253b76de9ab457'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    indexName: 'Test_J',
    searchClient
  };
}
