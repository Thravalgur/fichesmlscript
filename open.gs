function onOpen(e) {
  var ui = DocumentApp.getUi();
  ui.createMenu('Barèmes des ML')
      .addItem('Total des Sections', 'sumSections')
      .addItem('Total Général', 'sumAll')
      .addToUi();
}
