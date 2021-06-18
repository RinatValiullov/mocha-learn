const assert = require("assert");
const ContactForm = require("./contact-form");
const expect = require("chai").expect;

describe("ContactForm", () => {
  let pageObject;

  before(() => {
    pageObject = new ContactForm();
    pageObject.typeInEmailField("example@example.com");
  });

  describe("#emailField", () => {
    it("should set value", () => {
      assert.strictEqual(pageObject.emailField, "example@example.com");
    });

    it("should be clear after form sending", () => {
      // act
      pageObject.sendForm();

      // assert
      expect(pageObject.emailField).is.empty;
    });
  });

  describe("#isSent", () => {
    it("the prop isSent should be true", () => {
      pageObject.sendForm();

      expect(pageObject.isSent).to.be.true;
    });
  });
});
