import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EvalSystemComponent } from './eval-system/eval-system.component';
import { ExampleComponent } from './example/example.component';
import { FileUploadComponent } from './shared/ui/file-upload/file-upload.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReferencesListComponent } from './eval-system/references-list/references-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EvalSystemComponent,
    ExampleComponent,
    FileUploadComponent,
    ReferencesListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
