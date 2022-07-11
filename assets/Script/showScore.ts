import { _decorator, Component, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('showScore')
export class showScore extends Component {

    @property(Label)
    scoreLabel : Label = null!;

    start() {
        window["score"] = 0;
    }

    update(deltaTime: number) {
        this.scoreLabel.string = "Score:" + window["score"];
    }
}

