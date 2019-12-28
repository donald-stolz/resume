const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET);
const sourcePath = `${__dirname}/build`;

const options = {
    pinataMetadata: {
        name: `Don Stolz - Resume`,
    },
};

pinata
    .testAuthentication()
    .then(() => {
        // console.log("Piñata Authenticated");
        pinata
            .pinFromFS(sourcePath, options)
            .then(result => {
                console.log(result['IpfsHash']);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err);
    });
