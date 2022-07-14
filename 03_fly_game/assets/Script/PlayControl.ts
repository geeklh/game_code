import { _decorator, Component, Node, EventTouch, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayControl')
export class PlayControl extends Component {

    @property(Prefab)
    bulletPre: Prefab = null;

    start() {
        // 移动
        let posX : number | undefined, pubx: number | undefined;
        let posY : number | undefined, puby: number | undefined;
        this.node.on(Node.EventType.TOUCH_MOVE, (e:EventTouch)=> {
            posX = this.node.position.x;
            posY = this.node.position.y;
            posX += e.getDelta().x;
            pubx = posX;
            posY += e.getDelta().y;
            puby = posY;
            this.node.setPosition(posX, posY);
        }, this);
        // 攻击 计时器
        let buX: number | undefined;
        let buY: number | undefined;
        this.schedule( ()=>{
            // 创建子弹
            let bullet = instantiate(this.bulletPre);
            // let sence = director.getScene();
            // bullet.setParent( this.node, true);

            // buX = bullet.position.x;
            // buY = bullet.position.y;
            // buX = this.node.position.x;
            // buY = this.node.position.y + 60;
            // bullet.setPosition(buX, buY);
            bullet.setPosition(pubx, puby + 60);
            this.node.addChild(bullet);
        }, 0.5)

    }

    update(deltaTime: number) {
    }
 }

