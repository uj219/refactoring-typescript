export class Greeting {

  displayMessage(msg: string) {
    const msgEl = document.getElementById('message');
    if (!msgEl) {
      throw new Error(`There is no html element whose id is 'message'.`);
    }
    msgEl.textContent = this.getMessage(msg);
  }

  getMessage(msg: string) {
    return `Hello ${msg}`;
  }

}
