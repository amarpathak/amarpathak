const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5NTNkYzQ4LTM1MGMtNDYxNC1iYmExLTNiOWU3NDE0MDkwNCIsImtleSI6InY0eDAyOThtIiwiaWF0IjoxNjY1MDMxMjY3fQ.lB08CUwKENDUNxUIoU3HjszaHgrHFZ-OGL-x9W9ykOo";
const revise = new Revise({ auth: AUTH_TOKEN });


// const profileNFT = await revise.fetchNFT("4f20e4c8-d0df-4f01-bac5-1d5f65fe3750")


export default async function  handler(request, response) {
    const profileNFT = await revise.fetchNFT("4f20e4c8-d0df-4f01-bac5-1d5f65fe3750")
    let viewCount = profileNFT.viewCount;
    
    console.log({profileNFT});
    revise.nft(profileNFT)
    .setProperty('pageViews',viewCount)


    response.end('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPjPCgACDQEGvDvlXgAAAABJRU5ErkJggg==')
}
  