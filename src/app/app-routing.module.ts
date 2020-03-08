import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnalyticsComponent } from './services/analytics/analytics.component';
import { ApiComponent } from './services/api/api.component';
import { AiComponent } from './services/ai/ai.component';
import { BlockchainComponent } from './services/blockchain/blockchain.component';
import { CmsComponent } from './services/cms/cms.component';
import { CrmComponent } from './services/crm/crm.component';
import { EcommerceComponent } from './services/ecommerce/ecommerce.component';
import { ErpComponent } from './services/erp/erp.component';
import { UiComponent } from './services/ui/ui.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { ItMaintenanceComponent } from './services/it-maintenance/it-maintenance.component';
import { InfrastructureSolutionComponent } from './services/infrastructure-solution/infrastructure-solution.component';
import { CyberSecurityComponent } from './services/cyber-security/cyber-security.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IotComponent } from './services/iot/iot.component';
import { ServicesAppComponent } from './services/app/app.component';
import { CustomisableSoftwareComponent } from './services/customisable-software/customisable-software.component';
import { SaasComponent } from './services/saas/saas.component';
import { PromotionalEventsComponent } from './services/offline-marketing/promotional-events.component';
import { InstagramComponent } from './services/social-media-marketing/instagram/instagram.component';
import { FacebookComponent } from './services/social-media-marketing/facebook/facebook.component';
import { TwitterComponent } from './services/social-media-marketing/twitter/twitter.component';
import { LinkedinComponent } from './services/social-media-marketing/linkedin/linkedin.component';
import { YoutubeComponent } from './services/social-media-marketing/youtube/youtube.component';
import { PinterestComponent } from './services/social-media-marketing/pinterest/pinterest.component';
import { VideoMarketingComponent } from './services/social-media-marketing/video-marketing/video-marketing.component';
import { ContentMarketingComponent } from './services/online-marketing/content-marketing/content-marketing.component';
import { LogoDesigningComponent } from './services/online-marketing/logo-designing/logo-designing.component';
import { BookmarkingComponent } from './services/online-marketing/bookmarking/bookmarking.component';
import { BloggingComponent } from './services/online-marketing/blogging/blogging.component';
import { VisitingCardsComponent } from './services/visiting-cards/visiting-cards.component';
import { BannerComponent } from './services/offline-marketing/banner/banner.component';
import { FlyersComponent } from './services/offline-marketing/flyers/flyers.component';
import { HoardingsComponent } from './services/offline-marketing/hoardings/hoardings.component';
import { CareersComponent } from './careers/careers.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // for defaault redirecting
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'api', component: ApiComponent },
  { path: 'ai', component: AiComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'cms', component: CmsComponent },
  { path: 'crm', component: CrmComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'erp', component: ErpComponent },
  { path: 'ui', component: UiComponent },
  { path: 'iot', component: IotComponent },
  { path: 'app', component: ServicesAppComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'it-maintenance', component: ItMaintenanceComponent },
  { path: 'infrastructure-solution', component: InfrastructureSolutionComponent },
  { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'customisable-software', component: CustomisableSoftwareComponent },
  { path: 'saas', component: SaasComponent },
  { path: 'promotional-events', component: PromotionalEventsComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'facebook', component: FacebookComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'linkedin', component: LinkedinComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'pinterest', component: PinterestComponent },
  { path: 'video-marketing', component: VideoMarketingComponent },
  { path: 'content-marketing', component: ContentMarketingComponent },
  { path: 'logo-designing', component: LogoDesigningComponent },
  { path: 'bookmarking', component: BookmarkingComponent },
  { path: 'blogging', component: BloggingComponent },
  { path: 'visiting-cards', component: VisitingCardsComponent },
  { path: 'banners', component: BannerComponent },
  { path: 'flyers', component: FlyersComponent },
  { path: 'hoardings', component: HoardingsComponent },
  { path: 'careers', component: CareersComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }