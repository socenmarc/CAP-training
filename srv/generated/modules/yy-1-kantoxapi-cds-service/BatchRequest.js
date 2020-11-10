"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultYy1KantoxapiCdsServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Yy 1 Kantoxapi Cds Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilder(exports.defaultYy1KantoxapiCdsServicePath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Yy 1 Kantoxapi Cds Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
function changeset() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSet(requests);
}
exports.changeset = changeset;
exports.defaultYy1KantoxapiCdsServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
var map = { 'YY1_KantoxAPI': index_1.Yy1_KantoxApi, 'YY1_KANTOX_STATUS': index_1.Yy1_Kantox_Status, 'YY1_SAP_STATUS': index_1.Yy1_Sap_Status };
//# sourceMappingURL=BatchRequest.js.map