# Testing

## Automated tests

```bash
npm test                # all suites
npm run test:watch
npm run test:coverage   # coverage for src/lib
npx jest CollapsibleSidebar   # one suite
```

Jest runs in jsdom with ts-jest. `src/setupTests.ts` mocks the session checks in `authUtils` as authenticated (so the wrapper renders), silences console output and stubs `ResizeObserver`.

| Suite                                      | Covers                                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `LumoraWrapper.test.tsx`                   | Rendering, brand, user menu and dark mode, search slot, Nexa button, sidebar links, chat popup (floating, kept mounted, Esc, inline mode), notifications drawer        |
| `LumoraWrapper.session.test.tsx`           | Session gate and redirect, `onVerify`, token check on mount, logout                                                                                                    |
| `LumoraWrapper.responsive.test.tsx`        | Desktop vs mobile, all three sidebar variants, widths, sidebar order, collapsed search, mobile bottom bar (items, drawer, search sheet, user menu) and the drawer mode |
| `LumoraWrapper.accessibility.test.tsx`     | Landmarks, accessible names, keyboard access to the user menu                                                                                                          |
| `CollapsibleSidebar.test.tsx`              | Collapse state and persistence, nesting, colors, header brand, search/footer slots, row actions                                                                        |
| `FullBleedSection.test.tsx`                | Edge-to-edge band: negative margins, inset, sticky offset, reading the wrapper variables                                                                               |
| `src/lib/__tests__/tokenValidator.test.ts` | Refresh-on-mount logic against real `localStorage`                                                                                                                     |

Shared helpers (`render` with a theme, `mockSidebarLinks`, `lumoraTestRequiredProps`) live in `src/lib/components/__tests__/testUtils.tsx`.

## Manual testing

Run `npm run dev` and use the playground panel (top right) to switch variants, themes and features without editing code. See the README's Playground section.
