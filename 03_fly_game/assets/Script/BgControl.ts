import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    
    start() {

    }
    update(deltaTime: number) {
        let y : number | undefined;
        for( let bgNode of this.node.children ) {
            y = bgNode.position.y;
            y -= 50 * deltaTime;
            if( y < -850 ) {
                  y += 852 * 2;
            }
            bgNode.setPosition(0, y);
        }
    }
}

