import { Component, tags, hooks } from "@odoo/owl";
import { MyContent1, MyContent2 } from "./components/MyContent";

const RouteComponent = router.RouteComponent;

const useComponent = hooks.useComponent


const APP_TEMPLATE = tags.xml/*xml*/ `
<main t-name="App" class="">
  
</main>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { MyContent1, MyContent2};
}
