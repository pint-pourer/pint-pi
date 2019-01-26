/* eslint-disable no-console */

import { initPusher } from "./pusher";
import { initQueue, rsmq, sendMessage } from "./queue";
import { initWorker, processPint } from "./worker";

const qname = "pourQueue";
initQueue(qname);
initPusher(() => sendMessage(rsmq, qname));
initWorker(rsmq, processPint);
