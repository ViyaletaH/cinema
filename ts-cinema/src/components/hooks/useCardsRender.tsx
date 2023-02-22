
function useCardsRender(arr:{}[], cont: Element): void {
    if(document.readyState === 'complete') {
        for (let i = 0; i < arr.length; i++) {
        const card = document.createElement("div")!;
        card.classList.add("card");
        cont.appendChild(card);
    }
}

}

export default useCardsRender
