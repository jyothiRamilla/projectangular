import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { TeamComponent } from './components/company/team/team.component';
import { WaterDailyComponent } from './components/company/water-daily/water-daily.component';
import { AboutusComponent } from './components/company/aboutus/aboutus.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/company/navbar/navbar.component';
import { FooterComponent } from './components/company/footer/footer.component';
import { HelpComponent } from './components/contact/help/help.component';
import { PartnerComponent } from './components/contact/partner/partner.component';
import { JoinusComponent } from './components/contact/joinus/joinus.component';
import { NavcontactComponent } from './components/contact/navcontact/navcontact.component';
import { MapComponent } from './components/map/map.component';
import { Ven1Component } from './components/ven1/ven1.component';
import { NavlogComponent } from './components/navlog/navlog.component';
import { LegalComponent } from './components/legal/legal.component';
import { TermsComponent } from './components/legal/terms/terms.component';
import { OfferComponent } from './components/legal/offer/offer.component';
import { RefundComponent } from './components/legal/refund/refund.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HeaderComponent } from './components/header/header.component';
import { Login1Component } from './components/header/login1/login1.component';
import { ImageComponent } from './components/header/image/image.component';
import { FootComponent } from './components/foot/foot.component';
import { ServicesComponent } from './components/services/services.component';
import { FeatureComponent } from './components/feature/feature.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { HomeComponent } from './components/home/home.component';

const routes= [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vendor', component: Ven1Component },
  { path: 'company', component: CompanyComponent },
  { path: 'aboutus', component: CompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent },
  {path: 'map', component: MapComponent}
  

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TeamComponent,
    WaterDailyComponent,
    AboutusComponent,
    CompanyComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HelpComponent,
    PartnerComponent,
    JoinusComponent,
    NavcontactComponent,
    MapComponent,
    Ven1Component,
    NavlogComponent,
    LegalComponent,
    TermsComponent,
    OfferComponent,
    RefundComponent,
    FeedbackComponent,
    HeaderComponent,
    Login1Component,
    ImageComponent,
    FootComponent,
    ServicesComponent,
    FeatureComponent,
    PaymentComponent,
    NavibarComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
