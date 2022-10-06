import {owl} from '@odoo/owl';

const {Component, tags} = owl;
import {MyContent1, MyContent2} from './components/MyContent'


const APP_TEMPLATE = tags.xml`
    <div>
        <h3>APP ROOT</h3>
        <MyContent1 conten1_props="'Im Content 1'" />
        <MyContent2 />
    </div>
`
export class App extends Component {
    static template = APP_TEMPLATE

    static components = {MyContent1, MyContent2}
}