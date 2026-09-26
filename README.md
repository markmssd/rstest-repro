# Rstest resolves `development` builds under jsdom

With `testEnvironment: 'jsdom'`, Rstest resolves the `development` export condition, so packages like
`@emotion/cache` load their development builds. Jest's jsdom environment resolves the regular builds.

```sh
npm install
npm test          # Rstest: fails, `sheet.isSpeedy` is false (development build)
npm run test:jest # Jest: passes
```
