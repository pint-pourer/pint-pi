/* eslint-disable no-console */

import Pusher from "pusher-js";

const PUSHER_APP_KEY = "fa06261efc5349a70ad5";
const PUSHER_APP_CLUSTER = "eu";
const PUSHER_POUR_CHANNEL = "pour";

const socket = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_APP_CLUSTER
});

const pourChannel = socket.subscribe(PUSHER_POUR_CHANNEL);

pourChannel.bind_global((event, data) => {
  console.log(`Received event: ${event}, with data: ${data}`);
});
