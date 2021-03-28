import renderApp from ".";

function replacePage(path) {
  window.history.pushState(null, null, path);
  window.scrollTo(0, 0);
  renderApp();
}

export { replacePage };
