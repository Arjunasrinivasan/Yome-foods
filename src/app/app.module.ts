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
import { InfrastructureSolutionComponent } from './services/infrastructure-solution/infrastructure-solution.component';
import { CyberSecurityComponent } from './services/cyber-security/cyber-security.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
    CyberSecurityComponent
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