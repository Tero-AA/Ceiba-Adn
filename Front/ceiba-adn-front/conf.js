exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/__test__/src/protractor.test.js'],
    capabilities: {
      browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:3000/',
  }