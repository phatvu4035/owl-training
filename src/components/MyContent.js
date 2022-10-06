import {owl} from '@odoo/owl';

const {Component, tags, useState} = owl;



const MY_CONTENT1_TEMPLATE = tags.xml`
    <div>
        <h5 t-on-click="updateTitle" >MY Content 1</h5>
        <p><t t-esc="props.conten1_props"/></p>
        <p><t t-esc="state.title"/></p>
    </div>
`;

const MY_CONTENT2_TEMPLATE = tags.xml`
    <div>
        <h5>MY Content 2</h5>
    </div>
`;

export class MyContent1 extends Component {
    static template = MY_CONTENT1_TEMPLATE

    state = useState({
        title: 'My New Content 1'
    })

    constructor(parent, props) {
        super(...arguments)
    }

    updateTitle(ev) {
        this.state.title = 'My Old Content 1';
    }
}


export class MyContent2 extends Component {
    static template = MY_CONTENT2_TEMPLATE
}