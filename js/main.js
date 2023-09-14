const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');


function deactivateTavItems () {
  elsTabsItem.forEach(function(elTabsItem){
    elTabsItem.classList.remove('tabs__item--active')
  });
}

function deactivateTavPanels () {
  elsTabsPanel.forEach(function(elTabsPanel){
    elTabsPanel.classList.remove('tabpanels__item--active')
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove('accordion__item--open')
  })
}

elsTabLink.forEach(function(elTabLink){
  elTabLink.addEventListener('click', function(evt){
    //Prevent page move
    evt.preventDefault();

    //Remove active class form tabs__item elements
    deactivateTavItems ();


    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active')

    //Remove active class form tabpanels__item elements
    deactivateTavPanels ();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add('tabpanels__item--active');

    console.log(elTabLink.dataset.tabTarget);
  });

})


elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open')
  })
})