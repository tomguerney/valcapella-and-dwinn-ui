module.exports = {
  transform: {
    '\\.js$': ['babel-jest'],
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    "\\.(png|mp3)$": "<rootDir>/src/tests/__mocks__/fileMock.js"
  }
}
