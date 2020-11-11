# consum servei amb cloud sdk

## 1. Descarregar edmx del servei

## 2. Convertir edmx a csn <--- es pot fer directament al generar el client odata, pasar a punt 3

npm install -i @sap/edmx2csn

npx edmx2csn -i .\srv\generated\input\YY1_KANTOXAPI_CDS.xml -o .\srv\generated\modules\yy-1-kantoxapi-cds-service\csn\YY1_KANTOXAPI_CDS.csn

Al nou fitxer, esborrar lo primer de la versió

## 3. Generar client OData a partir del edmx
generate-odata-client --inputDir ./srv/generated/input --outputDir ./srv/generated/modules --generateCSN true --forceOverwrite true

## 4. Crear nueva entidad en cat-service.cds

using { YY1_KANTOXAPI_CDS as kantox } from './generated/modules/yy-1-kantoxapi-cds-service/csn/yy1_kantoxapi_cds.json';

@readonly entity KantoxData as projection on kantox.YY1_KantoxAPIType;


--------------------------------------------------------------


# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
