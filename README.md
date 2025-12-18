# Form a DMARC Record

Small Angular app to interactively build a DMARC TXT record and preview the resulting DNS value.

## Quick start

Install dependencies and run the app locally:

```bash
npm install
ng build
ng serve --open
```

Open http://localhost:4200/ (default Angular port).

## Project overview

- Purpose: Provide a simple UI to configure common DMARC tags and generate a valid DMARC TXT record.

## What this project contains

- UI to configure common DMARC tags and preview the resulting TXT record.
- Core service that holds the record state: BuildRecordService.

## Notes for developers

- BuildRecordService uses Angular Signals to hold record state; consult the service for update/validation logic.
- DMARC validation in the service is intentionally lightweight; adjust rules where stricter validation is required.
- Keep tag model objects small and focused — the app models tags as classes in models\DMARCRecordTags.

## Contributing

- Fork the repo, create a feature branch, add tests for new behavior, and open a PR.
- Keep changes small and focused; short write up explaining any model changes.

## Links

- Website: https://lungelomasondo.github.io/form-a-dmarc-record/

## License

See the repository LICENSE file for license details.