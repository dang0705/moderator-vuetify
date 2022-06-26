export default function ({ name, nick, userId, days, expired, times }) {
  return [
    {
      text: '解除禁言',
      type: 'dialog',
      title: {
        name: name || nick,
        body: '用户',
        operate: '解除禁言'
      },

      ele: [
        {
          type: 'mute-info',
          key: 'days',
          onlyInfo: true,
          options: { nextTimes: times, nextDays: days, nextExpired: expired }
        }
      ],
      request: {
        storeMethod: 'unMute',
        params: { userId }
      },
      confirmText: '解除禁言'
    }
  ];
}
/*export default [
    {
    type: "toggle",
    text: "解除禁言",
    idModel,
    body,
    operate: "解除禁言",
    storeMethod: "unMute"
  }

];*/
