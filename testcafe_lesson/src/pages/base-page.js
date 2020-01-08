import {ClientFunction, t } from "testcafe";

export default class BasePage  {
    async navigateToUrl(url){
        await t.navigateTo(url);
    }

    getUrl = ClientFunction(() => {
        return document.location.href;
    });
}
