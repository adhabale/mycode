import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './modules/common/sidenav/sidenav.component';
import { HeaderComponent } from './modules/common/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './modules/common/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MultiSelectWithPreviewComponent } from './shared/components/multi-select-with-preview/multi-select-with-preview.component';
import { DelegateAssignmentDialogComponent } from './modules/workqueue/shared/delegate-assignment-dialog/delegate-assignment-dialog.component';
import { CountryComponent } from './modules/admin/country/country.component';
import { AddcountryComponent } from './modules/admin/country/addcountry/addcountry.component';
import { UserComponent } from './modules/admin/user/user.component';
import { AdduserComponent } from './modules/admin/user/adduser/adduser.component';
import { BusinessUnitComponent } from './modules/admin/business-unit/searchBusinessUnit/business-unit.component';
import { InsuranceTypeComponent } from './modules/admin/insurance-type/insurance-type.component';
import { WtwLegalEntityComponent } from './modules/admin/wtw-legal-entity/searchLegalEntity/wtw-legal-entity.component';
import { EditBuComponent } from './modules/admin/business-unit/searchBusinessUnit/edit-bu/edit-bu.component';
import { EditInsuranceTypeComponent } from './modules/admin/insurance-type/edit-insurance-type/edit-insurance-type.component';
import { EditLegalEntityComponent } from './modules/admin/wtw-legal-entity/edit-legal-entity/edit-legal-entity.component';
import { CreateSanctionRequestComponent } from './modules/create-sanction-request/create-sanction-request.component';
import { StandardSanctionReviewComponent } from './modules/create-sanction-request/standard-sanction-review/standard-sanction-review.component';
import { QmsComponent } from './modules/qms/qms.component';
import { QueryCommentComponent } from './modules/qms/query-comment/query-comment.component';
import { UploadDocComponent } from './modules/SanctionForms/standard-sanction/upload-doc/upload-doc.component';
import { CommentTemplateComponent } from './shared/components/comment-template/comment-template.component';
import {ConsultancyServicesReviewComponent} from './modules/create-sanction-request/consultancy-services-review/consultancy-services-review.component';
import { IranSanctionRewiewComponent } from './modules/create-sanction-request/iran-sanction-rewiew/iran-sanction-rewiew.component';
import { ControlledGoodsReviewComponent } from './modules/create-sanction-request/controlled-goods-review/controlled-goods-review.component';
import { DefaultPageComponent } from './shared/default-page/default-page.component';
import {CustomTableComponent} from './shared/components/custom-table/custom-table.component'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    MultiSelectWithPreviewComponent,
    DelegateAssignmentDialogComponent,
    CountryComponent,
    AddcountryComponent,
    UserComponent,
    AdduserComponent,
    BusinessUnitComponent,
    InsuranceTypeComponent,
    WtwLegalEntityComponent,
    EditBuComponent,
    EditInsuranceTypeComponent,
    EditLegalEntityComponent,
    CreateSanctionRequestComponent,
    StandardSanctionReviewComponent,
    UploadDocComponent,
    QmsComponent,
    QueryCommentComponent,
    CommentTemplateComponent,
    ConsultancyServicesReviewComponent,
    IranSanctionRewiewComponent,
    ControlledGoodsReviewComponent,
    DefaultPageComponent,

    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [CommentTemplateComponent, DelegateAssignmentDialogComponent, AdduserComponent, EditBuComponent, EditInsuranceTypeComponent, EditLegalEntityComponent, UploadDocComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}