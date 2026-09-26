const createCache = require('@emotion/cache').default;

test('uses the regular Emotion build', () => {
  expect(createCache({ key: 'probe' }).sheet.isSpeedy).toBe(true);
});
