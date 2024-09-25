import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class DashboardPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.DASHBOARD}`;
    this.pageSelector = Selector(this.pageId);
    this.section4YR = Selector(`#${COMPONENT_IDS.DASHBOARD_4YR_PAGE}`);
    this.section8YR = Selector(`#${COMPONENT_IDS.DASHBOARD_8YR_PAGE}`);
    this.section12YR = Selector(`#${COMPONENT_IDS.DASHBOARD_12YR_PAGE}`);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.expect(this.pageSelector.exists).ok();
  }

  async goto4YearGraphs() {
    await t.click(`#${COMPONENT_IDS.DASHBOARD_4YR_BTN}`);
    await t.expect(this.section4YR.exists).ok();
  }

  async goto8YearGraphs() {
    await t.click(`#${COMPONENT_IDS.DASHBOARD_8YR_BTN}`);
    await t.expect(this.section8YR.exists).ok();
  }

  async goto12YearGraphs() {
    await t.click(`#${COMPONENT_IDS.DASHBOARD_12YR_BTN}`);
    await t.expect(this.section12YR.exists).ok();
  }
}

export const dashboardPage = new DashboardPage();
