const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5NTNkYzQ4LTM1MGMtNDYxNC1iYmExLTNiOWU3NDE0MDkwNCIsImtleSI6InY0eDAyOThtIiwiaWF0IjoxNjY1MDMxMjY3fQ.lB08CUwKENDUNxUIoU3HjszaHgrHFZ-OGL-x9W9ykOo";
const revise = new Revise({ auth: AUTH_TOKEN });


// const reviseConfig = require('../config/revise.json');
const collectionId =  '31c2c13c-b5ed-4576-b7b4-ccb9eb50ab47'; //Github


const run = async () => {
    // /Create one collection
    // const collection = await revise.addCollection({ name: "Github", uri: 'github' })
    // console.log({ collection });
    

    // //Get All Cllections
    // try {
    //     const collections = await revise.fetchCollections();
    //     console.log({ collections });

    // } catch (error) {

    // }



    // const nft = await revise.addNFT({
    //     image: 'https://revise-testing.fra1.cdn.digitaloceanspaces.com/doggo/happy.png',
    //     name: 'Github Profile',
    //     tokenId: '1',
    //     description: 'Site Stats Github'
    // }, [
    //     { views: "10" },
    // ], collectionId)


    // console.log({ nft })

    const profileNFT = await revise.fetchNFT("35472372-08d2-4fb2-94c9-3dbcf7f2245c")
    console.log({profileNFT});
    let viewCount = profileNFT.viewCount;
    
    revise.nft(profileNFT)
    .setProperty('views',20)
    .save();


}
run();