import {Component, Input, Inject} from '@angular/core'
import {MediaitemService} from './media-item-service'
import {lookupListToken}  from './lookup-provider'

@Component({
    selector: 'my-media-item-list',
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: [
      'app/media-item-list.component.css'
    ]
})
export class MediaItemListComponent  {

  mediaItems;
  
   constructor(
     private mediaItemService: MediaitemService,
     @Inject(lookupListToken) public lookupLists) {
              console.log(this.lookupLists);
     }
  
     ngOnInit() {
         this.mediaItems = this.mediaItemService.get();
     }
     

  onMediaItemDelete(mediaItem) {
        this.mediaItemService.delete(mediaItem);
  }


}