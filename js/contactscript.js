/* ------------------------------------------------------------------
   contactscript.js
   • Hides Jewel's email until visitor clicks “Reveal Email”
   • Converts form data into a pre-filled mailto: link and opens it
   ------------------------------------------------------------------ */

// Wait until the DOM is fully parsed before touching elements
document.addEventListener('DOMContentLoaded', function () {

  // Email reveal logic
  const revealBtn   = document.getElementById('reveal-email');
  const emailWrap   = document.getElementById('email-wrapper');
  revealBtn.addEventListener('click', function () {
    const email = 'leblancsolutions' + '@' + 'gmail.com';
    emailWrap.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });

  // When visitor clicks the reveal button...
  revealBtn.addEventListener('click', function () {
    const email = 'leblancsolutions' + '@' + 'gmail.com'; // Build email in 2 parts ⇒ basic obfuscation
    // Swap the button for a real mailto link
    emailWrap.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });
  
  // Phone reveal logic
  const revealPhoneBtn = document.getElementById('reveal-phone'); // Button element for phone
  const phoneWrap      = document.getElementById('phone-wrapper'); // Span for phone

  revealPhoneBtn.addEventListener('click', function () {
    // Build the phone number in pieces for obfuscation
    const phoneDisplay = '(817) - 889 - 2842';
    const phoneHref = '+1' + '817' + '889' + '2842'; // No dashes/spaces for tel: link
    phoneWrap.innerHTML = `<a href="tel:${phoneHref}">${phoneDisplay}</a>`;
  });

  

  /* ------------------  Quote-form handler  --------------------- */
  const form        = document.getElementById('quote-form'); // The <form> itself
  const statusSpan  = document.getElementById('form-status'); // Small status message area

  // Intercept the submit event so we can compose a mailto:
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();                         // Stop the browser’s default form post
    statusSpan.textContent = 'Opening your email client…'; // UX feedback

    // Collect form data into an easy key/value map
    const data = new FormData(form);

    // Build the e-mail pieces
    const to       = 'leblancsolutions' + '@' + 'gmail.com'; // Same split-string trick
    const subject  = encodeURIComponent('Quote Request from ' + data.get('Name'));

    /* Build the body in plain text so even old mail clients handle it.
       Each "key: value" pair gets its own line. */
    let body = '';
    data.forEach((value, key) => { body += `${key}: ${value}\n`; });
    body = encodeURIComponent(body);

    // Put everything together into a single mailto URL
    const mailtoURL = `mailto:${to}?subject=${subject}&body=${body}`;

    // Trigger the visitor’s default mail client
    window.location.href = mailtoURL;

    // Optional: let them know if popup blockers stop the client
    setTimeout(() => { statusSpan.textContent = 'If nothing opened, please e-mail us directly.'; }, 4000);
  });
});