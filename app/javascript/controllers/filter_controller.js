import { Controller } from 'stimulus'
import Rails from '@rails/ujs';

export default class extends Controller {
  static targets = ['results', 'newBtn', 'oldBtn']

  call(event) {
    const filterType = event.target.dataset.filterTypeValue;

    fetch(`/posts/filter?type=${filterType}`)
      .then(res => res.text())
      .then((html) => {
        if (this.hasResultsTarget) {
          this.resultsTarget.innerHTML = html;
        }
      });
  }
}
