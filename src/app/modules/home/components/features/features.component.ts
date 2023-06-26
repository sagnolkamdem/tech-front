import { Component } from '@angular/core';

interface Feature {
  index: number;
  name: string;
  color: 'primary' | 'secondary' | 'warning' | 'danger' | undefined;
}

@Component({
  selector: 'tech-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  position: number = 0;

  features: Feature[] = [
    {
      index: 0,
      color: 'primary',
      name: 'Made in CMR',
    },
    {
      index: 1,
      color: undefined,
      name: 'Events',
    },
    {
      index: 2,
      color: undefined,
      name: 'Blog',
    },
    {
      index: 3,
      color: undefined,
      name: 'Inspirations',
    },
    {
      index: 4,
      color: undefined,
      name: 'Carriers',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
