'use strict'

module.exports = {
    rules: {
        'no-old-request': require('./rules/no-old-request'),
    },
    rulesConfig: {
        'no-old-request': 1,
    },
    configs: {
        recommended: {
            plugins: ['daka-request'],
            rules: {
                'daka-request/no-old-request': 'warn',
            }
        }
    }
}
