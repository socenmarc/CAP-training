/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_KantoxApiRequestBuilder } from './Yy1_KantoxApiRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "YY1_KantoxAPI" of service "YY1_KANTOXAPI_CDS".
 */
export class Yy1_KantoxApi extends Entity implements Yy1_KantoxApiType {
  /**
   * Technical entity name for Yy1_KantoxApi.
   */
  static _entityName = 'YY1_KantoxAPI';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Yy1_KantoxApi.
   */
  static _serviceName = 'YY1_KANTOXAPI_CDS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   */
  fiscalYear!: string;
  /**
   * Journal Entry.
   * Maximum length: 10.
   */
  accountingDocument!: string;
  /**
   * Journal Entry Posting View Item.
   * Maximum length: 3.
   */
  accountingDocumentItem!: string;
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
  toStatusKantoxAsso!: Yy1_Kantox_Status;
  /**
   * One-to-one navigation property to the [[Yy1_Sap_Status]] entity.
   */
  toStatusSapAsso!: Yy1_Sap_Status;

  /**
   * Returns an entity builder to construct instances `Yy1_KantoxApi`.
   * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
   */
  static builder(): EntityBuilderType<Yy1_KantoxApi, Yy1_KantoxApiTypeForceMandatory> {
    return Entity.entityBuilder(Yy1_KantoxApi);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Yy1_KantoxApi` entity type.
   * @returns A `Yy1_KantoxApi` request builder.
   */
  static requestBuilder(): Yy1_KantoxApiRequestBuilder {
    return new Yy1_KantoxApiRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_KantoxApi`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
   */
  static customField(fieldName: string): CustomField<Yy1_KantoxApi> {
    return Entity.customFieldSelector(fieldName, Yy1_KantoxApi);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Yy1_KantoxApi {
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<Yy1_KantoxApi> = new StringField('CompanyCode', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_YEAR: StringField<Yy1_KantoxApi> = new StringField('FiscalYear', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[accountingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT: StringField<Yy1_KantoxApi> = new StringField('AccountingDocument', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[accountingDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT_ITEM: StringField<Yy1_KantoxApi> = new StringField('AccountingDocumentItem', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<Yy1_KantoxApi> = new StringField('Supplier', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[isCleared]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_CLEARED: BooleanField<Yy1_KantoxApi> = new BooleanField('IsCleared', Yy1_KantoxApi, 'Edm.Boolean');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<Yy1_KantoxApi> = new DateField('PostingDate', Yy1_KantoxApi, 'Edm.DateTime');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<Yy1_KantoxApi> = new DateField('DocumentDate', Yy1_KantoxApi, 'Edm.DateTime');
  /**
   * Static representation of the [[documentReferenceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_REFERENCE_ID: StringField<Yy1_KantoxApi> = new StringField('DocumentReferenceID', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[statusSap]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_SAP: StringField<Yy1_KantoxApi> = new StringField('StatusSAP', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[statusSapText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_SAP_TEXT: StringField<Yy1_KantoxApi> = new StringField('StatusSAP_Text', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[statusKantox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_KANTOX: StringField<Yy1_KantoxApi> = new StringField('StatusKantox', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[statusKantoxText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_KANTOX_TEXT: StringField<Yy1_KantoxApi> = new StringField('StatusKantox_Text', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[sendingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENDING_DATE: DateField<Yy1_KantoxApi> = new DateField('SendingDate', Yy1_KantoxApi, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[referenceBatchKantox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_BATCH_KANTOX: StringField<Yy1_KantoxApi> = new StringField('ReferenceBatchKantox', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[kantoxOrderReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KANTOX_ORDER_REFERENCE: StringField<Yy1_KantoxApi> = new StringField('KantoxOrderReference', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[kantoxReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KANTOX_REFERENCE: StringField<Yy1_KantoxApi> = new StringField('KantoxReference', Yy1_KantoxApi, 'Edm.String');
  /**
   * Static representation of the [[valueDateKantox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_DATE_KANTOX: DateField<Yy1_KantoxApi> = new DateField('ValueDateKantox', Yy1_KantoxApi, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-one navigation property [[toStatusKantoxAsso]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_STATUS_KANTOX_ASSO: OneToOneLink<Yy1_KantoxApi, Yy1_Kantox_Status> = new OneToOneLink('toStatusKantoxAsso', Yy1_KantoxApi, Yy1_Kantox_Status);
  /**
   * Static representation of the one-to-one navigation property [[toStatusSapAsso]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_STATUS_SAP_ASSO: OneToOneLink<Yy1_KantoxApi, Yy1_Sap_Status> = new OneToOneLink('toStatusSAPAsso', Yy1_KantoxApi, Yy1_Sap_Status);
  /**
   * All fields of the Yy1_KantoxApi entity.
   */
  export const _allFields: Array<StringField<Yy1_KantoxApi> | BooleanField<Yy1_KantoxApi> | DateField<Yy1_KantoxApi> | OneToOneLink<Yy1_KantoxApi, Yy1_Kantox_Status> | OneToOneLink<Yy1_KantoxApi, Yy1_Sap_Status>> = [
    Yy1_KantoxApi.COMPANY_CODE,
    Yy1_KantoxApi.FISCAL_YEAR,
    Yy1_KantoxApi.ACCOUNTING_DOCUMENT,
    Yy1_KantoxApi.ACCOUNTING_DOCUMENT_ITEM,
    Yy1_KantoxApi.SUPPLIER,
    Yy1_KantoxApi.IS_CLEARED,
    Yy1_KantoxApi.POSTING_DATE,
    Yy1_KantoxApi.DOCUMENT_DATE,
    Yy1_KantoxApi.DOCUMENT_REFERENCE_ID,
    Yy1_KantoxApi.STATUS_SAP,
    Yy1_KantoxApi.STATUS_SAP_TEXT,
    Yy1_KantoxApi.STATUS_KANTOX,
    Yy1_KantoxApi.STATUS_KANTOX_TEXT,
    Yy1_KantoxApi.SENDING_DATE,
    Yy1_KantoxApi.REFERENCE_BATCH_KANTOX,
    Yy1_KantoxApi.KANTOX_ORDER_REFERENCE,
    Yy1_KantoxApi.KANTOX_REFERENCE,
    Yy1_KantoxApi.VALUE_DATE_KANTOX,
    Yy1_KantoxApi.TO_STATUS_KANTOX_ASSO,
    Yy1_KantoxApi.TO_STATUS_SAP_ASSO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Yy1_KantoxApi> = new AllFields('*', Yy1_KantoxApi);
  /**
   * All key fields of the Yy1_KantoxApi entity.
   */
  export const _keyFields: Array<Field<Yy1_KantoxApi>> = [Yy1_KantoxApi.COMPANY_CODE, Yy1_KantoxApi.FISCAL_YEAR, Yy1_KantoxApi.ACCOUNTING_DOCUMENT, Yy1_KantoxApi.ACCOUNTING_DOCUMENT_ITEM];
  /**
   * Mapping of all key field names to the respective static field property Yy1_KantoxApi.
   */
  export const _keys: { [keys: string]: Field<Yy1_KantoxApi> } = Yy1_KantoxApi._keyFields.reduce((acc: { [keys: string]: Field<Yy1_KantoxApi> }, field: Field<Yy1_KantoxApi>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
