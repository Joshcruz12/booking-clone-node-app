# booking-clone-node-app

EJEMPLOS DE CONSUMO DE API:

USUARIOS

POST CREATE USER

{
    "name": "Marcos ",
    "email": "marco892hjh3@gmail.com",
    "country": "Kazajistan",
    "img": "miphotodeperfil",
    "city": "Puebla",
    "phone": "7352769463",
    "password":"eq4589oiijze"
}

CREATE USER 

{
      "title": "Department",
      "price": 242,
      "maxPeople": 2,
      "description": "Esta bes es uwndqowiod",
      "roomNumbers": [{"number": 101}, {"number": 102}, {"number": 103}]      
}
GET USERS 

CREATE HOTEL 

{
  "name":"Hotel del Valle del Sol",
  "type": "hotel",
  "city": "Cuautla",
  "address": "Morales, Villanueva",
  "distance": "345km",
  "photos": "photodemy.jpg",
  "title": "Hotel de la Rosa",
  "description": "Es un hotel bonita para descansar",
  "rating": 4,
  "rooms": [],
  "cheapestPrice": 234,
  "featured": true
}

CREATE RESERVATION 

{
    "hotelId": "63438a4d7881ada0e9895711",
    "detail": "Solo teneos a un bebe",
    "userId": "634385c27881ada0e98956ee",
    "checkIn": "2021-01-01",
    "checkOut": "2021-01-02",
    "totalPrice": "100",
    "status": "pending",
    "amountPaid": 20,
    "paymentMethod": 2,
    "satusPayment": true

}
