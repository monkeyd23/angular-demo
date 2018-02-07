import {Component, Input, Inject} from '@angular/core'
import {MediaitemService} from './media-item-service'
import {lookupListToken} from './lookup-provider'
import {Response} from '@angular/http';

@Component({selector: 'my-media-item-list', templateUrl: 'app/media-item-list.component.html', styleUrls: ['app/media-item-list.component.css']})
export class MediaItemListComponent {
  mediaItems = [];

  constructor(private mediaItemService : MediaitemService, @Inject(lookupListToken)public lookupLists) {
    console.log(this.lookupLists);
  }

  ngOnInit() {

    this
      .mediaItemService
      .get()
      .subscribe(
      // ( response:Response) => {    const data = response.json();    this.mediaItems
      // = data;    console.log(response, data)  },
      data => {
        this.mediaItems = Object.values(data);
      }, error => {
        this.mediaItems = []
      });
  }

  onMediaItemDelete(mediaItem) {
    console.log(mediaItem, 'here')
    this.mediaItemService.delete(mediaItem).subscribe(response => {
        console.log(response)
        let index = this.mediaItems.indexOf(mediaItem);
        if (index >= 0) {
          this.mediaItems.splice(index, 1);
        }
      })
    // this.mediaItemService.delete(mediaItem);
  }

}