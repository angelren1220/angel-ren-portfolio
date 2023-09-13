import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.less']
})
export class ProjectsSectionComponent {
  projects = [
    {
      title: 'ChartFolio',
      description: 'ChartFolio is an interactive visualization tool that allows users to explore data through three distinct chart types: Bar Chart, Choropleth Map Chart, Heat Map Chart.',
      imageSrc: 'https://github.com/angelren1220/chart-folio/blob/main/docs/choropleth%20map.png?raw=true',
      projectLink: 'https://github.com/angelren1220/chart-folio',
    },

    {
      title: 'GeoMark',
      description: 'GeoMark is a web application designed to help users effortlessly locate geographical coordinates, search for specific locales, view them on a map, and manage a list of explored places.',
      imageSrc: 'https://github.com/angelren1220/geo-mark/blob/main/docs/full-window-app.png?raw=true',
      projectLink: 'https://github.com/angelren1220/geo-mark',
    },

    {
      title: 'Tribute to CoCo Lee',
      description: 'The Tribute to Coco Lee website is a heartfelt online homage, featuring her albums, captivating images, videos, and a secure donation option to support her family\'s legacy.',
      imageSrc: 'https://github.com/angelren1220/tribute-page/blob/main/docs/Screenshot%202023-08-28%20at%203.52.45%20AM.png?raw=true',
      projectLink: 'https://github.com/angelren1220/tribute-page',
    },

    {
      title: 'SOUS',
      description: 'SOUS is an innovative web application designed to cater to cooking enthusiasts who are passionate about sharing, discovering, and managing recipes.',
      imageSrc: 'https://github.com/angelren1220/Recipe-Hub/blob/main/docs/explore.png?raw=true',
      projectLink: 'https://github.com/angelren1220/Recipe-Hub',
    },

    {
      title: 'Jungle-Rails',
      description: 'A mini e-commerce application built with Rails 6.1. It includes bug fixes, UI changes, and new features that enhance the user experience.',
      imageSrc: 'https://github.com/angelren1220/jungle-rails/blob/master/docs/sold-out-badge.png?raw=true',
      projectLink: 'https://github.com/angelren1220/jungle-rails',
    },

    {
      title: 'Interview Scheduler',
      description: 'An optimized Single Page Application (SPA) for efficient student interview tracking. Enables real-time appointment management, including seamless addition, editing, and deletion.',
      imageSrc: 'https://github.com/angelren1220/scheduler/blob/master/docs/view.gif?raw=true',
      projectLink: 'https://github.com/angelren1220/scheduler',
    },

    {
      title: 'Wiki Map',
      description: 'A collaborative web app utilizing Google Maps Platform for interactive map creation. Users can register, login, and manage maps by adding, editing, or deleting pins.',
      imageSrc: 'https://raw.githubusercontent.com/angelren1220/LHL-group-3-Wiki-Map/master/docs/6_login.png',
      projectLink: 'https://github.com/angelren1220/LHL-group-3-Wiki-Map',
    },

    {
      title: 'Tweeter',
      description: 'Tweeter is a simple, single-page Twitter clone.',
      imageSrc: 'https://github.com/angelren1220/tweeter/blob/master/docs/full-window.png?raw=true',
      projectLink: 'https://github.com/angelren1220/tweeter',
    }
  ];

  githubLink = "https://github.com/angelren1220";
}
