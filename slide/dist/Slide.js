import Timeout from "./Timeout.js";
export default class Slide {
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.timeout = null;
        this.pausedTimeout = null;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.paused = false;
        this.init();
    }
    hide(el) {
        el.classList.remove('active');
        if (el instanceof HTMLVideoElement) {
            el.currentTime = 0;
            el.pause();
        }
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach(el => this.hide(el));
        this.slides[index].classList.add('active');
        if (this.slide instanceof HTMLVideoElement) {
            this.autoVideo(this.slide);
        }
        else {
            this.auto(this.time);
        }
    }
    autoVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener("playing", () => {
            if (firstPlay)
                this.auto(video.duration * 1000);
            firstPlay = false;
        });
    }
    auto(time) {
        var _a;
        (_a = this.timeout) === null || _a === void 0 ? void 0 : _a.clear();
        this.timeout = new Timeout(() => this.next(), time);
    }
    prev() {
        if (this.paused)
            return;
        const prev = (this.index - 1) > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        this.pausedTimeout = new Timeout(() => {
            var _a;
            (_a = this.timeout) === null || _a === void 0 ? void 0 : _a.pause();
            this.paused = true;
            if (this.slide instanceof HTMLVideoElement) {
                this.slide.pause();
            }
        }, 300);
    }
    continue() {
        var _a, _b;
        (_a = this.pausedTimeout) === null || _a === void 0 ? void 0 : _a.clear();
        if (this.paused) {
            this.paused = false;
            (_b = this.timeout) === null || _b === void 0 ? void 0 : _b.continue();
            if (this.slide instanceof HTMLVideoElement) {
                this.slide.play();
            }
        }
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Slide Anterior";
        prevButton.innerText = "Próximo Slide";
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        this.controls.addEventListener("pointerdown", () => {
            this.pause();
        });
        this.controls.addEventListener("pointerup", () => {
            this.continue();
        });
        nextButton.addEventListener("pointerup", () => { this.next(); });
        prevButton.addEventListener("pointerup", () => { this.prev(); });
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
