let contentBefore = [];

export class DynamicContentPage {
  elements = {
    clickDynamicContentLink: () => cy.get('a[href="/dynamic_content"]'),
    dynamicContentText: () => cy.contains("h3", "Dynamic Content"),
    contentBlocks: () => cy.get(".large-10.columns"),
  };

  clickDynamicContentLink() {
    this.elements.clickDynamicContentLink().click();
  }

  dynamicContentPageRedirect() {
    cy.url().should("include", "/dynamic_content");
    this.elements.dynamicContentText().should("be.visible");
  }

  contentBeforeRefresh() {
    this.elements.contentBlocks().each(($el) => {
      contentBefore.push($el.text().trim());
    });
  }

  refreshDybamicContentPage() {
    cy.reload();
  }

  contentAfterRefresh() {
    this.elements.contentBlocks().then(($blocks) => {
      const contentAfter = $blocks
        .toArray()
        .map((block) => block.innerText.trim());

      expect(contentAfter).to.not.deep.equal(contentBefore);
    });
  }
}
