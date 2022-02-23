const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const fullName = order.order.delivery.deliveryPerson;
  const client = order.name;
  const phone = order.phoneNumber;
  const rua = order.address.street;
  const num = order.address.number;
  const apart = order.address.apartment;


  console.log(`Olá ${fullName}, entrega para ${client}, Telefone: ${phone}, R ${rua}, N°: ${num}, AP: ${apart}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newPerson = order.name = 'Luiz Silva';
  const sabores = Object.keys(order.order.pizza)
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newPerson}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${drinks} é R$ ${newTotal},00.`);
}


orderModifier(order);