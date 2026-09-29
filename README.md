# `describe(fn)` crashes or hangs

Jest names a suite after a function passed as its name (`describe(add, ...)` becomes `add`).
Rstest passes the function through. With the default `forks` pool, the worker crashes because the
function can't be sent to the main process. With `vmThreads`, the run hangs with no output.

```sh
npm install
npm test          # Rstest (forks): fails, "could not be cloned"
npm run test:vm   # Rstest (vmThreads): hangs
npm run test:jest # Jest: passes
```
