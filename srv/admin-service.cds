using my.bookshop as my from '../db/data-model';

service AdminService @(_requires:'authenticated-user') {
  entity Books as projection on my.Books;

  annotate Authors with @odata.draft.enabled;
  entity Authors as projection on my.Authors;

  
}