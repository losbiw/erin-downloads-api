const OS = require('../models/OS');

async function get(){
    const allOS = await OS.find();

    return allOS || {}
}

async function increase(name, location){
    let userOS = await OS.findOne({ name });
    if(!userOS) userOS = new OS({ name });

    userOS.downloads++;

    const detailed = { ...userOS.detailed };
    detailed[location] = detailed[location] + 1 || 1;

    userOS.detailed = detailed;

    await userOS.save(err => {
        if(err) throw err
    });

    return userOS
}

module.exports = {
    increase,
    get
}