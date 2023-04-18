const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }
    onSet(newValue => {
      localStorage.setItem(key, JSON.stringify(newValue))
    })
  }
  
  // this is an example state atom
  export const orderState = atom({
    key: 'orderState',
    default: {
      store: {}, // { id, name, phone, email, address }
      items: {}, // { [itemId]: { id, name, sizeTable, quantity, size } }
      contact: { deliveryOption: 'ship' }, // { name, email, phone, address, city, state, zipcode, promotions, deliveryOption }
    },
    // add these lines to your state atom, 
    // with the localStorage key you want to use
    effects_UNSTABLE: [
      localStorageEffect('order'),
    ],
  })