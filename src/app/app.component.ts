import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'xxxxxxxx',
  'xxxxxxxxxxxxxxx'
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
