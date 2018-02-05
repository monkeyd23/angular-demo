import {NgModule} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from './app.component'

import { RouterModule, Routes} from '@angular/router';

import {MediaItemComponent} from './media-item.component.'
import {MediaItemListComponent} from './media-item-list.component'
import {FavoriteDirective} from './favorite.directive'
import {CategoryListPipe} from './category-list.pipe'
import {MediaitemService} from './media-item-service'
import {lookupLists, lookupListToken} from './lookup-provider'

/* for routing purpose */
import { HomeComponent } from './home.component';
import { FavoriteMoviesComponent } from './favorite-movies.component';
import { MediaDetailsComponent } from './media-details.component';

import { AuthGuard }  from './auth-guard.service';

/* for routing purpose */
const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'favorite-movies', component: FavoriteMoviesComponent, canActivate:[AuthGuard]
    },
    {
        path: 'media-details/:id', component: MediaDetailsComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        MediaDetailsComponent,
        /* for routing purpose */
        HomeComponent,
        FavoriteMoviesComponent,
        
        FavoriteDirective,
        CategoryListPipe
    ],
    providers: [
        MediaitemService,
        {provide: lookupListToken, useValue: lookupLists},
        /* for routing purpose */
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}