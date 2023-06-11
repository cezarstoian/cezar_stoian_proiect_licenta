import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_APP_KEY!,
  cluster: 'eu',
  secret: process.env.PUSHER_SECRET!,
  useTLS: true,
})

export const pusherClient = new PusherClient('1f3f47bc804f63c96757',
  {
    cluster: 'eu',
  }
)
