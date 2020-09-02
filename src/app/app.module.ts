import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DonationProcessComponent } from './donation-process/donation-process.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DonationProcessDesComponent } from './donation-process-des/donation-process-des.component';
import { WhatHappenDonatebloodComponent } from './what-happen-donateblood/what-happen-donateblood.component';
import { FristTimeDonationComponent } from './frist-time-donation/frist-time-donation.component';
import { SelectTimeTodonationComponent } from './select-time-todonation/select-time-todonation.component';
// import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NavbarComponent,
    FooterComponent,
    DonationProcessComponent,
    SearchComponent,
    ProfileComponent,
    LoginComponent,
    // RegistrationComponent,
    DonationProcessDesComponent,
    WhatHappenDonatebloodComponent,
    FristTimeDonationComponent,
    SelectTimeTodonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
