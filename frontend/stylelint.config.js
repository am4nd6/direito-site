export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [true, {
      ignoreAtRules: ["tailwind", "apply"]
    }],
    "custom-property-empty-line-before": null,
    "media-feature-range-notation": null
  }
};
