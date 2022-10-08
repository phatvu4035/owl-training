import {owl} from '@odoo/owl';

const {Component, tags, useState, hooks} = owl;
const {useGetters} = hooks;


const TODO_LIST_TEMPLATE = tags.xml`
    <div>
        <h3>Todolist</h3>

    </div>
`;
export class TodoList extends Component {
    static template = TODO_LIST_TEMPLATE

    getters = useGetters();

    constructor() {
        super()
    }
}