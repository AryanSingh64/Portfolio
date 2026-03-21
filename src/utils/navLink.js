/**
 * navLink — fires the global brutalist page-transition overlay
 * instead of a raw anchor jump.
 * 
 * Usage:
 *   <a href="#projects" onClick={navLink("#projects", "Projects")}>
 */
export const navLink = (target, name = "") => (e) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('trigger-nav', { detail: { target, name } }));
};
