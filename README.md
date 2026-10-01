# `rs.spyOn` throws on exports of a factory-mocked module

Since 0.12.3, spying on an export of a module mocked with a factory throws
`Cannot spy on "greet": it is a read-only export of a third-party or native ES module`.
It passes on 0.12.2 and on Vitest. Spying on the same module without mocking it still works.

```sh
npm install
npm test             # Rstest 0.12.3: rstest/mocked.test.js fails
npm run test:0.12.2  # Rstest 0.12.2: both pass
npm run test:vitest  # Vitest 5: both pass
```

Both Rstest versions are installed through an npm alias, so each script runs its own copy.
