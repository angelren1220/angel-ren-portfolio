import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.less']
})
export class WelcomeSectionComponent {
  public imageLink = "https://media.licdn.com/dms/image/D5603AQFMPrhuI3r5qg/profile-displayphoto-shrink_400_400/0/1701471972607?e=1706745600&v=beta&t=47NMvges6KEdNkPwcH4dcwzoufySeLbidB6havMqVRQ";

  public skillSets = [
    "JavaScript | TypeScript | ReactJS | Vue | Angular | jQuery | D3",
    "NodeJS | Express | Ruby | Rails | Java | Python | C#",
    "HTML | CSS | SASS | Bootstrap",
    "SQL | PostgreSQL",
    "Cypress | RSpec | Jest | Mocha | Chai | Storybook",
  ];
  
}
