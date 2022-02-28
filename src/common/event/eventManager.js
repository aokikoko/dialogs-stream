import eventCenter from "./eventCenter";
//tooltip和dialog使用eventCenter
export const event1 = new eventCenter();

export function close(eventInstance) {
  if (eventInstance.__proto__ !== eventCenter.prototype) {
    throw new Error("传入值非eventCenter实例");
  }
  eventInstance.close();
}
