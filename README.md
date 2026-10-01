# Rstest reproductions

Each reproduction lives on its own branch:

- [`development-builds`](https://github.com/markmssd/rstest-repro/tree/development-builds): jsdom tests resolve the `development` export condition, unlike Jest
- [`describe-function-name`](https://github.com/markmssd/rstest-repro/tree/describe-function-name): `describe(fn)` crashes the worker or hangs, unlike Jest
- [`eager-matcher-message`](https://github.com/markmssd/rstest-repro/tree/eager-matcher-message): passing `toHaveBeenCalledWith` and `toContain` inspect their arguments, unlike Jest
- [`top-level-await-dependency`](https://github.com/markmssd/rstest-repro/tree/top-level-await-dependency): `rs.requireActual` and mock factories lose the exports of a dependency with top-level await
- [`mock-with-require`](https://github.com/markmssd/rstest-repro/tree/mock-with-require): `rs.mock` + `require()` crashes with a missing webpack runtime helper
- [`restore-mocks`](https://github.com/markmssd/rstest-repro/tree/restore-mocks): `restoreMocks` wipes `mockReturnValue`, unlike Jest 30 and Vitest 4+
- [`spy-on-mocked-module`](https://github.com/markmssd/rstest-repro/tree/spy-on-mocked-module): `rs.spyOn` throws on exports of a factory-mocked module since 0.12.3
