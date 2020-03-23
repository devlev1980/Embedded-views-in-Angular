import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-root',
    template: `
        <h1 class="display-1">View Container in Angular </h1>
<!--        <div #container></div>-->
        <ng-container #container></ng-container> 
<!--        <h2 [ngClass]="{'container': true}" ></h2>-->
    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
    // @ViewChild(NgClass, {read: ViewContainerRef}) containerRef: ViewContainerRef;

    constructor(private viewContainer: ViewContainerRef) {
    }

    ngAfterViewInit(): void {
        console.log('View Container', this.viewContainer);
        console.log(this.container) // See the functions that container exist
    }


}
