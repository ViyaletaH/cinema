import { useEffect } from 'react';

function useCardsRender(arr: any[], cont: Element): void {
  useEffect(() => {
    function renderCards() {
      for (let i = 0; i < arr.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        cont.appendChild(card);
      }
    }

    if (cont) {
      renderCards();
    }
  }, [arr, cont]);
}

export default useCardsRender
