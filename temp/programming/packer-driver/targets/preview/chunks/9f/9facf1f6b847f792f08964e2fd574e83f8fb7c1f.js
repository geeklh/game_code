System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Wheel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7891Z6Y1VMsK0y9CLYwXeP", "Wheel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Wheel", Wheel = (_dec = ccclass('Wheel'), _dec(_class = class Wheel extends Component {
        start() {}

        update(deltaTime) {}

        getResult() {
          var temp = Math.random() * 100;
          var result = null;

          if (temp >= 0 && temp < 70) {
            result = '谢谢参与';
          } else if (temp >= 70 && temp < 90) {
            result = '鼓励奖';
          } else if (temp >= 90 && temp < 96) {
            result = '三等奖';
          } else if (temp >= 96 && temp < 99) {
            result = '二等奖';
          } else if (temp >= 99 && temp < 99.999) {
            result = '一等奖';
          } else if (temp >= 99.999 && temp < 100) {
            result = '特等奖';
          }

          return result;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9facf1f6b847f792f08964e2fd574e83f8fb7c1f.js.map