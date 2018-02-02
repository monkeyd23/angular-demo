import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myFavorite]'
})
export class FavoriteDirective {

  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false

  @HostListener('mouseenter', ['$event']) 
  onmouseenter(target) {
      this.hovering = true;
      console.log(target);
  }

  @HostListener('mouseleave') onMuseLeave() {
    this.hovering = false;
}


  @Input() set myFavorite(value) {
    this.isFavorite = value;
  }  

}
