module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
};
