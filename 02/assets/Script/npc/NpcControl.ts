import { _decorator, Component, Node, Sprite, color, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NpcControl')
export class NpcControl extends Component {
    start() {
        // 女角色
        this.node.children[0].on(Node.EventType.MOUSE_DOWN, (Event)=> {
            this.node.children[0].getComponent(Sprite).color = new Color().fromHEX("#FAF9D7");
            this.node.children[1].getComponent(Sprite).color = new Color().fromHEX("#FFFFFF");
            this.node.children[2].active = true;
            this.node.children[3].active = false;
            // if(this.node.children[2].active == false && this.node.children[3].active == false) {
            //     this.node.children[2].active = true;
            //     this.node.children[3].active = false
            // }
            // if(this.node.children[2].active == false && this.node.children[3].active == true) {
            //     this.node.children[2].active = true;
            //     this.node.children[3].active = false;
            // }
        })
        // 男角色
        this.node.children[1].on(Node.EventType.MOUSE_DOWN, (Event)=> {
            this.node.children[0].getComponent(Sprite).color = new Color().fromHEX("#FFFFFF");
            this.node.children[1].getComponent(Sprite).color = new Color().fromHEX("#FAF9D7");
            this.node.children[2].active = false;
            this.node.children[3].active = true;
            // if(this.node.children[2].active == false && this.node.children[3].active == false) {
            //     this.node.children[3].active = true;
            //     this.node.children[2].active = false;
            // }
            // if(this.node.children[3].active == false && this.node.children[2].active == true) {
            //     this.node.children[3].active = true;
            //     this.node.children[2].active = false;
            // }
        })
    }

    update(deltaTime: number) {
        
    }


}
