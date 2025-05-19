# WrappedInternals

A typed proxy for `ElementInternals`, generated from the latest W3C WAI-ARIA spec with browser support annotations and deep developer experience in mind.

## What it solves

* Adds strong typings and intelligent autocomplete for all ARIA attributes on `ElementInternals`.
* Converts and normalizes native `string | null` API into proper typed getters/setters.
* Prevents direct mutation of the raw `ElementInternals`, avoiding API misuse.
* Includes full jsDoc metadata: property descriptions, related ARIA attributes, concepts, and browser support info.


## Usage

```ts
import { WrappedInternals } from 'wrapped-internals'

class MyCustomElement extends HTMLElement {
  private internals = new WrappedInternals(this)

  someMethod() {
    if (this.internals.ariaHasPopup === '') return
    this.internals.ariaLabel = 'Main menu' // type-checked
  }
}
```
