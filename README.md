 Decentralized Exchange (DEX) Server

This project implements a basic Automated Market Maker (AMM) decentralized exchange (DEX) server using Express.js. It allows users to add liquidity, buy ETH, and sell ETH against USDC (a stablecoin) in a simulated liquidity pool.

 Features

 Add Liquidity: Users can add ETH and USDC to the liquidity pool.
 Buy Asset: Purchase ETH from the liquidity pool with USDC.
 Sell Asset: Sell ETH to the liquidity pool for USDC.

 Setup Instructions

To run this server locally, follow these steps:

1. Clone the repository:

   bash
   git clone https://github.com/bsen/DEX-Automated-Market-Maker.git
   cd DEX-Automated-Market-Maker   

2. Install dependencies:

   Ensure Node.js and npm (Node Package Manager) are installed. Then, install dependencies:

   bash
   npm install
   

3. Start the server:

   bash
   npm run dev
   

   The server will start at http://localhost:8080.

 API Endpoints

 GET /

Returns status and confirmation that the DEX server is live.

 GET /addliquidity

Adds liquidity to the pool by providing eth (amount of ETH) and usdc (amount of USDC) as query parameters. Updates and returns the current liquidity pool balances.

 GET /buyasset

Buys ETH from the liquidity pool by providing q (quantity of ETH to buy) as a query parameter. Calculates the amount paid in USDC and updates balances accordingly.

 GET /sellasset

Sells ETH to the liquidity pool by providing q (quantity of ETH to sell) as a query parameter. Calculates the amount received in USDC and updates balances accordingly.

 Example Usage

Assuming the server is running locally:

 Adding Liquidity:
  
  GET http://localhost:8080/addliquidity?eth=10&usdc=5000
  

 Buying ETH:
  
  GET http://localhost:8080/buyasset?q=5
  

 Selling ETH:
  
  GET http://localhost:8080/sellasset?q=3
  

 Notes

 This server is a simplified demonstration of an AMM DEX and does not handle security considerations or real financial transactions.
 Adjustments may be needed for production use, including error handling, input validation, and security enhancements.



Feel free to customize this README with additional information, usage examples, or any specific instructions relevant to your project.
