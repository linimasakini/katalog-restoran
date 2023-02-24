import NotificationHelper from './notifikation-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    console.log(JSON.parse(message.data));

    const resto = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${resto.title}`,
      options: {
        Image: `${CONFIG.BASE_IMG_URL}`,
      },
    });
  },
};
export default WebSocketInitiator;
