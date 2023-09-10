const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTabLink = document.querySelectorAll('.js-tab-link');


function deactivateTavItems () {
  elsTabsItem.forEach(function(elTabsItem){
    elTabsItem.classList.remove('tabs__item--active')
  });
}

function deactivateTavPanels () {
  elsTabsPanel.forEach(function(elTabsPanel){
    elTabsPanel.classList.remove('tabs__panel--active')
  });
}

elsTabLink.forEach(function(elTabLink){
  elTabLink.addEventListener('click', function(evt){
    //Prevent page move
    evt.preventDefault();

    //Remove active class form tabs__item elements
    deactivateTavItems ();


    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active')

    //Remove active class form tabs__panel elements
    deactivateTavPanels ();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add('tabs__panel--active');

    console.log(elTabLink.dataset.tabTarget);
    })
  })