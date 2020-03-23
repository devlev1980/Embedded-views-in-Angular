import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { TemplateRenderDirective } from './template-render.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TemplateRenderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
