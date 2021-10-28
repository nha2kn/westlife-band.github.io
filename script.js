        // Open, Close mobile menu
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        // Open,closed
        mobileMenu.onclick = () =>{
            var isClosed = header.clientHeight === headerHeight;
            if(isClosed) {
                header.style.height = 'auto';
            } else{
                header.style.height = null;
            }
        }

        // auto close menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for(var i=0; i < menuItems.length;i++){
            var menuItem = menuItems[i];

            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if(isParentMenu){
                    event.preventDefault();
                    // event.preventDefalut();
                } else{
                    header.style.height = null;
                }
            }
        }

    // Buy Tickets
        const buyBtns = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.js-modal');
        const modalContainer = document.querySelector('.js-modal-container');
        const modalClose = document.querySelector('.js-modal-close');

        // Func show buy tickets (add class open to modal)
        function showBuyTickets() {
            modal.classList.add('open');
        }

        // Func show buy tickets (add class open to modal)
        function hideBuyTickets() {
            modal.classList.remove('open');
        }

        for(const buyBtn of buyBtns){
            buyBtn.addEventListener('click', showBuyTickets);
        }

        modalClose.addEventListener('click',hideBuyTickets);

        modal.addEventListener('click',hideBuyTickets);

        modalContainer.addEventListener('click',function(event) {
            event.stopPropagation();
        }) 