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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_Sap_StatusRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Yy1_Sap_Status_1 = require("./Yy1_Sap_Status");
/**
 * Request builder class for operations supported on the [[Yy1_Sap_Status]] entity.
 */
var Yy1_Sap_StatusRequestBuilder = /** @class */ (function (_super) {
    __extends(Yy1_Sap_StatusRequestBuilder, _super);
    function Yy1_Sap_StatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Yy1_Sap_Status` entity based on its keys.
     * @param code Key property. See [[Yy1_Sap_Status.code]].
     * @returns A request builder for creating requests to retrieve one `Yy1_Sap_Status` entity based on its keys.
     */
    Yy1_Sap_StatusRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(Yy1_Sap_Status_1.Yy1_Sap_Status, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Yy1_Sap_Status` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Sap_Status` entities.
     */
    Yy1_Sap_StatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Yy1_Sap_Status_1.Yy1_Sap_Status);
    };
    return Yy1_Sap_StatusRequestBuilder;
}(core_1.RequestBuilder));
exports.Yy1_Sap_StatusRequestBuilder = Yy1_Sap_StatusRequestBuilder;
//# sourceMappingURL=Yy1_Sap_StatusRequestBuilder.js.map