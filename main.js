// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

function countTVtosell(televisions) {
  let totalCount = 0;
  for (const television of televisions) {
    const tosellofthistype = television.originalStock - television.sold;
    totalCount = totalCount + tosellofthistype;
  }
  return totalCount;
}
const totalCount = countTVtosell(inventory);

const numbertoSell = document.getElementById("numbertoSell");
numbertoSell.textContent = totalCount;


const specTypes = inventory.map((inventory) => {
  return inventory.brand + " type " + inventory.type;
})
//console.log(specTypes);


const TypeSoldout = inventory.filter((inventory) => {
  return inventory.sold == inventory.originalStock;
})
//console.log(TypeSoldout);


const OptAmbi = inventory.filter((inventory) => {
  return inventory.options.ambiLight === inventory.options.ambiLight;
})
//console.log(OptAmbi);

const TVPriceSort = inventory.sort((TVA, TVB) => {
  return TVA.price - TVB.price;
});
//console.log(TVPriceSort)


function countRE(televisions) {
  let totalCountRE = 0;
  for (const television of televisions) {
    const tosoldofthistype = television.originalStock * television.price;
    totalCountRE = totalCountRE + tosoldofthistype;
  }
  return totalCountRE;
}
const totalCountRE = countRE(inventory);

const RE = document.getElementById("RE");
RE.textContent = "€" +totalCountRE;


function countRT(televisions) {
  let totalCountRT = 0;
  for (const television of televisions) {
    const tosoldyetofthistype = television.sold * television.price;
    totalCountRT = totalCountRT + tosoldyetofthistype;
  }
  return totalCountRT;
}
const totalCountRT = countRT(inventory);

const RT = document.getElementById("RT");
RT.textContent = "€" +totalCountRT;

//-onderstaande functie krijg ik niet gewerkt!!!!

function displayProduct (product) {
  const TVelement = document.createElement("li");
  TVelement.setAttribute("class", "product-itemTV");
  const itemTV = product.type;
  TVelement.textContent = itemTV;

  const list = document.getelementById("product");
  list.appendChild(TVelement);
}

for (let index = 0; index < inventory.length; index++) {
  const product = inventory[index];
  displayProduct(product);
}

//Opdracht5
// [ ] presenteer tv in bepaalde context op de pagina

//bonus
// [ ] maak 3 knoppen


