import RSMQWorker from "rsmq-worker";
import shell from "shelljs";

export const initWorker = (rsmq, processMessage) => {
  const worker = new RSMQWorker("pourQueue", { rsmq });

  worker.on("message", processMessage);

  worker.start();
};

export const processPint = (msg, next, id) => {
  console.log("Pouring your pint!" + id);
  if (shell.exec("python3 ./src/python/pour.py").code === 0) {
    next();
  } else {
    console.error("Pouring failed!");
  }
};
