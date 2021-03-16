module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"parserOptions": {
		"ecmaVersion": 12
	},
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-newline": "off",
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"array-callback-return": "error",
		"array-element-newline": "off",
		"arrow-body-style": "error",
		"arrow-parens": "off",
		"arrow-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"block-scoped-var": "off",
		"block-spacing": "off",
		"brace-style": "off",
		"callback-return": "off",
		"camelcase": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "error",
		"comma-dangle": "off",
		"comma-spacing": "off",
		"comma-style": "off",
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "off",
		"curly": "off",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "off",
		"eol-last": "off",
		"eqeqeq": "off",
		"func-call-spacing": "off",
		"func-name-matching": "error",
		"func-names": "off",
		"func-style": "off",
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": "off",
		"generator-star-spacing": "error",
		"global-require": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "off",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-denylist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"indent": "off",
		"indent-legacy": "off",
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"line-comment-position": "off",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "off",
		"lines-around-directive": "off",
		"lines-between-class-members": "error",
		"max-classes-per-file": "error",
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "off",
		"multiline-comment-style": "off",
		"multiline-ternary": "off",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-alert": "off",
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "off",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "off",
		"no-confusing-arrow": "error",
		"no-console": "off",
		"no-constructor-return": "error",
		"no-continue": "error",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "off",
		"no-empty-function": "off",
		"no-eq-null": "off",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "off",
		"no-implicit-coercion": [
			"error",
			{
				"boolean": false,
				"number": false,
				"string": false
			}
		],
		"no-implicit-globals": "off",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "off",
		"no-lonely-if": "off",
		"no-loop-func": "off",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "off",
		"no-mixed-operators": "off",
		"no-mixed-requires": "error",
		"no-multi-assign": "off",
		"no-multi-spaces": "off",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "off",
		"no-native-reassign": "off",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": "off",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-promise-executor-return": "off",
		"no-proto": "off",
		"no-restricted-exports": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "off",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "off",
		"no-shadow": "off",
		"no-spaced-func": "off",
		"no-sync": "error",
		"no-tabs": "off",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-expressions": "off",
		"no-use-before-define": "off",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "off",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "off",
		"no-var": "off",
		"no-void": "off",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": [
			"error",
			"any"
		],
		"object-curly-newline": "off",
		"object-curly-spacing": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"operator-assignment": "off",
		"operator-linebreak": [
			"error",
			"after"
		],
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "off",
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "off",
		"prefer-promise-reject-errors": "error",
		"prefer-reflect": "off",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "off",
		"quote-props": "off",
		"quotes": "off",
		"radix": [
			"error",
			"as-needed"
		],
		"require-atomic-updates": "error",
		"require-await": "off",
		"require-jsdoc": "off",
		"require-unicode-regexp": "off",
		"rest-spread-spacing": "error",
		"semi": "off",
		"semi-spacing": "off",
		"semi-style": "off",
		"sort-imports": "error",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": "off",
		"space-before-function-paren": "off",
		"space-in-parens": "off",
		"space-infix-ops": "off",
		"space-unary-ops": "error",
		"spaced-comment": "off",
		"strict": "off",
		"switch-colon-spacing": [
			"error",
			{
				"after": false,
				"before": false
			}
		],
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"valid-jsdoc": "off",
		"vars-on-top": "off",
		"wrap-iife": "off",
		"wrap-regex": "off",
		"yield-star-spacing": "error",
		"yoda": "off"
	}
};
