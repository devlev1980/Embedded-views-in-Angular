import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {IUser, users} from "../assets/users";


@Component({
    selector: 'app-root',
    template: `
        <h1 class="display-1">ng-template / custom *ngFor</h1>

        <ng-container #usersContainerRef></ng-container>
        <ng-template #userTemplateRef 
                     let-user="currentUser" 
                     let-index="index" 
                     let-isFirst="first">
<!--            <h2>This is the users template</h2>-->
            <h2>{{user.id}}  {{user.name}}</h2>
        </ng-template>

    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
    @ViewChild('userTemplateRef', {read: TemplateRef}) userTemplate: TemplateRef<{currentUser: IUser,index: number, first: boolean}>;
    @ViewChild('usersContainerRef', {read: ViewContainerRef}) usersContainerRef: ViewContainerRef
    users: IUser[] = users;

    constructor(private cdr: ChangeDetectorRef) {
    }
    ngAfterViewInit(): void {

        // this.users.forEach(user=>{
        //     this.usersContainerRef.createEmbeddedView(this.userTemplate,{currentUser: user});
        // })

        for (let i=0; i< this.users.length; i++){
           this.usersContainerRef.createEmbeddedView(this.userTemplate,{
               currentUser: this.users[i],
               index: i,
               first: i == 0
           })
        }
        this.cdr.detectChanges();


    }


}
