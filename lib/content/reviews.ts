import type { Review } from "./types";

/**
 * Intentionally empty until real Google Reviews / customer testimonials are supplied.
 * ReviewsSection and the AggregateRating schema both read this array and render
 * nothing until it has real entries - never seed this with placeholder reviews.
 */
export const reviews: Review[] = [];
