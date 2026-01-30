import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["section", "link"];

  connect() {
    this.observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const key = visible.target.dataset.section;
        this.activateLink(key);
      },
      {
        root: null,
        // This makes the "active" section switch feel natural with a sticky sidebar
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    this.sectionTargets.forEach((el) => this.observer.observe(el));

    // Ensure smooth scrolling site-wide
    document.documentElement.classList.add("scroll-smooth");
  }

  disconnect() {
    if (this.observer) this.observer.disconnect();
  }

  activateLink(key) {
    this.linkTargets.forEach((link) => {
      const isActive = link.dataset.section === key;
      link.classList.toggle("bg-sand-50", isActive);
      link.classList.toggle("text-ink-900", isActive);
      link.classList.toggle("font-semibold", isActive);
      link.classList.toggle("text-ink-700", !isActive);
    });
  }
}
