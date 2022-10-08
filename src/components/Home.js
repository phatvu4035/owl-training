import {owl} from '@odoo/owl';

const {Component, tags, useState} = owl;


const HOME_TEMPLATE = tags.xml`
    <div>
        <h3>This is Home page</h3>
        <p>Content of Home page</p>
    </div>
`;
export class Home extends Component {
    static template = HOME_TEMPLATE
}