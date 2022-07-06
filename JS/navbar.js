/* eslint-disable no-unused-vars, no-undef, no-return-assign */
class Navbar {
  static show() {
  Navbar.navigate()
  }
  static navigate() {
      const nav = document.getElementById('navbar');
      nav.innerHTML = `
              <ul>
                  <li id="fastlink" data-section="book-page" class="link active"> List </li>
                  <li data-section="add-page" class="link"> Add new </li>
                  <li data-section="contactinfo-page" class="link"> Contact </li>
              </ul>
          `;
           
      const links = document.querySelectorAll('#navbar .link');
     

      const showPage = (e) => {
        const currentLink = e.target;
  
        if (currentLink.classList.contains('link') && !currentLink.classList.contains('active')) {
          links.forEach((link) => link.classList.remove('active'));
          currentLink.classList.add('active');
  
          const pageId = e.target.getAttribute('data-section');
          const currentPage = document.getElementById(pageId);
  
          const pages = document.querySelectorAll('.page');
          pages.forEach((page) => page.classList.add('disable-page'));
          currentPage.classList.remove('disable-page');
          currentPage.classList.add('showing');
        }
      };
  
      nav.addEventListener('click', (e) => showPage(e));
    }
}
const listlinks = document.querySelector('#fastlink');