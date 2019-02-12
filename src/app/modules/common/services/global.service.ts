import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, DoCheck } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {


    data: BehaviorSubject<any[]>;
    result: BehaviorSubject<any[]>;
    user: BehaviorSubject<string>;
    countryinfo: BehaviorSubject<any[]>;
    userinfo: BehaviorSubject<any>;
    businessUnitData: BehaviorSubject<any[]>;
    wtwLegalEntity: BehaviorSubject<any[]>;
    insuranceTypeData: BehaviorSubject<any[]>;

    constructor() {
        this.data = new BehaviorSubject<any>([{ "id": '12345', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New',"createdDate":"02-Jan-18", "country": 'Afganistan;Pakistan;Iran', "status": 'Submitted' },
        { "id": '23456', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New',"createdDate":"12-Jan-18", "country": 'Afganistan;Pakistan;Iran', "status": 'In Process' },
        { "id": '34521', "workStream": 'Iran Sanction', "businessArea": 'IRR', "policyType": 'Renewal',"createdDate":"17-Mar-17", "country": 'Afganistan;Pakistan;Iran', "status": 'Approved' },
        { "id": '34521', "workStream": 'Control Goods', "businessArea": 'Transportation Marin', "policyType": 'New',"createdDate":"09-Dec-17", "country": 'Afganistan;Pakistan;Iran', "status": 'Approved' }
        ]);
        this.result = new BehaviorSubject<any>([{ "id": '12345', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New',"createdDate":"", "country": 'Afganistan;Pakistan;Iran', "status": 'Submitted' },
        { "id": '23456', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New',"createdDate":"12-Jan-18", "country": 'Afganistan;Pakistan;Iran', "status": 'In Process' },
        { "id": '34521', "workStream": 'Iran Sanction', "businessArea": 'IRR', "policyType": 'Renewal',"createdDate":"17-Mar-17", "country": 'Afganistan;Pakistan;Iran', "status": 'Approved' },
        { "id": '34521', "workStream": 'Control Goods', "businessArea": 'Transportation Marin', "policyType": 'New',"createdDate":"09-Dec-17", "country": 'Afganistan;Pakistan;Iran', "status": 'Approved' }
        ]);
        this.wtwLegalEntity = new BehaviorSubject<any>([{ "entityName": 'Wiilis ', "descriptions": 'Afganistan' },
        { "entityName": 'Wiilis Towers Watson ', "descriptions": 'Belarus' },
        { "entityName": 'Towers Watson', "descriptions": 'Ukraine(Crimea)' },
        { "entityName": 'Wiilis Towers Watson ', "descriptions": 'Cuba', },
        { "entityName": 'Wiilis', "descriptions": 'Belarus', }
        ]);
        this.insuranceTypeData = new BehaviorSubject<any>([{ "insuranceTypeName": 'Liability', "insuranceTypeGroup": 'Afganistan', "descriptions": 'Standard' },
        { "insuranceTypeName": 'Property Damage', "insuranceTypeGroup": 'Belarus', "descriptions": 'Payments' },
        { "insuranceTypeName": 'Loss-occurring', "insuranceTypeGroup": 'Ukraine(Crimea)', "descriptions": 'Iran' },
        { "insuranceTypeName": 'Property Damage', "insuranceTypeGroup": 'Cuba', "descriptions": 'Controlled Goods' },
        { "insuranceTypeName": 'Liability', "insuranceTypeGroup": 'Belarus', "descriptions": 'Payments' }
        ]);
        this.countryinfo = new BehaviorSubject<any>([
            { "country": 'India', "countryCode": 'IN', "currencyName": 'Rupees', "currencyCode": '123', "currencySymbol": '$', "Territory": 'Broad', },
            { "country": 'Afghanistan', "countryCode": 'AFN', "currencyName": 'Afghani', "currencyCode": '971', "currencySymbol": 'Af', "Territory": 'Smart', },
            { "country": 'Australia', "countryCode": 'AUD', "currencyName": 'Australian Dollar', "currencyCode": '032', "currencySymbol": '$', "Territory": 'Broad', },
            { "country": 'Brazil', "countryCode": 'BRL', "currencyName": 'Brazilian Real', "currencyCode": '096', "currencySymbol": 'R$', "Territory": 'Smart', },
        ]);
        this.userinfo = new BehaviorSubject<any>([
            { "DisplayName": 'Rahul Yadav', "FirstName": 'Rahul', "LastName": 'Yadav', "Email": 'Rahul.Yadav@capgemini.com', "Role": 'Business', "businessArea": 'CRB(GB)', "Country": 'India', "status": 'Active' },
            { "DisplayName": 'Sagnik Chakraborty', "FirstName": 'Sagnik', "LastName": 'Chakraborty', "Email": 'Sagnik.Chakraborty@capgemini.com', "Role": 'Business', "businessArea": 'CRB(GB)', "Country": 'Iran', "status": 'Inactive' },
            { "DisplayName": 'Apoorva Shindikar', "FirstName": 'Asha', "LastName": 'Borkar', "Email": 'Asha.Borkar@capgemini.com', "Role": 'Sanction', "Business": 'SMART', "businessArea": 'CRB(GB)', "Country": 'Afganisthan', "status": 'Active' },
            { "DisplayName": 'Asha Borkar', "FirstName": 'Asha', "LastName": 'Borkar', "Email": 'asha.Borkar@capgemini.com', "Role": 'Admin', "businessArea": 'CRB(GB)', "Country": 'China', "status": 'Inctive' },
            { "DisplayName": 'Sachi Jain', "FirstName": 'Sachi', "LastName": 'Jain', "Email": 'sachi.jain@capgemini.com', "Role": 'Sanction', "businessArea": 'CRB(GB)', "Country": 'Japan', "status": 'Active' },
        ]);
        this.businessUnitData = new BehaviorSubject<any>([
            { "buName": 'Willis GB - Transportation (Aerospace)', "buCode": 'GB-AR', "buGroup": 'Sanction' },
            { "buName": 'Willis GB - Transportation (Marine)', "buCode": 'GB-MR', "buGroup": 'Sanction' },
            { "buName": 'Willis GB - Transportation (UK Transport)', "buCode": 'GB-UK', "buGroup": 'Business' },
            { "buName": 'Willis GB - P&C (SCS)', "buCode": 'GB-SCS', "buGroup": 'Business' },
            { "buName": 'Willis GB - P&C (PMI Health) / CRB - PMI Health', "buCode": 'GB-PMI', "buGroup": 'Business' },
            { "buName": 'Willis GB - P&C (Faber Global)', "buCode": 'GB-FG', "buGroup": 'Sanction' }
        ]);
        this.countryinfo = new BehaviorSubject<any>([
            { "country": 'India', "countryCode": 'RS', "currencyName": 'Rupees', "currencyCode": '123', "currencySymbol": '$', "Territory": 'Smart', },
            { "country": 'Lebanon', "countryCode": 'LF', "currencyName": 'Lebanese pound', "currencyCode": '971', "currencySymbol": 'lf', "Territory": 'Smart', },
            { "country": 'Myanmar/Burma', "countryCode": 'MY', "currencyName": 'Burmese kyat', "currencyCode": '032', "currencySymbol": 'K', "Territory": 'Smart', },
            { "country": 'Cuba', "countryCode": 'CU', "currencyName": 'Cuban Peso', "currencyCode": '096', "currencySymbol": ' $mn', "Territory": 'Broad', },
            { "country": 'Iran', "countryCode": 'IR', "currencyName": 'Iranian rial', "currencyCode": '096', "currencySymbol": ' ﷼', "Territory": 'Broad', },

        ]);
        this.user = new BehaviorSubject<any>('Business User');
    }

}
