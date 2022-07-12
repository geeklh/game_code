import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartEnterControl')
export class StartEnterControl extends Component {
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenStartEnterDown, this);
    }

    update(deltaTime: number) {
        
    }

    whenStartEnterDown() {
        director.loadScene("scene_city");
    }
}

