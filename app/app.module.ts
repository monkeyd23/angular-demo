import {NgModule} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from './app.component'
import {MediaItemComponent} from './media-item.component.'
import {MediaItemListComponent} from './media-item-list.component'
import {FavoriteDirective} from './favorite.directive'
import {CategoryListPipe} from './category-list.pipe'
import {MediaitemService} from './media-item-service'
import {lookupLists, lookupListToken} from './lookup-provider'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    providers: [
        MediaitemService,
        {provide: lookupListToken, useValue: lookupLists}
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}