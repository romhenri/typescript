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
        this.ThumbItems = null;
        this.thumb = null;
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
        if (this.ThumbItems) {
            this.thumb = this.ThumbItems[this.index];
            this.ThumbItems.forEach((el) => {
                el.classList.remove('active');
            });
            this.thumb.classList.add('active');
        }
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
        if (this.thumb)
            this.thumb.style.animationDuration = `${time}ms`;
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
            var _a, _b;
            (_a = this.timeout) === null || _a === void 0 ? void 0 : _a.pause();
            this.paused = true;
            (_b = this.thumb) === null || _b === void 0 ? void 0 : _b.classList.add('paused');
            if (this.slide instanceof HTMLVideoElement) {
                this.slide.pause();
            }
        }, 300);
    }
    continue() {
        var _a, _b, _c;
        (_a = this.pausedTimeout) === null || _a === void 0 ? void 0 : _a.clear();
        if (this.paused) {
            this.paused = false;
            (_b = this.timeout) === null || _b === void 0 ? void 0 : _b.continue();
            (_c = this.thumb) === null || _c === void 0 ? void 0 : _c.classList.remove('paused');
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
    addThumbItems() {
        const thumbContainer = document.createElement('div');
        thumbContainer.id = 'slide-thumb';
        for (let i = 0; i < this.slides.length; i++) {
            thumbContainer.innerHTML += `
      <span>
        <span class="thumb-item">
      
      
        </span>
      </span>
      `;
        }
        this.controls.appendChild(thumbContainer);
        this.ThumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    }
    init() {
        this.addControls();
        this.addThumbItems();
        this.show(this.index);
    }
}
