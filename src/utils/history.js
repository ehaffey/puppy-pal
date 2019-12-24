import { createBrowserHistory } from "history";
// export default createBrowserHistory();
export default createBrowserHistory({
  basename: window.location.hostname === 'localhost' ? '' : '/puppy-pal'
});
