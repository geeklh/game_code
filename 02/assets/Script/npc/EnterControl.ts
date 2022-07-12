import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnterControl')
export class EnterControl extends Component {

    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenEnterDown, this);
    }

    update(deltaTime: number) {
        
    }

    whenEnterDown() {
        director.loadScene("");//跳转
    }
}

