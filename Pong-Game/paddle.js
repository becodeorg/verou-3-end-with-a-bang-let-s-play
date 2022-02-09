const computerSpeed = 0.1;

export default class Paddle {
    constructor(paddleElement) {
        this.paddleElement = paddleElement;
    }

    get position() {
        // Change our css number into a JS number which we can use
        return parseFloat(
            getComputedStyle(this.paddleElement).getPropertyValue("--position")
        );
    }

    set position(value) {
        this.paddleElement.style.setProperty("--position", value);
    }

    update(delta, ballHeight) {
        this.position +=
            computerSpeed * delta * (100 - ballHeight - this.position);
        console.log(this.position);
    }
}
