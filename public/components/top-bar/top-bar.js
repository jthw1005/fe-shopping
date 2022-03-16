class TopBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.template();
  }

  template() {
    return `<div class="top-bar">
    <ul class="flex">
    <li class="li-item">즐겨찾기</li>
    <li class="li-item">입점신청</li>
    </ul>
    <ul class="flex">
    <li class="li-item">로그인</li>
    <li class="li-item">회원가입</li>
    <li class="li-item">고객센터</li>
    </ul>
    </div>`
  }
}

window.customElements.define('top-bar', TopBar);

export default TopBar;
