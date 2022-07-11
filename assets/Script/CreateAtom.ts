import { _decorator, Component, Node, Prefab, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CreateAtom')
export class CreateAtom extends Component {

    @property(Prefab)
    atomPrefab : Prefab = null!;

    start() {
        this.schedule(
            function(){
                this.createAtom();
            }, 0.5, 50, 0.5
        );
    }

    update(deltaTime: number) {
        
    }

    createAtom() {
        let netAtom : Node = instantiate(this.atomPrefab);
        netAtom.setPosition(0, 0);
        this.node.addChild(netAtom);
    }

}

