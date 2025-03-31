import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-interview-section',
    imports: [HeaderComponent, RouterLink],
    templateUrl: './interview.component.html',
    styleUrls: ['./interview.component.css']
})
export class InterviewSectionComponent {
    selectedOption: string | null = null;

    selectOption(option: string) {
      this.selectedOption = option;
    }
}