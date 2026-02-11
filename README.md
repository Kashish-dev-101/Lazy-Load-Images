# Lazy Load Images

A practical demonstration of image lazy loading techniques using modern browser APIs.

This project compares **native browser lazy loading** with **Intersection Observer-based lazy loading**, helping you understand when and how to use each approach for optimal performance.

## Live Demos

| Demo | Description |
|------|-------------|
| [Native Lazy Loading](https://kashish-dev-101.github.io/Lazy-Load-Images/NativeLazyLoading.html) | Uses the `loading="lazy"` attribute |
| [Intersection Observer](https://kashish-dev-101.github.io/Lazy-Load-Images/intersectionobserver.html) | JavaScript-controlled lazy loading |

Open DevTools → Network tab, then scroll to observe images loading on demand.

---

## Why Lazy Loading?

Lazy loading defers off-screen images until users scroll near them. This improves:

- **Initial page load** — fewer requests, faster [LCP](https://web.dev/articles/lcp)
- **Bandwidth usage** — images that are never viewed are never downloaded
- **User experience** — above-the-fold content loads faster

---

## Techniques Compared

### 1. Native Browser Lazy Loading

The simplest approach — add `loading="lazy"` to your `<img>` tags.

```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

| Pros | Cons |
|------|------|
| Zero JavaScript required | Less control over timing |
| Built-in browser optimization | Browser-dependent thresholds |
| Works out of the box | No custom loading states |

**Browser support:** [caniuse.com/loading-lazy-attr](https://caniuse.com/loading-lazy-attr)

**Documentation:** [MDN — Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

---

### 2. Intersection Observer API

For full control, use JavaScript to detect when elements enter the viewport.

```html
<img data-src="image.jpg" alt="Description" />
```

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
```

| Pros | Cons |
|------|------|
| Custom thresholds and margins | Requires JavaScript |
| Loading states and animations | More implementation effort |
| Analytics and logging hooks | Must handle fallbacks |

**Browser support:** [caniuse.com/intersectionobserver](https://caniuse.com/intersectionobserver)

**Documentation:** [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## When to Use Each

| Use Case | Recommended Approach |
|----------|---------------------|
| Simple image galleries | Native `loading="lazy"` |
| Custom placeholder/skeleton UI | Intersection Observer |
| Blur-up or fade-in effects | Intersection Observer |
| Maximum browser compatibility | Native with IO fallback |
| Analytics on image views | Intersection Observer |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/kashish-dev-101/Lazy-Load-Images.git

# Open in browser
open NativeLazyLoading.html
open intersectionobserver.html
```

No build tools or dependencies required.

---

## Project Structure

```
Lazy-Load-Images/
├── NativeLazyLoading.html   # Native loading="lazy" demo
├── intersectionobserver.html # Intersection Observer demo
├── app.js                    # IO implementation
├── style.css                 # Shared styles
└── README.md
```

---

## Further Reading

- [web.dev — Browser-level image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading)
- [web.dev — Lazy loading images](https://web.dev/articles/lazy-loading-images)
- [MDN — Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [ImageKit — Lazy loading images guide](https://imagekit.io/blog/lazy-loading-images-complete-guide/)
