import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.less']
})
export class WelcomeSectionComponent {
  public imageLink = "https://media.licdn.com/dms/image/D5603AQH27i1Ga90Otw/profile-displayphoto-shrink_800_800/0/1695178603326?e=2147483647&v=beta&t=9Smx3_cfDUFNZZq_gKeSkmBFFJm2ynC8JpNRtdbR6Bg";

  public skillSets = [
    "JavaScript | TypeScript | ReactJS | Vue | Angular | jQuery | D3",
    "NodeJS | Express | Ruby | Rails | Java | Python | C#",
    "HTML | CSS | SASS | Bootstrap",
    "SQL | PostgreSQL",
    "Cypress | RSpec | Jest | Mocha | Chai | Storybook",
  ];
  
}
