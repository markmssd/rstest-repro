# `restoreMocks` wipes `mockReturnValue`

With `restoreMocks: true` (or `rs.restoreAllMocks()`), Rstest resets every mock function, so values
set with `mockReturnValue`, including those set in a mock factory, are gone. Jest 30 and Vitest 4
only restore spies. Vitest 5 also keeps return values, but clears call history.

```sh
npm install
npm test             # Rstest 0.12.2: 3 of 6 fail
npm run test:jest    # Jest 30: all pass
npm run test:vitest4 # Vitest 4: all pass
npm run test:vitest5 # Vitest 5: only "keeps call history" fails
```

Both Vitest versions are installed through npm aliases, so each script runs its own copy.
