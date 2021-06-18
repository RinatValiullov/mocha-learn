const assert = require("assert");
const ContactForm = require("./contact-form");
const expect = require("chai").expect;

describe("ContactForm", () => {
  let pageObject;

  before(() => {
    pageObject = new ContactForm();
  });

  describe("#emailField", () => {
    it("should set value", () => {
      pageObject.typeInEmailField("example@example.com");

      assert.strictEqual(pageObject.emailField, "example@example.com");
    });

    it("should be clear after form sending", () => {
      // arrange
      const pageObject = new ContactForm();

      // act
      pageObject.typeInEmailField("example@example.com");
      pageObject.sendForm();

      // assert
      expect(pageObject.emailField).is.empty;
    });
  });
});
