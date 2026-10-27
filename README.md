# `afterEach` hooks run in reverse order

Rstest runs a suite's `afterEach` hooks last-declared first. Jest runs them in the order they're
declared. Vitest also reverses them by default, but `sequence.hooks: 'list'` switches to Jest's
order. Rstest has no equivalent option.

```sh
npm install
npm test                 # Rstest 0.12.5: fails, order is ['second', 'first']
npm run test:jest        # Jest 30: passes
npm run test:vitest      # Vitest 4, default 'stack': fails
npm run test:vitest-list # Vitest 4, sequence.hooks 'list': passes
```
