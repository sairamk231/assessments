import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
//import * as data from './response.json';

import { Data, RowData, CollectionDetailsResponse, collectionResponseListDef, CollectionUIResponse } from './collection-details-response';
import { environment } from '../environments/environment';


/* You can add global styles to this file, and also import other style files */
//


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  onGridReady($event: GridReadyEvent<CollectionUIResponse, any>) {
    throw new Error('Method not implemented.');
  }

 // userList: any[] = [];
  collectionDetailsResponse?: CollectionDetailsResponse;
  uiRowData?: CollectionUIResponse[] = [];
  collectionResponseListDef: ColDef[] = [...collectionResponseListDef];
  collectionDatalLoaderFlag = false;

   rowData: any;
   data: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBulkCollectionDetailsById();
  }

  getBulkCollectionDetailsById() {
    const apiUrl = 'https://uat.workbench.ul.com/api/Asset/GetBulkCollectionDetailsById?collectionId=fc48dba8-5a23-11ef-9d54-0022489145ad&context=';
    const authToken = environment.authToken;

    const headers = new HttpHeaders({
      'authtoken': authToken
    });
let backendBeforeStartime = new Date().getTime();
//console.log('collection Id before subscribe is  '+this.collectionDetailsResponse?.data?.collectionId);

    this.http.get(apiUrl, { headers }).subscribe((res: any) => {
      let afterBackendTime = new Date().getTime();
      console.log("time to get the response from back end" +(afterBackendTime-backendBeforeStartime));
      this.collectionDetailsResponse = res;
      let collectionResponse: CollectionUIResponse[] = [];
      let count = 0;
      var currentMillSecs = new Date().getTime();
      console.log("current mullise second before building the UI response" + currentMillSecs);
      console.log('collection Id  is  '+this.collectionDetailsResponse?.data?.collectionId);
      this.collectionDetailsResponse?.data.rowData.forEach(row => {
        count++;
        var uiColletion = new CollectionUIResponse();

        uiColletion.count = count;
        uiColletion.collectionId = this.collectionDetailsResponse?.data?.collectionId;
        uiColletion.collectionName = this.collectionDetailsResponse?.data?.collectionAttributes?.collectionName;
        uiColletion.collectionStatus = this.collectionDetailsResponse?.data?.collectionAttributes?.collectionStatus;
        uiColletion.projectNumber = this.collectionDetailsResponse?.data?.collectionAttributes?.projectNumber;
        uiColletion.quoteNumber = this.collectionDetailsResponse?.data?.collectionAttributes?.quoteNumber;
        uiColletion.hierarchyId = this.collectionDetailsResponse?.data?.attributeProperties?.hierarchyId;
        uiColletion.metadataId = this.collectionDetailsResponse?.data?.attributeProperties?.metadataId;

        uiColletion.assetId = row?.assetId;
        uiColletion.assetStatus = row?.assetStatus;
      //console.log("----=====",uiColletion.assetId);

        uiColletion.modelNomenClatureAttributeID = row?.modelNomenclature?.attributeId;
        uiColletion.modelNomenClatureParentSeq = row?.modelNomenclature?.parentSeq;
        uiColletion.modelNomenclatureDataParamName = row?.modelNomenclature?.dataParamName;
        uiColletion.modelNomenclatureName = row?.modelNomenclature?.name;
        uiColletion.modelNomenclatureChildSeq = row?.modelNomenclature?.childSeq;
        uiColletion.modelNomenclatureValue = row?.modelNomenclature?.value;
        uiColletion.modelNomenclatureSeq = row?.modelNomenclature?.seq;
      
       // console.log('row',  uiColletion.modelNomenclature.attributeId);

        uiColletion.dG4RatingNotesAttributeId = row?.dG4RatingNotes?.attributeId;
        uiColletion.dG4RatingNotesParentSeq = row?.dG4RatingNotes?.parentSeq;
        uiColletion.dG4RatingNotesDataParamName = row?.dG4RatingNotes?.dataParamName;
        uiColletion.dG4RatingNotesName = row?.dG4RatingNotes?.name;
        uiColletion.dG4RatingNotesChildSeq = row?.dG4RatingNotes?.childSeq;
        uiColletion.dG4RatingNotesUniqueAttributeId = row?.dG4RatingNotes?.uniqueAttributeId;
        uiColletion.dG4RatingNotesValue = row?.dG4RatingNotes?.value;
        uiColletion.dG4RatingNotesSeq = row?.dG4RatingNotes?.seq;

        uiColletion.mainBreakerMinimumRatedCurrentDG1AttributeId = row?.mainBreakerMinimumRatedCurrentDG1?.attributeId;
        uiColletion.mainBreakerMinimumRatedCurrentDG1ParentSeq = row?.mainBreakerMinimumRatedCurrentDG1?.parentSeq;
        uiColletion.mainBreakerMinimumRatedCurrentDG1DataParamName = row?.mainBreakerMinimumRatedCurrentDG1?.dataParamName;
        uiColletion.mainBreakerMinimumRatedCurrentDG1Name = row?.mainBreakerMinimumRatedCurrentDG1?.name;
        uiColletion.mainBreakerMinimumRatedCurrentDG1ChildSeq = row?.mainBreakerMinimumRatedCurrentDG1?.childSeq;
        uiColletion.mainBreakerMinimumRatedCurrentDG1UniqueAttributeId = row?.mainBreakerMinimumRatedCurrentDG1?.uniqueAttributeId;
        uiColletion.mainBreakerMinimumRatedCurrentDG1Value = row?.mainBreakerMinimumRatedCurrentDG1?.value;
        uiColletion.mainBreakerMinimumRatedCurrentDG1Seq = row?.mainBreakerMinimumRatedCurrentDG1?.seq;

        uiColletion.tenantBreakerMinimumRatedCurrentDG3AttributeId = row?.tenantBreakerMinimumRatedCurrentDG3?.attributeId;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3ParentSeq = row?.tenantBreakerMinimumRatedCurrentDG3?.parentSeq;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3DataParamName = row?.tenantBreakerMinimumRatedCurrentDG3?.dataParamName;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3Name = row?.tenantBreakerMinimumRatedCurrentDG3?.name;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3ChildSeq = row?.tenantBreakerMinimumRatedCurrentDG3?.childSeq;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3UniqueAttributeId = row?.tenantBreakerMinimumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3Value = row?.tenantBreakerMinimumRatedCurrentDG3?.value;
        uiColletion.tenantBreakerMinimumRatedCurrentDG3Seq = row?.tenantBreakerMinimumRatedCurrentDG3?.seq;

        uiColletion.dG1RatingNotesAttributeId = row?.dG1RatingNotes?.attributeId;
        uiColletion.dG1RatingNotesParentSeq = row?.dG1RatingNotes?.parentSeq;
        uiColletion.dG1RatingNotesDataParamName = row?.dG1RatingNotes?.dataParamName;
        uiColletion.dG1RatingNotesName = row?.dG1RatingNotes?.name;
        uiColletion.dG1RatingNotesChildSeq = row?.dG1RatingNotes?.childSeq;
        uiColletion.dG1RatingNotesUniqueAttributeId = row?.dG1RatingNotes?.uniqueAttributeId;
        uiColletion.dG1RatingNotesValue = row?.dG1RatingNotes?.value;
        uiColletion.dG1RatingNotesSeq = row?.dG1RatingNotes?.seq;

        uiColletion.cCNAttributeId = row?.cCN?.attributeId;
        uiColletion.cCNParentSeq = row?.cCN?.parentSeq;
        uiColletion.cCNDataParamName = row?.cCN?.dataParamName;
        uiColletion.cCNName = row?.cCN?.name;
        uiColletion.cCNChildSeq = row?.cCN?.childSeq;
        uiColletion.cCNUniqueAttributeId = row?.cCN?.uniqueAttributeId;
        uiColletion.cCNValue = row?.cCN?.value;
        uiColletion.cCNSeq = row?.cCN?.seq;

        uiColletion.mainBreakerTypeDG3AttributeId = row?.mainBreakerTypeDG3?.attributeId;
        uiColletion.mainBreakerTypeDG3ParentSeq = row?.mainBreakerTypeDG3?.parentSeq;
        uiColletion.mainBreakerTypeDG3DataParamName = row?.mainBreakerTypeDG3?.dataParamName;
        uiColletion.mainBreakerTypeDG3Name = row?.mainBreakerTypeDG3?.name;
        uiColletion.mainBreakerTypeDG3ChildSeq = row?.mainBreakerTypeDG3?.childSeq;
        uiColletion.mainBreakerTypeDG3UniqueAttributeId = row?.mainBreakerTypeDG3?.uniqueAttributeId;
        uiColletion.mainBreakerTypeDG3Value = row?.mainBreakerTypeDG3?.value;
        uiColletion.mainBreakerTypeDG3Seq = row?.mainBreakerTypeDG3?.seq;

        uiColletion.mainBreakerTypeDG1AttributeId = row?.mainBreakerTypeDG1?.attributeId;
        uiColletion.mainBreakerTypeDG1ParentSeq = row?.mainBreakerTypeDG1?.parentSeq;
        uiColletion.mainBreakerTypeDG1DataParamName = row?.mainBreakerTypeDG1?.dataParamName;
        uiColletion.mainBreakerTypeDG1Name = row?.mainBreakerTypeDG1?.name;
        uiColletion.mainBreakerTypeDG1ChildSeq = row?.mainBreakerTypeDG1?.childSeq;
        uiColletion.mainBreakerTypeDG1UniqueAttributeId = row?.mainBreakerTypeDG1?.uniqueAttributeId;
        uiColletion.mainBreakerTypeDG1Value = row?.mainBreakerTypeDG1?.value;
        uiColletion.mainBreakerTypeDG1Seq = row?.mainBreakerTypeDG1?.seq;

        uiColletion.referenceNumberAttributeId = row?.referenceNumber?.attributeId;
        uiColletion.referenceNumberParentSeq = row?.referenceNumber?.parentSeq;
        uiColletion.referenceNumberDataParamName = row?.referenceNumber?.dataParamName;
        uiColletion.referenceNumberName = row?.referenceNumber?.name;
        uiColletion.referenceNumberChildSeq = row?.referenceNumber?.childSeq;
        uiColletion.referenceNumberUniqueAttributeId = row?.referenceNumber?.uniqueAttributeId;
        uiColletion.referenceNumberValue = row?.referenceNumber?.value;
        uiColletion.referenceNumberSeq = row?.referenceNumber?.seq;

        uiColletion.tenantBreakerMinimumRatedCurrentDG4AttributeId = row?.tenantBreakerMinimumRatedCurrentDG4?.attributeId;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4ParentSeq = row?.tenantBreakerMinimumRatedCurrentDG4?.parentSeq;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4DataParamName = row?.tenantBreakerMinimumRatedCurrentDG4?.dataParamName;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4Name = row?.tenantBreakerMinimumRatedCurrentDG4?.name;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4ChildSeq = row?.tenantBreakerMinimumRatedCurrentDG4?.childSeq;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4UniqueAttributeId = row?.tenantBreakerMinimumRatedCurrentDG4?.uniqueAttributeId;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4Value = row?.tenantBreakerMinimumRatedCurrentDG4?.value;
        uiColletion.tenantBreakerMinimumRatedCurrentDG4Seq = row?.tenantBreakerMinimumRatedCurrentDG4?.seq;

        uiColletion.tenantBreakerTypeDG4AttributeId = row?.tenantBreakerTypeDG4?.attributeId;
        uiColletion.tenantBreakerTypeDG4ParentSeq = row?.tenantBreakerTypeDG4?.parentSeq;
        uiColletion.tenantBreakerTypeDG4DataParamName = row?.tenantBreakerTypeDG4?.dataParamName;
        uiColletion.tenantBreakerTypeDG4Name = row?.tenantBreakerTypeDG4?.name;
        uiColletion.tenantBreakerTypeDG4ChildSeq = row?.tenantBreakerTypeDG4?.childSeq;
        uiColletion.tenantBreakerTypeDG4UniqueAttributeId = row?.tenantBreakerTypeDG4?.uniqueAttributeId;
        uiColletion.tenantBreakerTypeDG4Value = row?.tenantBreakerTypeDG4?.value;
        uiColletion.tenantBreakerTypeDG4Seq = row?.tenantBreakerTypeDG4?.seq;

        uiColletion.tenantBreakerTypeDG3AttributeId = row?.tenantBreakerTypeDG3?.attributeId;
        uiColletion.tenantBreakerTypeDG3ParentSeq = row?.tenantBreakerTypeDG3?.parentSeq;
        uiColletion.tenantBreakerTypeDG3DataParamName = row?.tenantBreakerTypeDG3?.dataParamName;
        uiColletion.tenantBreakerTypeDG3Name = row?.tenantBreakerTypeDG3?.name;
        uiColletion.tenantBreakerTypeDG3ChildSeq = row?.tenantBreakerTypeDG3?.childSeq;
        uiColletion.tenantBreakerTypeDG3UniqueAttributeId = row?.tenantBreakerTypeDG3?.uniqueAttributeId;
        uiColletion.tenantBreakerTypeDG3Value = row?.tenantBreakerTypeDG3?.value;
        uiColletion.tenantBreakerTypeDG3Seq = row?.tenantBreakerTypeDG3?.seq;

        uiColletion.certificationDateAttributeId = row?.certificationDate?.attributeId;
        uiColletion.certificationDateParentSeq = row?.certificationDate?.parentSeq;
        uiColletion.certificationDateDataParamName = row?.certificationDate?.dataParamName;
        uiColletion.certificationDateName = row?.certificationDate?.name;
        uiColletion.certificationDateChildSeq = row?.certificationDate?.childSeq;
        uiColletion.certificationDateUniqueAttributeId = row?.certificationDate?.uniqueAttributeId;
        uiColletion.certificationDateValue = row?.certificationDate?.value;
        uiColletion.certificationDateSeq = row?.certificationDate?.seq;

        uiColletion.tenantBreakerNumberofPolesDG3AttributeId = row?.tenantBreakerNumberofPolesDG3?.attributeId;
        uiColletion.tenantBreakerNumberofPolesDG3ParentSeq = row?.tenantBreakerNumberofPolesDG3?.parentSeq;
        uiColletion.tenantBreakerNumberofPolesDG3DataParamName = row?.tenantBreakerNumberofPolesDG3?.dataParamName;
        uiColletion.tenantBreakerNumberofPolesDG3Name = row?.tenantBreakerNumberofPolesDG3?.name;
        uiColletion.tenantBreakerNumberofPolesDG3ChildSeq = row?.tenantBreakerNumberofPolesDG3?.childSeq;
        uiColletion.tenantBreakerNumberofPolesDG3UniqueAttributeId = row?.tenantBreakerNumberofPolesDG3?.uniqueAttributeId;
        uiColletion.tenantBreakerNumberofPolesDG3Value = row?.tenantBreakerNumberofPolesDG3?.value;
        uiColletion.tenantBreakerNumberofPolesDG3Seq = row?.tenantBreakerNumberofPolesDG3?.seq;

        uiColletion.creationDateAttributeId = row?.creationDate?.attributeId;
        uiColletion.creationDateParentSeq = row?.creationDate?.parentSeq;
        uiColletion.creationDateDataParamName = row?.creationDate?.dataParamName;
        uiColletion.creationDateName = row?.creationDate?.name;
        uiColletion.creationDateChildSeq = row?.creationDate?.childSeq;
        uiColletion.creationDateUniqueAttributeId = row?.creationDate?.uniqueAttributeId;
        uiColletion.creationDateValue = row?.creationDate?.value;
        uiColletion.creationDateSeq = row?.creationDate?.seq;

        uiColletion.mainBreakerMaximumRatedCurrentDG3AttributeId = row?.mainBreakerMaximumRatedCurrentDG3?.attributeId;
        uiColletion.mainBreakerMaximumRatedCurrentDG3ParentSeq = row?.mainBreakerMaximumRatedCurrentDG3?.parentSeq;
        uiColletion.mainBreakerMaximumRatedCurrentDG3DataParamName = row?.mainBreakerMaximumRatedCurrentDG3?.dataParamName;
        uiColletion.mainBreakerMaximumRatedCurrentDG3Name = row?.mainBreakerMaximumRatedCurrentDG3?.name;
        uiColletion.mainBreakerMaximumRatedCurrentDG3ChildSeq = row?.mainBreakerMaximumRatedCurrentDG3?.childSeq;
        uiColletion.mainBreakerMaximumRatedCurrentDG3UniqueAttributeId = row?.mainBreakerMaximumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.mainBreakerMaximumRatedCurrentDG3Value = row?.mainBreakerMaximumRatedCurrentDG3?.value;
        uiColletion.mainBreakerMaximumRatedCurrentDG3Seq = row?.mainBreakerMaximumRatedCurrentDG3?.seq;

        uiColletion.mainBreakerMaximumRatedCurrentDG1AttributeId = row?.mainBreakerMaximumRatedCurrentDG1?.attributeId;
        uiColletion.mainBreakerMaximumRatedCurrentDG1ParentSeq = row?.mainBreakerMaximumRatedCurrentDG1?.parentSeq;
        uiColletion.mainBreakerMaximumRatedCurrentDG1DataParamName = row?.mainBreakerMaximumRatedCurrentDG1?.dataParamName;
        uiColletion.mainBreakerMaximumRatedCurrentDG1Name = row?.mainBreakerMaximumRatedCurrentDG1?.name;
        uiColletion.mainBreakerMaximumRatedCurrentDG1ChildSeq = row?.mainBreakerMaximumRatedCurrentDG1?.childSeq;
        uiColletion.mainBreakerMaximumRatedCurrentDG1UniqueAttributeId = row?.mainBreakerMaximumRatedCurrentDG1?.uniqueAttributeId;
        uiColletion.mainBreakerMaximumRatedCurrentDG1Value = row?.mainBreakerMaximumRatedCurrentDG1?.value;
        uiColletion.mainBreakerMaximumRatedCurrentDG1Seq = row?.mainBreakerMaximumRatedCurrentDG1?.seq;

        uiColletion.tenantBreakerNumberofPolesDG4AttributeId = row?.tenantBreakerNumberofPolesDG4?.attributeId;
        uiColletion.tenantBreakerNumberofPolesDG4ParentSeq = row?.tenantBreakerNumberofPolesDG4?.parentSeq;
        uiColletion.tenantBreakerNumberofPolesDG4DataParamName = row?.tenantBreakerNumberofPolesDG4?.dataParamName;
        uiColletion.tenantBreakerNumberofPolesDG4Name = row?.tenantBreakerNumberofPolesDG4?.name;
        uiColletion.tenantBreakerNumberofPolesDG4ChildSeq = row?.tenantBreakerNumberofPolesDG4?.childSeq;
        uiColletion.tenantBreakerNumberofPolesDG4UniqueAttributeId = row?.tenantBreakerNumberofPolesDG4?.uniqueAttributeId;
        uiColletion.tenantBreakerNumberofPolesDG4Value = row?.tenantBreakerNumberofPolesDG4?.value;
        uiColletion.tenantBreakerNumberofPolesDG4Seq = row?.tenantBreakerNumberofPolesDG4?.seq;

        uiColletion.mainBreakerLimiterTypeDG1AttributeId = row?.mainBreakerLimiterTypeDG1?.attributeId;
        uiColletion.mainBreakerLimiterTypeDG1ParentSeq = row?.mainBreakerLimiterTypeDG1?.parentSeq;
        uiColletion.mainBreakerLimiterTypeDG1DataParamName = row?.mainBreakerLimiterTypeDG1?.dataParamName;
        uiColletion.mainBreakerLimiterTypeDG1Name = row?.mainBreakerLimiterTypeDG1?.name;
        uiColletion.mainBreakerLimiterTypeDG1ChildSeq = row?.mainBreakerLimiterTypeDG1?.childSeq;
        uiColletion.mainBreakerLimiterTypeDG1UniqueAttributeId = row?.mainBreakerLimiterTypeDG1?.uniqueAttributeId;
        uiColletion.mainBreakerLimiterTypeDG1Value = row?.mainBreakerLimiterTypeDG1?.value;
        uiColletion.mainBreakerLimiterTypeDG1Seq = row?.mainBreakerLimiterTypeDG1?.seq;

        uiColletion.seriesInterruptingVoltageRating_RMSDG1AttributeId = row?.seriesInterruptingVoltageRating_RMSDG1?.attributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1ParentSeq = row?.seriesInterruptingVoltageRating_RMSDG1?.parentSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1DataParamName = row?.seriesInterruptingVoltageRating_RMSDG1?.dataParamName;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1Name = row?.seriesInterruptingVoltageRating_RMSDG1?.name;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1ChildSeq = row?.seriesInterruptingVoltageRating_RMSDG1?.childSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1UniqueAttributeId = row?.seriesInterruptingVoltageRating_RMSDG1?.uniqueAttributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1Value = row?.seriesInterruptingVoltageRating_RMSDG1?.value;
        uiColletion.seriesInterruptingVoltageRating_RMSDG1Seq = row?.seriesInterruptingVoltageRating_RMSDG1?.seq;

        uiColletion.seriesInterruptingVoltageRating_RMSDG2AttributeId = row?.seriesInterruptingVoltageRating_RMSDG2?.attributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2ParentSeq = row?.seriesInterruptingVoltageRating_RMSDG2?.parentSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2DataParamName = row?.seriesInterruptingVoltageRating_RMSDG2?.dataParamName;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2Name = row?.seriesInterruptingVoltageRating_RMSDG2?.name;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2ChildSeq = row?.seriesInterruptingVoltageRating_RMSDG2?.childSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2UniqueAttributeId = row?.seriesInterruptingVoltageRating_RMSDG2?.uniqueAttributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2Value = row?.seriesInterruptingVoltageRating_RMSDG2?.value;
        uiColletion.seriesInterruptingVoltageRating_RMSDG2Seq = row?.seriesInterruptingVoltageRating_RMSDG2?.seq;

        uiColletion.seriesInterruptingVoltageRating_RMSDG3AttributeId = row?.seriesInterruptingVoltageRating_RMSDG3?.attributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3ParentSeq = row?.seriesInterruptingVoltageRating_RMSDG3?.parentSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3DataParamName = row?.seriesInterruptingVoltageRating_RMSDG3?.dataParamName;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3Name = row?.seriesInterruptingVoltageRating_RMSDG3?.name;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3ChildSeq = row?.seriesInterruptingVoltageRating_RMSDG3?.childSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3UniqueAttributeId = row?.seriesInterruptingVoltageRating_RMSDG3?.uniqueAttributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3Value = row?.seriesInterruptingVoltageRating_RMSDG3?.value;
        uiColletion.seriesInterruptingVoltageRating_RMSDG3Seq = row?.seriesInterruptingVoltageRating_RMSDG3?.seq;

        uiColletion.dG2RatingNotesAttributeId = row?.dG2RatingNotes?.attributeId;
        uiColletion.dG2RatingNotesParentSeq = row?.dG2RatingNotes?.parentSeq;
        uiColletion.dG2RatingNotesDataParamName= row?.dG2RatingNotes?.dataParamName;
        uiColletion.dG2RatingNotesName= row?.dG2RatingNotes?.name;
        uiColletion.dG2RatingNotesChildSeq = row?.dG2RatingNotes?.childSeq;
        uiColletion.dG2RatingNotesUniqueAttributeId = row?.dG2RatingNotes?.uniqueAttributeId;
        uiColletion.dG2RatingNotesValue = row?.dG2RatingNotes?.value;
        uiColletion.dG2RatingNotesSeq = row?.dG2RatingNotes?.seq;

        uiColletion.cULAttributeId = row?.cUL?.attributeId;
        uiColletion.cULParentSeq = row?.cUL?.parentSeq;
        uiColletion.cULDataParamName= row?.cUL?.dataParamName;
        uiColletion.cULName= row?.cUL?.name;
        uiColletion.cULChildSeq = row?.cUL?.childSeq;
        uiColletion.cULUniqueAttributeId = row?.cUL?.uniqueAttributeId;
        uiColletion.cULValue = row?.cUL?.value;
        uiColletion.cULSeq = row?.cUL?.seq;

        uiColletion.seriesInterruptingVoltageRating_RMSDG4AttributeId = row?.seriesInterruptingVoltageRating_RMSDG4?.attributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4ParentSeq = row?.seriesInterruptingVoltageRating_RMSDG4?.parentSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4DataParamName= row?.seriesInterruptingVoltageRating_RMSDG4?.dataParamName;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4Name= row?.seriesInterruptingVoltageRating_RMSDG4?.name;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4ChildSeq = row?.seriesInterruptingVoltageRating_RMSDG4?.childSeq;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4UniqueAttributeId = row?.seriesInterruptingVoltageRating_RMSDG4?.uniqueAttributeId;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4Value = row?.seriesInterruptingVoltageRating_RMSDG4?.value;
        uiColletion.seriesInterruptingVoltageRating_RMSDG4Seq = row?.seriesInterruptingVoltageRating_RMSDG4?.seq;

        uiColletion.interruptingPhasesDG4AttributeId = row?.interruptingPhasesDG4?.attributeId;
        uiColletion.interruptingPhasesDG4ParentSeq = row?.interruptingPhasesDG4?.parentSeq;
        uiColletion.interruptingPhasesDG4DataParamName= row?.interruptingPhasesDG4?.dataParamName;
        uiColletion.interruptingPhasesDG4Name= row?.interruptingPhasesDG4?.name;
        uiColletion.interruptingPhasesDG4ChildSeq = row?.interruptingPhasesDG4?.childSeq;
        uiColletion.interruptingPhasesDG4UniqueAttributeId = row?.interruptingPhasesDG4?.uniqueAttributeId;
        uiColletion.interruptingPhasesDG4Value = row?.interruptingPhasesDG4?.value;
        uiColletion.interruptingPhasesDG4Seq = row?.interruptingPhasesDG4?.seq;

        uiColletion.interruptingPhasesDG3AttributeId = row?.interruptingPhasesDG3?.attributeId;
        uiColletion.interruptingPhasesDG3ParentSeq = row?.interruptingPhasesDG3?.parentSeq;
        uiColletion.interruptingPhasesDG3DataParamName= row?.interruptingPhasesDG3?.dataParamName;
        uiColletion.interruptingPhasesDG3Name= row?.interruptingPhasesDG3?.name;
        uiColletion.interruptingPhasesDG3ChildSeq = row?.interruptingPhasesDG3?.childSeq;
        uiColletion.interruptingPhasesDG3UniqueAttributeId = row?.interruptingPhasesDG3?.uniqueAttributeId;
        uiColletion.interruptingPhasesDG3Value = row?.interruptingPhasesDG3?.value;
        uiColletion.interruptingPhasesDG3Seq = row?.interruptingPhasesDG3?.seq;

        uiColletion.interruptingPhasesDG2AttributeId = row?.interruptingPhasesDG2?.attributeId;
        uiColletion.interruptingPhasesDG2ParentSeq = row?.interruptingPhasesDG2?.parentSeq;
        uiColletion.interruptingPhasesDG2DataParamName= row?.interruptingPhasesDG2?.dataParamName;
        uiColletion.interruptingPhasesDG2Name= row?.interruptingPhasesDG2?.name;
        uiColletion.interruptingPhasesDG2ChildSeq = row?.interruptingPhasesDG2?.childSeq;
        uiColletion.interruptingPhasesDG2UniqueAttributeId = row?.interruptingPhasesDG2?.uniqueAttributeId;
        uiColletion.interruptingPhasesDG2Value = row?.interruptingPhasesDG2?.value;
        uiColletion.interruptingPhasesDG2Seq = row?.interruptingPhasesDG2?.seq;

        uiColletion.mainFuseClassDG2AttributeId = row?.mainFuseClassDG2?.attributeId;
        uiColletion.mainFuseClassDG2ParentSeq = row?.mainFuseClassDG2?.parentSeq;
        uiColletion.mainFuseClassDG2DataParamName= row?.mainFuseClassDG2?.dataParamName;
        uiColletion.mainFuseClassDG2Name= row?.mainFuseClassDG2?.name;
        uiColletion.mainFuseClassDG2ChildSeq = row?.mainFuseClassDG2?.childSeq;
        uiColletion.mainFuseClassDG2UniqueAttributeId = row?.mainFuseClassDG2?.uniqueAttributeId;
        uiColletion.mainFuseClassDG2Value = row?.mainFuseClassDG2?.value;
        uiColletion.mainFuseClassDG2Seq = row?.mainFuseClassDG2?.seq;

        uiColletion.mainFuseClassDG4AttributeId = row?.mainFuseClassDG4?.attributeId;
        uiColletion.mainFuseClassDG4ParentSeq = row?.mainFuseClassDG4?.parentSeq;
        uiColletion.mainFuseClassDG4DataParamName= row?.mainFuseClassDG4?.dataParamName;
        uiColletion.mainFuseClassDG4Name= row?.mainFuseClassDG4?.name;
        uiColletion.mainFuseClassDG4ChildSeq = row?.mainFuseClassDG4?.childSeq;
        uiColletion.mainFuseClassDG4UniqueAttributeId = row?.mainFuseClassDG4?.uniqueAttributeId;
        uiColletion.mainFuseClassDG4Value = row?.mainFuseClassDG4?.value;
        uiColletion.mainFuseClassDG4Seq = row?.mainFuseClassDG4?.seq;

        uiColletion.branchMinimumRatedCurrentDG4AttributeId = row?.branchMinimumRatedCurrentDG4?.attributeId;
        uiColletion.branchMinimumRatedCurrentDG4ParentSeq = row?.branchMinimumRatedCurrentDG4?.parentSeq;
        uiColletion.branchMinimumRatedCurrentDG4DataParamName= row?.branchMinimumRatedCurrentDG4?.dataParamName;
        uiColletion.branchMinimumRatedCurrentDG4Name= row?.branchMinimumRatedCurrentDG4?.name;
        uiColletion.branchMinimumRatedCurrentDG4ChildSeq = row?.branchMinimumRatedCurrentDG4?.childSeq;
        uiColletion.branchMinimumRatedCurrentDG4UniqueAttributeId = row?.branchMinimumRatedCurrentDG4?.uniqueAttributeId;
        uiColletion.branchMinimumRatedCurrentDG4Value = row?.branchMinimumRatedCurrentDG4?.value;
        uiColletion.branchMinimumRatedCurrentDG4Seq = row?.branchMinimumRatedCurrentDG4?.seq;

        uiColletion.interruptingPhasesDG1AttributeId = row?.interruptingPhasesDG1?.attributeId;
        uiColletion.interruptingPhasesDG1ParentSeq = row?.interruptingPhasesDG1?.parentSeq;
        uiColletion.interruptingPhasesDG1DataParamName= row?.interruptingPhasesDG1?.dataParamName;
        uiColletion.interruptingPhasesDG1Name= row?.interruptingPhasesDG1?.name;
        uiColletion.interruptingPhasesDG1ChildSeq = row?.interruptingPhasesDG1?.childSeq;
        uiColletion.interruptingPhasesDG1UniqueAttributeId = row?.interruptingPhasesDG1?.uniqueAttributeId;
        uiColletion.interruptingPhasesDG1Value = row?.interruptingPhasesDG1?.value;
        uiColletion.interruptingPhasesDG1Seq = row?.interruptingPhasesDG1?.seq;

        uiColletion.seriesInterruptingCurrentRating_RMSDG1AttributeId = row?.seriesInterruptingCurrentRating_RMSDG1?.attributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1ParentSeq = row?.seriesInterruptingCurrentRating_RMSDG1?.parentSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1DataParamName= row?.seriesInterruptingCurrentRating_RMSDG1?.dataParamName;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1Name= row?.seriesInterruptingCurrentRating_RMSDG1?.name;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1ChildSeq = row?.seriesInterruptingCurrentRating_RMSDG1?.childSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1UniqueAttributeId = row?.seriesInterruptingCurrentRating_RMSDG1?.uniqueAttributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1Value = row?.seriesInterruptingCurrentRating_RMSDG1?.value;
        uiColletion.seriesInterruptingCurrentRating_RMSDG1Seq = row?.seriesInterruptingCurrentRating_RMSDG1?.seq;

        uiColletion.branchMinimumRatedCurrentDG3AttributeId = row?.branchMinimumRatedCurrentDG3?.attributeId;
        uiColletion.branchMinimumRatedCurrentDG3ParentSeq = row?.branchMinimumRatedCurrentDG3?.parentSeq;
        uiColletion.branchMinimumRatedCurrentDG3DataParamName= row?.branchMinimumRatedCurrentDG3?.dataParamName;
        uiColletion.branchMinimumRatedCurrentDG3Name= row?.branchMinimumRatedCurrentDG3?.name;
        uiColletion.branchMinimumRatedCurrentDG3ChildSeq = row?.branchMinimumRatedCurrentDG3?.childSeq;
        uiColletion.branchMinimumRatedCurrentDG3UniqueAttributeId = row?.branchMinimumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.branchMinimumRatedCurrentDG3Value = row?.branchMinimumRatedCurrentDG3?.value;
        uiColletion.branchMinimumRatedCurrentDG3Seq = row?.branchMinimumRatedCurrentDG3?.seq;

        uiColletion.dG3RatingNotesAttributeId = row?.dG3RatingNotes?.attributeId;
        uiColletion.dG3RatingNotesParentSeq = row?.dG3RatingNotes?.parentSeq;
        uiColletion.dG3RatingNotesDataParamName= row?.dG3RatingNotes?.dataParamName;
        uiColletion.dG3RatingNotesName= row?.dG3RatingNotes?.name;
        uiColletion.dG3RatingNotesChildSeq = row?.dG3RatingNotes?.childSeq;
        uiColletion.dG3RatingNotesUniqueAttributeId = row?.dG3RatingNotes?.uniqueAttributeId;
        uiColletion.dG3RatingNotesValue = row?.dG3RatingNotes?.value;
        uiColletion.dG3RatingNotesSeq = row?.dG3RatingNotes?.seq;

        uiColletion.branchMinimumRatedCurrentDG2AttributeId = row?.branchMinimumRatedCurrentDG2?.attributeId;
        uiColletion.branchMinimumRatedCurrentDG2ParentSeq = row?.branchMinimumRatedCurrentDG2?.parentSeq;
        uiColletion.branchMinimumRatedCurrentDG2DataParamName= row?.branchMinimumRatedCurrentDG2?.dataParamName;
        uiColletion.branchMinimumRatedCurrentDG2Name= row?.branchMinimumRatedCurrentDG2?.name;
        uiColletion.branchMinimumRatedCurrentDG2ChildSeq = row?.branchMinimumRatedCurrentDG2?.childSeq;
        uiColletion.branchMinimumRatedCurrentDG2UniqueAttributeId = row?.branchMinimumRatedCurrentDG2?.uniqueAttributeId;
        uiColletion.branchMinimumRatedCurrentDG2Value = row?.branchMinimumRatedCurrentDG2?.value;
        uiColletion.branchMinimumRatedCurrentDG2Seq = row?.branchMinimumRatedCurrentDG2?.seq;

        uiColletion.branchMinimumRatedCurrentDG1AttributeId = row?.branchMinimumRatedCurrentDG1?.attributeId;
        uiColletion.branchMinimumRatedCurrentDG1ParentSeq = row?.branchMinimumRatedCurrentDG1?.parentSeq;
        uiColletion.branchMinimumRatedCurrentDG1DataParamName= row?.branchMinimumRatedCurrentDG1?.dataParamName;
        uiColletion.branchMinimumRatedCurrentDG1Name= row?.branchMinimumRatedCurrentDG1?.name;
        uiColletion.branchMinimumRatedCurrentDG1ChildSeq = row?.branchMinimumRatedCurrentDG1?.childSeq;
        uiColletion.branchMinimumRatedCurrentDG1UniqueAttributeId = row?.branchMinimumRatedCurrentDG1?.uniqueAttributeId;
        uiColletion.branchMinimumRatedCurrentDG1Value = row?.branchMinimumRatedCurrentDG1?.value;
        uiColletion.branchMinimumRatedCurrentDG1Seq = row?.branchMinimumRatedCurrentDG1?.seq;

        uiColletion.seriesInterruptingCurrentRating_RMSDG3AttributeId = row?.seriesInterruptingCurrentRating_RMSDG3?.attributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3ParentSeq = row?.seriesInterruptingCurrentRating_RMSDG3?.parentSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3DataParamName= row?.seriesInterruptingCurrentRating_RMSDG3?.dataParamName;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3Name= row?.seriesInterruptingCurrentRating_RMSDG3?.name;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3ChildSeq = row?.seriesInterruptingCurrentRating_RMSDG3?.childSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3UniqueAttributeId = row?.seriesInterruptingCurrentRating_RMSDG3?.uniqueAttributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3Value = row?.seriesInterruptingCurrentRating_RMSDG3?.value;
        uiColletion.seriesInterruptingCurrentRating_RMSDG3Seq = row?.seriesInterruptingCurrentRating_RMSDG3?.seq;

        uiColletion.seriesInterruptingCurrentRating_RMSDG2AttributeId = row?.seriesInterruptingCurrentRating_RMSDG2?.attributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2ParentSeq = row?.seriesInterruptingCurrentRating_RMSDG2?.parentSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2DataParamName= row?.seriesInterruptingCurrentRating_RMSDG2?.dataParamName;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2Name= row?.seriesInterruptingCurrentRating_RMSDG2?.name;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2ChildSeq = row?.seriesInterruptingCurrentRating_RMSDG2?.childSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2UniqueAttributeId = row?.seriesInterruptingCurrentRating_RMSDG2?.uniqueAttributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2Value = row?.seriesInterruptingCurrentRating_RMSDG2?.value;
        uiColletion.seriesInterruptingCurrentRating_RMSDG2Seq = row?.seriesInterruptingCurrentRating_RMSDG2?.seq;

        uiColletion.mainBreakerNumberofPolesDG3AttributeId = row?.mainBreakerNumberofPolesDG3?.attributeId;
        uiColletion.mainBreakerNumberofPolesDG3ParentSeq = row?.mainBreakerNumberofPolesDG3?.parentSeq;
        uiColletion.mainBreakerNumberofPolesDG3DataParamName= row?.mainBreakerNumberofPolesDG3?.dataParamName;
        uiColletion.mainBreakerNumberofPolesDG3Name= row?.mainBreakerNumberofPolesDG3?.name;
        uiColletion.mainBreakerNumberofPolesDG3ChildSeq = row?.mainBreakerNumberofPolesDG3?.childSeq;
        uiColletion.mainBreakerNumberofPolesDG3UniqueAttributeId = row?.mainBreakerNumberofPolesDG3?.uniqueAttributeId;
        uiColletion.mainBreakerNumberofPolesDG3Value = row?.mainBreakerNumberofPolesDG3?.value;
        uiColletion.mainBreakerNumberofPolesDG3Seq = row?.mainBreakerNumberofPolesDG3?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchMaximumRatedCurrentDG3AttributeId = row?.branchMaximumRatedCurrentDG3?.attributeId;
        uiColletion.branchMaximumRatedCurrentDG3ParentSeq = row?.branchMaximumRatedCurrentDG3?.parentSeq;
        uiColletion.branchMaximumRatedCurrentDG3DataParamName= row?.branchMaximumRatedCurrentDG3?.dataParamName;
        uiColletion.branchMaximumRatedCurrentDG3Name= row?.branchMaximumRatedCurrentDG3?.name;
        uiColletion.branchMaximumRatedCurrentDG3ChildSeq = row?.branchMaximumRatedCurrentDG3?.childSeq;
        uiColletion.branchMaximumRatedCurrentDG3UniqueAttributeId = row?.branchMaximumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.branchMaximumRatedCurrentDG3Value = row?.branchMaximumRatedCurrentDG3?.value;
        uiColletion.branchMaximumRatedCurrentDG3Seq = row?.branchMaximumRatedCurrentDG3?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.mainBreakerNumberofPolesDG1AttributeId = row?.mainBreakerNumberofPolesDG1?.attributeId;
        uiColletion.mainBreakerNumberofPolesDG1ParentSeq = row?.mainBreakerNumberofPolesDG1?.parentSeq;
        uiColletion.mainBreakerNumberofPolesDG1DataParamName= row?.mainBreakerNumberofPolesDG1?.dataParamName;
        uiColletion.mainBreakerNumberofPolesDG1Name= row?.mainBreakerNumberofPolesDG1?.name;
        uiColletion.mainBreakerNumberofPolesDG1ChildSeq = row?.mainBreakerNumberofPolesDG1?.childSeq;
        uiColletion.mainBreakerNumberofPolesDG1UniqueAttributeId = row?.mainBreakerNumberofPolesDG1?.uniqueAttributeId;
        uiColletion.mainBreakerNumberofPolesDG1Value = row?.mainBreakerNumberofPolesDG1?.value;
        uiColletion.mainBreakerNumberofPolesDG1Seq = row?.mainBreakerNumberofPolesDG1?.seq;

        // console.log('row',  uiColletion.name );

        uiColletion.branchMaximumRatedCurrentDG2AttributeId = row?.branchMaximumRatedCurrentDG2?.attributeId;
        uiColletion.branchMaximumRatedCurrentDG2ParentSeq = row?.branchMaximumRatedCurrentDG2?.parentSeq;
        uiColletion.branchMaximumRatedCurrentDG2DataParamName= row?.branchMaximumRatedCurrentDG2?.dataParamName;
        uiColletion.branchMaximumRatedCurrentDG2Name= row?.branchMaximumRatedCurrentDG2?.name;
        uiColletion.branchMaximumRatedCurrentDG2ChildSeq = row?.branchMaximumRatedCurrentDG2?.childSeq;
        uiColletion.branchMaximumRatedCurrentDG2UniqueAttributeId = row?.branchMaximumRatedCurrentDG2?.uniqueAttributeId;
        uiColletion.branchMaximumRatedCurrentDG2Value = row?.branchMaximumRatedCurrentDG2?.value;
        uiColletion.branchMaximumRatedCurrentDG2Seq = row?.branchMaximumRatedCurrentDG2?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.mainFuseMaximumRatedCurrentDG2AttributeId = row?.mainFuseMaximumRatedCurrentDG2?.attributeId;
        uiColletion.mainFuseMaximumRatedCurrentDG2ParentSeq = row?.mainFuseMaximumRatedCurrentDG2?.parentSeq;
        uiColletion.mainFuseMaximumRatedCurrentDG2DataParamName= row?.mainFuseMaximumRatedCurrentDG2?.dataParamName;
        uiColletion.mainFuseMaximumRatedCurrentDG2Name= row?.mainFuseMaximumRatedCurrentDG2?.name;
        uiColletion.mainFuseMaximumRatedCurrentDG2ChildSeq = row?.mainFuseMaximumRatedCurrentDG2?.childSeq;
        uiColletion.mainFuseMaximumRatedCurrentDG2UniqueAttributeId = row?.mainFuseMaximumRatedCurrentDG2?.uniqueAttributeId;
        uiColletion.mainFuseMaximumRatedCurrentDG2Value = row?.mainFuseMaximumRatedCurrentDG2?.value;
        uiColletion.mainFuseMaximumRatedCurrentDG2Seq = row?.mainFuseMaximumRatedCurrentDG2?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.seriesInterruptingCurrentRating_RMSDG4AttributeId = row?.seriesInterruptingCurrentRating_RMSDG4?.attributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4ParentSeq = row?.seriesInterruptingCurrentRating_RMSDG4?.parentSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4DataParamName= row?.seriesInterruptingCurrentRating_RMSDG4?.dataParamName;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4Name= row?.seriesInterruptingCurrentRating_RMSDG4?.name;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4ChildSeq = row?.seriesInterruptingCurrentRating_RMSDG4?.childSeq;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4UniqueAttributeId = row?.seriesInterruptingCurrentRating_RMSDG4?.uniqueAttributeId;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4Value = row?.seriesInterruptingCurrentRating_RMSDG4?.value;
        uiColletion.seriesInterruptingCurrentRating_RMSDG4Seq = row?.seriesInterruptingCurrentRating_RMSDG4?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.branchMaximumRatedCurrentDG4AttributeId = row?.branchMaximumRatedCurrentDG4?.attributeId;
        uiColletion.branchMaximumRatedCurrentDG4ParentSeq = row?.branchMaximumRatedCurrentDG4?.parentSeq;
        uiColletion.branchMaximumRatedCurrentDG4DataParamName= row?.branchMaximumRatedCurrentDG4?.dataParamName;
        uiColletion.branchMaximumRatedCurrentDG4Name= row?.branchMaximumRatedCurrentDG4?.name;
        uiColletion.branchMaximumRatedCurrentDG4ChildSeq = row?.branchMaximumRatedCurrentDG4?.childSeq;
        uiColletion.branchMaximumRatedCurrentDG4UniqueAttributeId = row?.branchMaximumRatedCurrentDG4?.uniqueAttributeId;
        uiColletion.branchMaximumRatedCurrentDG4Value = row?.branchMaximumRatedCurrentDG4?.value;
        uiColletion.branchMaximumRatedCurrentDG4Seq = row?.branchMaximumRatedCurrentDG4?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.mainFuseMaximumRatedCurrentDG4AttributeId = row?.mainFuseMaximumRatedCurrentDG4?.attributeId;
        uiColletion.mainFuseMaximumRatedCurrentDG4ParentSeq = row?.mainFuseMaximumRatedCurrentDG4?.parentSeq;
        uiColletion.mainFuseMaximumRatedCurrentDG4DataParamName= row?.mainFuseMaximumRatedCurrentDG4?.dataParamName;
        uiColletion.mainFuseMaximumRatedCurrentDG4Name= row?.mainFuseMaximumRatedCurrentDG4?.name;
        uiColletion.mainFuseMaximumRatedCurrentDG4ChildSeq = row?.mainFuseMaximumRatedCurrentDG4?.childSeq;
        uiColletion.mainFuseMaximumRatedCurrentDG4UniqueAttributeId = row?.mainFuseMaximumRatedCurrentDG4?.uniqueAttributeId;
        uiColletion.mainFuseMaximumRatedCurrentDG4Value = row?.mainFuseMaximumRatedCurrentDG4?.value;
        uiColletion.mainFuseMaximumRatedCurrentDG4Seq = row?.mainFuseMaximumRatedCurrentDG4?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.branchMaximumRatedCurrentDG1AttributeId = row?.branchMaximumRatedCurrentDG1?.attributeId;
        uiColletion.branchMaximumRatedCurrentDG1ParentSeq = row?.branchMaximumRatedCurrentDG1?.parentSeq;
        uiColletion.branchMaximumRatedCurrentDG1DataParamName= row?.branchMaximumRatedCurrentDG1?.dataParamName;
        uiColletion.branchMaximumRatedCurrentDG1Name= row?.branchMaximumRatedCurrentDG1?.name;
        uiColletion.branchMaximumRatedCurrentDG1ChildSeq = row?.branchMaximumRatedCurrentDG1?.childSeq;
        uiColletion.branchMaximumRatedCurrentDG1UniqueAttributeId = row?.branchMaximumRatedCurrentDG1?.uniqueAttributeId;
        uiColletion.branchMaximumRatedCurrentDG1Value = row?.branchMaximumRatedCurrentDG1?.value;
        uiColletion.branchMaximumRatedCurrentDG1Seq = row?.branchMaximumRatedCurrentDG1?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.productTypeAttributeId = row?.productType?.attributeId;
        uiColletion.productTypeParentSeq = row?.productType?.parentSeq;
        uiColletion.productTypeDataParamName= row?.productType?.dataParamName;
        uiColletion.productTypeName= row?.productType?.name;
        uiColletion.productTypeChildSeq = row?.productType?.childSeq;
        uiColletion.productTypeUniqueAttributeId = row?.productType?.uniqueAttributeId;
        uiColletion.productTypeValue = row?.productType?.value;
        uiColletion.productTypeSeq = row?.productType?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4AttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.attributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4ParentSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.parentSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4DataParamName= row?.branchBreakrInterruptingCurrentRatingRMSDG4?.dataParamName;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4Name= row?.branchBreakrInterruptingCurrentRatingRMSDG4?.name;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4ChildSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.childSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4UniqueAttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.uniqueAttributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4Value = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.value;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG4Seq = row?.branchBreakrInterruptingCurrentRatingRMSDG4?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.mainFuseVoltageRatingDG4AttributeId = row?.mainFuseVoltageRatingDG4?.attributeId;
        uiColletion.mainFuseVoltageRatingDG4ParentSeq = row?.mainFuseVoltageRatingDG4?.parentSeq;
        uiColletion.mainFuseVoltageRatingDG4DataParamName= row?.mainFuseVoltageRatingDG4?.dataParamName;
        uiColletion.mainFuseVoltageRatingDG4Name= row?.mainFuseVoltageRatingDG4?.name;
        uiColletion.mainFuseVoltageRatingDG4ChildSeq = row?.mainFuseVoltageRatingDG4?.childSeq;
        uiColletion.mainFuseVoltageRatingDG4UniqueAttributeId = row?.mainFuseVoltageRatingDG4?.uniqueAttributeId;
        uiColletion.mainFuseVoltageRatingDG4Value = row?.mainFuseVoltageRatingDG4?.value;
        uiColletion.mainFuseVoltageRatingDG4Seq = row?.mainFuseVoltageRatingDG4?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3AttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.attributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3ParentSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.parentSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3DataParamName= row?.branchBreakrInterruptingCurrentRatingRMSDG3?.dataParamName;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3Name= row?.branchBreakrInterruptingCurrentRatingRMSDG3?.name;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3ChildSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.childSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3UniqueAttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.uniqueAttributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3Value = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.value;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG3Seq = row?.branchBreakrInterruptingCurrentRatingRMSDG3?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2AttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.attributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2ParentSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.parentSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2DataParamName= row?.branchBreakrInterruptingCurrentRatingRMSDG2?.dataParamName;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2Name= row?.branchBreakrInterruptingCurrentRatingRMSDG2?.name;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2ChildSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.childSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2UniqueAttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.uniqueAttributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2Value = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.value;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG2Seq = row?.branchBreakrInterruptingCurrentRatingRMSDG2?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1AttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.attributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1ParentSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.parentSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1DataParamName= row?.branchBreakrInterruptingCurrentRatingRMSDG1?.dataParamName;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1Name= row?.branchBreakrInterruptingCurrentRatingRMSDG1?.name;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1ChildSeq = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.childSeq;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1UniqueAttributeId = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.uniqueAttributeId;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1Value = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.value;
        uiColletion.branchBreakrInterruptingCurrentRatingRMSDG1Seq = row?.branchBreakrInterruptingCurrentRatingRMSDG1?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchNumberofPolesDG4AttributeId = row?.branchNumberofPolesDG4?.attributeId;
        uiColletion.branchNumberofPolesDG4ParentSeq = row?.branchNumberofPolesDG4?.parentSeq;
        uiColletion.branchNumberofPolesDG4DataParamName= row?.branchNumberofPolesDG4?.dataParamName;
        uiColletion.branchNumberofPolesDG4Name= row?.branchNumberofPolesDG4?.name;
        uiColletion.branchNumberofPolesDG4ChildSeq = row?.branchNumberofPolesDG4?.childSeq;
        uiColletion.branchNumberofPolesDG4UniqueAttributeId = row?.branchNumberofPolesDG4?.uniqueAttributeId;
        uiColletion.branchNumberofPolesDG4Value = row?.branchNumberofPolesDG4?.value;
        uiColletion.branchNumberofPolesDG4Seq = row?.branchNumberofPolesDG4?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchNumberofPolesDG3AttributeId = row?.branchNumberofPolesDG3?.attributeId;
        uiColletion.branchNumberofPolesDG3ParentSeq = row?.branchNumberofPolesDG3?.parentSeq;
        uiColletion.branchNumberofPolesDG3DataParamName= row?.branchNumberofPolesDG3?.dataParamName;
        uiColletion.branchNumberofPolesDG3Name= row?.branchNumberofPolesDG3?.name;
        uiColletion.branchNumberofPolesDG3ChildSeq = row?.branchNumberofPolesDG3?.childSeq;
        uiColletion.branchNumberofPolesDG3UniqueAttributeId = row?.branchNumberofPolesDG3?.uniqueAttributeId;
        uiColletion.branchNumberofPolesDG3Value = row?.branchNumberofPolesDG3?.value;
        uiColletion.branchNumberofPolesDG3Seq = row?.branchNumberofPolesDG3?.seq;
        // console.log('row',  uiColletion.name );


        uiColletion.branchNumberofPolesDG2AttributeId = row?.branchNumberofPolesDG2?.attributeId;
        uiColletion.branchNumberofPolesDG2ParentSeq = row?.branchNumberofPolesDG2?.parentSeq;
        uiColletion.branchNumberofPolesDG2DataParamName= row?.branchNumberofPolesDG2?.dataParamName;
        uiColletion.branchNumberofPolesDG2Name= row?.branchNumberofPolesDG2?.name;
        uiColletion.branchNumberofPolesDG2ChildSeq = row?.branchNumberofPolesDG2?.childSeq;
        uiColletion.branchNumberofPolesDG2UniqueAttributeId = row?.branchNumberofPolesDG2?.uniqueAttributeId;
        uiColletion.branchNumberofPolesDG2Value = row?.branchNumberofPolesDG2?.value;
        uiColletion.branchNumberofPolesDG2Seq = row?.branchNumberofPolesDG2?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.branchNumberofPolesDG1AttributeId = row?.branchNumberofPolesDG1?.attributeId;
        uiColletion.branchNumberofPolesDG1ParentSeq = row?.branchNumberofPolesDG1?.parentSeq;
        uiColletion.branchNumberofPolesDG1DataParamName= row?.branchNumberofPolesDG1?.dataParamName;
        uiColletion.branchNumberofPolesDG1Name= row?.branchNumberofPolesDG1?.name;
        uiColletion.branchNumberofPolesDG1ChildSeq = row?.branchNumberofPolesDG1?.childSeq;
        uiColletion.branchNumberofPolesDG1UniqueAttributeId = row?.branchNumberofPolesDG1?.uniqueAttributeId;
        uiColletion.branchNumberofPolesDG1Value = row?.branchNumberofPolesDG1?.value;
        uiColletion.branchNumberofPolesDG1Seq = row?.branchNumberofPolesDG1?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.tenantBreakerMaximumRatedCurrentDG3AttributeId = row?.tenantBreakerMaximumRatedCurrentDG3?.attributeId;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3ParentSeq = row?.tenantBreakerMaximumRatedCurrentDG3?.parentSeq;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3DataParamName= row?.tenantBreakerMaximumRatedCurrentDG3?.dataParamName;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3Name= row?.tenantBreakerMaximumRatedCurrentDG3?.name;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3ChildSeq = row?.tenantBreakerMaximumRatedCurrentDG3?.childSeq;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3UniqueAttributeId = row?.tenantBreakerMaximumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3Value = row?.tenantBreakerMaximumRatedCurrentDG3?.value;
        uiColletion.tenantBreakerMaximumRatedCurrentDG3Seq = row?.tenantBreakerMaximumRatedCurrentDG3?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.tenantBreakerMaximumRatedCurrentDG4AttributeId = row?.tenantBreakerMaximumRatedCurrentDG4?.attributeId;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4ParentSeq = row?.tenantBreakerMaximumRatedCurrentDG4?.parentSeq;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4DataParamName= row?.tenantBreakerMaximumRatedCurrentDG4?.dataParamName;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4Name= row?.tenantBreakerMaximumRatedCurrentDG4?.name;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4ChildSeq = row?.tenantBreakerMaximumRatedCurrentDG4?.childSeq;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4UniqueAttributeId = row?.tenantBreakerMaximumRatedCurrentDG4?.uniqueAttributeId;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4Value = row?.tenantBreakerMaximumRatedCurrentDG4?.value;
        uiColletion.tenantBreakerMaximumRatedCurrentDG4Seq = row?.tenantBreakerMaximumRatedCurrentDG4?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.modelNameAttributeId = row?.modelName?.attributeId;
        uiColletion.modelNameParentSeq = row?.modelName?.parentSeq;
        uiColletion.modelNameDataParamName= row?.modelName?.dataParamName;
        uiColletion.modelNameName= row?.modelName?.name;
        uiColletion.modelNameChildSeq = row?.modelName?.childSeq;
        uiColletion.modelNameUniqueAttributeId = row?.modelName?.uniqueAttributeId;
        uiColletion.modelNameValue = row?.modelName?.value;
        uiColletion.modelNameSeq = row?.modelName?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.family_SeriesAttributeId = row?.family_Series?.attributeId;
        uiColletion.family_SeriesParentSeq = row?.family_Series?.parentSeq;
        uiColletion.family_SeriesDataParamName= row?.family_Series?.dataParamName;
        uiColletion.family_SeriesName= row?.family_Series?.name;
        uiColletion.family_SeriesChildSeq = row?.family_Series?.childSeq;
        uiColletion.family_SeriesUniqueAttributeId = row?.family_Series?.uniqueAttributeId;
        uiColletion.family_SeriesValue = row?.family_Series?.value;
        uiColletion.family_SeriesSeq = row?.family_Series?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.uLAttributeId = row?.uL?.attributeId;
        uiColletion.uLParentSeq = row?.uL?.parentSeq;
        uiColletion.uLDataParamName= row?.uL?.dataParamName;
        uiColletion.uLName= row?.uL?.name;
        uiColletion.uLChildSeq = row?.uL?.childSeq;
        uiColletion.uLUniqueAttributeId = row?.uL?.uniqueAttributeId;
        uiColletion.uLValue = row?.uL?.value;
        uiColletion.uLSeq = row?.uL?.seq;
        //  console.log('row',  uiColletion.name );

        uiColletion.mainBreakerMinimumRatedCurrentDG3AttributeId = row?.mainBreakerMinimumRatedCurrentDG3?.attributeId;
        uiColletion.mainBreakerMinimumRatedCurrentDG3ParentSeq = row?.mainBreakerMinimumRatedCurrentDG3?.parentSeq;
        uiColletion.mainBreakerMinimumRatedCurrentDG3DataParamName= row?.mainBreakerMinimumRatedCurrentDG3?.dataParamName;
        uiColletion.mainBreakerMinimumRatedCurrentDG3Name= row?.mainBreakerMinimumRatedCurrentDG3?.name;
        uiColletion.mainBreakerMinimumRatedCurrentDG3ChildSeq = row?.mainBreakerMinimumRatedCurrentDG3?.childSeq;
        uiColletion.mainBreakerMinimumRatedCurrentDG3UniqueAttributeId = row?.mainBreakerMinimumRatedCurrentDG3?.uniqueAttributeId;
        uiColletion.mainBreakerMinimumRatedCurrentDG3Value = row?.mainBreakerMinimumRatedCurrentDG3?.value;
        uiColletion.mainBreakerMinimumRatedCurrentDG3Seq = row?.mainBreakerMinimumRatedCurrentDG3?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.ownerReference_PartySiteIDAttributeId = row?.ownerReference_PartySiteID?.attributeId;
        uiColletion.ownerReference_PartySiteIDParentSeq = row?.ownerReference_PartySiteID?.parentSeq;
        uiColletion.ownerReference_PartySiteIDDataParamName= row?.ownerReference_PartySiteID?.dataParamName;
        uiColletion.ownerReference_PartySiteIDName= row?.ownerReference_PartySiteID?.name;
        uiColletion.ownerReference_PartySiteIDChildSeq = row?.ownerReference_PartySiteID?.childSeq;
        uiColletion.ownerReference_PartySiteIDUniqueAttributeId = row?.ownerReference_PartySiteID?.uniqueAttributeId;
        uiColletion.ownerReference_PartySiteIDValue = row?.ownerReference_PartySiteID?.value;
        uiColletion.ownerReference_PartySiteIDSeq = row?.ownerReference_PartySiteID?.seq;
        // console.log('row',  uiColletion.name );

        uiColletion.categoryAttributeId = row?.category?.attributeId;
        uiColletion.categoryParentSeq = row?.category?.parentSeq;
        uiColletion.categoryDataParamName= row?.category?.dataParamName;
        uiColletion.categoryName= row?.category?.name;
        uiColletion.categoryChildSeq = row?.category?.childSeq;
        uiColletion.categoryUniqueAttributeId = row?.category?.uniqueAttributeId;
        uiColletion.categoryValue = row?.category?.value;
        uiColletion.categorySeq = row?.category?.seq;
//        console.log('row',  uiColletion.name );


        uiColletion.mainFuseVoltageRatingDG2AttributeId = row?.mainFuseVoltageRatingDG2?.attributeId;
        uiColletion.mainFuseVoltageRatingDG2ParentSeq = row?.mainFuseVoltageRatingDG2?.parentSeq;
        uiColletion.mainFuseVoltageRatingDG2DataParamName= row?.mainFuseVoltageRatingDG2?.dataParamName;
        uiColletion.mainFuseVoltageRatingDG2Name= row?.mainFuseVoltageRatingDG2?.name;
        uiColletion.mainFuseVoltageRatingDG2ChildSeq = row?.mainFuseVoltageRatingDG2?.childSeq;
        uiColletion.mainFuseVoltageRatingDG2UniqueAttributeId = row?.mainFuseVoltageRatingDG2?.uniqueAttributeId;
        uiColletion.mainFuseVoltageRatingDG2Value = row?.mainFuseVoltageRatingDG2?.value;
        uiColletion.mainFuseVoltageRatingDG2Seq = row?.mainFuseVoltageRatingDG2?.seq;
        collectionResponse.push(uiColletion);
        //}
      }
      );
      var seconds = new Date().getTime();
      console.log('milliseconds after building the UI response' + seconds);
      console.log('total time' + (seconds - currentMillSecs));
      this.uiRowData = collectionResponse;

      this.collectionDatalLoaderFlag = true;
    }
    );
  }
}
//   public getJSON(): Observable<any> {
//     return this.http.get("./response.json");
// }


