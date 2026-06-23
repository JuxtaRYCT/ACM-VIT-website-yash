import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

function initAnimatedButtons() {
  const anchors = document.querySelectorAll<HTMLElement>("[data-anim-btn]");

  anchors.forEach((anchor) => {
    if (anchor.dataset.animBtnInit) return;
    anchor.dataset.animBtnInit = "1";

    const btn = anchor.querySelector<HTMLElement>(".anim-btn");
    const label = anchor.querySelector<HTMLElement>(".anim-btn-label");
    if (!btn || !label) return;

    let triggered = false;

    ScrollTrigger.create({
      trigger: anchor,
      start: "top 95%",
      once: true,
      onEnter: () => {
        if (triggered) return;
        triggered = true;

        gsap.delayedCall(1, () => {
          const tl = gsap.timeline();

          // Phase 1: Circle rises from below with scale
          tl.fromTo(
            btn,
            { opacity: 0, y: 24, scale: 0.7 },
            {
              opacity: 1,
              y: -6,
              scale: 1.05,
              duration: 0.35,
              ease: "power2.out",
            }
          )
            // Phase 2: Settle bounce
            .to(btn, {
              y: 0,
              scale: 1,
              duration: 0.25,
              ease: "power3.out",
            })
            // Phase 3: Expand pill from circle (like Apple)
            .add(() => {
              const state = Flip.getState(btn);
              btn.classList.add("is-expanded");

              Flip.from(state, {
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                  // Phase 4: Text fades in
                  gsap.to(label, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                },
              });
            }, "-=0.08");
        });
      },
    });
  });
}

// Listen for variant mounts (templates cloned into live DOM)
window.addEventListener("variants-mounted", () => {
  requestAnimationFrame(() => initAnimatedButtons());
});
window.addEventListener("app:variants-mounted", () => {
  requestAnimationFrame(() => initAnimatedButtons());
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => initAnimatedButtons());
    });
  });
} else {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => initAnimatedButtons());
  });
}
