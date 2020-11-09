annotate CatalogService.Books with @(
  UI: {
    SelectionFields: [ ID, price, currency_code ],
    LineItem: [
      {Value: title, Label:'{i18n>Author}'},
      {Value: author, Label:'{i18n>Author}'},
      {Value: genre.name},
      {Value: price},
      {Value: currency.symbol, Label:' '},
    ]
  }
);

annotate AdminService.Authors with {
    ID @Core.Computed;                 //to prevent popup asking for ID in the UI (as of 1.79.0)    
}

annotate AdminService.Authors with @(
  UI: {
    SelectionFields: [ ID, name ],
    LineItem: [
      {Value: name, Label:'{i18n>Pepe}'},
      {Value: ID, Label:'{i18n>Author}'}
    ],
    
    Identification: [ {Value: name} ],
    HeaderInfo: {
            TypeName: '{i18n>notification}',
            TypeNamePlural: '  ',
            Title: {Value: businessObject_ID},
            Description: {Value: ID}
    },
    Facets: [
            {
                $Type: 'UI.ReferenceFacet', 
                Label: '{i18n>books}', 
                Target: '@UI.FieldGroup#Details'
            }            
        ],
  }
);