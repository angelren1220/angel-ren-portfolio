import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.less']
})
export class ContactSectionComponent {
    contactLinks = [
      { 
        type: 'LinkedIn',
        link: 'https://www.linkedin.com/in/linxue-angel-ren/',
        icon: 'fab fa-linkedin' 
      },

      {
        type: 'Github',
        link: 'https://github.com/angelren1220',
        icon: 'fab fa-github'
      },

      {
        type: 'Email',
        link: 'mailto:angelren1220@gmail.com',
        icon: 'fas fa-at'
      },

      {
        type: 'Phone',
        link: 'tel:519-701-3744',
        icon: 'fas fa-mobile-alt'
      }
    ];
}
