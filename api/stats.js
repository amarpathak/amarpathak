const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5NTNkYzQ4LTM1MGMtNDYxNC1iYmExLTNiOWU3NDE0MDkwNCIsImtleSI6InY0eDAyOThtIiwiaWF0IjoxNjY1MDMxMjY3fQ.lB08CUwKENDUNxUIoU3HjszaHgrHFZ-OGL-x9W9ykOo";
const revise = new Revise({ auth: AUTH_TOKEN });
const Base64BufferThumbnail = require("base64-buffer-thumbnail-no-cache");


var onepx;


Base64BufferThumbnail(
    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAD0lEQVR42mNkwAIYh7IgAAVVAAuInjI5AAAAAElFTkSuQmCC"
  ).then(res=>{
    console.log({res})
    onepx= res;
  });
export default async function  handler(request, response) {
    const profileNFT = await revise.fetchNFT("35472372-08d2-4fb2-94c9-3dbcf7f2245c")
    let [meta] = profileNFT.metaData;
    let viewCount = (parseInt(meta.views)|| 0) + 1
    console.log({viewCount},parseInt(meta.views))
    await revise.nft(profileNFT)
    .setProperty('views',viewCount)
    .save();

    response.setHeader('Content-Type','image/png')
    return response.send(onepx)
}
  