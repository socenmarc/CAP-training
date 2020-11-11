import { Yy1_KantoxApiRequestBuilder } from './Yy1_KantoxApiRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "YY1_KantoxAPI" of service "YY1_KANTOXAPI_CDS".
 */
export declare class Yy1_KantoxApi extends Entity implements Yy1_KantoxApiType {
    /**
     * Technical entity name for Yy1_KantoxApi.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Yy1_KantoxApi.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Fiscal Year.
     * Maximum length: 4.
     */
    fiscalYear: string;
    /**
     * Journal Entry.
     * Maximum length: 10.
     */
    accountingDocument: string;
    /**
     * Journal Entry Posting View Item.
     * Maximum length: 3.
     */
    accountingDocumentItem: string;
    /**
     * Supplier.
     * Maximum length: 10.
     * @nullable
     */
    supplier?: string;
    /**
     * Clearing Status: Is Cleared.
     * @nullable
     */
    isCleared?: boolean;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Journal Entry Date.
     * @nullable
     */
    documentDate?: Moment;
    /**
     * Document Reference ID.
     * Maximum length: 16.
     * @nullable
     */
    documentReferenceId?: string;
    /**
     * GENERATED: Value of code list YY1_SAP_STATUS.
     * Maximum length: 2.
     * @nullable
     */
    statusSap?: string;
    /**
     * Description.
     * Maximum length: 60.
     * @nullable
     */
    statusSapText?: string;
    /**
     * GENERATED: Value of code list YY1_KANTOX_STATUS.
     * Maximum length: 2.
     * @nullable
     */
    statusKantox?: string;
    /**
     * Description.
     * Maximum length: 60.
     * @nullable
     */
    statusKantoxText?: string;
    /**
     * UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun).
     * @nullable
     */
    sendingDate?: Moment;
    /**
     * Text of length 25.
     * Maximum length: 25.
     * @nullable
     */
    referenceBatchKantox?: string;
    /**
     * Text of length 25.
     * Maximum length: 25.
     * @nullable
     */
    kantoxOrderReference?: string;
    /**
     * Text of length 25.
     * Maximum length: 25.
     * @nullable
     */
    kantoxReference?: string;
    /**
     * UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun).
     * @nullable
     */
    valueDateKantox?: Moment;
    /**
     * One-to-one navigation property to the [[Yy1_Kantox_Status]] entity.
     */
    toStatusKantoxAsso: Yy1_Kantox_Status;
    /**
     * One-to-one navigation property to the [[Yy1_Sap_Status]] entity.
     */
    toStatusSapAsso: Yy1_Sap_Status;
    /**
     * Returns an entity builder to construct instances `Yy1_KantoxApi`.
     * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
     */
    static builder(): EntityBuilderType<Yy1_KantoxApi, Yy1_KantoxApiTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Yy1_KantoxApi` entity type.
     * @returns A `Yy1_KantoxApi` request builder.
     */
    static requestBuilder(): Yy1_KantoxApiRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_KantoxApi`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
     */
    static customField(fieldName: string): CustomField<Yy1_KantoxApi>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Yy1_Kantox_Status, Yy1_Kantox_StatusType } from './Yy1_Kantox_Status';
import { Yy1_Sap_Status, Yy1_Sap_StatusType } from './Yy1_Sap_Status';
export interface Yy1_KantoxApiType {
    companyCode: string;
    fiscalYear: string;
    accountingDocument: string;
    accountingDocumentItem: string;
    supplier?: string;
    isCleared?: boolean;
    postingDate?: Moment;
    documentDate?: Moment;
    documentReferenceId?: string;
    statusSap?: string;
    statusSapText?: string;
    statusKantox?: string;
    statusKantoxText?: string;
    sendingDate?: Moment;
    referenceBatchKantox?: string;
    kantoxOrderReference?: string;
    kantoxReference?: string;
    valueDateKantox?: Moment;
    toStatusKantoxAsso: Yy1_Kantox_StatusType;
    toStatusSapAsso: Yy1_Sap_StatusType;
}
export interface Yy1_KantoxApiTypeForceMandatory {
    companyCode: string;
    fiscalYear: string;
    accountingDocument: string;
    accountingDocumentItem: string;
    supplier: string;
    isCleared: boolean;
    postingDate: Moment;
    documentDate: Moment;
    documentReferenceId: string;
    statusSap: string;
    statusSapText: string;
    statusKantox: string;
    statusKantoxText: string;
    sendingDate: Moment;
    referenceBatchKantox: string;
    kantoxOrderReference: string;
    kantoxReference: string;
    valueDateKantox: Moment;
    toStatusKantoxAsso: Yy1_Kantox_StatusType;
    toStatusSapAsso: Yy1_Sap_StatusType;
}
export declare namespace Yy1_KantoxApi {
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_YEAR: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[accountingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_DOCUMENT: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[accountingDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_DOCUMENT_ITEM: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[isCleared]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_CLEARED: BooleanField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DATE: DateField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[documentReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_REFERENCE_ID: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[statusSap]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_SAP: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[statusSapText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_SAP_TEXT: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[statusKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_KANTOX: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[statusKantoxText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_KANTOX_TEXT: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[sendingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SENDING_DATE: DateField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[referenceBatchKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_BATCH_KANTOX: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[kantoxOrderReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KANTOX_ORDER_REFERENCE: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[kantoxReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KANTOX_REFERENCE: StringField<Yy1_KantoxApi>;
    /**
     * Static representation of the [[valueDateKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_DATE_KANTOX: DateField<Yy1_KantoxApi>;
    /**
     * Static representation of the one-to-one navigation property [[toStatusKantoxAsso]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_STATUS_KANTOX_ASSO: OneToOneLink<Yy1_KantoxApi, Yy1_Kantox_Status>;
    /**
     * Static representation of the one-to-one navigation property [[toStatusSapAsso]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_STATUS_SAP_ASSO: OneToOneLink<Yy1_KantoxApi, Yy1_Sap_Status>;
    /**
     * All fields of the Yy1_KantoxApi entity.
     */
    const _allFields: Array<StringField<Yy1_KantoxApi> | BooleanField<Yy1_KantoxApi> | DateField<Yy1_KantoxApi> | OneToOneLink<Yy1_KantoxApi, Yy1_Kantox_Status> | OneToOneLink<Yy1_KantoxApi, Yy1_Sap_Status>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Yy1_KantoxApi>;
    /**
     * All key fields of the Yy1_KantoxApi entity.
     */
    const _keyFields: Array<Field<Yy1_KantoxApi>>;
    /**
     * Mapping of all key field names to the respective static field property Yy1_KantoxApi.
     */
    const _keys: {
        [keys: string]: Field<Yy1_KantoxApi>;
    };
}
//# sourceMappingURL=Yy1_KantoxApi.d.ts.map