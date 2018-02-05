import {Component, OnInit} from '@angular/core'
import { Router,ActivatedRoute, Params } from '@angular/router';
import { MediaitemService } from './media-item-service';


@Component({
    selector: 'my-media-details',
    templateUrl: './app/media-details.component.html',
    styleUrls: [
      'app/media-details.component.css'
    ]
})

export class MediaDetailsComponent extends OnInit {

  mediaList =[];
  mediaItem = {}
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediaService : MediaitemService){
      super();
  }

  ngOnInit(){
    //  const mediaItemId = this.route.snapshot.params['id'];
    // this.mediaItem = this.mediaService.get().find(function(item): any{
    //   return item.id == mediaItemId;
    // })
    this.route.params.subscribe(
      (params : Params) =>{
        this.mediaItem = this.mediaService.get().find(function(item){
          return item['id'] == params['id'];
        })
      }
    )
     


  }

}