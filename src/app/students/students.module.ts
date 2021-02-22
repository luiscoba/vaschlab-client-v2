import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformationComponent } from '../information/information.component';
import { NgbdSortableHeaderDirective } from './sortable.directive';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    InformationComponent,
    StudentsListComponent,
    StudentDetailComponent,
    NgbdSortableHeaderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    StudentsRoutingModule,
  ],
})
export class StudentsModule {}
