const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent'); // Require random-useragent for generating random user agents

puppeteer.use(StealthPlugin());

const urls = [
    'https://www.adsbinfree.com/2023/09/how-to-increase-fecebook-threshold.html',
    'https://www.adsbinfree.com/search/label/tools',
    'https://www.adsbinfree.com/p/adsbinfree-product-buy-prosessing.html',
    'https://www.adsbinfree.com/p/contact-us.html',
    'https://www.adsbinfree.com/2023/09/facebook-auto-pay-bin-finding-method.html',
    'https://www.adsbinfree.com/p/ads-bin-free-privacy-policy.html',
    'https://www.adsbinfree.com/2023/09/fb-personal-nolimit-account-create-and.html',
    'https://www.adsbinfree.com/2024/03/premium-checker-for-adsbinfree.html',
    'https://www.adsbinfree.com/p/affiliate-program.html',
    'https://www.adsbinfree.com/p/ads-bin-freeterms-conditions.html',
    'https://www.adsbinfree.com/search/label/Spamming',
    'https://www.adsbinfree.com/search/label/BIN',
    'https://www.adsbinfree.com/2024/03/google-adx-account-approval-service.html',
    'https://www.adsbinfree.com/2023/09/google-threshold-javascript-code-with.html',
    'https://www.adsbinfree.com/2023/12/tiktok-ads-threshold-50-full-method.html',
    'https://www.adsbinfree.com/2023/09/50-cracking-tools-you-need-to-crack.html',
    'https://www.adsbinfree.com/2023/09/fecebook-prepaid-loaded-method.html',
    'https://www.adsbinfree.com/',
    'https://www.adsbinfree.com/2023/09/amex-bin-auto-pay.html',
    'https://www.adsbinfree.com/2024/02/facebook-advertising-our-verified.html',
    'https://www.adsbinfree.com/2023/09/iban-method-fecebook-ads.html',
    'https://www.adsbinfree.com/search/label/method',
    'https://www.adsbinfree.com/2023/09/fecebook-auto-pay-method.html',
    'https://www.adsbinfree.com/2023/09/fbi-hacking-and-forensic-toolkit-hack.html',
    'https://www.adsbinfree.com/p/update-bin-here.html',
    'https://www.adsbinfree.com/2023/09/instagram-prepaid-funds-add-method.html',
    'https://www.adsbinfree.com/2023/09/join-private-premium-channels-adsbinfree.html',
    'https://www.adsbinfree.com/p/adsbinfree-cancellation-regarding.html',
    'https://www.adsbinfree.com/2023/09/iban-add-javascript-code-working-now.html',
    'https://www.adsbinfree.com/p/adsbinfree-product-delivery.html',
    'https://www.adsbinfree.com/p/fake-address-generator-us-us-address.html'
];

const referers = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
    'https://www.linkedin.com/',
    'https://www.instagram.com/',
    'https://www.reddit.com/',
    'https://www.pinterest.com/',
    'https://www.tumblr.com/',
    'https://www.quora.com/',
    'https://www.medium.com/',
    'https://www.snapchat.com/',
    'https://www.whatsapp.com/',
    'https://www.weibo.com/',
    'https://www.qq.com/',
    'https://www.taobao.com/',
    'https://www.tiktok.com/',
    'https://www.telegram.org/',
    'https://www.vk.com/',
    'https://www.odnoklassniki.ru/',
    'https://www.wechat.com/',
    'https://www.line.me/',
    'https://www.skype.com/',
    'https://www.slack.com/',
    'https://www.github.com/',
    'https://www.stackoverflow.com/',
    'https://www.bitbucket.org/',
    'https://www.dribbble.com/',
    'https://www.behance.net/',
    'https://www.flickr.com/',
    'https://www.deviantart.com/',
    'https://www.vimeo.com/',
    'https://www.dailymotion.com/',
    'https://www.twitch.tv/',
    'https://www.mixer.com/',
    'https://www.soundcloud.com/',
    'https://www.spotify.com/',
    'https://www.apple.com/',
    'https://www.amazon.com/',
    'https://www.ebay.com/',
    'https://www.alibaba.com/',
    'https://www.aliexpress.com/',
    'https://www.walmart.com/',
    'https://www.target.com/',
    'https://www.bestbuy.com/',
    'https://www.homedepot.com/',
    'https://www.lowes.com/',
    'https://www.costco.com/',
    'https://www.samsclub.com/',
    'https://www.newegg.com/',
    'https://www.wayfair.com/'
];

const proxyUrl = 'residential-unlimited.geonode.com:9000';
const proxyUsername = 'geonode_HkVMLKf7KO';
const proxyPassword = '7950b4db-8283-4cfd-b243-a28e0e311810';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function simulateHumanInteraction(page) {
    console.log('Scrolling the page');

    // Scroll to the bottom
    await page.evaluate(async () => {
        for (let i = 0; i < 10; i++) {
            window.scrollBy(0, window.innerHeight / 2);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    });

    // Wait and then scroll to the top
    await page.evaluate(async () => {
        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 1000));
    });

    await page.waitForTimeout(getRandomInt(2000, 5000));

    const links = await page.$$('a');
    if (links.length > 0) {
        const randomLink = links[Math.floor(Math.random() * links.length)];
        try {
            const linkText = await page.evaluate(el => el.textContent, randomLink);
            console.log(`Clicking on link: ${linkText}`);
            await randomLink.click();
        } catch (err) {
            console.log('Link not clickable:', err);
        }
    }

    await page.waitForTimeout(getRandomInt(2000, 5000));
}

async function visitAndInteract(browser, url) {
    const page = await browser.newPage();
    const userAgent = randomUseragent.getRandom(); // Generate random user agent
    const referer = referers[Math.floor(Math.random() * referers.length)];
    const viewport = {
        width: getRandomInt(1200, 1920),
        height: getRandomInt(800, 1080),
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true
    };

    await page.setUserAgent(userAgent); // Set random user agent
    await page.setExtraHTTPHeaders({ referer });
    await page.setViewport(viewport);

    console.log(`Using referer: ${referer}`);
    console.log(`Browser fingerprint: User Agent: ${userAgent}, Viewport: ${JSON.stringify(viewport)}`);

    try {
        await page.authenticate({ username: proxyUsername, password: proxyPassword });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Visiting URL: ${url}`);
        await page.waitForTimeout(getRandomInt(3000, 5000));
        await simulateHumanInteraction(page);

        const buttons = await page.$$('button.btn-primary');
        if (buttons.length > 0) {
            for (const button of buttons) {
                try {
                    const buttonText = await page.evaluate(el => el.textContent, button);
                    await button.click();
                    console.log(`Clicked button: ${buttonText}`);
                    await page.waitForTimeout(getRandomInt(3000, 5000));
                } catch (err) {
                    console.log('Button not clickable:', err);
                }
            }
        }
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
