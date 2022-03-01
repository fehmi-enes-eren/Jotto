module.exports = {
    ...jest.requireActual(".."), // just to import the module in parent directory
    __esModule: true,
    // TODO: update return value for Redux implementation
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve("party")),
}