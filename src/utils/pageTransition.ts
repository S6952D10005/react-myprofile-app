// Page order, matching the order of the SideMenu icons (top to bottom)
export const pageOrder = ['/', '/about', '/eduexp', '/spec', '/projects', '/skills', '/contactme']

// Before switching pages, mark the direction on <html> so the CSS knows
// which way to slide the content:
//   next = going to a page lower in the menu  -> content slides up
//   prev = going to a page higher in the menu -> content slides down
export function setTransitionDirection(fromPath: string, toPath: string) {
  const from = pageOrder.indexOf(fromPath)
  const to = pageOrder.indexOf(toPath)
  document.documentElement.dataset.direction = to < from ? 'prev' : 'next'
}
