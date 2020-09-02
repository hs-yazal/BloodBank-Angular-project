// import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonationProcessComponent } from './donation-process/donation-process.component';
import { DonationProcessDesComponent } from './donation-process-des/donation-process-des.component';
import { WhatHappenDonatebloodComponent } from './what-happen-donateblood/what-happen-donateblood.component';
import { FristTimeDonationComponent } from './frist-time-donation/frist-time-donation.component';
import { SelectTimeTodonationComponent } from './select-time-todonation/select-time-todonation.component';


const routes: Routes =
 [
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component: HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contacts',component:ContactsComponent},
   {path:'donation-process',component:DonationProcessComponent},
   { path: 'login', component: LoginComponent },
   { path: 'profile', component: ProfileComponent },
   // { path: 'Register', component: RegistrationComponent },
   {path:'donation_process',component:DonationProcessComponent},
   {path:'donation_process_des',component: DonationProcessDesComponent },
   {path:'what-happen-donateblood',component:WhatHappenDonatebloodComponent},
   {path:"frist-time-donation",component:FristTimeDonationComponent},
   {path:'select-time-todonation',component:SelectTimeTodonationComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
