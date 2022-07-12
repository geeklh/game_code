System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec2, randomRange, _dec, _class, _class2, _descriptor, _crd, ccclass, property, AtomMove;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      randomRange = _cc.randomRange;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a6ffWmL5lMN465W+LgJen4", "AtomMove", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AtomMove", AtomMove = (_dec = ccclass('AtomMove'), _dec(_class = (_class2 = class AtomMove extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          this.randoVec2 = new Vec2();
        }

        start() {
          this.getRandomDir();
          this.node.on(Node.EventType.MOUSE_DOWN, this.whenMouseDown, this);
        }

        update(deltaTime) {
          let x = this.node.position.x;
          let newX = x + this.moveSpeed * deltaTime * this.randoVec2.x;
          let y = this.node.position.y;
          let newY = y + this.moveSpeed * deltaTime * this.randoVec2.y;
          this.node.setPosition(newX, newY);
        }

        getRandomDir() {
          this.randoVec2.x = Math.cos(randomRange(-180, 180) * (Math.PI / 180));
          this.randoVec2.y = Math.sin(randomRange(-180, 180) * (Math.PI / 180));
          this.randoVec2.normalize();
        } // 设置点击事件


        whenMouseDown() {
          this.node.destroy();
          window["score"]++;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=938f89bb52d3b82896dc4b6101646f6eb32e19b9.js.map