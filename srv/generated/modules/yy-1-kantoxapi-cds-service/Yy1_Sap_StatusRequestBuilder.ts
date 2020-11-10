/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Yy1_Sap_Status } from './Yy1_Sap_Status';

/**
 * Request builder class for operations supported on the [[Yy1_Sap_Status]] entity.
 */
export class Yy1_Sap_StatusRequestBuilder extends RequestBuilder<Yy1_Sap_Status> {
  /**
   * Returns a request builder for retrieving one `Yy1_Sap_Status` entity based on its keys.
   * @param code Key property. See [[Yy1_Sap_Status.code]].
   * @returns A request builder for creating requests to retrieve one `Yy1_Sap_Status` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<Yy1_Sap_Status> {
    return new GetByKeyRequestBuilder(Yy1_Sap_Status, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Yy1_Sap_Status` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Sap_Status` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Sap_Status> {
    return new GetAllRequestBuilder(Yy1_Sap_Status);
  }
}
