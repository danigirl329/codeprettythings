import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["search", "tech", "featuredOnly", "card"];

  connect() {
    this.apply();
  }

  apply() {
    const query = (this.searchTarget?.value || "").toLowerCase();
    const tech = (this.techTarget?.value || "").toLowerCase();
    const featuredOnly = !!this.featuredOnlyTarget?.checked;

    this.cardTargets.forEach((card) => {
      const text = card.innerText.toLowerCase();
      const cardTech = (card.dataset.tech || "").toLowerCase();
      const isFeatured = card.dataset.featured === "true";

      const matchesQuery = !query || text.includes(query);
      const matchesTech = !tech || cardTech.includes(tech);
      const matchesFeatured = !featuredOnly || isFeatured;

      card.classList.toggle("hidden", !(matchesQuery && matchesTech && matchesFeatured));
    });
  }

  // Wire events from the DOM
  search() { this.apply(); }
  tech() { this.apply(); }
  featuredOnly() { this.apply(); }
}
