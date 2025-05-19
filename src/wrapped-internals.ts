/**
 * This file is generated automatically.
 * Please do not edit it directly.
 *
 * Generated at Mon, 19 May 2025 17:03:24 GMT
 **/

/**
 * ariaAutoComplete values
 *
 * @default 'none'
 **/
export type AriaAutocompleteToken =
  /** When a user is providing input, text suggesting one way to complete the provided input might be dynamically inserted after the caret. */
  | 'inline'
  /** When a user is providing input, an element containing a collection of values that could complete the provided input might be displayed. */
  | 'list'
  /** When a user is providing input, an element containing a collection of values that could complete the provided input might be displayed. If displayed, one value in the collection is automatically selected, and the text needed to complete the automatically selected value appears after the caret in the input. */
  | 'both'
  /** When a user is providing input, an automatic suggestion that attempts to predict how the user intends to complete the input is not displayed. */
  | 'none';

/**
 * undefined values
 *
 * @default 'none'
 **/
export type AriaDropeffectToken =
  /** A duplicate of the source object will be dropped into the target. */
  | 'copy'
  /** A function supported by the drop target is executed, using the drag source as an input. */
  | 'execute'
  /** A reference or shortcut to the dragged object will be created in the target object. */
  | 'link'
  /** The source object will be removed from its current location and dropped into the target. */
  | 'move'
  /** No operation can be performed; effectively cancels the drag operation if an attempt is made to drop on this object. Ignored if combined with any other token value. e.g., 'none copy' is equivalent to a 'copy' value. */
  | 'none'
  /** There is a popup menu or dialog that allows the user to choose one of the drag operations (copy, move, link, execute) and any other drag functionality, such as cancel. */
  | 'popup';

/**
 * ariaHasPopup values
 *
 * @default false
 **/
export type AriaHaspopupToken =
  /** Indicates the element does not have a popup. */
  | false
  /** Indicates the popup is a menu. */
  | true
  /** Indicates the popup is a menu. */
  | 'menu'
  /** Indicates the popup is a listbox. */
  | 'listbox'
  /** Indicates the popup is a tree. */
  | 'tree'
  /** Indicates the popup is a grid. */
  | 'grid'
  /** Indicates the popup is a dialog. */
  | 'dialog';

/**
 * ariaLive values
 *
 * @default 'off'
 **/
export type AriaLiveToken =
  /** Indicates that updates to the region have the highest priority and should be presented the user immediately. */
  | 'assertive'
  /** Indicates that updates to the region should not be presented to the user unless the user is currently focused on that region. */
  | 'off'
  /** Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing. */
  | 'polite';

/**
 * ariaOrientation values
 *
 * @default undefined
 **/
export type AriaOrientationToken =
  /** The element is oriented horizontally. */
  | 'horizontal'
  /** The element's orientation is unknown/ambiguous. */
  | undefined
  /** The element is oriented vertically. */
  | 'vertical';

/**
 * ariaRelevant values
 *
 * @default 'additions text'
 **/
export type AriaRelevantToken =
  /** Element nodes are added to the accessibility tree within the live region. */
  | 'additions'
  /** Equivalent to the combination of values, "additions text". */
  | 'additions text'
  /** Equivalent to the combination of all values, "additions removals text". */
  | 'all'
  /** Text content, a text alternative, or an element node within the live region is removed from the accessibility tree. */
  | 'removals'
  /** Text content or a text alternative is added to any descendant in the accessibility tree of the live region. */
  | 'text';

/**
 * ariaSort values
 *
 * @default 'none'
 **/
export type AriaSortToken =
  /** Items are sorted in ascending order. */
  | 'ascending'
  /** Items are sorted in descending order. */
  | 'descending'
  /** There is no defined sort applied. */
  | 'none'
  /** A sort algorithm other than ascending or descending has been applied. */
  | 'other';

declare global {
  export interface ElementInternals {
    ariaActiveDescendantElement: string | null;
    ariaAtomic: string | null;
    ariaAutoComplete: string | null;
    ariaBrailleLabel: string | null;
    ariaBrailleRoleDescription: string | null;
    ariaColCount: string | null;
    ariaColIndex: string | null;
    ariaColIndexText: string | null;
    ariaColSpan: string | null;
    ariaControlsElements: string | null;
    ariaDescribedByElements: string | null;
    ariaDescription: string | null;
    ariaDetailsElements: string | null;
    ariaErrorMessageElements: string | null;
    ariaFlowToElements: string | null;
    ariaHasPopup: string | null;
    ariaKeyShortcuts: string | null;
    ariaLabel: string | null;
    ariaLabelledByElements: string | null;
    ariaLevel: string | null;
    ariaLive: string | null;
    ariaModal: string | null;
    ariaMultiLine: string | null;
    ariaMultiSelectable: string | null;
    ariaOrientation: string | null;
    ariaOwnsElements: string | null;
    ariaPlaceholder: string | null;
    ariaPosInSet: string | null;
    ariaReadOnly: string | null;
    ariaRelevant: string | null;
    ariaRequired: string | null;
    ariaRoleDescription: string | null;
    ariaRowCount: string | null;
    ariaRowIndex: string | null;
    ariaRowIndexText: string | null;
    ariaRowSpan: string | null;
    ariaSetSize: string | null;
    ariaSort: string | null;
    ariaValueMax: string | null;
    ariaValueMin: string | null;
    ariaValueNow: string | null;
    ariaValueText: string | null;
  }
}

const internalsKey = Symbol('internals');

export class WrappedInternals {
  [internalsKey]: ElementInternals;

  constructor(element: HTMLElement) {
    this[internalsKey] = element.attachInternals();
  }

  /**
   * @property ariaActiveDescendantElement
   * @description Identifies the currently active element when DOM focus is on a composite widget, combobox, textbox, group, or application.
   * @aria-attribute aria-activedescendant
   * @aria-used-in application, combobox, composite, group, textbox
   * @aria-inherited-by grid, listbox, menu, menubar, radiogroup, row, searchbox, select, spinbutton, tablist, toolbar, tree, treegrid
   * @aria-related-concepts SVG [SVG2] and DOM [DOM] active
   **/
  get ariaActiveDescendantElement(): string {
    return this[internalsKey].ariaActiveDescendantElement as string;
  }
  set ariaActiveDescendantElement(value: string) {
    this[internalsKey].ariaActiveDescendantElement = value as string;
  }

  /**
   * @property ariaAtomic
   * @description Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
   * @aria-attribute aria-atomic
   * @aria-used-in All elements of the base markup
   **/
  get ariaAtomic(): boolean {
    return this[internalsKey].ariaAtomic === 'true';
  }
  set ariaAtomic(value: boolean) {
    this[internalsKey].ariaAtomic = String(value);
  }

  /**
   * @property ariaAutoComplete
   * @description Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
   * @aria-attribute aria-autocomplete
   * @aria-used-in combobox, textbox
   * @aria-inherited-by searchbox
   **/
  get ariaAutoComplete(): AriaAutocompleteToken {
    return this[internalsKey].ariaAutoComplete as AriaAutocompleteToken;
  }
  set ariaAutoComplete(value: AriaAutocompleteToken) {
    this[internalsKey].ariaAutoComplete = value as string;
  }

  /**
   * @property ariaBrailleLabel
   * @description Defines a string value that labels the current element, which is intended to be converted into Braille. See related aria-label.
   * @aria-attribute aria-braillelabel
   * @aria-used-in All elements of the base markup except for the following roles: caption, code, definition, deletion, emphasis, generic, insertion, mark, none, paragraph, strong, subscript, suggestion, superscript, term, time
   **/
  get ariaBrailleLabel(): string {
    return this[internalsKey].ariaBrailleLabel as string;
  }
  set ariaBrailleLabel(value: string) {
    this[internalsKey].ariaBrailleLabel = value as string;
  }

  /**
   * @property ariaBrailleRoleDescription
   * @description Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille. See related aria-roledescription.
   * @aria-attribute aria-brailleroledescription
   * @aria-used-in All elements of the base markup except for the following roles: generic
   **/
  get ariaBrailleRoleDescription(): string {
    return this[internalsKey].ariaBrailleRoleDescription as string;
  }
  set ariaBrailleRoleDescription(value: string) {
    this[internalsKey].ariaBrailleRoleDescription = value as string;
  }

  /**
   * @property ariaColCount
   * @description Defines the total number of columns in a table, grid, or treegrid. See related aria-colindex.
   * @aria-attribute aria-colcount
   * @aria-used-in table
   * @aria-inherited-by grid, treegrid
   **/
  get ariaColCount(): number {
    return Number(this[internalsKey].ariaColCount);
  }
  set ariaColCount(value: number) {
    this[internalsKey].ariaColCount = String(value);
  }

  /**
   * @property ariaColIndex
   * @description Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. See related aria-colindextext, aria-colcount, and aria-colspan.
   * @aria-attribute aria-colindex
   * @aria-used-in cell, row
   * @aria-inherited-by columnheader, gridcell, rowheader
   **/
  get ariaColIndex(): number {
    return Number(this[internalsKey].ariaColIndex);
  }
  set ariaColIndex(value: number) {
    this[internalsKey].ariaColIndex = String(value);
  }

  /**
   * @property ariaColIndexText
   * @description Defines a human readable text alternative of aria-colindex. See related aria-rowindextext.
   * @aria-attribute aria-colindextext
   * @aria-used-in cell
   * @aria-inherited-by columnheader, rowheader
   **/
  get ariaColIndexText(): string {
    return this[internalsKey].ariaColIndexText as string;
  }
  set ariaColIndexText(value: string) {
    this[internalsKey].ariaColIndexText = value as string;
  }

  /**
   * @property ariaColSpan
   * @description Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-colindex and aria-rowspan.
   * @aria-attribute aria-colspan
   * @aria-used-in cell
   * @aria-inherited-by columnheader, rowheader
   **/
  get ariaColSpan(): number {
    return Number(this[internalsKey].ariaColSpan);
  }
  set ariaColSpan(value: number) {
    this[internalsKey].ariaColSpan = String(value);
  }

  /**
   * @property ariaControlsElements
   * @description Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.
   * @aria-attribute aria-controls
   * @aria-used-in All elements of the base markup
   **/
  get ariaControlsElements(): string[] {
    return (this[internalsKey].ariaControlsElements?.split(' ') ||
      []) as string[];
  }
  set ariaControlsElements(value: string[]) {
    this[internalsKey].ariaControlsElements = value.join(' ');
  }

  /**
   * @property ariaDescribedByElements
   * @description Identifies the element (or elements) that describes the object. See related aria-labelledby and aria-description.
   * @aria-attribute aria-describedby
   * @aria-used-in All elements of the base markup
   * @aria-related-concepts <label> in HTML, online help, HTML table cell headers
   **/
  get ariaDescribedByElements(): string[] {
    return (this[internalsKey].ariaDescribedByElements?.split(' ') ||
      []) as string[];
  }
  set ariaDescribedByElements(value: string[]) {
    this[internalsKey].ariaDescribedByElements = value.join(' ');
  }

  /**
   * @property ariaDescription
   * @description Defines a string value that describes or annotates the current element. See related aria-describedby.
   * @aria-attribute aria-description
   * @aria-used-in All elements of the base markup
   * @aria-related-concepts title attribute in HTML
   **/
  get ariaDescription(): string {
    return this[internalsKey].ariaDescription as string;
  }
  set ariaDescription(value: string) {
    this[internalsKey].ariaDescription = value as string;
  }

  /**
   * @property ariaDetailsElements
   * @description Identifies the element (or elements) that provide additional information related to the object. See related aria-describedby.
   * @aria-attribute aria-details
   * @aria-used-in All elements of the base markup
   **/
  get ariaDetailsElements(): string[] {
    return (this[internalsKey].ariaDetailsElements?.split(' ') ||
      []) as string[];
  }
  set ariaDetailsElements(value: string[]) {
    this[internalsKey].ariaDetailsElements = value.join(' ');
  }

  /**
   * @property ariaErrorMessageElements
   * @description Identifies the element (or elements) that provides an error message for an object. See related aria-invalid and aria-describedby.
   * @aria-attribute aria-errormessage
   * @aria-used-in application, checkbox, combobox, gridcell, listbox, radiogroup, slider, spinbutton, textbox, tree
   * @aria-inherited-by columnheader, rowheader, searchbox, switch, treegrid
   **/
  get ariaErrorMessageElements(): string[] {
    return (this[internalsKey].ariaErrorMessageElements?.split(' ') ||
      []) as string[];
  }
  set ariaErrorMessageElements(value: string[]) {
    this[internalsKey].ariaErrorMessageElements = value.join(' ');
  }

  /**
   * @property ariaFlowToElements
   * @description Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
   * @aria-attribute aria-flowto
   * @aria-used-in All elements of the base markup
   **/
  get ariaFlowToElements(): string[] {
    return (this[internalsKey].ariaFlowToElements?.split(' ') ||
      []) as string[];
  }
  set ariaFlowToElements(value: string[]) {
    this[internalsKey].ariaFlowToElements = value.join(' ');
  }

  /**
   * @property ariaHasPopup
   * @description Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
   * @aria-attribute aria-haspopup
   * @aria-used-in application, button, combobox, gridcell, link, menuitem, slider, tab, textbox, treeitem
   * @aria-inherited-by columnheader, menuitemcheckbox, menuitemradio, rowheader, searchbox
   * @aria-related-concepts aria-controls
   **/
  get ariaHasPopup(): AriaHaspopupToken {
    return this[internalsKey].ariaHasPopup as AriaHaspopupToken;
  }
  set ariaHasPopup(value: AriaHaspopupToken) {
    this[internalsKey].ariaHasPopup = value as string;
  }

  /**
   * @property ariaKeyShortcuts
   * @description Defines keyboard shortcuts that an author has implemented to activate or give focus to an element.
   * @aria-attribute aria-keyshortcuts
   * @aria-used-in All elements of the base markup
   * @aria-related-concepts Keyboard shortcut
   **/
  get ariaKeyShortcuts(): string {
    return this[internalsKey].ariaKeyShortcuts as string;
  }
  set ariaKeyShortcuts(value: string) {
    this[internalsKey].ariaKeyShortcuts = value as string;
  }

  /**
   * @property ariaLabel
   * @description Defines a string value that labels the current element. See related aria-labelledby.
   * @aria-attribute aria-label
   * @aria-used-in All elements of the base markup except for the following roles: caption, code, definition, deletion, emphasis, generic, insertion, mark, none, paragraph, strong, subscript, suggestion, superscript, term, time
   **/
  get ariaLabel(): string {
    return this[internalsKey].ariaLabel as string;
  }
  set ariaLabel(value: string) {
    this[internalsKey].ariaLabel = value as string;
  }

  /**
   * @property ariaLabelledByElements
   * @description Identifies the element (or elements) that labels the current element. See related aria-label and aria-describedby.
   * @aria-attribute aria-labelledby
   * @aria-used-in All elements of the base markup except for the following roles: caption, code, definition, deletion, emphasis, generic, insertion, mark, none, paragraph, strong, subscript, suggestion, superscript, term, time
   * @aria-related-concepts <label> in HTML
   **/
  get ariaLabelledByElements(): string[] {
    return (this[internalsKey].ariaLabelledByElements?.split(' ') ||
      []) as string[];
  }
  set ariaLabelledByElements(value: string[]) {
    this[internalsKey].ariaLabelledByElements = value.join(' ');
  }

  /**
   * @property ariaLevel
   * @description Defines the hierarchical level of an element within a structure.
   * @aria-attribute aria-level
   * @aria-used-in comment, heading, row, treeitem
   **/
  get ariaLevel(): number {
    return Number(this[internalsKey].ariaLevel);
  }
  set ariaLevel(value: number) {
    this[internalsKey].ariaLevel = String(value);
  }

  /**
   * @property ariaLive
   * @description Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   * @aria-attribute aria-live
   * @aria-used-in All elements of the base markup
   **/
  get ariaLive(): AriaLiveToken {
    return this[internalsKey].ariaLive as AriaLiveToken;
  }
  set ariaLive(value: AriaLiveToken) {
    this[internalsKey].ariaLive = value as string;
  }

  /**
   * @property ariaModal
   * @description Indicates whether an element is modal when displayed.
   * @aria-attribute aria-modal
   * @aria-used-in window
   * @aria-inherited-by alertdialog, dialog
   **/
  get ariaModal(): boolean {
    return this[internalsKey].ariaModal === 'true';
  }
  set ariaModal(value: boolean) {
    this[internalsKey].ariaModal = String(value);
  }

  /**
   * @property ariaMultiLine
   * @description Indicates whether a text box accepts multiple lines of input or only a single line.
   * @aria-attribute aria-multiline
   * @aria-used-in textbox
   * @aria-inherited-by searchbox
   **/
  get ariaMultiLine(): boolean {
    return this[internalsKey].ariaMultiLine === 'true';
  }
  set ariaMultiLine(value: boolean) {
    this[internalsKey].ariaMultiLine = String(value);
  }

  /**
   * @property ariaMultiSelectable
   * @description Indicates that the user can select more than one item from the current selectable descendants.
   * @aria-attribute aria-multiselectable
   * @aria-used-in grid, listbox, tablist, tree
   * @aria-inherited-by treegrid
   **/
  get ariaMultiSelectable(): boolean {
    return this[internalsKey].ariaMultiSelectable === 'true';
  }
  set ariaMultiSelectable(value: boolean) {
    this[internalsKey].ariaMultiSelectable = String(value);
  }

  /**
   * @property ariaOrientation
   * @description Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   * @aria-attribute aria-orientation
   * @aria-used-in scrollbar, select, separator, slider, tablist, toolbar
   * @aria-inherited-by listbox, menu, menubar, radiogroup, tree, treegrid
   **/
  get ariaOrientation(): AriaOrientationToken {
    return this[internalsKey].ariaOrientation as AriaOrientationToken;
  }
  set ariaOrientation(value: AriaOrientationToken) {
    this[internalsKey].ariaOrientation = value as string;
  }

  /**
   * @property ariaOwnsElements
   * @description Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related aria-controls.
   * @aria-attribute aria-owns
   * @aria-used-in All elements of the base markup
   **/
  get ariaOwnsElements(): string[] {
    return (this[internalsKey].ariaOwnsElements?.split(' ') || []) as string[];
  }
  set ariaOwnsElements(value: string[]) {
    this[internalsKey].ariaOwnsElements = value.join(' ');
  }

  /**
   * @property ariaPlaceholder
   * @description Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
   * @aria-attribute aria-placeholder
   * @aria-used-in textbox
   * @aria-inherited-by searchbox
   * @aria-related-concepts placeholder attribute in HTML
   **/
  get ariaPlaceholder(): string {
    return this[internalsKey].ariaPlaceholder as string;
  }
  set ariaPlaceholder(value: string) {
    this[internalsKey].ariaPlaceholder = value as string;
  }

  /**
   * @property ariaPosInSet
   * @description Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-setsize.
   * @aria-attribute aria-posinset
   * @aria-used-in article, comment, listitem, menuitem, option, radio, row, tab
   * @aria-inherited-by comment, menuitemcheckbox, menuitemradio, treeitem
   **/
  get ariaPosInSet(): number {
    return Number(this[internalsKey].ariaPosInSet);
  }
  set ariaPosInSet(value: number) {
    this[internalsKey].ariaPosInSet = String(value);
  }

  /**
   * @property ariaReadOnly
   * @description Indicates that the element is not editable, but is otherwise operable. See related aria-disabled.
   * @aria-attribute aria-readonly
   * @aria-used-in checkbox, combobox, grid, gridcell, listbox, radiogroup, slider, spinbutton, textbox
   * @aria-inherited-by columnheader, rowheader, searchbox, switch, treegrid
   * @aria-related-concepts readonly attribute in HTML
   **/
  get ariaReadOnly(): boolean {
    return this[internalsKey].ariaReadOnly === 'true';
  }
  set ariaReadOnly(value: boolean) {
    this[internalsKey].ariaReadOnly = String(value);
  }

  /**
   * @property ariaRelevant
   * @description Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related aria-atomic.
   * @aria-attribute aria-relevant
   * @aria-used-in All elements of the base markup
   **/
  get ariaRelevant(): AriaRelevantToken[] {
    return (this[internalsKey].ariaRelevant?.split(' ') ||
      []) as AriaRelevantToken[];
  }
  set ariaRelevant(value: AriaRelevantToken[]) {
    this[internalsKey].ariaRelevant = value.join(' ');
  }

  /**
   * @property ariaRequired
   * @description Indicates that user input is required on the element before a form can be submitted.
   * @aria-attribute aria-required
   * @aria-used-in checkbox, combobox, gridcell, listbox, radiogroup, spinbutton, textbox, tree
   * @aria-inherited-by columnheader, rowheader, searchbox, switch, treegrid
   * @aria-related-concepts required attribute in HTML
   **/
  get ariaRequired(): boolean {
    return this[internalsKey].ariaRequired === 'true';
  }
  set ariaRequired(value: boolean) {
    this[internalsKey].ariaRequired = String(value);
  }

  /**
   * @property ariaRoleDescription
   * @description Defines a human-readable, author-localized description for the role of an element.
   * @aria-attribute aria-roledescription
   * @aria-used-in All elements of the base markup except for the following roles: generic
   **/
  get ariaRoleDescription(): string {
    return this[internalsKey].ariaRoleDescription as string;
  }
  set ariaRoleDescription(value: string) {
    this[internalsKey].ariaRoleDescription = value as string;
  }

  /**
   * @property ariaRowCount
   * @description Defines the total number of rows in a table, grid, or treegrid. See related aria-rowindex.
   * @aria-attribute aria-rowcount
   * @aria-used-in table
   * @aria-inherited-by grid, treegrid
   **/
  get ariaRowCount(): number {
    return Number(this[internalsKey].ariaRowCount);
  }
  set ariaRowCount(value: number) {
    this[internalsKey].ariaRowCount = String(value);
  }

  /**
   * @property ariaRowIndex
   * @description Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. See related aria-rowindextext, aria-rowcount, and aria-rowspan.
   * @aria-attribute aria-rowindex
   * @aria-used-in cell, row
   * @aria-inherited-by columnheader, gridcell, rowheader
   **/
  get ariaRowIndex(): number {
    return Number(this[internalsKey].ariaRowIndex);
  }
  set ariaRowIndex(value: number) {
    this[internalsKey].ariaRowIndex = String(value);
  }

  /**
   * @property ariaRowIndexText
   * @description Defines a human readable text alternative of aria-rowindex. See related aria-colindextext.
   * @aria-attribute aria-rowindextext
   * @aria-used-in cell, row
   * @aria-inherited-by columnheader, gridcell, rowheader
   **/
  get ariaRowIndexText(): string {
    return this[internalsKey].ariaRowIndexText as string;
  }
  set ariaRowIndexText(value: string) {
    this[internalsKey].ariaRowIndexText = value as string;
  }

  /**
   * @property ariaRowSpan
   * @description Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-rowindex and aria-colspan.
   * @aria-attribute aria-rowspan
   * @aria-used-in cell
   * @aria-inherited-by columnheader, rowheader
   **/
  get ariaRowSpan(): number {
    return Number(this[internalsKey].ariaRowSpan);
  }
  set ariaRowSpan(value: number) {
    this[internalsKey].ariaRowSpan = String(value);
  }

  /**
   * @property ariaSetSize
   * @description Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-posinset.
   * @aria-attribute aria-setsize
   * @aria-used-in article, comment, listitem, menuitem, option, radio, row, tab
   * @aria-inherited-by comment, menuitemcheckbox, menuitemradio, treeitem
   **/
  get ariaSetSize(): number {
    return Number(this[internalsKey].ariaSetSize);
  }
  set ariaSetSize(value: number) {
    this[internalsKey].ariaSetSize = String(value);
  }

  /**
   * @property ariaSort
   * @description Indicates if items in a table or grid are sorted in ascending or descending order.
   * @aria-attribute aria-sort
   * @aria-used-in columnheader, rowheader
   **/
  get ariaSort(): AriaSortToken {
    return this[internalsKey].ariaSort as AriaSortToken;
  }
  set ariaSort(value: AriaSortToken) {
    this[internalsKey].ariaSort = value as string;
  }

  /**
   * @property ariaValueMax
   * @description Defines the maximum allowed value for a range widget.
   * @aria-attribute aria-valuemax
   * @aria-used-in range, scrollbar, separator, slider, spinbutton
   * @aria-inherited-by meter, progressbar, scrollbar, slider, spinbutton
   * @aria-related-concepts <input type="range"> element max attribute in HTML
   **/
  get ariaValueMax(): number {
    return Number(this[internalsKey].ariaValueMax);
  }
  set ariaValueMax(value: number) {
    this[internalsKey].ariaValueMax = String(value);
  }

  /**
   * @property ariaValueMin
   * @description Defines the minimum allowed value for a range widget.
   * @aria-attribute aria-valuemin
   * @aria-used-in range, scrollbar, separator, slider, spinbutton
   * @aria-inherited-by meter, progressbar, scrollbar, slider, spinbutton
   * @aria-related-concepts <input type="range"> element min attribute in HTML
   **/
  get ariaValueMin(): number {
    return Number(this[internalsKey].ariaValueMin);
  }
  set ariaValueMin(value: number) {
    this[internalsKey].ariaValueMin = String(value);
  }

  /**
   * @property ariaValueNow
   * @description Defines the current value for a range widget. See related aria-valuetext.
   * @aria-attribute aria-valuenow
   * @aria-used-in meter, range, scrollbar, separator, slider, spinbutton
   * @aria-inherited-by meter, progressbar, scrollbar, slider, spinbutton
   * @aria-related-concepts <input type="range"> element value attribute in HTML
   **/
  get ariaValueNow(): number {
    return Number(this[internalsKey].ariaValueNow);
  }
  set ariaValueNow(value: number) {
    this[internalsKey].ariaValueNow = String(value);
  }

  /**
   * @property ariaValueText
   * @description Defines the human readable text alternative of aria-valuenow for a range widget.
   * @aria-attribute aria-valuetext
   * @aria-used-in range, separator, spinbutton
   * @aria-inherited-by meter, progressbar, scrollbar, slider, spinbutton
   **/
  get ariaValueText(): string {
    return this[internalsKey].ariaValueText as string;
  }
  set ariaValueText(value: string) {
    this[internalsKey].ariaValueText = value as string;
  }
}
