import { Client, Wallet, xrpToDrops, Payment } from "xrpl";
import * as xrpl from "xrpl";

const client = new Client("wss://s.altnet.rippletest.net:51233");

const main = async () => {
  console.log("lets get started...");
  await client.connect();

  const issuerSeed = "sEdVCjbvinooesHUWPRSUpYEBbGoffp";
  const receiverSeed = "sEdSVRuUZSDfbvn2HGYjd3187Svxczq";

  const issuer = Wallet.fromSeed(issuerSeed);
  const receiver = Wallet.fromSeed(receiverSeed);

  console.log('wallet1', issuer);
  console.log('wallet2', receiver);

  // Crear una transacción de pago
  const memoData = {
    timestamp: new Date().toISOString(),
    temperature: 25.3,
    TDS: 300,
    PH: 7.2,
    coordinates: {
      latitude: -12.0464,
      longitude: -77.0428
    }
  };

  const tx: Payment = {
    TransactionType: "Payment",
    Account: issuer.classicAddress,
    Destination: receiver.classicAddress,
    Amount: xrpToDrops("1"), // 10 XRP
    Memos: [
      {
        Memo: {
          MemoData: xrpl.convertStringToHex(JSON.stringify(memoData)),
          MemoType: xrpl.convertStringToHex("application/json")
        }
      }
    ]
  };

  console.log('submitting the payment transaction...', tx);

  // Enviar la transacción y esperar el resultado
  const result = await client.submitAndWait(tx, { wallet: issuer });

  console.log('Transaction result:', result);

  console.log({
    'balance 1': await client.getBalances(issuer.classicAddress),
    'balance 2': await client.getBalances(receiver.classicAddress)
  });

  // desconectar
  await client.disconnect();
  console.log("all done!");
};

main();