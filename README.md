# Synchronous access to a dependency with top-level await

`tla-pkg` uses top-level `await`. A plain `import` of it works, but `rs.requireActual` returns a
promise, so its exports are missing. Mock factories that spread `rs.requireActual`, or a
`with { rstest: 'importActual' }` import, silently lose the real exports too.

```sh
npm install
npm test # Rstest: import.test.js passes, the other three fail with "is not a function"
```
