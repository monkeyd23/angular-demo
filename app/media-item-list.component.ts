import {Component, Input} '@angular/core'


@Component({
    selector: 'my-media-item-list',
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: [
      'app/media-item-list.component.css'
    ]
})
export class MediaItemListComponent {

  @Input() mediaItems;

  onMediaItemDelete(mediaItem) {
        console.log(mediaItem);
  }


}