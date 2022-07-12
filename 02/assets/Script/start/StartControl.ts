import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartControl')
export class StartControl extends Component {

    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenStartDown, this);
    }

    update(deltaTime: number) {
        
    }
    
    whenStartDown() {
        director.loadScene("scene_npc"); //指定切换的场景
    }
}

