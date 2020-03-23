import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewRef} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1 class="display-1">Embedded views in Angular </h1>
        <h2 #title>I'm a title</h2>
        <button (click)="noClick()">Click Me!</button>
        <app-child #childRef></app-child>
    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
    @ViewChild('title') title: ElementRef;
    @ViewChild('childRef',{read: ElementRef}) child: ElementRef;

    constructor(private view: ViewRef,
                private hostElement: ElementRef,
                private renderer: Renderer2) {
    }


    ngAfterViewInit(): void {
        console.log(this.view); //ViewRef Object (ChangeDetection works on this View)
        // console.log(this.view.context); //ViewRef links to an AppComponent
        console.log(this.hostElement); //Check if ElementRef(h2) belongs to AppComponent

        // this.renderer.removeChild(this.hostElement.nativeElement, this.title.nativeElement)       //Dont't do this(Structure manipulation with Renderer)!!! Only with 3-d part component

        this.renderer.removeChild(this.hostElement.nativeElement,this.child.nativeElement)
        //Dont't do this(Structure manipulation with Renderer)!!!
    }

    noClick() {

    }
}
