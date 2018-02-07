import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/Rx';
import {Response} from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';

const FIREBASEURL = "https://angular-demo-66780.firebaseio.com/";

@Injectable()
export class MediaitemService {

  constructor(private http : Http) {}

  get(key?) {
    let URL = 'mediaItems.json';
    if(key){
      URL = 'mediaItems/'+key+'.json';
    }
    
    
    return this
      .http
      .get(FIREBASEURL + URL)
      .map((response : Response) => {
        const data = response.json();
        if(!key){
        Object.keys(data).forEach(function(mediaItemKey) {
          data[mediaItemKey]['fbKey'] = mediaItemKey
        })
      }
        return data;
      });
    //return this.mediaItems;
  }

  delete(mediaItem?) {
    // let index = this
    //   .mediaItems
    //   .indexOf(mediaItem);
    // if (index >= 0) {
    //   this
    //     .mediaItems
    //     .splice(index, 1);
    // }
    return this
        .http
        .delete(FIREBASEURL + 'mediaItems/' + mediaItem['fbKey'] + '.json');
  }

  add(mediaItem) {
    if (mediaItem) {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      mediaItem['id'] = this.generateRandomId();
      mediaItem['watchedOn'] = (new Date(mediaItem['date'])).valueOf()
      mediaItem['isFavorite'] = mediaItem['isFavorite'] === 'true'
        ? true
        : false;
      // this.mediaItems.push(mediaItem)
      return this
        .http
        .post(FIREBASEURL + 'mediaItems.json', mediaItem, {headers: headers});
    }
  }

  generateRandomId() {
    return Math.round(Math.random() * 10000);
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    }, {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}