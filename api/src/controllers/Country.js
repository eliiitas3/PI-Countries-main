const axios = require('axios');
const {Activity, Country} = require('../db');
const {Op} = require('sequelize');

const getCountrysApi = async()=>{
    try {
        let infoApi = (await axios.get('https://restcountries.com/v3/all')).data;
        infoApi = await (
            infoApi?.map(e=>{
                Country.findOrCreate({
                    where:{
                        idL: e.cca3,
                        name:e.name.common ,
                        flag: e.flags[1] !==undefined?e.flags[1]:'not found',
                        continent: e.continents [0],
                        capital: e.capital?e.capital[0] : 'capital not found',
                        subregion: e.subregion ?e.subregion : 'subregion not found',
                        area: e.area,
                        population: e.population
                    }
                })
            })
        );console.log(infoApi);return 'countries succesfully added in db' 
    }
    catch(error){
        console.log(error)
    }
}
console.log(getCountrysApi())


const getCountryByName = async(req,res)=>{
    try{
        const {name} = req.query;
        let nombres =await Country.findAll({
            where:{
                name: {
                    [Op.iLike]: `%${name}%`
                    
                },
            },attributes: ['flag', 'name', 'idL', 'continent', 'population', 'area', 'capital']
        })

        if(name){
            nombres.length > 0 ? res.send(nombres) 
            :res.status(404).send('Error country not found') 
        }
        else{
            const dbInfo = await Country.findAll({
                attributes: ['flag', 'name', 'idL', 'continent', 'population', 'capital', 'area'], 
                include : Activity         
            })
            res.send(dbInfo); 
    }
}
    catch(error){
        console.log(error)
    }
}

const getIdCountry = async (req, res) => {
    try {
        const {id} = req.params;
        let countryId = await Country.findByPk(id.toUpperCase(), {
        attributes: ['flag','name','idL','continent','population','capital','area'],
        include : Activity
        })
        
        
        countryId ? res.send(countryId): res.send('The entered country does not exist.');
    } catch (error) {
        res.send(error);
    }
};



module.exports = {
    getCountrysApi,
    getCountryByName,
    getIdCountry
}


