import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'my-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: [
    'app/media-item.component.css'
  ]
})
export class MediaItemComponent {

    @Input() mediaItem;
    @Output() delete = new EventEmitter();
    @Input() rating;

    wasWatched() {
        return 'YES';
    }

    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}