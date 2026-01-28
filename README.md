# Lazy Load Images

This project demonstrates multiple image lazy loading techniques using modern browser features.  
It focuses on improving page performance and reducing unnecessary network requests by loading images only when they are needed.

The implementation compares native browser based lazy loading with Intersection Observer based lazy loading.

---

## Project Overview

Image lazy loading is a critical frontend performance optimization technique, especially for image heavy pages.

In this project, two approaches are implemented and compared:

1. Native browser lazy loading using the loading attribute
2. Lazy loading using the Intersection Observer API

Both approaches are implemented using plain HTML, CSS, and JavaScript to clearly show how they work under the hood.

---

## Live Demos

Native Browser Lazy Loading Demo  
https://kashish-dev-101.github.io/Lazy-Load-Images/NativeLazyLoading.html

Intersection Observer Lazy Loading Demo  
https://kashish-dev-101.github.io/Lazy-Load-Images/intersectionobserver.html

You can scroll through each page to observe when images are loaded and compare the behavior of both techniques.

---

## Lazy Loading Techniques Used

### 1. Native Browser Lazy Loading

Modern browsers support lazy loading out of the box using the `loading="lazy"` attribute on image tags.

How it works:
The browser automatically defers loading images until they are close to entering the viewport.

Benefits:
Simple to implement  
No JavaScript required  
Good baseline performance improvement  

Limitations:
Less control over loading behavior  
Browser dependent behavior  

Reference documentation:
https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

---

### 2. Intersection Observer Based Lazy Loading

This approach uses the Intersection Observer API to detect when an image enters the viewport and then loads it dynamically.

How it works:
Images are initially loaded with placeholder or data attributes  
The Intersection Observer watches for visibility changes  
When the image intersects the viewport, the actual source is assigned  

Benefits:
Fine grained control over when images load  
Better customization options  
Works well with animations and advanced UX  

Reference documentation:
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---

## Why Intersection Observer

Intersection Observer provides better control compared to native lazy loading.

It allows:
Custom thresholds  
Preloading before visibility  
Fallback handling  
Analytics and logging hooks  

This makes it ideal for complex layouts and performance critical applications.

---

## How to Run the Project

1. Clone the repository
2. Open the HTML files directly in the browser
3. Scroll the page to observe lazy loading behavior

No build tools or dependencies are required.

---

## Learning Outcomes

By working through this project, you will understand:

1. How native browser lazy loading works
2. How Intersection Observer detects element visibility
3. Performance differences between the two approaches
4. When to use each technique in real world projects

---

## References

MDN Web Docs  
Native Lazy Loading  
https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

Intersection Observer API  
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---



