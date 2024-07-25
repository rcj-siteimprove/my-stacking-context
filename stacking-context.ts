import { Element } from "@siteimprove/alfa-dom";

export class StackingContext {
  readonly children: Array<StackingContext> = [];

  constructor(public element: Element) {}
}
