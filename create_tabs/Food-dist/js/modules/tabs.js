function tabs(tabsSelector,tabsContentSelector, tabsParentSelector, activeClass) {


    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

    function hideTabComtent() {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show', 'fade');
        });

        tabs.forEach(el => {
            el.classList.remove(activeClass);
        });
    
    }


    function showTabContent(i=0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabComtent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => { 
            if (target === item) {
                hideTabComtent();
                showTabContent(index);
                }    
            });
        }
    });
}

export default tabs;