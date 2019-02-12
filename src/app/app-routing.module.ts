import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardSanctionComponent } from './modules/SanctionForms/standard-sanction/standard-sanction.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUSComponent } from './modules/common/footer/contact-us/contact-us.component';
import { ControlledGoodsComponent } from './modules/SanctionForms/controlled-goods/controlled-goods.component';
import { ConsultancyServicesComponent } from './modules/SanctionForms/consultancy-services/consultancy-services.component';
import { IranSanctionsComponent } from './modules/SanctionForms/iran-sanctions/iran-sanctions.component';
import { AmendmentComponent } from './modules/amendment/amendment.component';
import { MyWorkqueueComponent } from './modules/workqueue/myWorkqueue/myWorkqueue.component';
import { MyTeamWorkQueueComponent } from './modules/workqueue/myTeamWorkQueue/myTeamWorkQueue.component';
import { PaymentsComponent } from './modules/SanctionForms/payments/payments.component';
import { CountryComponent } from './modules/admin/country/country.component';
import { AddcountryComponent } from './modules/admin/country/addcountry/addcountry.component';
import { UserComponent } from './modules/admin/user/user.component';
import { BusinessUnitComponent } from './modules/admin/business-unit/searchBusinessUnit/business-unit.component';
import { InsuranceTypeComponent } from './modules/admin/insurance-type/insurance-type.component';
import { WtwLegalEntityComponent } from './modules/admin/wtw-legal-entity/searchLegalEntity/wtw-legal-entity.component';
import { CreateSanctionRequestComponent } from './modules/create-sanction-request/create-sanction-request.component';
import { QmsComponent } from './modules/qms/qms.component';
import { QueryCommentComponent } from './modules/qms/query-comment/query-comment.component';
import { StandardSanctionReviewComponent } from './modules/create-sanction-request/standard-sanction-review/standard-sanction-review.component';
import { DefaultPageComponent } from './shared/default-page/default-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUSComponent },
  {
    path: 'standard-sanction', component: StandardSanctionComponent,
    children: [
      { path: 'controlled-goods', component: ControlledGoodsComponent }
    ]
  },
  { path: 'standard-sanction/:user', component: StandardSanctionComponent },
  { path: 'controlled-goods', component: ControlledGoodsComponent },
  { path: 'controlled-goods/:user', component: ControlledGoodsComponent },
  { path: 'consultancy-services', component: ConsultancyServicesComponent },
  { path: 'iran-sanction', component: IranSanctionsComponent },
  { path: 'iran-sanction/:user', component: IranSanctionsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'my-workqueue', component: MyWorkqueueComponent },
  { path: 'my-team-workqueue', component: MyTeamWorkQueueComponent },
  { path: 'amendment', component: AmendmentComponent },
  { path: 'amendment/:id', component: ControlledGoodsComponent },
  { path: 'business-unit', component: BusinessUnitComponent },
  { path: 'insurance-type', component: InsuranceTypeComponent },
  { path: 'legal-entity', component: WtwLegalEntityComponent },
  { path: 'app-addcountry', component: AddcountryComponent },
  { path: 'app-country', component: CountryComponent },
  { path: 'app-user', component: UserComponent },
  { path: 'create-sanction', component: CreateSanctionRequestComponent },
  { path: 'query-management', component: QmsComponent},
  { path: 'query-comment', component: QueryCommentComponent},
  { path: 'standard-sanction-review', component: StandardSanctionReviewComponent},
  { path: 'default-page', component: DefaultPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
  ContactUSComponent,
  StandardSanctionComponent,
  ControlledGoodsComponent,
  ConsultancyServicesComponent,
  IranSanctionsComponent,
  PaymentsComponent,
  AmendmentComponent,
  MyWorkqueueComponent,
  MyTeamWorkQueueComponent
]
