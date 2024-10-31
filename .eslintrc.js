module.exports = {
    root: true,
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'off',
        'react/no-unstable-nested-components': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'performance/no-unsafe-code': 'off',
        'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
        },
        ],
    },
};
