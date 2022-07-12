import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {

    index : number = 0;
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN,(Event)=> {
            if(this.index < 3){
                this.node.children[this.index].active =true;
                this.index++;
            }
        })
    }

    update(deltaTime: number) {
    }
}

