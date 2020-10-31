import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { MechanicComponent } from './pages/mechanic/mechanic.component';

const app_routes: Routes = [
    {
        path: "mechanic",
        component: MechanicComponent
    },
    {
        path: "assignment",
        component: AssignmentComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'mechanic',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }