import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Yy1_KantoxApi } from './Yy1_KantoxApi';
/**
 * Request builder class for operations supported on the [[Yy1_KantoxApi]] entity.
 */
export declare class Yy1_KantoxApiRequestBuilder extends RequestBuilder<Yy1_KantoxApi> {
    /**
     * Returns a request builder for retrieving one `Yy1_KantoxApi` entity based on its keys.
     * @param companyCode Key property. See [[Yy1_KantoxApi.companyCode]].
     * @param fiscalYear Key property. See [[Yy1_KantoxApi.fiscalYear]].
     * @param accountingDocument Key property. See [[Yy1_KantoxApi.accountingDocument]].
     * @param accountingDocumentItem Key property. See [[Yy1_KantoxApi.accountingDocumentItem]].
     * @returns A request builder for creating requests to retrieve one `Yy1_KantoxApi` entity based on its keys.
     */
    getByKey(companyCode: string, fiscalYear: string, accountingDocument: string, accountingDocumentItem: string): GetByKeyRequestBuilder<Yy1_KantoxApi>;
    /**
     * Returns a request builder for querying all `Yy1_KantoxApi` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_KantoxApi` entities.
     */
    getAll(): GetAllRequestBuilder<Yy1_KantoxApi>;
}
//# sourceMappingURL=Yy1_KantoxApiRequestBuilder.d.ts.map