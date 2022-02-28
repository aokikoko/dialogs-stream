import Vue from "vue";
export default function (template, options) {
  let portalDom = document.querySelector("#portal");
  if (!portalDom) {
    portalDom = document.createElement("div");
    portalDom.id = "portal";
    document.querySelector("body").appendChild(portalDom);
  }
  let vm = null;
  const p = new Promise((resolve) => {
    let profile = Vue.extend({
      render: function (h) {
        return h(
          "div",
          {
            class: {
              portal: true,
            },
          },
          [
            h(template, {
              props: Object.assign(options?.props || {}, {
                resolveCB: resolve,
              }),
            }),
          ]
        );
      },
    });
    vm = new profile();
    vm.$mount();
    portalDom.appendChild(vm.$el);
  });
  p.then(() => {
    vm.$destroy();
    portalDom.removeChild(vm.$el);
  });
  return vm;
}
