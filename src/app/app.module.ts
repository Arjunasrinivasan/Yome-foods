import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { RepairComponent } from './repair/repair.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2OdometerModule } from 'ng2-odometer';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from './icons/icons.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FunfactComponent } from './funfact/funfact.component';
import { WorksComponent } from './home/works/works.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepairPartnerComponent } from './repair/repair-partner/repair-partner.component';
import { AnalyticsComponent } from './services/analytics/analytics.component';
import { ApiComponent } from './services/api/api.component';
import { AiComponent } from './services/ai/ai.component';
import { BlockchainComponent } from './services/blockchain/blockchain.component';
import { CmsComponent } from './services/cms/cms.component';
import { CrmComponent } from './services/crm/crm.component';
import { EcommerceComponent } from './services/ecommerce/ecommerce.component';
import { ErpComponent } from './services/erp/erp.component';
import { IotComponent } from './services/iot/iot.component';
import { UiComponent } from './services/ui/ui.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { ItMaintenanceComponent } from './services/it-maintenance/it-maintenance.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesAppComponent } from './services/app/app.component';
import { CustomisableSoftwareComponent } from './services/customisable-software/customisable-software.component';
import { SaasComponent } from './services/saas/saas.component';
import { CareersComponent } from './careers/careers.component';
import { InfrastructureSolutionComponent } from './services/infrastructure-solution/infrastructure-solution.component';
import { CyberSecurityComponent } from './services/cyber-security/cyber-security.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PromotionalEventsComponent } from './services/offline-marketing/promotional-events.component';
import { InstagramComponent } from './services/social-media-marketing/instagram/instagram.component';
import { FacebookComponent } from './services/social-media-marketing/facebook/facebook.component';
import { TwitterComponent } from './services/social-media-marketing/twitter/twitter.component';
import { YoutubeComponent } from './services/social-media-marketing/youtube/youtube.component';
import { PinterestComponent } from './services/social-media-marketing/pinterest/pinterest.component';
import { LinkedinComponent } from './services/social-media-marketing/linkedin/linkedin.component';
import { VideoMarketingComponent } from './services/social-media-marketing/video-marketing/video-marketing.component';
import { BloggingComponent } from './services/online-marketing/blogging/blogging.component';
import { LogoDesigningComponent } from './services/online-marketing/logo-designing/logo-designing.component';
import { ContentMarketingComponent } from './services/online-marketing/content-marketing/content-marketing.component';
import { BookmarkingComponent } from './services/online-marketing/bookmarking/bookmarking.component';
import { VisitingCardsComponent } from './services/visiting-cards/visiting-cards.component';
import { BannerComponent } from './services/offline-marketing/banner/banner.component';
import { FlyersComponent } from './services/offline-marketing/flyers/flyers.component';
import { HoardingsComponent } from './services/offline-marketing/hoardings/hoardings.component';
import { WorkStrategyComponent } from './work-strategy/work-strategy.component';
import { WebsiteCreationComponent } from './services/online-marketing/website-creation/website-creation.component';
import { PromotionalCardsComponent } from './services/offline-marketing/promotional-cards/promotional-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FunfactComponent,
    WorksComponent,
    FeedbackComponent,
    PartnerComponent,
    AboutComponent,
    HomeTeamComponent,
    ContactComponent,
    NotFoundComponent,
    RepairPartnerComponent,
    IotComponent,
    AnalyticsComponent,
    ApiComponent,
    AiComponent,
    BlockchainComponent,
    CmsComponent,
    CrmComponent,
    EcommerceComponent,
    ErpComponent,
    UiComponent,
    DigitalMarketingComponent,
    ItMaintenanceComponent,
    PortfolioComponent,
    ServicesComponent,
    RepairComponent,
    ServicesAppComponent,
    CustomisableSoftwareComponent,
    SaasComponent,
    InfrastructureSolutionComponent,
    CyberSecurityComponent,
    PromotionalEventsComponent,
    InstagramComponent,
    FacebookComponent,
    TwitterComponent,
    YoutubeComponent,
    PinterestComponent,
    LinkedinComponent,
    VideoMarketingComponent,
    BloggingComponent,
    LogoDesigningComponent,
    ContentMarketingComponent,
    BookmarkingComponent,
    VisitingCardsComponent,
    BannerComponent,
    FlyersComponent,
    HoardingsComponent,
    WorkStrategyComponent,
    CareersComponent,
    WebsiteCreationComponent,
    PromotionalCardsComponent
  ],
  imports: [
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule,
    CarouselModule,
    Ng2OdometerModule.forRoot(),
    SlickCarouselModule, NgwWowModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }