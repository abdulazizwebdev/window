const modals = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close  = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        } );

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        function closeModal (selector) {
            selector.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    
        function openModal(selector) {
            selector.style.display = 'block';
            document.body.classList.add('modal-open');
        }
    }

    function showModalByTime (selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;