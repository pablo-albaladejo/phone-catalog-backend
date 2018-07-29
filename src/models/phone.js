const db = require('../../mock/db');

// Get all phones
exports.getAll = function () {
    return new Promise((resolve, reject) => {
        resolve(db.phones.map(phone => {
            //faking a different request when fetching all the items with
            //less data than when requesting to de BD the full product info
            const { id, name, color, price, currency, thumb_url } = phone;
            return ({
                id, 
                name, 
                color, 
                price, 
                currency, 
                thumb_url
            })
        }));
    });
};

// Get a particular phone model
exports.getById = function (id) {
    return new Promise((resolve, reject) => {

        const phone = db.phones.find(phone => phone.id == id);
        
        if (!phone) {
            reject();
        } else {
            //faking a different request when fetching a single item with 
            //more a different data than when requesting to de BD the preview item list
            const { id, name, description, color, price, currency, image_url } = phone;
            
            resolve({
                id, 
                name, 
                description, 
                color, 
                price, 
                currency, 
                image_url
            })
        }
    })
}