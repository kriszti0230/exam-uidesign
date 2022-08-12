function main() {
    const section = document.getElementById("section");
  
    const bookComponent = (title, sub, text, index) => {
      return `<div>
                <div class="card">
                    <p class="subtitle">${sub}</p>
                    <p class="title"><strong>${title}</strong></p>
                    <p>${text}</p>
    
                    <span class="index"><strong>${index}</strong></span>
    
                </div>
                <button> 
                    <span class="readMore">read more</span>
                    <span class="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
                  `;
    };
    let bookSection = "";
    for (let i = 0; i < books.cards.length; i++) {
      let currentBook = books.cards[i];
      bookSection += bookComponent(
        currentBook.title,
        currentBook.sub,
        currentBook.text,
        i + 1
      );
    }
    section.insertAdjacentHTML("beforeend", bookSection);
  }
  
  window.addEventListener("load", main);
  