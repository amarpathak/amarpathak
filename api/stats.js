import revise from 'revise-sdk';

let viewCount = 9;

const profileNFT = await revise.fetchNFT("4f20e4c8-d0df-4f01-bac5-1d5f65fe3750")

console.log({profileNFT});

export default async function  handler(request, response) {
   const profileNFT = await revise.fetchNFT("4f20e4c8-d0df-4f01-bac5-1d5f65fe3750")

    revise.nft(profileNFT)
    .setProperty('pageViews',viewCount)


    response.end('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPjPCgACDQEGvDvlXgAAAABJRU5ErkJggg==')
}
  