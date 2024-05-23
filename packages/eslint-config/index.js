module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "parameter",
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      }
    ]
  },
};