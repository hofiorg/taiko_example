const { openBrowser, goto, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("www.hofi.org");
        await click("twitch");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
