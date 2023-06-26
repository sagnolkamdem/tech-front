import { Component } from '@angular/core';
import { Comment } from './comment/comment.component';

@Component({
  selector: 'tech-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {
  scrollClass!: string;
  scroller: number = 0;

  comments: Comment[] = [
    {
      id: 1,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 2,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1617942798556-4c6a49582667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 3,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1611703321166-c7fdda00e5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 4,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1612582631307-9824f3a5dfd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 5,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 6,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 7,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 8,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1617942798556-4c6a49582667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 9,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1611703321166-c7fdda00e5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
    {
      id: 10,
      message: 'TECH CAMER helped us reach a bigger audience.',
      name: 'Antonio Littel',
      work: 'Frontend Developer',
      agency: 'Google',
      photo:
        'https://images.unsplash.com/photo-1612582631307-9824f3a5dfd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.scrollClass = `transform: translate3d(${this.scroller}%, 0, 0)`;
  }

  prev() {
    if (this.scroller < 0) {
      this.scroller += 20;
      this.scrollClass = `transform: translate3d(${this.scroller}%, 0, 0)`;
    }
  }

  next() {
    if (this.scroller > -220) {
      this.scroller -= 20;
      this.scrollClass = `transform: translate3d(${this.scroller}%, 0, 0)`;
    }
  }
}
