import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./atomicDesign/organisms/home/home.component";
import { CreateItemComponent } from "./atomicDesign/organisms/create-item/create-item.component"
import { ItemListComponent } from "./atomicDesign/organisms/item-list/item-list.component"

const routes: Routes = [
    {path: 'home', component: HomeComponent}, //home
    {path: 'create/:title/:hotelName', component: CreateItemComponent}, //create items
    {path: 'list/:title/:hotelName', component: ItemListComponent}, //List items
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //without url
    {path: '**', redirectTo: 'home', pathMatch: 'full'} //Comodin
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouctingModule {}