import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './action';

createCustomElement('ntip-data-table', {
	renderer: { type: snabbdom },
	view,
	styles,
	initialState: {
		policyStages:[],
	},
	...actionHandlers,
	properties: {
		table: {
			default: ''
		},
		sysId: {
			default: ''
		},
	},
});