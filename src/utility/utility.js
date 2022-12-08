export const changeView = () => {
  const list = document.querySelector('#uncontrolled-tab-example-tabpane-list');
  const listBtn = document.querySelector('#uncontrolled-tab-example-tab-list');
  const grid = document.querySelector('#uncontrolled-tab-example-tabpane-grid');
  const gridBtn = document.querySelector('#uncontrolled-tab-example-tab-grid');

  window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
      gridBtn.click();
      if(list.classList.contains('active')){
        list.classList.remove('active', 'show');
        grid.classList.add('active', 'show');
      }
      if(listBtn.classList.contains('active')){
        listBtn.setAttribute('aria-selected', 'false');
        listBtn.setAttribute('tabindex', '-1');
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');
        gridBtn.setAttribute('aria-selected', 'true');
        gridBtn.removeAttribute('tabindex');
      }
    }
  });
}