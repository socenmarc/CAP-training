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
exports.Yy1_KantoxApiRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Yy1_KantoxApi_1 = require("./Yy1_KantoxApi");
/**
 * Request builder class for operations supported on the [[Yy1_KantoxApi]] entity.
 */
var Yy1_KantoxApiRequestBuilder = /** @class */ (function (_super) {
    __extends(Yy1_KantoxApiRequestBuilder, _super);
    function Yy1_KantoxApiRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Yy1_KantoxApi` entity based on its keys.
     * @param companyCode Key property. See [[Yy1_KantoxApi.companyCode]].
     * @param fiscalYear Key property. See [[Yy1_KantoxApi.fiscalYear]].
     * @param accountingDocument Key property. See [[Yy1_KantoxApi.accountingDocument]].
     * @param accountingDocumentItem Key property. See [[Yy1_KantoxApi.accountingDocumentItem]].
     * @returns A request builder for creating requests to retrieve one `Yy1_KantoxApi` entity based on its keys.
     */
    Yy1_KantoxApiRequestBuilder.prototype.getByKey = function (companyCode, fiscalYear, accountingDocument, accountingDocumentItem) {
        return new core_1.GetByKeyRequestBuilder(Yy1_KantoxApi_1.Yy1_KantoxApi, {
            CompanyCode: companyCode,
            FiscalYear: fiscalYear,
            AccountingDocument: accountingDocument,
            AccountingDocumentItem: accountingDocumentItem
        });
    };
    /**
     * Returns a request builder for querying all `Yy1_KantoxApi` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_KantoxApi` entities.
     */
    Yy1_KantoxApiRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Yy1_KantoxApi_1.Yy1_KantoxApi);
    };
    return Yy1_KantoxApiRequestBuilder;
}(core_1.RequestBuilder));
exports.Yy1_KantoxApiRequestBuilder = Yy1_KantoxApiRequestBuilder;
//# sourceMappingURL=Yy1_KantoxApiRequestBuilder.js.map