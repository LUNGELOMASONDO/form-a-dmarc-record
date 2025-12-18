# Form a DMARC Record

Small Angular app to interactively build a DMARC TXT record.

## Quick start

- Install dependencies:
  npm install
  ng build
  ng serve

------------What this project contains------------
UI to configure common DMARC tags and preview the resulting TXT record.
Core service that holds the record state: BuildRecordService.

------------Notes for developers------------
Angular 20 with Signals is used in the service to hold state; see BuildRecordService.
Keep embedded tag objects small — the app models tags as classes in DMARCRecordTags.

Website: https://lungelomasondo.github.io/form-a-dmarc-record/