let id = 0;
const closed = Symbol("close");
const eventList = Symbol("eventList");
const eventID = Symbol("eventID");
export default class eventCenter {
  constructor() {
    this.id = id++;
    this[eventList] = []; //事件列表
    this[eventList].BLOCK = false; //开关
    this[eventID] = 0; //事件ID
    this[closed] = false; // 是否关闭
  }
  /**
   * 如果事件列表未被锁定，获取事件列表中的第一个函数并执行，
   * 如果遇到Block函数，则把BLOCK置为true，等待unlock解锁
   */
  next() {
    if (this[eventList].BLOCK) return;
    const { id, fn } = this[eventList].shift() || {};
    if (fn) {
      if (fn.type === "block") {
        this[eventList].BLOCK = true;
        this[eventList].EVENT_ID = id;
      }
      fn();
      this.next();
    }
  }

  /**
   * 解锁函数，传递给eventBlock中的fn,unlock在组件中只能使用一次
   */
  unlock(eventID) {
    let flag = true;
    return function () {
      console.log(this[eventList].EVENT_ID,eventID);
      if (flag && eventID === this[eventList].EVENT_ID) {
        flag = !flag;
        this[eventList].BLOCK = false;
        this.next();
      } else {
        console.warn("The next method can only be called once");
      }
    }.bind(this);
  }

  /**
   *
   * @returns 当前锁状态false:解锁状态   true 锁定状态
   */
  getEventStatus() {
    return this[eventList].BLOCK;
  }

  /**
   * 添加阻塞事件
   * @param {Function} fn   事件
   * @param {Object} vm  this
   * @param {String} key  id值，如果不提供则自动id++
   */
  addEventBlock(fn, key) {
    if (this[closed]) return;
    _checkIsFunc(fn);
    return new Promise((resolve) => {
      const id = key || this[eventID]++;
      const _fn = () => {
        resolve(fn(this.unlock(id)));
      };
      _fn.type = "block";
      this[eventList].push({ id, fn: _fn });
      this.next();
    });
  }
  /**
   * 添加非阻塞事件
   * @param {Function} fn   事件
   * @param {Object} vm   this
   * @param {String} key  id值，
   */
  addEvent(fn, key) {
    if (this[closed]) return;
    _checkIsFunc(fn);
    return new Promise((resolve) => {
      const _fn = () => {
        resolve(fn());
      };
      this[eventList].push({ id: key, fn: _fn });
      this.next();
    });
  }

  /**
   * 根据ID移除Fn
   * @param {int} id
   * @returns
   */
  removeEvent(eventId) {
    _checkID(eventId);
    this[eventList].forEach(({ id }, index) => {
      if (id === eventId) {
        this[eventList].splice(index, 1);
      }
    });
  }

  /**
   * 查询Fn
   * @param {*} eventId
   * @returns
   */
  hasEvent(eventId) {
    _checkID(eventId);
    return this[eventList].filter(({ id }) => eventId === id);
  }
  /**
   * 关闭当前实例的使用
   */
  close() {
    this[eventList].splice(0, this[eventList].length);
    this.closed = true;
  }
}

/**
 * 检查传入fn是否为函数
 * @param {Function} fn
 */
function _checkIsFunc(fn) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw new Error("Event parameter is not a function");
  }
}

/**
 * 检查传入fn是否为函数
 * @param {Function} fn
 */
function _checkID(eventID) {
  const noList = ["[object String]", "[object Number]"];
  if (noList.indexOf(Object.prototype.toString.call(eventID)) === -1) {
    throw new Error("id format error");
  }
}
