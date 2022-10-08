import {owl} from '@odoo/owl';

const {Component, tags, router, } = owl;
import {MyContent1, MyContent2} from './components/MyContent';
import {InputTodo} from './components/InputTodo';
import {TodoList} from './components/TodoList';

const RouteComponent = router.RouteComponent;
const Link = router.Link;


const APP_TEMPLATE = tags.xml`
    <div>
        <h3>APP ROOT</h3>
        <MyContent1 conten1_props="'Im Content 1'" />
        <MyContent2 />
        <p><Link to="'HOME'">Home</Link></p>
        <p><Link to="'ABOUTUS'">About Us</Link></p>
        <RouteComponent />
        <p>Please input todo name</p>
        <InputTodo />
        <TodoList />
    </div>
`
export class App extends Component {
    static template = APP_TEMPLATE

    static components = {MyContent1, MyContent2, RouteComponent, Link, TodoList, InputTodo}
}