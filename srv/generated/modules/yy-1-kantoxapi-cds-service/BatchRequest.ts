/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { Yy1_KantoxApi, Yy1_Kantox_Status, Yy1_Sap_Status } from './index';

/**
 * Batch builder for operations supported on the Yy 1 Kantoxapi Cds Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadYy1KantoxapiCdsServiceRequestBuilder | ODataBatchChangeSet<WriteYy1KantoxapiCdsServiceRequestBuilder>>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultYy1KantoxapiCdsServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Yy 1 Kantoxapi Cds Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteYy1KantoxapiCdsServiceRequestBuilder[]): ODataBatchChangeSet<WriteYy1KantoxapiCdsServiceRequestBuilder> {
  return new ODataBatchChangeSet(requests);
}

export const defaultYy1KantoxapiCdsServicePath = '/sap/opu/odata/sap/YY1_KANTOXAPI_CDS';
const map = { 'YY1_KantoxAPI': Yy1_KantoxApi, 'YY1_KANTOX_STATUS': Yy1_Kantox_Status, 'YY1_SAP_STATUS': Yy1_Sap_Status };
export type ReadYy1KantoxapiCdsServiceRequestBuilder = GetAllRequestBuilder<Yy1_KantoxApi> | GetAllRequestBuilder<Yy1_Kantox_Status> | GetAllRequestBuilder<Yy1_Sap_Status> | GetByKeyRequestBuilder<Yy1_KantoxApi> | GetByKeyRequestBuilder<Yy1_Kantox_Status> | GetByKeyRequestBuilder<Yy1_Sap_Status>;
export type WriteYy1KantoxapiCdsServiceRequestBuilder = CreateRequestBuilder<Yy1_KantoxApi> | UpdateRequestBuilder<Yy1_KantoxApi> | DeleteRequestBuilder<Yy1_KantoxApi> | CreateRequestBuilder<Yy1_Kantox_Status> | UpdateRequestBuilder<Yy1_Kantox_Status> | DeleteRequestBuilder<Yy1_Kantox_Status> | CreateRequestBuilder<Yy1_Sap_Status> | UpdateRequestBuilder<Yy1_Sap_Status> | DeleteRequestBuilder<Yy1_Sap_Status>;
