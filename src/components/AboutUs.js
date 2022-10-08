import {owl} from '@odoo/owl';

const {Component, tags, useState} = owl;


const ABOUT_US_TEMPLATE = tags.xml`
    <div>
        <h3>This is About Us page</h3>
        <p>Content of About Us page</p>
    </div>
`;
export class AboutUs extends Component {
    static template = ABOUT_US_TEMPLATE
}