const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



const coin = {
    state: 0,
  
    flip: function () {
      this.state = randomNumber(0,1)
       return this.state
    },
  
    toString: function () {
      if (this.state === 1){ 
        return "Tails"
      }
        return "Heads"
    },
    
  
    toHTML: function () {
    
      const image = document.createElement("img");
       if (this.state === 0){
          image.setAttribute("src", "./img/heads.png")
          image.setAttribute("alt", "Heads")
          image.setAttribute("width", "100px")
         
       }
       else{
        image.setAttribute("src", "./img/tails.png")
        image.setAttribute("alt", "Tails")
        image.setAttribute("width", "100px")
       }
    
       return document.body.append(image);
    },
  };

  const displayText = function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++){
      coin.flip()
      results.push(coin.toString())
      
   
    }
    const text = document.createElement("div")
    text.innerHTML = results
    text.classList.add("exibicao")
    document.body.append(text)
      
        return results
  }
displayText()
  
  
  
  
  

  const displayImages = function display20Images() {
     const results = []
      for (let i = 0; i < 20; i++){
        coin.flip()
        coin.toHTML()
        results.push(coin.toHTML())
              
        
      }
    return results  
  }
  
  displayImages()
  
 
  

