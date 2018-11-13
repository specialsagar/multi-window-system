import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { FormsModule }   from '@angular/forms';
import { HotTableModule } from 'ng2-handsontable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WindowsComponent } from './windows/windows.component';
import { ExcelWindowComponent } from './excel-window/excel-window.component';
import { ImageWindowComponent } from './image-window/image-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WindowsComponent,
    ExcelWindowComponent,
    ImageWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularSplitModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
