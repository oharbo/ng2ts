import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-spinner',
    templateUrl:'spinner.component.html',
    styleUrls: ['spinner.component.css'],
})

export class SpinnerComponent {
    @Input()
     private spin: boolean;
}