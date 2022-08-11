(function(){
  const container = document.querySelector(".container");

  // const clothing = productList.filter((value)=> !value.isAccessory)
  const accessorie = productList.filter((value)=>value.isAccessory)
  accessorie.map((cloths,index)=>{
    const accList = document.createElement("div");
    accList.classList = "card";

    const preview = document.createElement("img");
    preview.setAttribute("src", cloths.preview);

    const proName = document.createElement("h3");
    proName.innerHTML = cloths.name

    const brand = document.createElement("h4");
    brand.innerHTML = cloths.brand
  
    const price = document.createElement("h5");
    price.innerHTML = cloths.price

    accList.append(preview);
    accList.append(proName);
    accList.append(brand);
    accList.append(price);
    container.append(accList);
  })
})();