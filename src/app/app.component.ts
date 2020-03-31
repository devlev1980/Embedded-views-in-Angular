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
        <h1 class="display-1">Custom component</h1>
        <yl-grid [data]="users" [headers]="headers">
            <ng-template let-user="$implicit">
                <tr>
                    <td><span>{{user.id}}</span></td>
                    <td><span>{{user.name}}</span></td>
                    <td><span>{{user.age}}</span></td>
                </tr>
            </ng-template>
        </yl-grid>

    `,
    styles: [
        `
            td  span{
                display: block;
                padding: 20px ;
                background-color: darkseagreen;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
    users: IUser[] = users;
    headers: string[] = ['id','name','age'];
    constructor(private cdr: ChangeDetectorRef) {
    }
    ngAfterViewInit(): void {

        this.cdr.detectChanges();
    }


}
