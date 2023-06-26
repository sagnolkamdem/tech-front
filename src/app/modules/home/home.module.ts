import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesComponent } from './components/features/features.component';
import { CareersComponent } from './components/features/careers/careers.component';
import { EventsComponent } from './components/features/events/events.component';
import { InspirationComponent } from './components/features/inspiration/inspiration.component';
import { MadeInCmrComponent } from './components/features/made-in-cmr/made-in-cmr.component';
import { BlogComponent } from './components/features/blog/blog.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PlaceToBeComponent } from './components/place-to-be/place-to-be.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { CommentComponent } from './components/feedbacks/comment/comment.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './routes/home.routes';



@NgModule({
  declarations: [
    FeaturesComponent,
    BlogComponent,
    CareersComponent,
    EventsComponent,
    InspirationComponent,
    MadeInCmrComponent,
    HeroComponent,
    NewsletterComponent,
    PlaceToBeComponent,
    FeedbacksComponent,
    CommentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    SharedModule
  ]
})
export class HomeModule { }
