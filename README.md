# Nokhba Tech | نخبة التقنية

A responsive, bilingual (Arabic / English) website for a fictional IT services company, with a working service request form.

🔗 **Live demo:** https://osmanabubakr725.github.io/nokhba-tech/

> **Note:** This is a learning and portfolio project. The company, contact details, and statistics shown on the site are placeholders.

---

## Features

- **Bilingual interface:** switch between Arabic and English with one click. The page direction flips automatically between RTL and LTR, and the chosen language is remembered across pages.
- **Fully responsive:** designed mobile-first, from phones to large desktop screens, with a collapsible mobile menu.
- **Service request form:** client-side validation with clear, translated error messages. Valid requests are delivered to an email inbox.
- **Reusable layout:** the header and footer are written once in JavaScript and injected into every page.
- **Five pages:** Home, About, Services, Request a Service, and Contact (with an embedded map).

## Tech Stack

| Area | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Tailwind CSS (via CDN) |
| Logic | Vanilla JavaScript (ES6+) |
| Form delivery | [Web3Forms](https://web3forms.com) API |
| Hosting | GitHub Pages |

## Project Structure

```
nokhba-tech/
├── index.html
├── about.html
├── services.html
├── request.html
├── contact.html
└── js/
    ├── layout.js    # shared header and footer, mobile menu
    ├── i18n.js      # translations and language switching
    └── form.js      # form validation and submission
```

## How It Works

**Language switching:** every translatable element carries a `data-i18n` key. The translations for both languages live in one object in `i18n.js`. When the user switches language, the script updates the text of every keyed element, sets the `lang` and `dir` attributes on the `<html>` tag, and saves the choice in `localStorage`.

**Form validation:** each field has a rule function that returns an error key or an empty string. Fields are validated when the user leaves them and again on submit. Error messages are translated, and they update if the language changes.

**Form submission:** after validation, the data is sent with `fetch` as JSON to the Web3Forms API, which forwards it to an email inbox. The interface handles waiting, success, and failure states.

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/osmanabubakr725/nokhba-tech.git
   ```
2. Open the folder in VS Code.
3. Start it with the **Live Server** extension (right-click `index.html`, then **Open with Live Server**).

No build step or dependencies are required.

## What I Learned

- Building responsive layouts with Tailwind's mobile-first breakpoints
- Supporting right-to-left and left-to-right layouts in one codebase
- Organizing JavaScript into small, focused files
- Validating forms and handling asynchronous requests with `async/await` and `try/catch`
- Debugging file paths, MIME type errors, and deployment issues
- Publishing a static site with GitHub Pages

## Possible Improvements

- Complete the translation of every static string, including `<title>` tags and the footer details
- Add a portfolio or case studies page
- Add spam protection to the form
- Replace the Tailwind CDN with a production build

## Author

**[Osman Abubakr Osman]**
GitHub: [@osmanabubakr725](https://github.com/osmanabubakr725)
