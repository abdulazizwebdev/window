const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabs() {
        content.forEach(item => {
            item.style.display = 'none';
            // item.classList.remove('fade');
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
        // content[i].classList.add('fade');
    }

    hideTabs();
    showTabs();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
};

export default tabs;