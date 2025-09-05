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



//=============== Accept cookis ===============//

const popup = document.querySelector("#popup");
const oneYear = 1000 * 60 * 60 * 24 * 365;

function showPopup() {
   popup.classList.add("popup_show");
}

function hidePopup() {
   popup.classList.remove("popup_show");
}

function setConsent(status) {
   const consent = { status, timestamp: Date.now() };
   localStorage.setItem("cookieConsent", JSON.stringify(consent));

   if (typeof clarity === "function") {
      clarity("consent", status === "accepted");
   }
   hidePopup();
}

window.addEventListener("load", () => {
   const stored = localStorage.getItem("cookieConsent");
   let consent = null;

   try {
      consent = stored ? JSON.parse(stored) : null;
   } catch (e) {
      consent = null;
   }

   if (!consent || Date.now() - consent.timestamp > oneYear) {
      showPopup();
   } else if (typeof clarity === "function") {
      clarity("consent", consent.status === "accepted");
   }
});


document.querySelector("#acceptCookies").addEventListener("click", () => setConsent("accepted"));
document.querySelector("#rejectCookies").addEventListener("click", () => setConsent("rejected"));
