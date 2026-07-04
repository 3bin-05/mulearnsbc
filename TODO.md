# TODO

## Navbar footer highlight (“CONTACT US”)
- [x] Update `Navbar.tsx` to support `activeSection = 'contact'` and highlight CONTACT US when active.
- [x] Update `App.tsx`:
  - [x] Extend `activeSection` union type to include `contact`.
  - [x] Add `IntersectionObserver` to detect `#contact` visibility and set `activeSection` to `contact`.
  - [x] Update `handleContactClick` so it scrolls to footer and keeps `contact` active.


