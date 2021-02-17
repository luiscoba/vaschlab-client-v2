import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogsModule } from './dialogs/dialogs.module';
import { StudentsModule } from './students/students.module';
import { TableFiltersModule } from './table-filters/table-filters.module';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [AppComponent, InformationComponent],
  imports: [
    BrowserModule,
    NgbModule,
    StudentsModule,
    DialogsModule,
    TableFiltersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
