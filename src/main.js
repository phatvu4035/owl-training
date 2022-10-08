import {owl} from '@odoo/owl';

const {utils, mount, router, QWeb, Store} = owl;
import {App} from './App';
import {Home} from './components/Home';
import {AboutUs} from './components/AboutUs';

const ROUTES = [
    {name: 'HOME', path: '/', component: Home},
    {name: 'ABOUTUS', path: '/aboutus', component: AboutUs},
]

// state, actions, getter, info
const initialState = {
    todo_list: [
        'To do 1',
    ]
}

const actions = {
    add({state}, name) {
        state.todo_list.push(name)
    }
}

const getters = {
    getTodoList({state}) {
        return state.todo_list
    }
}

function makeStore() {
    const store = new Store({initialState, actions, getters});
    return store;
}


async function makeEnviroment(store) {
    const env = {qweb: new QWeb(), store: store};
    env.router = new router.Router(env, ROUTES, {mode: 'hash'}) // history_mode
    await env.router.start()
    return env
}


async function setup() {
    let store = makeStore()
    App.env = await makeEnviroment(store)
    mount(App, {target: document.body})
}

utils.whenReady(setup)