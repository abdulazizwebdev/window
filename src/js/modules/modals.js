const modals = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close  = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
            windows.forEach(item => {
                item.style.display = 'none';
            });
        } );

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
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
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;