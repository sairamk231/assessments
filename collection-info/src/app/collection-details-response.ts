import { ColDef, StickyTopOffsetChangedEvent } from "ag-grid-community";
import { Observable } from "rxjs";

export interface CollectionDetailsResponse {
    code: number;
    status: string;
    message: string;
    data: Data;
    //RowCount: number;
}

export interface Data {
    collectionStatus: string;
    collectionId: string;
    rowData: RowData[];
    hierarchy: Hierarchy;
    attributeProperties: AttributeProperties;
    collectionAttributes: CollectionAttributes;
    // RowCount?: number;
}
export interface AttributeProperties{
    metadataId:string;
    hierarchyId:string;
}
export interface Hierarchy{
    dataParamName: string;
    name: string;
    value: string;
}
export interface CollectionAttributes {
    collectionStatus: string;
    collectionName: string;
    projectNumber: string;
    orderNumber: String;
    quoteNumber: string;
}
export interface RowData {
    attributeProperties: AttributeProperties;
    hierarchy: Hierarchy;
    dataParamName: string | undefined;
    name: string | undefined;
    value: string | undefined;
    attributeId: string
    parentSeq: string;
    childSeq: string;
    metaDataId: string | undefined;
    hierarchyId: string | undefined;
    rowExpandCollapse: string;
    assetExpandCollapse: string;
    assetId: string | undefined;
    assetStatus: string;
    assetIdSeqKey: string;
    version: string;
    seq:string;
    [x: string]: any;
    modelNomenclature: ModelNomenclature;
    dG4RatingNotes: DG4RatingNotes;
    mainBreakerMinimumRatedCurrentDG1: MainBreakerMinimumRatedCurrentDG1;
    tenantBreakerMinimumRatedCurrentDG3: TenantBreakerMaximumRatedCurrentDG3;
    dG1RatingNotes: DG1RatingNotes;
    cCN:Ccn;
    mainBreakerTypeDG3: MainBreakerTypeDG3;
    mainBreakerTypeDG1: MainBreakerTypeDG1;
    referenceNumber: ReferenceNumber;
    tenantBreakerMinimumRatedCurrentDG4: TenantBreakerMaximumRatedCurrentDG4;
    tenantBreakerTypeDG4: TenantBreakerTypeDG4;
    tenantBreakerTypeDG3: TenantBreakerTypeDG3;
    certificationDate: CertificationDate;
    tenantBreakerNumberofPolesDG3: TenantBreakerNumberofPolesDG3;
    creationDate: CreationDate;
    mainBreakerMaximumRatedCurrentDG3: MainBreakerMaximumRatedCurrentDG3;
    mainBreakerMaximumRatedCurrentDG1: MainBreakerMaximumRatedCurrentDG1;
    tenantBreakerNumberofPolesDG4: TenantBreakerNumberofPolesDG4;
    mainBreakerLimiterTypeDG1: MainBreakerLimiterTypeDG1;
    seriesInterruptingVoltageRating_RMSDG1: SeriesInterruptingVoltageRating_RMSDG1;
    seriesInterruptingVoltageRating_RMSDG2: SeriesInterruptingVoltageRating_RMSDG2;
    seriesInterruptingVoltageRating_RMSDG3: SeriesInterruptingVoltageRating_RMSDG3;
    dG2RatingNotes: DG2RatingNotes;
    cUL: Cul;
    seriesInterruptingVoltageRating_RMSDG4: SeriesInterruptingCurrentRating_RMSDG4;
    interruptingPhasesDG4: InterruptingPhasesDG4;
    interruptingPhasesDG3: InterruptingPhasesDG3;
    interruptingPhasesDG2: InterruptingPhasesDG2;
    mainFuseClassDG2: MainFuseClassDG2;
    mainFuseClassDG4: MainFuseClassDG4;
    branchMinimumRatedCurrentDG4: BranchMinimumRatedCurrentDG4;
    interruptingPhasesDG1: InterruptingPhasesDG1;
    seriesInterruptingCurrentRating_RMSDG1: SeriesInterruptingCurrentRating_RMSDG1;
    branchMinimumRatedCurrentDG3: BranchMinimumRatedCurrentDG3;
    dG3RatingNotes: DG3RatingNotes;
    branchMinimumRatedCurrentDG2: BranchMinimumRatedCurrentDG2;
    branchMinimumRatedCurrentDG1: BranchMinimumRatedCurrentDG1;
    seriesInterruptingCurrentRating_RMSDG3: SeriesInterruptingCurrentRating_RMSDG3;
    seriesInterruptingCurrentRating_RMSDG2: SeriesInterruptingCurrentRating_RMSDG2;
    mainBreakerNumberofPolesDG3: MainBreakerNumberofPolesDG3;
    branchMaximumRatedCurrentDG3: BranchMaximumRatedCurrentDG3;
    mainBreakerNumberofPolesDG1: MainBreakerNumberofPolesDG1;
    branchMaximumRatedCurrentDG2: BranchMaximumRatedCurrentDG2;
    mainFuseMaximumRatedCurrentDG2: MainFuseMaximumRatedCurrentDG2;
    seriesInterruptingCurrentRating_RMSDG4: SeriesInterruptingCurrentRating_RMSDG4;
    branchMaximumRatedCurrentDG4: BranchMaximumRatedCurrentDG4;
    mainFuseMaximumRatedCurrentDG4: MainFuseMaximumRatedCurrentDG4;
    branchMaximumRatedCurrentDG1: BranchMaximumRatedCurrentDG1;
    productType: ProductType;
    branchBreakrInterruptingCurrentRatingRMSDG4: BranchBreakrInterruptingCurrentRatingRMSDG4;
    mainFuseVoltageRatingDG4: MainFuseVoltageRatingDG4;
    branchBreakrInterruptingCurrentRatingRMSDG3: BranchBreakrInterruptingCurrentRatingRMSDG3;
    branchBreakrInterruptingCurrentRatingRMSDG2: BranchBreakrInterruptingCurrentRatingRMSDG2;
    branchBreakrInterruptingCurrentRatingRMSDG1: BranchBreakrInterruptingCurrentRatingRMSDG1;
    branchNumberofPolesDG4: BranchNumberofPolesDG4;
    branchNumberofPolesDG3: BranchNumberofPolesDG3;
    branchNumberofPolesDG2: BranchNumberofPolesDG2;
    branchNumberofPolesDG1: BranchNumberofPolesDG1;
    tenantBreakerMaximumRatedCurrentDG3: TenantBreakerMinimumRatedCurrentDG3;
    tenantBreakerMaximumRatedCurrentDG4: TenantBreakerMaximumRatedCurrentDG4;
    modelName: ModelName;
    family_Series: Family_Series;
    uL: UL;
    mainBreakerMinimumRatedCurrentDG3: MainBreakerMinimumRatedCurrentDG3;
    ownerReference_PartySiteID: OwnerReference_PartySiteID;
    category: Category;
    mainFuseVoltageRatingDG2: MainFuseVoltageRatingDG2;
    
    RowCount: number;
    collectionId: string;
    collectionStatus: string | undefined;
    collectionName: string | undefined;
    projectNumber: string | undefined;
    orderNumber: String | undefined;
    quoteNumber: string | undefined;
    collectionAttributes: CollectionAttributes;
  
}
export interface ModelNomenclature {
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
    value: string;
    seq: string;
}
export interface DG4RatingNotes{
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerMinimumRatedCurrentDG1{
  uniqueAttributeId: string;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerMinimumRatedCurrentDG3{
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface DG1RatingNotes{
  uniqueAttributeId: string;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface Ccn {
  uniqueAttributeId: string;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerTypeDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerTypeDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface ReferenceNumber {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerMinimumRatedCurrentDG4 {
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerTypeDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerTypeDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface CertificationDate {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerNumberofPolesDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface CreationDate {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerMaximumRatedCurrentDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerMaximumRatedCurrentDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerNumberofPolesDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerLimiterTypeDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingVoltageRating_RMSDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingVoltageRating_RMSDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingVoltageRating_RMSDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface DG2RatingNotes {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface Cul {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingVoltageRating_RMSDG4 {
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface InterruptingPhasesDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface InterruptingPhasesDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface InterruptingPhasesDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseClassDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseClassDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMinimumRatedCurrentDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface InterruptingPhasesDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingCurrentRating_RMSDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMinimumRatedCurrentDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface DG3RatingNotes {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMinimumRatedCurrentDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMinimumRatedCurrentDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingCurrentRating_RMSDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingCurrentRating_RMSDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerNumberofPolesDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMaximumRatedCurrentDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerNumberofPolesDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMaximumRatedCurrentDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseMaximumRatedCurrentDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface SeriesInterruptingCurrentRating_RMSDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMaximumRatedCurrentDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseMaximumRatedCurrentDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchMaximumRatedCurrentDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface ProductType {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchBreakrInterruptingCurrentRatingRMSDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseVoltageRatingDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchBreakrInterruptingCurrentRatingRMSDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchBreakrInterruptingCurrentRatingRMSDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchBreakrInterruptingCurrentRatingRMSDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchNumberofPolesDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchNumberofPolesDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchNumberofPolesDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface BranchNumberofPolesDG1 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerMaximumRatedCurrentDG3 {
  uniqueAttributeId: string;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface TenantBreakerMaximumRatedCurrentDG4 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface ModelName {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface Family_Series {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface UL {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainBreakerMinimumRatedCurrentDG3 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface Category {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface MainFuseVoltageRatingDG2 {
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
export interface OwnerReference_PartySiteID{
  uniqueAttributeId: string | undefined;
    attributeId: string;
    parentSeq: string;
    dataParamName: string;
    name: string;
    childSeq: string;
     AttributeId: string;
    value: string;
    seq: string;
}
// export interface Taxonomy {
//     modelName: string;
//     referenceNumber: string;
//     family_series: string;
//     ownerReference_PartySiteID: string;
//     creationDate: string;
//     productType: string;
// }


export class CollectionUIResponse {
  [x: string]: any;
    count!: number ;
    collectionId!: string | undefined;
    collectionStatus!: string | undefined;
    collectionName!: string | undefined;
    orderNumber!: string | undefined;
    quoteNumber!: string | undefined;
    metadataId!: string | undefined;
    hierarchyId!: string | undefined;
    rowExpandCollapse!: string| undefined;
    assetExpandCollapse!: string| undefined;
    assetId!: string| undefined;
    assetStatus!: string| undefined;
    assetIdSeqKey!: string| undefined;
    version!: string| undefined;
    projectNumber!: string | undefined;


   modelNomenClatureAttributeID !: string | undefined;
   modelNomenClatureParentSeq!:string | undefined;
   modelNomenclatureDataParamName!: string;
   modelNomenclatureName :string | undefined;
    modelNomenclatureChildSeq: string | undefined;
    modelNomenclatureValue: string | undefined;
    modelNomenclatureSeq: string | undefined;

    dG4RatingNotesAttributeId!: any ;
    dG4RatingNotesParentSeq!: string | undefined;
    dG4RatingNotesDataParamName!: any | undefined;
    dG4RatingNotesName: any | undefined;
    dG4RatingNotesChildSeq!: string | undefined;
    dG4RatingNotesUniqueAttributeId!: string | undefined;
    dG4RatingNotesValue!: string | undefined;
    dG4RatingNotesSeq!: string | undefined;

    mainBreakerMinimumRatedCurrentDG1AttributeId: string | undefined;
    mainBreakerMinimumRatedCurrentDG1ParentSeq: string | undefined
    mainBreakerMinimumRatedCurrentDG1DataParamName!: string;
    mainBreakerMinimumRatedCurrentDG1Name!: string;
    mainBreakerMinimumRatedCurrentDG1ChildSeq!: string;
    mainBreakerMinimumRatedCurrentDG1UniqueAttributeId!: string;
    mainBreakerMinimumRatedCurrentDG1Value!: string;
    mainBreakerMinimumRatedCurrentDG1Seq!: string;
    
    tenantBreakerMinimumRatedCurrentDG3AttributeId!: string;
    tenantBreakerMinimumRatedCurrentDG3ParentSeq!: string;
    tenantBreakerMinimumRatedCurrentDG3DataParamName!: string;
    tenantBreakerMinimumRatedCurrentDG3Name!: string;
    tenantBreakerMinimumRatedCurrentDG3ChildSeq!: string;
    tenantBreakerMinimumRatedCurrentDG3UniqueAttributeId!: string;
    tenantBreakerMinimumRatedCurrentDG3Value!: string;
    tenantBreakerMinimumRatedCurrentDG3Seq!: string;

    dG1RatingNotesAttributeId!: string;
    dG1RatingNotesParentSeq!: string;
    dG1RatingNotesDataParamName!: string;
    dG1RatingNotesName!: string;
    dG1RatingNotesChildSeq!: string;
    dG1RatingNotesUniqueAttributeId!: string;
    dG1RatingNotesValue!: string;
    dG1RatingNotesSeq!: string;

    cCNAttributeId!: string;
    cCNParentSeq!: string;
    cCNDataParamName!: string;
    cCNName!: string;
    cCNChildSeq!: string;
    cCNUniqueAttributeId!: string;
    cCNValue!: string;
    cCNSeq!: string;

    mainBreakerTypeDG3AttributeId !: string | undefined;
    mainBreakerTypeDG3ParentSeq !: string | undefined;
    mainBreakerTypeDG3DataParamName !: string | undefined;
    mainBreakerTypeDG3Name !: string | undefined;
    mainBreakerTypeDG3ChildSeq !: string | undefined;
    mainBreakerTypeDG3UniqueAttributeId !: string | undefined;
    mainBreakerTypeDG3Value !: string | undefined;
    mainBreakerTypeDG3Seq !: string | undefined;

    mainBreakerTypeDG1AttributeId !: string | undefined;
    mainBreakerTypeDG1ParentSeq !: string | undefined;
    mainBreakerTypeDG1DataParamName !: string | undefined;
    mainBreakerTypeDG1Name !: string | undefined;
    mainBreakerTypeDG1ChildSeq !: string | undefined;
    mainBreakerTypeDG1UniqueAttributeId !: string | undefined;
    mainBreakerTypeDG1Value !: string | undefined;
    mainBreakerTypeDG1Seq !: string | undefined;

    referenceNumberAttributeId !: string | undefined;
    referenceNumberParentSeq !: string | undefined;
    referenceNumberDataParamName !: string | undefined;
    referenceNumberName !: string | undefined;
    referenceNumberChildSeq !: string | undefined;
    referenceNumberUniqueAttributeId !: string | undefined;
    referenceNumberValue !: string | undefined;
    referenceNumberSeq !: string | undefined;

    tenantBreakerMinimumRatedCurrentDG4AttributeId !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4ParentSeq !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4DataParamName !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4Name !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4ChildSeq !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4UniqueAttributeId !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4Value !: string | undefined;
    tenantBreakerMinimumRatedCurrentDG4Seq !: string | undefined;

    tenantBreakerTypeDG4AttributeId !: string | undefined;
    tenantBreakerTypeDG4ParentSeq !: string | undefined;
    tenantBreakerTypeDG4DataParamName !: string | undefined;
    tenantBreakerTypeDG4Name !: string | undefined;
    tenantBreakerTypeDG4ChildSeq !: string | undefined;
    tenantBreakerTypeDG4UniqueAttributeId !: string | undefined;
    tenantBreakerTypeDG4Value !: string | undefined;
    tenantBreakerTypeDG4Seq !: string | undefined;

    tenantBreakerTypeDG3AttributeId !: string | undefined;
    tenantBreakerTypeDG3ParentSeq !: string | undefined;
    tenantBreakerTypeDG3DataParamName !: string | undefined;
    tenantBreakerTypeDG3Name !: string | undefined;
    tenantBreakerTypeDG3ChildSeq !: string | undefined;
    tenantBreakerTypeDG3UniqueAttributeId !: string | undefined;
    tenantBreakerTypeDG3Value !: string | undefined;
    tenantBreakerTypeDG3Seq !: string | undefined;

    certificationDateAttributeId !: string | undefined;
    certificationDateParentSeq !: string | undefined;
    certificationDateDataParamName !: string | undefined;
    certificationDateName !: string | undefined;
    certificationDateChildSeq !: string | undefined;
    certificationDateUniqueAttributeId !: string | undefined;
    certificationDateValue !: string | undefined;
    certificationDateSeq !: string | undefined;

    tenantBreakerNumberofPolesDG3AttributeId !: string | undefined;
    tenantBreakerNumberofPolesDG3ParentSeq !: string | undefined;
    tenantBreakerNumberofPolesDG3DataParamName !: string | undefined;
    tenantBreakerNumberofPolesDG3Name !: string | undefined;
    tenantBreakerNumberofPolesDG3ChildSeq !: string | undefined;
    tenantBreakerNumberofPolesDG3UniqueAttributeId !: string | undefined;
    tenantBreakerNumberofPolesDG3Value !: string | undefined;
    tenantBreakerNumberofPolesDG3Seq !: string | undefined;

    creationDateAttributeId !: string | undefined;
    creationDateParentSeq !: string | undefined;
    creationDateDataParamName !: string | undefined;
    creationDateName !: string | undefined;
    creationDateChildSeq !: string | undefined;
    creationDateUniqueAttributeId !: string | undefined;
    creationDateValue !: string | undefined;
    creationDateSeq !: string | undefined;

    mainBreakerMaximumRatedCurrentDG3AttributeId !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3ParentSeq !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3DataParamName !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3Name !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3ChildSeq !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3UniqueAttributeId !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3Value !: string | undefined;
    mainBreakerMaximumRatedCurrentDG3Seq !: string | undefined;

    mainBreakerMaximumRatedCurrentDG1AttributeId !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1ParentSeq !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1DataParamName !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1Name !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1ChildSeq !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1UniqueAttributeId !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1Value !: string | undefined;
    mainBreakerMaximumRatedCurrentDG1Seq !: string | undefined;

    tenantBreakerNumberofPolesDG4AttributeId !: string | undefined;
    tenantBreakerNumberofPolesDG4ParentSeq !: string | undefined;
    tenantBreakerNumberofPolesDG4DataParamName !: string | undefined;
    tenantBreakerNumberofPolesDG4Name !: string | undefined;
    tenantBreakerNumberofPolesDG4ChildSeq !: string | undefined;
    tenantBreakerNumberofPolesDG4UniqueAttributeId !: string | undefined;
    tenantBreakerNumberofPolesDG4Value !: string | undefined;
    tenantBreakerNumberofPolesDG4Seq !: string | undefined;

    mainBreakerLimiterTypeDG1AttributeId !: string | undefined;
    mainBreakerLimiterTypeDG1ParentSeq !: string | undefined;
    mainBreakerLimiterTypeDG1DataParamName !: string | undefined;
    mainBreakerLimiterTypeDG1Name !: string | undefined;
    mainBreakerLimiterTypeDG1ChildSeq !: string | undefined;
    mainBreakerLimiterTypeDG1UniqueAttributeId !: string | undefined;
    mainBreakerLimiterTypeDG1Value !: string | undefined;
    mainBreakerLimiterTypeDG1Seq !: string | undefined;

    seriesInterruptingVoltageRating_RMSDG1AttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1ParentSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1DataParamName !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1Name !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1ChildSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1UniqueAttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1Value !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG1Seq !: string | undefined;

    seriesInterruptingVoltageRating_RMSDG2AttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2ParentSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2DataParamName !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2Name !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2ChildSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2UniqueAttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2Value !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG2Seq !: string | undefined;

    seriesInterruptingVoltageRating_RMSDG3AttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3ParentSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3DataParamName !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3Name !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3ChildSeq !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3UniqueAttributeId !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3Value !: string | undefined;
    seriesInterruptingVoltageRating_RMSDG3Seq !: string | undefined;

     dG2RatingNotesAttributeId !: string | undefined;
     dG2RatingNotesParentSeq !: string | undefined;
     dG2RatingNotesDataParamName !: string | undefined;
     dG2RatingNotesName !: string | undefined;
     dG2RatingNotesChildSeq !: string | undefined;
     dG2RatingNotesUniqueAttributeId  !: string | undefined;
     dG2RatingNotesValue !: string | undefined;
     dG2RatingNotesSeq !: string | undefined;

     cULAttributeId !: string | undefined;
     cULParentSeq !: string | undefined;
     cULDataParamName !: string | undefined;
     cULName !: string | undefined;
     cULChildSeq !: string | undefined;
     cULUniqueAttributeId !: string | undefined;
     cULValue !: string | undefined;
     cULSeq !: string | undefined;

     seriesInterruptingVoltageRating_RMSDG4AttributeId !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4ParentSeq !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4DataParamName !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4Name !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4ChildSeq !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4UniqueAttributeId !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4Value !: string | undefined;
     seriesInterruptingVoltageRating_RMSDG4Seq !: string | undefined;

     interruptingPhasesDG4AttributeId  !: string | undefined;
     interruptingPhasesDG4ParentSeq  !: string | undefined;
     interruptingPhasesDG4DataParamName !: string | undefined;
     interruptingPhasesDG4Name !: string | undefined;
     interruptingPhasesDG4ChildSeq  !: string | undefined;
     interruptingPhasesDG4UniqueAttributeId  !: string | undefined;
     interruptingPhasesDG4Value !: string | undefined;
     interruptingPhasesDG4Seq !: string | undefined;

     interruptingPhasesDG3AttributeId !: string | undefined;
     interruptingPhasesDG3ParentSeq !: string | undefined;
     interruptingPhasesDG3DataParamName !: string | undefined;
     interruptingPhasesDG3Name !: string | undefined;
     interruptingPhasesDG3ChildSeq !: string | undefined;
     interruptingPhasesDG3UniqueAttributeId !: string | undefined;
     interruptingPhasesDG3Value !: string | undefined;
     interruptingPhasesDG3Seq !: string | undefined;

     interruptingPhasesDG2AttributeId !: string | undefined;
     interruptingPhasesDG2ParentSeq !: string | undefined;
     interruptingPhasesDG2DataParamName !: string | undefined;
     interruptingPhasesDG2Name !: string | undefined;
     interruptingPhasesDG2ChildSeq !: string | undefined;
     interruptingPhasesDG2UniqueAttributeId !: string | undefined;
     interruptingPhasesDG2Value !: string | undefined;
     interruptingPhasesDG2Seq !: string | undefined;

     mainFuseClassDG2AttributeId !: string | undefined;
     mainFuseClassDG2ParentSeq !: string | undefined;
     mainFuseClassDG2DataParamName !: string | undefined;
     mainFuseClassDG2Name !: string | undefined;
     mainFuseClassDG2ChildSeq !: string | undefined;
     mainFuseClassDG2UniqueAttributeId !: string | undefined;
     mainFuseClassDG2Value !: string | undefined;
     mainFuseClassDG2Seq !: string | undefined;

     mainFuseClassDG4AttributeId !: string | undefined;
     mainFuseClassDG4ParentSeq !: string | undefined;
     mainFuseClassDG4DataParamName !: string | undefined;
     mainFuseClassDG4Name !: string | undefined;
     mainFuseClassDG4ChildSeq !: string | undefined;
     mainFuseClassDG4UniqueAttributeId !: string | undefined;
     mainFuseClassDG4Value !: string | undefined;
     mainFuseClassDG4Seq !: string | undefined;

     branchMinimumRatedCurrentDG4AttributeId !: string | undefined;
     branchMinimumRatedCurrentDG4ParentSeq !: string | undefined;
     branchMinimumRatedCurrentDG4DataParamName !: string | undefined;
     branchMinimumRatedCurrentDG4Name !: string | undefined;
     branchMinimumRatedCurrentDG4ChildSeq !: string | undefined;
     branchMinimumRatedCurrentDG4UniqueAttributeId !: string | undefined;
     branchMinimumRatedCurrentDG4Value !: string | undefined;
     branchMinimumRatedCurrentDG4Seq !: string | undefined;

     interruptingPhasesDG1AttributeId !: string | undefined;
     interruptingPhasesDG1ParentSeq !: string | undefined;
     interruptingPhasesDG1DataParamName !: string | undefined;
     interruptingPhasesDG1Name !: string | undefined;
     interruptingPhasesDG1ChildSeq !: string | undefined;
     interruptingPhasesDG1UniqueAttributeId !: string | undefined;
     interruptingPhasesDG1Value !: string | undefined;
     interruptingPhasesDG1Seq !: string | undefined;

     seriesInterruptingCurrentRating_RMSDG1AttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1ParentSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1DataParamName !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1Name !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1ChildSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1UniqueAttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1Value !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG1Seq !: string | undefined;

     branchMinimumRatedCurrentDG3AttributeId !: string | undefined;
     branchMinimumRatedCurrentDG3ParentSeq !: string | undefined;
     branchMinimumRatedCurrentDG3DataParamName !: string | undefined;
     branchMinimumRatedCurrentDG3Name !: string | undefined;
     branchMinimumRatedCurrentDG3ChildSeq !: string | undefined;
     branchMinimumRatedCurrentDG3UniqueAttributeId !: string | undefined;
     branchMinimumRatedCurrentDG3Value !: string | undefined;
     branchMinimumRatedCurrentDG3Seq !: string | undefined;

     dG3RatingNotesAttributeId !: string | undefined;
     dG3RatingNotesParentSeq !: string | undefined;
     dG3RatingNotesDataParamName !: string | undefined;
     dG3RatingNotesName !: string | undefined;
     dG3RatingNotesChildSeq   !: string | undefined;
     dG3RatingNotesUniqueAttributeId !: string | undefined;
     dG3RatingNotesValue !: string | undefined;
     dG3RatingNotesSeq !: string | undefined;

     branchMinimumRatedCurrentDG2AttributeId !: string | undefined;
     branchMinimumRatedCurrentDG2ParentSeq !: string | undefined;
     branchMinimumRatedCurrentDG2DataParamName !: string | undefined;
     branchMinimumRatedCurrentDG2Name !: string | undefined;
     branchMinimumRatedCurrentDG2ChildSeq !: string | undefined;
     branchMinimumRatedCurrentDG2UniqueAttributeId !: string | undefined;
     branchMinimumRatedCurrentDG2Value !: string | undefined;
     branchMinimumRatedCurrentDG2Seq !: string | undefined;

     branchMinimumRatedCurrentDG1AttributeId  !: string | undefined;
     branchMinimumRatedCurrentDG1ParentSeq  !: string | undefined;
     branchMinimumRatedCurrentDG1DataParamName !: string | undefined;
     branchMinimumRatedCurrentDG1Name !: string | undefined;
     branchMinimumRatedCurrentDG1ChildSeq !: string | undefined;
     branchMinimumRatedCurrentDG1UniqueAttributeId !: string | undefined;
     branchMinimumRatedCurrentDG1Value !: string | undefined;
     branchMinimumRatedCurrentDG1Seq !: string | undefined;

     seriesInterruptingCurrentRating_RMSDG3AttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3ParentSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3DataParamName !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3Name !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3ChildSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3UniqueAttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3Value !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG3Seq !: string | undefined;

     seriesInterruptingCurrentRating_RMSDG2AttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2ParentSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2DataParamName !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2Name !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2ChildSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2UniqueAttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2Value !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG2Seq !: string | undefined;

     mainBreakerNumberofPolesDG3AttributeId !: string | undefined;
     mainBreakerNumberofPolesDG3ParentSeq !: string | undefined;
     mainBreakerNumberofPolesDG3DataParamName !: string | undefined;
     mainBreakerNumberofPolesDG3Name !: string | undefined;
     mainBreakerNumberofPolesDG3ChildSeq !: string | undefined;
     mainBreakerNumberofPolesDG3UniqueAttributeId !: string | undefined;
     mainBreakerNumberofPolesDG3Value !: string | undefined;
     mainBreakerNumberofPolesDG3Seq !: string | undefined;
    // console.log('row',   name );

     branchMaximumRatedCurrentDG3AttributeId !: string | undefined;
     branchMaximumRatedCurrentDG3ParentSeq !: string | undefined;
     branchMaximumRatedCurrentDG3DataParamName !: string | undefined;
     branchMaximumRatedCurrentDG3Name !: string | undefined;
     branchMaximumRatedCurrentDG3ChildSeq !: string | undefined;
     branchMaximumRatedCurrentDG3UniqueAttributeId !: string | undefined;
     branchMaximumRatedCurrentDG3Value !: string | undefined;
     branchMaximumRatedCurrentDG3Seq !: string | undefined;
    // console.log('row',   name );

     mainBreakerNumberofPolesDG1AttributeId !: string | undefined;
     mainBreakerNumberofPolesDG1ParentSeq !: string | undefined;
     mainBreakerNumberofPolesDG1DataParamName !: string | undefined;
     mainBreakerNumberofPolesDG1Name !: string | undefined;
     mainBreakerNumberofPolesDG1ChildSeq !: string | undefined;
     mainBreakerNumberofPolesDG1UniqueAttributeId !: string | undefined;
     mainBreakerNumberofPolesDG1Value !: string | undefined;
     mainBreakerNumberofPolesDG1Seq !: string | undefined;

    // console.log('row',   name );

     branchMaximumRatedCurrentDG2AttributeId !: string | undefined;
     branchMaximumRatedCurrentDG2ParentSeq !: string | undefined;
     branchMaximumRatedCurrentDG2DataParamName !: string | undefined;
     branchMaximumRatedCurrentDG2Name !: string | undefined;
     branchMaximumRatedCurrentDG2ChildSeq !: string | undefined;
     branchMaximumRatedCurrentDG2UniqueAttributeId !: string | undefined;
     branchMaximumRatedCurrentDG2Value !: string | undefined;
     branchMaximumRatedCurrentDG2Seq !: string | undefined;
    //  console.log('row',   name );

     mainFuseMaximumRatedCurrentDG2AttributeId !: string | undefined;
     mainFuseMaximumRatedCurrentDG2ParentSeq !: string | undefined;
     mainFuseMaximumRatedCurrentDG2DataParamName !: string | undefined;
     mainFuseMaximumRatedCurrentDG2Name !: string | undefined;
     mainFuseMaximumRatedCurrentDG2ChildSeq !: string | undefined;
     mainFuseMaximumRatedCurrentDG2UniqueAttributeId !: string | undefined;
     mainFuseMaximumRatedCurrentDG2Value !: string | undefined;
     mainFuseMaximumRatedCurrentDG2Seq !: string | undefined;
    //  console.log('row',   name );

     seriesInterruptingCurrentRating_RMSDG4AttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4ParentSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4DataParamName !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4Name !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4ChildSeq !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4UniqueAttributeId !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4Value !: string | undefined;
     seriesInterruptingCurrentRating_RMSDG4Seq !: string | undefined;
    //  console.log('row',   name );

     branchMaximumRatedCurrentDG4AttributeId !: string | undefined;    
     branchMaximumRatedCurrentDG4ParentSeq !: string | undefined;
     branchMaximumRatedCurrentDG4DataParamName  !: string | undefined;    
     branchMaximumRatedCurrentDG4Name!:  string | undefined;    
     branchMaximumRatedCurrentDG4ChildSeq !: string | undefined;     
     branchMaximumRatedCurrentDG4UniqueAttributeId  !: string | undefined;       
     branchMaximumRatedCurrentDG4Value !: string | undefined;    
     branchMaximumRatedCurrentDG4Seq !: string | undefined;   
    //  console.log('row',   name );

     mainFuseMaximumRatedCurrentDG4AttributeId !: string | undefined;       
     mainFuseMaximumRatedCurrentDG4ParentSeq !: string | undefined; 
     mainFuseMaximumRatedCurrentDG4DataParamName !: string | undefined;     
     mainFuseMaximumRatedCurrentDG4Name !: string | undefined;
     mainFuseMaximumRatedCurrentDG4ChildSeq  !: string | undefined;     
     mainFuseMaximumRatedCurrentDG4UniqueAttributeId  !: string | undefined;       
     mainFuseMaximumRatedCurrentDG4Value !: string | undefined;      
     mainFuseMaximumRatedCurrentDG4Seq  !: string | undefined;     
    //  console.log('row',   name );

     branchMaximumRatedCurrentDG1AttributeId  !: string | undefined;    
     branchMaximumRatedCurrentDG1ParentSeq  !: string | undefined;     
     branchMaximumRatedCurrentDG1DataParamName !: string | undefined;     
     branchMaximumRatedCurrentDG1Name !: string | undefined;     
     branchMaximumRatedCurrentDG1ChildSeq !: string | undefined;      
     branchMaximumRatedCurrentDG1UniqueAttributeId !: string | undefined;      
     branchMaximumRatedCurrentDG1Value !: string | undefined;      
     branchMaximumRatedCurrentDG1Seq  !: string | undefined;     
    //  console.log('row',   name );

     productTypeAttributeId !: string | undefined;
     productTypeParentSeq !: string | undefined;      
     productTypeDataParamName !: string | undefined;     
     productTypeName !: string | undefined;     
     productTypeChildSeq !: string | undefined;      
     productTypeUniqueAttributeId !: string | undefined;       
     productTypeValue !: string | undefined;     
     productTypeSeq !: string | undefined;      
    //  console.log('row',   name );

     branchBreakrInterruptingCurrentRatingRMSDG4AttributeId !: string | undefined;  
     branchBreakrInterruptingCurrentRatingRMSDG4ParentSeq  !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG4DataParamName !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG4Name !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG4ChildSeq !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG4UniqueAttributeId !: string | undefined;       
     branchBreakrInterruptingCurrentRatingRMSDG4Value !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG4Seq  !: string | undefined;     
    //  console.log('row',   name );

     mainFuseVoltageRatingDG4AttributeId !: string | undefined;
     mainFuseVoltageRatingDG4ParentSeq  !: string | undefined;     
     mainFuseVoltageRatingDG4DataParamName !: string | undefined;     
     mainFuseVoltageRatingDG4Name !: string | undefined;     
     mainFuseVoltageRatingDG4ChildSeq !: string | undefined;      
     mainFuseVoltageRatingDG4UniqueAttributeId  !: string | undefined;      
     mainFuseVoltageRatingDG4Value !: string | undefined;      
     mainFuseVoltageRatingDG4Seq  !: string | undefined;     
    // console.log('row',   name );

     branchBreakrInterruptingCurrentRatingRMSDG3AttributeId !: string | undefined;       
     branchBreakrInterruptingCurrentRatingRMSDG3ParentSeq !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG3DataParamName !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG3Name !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG3ChildSeq !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG3UniqueAttributeId !: string | undefined;        
     branchBreakrInterruptingCurrentRatingRMSDG3Value !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG3Seq !: string | undefined;      
    // console.log('row',   name );

     branchBreakrInterruptingCurrentRatingRMSDG2AttributeId !: string | undefined;  
     branchBreakrInterruptingCurrentRatingRMSDG2ParentSeq !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG2DataParamName !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG2Name !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG2ChildSeq !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG2UniqueAttributeId !: string | undefined;       
     branchBreakrInterruptingCurrentRatingRMSDG2Value !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG2Seq !: string | undefined;      
    //  console.log('row',   name );

     branchBreakrInterruptingCurrentRatingRMSDG1AttributeId !: string | undefined;  
     branchBreakrInterruptingCurrentRatingRMSDG1ParentSeq !: string | undefined;     
     branchBreakrInterruptingCurrentRatingRMSDG1DataParamName  !: string | undefined;   
     branchBreakrInterruptingCurrentRatingRMSDG1Name !: string | undefined;    
     branchBreakrInterruptingCurrentRatingRMSDG1ChildSeq  !: string | undefined;    
     branchBreakrInterruptingCurrentRatingRMSDG1UniqueAttributeId !: string | undefined;      
     branchBreakrInterruptingCurrentRatingRMSDG1Value  !: string | undefined;    
     branchBreakrInterruptingCurrentRatingRMSDG1Seq !: string | undefined;     
    // console.log('row',   name );

     branchNumberofPolesDG4AttributeId !: string | undefined;     
     branchNumberofPolesDG4ParentSeq !: string | undefined;    
     branchNumberofPolesDG4DataParamName !: string | undefined;   
     branchNumberofPolesDG4Name !: string | undefined;   
     branchNumberofPolesDG4ChildSeq  !: string | undefined;   
     branchNumberofPolesDG4UniqueAttributeId  !: string | undefined;     
     branchNumberofPolesDG4Value  !: string | undefined;   
     branchNumberofPolesDG4Seq  !: string | undefined;   
    // console.log('row',   name );

     branchNumberofPolesDG3AttributeId !: string | undefined;     
     branchNumberofPolesDG3ParentSeq  !: string | undefined;   
     branchNumberofPolesDG3DataParamName !: string | undefined;   
     branchNumberofPolesDG3Name !: string | undefined;   
     branchNumberofPolesDG3ChildSeq !: string | undefined;    
     branchNumberofPolesDG3UniqueAttributeId !: string | undefined;      
     branchNumberofPolesDG3Value !: string | undefined;    
     branchNumberofPolesDG3Seq  !: string | undefined;   
    // console.log('row',   name );


     branchNumberofPolesDG2AttributeId  !: string | undefined;     
     branchNumberofPolesDG2ParentSeq !: string | undefined;     
     branchNumberofPolesDG2DataParamName !: string | undefined;    
     branchNumberofPolesDG2Name  !: string | undefined;   
     branchNumberofPolesDG2ChildSeq !: string | undefined;     
     branchNumberofPolesDG2UniqueAttributeId !: string | undefined;       
     branchNumberofPolesDG2Value !: string | undefined;     
     branchNumberofPolesDG2Seq  !: string | undefined;    
    // console.log('row',   name );

     branchNumberofPolesDG1AttributeId !: string | undefined;      
     branchNumberofPolesDG1ParentSeq  !: string | undefined;    
     branchNumberofPolesDG1DataParamName   !: string | undefined;  
     branchNumberofPolesDG1Name !: string | undefined;    
     branchNumberofPolesDG1ChildSeq  !: string | undefined;    
     branchNumberofPolesDG1UniqueAttributeId !: string | undefined;       
     branchNumberofPolesDG1Value !: string | undefined;     
     branchNumberofPolesDG1Seq  !: string | undefined;    
    //  console.log('row',   name );

     tenantBreakerMaximumRatedCurrentDG3AttributeId !: string | undefined;      
     tenantBreakerMaximumRatedCurrentDG3ParentSeq  !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG3DataParamName  !: string | undefined;   
     tenantBreakerMaximumRatedCurrentDG3Name  !: string | undefined;   
     tenantBreakerMaximumRatedCurrentDG3ChildSeq !: string | undefined;     
     tenantBreakerMaximumRatedCurrentDG3UniqueAttributeId !: string | undefined;       
     tenantBreakerMaximumRatedCurrentDG3Value  !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG3Seq  !: string | undefined;    
    // console.log('row',   name );

     tenantBreakerMaximumRatedCurrentDG4AttributeId !: string | undefined; 
     tenantBreakerMaximumRatedCurrentDG4ParentSeq  !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG4DataParamName !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG4Name !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG4ChildSeq !: string | undefined;     
     tenantBreakerMaximumRatedCurrentDG4UniqueAttributeId  !: string | undefined;     
     tenantBreakerMaximumRatedCurrentDG4Value  !: string | undefined;    
     tenantBreakerMaximumRatedCurrentDG4Seq  !: string | undefined;    
    //  console.log('row',   name );

     modelNameAttributeId !: string | undefined; 
     modelNameParentSeq !: string | undefined;     
     modelNameDataParamName !: string | undefined;    
     modelNameName !: string | undefined;    
     modelNameChildSeq  !: string | undefined;    
     modelNameUniqueAttributeId  !: string | undefined;     
     modelNameValue  !: string | undefined;    
     modelNameSeq  !: string | undefined;    
    // console.log('row',   name );

     family_SeriesAttributeId !: string | undefined;     
     family_SeriesParentSeq !: string | undefined;    
     family_SeriesDataParamName !: string | undefined;   
     family_SeriesName  !: string | undefined;  
     family_SeriesChildSeq  !: string | undefined;   
     family_SeriesUniqueAttributeId   !: string | undefined;    
     family_SeriesValue !: string | undefined;    
     family_SeriesSeq  !: string | undefined;   
    //  console.log('row',   name );

     uLAttributeId  !: string | undefined;    
     uLParentSeq  !: string | undefined;   
     uLDataParamName !: string | undefined;   
     uLName  !: string | undefined;  
     uLChildSeq  !: string | undefined;   
     uLUniqueAttributeId !: string | undefined;      
     uLValue !: string | undefined;    
     uLSeq  !: string | undefined;   
    //  console.log('row',   name );

     mainBreakerMinimumRatedCurrentDG3AttributeId !: string | undefined;      
     mainBreakerMinimumRatedCurrentDG3ParentSeq  !: string | undefined;    
     mainBreakerMinimumRatedCurrentDG3DataParamName  !: string | undefined;   
     mainBreakerMinimumRatedCurrentDG3Name  !: string | undefined;   
     mainBreakerMinimumRatedCurrentDG3ChildSeq  !: string | undefined;    
     mainBreakerMinimumRatedCurrentDG3UniqueAttributeId   !: string | undefined;     
     mainBreakerMinimumRatedCurrentDG3Value  !: string | undefined;    
     mainBreakerMinimumRatedCurrentDG3Seq !: string | undefined;    
    // console.log('row',   name );

     ownerReference_PartySiteIDAttributeId  !: string | undefined;      
     ownerReference_PartySiteIDParentSeq  !: string | undefined;     
     ownerReference_PartySiteIDDataParamName  !: string | undefined;    
     ownerReference_PartySiteIDName  !: string | undefined;    
     ownerReference_PartySiteIDChildSeq !: string | undefined;      
     ownerReference_PartySiteIDUniqueAttributeId  !: string | undefined;      
     ownerReference_PartySiteIDValue !: string | undefined;      
     ownerReference_PartySiteIDSeq   !: string | undefined;    
    // console.log('row',   name );

     categoryAttributeId !: string | undefined;       
     categoryParentSeq  !: string | undefined;     
     categoryDataParamName  !: string | undefined;    
     categoryName !: string | undefined;     
     categoryChildSeq !: string | undefined;      
     categoryUniqueAttributeId  !: string | undefined;       
     categoryValue !: string | undefined;      
     categorySeq !: string | undefined;      
//        console.log('row',   name );


    mainFuseVoltageRatingDG2AttributeId !: string | undefined;
    mainFuseVoltageRatingDG2ParentSeq !: string | undefined;
    mainFuseVoltageRatingDG2DataParamName !: string | undefined;
    mainFuseVoltageRatingDG2Name !: string | undefined;
    mainFuseVoltageRatingDG2ChildSeq  !: string | undefined;
    mainFuseVoltageRatingDG2UniqueAttributeId !: string | undefined;
    mainFuseVoltageRatingDG2Value !: string | undefined;
    mainFuseVoltageRatingDG2Seq !: string | undefined;

}

export const collectionResponseListDef: ColDef[] = [

    {
        field: 'count',
        headerName: 'Row Count',
        sortable: true,
        editable: true

    },
    {
        field: 'collectionId',
        headerName: 'Collection ID',
        editable: true

    },
    {
        field: 'collectionName',
        headerName: 'Collection Name',
        editable: true
    },
    {
        field: 'collectionStatus',
        headerName: 'Collection Status',
        editable: true

    },

    {
      field: 'assetId',
      headerName: 'Asset Id',
      sortable: true
  },
  {
      field: 'assetStatus',
      headerName: 'Asset Status',
      sortable: true,
  },
  {
      field: 'version',
      headerName: 'Version',
      sortable: true
  },
 
  {
      field: 'metadataId',
      headerName: 'Meta Data Id',
      editable: true

  },
  {
      field: 'hierarchyId',
      headerName: 'Hierarchy Id',
      editable: true
  },
  {
    field: 'orderNumber',
    headerName: 'Order Number',
    editable: true
},
{
    field: 'quoteNumber',
    headerName: 'Quote Number',
    editable: true
},
{
    field: 'projectNumber',
    headerName: 'Project Number',
    sortable: true
  },

{
  field: 'modelNameAttributeId',
  headerName: 'ModelName AttributeId',
  sortable: true
},
{
  field: 'modelNameParentSeq',
  headerName: 'ModelName ParentSeq',
  sortable: true
},
{
  field: 'modelNameDataParamName',
  headerName: 'ModelName DataParamName',
  sortable: true
},
{
  field: 'modelNameName',
  headerName: 'ModelName Name',
  sortable: true
},
{
  field: 'modelNameChildSeq',
  headerName: 'ModelName ChildSeq',
  sortable: true
},
{
  field: 'modelNameUniqueAttributeId',
  headerName: 'ModelName UniqueAttributeId',
  sortable: true
},
{
  field: 'modelNameValue',
  headerName: 'ModelName Value',
  sortable: true
},
{
  field: 'modelNameSeq',
  headerName: 'ModelName Seq',
  sortable: true
},

/////////////////////////////////////////////////////////

{
  field: 'family_SeriesAttributeId',
  headerName: 'Family_Series AttributeId',
  sortable: true
},
{
  field: 'family_SeriesParentSeq',
  headerName: 'Family_Series ParentSeq',
  sortable: true
},
{
  field: 'family_SeriesDataParamName',
  headerName: 'Family_Series DataParamName',
  sortable: true
},
{
  field: 'family_SeriesName',
  headerName: 'Family_Series Name',
  sortable: true
},
{
  field: 'family_SeriesChildSeq',
  headerName: 'Family_Series ChildSeq',
  sortable: true
},
{
  field: 'family_SeriesUniqueAttributeId',
  headerName: 'Family_Series UniqueAttributeId',
  sortable: true
},
{
  field: 'family_SeriesValue',
  headerName: 'Family_Series Value',
  sortable: true
},
{
  field: 'family_SeriesSeq',
  headerName: 'Family_Series Seq',
  sortable: true
},

/////////////////////////////////////////////////////////

{
  field: 'uLAttributeId',
  headerName: 'ModelName AttributeId',
  sortable: true
},
{
  field: 'uLParentSeq',
  headerName: 'UL ParentSeq',
  sortable: true
},
{
  field: 'uLDataParamName',
  headerName: 'UL DataParamName',
  sortable: true
},
{
  field: 'uLName',
  headerName: 'UL Name',
  sortable: true
},
{
  field: 'uLChildSeq',
  headerName: 'UL ChildSeq',
  sortable: true
},
{
  field: 'uLUniqueAttributeId',
  headerName: 'UL UniqueAttributeId',
  sortable: true
},
{
  field: 'uLValue',
  headerName: 'UL Value',
  sortable: true
},
{
  field: 'uLSeq',
  headerName: 'UL Seq',
  sortable: true
},

/////////////////////////////////////////////////////////


{
  field: 'ownerReference_PartySiteIDAttributeId',
  headerName: 'OwnerReference_PartySiteID AttributeId',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDParentSeq',
  headerName: 'OwnerReference_PartySiteID ParentSeq',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDDataParamName',
  headerName: 'OwnerReference_PartySiteID DataParamName',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDName',
  headerName: 'OwnerReference_PartySiteID Name',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDChildSeq',
  headerName: 'OwnerReference_PartySiteID ChildSeq',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDUniqueAttributeId',
  headerName: 'OwnerReference_PartySiteID UniqueAttributeId',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDValue',
  headerName: 'OwnerReference_PartySiteID Value',
  sortable: true
},
{
  field: 'ownerReference_PartySiteIDSeq',
  headerName: 'OwnerReference_PartySiteID Seq',
  sortable: true
},

/////////////////////////////////////////////////////////

{
  field: 'categoryAttributeId',
  headerName: 'Category AttributeId',
  sortable: true
},
{
  field: 'categoryParentSeq',
  headerName: 'Category ParentSeq',
  sortable: true
},
{
  field: 'categoryDataParamName',
  headerName: 'Category DataParamName',
  sortable: true
},
{
  field: 'categoryName',
  headerName: 'Category Name',
  sortable: true
},
{
  field: 'categoryChildSeq',
  headerName: 'Category ChildSeq',
  sortable: true
},
{
  field: 'categoryUniqueAttributeId',
  headerName: 'Category UniqueAttributeId',
  sortable: true
},
{
  field: 'categoryValue',
  headerName: 'Category Value',
  sortable: true
},
{
  field: 'categorySeq',
  headerName: 'Category Seq',
  sortable: true
},

/////////////////////////////////////////////////////////

    {
        field:'modelNomenClatureAttributeID',
        headerName:'ModelNomeClature AttributeID',
        sortable: true
    },
    {
        field: 'modelNomenClatureParentSeq',
        headerName: 'ModelNomenclature Parent Seq',
        sortable: true
    },
    {
      field: 'modelNomenclatureDataParamName',
      headerName: 'ModelNomenclature DataParamName',
      sortable: true
    },
    {
      field: 'modelNomenclatureName',
      headerName: 'ModelNomenclature Name',
      sortable: true
    },
    {
      field: 'modelNomenclatureChildSeq',
      headerName: 'ModelNomenclature ChildSeq',
      sortable: true
    },
    {
      field: 'modelNomenclatureValue',
      headerName: 'ModelNomenclature Value',
      sortable: true
    },
    {
      field: 'modelNomenclatureSeq',
      headerName: 'ModelNomenclature Seq',
      sortable: true
    },

    ////////////////////////////////////////////////

    {
      field: 'cCNAttributeId',
      headerName: 'CCN AttributeId',
      sortable: true
    },
    {
      field: 'cCNParentSeq',
      headerName: 'CCN ParentSeq',
      sortable: true
    },
    {
      field: 'cCNDataParamName',
      headerName: 'CCN DataParamName',
      sortable: true
    },
    {
      field: 'cCNName',
      headerName: 'CCN Name',
      sortable: true
    },
    {
      field: 'cCNChildSeq',
      headerName: 'CCN ChildSeq',
      sortable: true
    },
    {
      field: 'cCNUniqueAttributeId',
      headerName: 'CCN UniqueAttributeId',
      sortable: true
    },
    {
      field: 'cCNValue',
      headerName: 'CCN Value',
      sortable: true
    },
    {
      field: 'cCNSeq',
      headerName: 'CCN Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    {
      field: 'referenceNumberAttributeId',
      headerName: 'ReferenceNumber AttributeId',
      sortable: true
    },
    {
      field: 'referenceNumberParentSeq',
      headerName: 'ReferenceNumber ParentSeq',
      sortable: true
    },
    {
      field: 'referenceNumberDataParamName',
      headerName: 'ReferenceNumber DataParamName',
      sortable: true
    },
    {
      field: 'referenceNumberName',
      headerName: 'ReferenceNumber Name',
      sortable: true
    },
    {
      field: 'referenceNumberChildSeq',
      headerName: 'ReferenceNumber ChildSeq',
      sortable: true
    },
    {
      field: 'referenceNumberUniqueAttributeId',
      headerName: 'ReferenceNumber UniqueAttributeId',
      sortable: true
    },
    {
      field: 'referenceNumberValue',
      headerName: 'ReferenceNumber Value',
      sortable: true
    },
    {
      field: 'referenceNumberSeq',
      headerName: 'ReferenceNumber Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    {
      field: 'certificationDateAttributeId',
      headerName: 'CertificationDate AttributeId',
      sortable: true
    },
    {
      field: 'certificationDateParentSeq',
      headerName: 'CertificationDate ParentSeq',
      sortable: true
    },
    {
      field: 'certificationDateDataParamName',
      headerName: 'CertificationDate DataParamName',
      sortable: true
    },
    {
      field: 'certificationDateName',
      headerName: 'CertificationDate Name',
      sortable: true
    },
    {
      field: 'certificationDateChildSeq',
      headerName: 'CertificationDate ChildSeq',
      sortable: true
    },
    {
      field: 'certificationDateUniqueAttributeId',
      headerName: 'CertificationDate UniqueAttributeId',
      sortable: true
    },
    {
      field: 'certificationDateValue',
      headerName: 'CertificationDate Value',
      sortable: true
    },
    {
      field: 'certificationDateSeq',
      headerName: 'CertificationDate Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////
    
    {
      field: 'productTypeAttributeId',
      headerName: 'ProductType AttributeId',
      sortable: true
    },
    {
      field: 'productTypeParentSeq',
      headerName: 'ProductType ParentSeq',
      sortable: true
    },
    {
      field: 'productTypeDataParamName',
      headerName: 'ProductType DataParamName',
      sortable: true
    },
    {
      field: 'productTypeName',
      headerName: 'ProductType Name',
      sortable: true
    },
    {
      field: 'productTypeChildSeq',
      headerName: 'ProductType ChildSeq',
      sortable: true
    },
    {
      field: 'productTypeUniqueAttributeId',
      headerName: 'ProductType UniqueAttributeId',
      sortable: true
    },
    {
      field: 'productTypeValue',
      headerName: 'ProductType Value',
      sortable: true
    },
    {
      field: 'productTypeSeq',
      headerName: 'ProductType Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////
    
    {
      field: 'creationDateAttributeId',
      headerName: 'CreationDate AttributeId',
      sortable: true
    },
    {
      field: 'creationDateParentSeq',
      headerName: 'CreationDate ParentSeq',
      sortable: true
    },
    {
      field: 'creationDateDataParamName',
      headerName: 'CreationDate DataParamName',
      sortable: true
    },
    {
      field: 'creationDateName',
      headerName: 'CreationDate Name',
      sortable: true
    },
    {
      field: 'creationDateChildSeq',
      headerName: 'CreationDate ChildSeq',
      sortable: true
    },
    {
      field: 'creationDateUniqueAttributeId',
      headerName: 'CreationDate UniqueAttributeId',
      sortable: true
    },
    {
      field: 'creationDateValue',
      headerName: 'CreationDate Value',
      sortable: true
    },
    {
      field: 'creationDateSeq',
      headerName: 'CreationDate Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'dG4RatingNotesAttributeId',
      headerName: 'DG4RatingNotes AttributeId',
      sortable: true
    },
    {
      field: 'dG4RatingNotesParentSeq',
      headerName: 'DG4RatingNotes ParentSeq',
      sortable: true
    },
    {
      field: 'dG4RatingNotesDataParamName',
      headerName: 'DG4RatingNotes DataParamName',
      sortable: true
    },
    {
      field: 'dG4RatingNotesName',
      headerName: 'DG4RatingNotes Name',
      sortable: true
    },
    {
      field: 'dG4RatingNotesChildSeq',
      headerName: 'DG4RatingNotes ChildSeq',
      sortable: true
    },
    {
      field: 'dG4RatingNotesUniqueAttributeId',
      headerName: 'DG4RatingNotes UniqueAttributeId',
      sortable: true
    },
    {
      field: 'dG4RatingNotesValue',
      headerName: 'DG4RatingNotes Value',
      sortable: true
    },
    {
      field: 'dG4RatingNotesSeq',
      headerName: 'DG4RatingNotes Seq',
      sortable: true
    },

    ///////////////////////////////////////////////////

    {
      field: 'mainBreakerMinimumRatedCurrentDG1AttributeId',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1ParentSeq',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1DataParamName',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1Name',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 Name',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1ChildSeq',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1UniqueAttributeId',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1Value',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 Value',
      sortable: true
    },
    {
      field: 'mainBreakerMinimumRatedCurrentDG1Seq',
      headerName: 'mainBreakerMinimumRatedCurrentDG1 Seq',
      sortable: true
    },

    ///////////////////////////////////////////////////////////////

    {
      field: 'tenantBreakerMinimumRatedCurrentDG3AttributeId',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3ParentSeq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3DataParamName',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3Name',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3ChildSeq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3UniqueAttributeId',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3Value',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG3Seq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG3 Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    {
      field: 'dG1RatingNotesAttributeId',
      headerName: 'DG1RatingNotes AttributeId',
      sortable: true
    },
    {
      field: 'dG1RatingNotesParentSeq',
      headerName: 'DG1RatingNotes ParentSeq',
      sortable: true
    },
    {
      field: 'dG1RatingNotesDataParamName',
      headerName: 'DG1RatingNotes DataParamName',
      sortable: true
    },
    {
      field: 'dG1RatingNotesName',
      headerName: 'DG1RatingNotes Name',
      sortable: true
    },
    {
      field: 'dG1RatingNotesChildSeq',
      headerName: 'DG1RatingNotes ChildSeq',
      sortable: true
    },
    {
      field: 'dG1RatingNotesUniqueAttributeId',
      headerName: 'DG1RatingNotes UniqueAttributeId',
      sortable: true
    },
    {
      field: 'dG1RatingNotesValue',
      headerName: 'DG1RatingNotes Value',
      sortable: true
    },
    {
      field: 'dG1RatingNotesSeq',
      headerName: 'DG1RatingNotes Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    {
      field: 'mainBreakerTypeDG3AttributeId',
      headerName: 'MainBreakerTypeDG3 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3ParentSeq',
      headerName: 'MainBreakerTypeDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3DataParamName',
      headerName: 'MainBreakerTypeDG3 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3Name',
      headerName: 'MainBreakerTypeDG3 Name',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3ChildSeq',
      headerName: 'MainBreakerTypeDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3UniqueAttributeId',
      headerName: 'MainBreakerTypeDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3Value',
      headerName: 'MainBreakerTypeDG3 Value',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG3Seq',
      headerName: 'MainBreakerTypeDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////
   
    {
      field: 'mainBreakerTypeDG1AttributeId',
      headerName: 'MainBreakerTypeDG1 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1ParentSeq',
      headerName: 'MainBreakerTypeDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1DataParamName',
      headerName: 'MainBreakerTypeDG1 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1Name',
      headerName: 'MainBreakerTypeDG1 Name',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1ChildSeq',
      headerName: 'MainBreakerTypeDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1UniqueAttributeId',
      headerName: 'MainBreakerTypeDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1Value',
      headerName: 'MainBreakerTypeDG1 Value',
      sortable: true
    },
    {
      field: 'mainBreakerTypeDG1Seq',
      headerName: 'MainBreakerTypeDG1 Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    {
      field: 'tenantBreakerMinimumRatedCurrentDG4AttributeId',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4ParentSeq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4DataParamName',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4Name',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4ChildSeq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4UniqueAttributeId',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4Value',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerMinimumRatedCurrentDG4Seq',
      headerName: 'TenantBreakerMinimumRatedCurrentDG4 Seq',
      sortable: true
    },

    //////////////////////////////////////////////////////////

    
    {
      field: 'tenantBreakerTypeDG4AttributeId',
      headerName: 'TenantBreakerTypeDG4 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4ParentSeq',
      headerName: 'TenantBreakerTypeDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4DataParamName',
      headerName: 'TenantBreakerTypeDG4 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4Name',
      headerName: 'TenantBreakerTypeDG4 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4ChildSeq',
      headerName: 'TenantBreakerTypeDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4UniqueAttributeId',
      headerName: 'TenantBreakerTypeDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4Value',
      headerName: 'TenantBreakerTypeDG4 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG4Seq',
      headerName: 'TenantBreakerTypeDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////
     
    {
      field: 'tenantBreakerTypeDG3AttributeId',
      headerName: 'TenantBreakerTypeDG3 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3ParentSeq',
      headerName: 'TenantBreakerTypeDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3DataParamName',
      headerName: 'TenantBreakerTypeDG3 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3Name',
      headerName: 'TenantBreakerTypeDG3 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3ChildSeq',
      headerName: 'TenantBreakerTypeDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3UniqueAttributeId',
      headerName: 'TenantBreakerTypeDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3Value',
      headerName: 'TenantBreakerTypeDG3 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerTypeDG3Seq',
      headerName: 'TenantBreakerTypeDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'tenantBreakerNumberofPolesDG3AttributeId',
      headerName: 'TenantBreakerNumberofPolesDG3 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3ParentSeq',
      headerName: 'TenantBreakerNumberofPolesDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3DataParamName',
      headerName: 'TenantBreakerNumberofPolesDG3 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3Name',
      headerName: 'TenantBreakerNumberofPolesDG3 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3ChildSeq',
      headerName: 'TenantBreakerNumberofPolesDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3UniqueAttributeId',
      headerName: 'TenantBreakerNumberofPolesDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3Value',
      headerName: 'TenantBreakerNumberofPolesDG3 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG3Seq',
      headerName: 'TenantBreakerNumberofPolesDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainBreakerMaximumRatedCurrentDG3AttributeId',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3ParentSeq',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3DataParamName',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3Name',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 Name',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3ChildSeq',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3UniqueAttributeId',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3Value',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 Value',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG3Seq',
      headerName: 'MainBreakerMaximumRatedCurrentDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainBreakerMaximumRatedCurrentDG1AttributeId',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1ParentSeq',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1DataParamName',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1Name',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 Name',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1ChildSeq',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1UniqueAttributeId',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1Value',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 Value',
      sortable: true
    },
    {
      field: 'mainBreakerMaximumRatedCurrentDG1Seq',
      headerName: 'MainBreakerMaximumRatedCurrentDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'tenantBreakerNumberofPolesDG4AttributeId',
      headerName: 'TenantBreakerNumberofPolesDG4 AttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4ParentSeq',
      headerName: 'TenantBreakerNumberofPolesDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4DataParamName',
      headerName: 'TenantBreakerNumberofPolesDG4 DataParamName',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4Name',
      headerName: 'TenantBreakerNumberofPolesDG4 Name',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4ChildSeq',
      headerName: 'TenantBreakerNumberofPolesDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4UniqueAttributeId',
      headerName: 'TenantBreakerNumberofPolesDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4Value',
      headerName: 'TenantBreakerNumberofPolesDG4 Value',
      sortable: true
    },
    {
      field: 'tenantBreakerNumberofPolesDG4Seq',
      headerName: 'TenantBreakerNumberofPolesDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainBreakerLimiterTypeDG1AttributeId',
      headerName: 'MainBreakerLimiterTypeDG1 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1ParentSeq',
      headerName: 'MainBreakerLimiterTypeDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1DataParamName',
      headerName: 'MainBreakerLimiterTypeDG1 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1Name',
      headerName: 'MainBreakerLimiterTypeDG1 Name',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1ChildSeq',
      headerName: 'MainBreakerLimiterTypeDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1UniqueAttributeId',
      headerName: 'MainBreakerLimiterTypeDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1Value',
      headerName: 'MainBreakerLimiterTypeDG1 Value',
      sortable: true
    },
    {
      field: 'mainBreakerLimiterTypeDG1Seq',
      headerName: 'MainBreakerLimiterTypeDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingVoltageRating_RMSDG1AttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1ParentSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1DataParamName',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1Name',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1ChildSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1UniqueAttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1Value',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG1Seq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingVoltageRating_RMSDG2AttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2ParentSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2DataParamName',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2Name',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2ChildSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2UniqueAttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2Value',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG2Seq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingVoltageRating_RMSDG3AttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3ParentSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3DataParamName',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3Name',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3ChildSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3UniqueAttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3Value',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG3Seq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'dG2RatingNotesAttributeId',
      headerName: 'DG2RatingNotes AttributeId',
      sortable: true
    },
    {
      field: 'dG2RatingNotesParentSeq',
      headerName: 'DG2RatingNotes ParentSeq',
      sortable: true
    },
    {
      field: 'dG2RatingNotesDataParamName',
      headerName: 'DG2RatingNotes DataParamName',
      sortable: true
    },
    {
      field: 'dG2RatingNotesName',
      headerName: 'DG2RatingNotes Name',
      sortable: true
    },
    {
      field: 'dG2RatingNotesChildSeq',
      headerName: 'DG2RatingNotes ChildSeq',
      sortable: true
    },
    {
      field: 'dG2RatingNotesUniqueAttributeId',
      headerName: 'DG2RatingNotes UniqueAttributeId',
      sortable: true
    },
    {
      field: 'dG2RatingNotesValue',
      headerName: 'DG2RatingNotes Value',
      sortable: true
    },
    {
      field: 'dG2RatingNotesSeq',
      headerName: 'DG2RatingNotes Seq',
      sortable: true
    },

    ///////////////////////////////////////////////////////

    {
      field: 'cULAttributeId',
      headerName: 'CUL AttributeId',
      sortable: true
    },
    {
      field: 'cULParentSeq',
      headerName: 'CUL ParentSeq',
      sortable: true
    },
    {
      field: 'cULDataParamName',
      headerName: 'CUL DataParamName',
      sortable: true
    },
    {
      field: 'cULName',
      headerName: 'CUL Name',
      sortable: true
    },
    {
      field: 'cULChildSeq',
      headerName: 'CUL ChildSeq',
      sortable: true
    },
    {
      field: 'cULUniqueAttributeId',
      headerName: 'CUL UniqueAttributeId',
      sortable: true
    },
    {
      field: 'cULValue',
      headerName: 'CUL Value',
      sortable: true
    },
    {
      field: 'cULSeq',
      headerName: 'CUL Seq',
      sortable: true
    },

    ////////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingVoltageRating_RMSDG4AttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4ParentSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4DataParamName',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4Name',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4ChildSeq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4UniqueAttributeId',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4Value',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingVoltageRating_RMSDG4Seq',
      headerName: 'SeriesInterruptingVoltageRating_RMSDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'interruptingPhasesDG4AttributeId',
      headerName: 'InterruptingPhasesDG4 AttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4ParentSeq',
      headerName: 'InterruptingPhasesDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4DataParamName',
      headerName: 'InterruptingPhasesDG4 DataParamName',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4Name',
      headerName: 'InterruptingPhasesDG4 Name',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4ChildSeq',
      headerName: 'InterruptingPhasesDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4UniqueAttributeId',
      headerName: 'InterruptingPhasesDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4Value',
      headerName: 'InterruptingPhasesDG4 Value',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG4Seq',
      headerName: 'InterruptingPhasesDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'interruptingPhasesDG3AttributeId',
      headerName: 'InterruptingPhasesDG3 AttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3ParentSeq',
      headerName: 'InterruptingPhasesDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3DataParamName',
      headerName: 'InterruptingPhasesDG3 DataParamName',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3Name',
      headerName: 'InterruptingPhasesDG3 Name',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3ChildSeq',
      headerName: 'InterruptingPhasesDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3UniqueAttributeId',
      headerName: 'InterruptingPhasesDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3Value',
      headerName: 'InterruptingPhasesDG3 Value',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG3Seq',
      headerName: 'InterruptingPhasesDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'interruptingPhasesDG2AttributeId',
      headerName: 'InterruptingPhasesDG2 AttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2ParentSeq',
      headerName: 'InterruptingPhasesDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2DataParamName',
      headerName: 'InterruptingPhasesDG2 DataParamName',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2Name',
      headerName: 'InterruptingPhasesDG2 Name',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2ChildSeq',
      headerName: 'InterruptingPhasesDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2UniqueAttributeId',
      headerName: 'InterruptingPhasesDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2Value',
      headerName: 'InterruptingPhasesDG2 Value',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG2Seq',
      headerName: 'InterruptingPhasesDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainFuseClassDG2AttributeId',
      headerName: 'MainFuseClassDG2 AttributeId',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2ParentSeq',
      headerName: 'MainFuseClassDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2DataParamName',
      headerName: 'MainFuseClassDG2 DataParamName',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2Name',
      headerName: 'MainFuseClassDG2 Name',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2ChildSeq',
      headerName: 'MainFuseClassDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2UniqueAttributeId',
      headerName: 'MainFuseClassDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2Value',
      headerName: 'MainFuseClassDG2 Value',
      sortable: true
    },
    {
      field: 'mainFuseClassDG2Seq',
      headerName: 'MainFuseClassDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainFuseClassDG4AttributeId',
      headerName: 'MainFuseClassDG4 AttributeId',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4ParentSeq',
      headerName: 'MainFuseClassDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4DataParamName',
      headerName: 'MainFuseClassDG4 DataParamName',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4Name',
      headerName: 'MainFuseClassDG4 Name',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4ChildSeq',
      headerName: 'MainFuseClassDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4UniqueAttributeId',
      headerName: 'MainFuseClassDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4Value',
      headerName: 'MainFuseClassDG4 Value',
      sortable: true
    },
    {
      field: 'mainFuseClassDG4Seq',
      headerName: 'MainFuseClassDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG4AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG4 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG4 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4Name',
      headerName: 'BranchMinimumRatedCurrentDG4 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4Value',
      headerName: 'BranchMinimumRatedCurrentDG4 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG4Seq',
      headerName: 'BranchMinimumRatedCurrentDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'interruptingPhasesDG1AttributeId',
      headerName: 'InterruptingPhasesDG1 AttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1ParentSeq',
      headerName: 'InterruptingPhasesDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1DataParamName',
      headerName: 'InterruptingPhasesDG1 DataParamName',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1Name',
      headerName: 'InterruptingPhasesDG1 Name',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1ChildSeq',
      headerName: 'InterruptingPhasesDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1UniqueAttributeId',
      headerName: 'InterruptingPhasesDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1Value',
      headerName: 'InterruptingPhasesDG1 Value',
      sortable: true
    },
    {
      field: 'interruptingPhasesDG1Seq',
      headerName: 'InterruptingPhasesDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingCurrentRating_RMSDG1AttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1ParentSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1DataParamName',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1Name',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1ChildSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1UniqueAttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1Value',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG1Seq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG3AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG3 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG3 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3Name',
      headerName: 'BranchMinimumRatedCurrentDG3 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3Value',
      headerName: 'BranchMinimumRatedCurrentDG3 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG3Seq',
      headerName: 'BranchMinimumRatedCurrentDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG2AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG2 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG2 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Name',
      headerName: 'BranchMinimumRatedCurrentDG2 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Value',
      headerName: 'BranchMinimumRatedCurrentDG2 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Seq',
      headerName: 'BranchMinimumRatedCurrentDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG1AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG1 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG1 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Name',
      headerName: 'BranchMinimumRatedCurrentDG1 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Value',
      headerName: 'BranchMinimumRatedCurrentDG1 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Seq',
      headerName: 'BranchMinimumRatedCurrentDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////
    
    {
      field: 'dG3RatingNotesAttributeId',
      headerName: 'DG3RatingNotes AttributeId',
      sortable: true
    },
    {
      field: 'dG3RatingNotesParentSeq',
      headerName: 'DG3RatingNotes ParentSeq',
      sortable: true
    },
    {
      field: 'dG3RatingNotesDataParamName',
      headerName: 'DG3RatingNotes DataParamName',
      sortable: true
    },
    {
      field: 'dG3RatingNotesName',
      headerName: 'DG3RatingNotes Name',
      sortable: true
    },
    {
      field: 'dG3RatingNotesChildSeq',
      headerName: 'DG3RatingNotes ChildSeq',
      sortable: true
    },
    {
      field: 'dG3RatingNotesUniqueAttributeId',
      headerName: 'DG3RatingNotes UniqueAttributeId',
      sortable: true
    },
    {
      field: 'dG3RatingNotesValue',
      headerName: 'DG3RatingNotes Value',
      sortable: true
    },
    {
      field: 'dG3RatingNotesSeq',
      headerName: 'DG3RatingNotes Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG2AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG2 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG2 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Name',
      headerName: 'BranchMinimumRatedCurrentDG2 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Value',
      headerName: 'BranchMinimumRatedCurrentDG2 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG2Seq',
      headerName: 'BranchMinimumRatedCurrentDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMinimumRatedCurrentDG1AttributeId',
      headerName: 'BranchMinimumRatedCurrentDG1 AttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1ParentSeq',
      headerName: 'BranchMinimumRatedCurrentDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1DataParamName',
      headerName: 'BranchMinimumRatedCurrentDG1 DataParamName',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Name',
      headerName: 'BranchMinimumRatedCurrentDG1 Name',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1ChildSeq',
      headerName: 'BranchMinimumRatedCurrentDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1UniqueAttributeId',
      headerName: 'BranchMinimumRatedCurrentDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Value',
      headerName: 'BranchMinimumRatedCurrentDG1 Value',
      sortable: true
    },
    {
      field: 'branchMinimumRatedCurrentDG1Seq',
      headerName: 'BranchMinimumRatedCurrentDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingCurrentRating_RMSDG3AttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3ParentSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3DataParamName',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3Name',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3ChildSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3UniqueAttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3Value',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG3Seq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingCurrentRating_RMSDG2AttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2ParentSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2DataParamName',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2Name',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2ChildSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2UniqueAttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2Value',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG2Seq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainBreakerNumberofPolesDG3AttributeId',
      headerName: 'MainBreakerNumberofPolesDG3 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3ParentSeq',
      headerName: 'MainBreakerNumberofPolesDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3DataParamName',
      headerName: 'MainBreakerNumberofPolesDG3 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3Name',
      headerName: 'MainBreakerNumberofPolesDG3 Name',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3ChildSeq',
      headerName: 'MainBreakerNumberofPolesDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3UniqueAttributeId',
      headerName: 'MainBreakerNumberofPolesDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3Value',
      headerName: 'MainBreakerNumberofPolesDG3 Value',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG3Seq',
      headerName: 'MainBreakerNumberofPolesDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMaximumRatedCurrentDG3AttributeId',
      headerName: 'BranchMaximumRatedCurrentDG3 AttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3ParentSeq',
      headerName: 'BranchMaximumRatedCurrentDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3DataParamName',
      headerName: 'BranchMaximumRatedCurrentDG3 DataParamName',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3Name',
      headerName: 'BranchMaximumRatedCurrentDG3 Name',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3ChildSeq',
      headerName: 'BranchMaximumRatedCurrentDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3UniqueAttributeId',
      headerName: 'BranchMaximumRatedCurrentDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3Value',
      headerName: 'BranchMaximumRatedCurrentDG3 Value',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG3Seq',
      headerName: 'BranchMaximumRatedCurrentDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainBreakerNumberofPolesDG1AttributeId',
      headerName: 'MainBreakerNumberofPolesDG1 AttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1ParentSeq',
      headerName: 'MainBreakerNumberofPolesDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1DataParamName',
      headerName: 'MainBreakerNumberofPolesDG1 DataParamName',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1Name',
      headerName: 'MainBreakerNumberofPolesDG1 Name',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1ChildSeq',
      headerName: 'MainBreakerNumberofPolesDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1UniqueAttributeId',
      headerName: 'MainBreakerNumberofPolesDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1Value',
      headerName: 'MainBreakerNumberofPolesDG1 Value',
      sortable: true
    },
    {
      field: 'mainBreakerNumberofPolesDG1Seq',
      headerName: 'MainBreakerNumberofPolesDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMaximumRatedCurrentDG2AttributeId',
      headerName: 'BranchMaximumRatedCurrentDG2 AttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2ParentSeq',
      headerName: 'BranchMaximumRatedCurrentDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2DataParamName',
      headerName: 'BranchMaximumRatedCurrentDG2 DataParamName',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2Name',
      headerName: 'BranchMaximumRatedCurrentDG2 Name',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2ChildSeq',
      headerName: 'BranchMaximumRatedCurrentDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2UniqueAttributeId',
      headerName: 'BranchMaximumRatedCurrentDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2Value',
      headerName: 'BranchMaximumRatedCurrentDG2 Value',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG2Seq',
      headerName: 'BranchMaximumRatedCurrentDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainFuseMaximumRatedCurrentDG2AttributeId',
      headerName: 'MainFuseMaximumRatedCurrentDG2 AttributeId',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2ParentSeq',
      headerName: 'MainFuseMaximumRatedCurrentDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2DataParamName',
      headerName: 'MainFuseMaximumRatedCurrentDG2 DataParamName',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2Name',
      headerName: 'MainFuseMaximumRatedCurrentDG2 Name',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2ChildSeq',
      headerName: 'MainFuseMaximumRatedCurrentDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2UniqueAttributeId',
      headerName: 'MainFuseMaximumRatedCurrentDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2Value',
      headerName: 'MainFuseMaximumRatedCurrentDG2 Value',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG2Seq',
      headerName: 'MainFuseMaximumRatedCurrentDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainFuseMaximumRatedCurrentDG4AttributeId',
      headerName: 'MainFuseMaximumRatedCurrentDG4 AttributeId',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4ParentSeq',
      headerName: 'MainFuseMaximumRatedCurrentDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4DataParamName',
      headerName: 'MainFuseMaximumRatedCurrentDG4 DataParamName',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4Name',
      headerName: 'MainFuseMaximumRatedCurrentDG4 Name',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4ChildSeq',
      headerName: 'MainFuseMaximumRatedCurrentDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4UniqueAttributeId',
      headerName: 'MainFuseMaximumRatedCurrentDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4Value',
      headerName: 'MainFuseMaximumRatedCurrentDG4 Value',
      sortable: true
    },
    {
      field: 'mainFuseMaximumRatedCurrentDG4Seq',
      headerName: 'MainFuseMaximumRatedCurrentDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMaximumRatedCurrentDG4AttributeId',
      headerName: 'BranchMaximumRatedCurrentDG4 AttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4ParentSeq',
      headerName: 'BranchMaximumRatedCurrentDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4DataParamName',
      headerName: 'BranchMaximumRatedCurrentDG4 DataParamName',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4Name',
      headerName: 'BranchMaximumRatedCurrentDG4 Name',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4ChildSeq',
      headerName: 'BranchMaximumRatedCurrentDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4UniqueAttributeId',
      headerName: 'BranchMaximumRatedCurrentDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4Value',
      headerName: 'BranchMaximumRatedCurrentDG4 Value',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG4Seq',
      headerName: 'BranchMaximumRatedCurrentDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchMaximumRatedCurrentDG1AttributeId',
      headerName: 'BranchMaximumRatedCurrentDG1 AttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1ParentSeq',
      headerName: 'BranchMaximumRatedCurrentDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1DataParamName',
      headerName: 'BranchMaximumRatedCurrentDG1 DataParamName',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1Name',
      headerName: 'BranchMaximumRatedCurrentDG1 Name',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1ChildSeq',
      headerName: 'BranchMaximumRatedCurrentDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1UniqueAttributeId',
      headerName: 'BranchMaximumRatedCurrentDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1Value',
      headerName: 'BranchMaximumRatedCurrentDG1 Value',
      sortable: true
    },
    {
      field: 'branchMaximumRatedCurrentDG1Seq',
      headerName: 'BranchMaximumRatedCurrentDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'seriesInterruptingCurrentRating_RMSDG4AttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 AttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4ParentSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4DataParamName',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 DataParamName',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4Name',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 Name',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4ChildSeq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4UniqueAttributeId',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4Value',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 Value',
      sortable: true
    },
    {
      field: 'seriesInterruptingCurrentRating_RMSDG4Seq',
      headerName: 'SeriesInterruptingCurrentRating_RMSDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'mainFuseVoltageRatingDG4AttributeId',
      headerName: 'MainFuseVoltageRatingDG4 AttributeId',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4ParentSeq',
      headerName: 'MainFuseVoltageRatingDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4DataParamName',
      headerName: 'MainFuseVoltageRatingDG4 DataParamName',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4Name',
      headerName: 'MainFuseVoltageRatingDG4 Name',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4ChildSeq',
      headerName: 'MainFuseVoltageRatingDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4UniqueAttributeId',
      headerName: 'MainFuseVoltageRatingDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4Value',
      headerName: 'MainFuseVoltageRatingDG4 Value',
      sortable: true
    },
    {
      field: 'mainFuseVoltageRatingDG4Seq',
      headerName: 'MainFuseVoltageRatingDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4AttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 AttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4ParentSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4DataParamName',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 DataParamName',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4Name',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 Name',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4ChildSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4UniqueAttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4Value',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 Value',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG4Seq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1AttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 AttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1ParentSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1DataParamName',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 DataParamName',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Name',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Name',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1ChildSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1UniqueAttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Value',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Value',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Seq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2AttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 AttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2ParentSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2DataParamName',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 DataParamName',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2Name',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 Name',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2ChildSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2UniqueAttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2Value',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 Value',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG2Seq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1AttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 AttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1ParentSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 ParentSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1DataParamName',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 DataParamName',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Name',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Name',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1ChildSeq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 ChildSeq',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1UniqueAttributeId',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Value',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Value',
      sortable: true
    },
    {
      field: 'branchBreakrInterruptingCurrentRatingRMSDG1Seq',
      headerName: 'BranchBreakrInterruptingCurrentRatingRMSDG1 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////

    {
      field: 'branchNumberofPolesDG4AttributeId',
      headerName: 'BranchNumberofPolesDG4 AttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4ParentSeq',
      headerName: 'BranchNumberofPolesDG4 ParentSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4DataParamName',
      headerName: 'BranchNumberofPolesDG4 DataParamName',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4Name',
      headerName: 'BranchNumberofPolesDG4 Name',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4ChildSeq',
      headerName: 'BranchNumberofPolesDG4 ChildSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4UniqueAttributeId',
      headerName: 'BranchNumberofPolesDG4 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4Value',
      headerName: 'BranchNumberofPolesDG4 Value',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG4Seq',
      headerName: 'BranchNumberofPolesDG4 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////
    
    {
      field: 'branchNumberofPolesDG3AttributeId',
      headerName: 'BranchNumberofPolesDG3 AttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3ParentSeq',
      headerName: 'BranchNumberofPolesDG3 ParentSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3DataParamName',
      headerName: 'BranchNumberofPolesDG3 DataParamName',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3Name',
      headerName: 'BranchNumberofPolesDG3 Name',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3ChildSeq',
      headerName: 'BranchNumberofPolesDG3 ChildSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3UniqueAttributeId',
      headerName: 'BranchNumberofPolesDG3 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3Value',
      headerName: 'BranchNumberofPolesDG3 Value',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG3Seq',
      headerName: 'BranchNumberofPolesDG3 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////


    {
      field: 'branchNumberofPolesDG2AttributeId',
      headerName: 'BranchNumberofPolesDG2 AttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2ParentSeq',
      headerName: 'BranchNumberofPolesDG2 ParentSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2DataParamName',
      headerName: 'BranchNumberofPolesDG2 DataParamName',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2Name',
      headerName: 'BranchNumberofPolesDG2 Name',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2ChildSeq',
      headerName: 'BranchNumberofPolesDG2 ChildSeq',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2UniqueAttributeId',
      headerName: 'BranchNumberofPolesDG2 UniqueAttributeId',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2Value',
      headerName: 'BranchNumberofPolesDG2 Value',
      sortable: true
    },
    {
      field: 'branchNumberofPolesDG2Seq',
      headerName: 'BranchNumberofPolesDG2 Seq',
      sortable: true
    },

    /////////////////////////////////////////////////////////


      {
        field: 'branchNumberofPolesDG1AttributeId',
        headerName: 'BranchNumberofPolesDG1 AttributeId',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1ParentSeq',
        headerName: 'BranchNumberofPolesDG1 ParentSeq',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1DataParamName',
        headerName: 'BranchNumberofPolesDG1 DataParamName',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1Name',
        headerName: 'BranchNumberofPolesDG1 Name',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1ChildSeq',
        headerName: 'BranchNumberofPolesDG1 ChildSeq',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1UniqueAttributeId',
        headerName: 'BranchNumberofPolesDG1 UniqueAttributeId',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1Value',
        headerName: 'BranchNumberofPolesDG1 Value',
        sortable: true
      },
      {
        field: 'branchNumberofPolesDG1Seq',
        headerName: 'BranchNumberofPolesDG1 Seq',
        sortable: true
      },

      /////////////////////////////////////////////////////////

      {
        field: 'tenantBreakerMaximumRatedCurrentDG3AttributeId',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 AttributeId',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3ParentSeq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 ParentSeq',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3DataParamName',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 DataParamName',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3Name',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 Name',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3ChildSeq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 ChildSeq',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3UniqueAttributeId',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 UniqueAttributeId',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3Value',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 Value',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG3Seq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG3 Seq',
        sortable: true
      },
  
      /////////////////////////////////////////////////////////
  
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4AttributeId',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 AttributeId',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4ParentSeq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 ParentSeq',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4DataParamName',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 DataParamName',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4Name',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 Name',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4ChildSeq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 ChildSeq',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4UniqueAttributeId',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 UniqueAttributeId',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4Value',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 Value',
        sortable: true
      },
      {
        field: 'tenantBreakerMaximumRatedCurrentDG4Seq',
        headerName: 'TenantBreakerMaximumRatedCurrentDG4 Seq',
        sortable: true
      },
  
      /////////////////////////////////////////////////////////

      {
        field: 'mainBreakerMinimumRatedCurrentDG3AttributeId',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 AttributeId',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3ParentSeq',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 ParentSeq',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3DataParamName',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 DataParamName',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3Name',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 Name',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3ChildSeq',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 ChildSeq',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3UniqueAttributeId',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 UniqueAttributeId',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3Value',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 Value',
        sortable: true
      },
      {
        field: 'mainBreakerMinimumRatedCurrentDG3Seq',
        headerName: 'MainBreakerMinimumRatedCurrentDG3 Seq',
        sortable: true
      },
  
      /////////////////////////////////////////////////////////

      
      {
        field: 'mainFuseVoltageRatingDG2AttributeId',
        headerName: 'MainFuseVoltageRatingDG2 AttributeId',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2ParentSeq',
        headerName: 'MainFuseVoltageRatingDG2 ParentSeq',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2DataParamName',
        headerName: 'MainFuseVoltageRatingDG2 DataParamName',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2Name',
        headerName: 'MainFuseVoltageRatingDG2 Name',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2ChildSeq',
        headerName: 'MainFuseVoltageRatingDG2 ChildSeq',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2UniqueAttributeId',
        headerName: 'MainFuseVoltageRatingDG2 UniqueAttributeId',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2Value',
        headerName: 'MainFuseVoltageRatingDG2 Value',
        sortable: true
      },
      {
        field: 'mainFuseVoltageRatingDG2Seq',
        headerName: 'MainFuseVoltageRatingDG2 Seq',
        sortable: true
      },

]