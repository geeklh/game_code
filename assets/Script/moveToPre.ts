import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('moveToPre')
export class moveToPre extends Component {

    @property(Prefab)
    layout : Prefab = null!;

    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenlabeldown, this);
    }

    update(deltaTime: number) {
        
    }

    whenlabeldown() {
        let lay : Node = instantiate(this.layout);
        lay.setPosition(0, 0);
        this.node.addChild(lay);
    }

}

