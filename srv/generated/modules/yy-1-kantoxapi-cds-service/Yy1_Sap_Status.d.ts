import { Yy1_Sap_StatusRequestBuilder } from './Yy1_Sap_StatusRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "YY1_SAP_STATUS" of service "YY1_KANTOXAPI_CDS".
 */
export declare class Yy1_Sap_Status extends Entity implements Yy1_Sap_StatusType {
    /**
     * Technical entity name for Yy1_Sap_Status.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Yy1_Sap_Status.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * Maximum length: 2.
     */
    code: string;
    /**
     * Description.
     * Maximum length: 60.
     * @nullable
     */
    description?: string;
    /**
     * Returns an entity builder to construct instances `Yy1_Sap_Status`.
     * @returns A builder that constructs instances of entity type `Yy1_Sap_Status`.
     */
    static builder(): EntityBuilderType<Yy1_Sap_Status, Yy1_Sap_StatusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Yy1_Sap_Status` entity type.
     * @returns A `Yy1_Sap_Status` request builder.
     */
    static requestBuilder(): Yy1_Sap_StatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_Sap_Status`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Yy1_Sap_Status`.
     */
    static customField(fieldName: string): CustomField<Yy1_Sap_Status>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Yy1_Sap_StatusType {
    code: string;
    description?: string;
}
export interface Yy1_Sap_StatusTypeForceMandatory {
    code: string;
    description: string;
}
export declare namespace Yy1_Sap_Status {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Yy1_Sap_Status>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Yy1_Sap_Status>;
    /**
     * All fields of the Yy1_Sap_Status entity.
     */
    const _allFields: Array<StringField<Yy1_Sap_Status>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Yy1_Sap_Status>;
    /**
     * All key fields of the Yy1_Sap_Status entity.
     */
    const _keyFields: Array<Field<Yy1_Sap_Status>>;
    /**
     * Mapping of all key field names to the respective static field property Yy1_Sap_Status.
     */
    const _keys: {
        [keys: string]: Field<Yy1_Sap_Status>;
    };
}
//# sourceMappingURL=Yy1_Sap_Status.d.ts.map