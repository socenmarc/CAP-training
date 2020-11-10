"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_KantoxApi = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Yy1_KantoxApiRequestBuilder_1 = require("./Yy1_KantoxApiRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "YY1_KantoxAPI" of service "YY1_KANTOXAPI_CDS".
 */
var Yy1_KantoxApi = /** @class */ (function (_super) {
    __extends(Yy1_KantoxApi, _super);
    function Yy1_KantoxApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Yy1_KantoxApi`.
     * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
     */
    Yy1_KantoxApi.builder = function () {
        return core_1.Entity.entityBuilder(Yy1_KantoxApi);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Yy1_KantoxApi` entity type.
     * @returns A `Yy1_KantoxApi` request builder.
     */
    Yy1_KantoxApi.requestBuilder = function () {
        return new Yy1_KantoxApiRequestBuilder_1.Yy1_KantoxApiRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_KantoxApi`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Yy1_KantoxApi`.
     */
    Yy1_KantoxApi.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Yy1_KantoxApi);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Yy1_KantoxApi.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Yy1_KantoxApi.
     */
    Yy1_KantoxApi._entityName = 'YY1_KantoxAPI';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Yy1_KantoxApi.
     */
    Yy1_KantoxApi._serviceName = 'YY1_KANTOXAPI_CDS';
    /**
     * Default url path for the according service.
     */
    Yy1_KantoxApi._defaultServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
    return Yy1_KantoxApi;
}(core_1.Entity));
exports.Yy1_KantoxApi = Yy1_KantoxApi;
var Yy1_Kantox_Status_1 = require("./Yy1_Kantox_Status");
var Yy1_Sap_Status_1 = require("./Yy1_Sap_Status");
(function (Yy1_KantoxApi) {
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.COMPANY_CODE = new core_1.StringField('CompanyCode', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.FISCAL_YEAR = new core_1.StringField('FiscalYear', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[accountingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.ACCOUNTING_DOCUMENT = new core_1.StringField('AccountingDocument', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[accountingDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.ACCOUNTING_DOCUMENT_ITEM = new core_1.StringField('AccountingDocumentItem', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.SUPPLIER = new core_1.StringField('Supplier', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[isCleared]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.IS_CLEARED = new core_1.BooleanField('IsCleared', Yy1_KantoxApi, 'Edm.Boolean');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.POSTING_DATE = new core_1.DateField('PostingDate', Yy1_KantoxApi, 'Edm.DateTime');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.DOCUMENT_DATE = new core_1.DateField('DocumentDate', Yy1_KantoxApi, 'Edm.DateTime');
    /**
     * Static representation of the [[documentReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.DOCUMENT_REFERENCE_ID = new core_1.StringField('DocumentReferenceID', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[statusSap]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.STATUS_SAP = new core_1.StringField('StatusSAP', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[statusSapText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.STATUS_SAP_TEXT = new core_1.StringField('StatusSAP_Text', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[statusKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.STATUS_KANTOX = new core_1.StringField('StatusKantox', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[statusKantoxText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.STATUS_KANTOX_TEXT = new core_1.StringField('StatusKantox_Text', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[sendingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.SENDING_DATE = new core_1.DateField('SendingDate', Yy1_KantoxApi, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[referenceBatchKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.REFERENCE_BATCH_KANTOX = new core_1.StringField('ReferenceBatchKantox', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[kantoxOrderReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.KANTOX_ORDER_REFERENCE = new core_1.StringField('KantoxOrderReference', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[kantoxReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.KANTOX_REFERENCE = new core_1.StringField('KantoxReference', Yy1_KantoxApi, 'Edm.String');
    /**
     * Static representation of the [[valueDateKantox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.VALUE_DATE_KANTOX = new core_1.DateField('ValueDateKantox', Yy1_KantoxApi, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[toStatusKantox]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.TO_STATUS_KANTOX = new core_1.OneToOneLink('to_StatusKantox', Yy1_KantoxApi, Yy1_Kantox_Status_1.Yy1_Kantox_Status);
    /**
     * Static representation of the one-to-one navigation property [[toStatusSap]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_KantoxApi.TO_STATUS_SAP = new core_1.OneToOneLink('to_StatusSAP', Yy1_KantoxApi, Yy1_Sap_Status_1.Yy1_Sap_Status);
    /**
     * All fields of the Yy1_KantoxApi entity.
     */
    Yy1_KantoxApi._allFields = [
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
        Yy1_KantoxApi.TO_STATUS_KANTOX,
        Yy1_KantoxApi.TO_STATUS_SAP
    ];
    /**
     * All fields selector.
     */
    Yy1_KantoxApi.ALL_FIELDS = new core_1.AllFields('*', Yy1_KantoxApi);
    /**
     * All key fields of the Yy1_KantoxApi entity.
     */
    Yy1_KantoxApi._keyFields = [Yy1_KantoxApi.COMPANY_CODE, Yy1_KantoxApi.FISCAL_YEAR, Yy1_KantoxApi.ACCOUNTING_DOCUMENT, Yy1_KantoxApi.ACCOUNTING_DOCUMENT_ITEM];
    /**
     * Mapping of all key field names to the respective static field property Yy1_KantoxApi.
     */
    Yy1_KantoxApi._keys = Yy1_KantoxApi._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Yy1_KantoxApi = exports.Yy1_KantoxApi || (exports.Yy1_KantoxApi = {}));
exports.Yy1_KantoxApi = Yy1_KantoxApi;
//# sourceMappingURL=Yy1_KantoxApi.js.map