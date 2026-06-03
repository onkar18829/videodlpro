globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/@astrojs_CJLT4Npz.mjs';
import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, h as createAstro } from '../chunks/astro_dt-kE7tC.mjs';
export { r as renderers } from '../chunks/astro_dt-kE7tC.mjs';
import '../chunks/kleur_DHimoS-P.mjs';
/* empty css                                 */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="theme-toggle" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle Dark Mode"> <!-- Sun Icon --> <svg id="sun-icon" class="hidden w-5 h-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> </svg> <!-- Moon Icon --> <svg id="moon-icon" class="hidden w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> </svg> </button> <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const updateIcons = (theme) => {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (theme === 'dark') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  };

  updateIcons(theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcons(isDark ? 'dark' : 'light');
  };

  document.getElementById("theme-toggle").addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "D:/project/Dlpproject/client/src/components/ThemeToggle.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Download videos from YouTube, TikTok, Instagram, Facebook, X, Vimeo and more for free." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- SEO Tags --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><!-- Google Fonts: Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30"> <header class="fixed top-0 w-full z-50 glass"> <div class="container mx-auto px-4 h-16 flex items-center justify-between"> <a href="/" class="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
VideoDL Pro
</a> <nav class="hidden md:flex items-center gap-6 text-sm font-medium"> <a href="/platforms" class="hover:text-blue-600 transition-colors">Platforms</a> <a href="/features" class="hover:text-blue-600 transition-colors">Features</a> <a href="/blog" class="hover:text-blue-600 transition-colors">Blog</a> <a href="/faq" class="hover:text-blue-600 transition-colors">FAQ</a> </nav> <div class="flex items-center gap-4"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </div> </header> <main class="pt-24 pb-16 min-h-[calc(100vh-80px)]"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12"> <div class="container mx-auto px-4 text-center text-slate-500 text-sm"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} OnlineFreeVideoDownloader.com. All rights reserved.</p> <div class="mt-4 flex justify-center gap-4"> <a href="/terms" class="hover:text-blue-600">Terms</a> <a href="/privacy" class="hover:text-blue-600">Privacy</a> <a href="/contact" class="hover:text-blue-600">Contact</a> </div> </div> </footer> </body></html>`;
}, "D:/project/Dlpproject/client/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Download Videos Online For Free | YouTube, TikTok, Instagram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-16 md:py-24 max-w-4xl text-center"> <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
Download Videos <br class="hidden md:block"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
Online For Free
</span> </h1> <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
The fastest and easiest way to download high-quality videos from YouTube, TikTok, Instagram, Facebook, X, Vimeo, and more.
</p> <div class="glass p-2 md:p-4 rounded-2xl md:rounded-full shadow-lg max-w-3xl mx-auto relative group transition-all hover:shadow-xl"> <form class="flex flex-col md:flex-row gap-2" onsubmit="event.preventDefault(); document.getElementById('loader').classList.remove('hidden'); setTimeout(() => alert('Demo: Backend connection required.'), 1500);"> <input type="url" placeholder="Paste your video URL here..." class="flex-1 bg-transparent px-6 py-4 outline-none text-lg text-slate-900 dark:text-white placeholder:text-slate-400 w-full" required> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl md:rounded-full transition-all active:scale-95 flex items-center justify-center gap-2"> <span>Download</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> </button> </form> <!-- Loader --> <div id="loader" class="hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-blue-600 flex items-center gap-2 text-sm font-medium"> <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
Analyzing URL...
</div> </div> <div class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"> <p class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Supported Platforms</p> <div class="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70"> <!-- Dummy icons for aesthetic, replacing with text for simplicity --> <span class="font-bold text-xl hover:text-red-500 transition-colors cursor-pointer">YouTube</span> <span class="font-bold text-xl hover:text-black dark:hover:text-white transition-colors cursor-pointer">TikTok</span> <span class="font-bold text-xl hover:text-pink-600 transition-colors cursor-pointer">Instagram</span> <span class="font-bold text-xl hover:text-blue-600 transition-colors cursor-pointer">Facebook</span> <span class="font-bold text-xl hover:text-black dark:hover:text-white transition-colors cursor-pointer">X (Twitter)</span> </div> </div> </section> ` })}`;
}, "D:/project/Dlpproject/client/src/pages/index.astro", void 0);

const $$file = "D:/project/Dlpproject/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
