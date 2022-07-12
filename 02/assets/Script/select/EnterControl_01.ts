import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnterControl_01')
export class EnterControl_01 extends Component {
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenEnterDown, this);
    }

    update(deltaTime: number) {
        
    }

    whenEnterDown() {
        director.loadScene("scene_guanka");//跳转
    }
}

