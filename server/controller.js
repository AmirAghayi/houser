module.exports ={
    getAll: (req,res) => {
        const db = req.app.get('db');
        db.get_houses()
        .then( response => {
            res.status(200).send(response);
        }).catch((err) => {
            console.log('getAll:', err)
        });
    },

    newHouse: (req,res) => {
        console.log(req.body);
        const {property_name, address, city, state, zipcode, imageUrl, monthlyMortgageAmount, desiredMonthlyRent } = req.body; 
        const db = req.app.get('db')

        db.create_house([property_name, address, city, state, zipcode, imageUrl, monthlyMortgageAmount, desiredMonthlyRent])
        .then( response => {
            res.status(200).send('all good');
        }).catch((err) => {
              console.log('newHouse:', err)
        })
    },

    removeHouse: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params;


        db.remove_house([id])
        .then( response => {
            res.status(200).send('all good');
        }).catch( err => {
            console.log('removeHouse:', err)
        });
    }

}