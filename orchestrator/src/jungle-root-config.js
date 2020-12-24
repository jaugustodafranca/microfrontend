import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname === "/",
});

registerApplication({
  name: "@jungle/vue-single",
  app: () => System.import("@jungle/vue-single"),
  activeWhen: location => location.pathname === "/vue",
});

registerApplication({
  name: "@jungle/react-single",
  app: () => System.import("@jungle/react-single"),
  activeWhen: location => location.pathname === "/react",
});

registerApplication({
  name: "@angular-single",
  app: () => System.import("@angular-single"),
  activeWhen: location => location.pathname === "/angular",
});

start({
  urlRerouteOnly: true,
});
