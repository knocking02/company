import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FactSectionComponent } from './fact-section/fact-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { ActionSectionComponent } from './action-section/action-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeComponent } from './home/home.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroSectionComponent, FactSectionComponent, ServiceSectionComponent, ActionSectionComponent, PortfolioSectionComponent, TeamSectionComponent, ContactSectionComponent, HomeComponent, AboutSectionComponent]
})
export class HomeModule { }
