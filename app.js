const shoppingLoad = () =>{
          
         
          const url = `https://fakestoreapi.com/products`
          
          fetch(url)
          .then(res => res.json())
          .then(data => displayShoppingCard(data))
          
}

const displayShoppingCard = (shoppings) =>{
          console.log(shoppings);
          const show = document.getElementById('show')
          shoppings.forEach(shopping =>{
                    console.log(shopping);
                  const div = document.createElement('div')
                  div.innerHTML = `
                  <div class="col h-100">
                              <div class="card shopping">
                              <img  class="img-fluid w-50 d-block mx-auto py-2" src="${shopping.image}" class="card-img-top" alt="...">
                              <div class="card-body">
                              <h4 class="card-title">${shopping.title}</h4>
                              <h4>Price: ${shopping.price} </h4>
                              <P>Ratting: ${shopping.price} </P>
                              <p class="card-text">${shopping.description.slice(0, 80)}</p>
                              </div>
                  
                  `
                  show.appendChild(div)
          })
}