import { owl } from "@odoo/owl";
const { utils, mount, router, QWeb } = owl;
import { App  } from "./components/App";


async function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
