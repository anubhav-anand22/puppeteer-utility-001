const puppeteer = require('puppeteer');
const {question, rl} = require('./rl');
const {whatsAppItemTitleSelector, whatsAppInputSelector, whatsAppSendBtnSelector} = require('./selector')

const TITLE = "<CONTACT NAME>";
const TEXT = "?) <YOUR TEXT>";
const TIMES = 1000;

async function main() {
    const Browser = await puppeteer.launch({headless: false});

    const page = await Browser.newPage();

    await page.goto("https://web.whatsapp.com/");

    await question("Should continue? ");
    
    await page.click(whatsAppItemTitleSelector(TITLE));

    await page.click(whatsAppInputSelector);

    for(let i = 0; i < TIMES; i++){
        await page.keyboard.type(TEXT.replace('?', i));
        await page.click(whatsAppSendBtnSelector);
        await page.waitForTimeout(200);
    }

    rl.close();
};

main();