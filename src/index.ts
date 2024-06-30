import express from "express";
const app = express();
const port = 8080;
app.use(express.json());

let ETH_BALANCE = 200;
let USDC_BALANCE = 700000;

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Dex server is live" });
});

app.get("/add-liquidity", (req, res) => {
  const ETH = req.query.eth;
  const USDC = req.query.usdc;
  ETH_BALANCE = ETH_BALANCE + Number(ETH);
  USDC_BALANCE = USDC_BALANCE + Number(USDC);
  res.json({
    message: `You have added ${ETH} ETH and ${USDC} USDC in the liquidity pool, Current liquidity pool balance is ${ETH_BALANCE} ETH and ${USDC_BALANCE} USDC`,
  });
});

app.get("/buy-asset", (req, res) => {
  const purchaseOrderQuantity = req.query.q;
  const updatedETH_BALANCE: number =
    ETH_BALANCE - Number(purchaseOrderQuantity);
  const updatedUSDC_BALANCE = ETH_BALANCE * (USDC_BALANCE / updatedETH_BALANCE);
  const paidAmount = updatedUSDC_BALANCE - USDC_BALANCE;
  ETH_BALANCE = updatedETH_BALANCE;
  USDC_BALANCE = updatedUSDC_BALANCE;

  res.json({
    message: `You paid ${paidAmount} USDC for ${purchaseOrderQuantity} ETH`,
  });
});

app.get("/sell-asset", (req, res) => {
  const sellOrderQuantity = req.query.q;
  const updatedETH_BALANCE: number = ETH_BALANCE + Number(sellOrderQuantity);
  const updatedUSDC_BALANCE = ETH_BALANCE * (USDC_BALANCE / updatedETH_BALANCE);
  const receivedAmount = USDC_BALANCE - updatedUSDC_BALANCE;
  ETH_BALANCE = updatedETH_BALANCE;
  USDC_BALANCE = updatedUSDC_BALANCE;

  res.json({
    message: `You received ${receivedAmount} USDC for ${sellOrderQuantity} ETH`,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
