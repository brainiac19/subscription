import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '好评弹窗',
      activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.mi.health:id/nextView"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13258813',
    },
    {
      key: 2,
      name: '权限提醒',
      activityIds: 'com.xiaomi.fitness.main.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]',
      snapshotUrls: 'https://i.gkd.li/import/13495035',
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          quickFind: true,
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13537836',
        },
      ],
    },
    {
      key: 4,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="发现新版本"] < * + * >n [text="放弃更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13537840',
    },
  ],
});
