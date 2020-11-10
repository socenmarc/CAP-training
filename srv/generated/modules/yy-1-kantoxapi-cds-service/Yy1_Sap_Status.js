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
exports.Yy1_Sap_Status = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Yy1_Sap_StatusRequestBuilder_1 = require("./Yy1_Sap_StatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "YY1_SAP_STATUS" of service "YY1_KANTOXAPI_CDS".
 */
var Yy1_Sap_Status = /** @class */ (function (_super) {
    __extends(Yy1_Sap_Status, _super);
    function Yy1_Sap_Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Yy1_Sap_Status`.
     * @returns A builder that constructs instances of entity type `Yy1_Sap_Status`.
     */
    Yy1_Sap_Status.builder = function () {
        return core_1.Entity.entityBuilder(Yy1_Sap_Status);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Yy1_Sap_Status` entity type.
     * @returns A `Yy1_Sap_Status` request builder.
     */
    Yy1_Sap_Status.requestBuilder = function () {
        return new Yy1_Sap_StatusRequestBuilder_1.Yy1_Sap_StatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_Sap_Status`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Yy1_Sap_Status`.
     */
    Yy1_Sap_Status.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Yy1_Sap_Status);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Yy1_Sap_Status.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Yy1_Sap_Status.
     */
    Yy1_Sap_Status._entityName = 'YY1_SAP_STATUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Yy1_Sap_Status.
     */
    Yy1_Sap_Status._serviceName = 'YY1_KANTOXAPI_CDS';
    /**
     * Default url path for the according service.
     */
    Yy1_Sap_Status._defaultServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
    return Yy1_Sap_Status;
}(core_1.Entity));
exports.Yy1_Sap_Status = Yy1_Sap_Status;
(function (Yy1_Sap_Status) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_Sap_Status.CODE = new core_1.StringField('Code', Yy1_Sap_Status, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Yy1_Sap_Status.DESCRIPTION = new core_1.StringField('Description', Yy1_Sap_Status, 'Edm.String');
    /**
     * All fields of the Yy1_Sap_Status entity.
     */
    Yy1_Sap_Status._allFields = [
        Yy1_Sap_Status.CODE,
        Yy1_Sap_Status.DESCRIPTION
    ];
    /**
     * All fields selector.
     */
    Yy1_Sap_Status.ALL_FIELDS = new core_1.AllFields('*', Yy1_Sap_Status);
    /**
     * All key fields of the Yy1_Sap_Status entity.
     */
    Yy1_Sap_Status._keyFields = [Yy1_Sap_Status.CODE];
    /**
     * Mapping of all key field names to the respective static field property Yy1_Sap_Status.
     */
    Yy1_Sap_Status._keys = Yy1_Sap_Status._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Yy1_Sap_Status = exports.Yy1_Sap_Status || (exports.Yy1_Sap_Status = {}));
exports.Yy1_Sap_Status = Yy1_Sap_Status;
//# sourceMappingURL=Yy1_Sap_Status.js.map