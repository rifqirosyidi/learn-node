const EventEmiter = require("events");

class MyEmiter extends EventEmiter {}

// Init Obj
const myEmiter = new MyEmiter();

// Event Listener
myEmiter.on("event", () => console.log("event fired"));

// Init Event
myEmiter.emit("event");
myEmiter.emit("event");
myEmiter.emit("event");
myEmiter.emit("event");
