/* eslint-disable no-unused-vars */
import template from "./template.vue";
import portal from "../../common/portal";
import { event1, close } from "../../common/event/eventManager.js";
export default function dialogBlock(options) {
  const { content, key, success } = options;
  if (event1.getEventStatus() && key) {
    event1.removeEvent(key);
  }
  const event = (next) => {
    const vm = portal(template, {
      props: {
        _next: next,
        content,
        closeAll() {
          close(event1);
        },
      },
    });
    if (typeof success === "function") success(vm);
  };
  event1.addEventBlock(event, key);
}
