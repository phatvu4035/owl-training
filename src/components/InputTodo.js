import {owl} from '@odoo/owl';

const {Component, tags, useState, hooks} = owl;
const {useDispatch} = hooks;


const INPUT_TODO_TEMPLATE = tags.xml`
    <div>
        <h3>Input Todo</h3>
        <form>
            <input type="text" t-on-change="_onInputTodo" id="todo-name"/>
        </form>
    </div>
`;
export class InputTodo extends Component {
    static template = INPUT_TODO_TEMPLATE

    dispatch = useDispatch()
    
    _onInputTodo(ev) {
        var $todo_input = document.getElementById('todo-name');
        var value = $todo_input.value

        this.dispatch('add', value)
    }
}