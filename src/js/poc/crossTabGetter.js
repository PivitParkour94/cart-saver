// function logTabsForWindows(windowInfoArray) {
//   for (const windowInfo of windowInfoArray) {
//     console.log(`Window: ${windowInfo.id}`);
//     console.log(windowInfo.tabs.map((tab) => tab.url));
//   }
// }

// function onError(error) {
//   console.error(`Error: ${error}`);
// }

// browser.browserAction.onClicked.addListener((tab) => {
//   browser.windows
//     .getAll({
//       populate: true,
//       windowTypes: ["normal"],
//     })
//     .then(logTabsForWindows, onError);
// });
console.log(window.opener);