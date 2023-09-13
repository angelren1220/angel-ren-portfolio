import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.less']
})
export class WelcomeSectionComponent {
  public skillSets = [
    "JavaScript | TypeScript | ReactJS | Vue | Angular | jQuery | D3",
    "NodeJS | Express | Ruby | Rails | Java | Python | C#",
    "HTML | CSS | SASS | Bootstrap",
    "SQL | PostgreSQL",
    "Cypress | RSpec | Jest | Mocha | Chai | Storybook",
  ];
  
}
