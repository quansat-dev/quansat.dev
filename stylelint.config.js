/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-html/svelte',
		'stylelint-config-clean-order',
	],
	rules: {
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: ['theme'],
			},
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'layer',
					'config',
					'screen',
					'mixin',
					'define-mixin',
					'theme',
					'utility',
					'variant',
				],
			},
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreFunctions: ['theme'],
			},
		],
		'declaration-block-no-redundant-longhand-properties': null,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'custom-property-empty-line-before': null,
		'comment-empty-line-before': null,
		'custom-property-pattern': null,
	},
	ignoreFiles: ['**/app.html', '**/*.template.html'],
};

