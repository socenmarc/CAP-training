import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Yy1_Kantox_Status } from './Yy1_Kantox_Status';
/**
 * Request builder class for operations supported on the [[Yy1_Kantox_Status]] entity.
 */
export declare class Yy1_Kantox_StatusRequestBuilder extends RequestBuilder<Yy1_Kantox_Status> {
    /**
     * Returns a request builder for retrieving one `Yy1_Kantox_Status` entity based on its keys.
     * @param code Key property. See [[Yy1_Kantox_Status.code]].
     * @returns A request builder for creating requests to retrieve one `Yy1_Kantox_Status` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<Yy1_Kantox_Status>;
    /**
     * Returns a request builder for querying all `Yy1_Kantox_Status` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Kantox_Status` entities.
     */
    getAll(): GetAllRequestBuilder<Yy1_Kantox_Status>;
}
//# sourceMappingURL=Yy1_Kantox_StatusRequestBuilder.d.ts.map