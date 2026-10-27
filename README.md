# A module that only registers mocks is dropped under `"sideEffects": false`

A test imports `./answer.mock.module.js` for its `rs.mock` call alone. Because the package declares
`"sideEffects": false`, Rspack drops that import, so the mock is never registered and the test gets
the real module. Jest evaluates every import, so the same pattern with `jest.mock` works there.

```sh
npm install
npm test                 # fails: expected 'real' to be 'mocked'
npm run test:no-pruning  # passes with optimization.sideEffects disabled
```
