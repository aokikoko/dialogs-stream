/* eslint-disable no-unused-vars */
import template from "./template.vue";
import portal from "../../common/portal";
import { createPopper } from "@popperjs/core";
import { event1 } from "../../common/event/eventManager";
export async function tooltipBlock(domID, options) {
  const { content, position, closeBack, success, fail } = options;
  //阻塞状态排除相同的dom插入,防止出现多个tooltip
  if (event1.getEventStatus() && domID) event1.removeEvent(domID);

  //加入队列的事件
  const event = (next) => {
    const dom = document.getElementById(domID);
    if (dom) {
      const vm = portal(template, {
        props: { _next: next, content, position, closeBack },
      });
      const top = _getElementTop(dom);
      _scroll(top);
      createPopper(dom, vm.$el, {
        placement: position || "right",
      });
      if (typeof success === "function") success(vm);
    } else {
      if (typeof fail === "function") fail();
      next();
    }
  };

  //加入事件
  event1.addEventBlock(event, domID);
}

export function tooltip(domID, options) {
  const { content, position, closeBack, success, fail } = options;
  if (event1.getEventStatus() && domID) {
    event1.removeEvent(domID);
  }
  const event = () => {
    const dom = document.getElementById(domID);
    if (dom) {
      const vm = portal(template, {
        props: { content, position, closeBack },
      });
      const top = _getElementTop(dom);
      _scroll(top);
      createPopper(dom, vm.$el, {
        placement: position || "right",
      });
      if (typeof success === "function") success(vm);
    } else {
      if (typeof fail === "function") fail();
    }
  };
  event1.addEvent(event, domID);
}

/**
 * 查找元素在屏幕中的位置
 * @param {Element} element
 * @returns
 */
function _getElementTop(element) {
  let actualTop = element.offsetTop; //这是获取元素距父元素顶部的距离
  let current = element.offsetParent; //这是获取父元素
  while (current !== null) {
    //当它上面有元素时就继续执行
    actualTop += current.offsetTop; //这是获取父元素距它的父元素顶部的距离累加起来
    current = current.offsetParent; //继续找父元素
  }
  return actualTop;
}

/**
 * 跳转到屏幕某个高度  window.scroll
 * @param {Number} top
 * @returns
 */
function _scroll(top) {
  if (top === 0) {
    window.scroll(0, 0);
    return;
  }
  let currentTop = null;
  let interval = setInterval(() => {
    if (currentTop >= top) {
      clearInterval(interval);
      interval = null;
    } else {
      window.scroll(0, currentTop);
      currentTop += top / 20;
    }
  }, 10);
}
