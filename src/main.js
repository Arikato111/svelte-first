import './index.css'
import 'atropos/css'
import Routes from './Routes.svelte'

const app = new Routes({
  target: document.getElementById("app"),
});

export default app;
