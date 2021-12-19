import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["query", "posts"]

  connect() {
    console.log("hello from stimulus")
  }

  submit() {
    const value = this.queryTarget.value;

    Rails.ajax({
      type: "GET",
      url: `/?query=${value}`,
      success: (_data, _status, xhr) => {
        this.element.outerHTML = xhr.response
      }
    })
  }

  postTemplate(post) {
    return `<div>
      <h4>${post.name}</h4>
      <p>${post.description}</p>
    </div>`
  }
}
