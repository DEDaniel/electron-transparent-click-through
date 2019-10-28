isCustomLayout = false

setGrid = (columns, rows, areas, showDetails) => {
  const container = document.getElementsByClassName('grid-container')[0]
  if (container) {
    // missing any validation, but it's just a demo :)
    container.style.gridTemplateColumns = columns
    container.style.gridTemplateRows = rows
    container.style.gridTemplateAreas = areas

    const details = document.getElementsByClassName('details')[0]
    if (details) {
      showDetails ? details.style.display = 'block' : details.style.display = 'none'
    }
  }
}

setCustomLayout = () => {
  isCustomLayout = true
  setGrid('auto', '50px 50px auto', '"header""menu""content"', false)
}
// i can type here w/o problems
setDefaultLayout = () => {
  isCustomLayout = false
  setGrid('150px 300px auto', '50px 1fr 1fr', '"header header header""menu content details""menu content details"', true)
}

toggleContentArea = () => {
  if (isCustomLayout) {
    const content = document.getElementsByClassName('content')[0]
    content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block'
  }
}