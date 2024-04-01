import { measureLeftRange, measureRightRange } from "./content";

export function calculateSelectionAreaPosition(selectionTextAreaRect: DOMRect) {
  const measuredLeftRangeRect = measureLeftRange.getBoundingClientRect();
  const measuredRightRangeRect = measureRightRange.getBoundingClientRect();
  const selectionAreaTopPosition =
    ((selectionTextAreaRect.bottom - measuredRightRangeRect.top) * 100) /
      (measuredLeftRangeRect.top - measuredRightRangeRect.top) +
    10;
  // commented out because it is not used
  // const selectionAreaLeftPosition =
  //   ((selectionTextAreaRect.left - measuredRightRangeRect.left) * 100) /
  //   (measuredLeftRangeRect.left - measuredRightRangeRect.left);

  return selectionAreaTopPosition;
}
