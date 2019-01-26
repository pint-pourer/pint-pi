import RedisSMQ from "rsmq";

const REDIS_OPTIONS = { host: "127.0.0.1", port: 6379, ns: "" };
export const rsmq = new RedisSMQ(REDIS_OPTIONS);
rsmq.setMaxListeners(1);

const createQueue = qname =>
  rsmq.createQueue({ qname }, (err, resp) => {
    if (resp === 1) {
      console.log("Queue created!");
    }
  });

const deleteQueue = qname =>
  rsmq.deleteQueue({ qname }, () => {
    console.log("Queue deleted!");
  });

export const initQueue = qname =>
  rsmq.getQueueAttributes({ qname }, (err, resp) => {
    if (resp) {
      deleteQueue(qname);
    }
    createQueue(qname);
  });

export const sendMessage = (rsmq, qname) =>
  rsmq.sendMessage({ qname, message: "Pour a pint!" }, (err, resp) => {
    if (resp) {
      console.log("Message sent to Redis Queue!");
    }
  });
