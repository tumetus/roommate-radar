const netList = require('network-list');
const exec = require('child_process').exec;

const mac = "INSERT-TARGET-MAC-ADDRESS";


const scanNetwork = () => {
    const id = Date.now();
    console.log("Starting scan " + id);

    netList.scan({}, (err, arr) => {
        for (let obj of arr) {    
            if (obj.mac == mac && obj.alive) {
                // phone is roommates and it is connected
                console.log('Roommate detected!');
                exec('say Attention! Roommate is in the building!');
            }
        }

        console.log("ending scan " + id);
        scanNetwork();
    });
};

scanNetwork();