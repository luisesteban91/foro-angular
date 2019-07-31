//Modulos
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { PanelRoutingModule } from './panel-routing-module'
import { MomentModule } from 'angular2-moment';

//components
import { MainComponent } from '../panel/components/main/main.component';
import { AddComponent } from '../panel/components/add/add.component';
import { EditComponent } from '../panel/components/edit/edit.component';
import { ListComponent } from '../panel/components/list/list.component'

//Services
import { UserService } from '../services/user.service'
import { UserGuard } from '../services/user.guard'

//NgModule
@NgModule({
    declarations: [
      MainComponent,
      ListComponent,
      AddComponent,
      EditComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      PanelRoutingModule,
      MomentModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    providers: [
      UserService,
      UserGuard
    ]
})

export class PanelModule {}