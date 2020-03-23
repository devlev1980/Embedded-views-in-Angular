import {AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-root',
    template: `
        <h1 class="display-1">View Container in Angular / Rendering Logic </h1>
        <!--        <div #container></div>-->
        
        <ng-container #container></ng-container>
        
        
        <ng-template #templateRef>
            <h3>Content in ng-template</h3>
        </ng-template>

    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
    @ViewChild(TemplateRef) template: TemplateRef<any>; // If there's just one ng-template no need to set reference like  in <ng-template #templateRef></ng-template>
    @ViewChild('container',{read: ViewContainerRef}) container: ViewContainerRef;

    // constructor(private viewContainer: ViewContainerRef) {
    // }

    ngAfterViewInit(): void {
        // const embeddedView: EmbeddedViewRef<any> = this.template.createEmbeddedView(null);
        //
        // this.container.insert(embeddedView);
        this.container.createEmbeddedView(this.template); // Short version of code above
    }


}
