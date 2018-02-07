import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: [
    'app/media-item.component.css'
  ]
})
export class MediaItemComponent {

    constructor(private router: Router){

    }

    @Input() mediaItem;
    @Output() delete = new EventEmitter();
    @Input() rating;

    wasWatched() {
        return 'YES';
    }

    onDelete() {
        this.delete.emit(this.mediaItem);
    }

    onTitleClick(mediaDetails){
         this.router.navigate(['/media-details', mediaDetails['fbKey']])
        //this.router.navigate(['/movie-details', mediaDetails.id], {queryParams: {isFavorite: mediaDetails.isFavorite}, fragment: 'Loading'})
    }

}