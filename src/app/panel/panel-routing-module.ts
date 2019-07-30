//importar los modulos del router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { MainComponent } from '../panel/components/main/main.component';
import { AddComponent } from '../panel/components/add/add.component';
import { EditComponent } from '../panel/components/edit/edit.component';
import { ListComponent } from '../panel/components/list/list.component'


//Array de rutas
const panelRoutes: Routes = [
    {
        path: 'panel',
        component : MainComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar/:id', component: EditComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(panelRoutes)
    ],
    exports: [
        RouterModule
    ]
})

//Exposrtar configiuracion
export class PanelRoutingModule {}
