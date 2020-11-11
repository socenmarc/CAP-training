using my.bookshop as my from '../db/data-model';

using { YY1_KANTOXAPI_CDS as kantox } from './generated/modules/yy-1-kantoxapi-cds-service/yy-1-kantoxapi-cds-service-csn.json';

service CatalogService @(path:'/browse') {

  @readonly entity Books as SELECT from my.Books {*,
    author.name as author
  } excluding { createdBy, modifiedBy };

  @requires_: 'authenticated-user'
  action submitOrder (book : Books.ID, amount: Integer);

  @readonly entity kantoxData as projection on kantox.YY1_KantoxAPI;
}


