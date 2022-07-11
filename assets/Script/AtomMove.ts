import { _decorator, Component, Node, Vec2, randomRange } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AtomMove')
export class AtomMove extends Component {

    @property
    moveSpeed = 20.0;

    private randoVec2 : Vec2  = new Vec2();

    start() {
        this.getRandomDir();
        this.node.on(Node.EventType.MOUSE_DOWN, this.whenMouseDown, this);
    }

    update(deltaTime: number) {
        let x : number | undefined = this.node.position.x;
        let newX = x + this.moveSpeed * deltaTime * this.randoVec2.x;

        let y : number | undefined = this.node.position.y;
        let newY = y + this.moveSpeed * deltaTime * this.randoVec2.y;

        this.node.setPosition(newX, newY);
    }

    getRandomDir(){
        this.randoVec2.x = Math.cos(randomRange(-180, 180) * (Math.PI/ 180));
        this.randoVec2.y = Math.sin(randomRange(-180, 180) * (Math.PI / 180));
        this.randoVec2.normalize();
    }
    // 设置点击事件
    whenMouseDown(){
        this.node.destroy();
        window["score"]++;
    }
}

