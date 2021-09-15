const Wilder = require('./models/Wilder')
const mongoose = require('mongoose');

module.exports = {
    resolvers : {
        Query : {
            hello: () => 'hi',
            wilders: async () => {
                const wilders = await Wilder.find()
                return wilders;
            }
        },
        Mutation : {
            addWilder: async (_, wilder) => {
                console.log(wilder);
               await new Wilder(wilder).save();
                console.log(wilder)
                return wilder
            }
        }
    }
}
