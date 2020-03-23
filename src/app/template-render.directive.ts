import {AfterViewInit, Directive, Input, OnChanges, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTemplateRender]'
})
export class TemplateRenderDirective implements OnChanges{
@Input('appTemplateRender') template: TemplateRef<any>
  constructor(private viewContainer: ViewContainerRef) { }

  ngAfterViewInit(): void {
  }
  ngOnChanges(): void {
    this.viewContainer.createEmbeddedView(this.template); //Rendering dynamic embedded view with directive

  }
}
