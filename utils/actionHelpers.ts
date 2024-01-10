import { Locator, Page } from '@playwright/test'

export async function enterText(selector, text) {
  selector.clear();
  selector.fill(text);
}

export async function gotoUrl(page, url) {
    page.goto(url);
}

export async function clickButton(selector) {
    selector.click();
}

export async function selectCheckbox(selector) {
    selector.check();
}

export async function selectOptions(selector, value) {
    selector.selectOptions(value);
}

export async function doubleClick(selector) {
    selector.doubleClick();
}

export async function rightClick(selector) {
    selector.click({ button: 'right' });
}

export async function shiftClick(selector) {
    selector.click({ modifiers: ['Shift'] });
}

export async function mouseHover(selector) {
    selector.mouseHover();
}


export async function waitForElement(selector) {
    selector.waitForElement();
}

export async function scrollToElement(selector) {
    selector.scrollToElement();
}
