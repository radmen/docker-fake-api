const express = require('express')
const app = express()
const faker = require('faker')

app.get('/', (req, res) => {
    res.json({
        customer: {
            id:    faker.random.uuid(),
            name:  faker.name.findName(),
            phone: faker.phone.phoneNumber("(###) ###-####"),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
            }
        }
    })
})

app.listen(8080, () => console.log('Listening on port 8080'))
