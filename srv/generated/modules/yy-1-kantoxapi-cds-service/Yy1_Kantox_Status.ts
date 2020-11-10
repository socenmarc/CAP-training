/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Kantox_StatusRequestBuilder } from './Yy1_Kantox_StatusRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "YY1_KANTOX_STATUS" of service "YY1_KANTOXAPI_CDS".
 */
export class Yy1_Kantox_Status extends Entity implements Yy1_Kantox_StatusType {
  /**
   * Technical entity name for Yy1_Kantox_Status.
   */
  static _entityName = 'YY1_KANTOX_STATUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Yy1_Kantox_Status.
   */
  static _serviceName = 'YY1_KANTOXAPI_CDS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
  /**
   * Code.
   * Maximum length: 2.
   */
  code!: string;
  /**
   * Description.
   * Maximum length: 60.
   * @nullable
   */
  description?: string;

  /**
   * Returns an entity builder to construct instances `Yy1_Kantox_Status`.
   * @returns A builder that constructs instances of entity type `Yy1_Kantox_Status`.
   */
  static builder(): EntityBuilderType<Yy1_Kantox_Status, Yy1_Kantox_StatusTypeForceMandatory> {
    return Entity.entityBuilder(Yy1_Kantox_Status);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Yy1_Kantox_Status` entity type.
   * @returns A `Yy1_Kantox_Status` request builder.
   */
  static requestBuilder(): Yy1_Kantox_StatusRequestBuilder {
    return new Yy1_Kantox_StatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_Kantox_Status`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Yy1_Kantox_Status`.
   */
  static customField(fieldName: string): CustomField<Yy1_Kantox_Status> {
    return Entity.customFieldSelector(fieldName, Yy1_Kantox_Status);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Yy1_Kantox_StatusType {
  code: string;
  description?: string;
}

export interface Yy1_Kantox_StatusTypeForceMandatory {
  code: string;
  description: string;
}

export namespace Yy1_Kantox_Status {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Yy1_Kantox_Status> = new StringField('Code', Yy1_Kantox_Status, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Yy1_Kantox_Status> = new StringField('Description', Yy1_Kantox_Status, 'Edm.String');
  /**
   * All fields of the Yy1_Kantox_Status entity.
   */
  export const _allFields: Array<StringField<Yy1_Kantox_Status>> = [
    Yy1_Kantox_Status.CODE,
    Yy1_Kantox_Status.DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Yy1_Kantox_Status> = new AllFields('*', Yy1_Kantox_Status);
  /**
   * All key fields of the Yy1_Kantox_Status entity.
   */
  export const _keyFields: Array<Field<Yy1_Kantox_Status>> = [Yy1_Kantox_Status.CODE];
  /**
   * Mapping of all key field names to the respective static field property Yy1_Kantox_Status.
   */
  export const _keys: { [keys: string]: Field<Yy1_Kantox_Status> } = Yy1_Kantox_Status._keyFields.reduce((acc: { [keys: string]: Field<Yy1_Kantox_Status> }, field: Field<Yy1_Kantox_Status>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
