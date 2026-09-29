# Synchronous access to a dependency with top-level await

`tla-pkg` uses top-level `await`. A plain `import` of it works, but `rs.requireActual` returns a
promise, so its exports are missing. Mock factories that spread `rs.requireActual`, or a
`with { rstest: 'importActual' }` import, silently lose the real exports too, and so does `rs.requireActual` of any module that imports it.

```sh
npm install
npm test # Rstest: import.test.js passes, the other four fail with "is not a function"
```
