import {Component, OnInit} from '@angular/core'
import {MediaitemService} from './media-item-service';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'my-favorite-movies', templateUrl: './app/favorite-movies.component.html', styleUrls: ['app/favorite-movies.component.css']})

export class FavoriteMoviesComponent extends OnInit {

  favoriteMediaList = [];

  constructor(private mediaService : MediaitemService, private router : ActivatedRoute) {
    super()
  }

  ngOnInit() {
    this
      .router
      .queryParams
      .subscribe((queryParams) => {
        let data = []
        //  this.mediaService.get().forEach(function(item){    const isTrueSet =
        // (queryParams['isFavorite'] == 'true')    if( item['isFavorite'] ==
        // isTrueSet){      data.push(item)    }
        this
          .mediaService
          .get()
          .subscribe(res => {
            Object
              .values(res)
              .forEach(function (item) {
                const isTrueSet = (queryParams['isFavorite'] == 'true')
                if (item['isFavorite'] == isTrueSet) {
                  data.push(item)
                }
              })
            this.favoriteMediaList = data;
          })
      })
  }
}