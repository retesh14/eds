/*
 * Accordion Block
 * https://www.aem.live/developer/block-collection/accordion
 */
export default function init(el) {
  [...el.children].forEach((row) => {
    // label → <summary>
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

    // body
    const body = row.children[1];
    body.className = 'accordion-item-body';

    // wrap in <details>
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
    // C5 - Step 6 Updates - single-open accordion behavior
    details.addEventListener('toggle', () => {
      if (details.open) {
        el.querySelectorAll('details[open]').forEach((d) => {
          if (d !== details) { d.open = false; }
        });
      }
    });
  });
}
