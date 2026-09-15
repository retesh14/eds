export default function init(el) {
  const inner = el.querySelector(':scope > div');
  inner.classList.add('card-inner');
  const pic = el.querySelector('picture');
  if (pic) {
    const picPara = pic.closest('p');
    if (picPara) {
      const picDiv = document.createElement('div');
      picDiv.className = 'card-picture-container';
      picDiv.append(pic);
      inner.insertAdjacentElement('afterbegin', picDiv);
      picPara.remove();
    }
  }
  // Decorate content
  const con = inner.querySelector(':scope > div:not([class])');
  if (!con) { return; }
  con.classList.add('card-content-container');

  // Decorate CTA
  const ctaPara = inner.querySelector(':scope > div:last-of-type > p:last-of-type');
  if (!ctaPara) { return; }
  const cta = ctaPara.querySelector('a');
  if (!cta) { return; }
  const hashAware = el.classList.contains('hash-aware');
  if (hashAware) {
    cta.href = `${cta.getAttribute('href')}${window.location.hash}`;
  }
  ctaPara.classList.add('card-cta-container');
  // C3 updates
  cta.classList.add('card-cta');// your class hook for styling
  cta.target = '_blank';// open in a new tab
  cta.rel = 'noopener noreferrer';// security best practice for _blank
  // C4 updates
  const arrow = document.createElement('span');
  arrow.className = 'cta-arrow';
  arrow.textContent = ' ›';
  cta.append(arrow);
  ctaPara.classList.add('card-cta-container');
  // Updates end
  inner.append(ctaPara);
}
