// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function hideButton() {
   const uniqueElement = document.querySelector('.page__button');

   if (uniqueElement) {
      window.addEventListener('scroll', () => {
         const lastBlock = document.querySelector('.for-who');
         const lastBlockPosition = lastBlock.getBoundingClientRect();
         const windowPosition = window.innerHeight;
         const pageButton = document.querySelector('#page-button');
         const windowWidth = window.innerWidth;
         const burgerMenuWidth = 0; // 1236.98

         if (windowWidth > burgerMenuWidth) {
            if (lastBlockPosition.bottom < windowPosition) {
               pageButton.style.display = 'block';
            } else {
               pageButton.style.display = 'none';
            }
         } else {
            pageButton.style.display = 'none';

         }
      })
   };
}
hideButton();

//=============== Change href in Popup button ===============//

// function submitForm() {


//    const hrefPayments = {
//       "1": "https://secure.wayforpay.com/button/bf9ae47bacc14",
//       "2": "https://secure.wayforpay.com/button/beca8f3e84119",
//       "3": "https://secure.wayforpay.com/button/b78295381f963",
//    };

//    const buttonPayment = document.querySelectorAll('.price__button');
//    const popupButton = document.querySelector('#payment-card');
//    const popupForm = document.querySelector('.popup__form');
//    const popupInput = document.querySelector('#popupInput');
//    const popupCheckbox = document.querySelector('#popupCheckbox');
//    const errorMessageBlock = document.querySelector('#error-message');
//    const errorMessage = 'Заповніть email і поставте згоду на обробку данних';


//    console.log(errorMessage);
//    console.log(popupInput);



//    buttonPayment.forEach(button => {
//       button.addEventListener('click', (e) => {
//          const dataId = e.currentTarget.dataset.id;
//          if (hrefPayments[dataId]) {
//             popupForm.setAttribute('action', hrefPayments[dataId]);
//          }
//       });
//    });

//    popupForm.addEventListener('submit', (e) => {
//       if (!popupInput.value && !popupCheckbox.checked) {
//          e.preventDefault();
//          errorMessageBlock.textContent = errorMessage;
//       } else {
//          errorMessageBlock.textContent = "";
//       }
//    });

// }

// submitForm();