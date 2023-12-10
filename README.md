# Back It Up - ETHIndia 2023

Crypto backup and recovery system built completely on-chain.

Restore your crypto even if you lose access to your wallet or die.

# Understanding the core problem
According to the Investopedia; as of 2019; [20% of All BTC is Lost, Unrecoverable due to people losing access to their wallet](https://www.investopedia.com/news/20-all-btc-lost-unrecoverable-study-shows/)

One article from The New York Times suggests that [Tens of billions worth of Bitcoin have been locked by people who forgot their key](https://www.nytimes.com/2021/01/13/business/tens-of-billions-worth-of-bitcoin-have-been-locked-by-people-who-forgot-their-key.html)

> Currently worth around $140 billion — appear to be in lost or otherwise stranded wallets, according to the cryptocurrency data firm Chainalysis

And stories like [these](https://dailyhodl.com/2023/11/07/banker-loses-access-to-450000000-worth-of-ethereum-eth-after-misplacing-wallet-keys-report/) are a common occurance in the crypto world.

# Our Solution
## 1. **Easy and smooth connection to your crypto wallet**
   
   We provide effortless connection to all prominents wallets such as Metamask, Coinbase Wallet and WalletConnect.
   
   ![Wallet Connect Modal](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/5345ae22-6562-4fb2-801f-cbb487c58272)
   
   This the wallet that you are trying to setup the backup against. In case of inactivity the funds will be recovered from this wallet.

## 2. **Adding your benificiary**

   **Benificiary** - When the backup phase starts the person to recieve the recovered crypto will be your Benificiary.

   We provide a smart contract that sends money to a person decided by you.
   
   ![Benificiary](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/ed4e9a7e-aa72-4b15-99c0-bd713dd056f4)

   Benificiary is the account you trust - This can be yours secondary account or your family/friends.

## 3. **Define execution terms**
   ### **Execution** - 
   Each smart contract is executed when certain conditions defined by the user are fulfilled.
   
   ### **Terms** - 
   We call these conditions terms. You can define terms based on two broad categories :-

   1. ### Based on time -
      We can either chose to auto-execute the contract after a specified period of inactivity, usually long time periods such as after 3 or 5 years of inactivity or we can choose to auto-execute the contract on a particular date(DD/MM/YYYY) defined by us.
      
      ![Auto-execute Terms](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/6ec210a3-dea8-45c0-8155-3da87cca3240)

   3. ### Based on recovery amount -
      Suppose we don't want to recover the complete amount or want the recovery to take place in small packages then we can specify the fund amount that need to be deducted with the respective contract.

      ![Funds](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/ae7cbad2-7610-411e-a383-943a089042b6)

## 4. **Add guardians to your contracts**
   To provide an extra layer of security and human control to this process we have provided the option of guardians to each contracts.
   
   ### Guardians - 
   These can be your secondary accounts or your family/friends. The guardians have the power to execute the contracts before the auto-execute process kicks in. As the owner of the wallet you can remove, add or change the guardians.

   ![Guardians](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/67385bfe-79dd-4f54-8a79-fa4f8e17e0f8)

## 5. **Create custom contracts**
   Suppose you want to create a contract limited to only some specified tokens, or distribute the backup crypto between different beneficiaries. You can do so by creating various sub-contracts catering to these needs.

   ![Custom Contracts](https://github.com/PrakharSingh0908/ETHIndia/assets/102904893/2833008b-1aff-426e-ad7e-e3822d44bd94)

## User flow
### A detailed [user flow chart can be found here](https://drive.google.com/file/d/1c-n2Is1LTYWWP45HjkSQkdZcUYsDnaBD/view?usp=sharing)

## Integrated Services 

### 1. Anon Aadhaar - Anon Aadhaar is used for user account login.

### 2. Safe - We have built our own safe recovery module and integrated both the Protocol and API kits in BackItUp. 

### 3. AirStack - AirStack API is used for fetching EOA's last active blocktime.

### 4. Chainlink Functions - Chainlink Functions are used for calling AirStack API and activating the recovery mode in our recovery contract. 

### 5. Push Protocol - Push Protocol Broadcast Notifications are used for each step of the recovery process. 

### 6. Polygon zkEVM - BackItUp has been deployed to Polygon zkEVM. 

### 7. Scroll - BackItUp has been deployed to Scroll. 

### 8. Metamask GasAPI - GasAPI has been used for gas prices of transactions. 
