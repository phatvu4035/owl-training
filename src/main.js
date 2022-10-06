import {owl} from '@odoo/owl';

const {utils, mount} = owl;
import {App} from './App'


async function setup() {
    mount(App, {target: document.body})
}

utils.whenReady(setup)