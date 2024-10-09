const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://krishihelp660.blogspot.com/',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'gw.dataimpulse.com; // Updated
const proxyUsername = '00e2f57a313920c676ce';
const proxyPassword = 'adc63cf51060b592';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

const urls = [
    'https://cpaoffer221.blogspot.com/2024/10/amazoncom-gift-card-balance-reload.html',
    // more urls
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
];

const proxyUrl = 'http://p.webshare.io:80'; // Updated
const proxyUsername = 'zoonto12-US-rotate';
const proxyPassword = 'zoonTO12';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom();
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent);
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(60000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Closing page');
        await page.close();
    }
}

(async () => {
    while (true) {
        for (const url of urls) {
            try {
                console.log(`Launching browser with proxy: ${proxyUrl}`);
                const browser = await puppeteer.launch({
                    headless: true,
                    args: [
                        `--proxy-server=${proxyUrl}`,
                        '--disable-setuid-sandbox',
                        '--no-sandbox',
                        '--disable-web-security',
                        '--disable-features=IsolateOrigins,site-per-process',
                        '--ignore-certificate-errors',  // Added this
                    ],
                    ignoreHTTPSErrors: true,
                });

                await visitAndInteract(browser, url);
                await browser.close();
            } catch (err) {
                console.error('Error during interaction:', err);
            }

            await new Promise(resolve => setTimeout(resolve, getRandomInt(5000, 10000)));
        }
    }
})();
