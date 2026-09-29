# `rs.mock` + `require()` crashes

Mocking a module with `rs.mock(path, factory)` and loading it with `require()` crashes with a
missing webpack runtime helper. The helper depends on the other test files in the run: alone it
is `__webpack_require__.r`, next to an ES module test file it is `__webpack_require__.d`.
`rs.mockRequire` works, and so does `jest.mock` under Jest.

```sh
npm install
npm test                  # Rstest: mock.test.js fails, "__webpack_require__1.r is not a function"
npm run test:esm-neighbor # Rstest: mock.test.js fails, "__webpack_require__1.d is not a function"
npm run test:jest         # Jest: passes
```
