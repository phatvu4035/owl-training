import { owl } from "@odoo/owl";
const { Component, tags, useState, hooks, router } = owl
const RouteComponent = router.RouteComponent;
import {HotNews} from "./news/News";

const { xml } = tags;
const {onMounted, onWillUnmount} = hooks;

export class App extends Component {
  static template = xml`<div>Hello <t t-esc="state.text"/><HotNews /></div>`;
  state = useState({ text: "Owl" });

  static components = {HotNews};

  constructor() {
    super(...arguments)     
}

  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
  setup() {
    onMounted(()=> {
      
    })
  }
  mounted() {
    super.mounted()
  }
}
