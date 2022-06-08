const {Activity, Country} = require('../db');

const postActivity= async(req,res)=>{
    const {name, difficulty, durability, season, country} = req.body;
    try{
        const newActivity = await Activity.create({
            name,
            difficulty,
            durability,
            season
        });
        for(const i of country){
            const countryAct= await Country.findOne({
                where:{
                    name: i
                }
            });
            await newActivity.addCountry(countryAct);
        };
        res.send('Activity created Successfully!');
    }
    catch(error){
        res.send(error);
    };
};

const getAllActivities= async(req,res)=>{
    try{
        const dbActInfo = await TouristActs.findAll({
            attributes: ['name'],
            include: Countries
        })
        res.send(dbActInfo);
    }catch(error){
        res.send(error);
    }
};

module.exports= {
    postActivity,
    getAllActivities,
}