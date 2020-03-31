import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
    selector: 'yl-grid',
    template: `
        <table class="table">

            <thead>
                <th *ngFor="let header of headers">
                    <span>{{header}}</span>
                </th>
            </thead>
          

            <tbody>
            <ng-container *ngFor="let entry of data; template:rowTemplate || noTemplate  "></ng-container>
            </tbody>

        </table>

        <ng-template #noTemplate>
            <tr>No data...</tr>
        </ng-template>
    `,
    styles: [

            `
            table{
                box-sizing: border-box;
                width: 100%;
                /*border: 1px solid black;*/
                /*background-color: coral;*/
                color: white;
                box-shadow: 0 0 5px rgba(0,0,0, 0.5);
                padding: 0;
                margin: 0;
                border-collapse: collapse;

            }
            thead{
               background-color: cornflowerblue;
            }
            th{
                padding: 5px 10px;
            }
            
           
            /*table tbody tr{*/
            /*    border: 1px solid white !important;*/
            /*}*/
            
            table, th, td {
                text-align: center;
        }
          
           
           
        `
    ]
})

export class GridComponent implements OnInit {
    @Input() headers: string[] = [];
    @Input() data: any[] = [];
    @ContentChild(TemplateRef) rowTemplate: TemplateRef<any>

    constructor() {
    }

    ngOnInit(): void {
    }


}
