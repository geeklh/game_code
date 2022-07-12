import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CityOnClick')
export class CityOnClick extends Component {
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenOnClick, this);
    }

    update(deltaTime: number) {
        
    }

    whenOnClick() {
        director.loadScene("scene_firstDay");
    }
}

