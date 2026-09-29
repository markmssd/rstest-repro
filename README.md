# Passing matchers inspect their arguments

`toHaveBeenCalledWith` and `toContain` format their failure message before checking whether they
passed, so a passing assertion still walks every argument with the inspector. Here that reads a
getter that throws. Jest only formats the message when the assertion fails.

```sh
npm install
npm test          # Rstest: both tests fail, the getter was read
npm run test:jest # Jest: passes
```
