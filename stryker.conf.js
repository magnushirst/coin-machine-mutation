module.exports = {
    mutate: [
        'src/**/*.js',
        '!src/**/*.spec.js'
    ],
    testFramework: 'jest',
    testRunner: 'jest',
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'perTest'
}