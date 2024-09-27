import {  Client,  Wallet }  from "xrpl" 

const client = new Client("wss://s.altnet.rippletest.net:51233")


const main = async () => {
  console.log("lets get started...");
  await client.connect();

  // do something interesting here


  await client.disconnect();
  console.log("all done!");
};

main();