import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";

// import styles from '@/styles/Home.module.css';

// const inter = Inter({ subsets: ["latin"] });

export default function Search() {
  interface Item {
    name: string;
    updateDate: string;
  }
  const items: Item[] = [
    {
      name: "Bitcoin Trading Volume About to Pick Up",
      updateDate: "2017-08-27",
    },
    {
      name: "Ethereum Announces the Metropolis Hard Fork",
      updateDate: "2018-09-30",
    },
    { name: "Is BTC-e Making a Comeback?", updateDate: "2019-06-17" },
    { name: "South Korean Trading Driving Altcoins", updateDate: "2018-07-09" },
    {
      name: "SegWit has Activated, Why are Transaction Speeds the Same?",
      updateDate: "2017-08-29",
    },
    {
      name: "The Price of Bitcoin Just Broke Another High",
      updateDate: "2018-07-03",
    },
    {
      name: "CryptoCoin Ban for Retail Investors in Russia?",
      updateDate: "2017-08-30",
    },
    {
      name: "UAE Exchange in Talks with Ripple to Streamline Remittances",
      updateDate: "2017-08-30",
    },
    { name: "What is Ripple XRP?", updateDate: "2018-07-28" },
    {
      name: "Is Bitcoin too Mainstream for Criminals?",
      updateDate: "2017-08-31",
    },
    { name: "Chinese ICO Site Suspends Trading", updateDate: "2017-09-01" },
    { name: "No Monopolies in Bitcoin Mining?", updateDate: "2018-11-04" },
    { name: "What is Monero?", updateDate: "2018-12-25" },
    { name: "Will Regulated ICOs Benefit Neo?", updateDate: "2020-01-01" },
    { name: "Bitcoin Hits 5k and Retraces", updateDate: "2018-11-25" },
    {
      name: "Using Bitcoin Transaction Accelerators",
      updateDate: "2017-10-03",
    },
    { name: "What is Ethereum?", updateDate: "2017-09-03" },
    {
      name: "China Officially Bans ICOs: What you need to know",
      updateDate: "2019-12-15",
    },
    {
      name: "Possible South Korean Regulatory Changes",
      updateDate: "2018-11-13",
    },
    {
      name: "What is Bitcoin? A Simple Introduction",
      updateDate: "2017-09-07",
    },
    {
      name: "Are ICOs Getting a Big Break in Canada?",
      updateDate: "2017-09-06",
    },
    { name: "Ripple Expands into India", updateDate: "2017-09-06" },
    {
      name: "World Famous Nobel Laurate Labels Bitcoin a Bubble",
      updateDate: "2017-09-07",
    },
    {
      name: "Ledger Hardware Wallet Begins Monero Integration",
      updateDate: "2017-09-07",
    },
    {
      name: "A Tax Break for Small Scale Bitcoin Transactions",
      updateDate: "2017-09-07",
    },
    {
      name: "A New ICO Record with $257m Filecoin Funding",
      updateDate: "2017-09-07",
    },
    {
      name: "What is the Ethereum Casper POS Protocol?",
      updateDate: "2017-09-08",
    },
    {
      name: "Russian Hackers are Targeting your PC, for Mining",
      updateDate: "2018-09-30",
    },
    {
      name: "Bitcoin and Crypto Currency Markets Tumble",
      updateDate: "2017-09-08",
    },
    {
      name: "Russian Central Bank Wades into Crypto Currency Discussion",
      updateDate: "2017-09-09",
    },
    { name: "Blockchain Competitor R3 sues Ripple", updateDate: "2017-09-09" },
    {
      name: "Update on the Ethereum Metropolis Upgrade",
      updateDate: "2017-09-10",
    },
    {
      name: "The IOTA Hash Vulnerability that is Scaring Investors",
      updateDate: "2017-09-10",
    },
    {
      name: "The Chinese ICO Ban May Only be Temporary",
      updateDate: "2017-09-10",
    },
    {
      name: "Russian Finance Minister Sees no Point in Banning Crypto Currencies",
      updateDate: "2017-09-11",
    },
    {
      name: "Even if China Bans Exchanges, Trading Will Continue",
      updateDate: "2018-11-25",
    },
    {
      name: "A Shipping Voyage, Completely Powered by Blockchain",
      updateDate: "2017-09-11",
    },
    {
      name: "Hedge Fund Manager Regrets Earlier Dismissive Stance",
      updateDate: "2017-09-12",
    },
    {
      name: "North Korea Hacking South Korean Bitcoin Exchanges",
      updateDate: "2019-02-16",
    },
    {
      name: "Blockchain Technology and Data Protection",
      updateDate: "2017-10-06",
    },
    { name: "What is Segregated Witness?", updateDate: "2017-09-13" },
    {
      name: "No Ban After All as China will Likely not Ban Bitcoin Exchanges",
      updateDate: "2017-09-14",
    },
    { name: "BTCChina Closing Exchange by October", updateDate: "2017-09-15" },
    {
      name: "Researchers at the Bank of Finland have praise for Bitcoin as “Revolutionary”",
      updateDate: "2017-09-14",
    },
    {
      name: "10 Years on: The Northern Rock Bank Run and the Argument for Cryptocurrencies",
      updateDate: "2017-09-14",
    },
    {
      name: "How Blockchain Can Streamline Supply Chains",
      updateDate: "2017-10-06",
    },
    {
      name: "Huobi and OKCoin to Suspend Yuan Based Bitcoin Trading in Ocotber",
      updateDate: "2017-09-15",
    },
    {
      name: "Kik Messaging App Raises $75m in first ICO",
      updateDate: "2017-09-15",
    },
    {
      name: "Namibian Central Bank Says Bitcoin Purchases are illegal",
      updateDate: "2017-09-16",
    },
    {
      name: "Chinese Bitcoin Investors Flee WeChat for Telegram",
      updateDate: "2017-09-18",
    },
    {
      name: "LiteCoin vs. Bitcoin: The Difference Explained",
      updateDate: "2018-12-25",
    },
    {
      name: "Websites using Malvertising to Mine Monero",
      updateDate: "2018-09-30",
    },
    {
      name: "Bitcoin to hit $25,000 According to a Researcher on CNBC",
      updateDate: "2017-09-20",
    },
    {
      name: "Why so much Bitcoin Mining is Concentrated in China",
      updateDate: "2018-05-29",
    },
    {
      name: "Australian Parliament Introduces Double Taxation Relief Bill",
      updateDate: "2017-09-20",
    },
    {
      name: "How Blockchain is being used to combat Blood Diamonds",
      updateDate: "2017-09-20",
    },
    {
      name: "Why JP Morgan Boss’ Views on Bitcoin Don’t Add Up",
      updateDate: "2017-09-20",
    },
    {
      name: "Ethereum is Testing Hard Fork in TestNet",
      updateDate: "2017-09-20",
    },
    { name: "Celebrities Get in on the ICO Fever", updateDate: "2017-09-20" },
    {
      name: "Can Blockchain Simplify Share Ownership?",
      updateDate: "2017-10-06",
    },
    {
      name: "Buying Property and Paying Rent in Bitcoin: Signs of Mass Adoption",
      updateDate: "2019-12-12",
    },
    {
      name: "The EU is Increasing Penalties for Cryptocurrency Crimes",
      updateDate: "2017-09-21",
    },
    {
      name: "Byzantium Ethereum Upgrade verifies first ZK-Snark Proof",
      updateDate: "2017-09-21",
    },
    {
      name: "Gambling in the Age of Cryptocurrencies and Blockchain",
      updateDate: "2017-09-21",
    },
    { name: "Jamie Dimon Market Abuse Claims Filed", updateDate: "2017-09-22" },
    {
      name: "Bitcoin Traders are Moving from China to Japan",
      updateDate: "2018-11-25",
    },
    {
      name: "How Blockchain Technology Can Revolutionise the Healthcare Sector",
      updateDate: "2017-10-06",
    },
    {
      name: "Jamie Dimon Back to criticising Bitcoin and Cryptocurrency",
      updateDate: "2017-09-23",
    },
    {
      name: "Via BTC will Open up a new Platform outside of China",
      updateDate: "2017-09-23",
    },
    {
      name: "Could Canada be First to List a Bitcoin ETF?",
      updateDate: "2017-09-24",
    },
    {
      name: "Could Amazon be getting Ready to Offer Bitcoin Payments?",
      updateDate: "2017-09-24",
    },
    {
      name: "Barclays Becomes a Member of the CLS Blockchain Consortium",
      updateDate: "2017-09-25",
    },
    {
      name: "Great Week for Segwit as First on-chain Swap is Completed",
      updateDate: "2017-09-25",
    },
    { name: "Digital Identities and the Blockchain", updateDate: "2017-10-06" },
    {
      name: "NEO is Rising on Comments by the Founder on Possible Collaboration",
      updateDate: "2017-09-26",
    },
    {
      name: "How the ICO Regulatory Framework May Change in Asia",
      updateDate: "2017-09-26",
    },
    { name: "What is Blockchain Technology?", updateDate: "2017-10-05" },
    {
      name: "Draghi says that Regulating Bitcoin is not within Power of ECB",
      updateDate: "2017-09-27",
    },
    {
      name: "Are we Heading to yet Another Version of Bitcoin?",
      updateDate: "2017-09-27",
    },
    {
      name: "Bitcoin Mining in the Age of Quantum Computing",
      updateDate: "2017-09-27",
    },
    {
      name: "How Blockchain Technology Can Protect Intellectual Property",
      updateDate: "2017-10-06",
    },
    {
      name: "CBS Websites Found to Have Monero Mining Code",
      updateDate: "2017-09-28",
    },
    {
      name: "Overstock Shares Spike on ICO Exchange News",
      updateDate: "2018-11-25",
    },
    {
      name: "How Venezuelans Are Surviving Hyperinflation with Cryptocurrencies",
      updateDate: "2017-09-28",
    },
    {
      name: "Charlie Lee Comes out Publically against SegWit2x",
      updateDate: "2017-09-29",
    },
    {
      name: "Russia Deputy FM Claims Bitcoin Payments may be Banned",
      updateDate: "2017-09-29",
    },
    { name: "South Korea Announces Ban on all ICOs", updateDate: "2017-09-29" },
    {
      name: "The Power Blockchain and the Internet of Things",
      updateDate: "2017-10-06",
    },
    {
      name: "Another Firm files with SEC to list Bitcoin ETF",
      updateDate: "2017-09-30",
    },
    {
      name: "Japan Becomes a Crypto Friendly as 11 Exchanges are Endorsed",
      updateDate: "2017-09-30",
    },
    { name: "What are Ethereum Smart Contracts", updateDate: "2022-06-17" },
    {
      name: "Dubai is first Country to issue Cryptocurrency",
      updateDate: "2019-02-24",
    },
    {
      name: "How Could ZK-Starks make ZCash Truly Private",
      updateDate: "2018-09-30",
    },
    {
      name: "Blow to Bitcoin ETFs as Two Funds withdraw Applications",
      updateDate: "2017-10-02",
    },
    {
      name: "Latest Insights from Cryptocurrency Survey in South Africa",
      updateDate: "2017-10-02",
    },
    {
      name: "CFTC investigating Coinbase for Ether Flash Crash",
      updateDate: "2017-10-03",
    },
    {
      name: "How Smart Contracts Can Revolutionise the Legal Industry",
      updateDate: "2017-10-03",
    },
    {
      name: "ICO Due Diligence – What to Look For in an Investment",
      updateDate: "2017-10-03",
    },
    {
      name: "Charlie Lee Predicts Coinbase Reaction to SegWit2x",
      updateDate: "2017-10-03",
    },
    {
      name: "Are Bitcoin Fees Driving users to Altcoins",
      updateDate: "2017-10-04",
    },
    {
      name: "Positive Developments For Blockchain at Banking Conference",
      updateDate: "2017-10-04",
    },
    {
      name: "How Blockchain Technology Can Power the Sharing Economy",
      updateDate: "2017-10-06",
    },
    {
      name: "Wild Game Tracking on NEM-Blockchain in Japan",
      updateDate: "2017-10-05",
    },
    {
      name: "How the Authorities Track Bitcoin Related Crime",
      updateDate: "2018-09-30",
    },
    {
      name: "Quick check in on Proposed November Bitcoin Hard Fork",
      updateDate: "2017-10-05",
    },
    {
      name: "Malaysian Central Bank to Decide on Digital Currency Regulation",
      updateDate: "2017-10-11",
    },
    {
      name: "New Survey Finds People Still prefer Cash to Bitcion",
      updateDate: "2017-10-06",
    },
    {
      name: "How Airlines Could Utilise the Power of Blockchain Technology",
      updateDate: "2017-10-06",
    },
    {
      name: "Bitcoin Price to hit $6,358 in Early 2018 According to Model",
      updateDate: "2017-10-07",
    },
    {
      name: "Miner Support for SegWit2X Slowly approaches 95%",
      updateDate: "2017-10-07",
    },
    {
      name: "Could IMF Eventually Issue an IMF Coin?",
      updateDate: "2017-10-08",
    },
    {
      name: "Potential Wall Street Adoption of Bitcoin",
      updateDate: "2017-10-09",
    },
    {
      name: "Government is Afraid of Bitcoin says John McAfee",
      updateDate: "2017-10-09",
    },
    {
      name: "Why Craig Wright is Not Satoshi Nakamoto",
      updateDate: "2017-10-09",
    },
    {
      name: "How Smart Contracts can be Used in Prediction Markets",
      updateDate: "2017-10-10",
    },
    {
      name: "Vanuatu is First Nation to Accept Bitcoin for Citizenship",
      updateDate: "2017-10-11",
    },
    { name: "Signs of Bitcoin Mass Adoption Abound", updateDate: "2017-10-10" },
    {
      name: "Vinnik Extradition and the ongoing BTC-e Case",
      updateDate: "2017-10-11",
    },
    { name: "What is a Replay Attack", updateDate: "2017-10-11" },
    {
      name: "How Blockchain Can Help Improve Public Services",
      updateDate: "2017-10-11",
    },
    {
      name: "Get Ready for the Ethereum Byzantium Hard Fork",
      updateDate: "2017-10-12",
    },
    { name: "Why Governments Are Afraid of Bitcoin", updateDate: "2017-10-12" },
    {
      name: "F2Pool Bitcoin Mining Pool pulls Support for SegWit2X",
      updateDate: "2017-10-13",
    },
    {
      name: "The Bitcoin Rich List – A Look Into Top Bitcoin ‘Hodlers’",
      updateDate: "2017-10-13",
    },
    {
      name: "Why this AI Blockchain ICO is Getting so Much Attention",
      updateDate: "2017-10-27",
    },
    {
      name: "Ripple Claims Premature Victory over Court Case",
      updateDate: "2017-10-15",
    },
    {
      name: "Indian Government dislikes Cash, What about Bitcoin?",
      updateDate: "2017-10-16",
    },
    {
      name: "Bitcoin Fees Drop as SegWit Implementation Reaches 14.5%",
      updateDate: "2017-10-16",
    },
    {
      name: "Bitcoin vs. Tulips? Why Bubble Analogies Are Disingenuous",
      updateDate: "2017-10-16",
    },
    {
      name: "Bernanke Praises Blockchain, Discredits Bitcoin",
      updateDate: "2017-10-17",
    },
    {
      name: "Why Responsible ICO Regulations Are Welcome",
      updateDate: "2017-10-17",
    },
    { name: "What is NEO (Antshares)?", updateDate: "2017-10-17" },
    {
      name: "Smart Contracts and Decentralized Trading Exchanges",
      updateDate: "2022-06-17",
    },
    {
      name: "The Increasing Likelihood of National Cryptocurrencies",
      updateDate: "2017-10-18",
    },
    { name: "What are Blockchain Oracles?", updateDate: "2017-10-19" },
    {
      name: "China Sees Surge of Second Hand Mining Equipment for Sale",
      updateDate: "2017-10-19",
    },
    {
      name: "The Promise of Ripple: Should You Invest?",
      updateDate: "2017-10-19",
    },
    { name: "Coinfirm Aims to Make ICOs Safer", updateDate: "2017-10-20" },
    {
      name: "Coinhive Miner Proliferating Exponentially",
      updateDate: "2017-10-20",
    },
    {
      name: "An Overview of the Hyperledger Project",
      updateDate: "2017-10-20",
    },
    {
      name: "Speeding up Blockchain Transactions with Sharding",
      updateDate: "2017-10-21",
    },
    {
      name: "Quantconnect Brings Algorithmic Trading to Cryptocurrencies",
      updateDate: "2018-04-19",
    },
    {
      name: "Lower Volatility a Sign that Bitcoin is Maturing",
      updateDate: "2017-10-23",
    },
    {
      name: "Bytether Cross-Chain Fork Claims to be a New Bitcoin",
      updateDate: "2017-10-23",
    },
    {
      name: "Why the Monero IP Address Leak is Not an Exploit",
      updateDate: "2018-09-30",
    },
    {
      name: "High Frequency Trading in Crypto Markets",
      updateDate: "2018-11-25",
    },
    {
      name: "Solving Crypto Wars? Bloq CEO Jeff Garzik to Launch “Metronome”",
      updateDate: "2017-10-25",
    },
    {
      name: "Fake Poloniex Apps Harvest Credentials",
      updateDate: "2018-07-03",
    },
    {
      name: "Bitcoin Gold Is Here: Do the Pros Outweigh the Cons, or Vice Versa?",
      updateDate: "2017-10-25",
    },
    {
      name: "The SPECTRE Proposal and a Blockchain-Free Cryptocurrency",
      updateDate: "2018-09-30",
    },
    {
      name: "At the Crypto Regulation Vanguard, Russia Looks to Bring Crypto Into Use On Its Own Terms",
      updateDate: "2017-10-26",
    },
    {
      name: "Orchid, the Tokenized Internet Privacy Project",
      updateDate: "2017-10-30",
    },
    {
      name: "Zcash Status: Investment Trust Files With SEC and Other Developments",
      updateDate: "2018-09-30",
    },
    {
      name: "Ransomware, Cybercrime: A Brief Overview Of Current Security Concerns In Crypto Space",
      updateDate: "2018-09-30",
    },
    { name: "What is Dash Cryptocurrency", updateDate: "2018-12-25" },
    {
      name: "Mass Adoption as Numerous Hedge Funds Open Crypto Funds",
      updateDate: "2018-11-25",
    },
    {
      name: "Well Known Billionaire Investor Puts 30% of Portfolio in Bitcoin",
      updateDate: "2017-10-30",
    },
    {
      name: "Managing Cryptocurrency Risk in Your Portfolio: Top Tips",
      updateDate: "2017-10-30",
    },
    {
      name: "Pump-and-Dump Scams: What Crypto Traders Should Look Out For",
      updateDate: "2019-04-04",
    },
    {
      name: "S.1241 Bill Bad News For U.S. Crypto Users? Inside The Controversial Legislation",
      updateDate: "2018-04-19",
    },
    {
      name: "Pending Review, CME Announces Possible Bitcoin Futures Launch",
      updateDate: "2018-06-29",
    },
    {
      name: "Pastor Gets Sentenced To Prison In Connection To Coin.mx Laundering Case",
      updateDate: "2017-11-01",
    },
    {
      name: "Amazon Angling For The Crypto Space? E-Commerce Giant Buys Up Crypto Domain Names",
      updateDate: "2017-11-02",
    },
    {
      name: "Where do Miners Stand on the SegWit2X Fork?",
      updateDate: "2017-11-02",
    },
    {
      name: "Using Smart Contracts to Fund Bug Bounties with Hydra",
      updateDate: "2017-11-03",
    },
    {
      name: "A Check in on the Ethereum Roadmap at Devcon",
      updateDate: "2017-11-03",
    },
    {
      name: "BitConnect (BCC) – Inside The Concerns Surrounding The Cryptocoin",
      updateDate: "2017-11-28",
    },
    {
      name: "Beware the CryptoShuffler, A Trojan that Will Steal Your Coins",
      updateDate: "2018-09-30",
    },
    {
      name: "What to consider when purchasing a hardware wallet and the best wallets to buy",
      updateDate: "2018-09-30",
    },
    {
      name: "How DApps can Overcome the Risks of Centralisation",
      updateDate: "2017-11-05",
    },
    {
      name: "Adoption Increasing of Ethereum Name Service",
      updateDate: "2017-11-06",
    },
    {
      name: "The Future of Bitcoin Trading in China: Regulatory Workarounds and Rumors",
      updateDate: "2018-07-09",
    },
    {
      name: "From a $232m ICO to Lawsuits - The Tezos Story",
      updateDate: "2017-11-07",
    },
    { name: "What are Cross Chain Atomic Swaps?", updateDate: "2017-11-07" },
    {
      name: "Bitcoin Mining’s Runaway Energy Use: The Consumption Powering the #1 Crypto",
      updateDate: "2017-11-07",
    },
    {
      name: "UFC Website Gets Knocked Out with Coin Hive Miner",
      updateDate: "2017-11-08",
    },
    {
      name: "Cryptocurrency Visa Cards: A Look at the Current Options",
      updateDate: "2017-11-08",
    },
    {
      name: "Parity Flaw Lets Amateur Dev Lock Away Millions’ Worth of ETH",
      updateDate: "2017-11-08",
    },
    {
      name: "Ethereum Community Split on Response to Parity Exploit",
      updateDate: "2017-11-09",
    },
    {
      name: "Can Cryptocurrency Loans Transform Credit?",
      updateDate: "2017-11-09",
    },
    {
      name: "As Crypto Craze Grows, So Too Do Tax Implications: a Brief Tax Primer",
      updateDate: "2017-11-09",
    },
    {
      name: "Why Bitcoin Companies Need to Enable SegWit Support",
      updateDate: "2017-11-10",
    },
    {
      name: "The Crypto Community Reacts to Death of SegWit2X HardFork",
      updateDate: "2018-06-29",
    },
    {
      name: "Bitcoin Cash (BCH) Surging: A Quick 101 on Bitcoin’s Rival Bitcoin",
      updateDate: "2017-11-10",
    },
    {
      name: "Using The Bitcoin Lightning Network for Decentralised Betting",
      updateDate: "2017-11-13",
    },
    {
      name: "GPU Mining Basics: Making Cryptocurrency Mining Available to Everyone",
      updateDate: "2017-11-11",
    },
    {
      name: "North Korean Hackers Target Staff at South Korean Exchanges",
      updateDate: "2019-02-16",
    },
    {
      name: "Time for Bitcoin to Scale with the Lightning Network",
      updateDate: "2017-11-13",
    },
    {
      name: "Blockchain Technology Set to Stimulate the Marijuana Industry",
      updateDate: "2017-11-13",
    },
    {
      name: "Bitcoin Cash Pump and Dump, or Optimism on SegWit2x Failure?",
      updateDate: "2017-11-13",
    },
    {
      name: "Ripple Joins Central Bankers to Talk About the next Generation of Payments",
      updateDate: "2017-11-14",
    },
    {
      name: "Bithumb’s Servers Crash, Traders Lose Millions: Police Protecting Employees",
      updateDate: "2017-11-14",
    },
    {
      name: "Bloomberg Declares Bitcoin “Mature” With Futures Announcement",
      updateDate: "2017-11-15",
    },
    {
      name: "Bitcoin Block Size Increase a Medium Term Possibility",
      updateDate: "2017-11-15",
    },
    {
      name: "Bitcoin’s Resilience: A Brief Look Naysayers Who Gave Up on BTC to Soon",
      updateDate: "2017-11-15",
    },
    {
      name: "Mt Gox Redux: The Controversy Continues",
      updateDate: "2017-11-16",
    },
    {
      name: "Parity issues a Post Mortem on the Kill that Froze Millions",
      updateDate: "2017-11-16",
    },
    {
      name: "Big Day for Ripple as Amex Joins RippleNET",
      updateDate: "2017-11-16",
    },
    {
      name: "China’s Bitcoin Miners Prepare for Exit after Crackdown Rumours",
      updateDate: "2018-07-09",
    },
    {
      name: "BitMex Offers Bitcoin Cash Futures, Massive Sell-Off to Follow?",
      updateDate: "2018-05-29",
    },
    {
      name: "Status of CryptoCurrency use on the Darknet Markets",
      updateDate: "2018-09-30",
    },
    {
      name: "Current Status of Litecoin: An Interesting Time for LTC Holders",
      updateDate: "2017-11-17",
    },
    {
      name: "Scams Abound - The Right Way to Claim Your Bitcoin Gold",
      updateDate: "2019-03-16",
    },
    {
      name: "4 Promising Altcoins You Should Check Out",
      updateDate: "2018-09-22",
    },
    {
      name: "LedgerX Option Predicts Bitcon Price at $10,000",
      updateDate: "2017-11-19",
    },
    {
      name: "Suffering From Withdrawals - Bitfinex Credibility Under Attack",
      updateDate: "2019-02-28",
    },
    {
      name: "NEO Climbs as Concerns Raised, many Claim FUD",
      updateDate: "2018-11-30",
    },
    {
      name: "Confido Price Crashes, Creators Delete Project’s Online Presence",
      updateDate: "2018-07-03",
    },
    {
      name: "Overstock Set to Launch Blockchain’s Next Big Thing",
      updateDate: "2017-11-21",
    },
    {
      name: "The Controversial Bitcoin.com Wallet: Roger Ver’s BCH Maneuvering",
      updateDate: "2017-11-21",
    },
    {
      name: "Bitcoin Cash Sent to BTC Address? The Bitcoin Cash Bandit Will Help... For a Price",
      updateDate: "2017-11-22",
    },
    {
      name: "Kraken Struggles to Meet New Demand, CEO Apologises",
      updateDate: "2018-07-03",
    },
    {
      name: "Another Bitcoin Gold Disaster: Scammer Cons Countless Users",
      updateDate: "2017-11-22",
    },
    {
      name: "3 Ways Net Neutrality Laws Could Affect Cryptocurrency in America",
      updateDate: "2017-11-23",
    },
    {
      name: "Dashing Dash: Excitement Builds as #1 Payment Crypto Surges",
      updateDate: "2017-11-23",
    },
    {
      name: "Hacker plays tether-ball with Tether (USDT)",
      updateDate: "2019-02-28",
    },
    {
      name: "From Gold to Digital Gold, Investment Fund Discovers Crypto",
      updateDate: "2017-11-24",
    },
    {
      name: "The New Dragonmint ASIC Mining Rig: What’s All the Fuss About",
      updateDate: "2017-11-24",
    },
    {
      name: "Panama Papers’ Latest Revelation? Chinese Billionaire Lei Jun’s Connections to Bitmain",
      updateDate: "2017-11-25",
    },
    {
      name: "How Crypto can Fund Revolutions: The Case of Catalonia",
      updateDate: "2017-11-27",
    },
    {
      name: "Illegal Weapons Dealer Moves to Selling Stolen Fine Art for Bitcoin",
      updateDate: "2017-11-27",
    },
    {
      name: "Real Estate Brokers in Miami Want Bitcoin",
      updateDate: "2017-11-27",
    },
    {
      name: "North Korean Students can Take Cryptocurrency Courses",
      updateDate: "2017-11-27",
    },
    {
      name: "Bitcy.biz: The Latest Ponzi Scheme to Target Bitcoin Users",
      updateDate: "2017-11-28",
    },
    {
      name: "What happens to your Bitcoin when you die?",
      updateDate: "2019-03-16",
    },
    {
      name: "Mt. Gox ICO? Kerpeles Causes Outrage at Supposed Plan",
      updateDate: "2017-11-28",
    },
    {
      name: "Inside Bitcoin Diamond: Just the Latest of the New Bitcoins",
      updateDate: "2017-11-28",
    },
    {
      name: "IOTA Price Explodes on Announcement of Cooperation with Microsoft and Fujitsu",
      updateDate: "2017-11-29",
    },
    {
      name: "TechCrunch Founder Michael Arrington Starting XRP Hedge Fund",
      updateDate: "2017-11-29",
    },
    {
      name: "The IRS Strikes: Coinbase Under Siege For Customer Info",
      updateDate: "2018-04-04",
    },
    {
      name: "Nasdaq Joins the Bitcoin Train, Introduces Futures",
      updateDate: "2018-06-29",
    },
    {
      name: "New Bitfinex Flash Crashes Prove Devastating for Traders: What Happened?",
      updateDate: "2018-05-22",
    },
    {
      name: "More Universities Offering Blockchain Courses",
      updateDate: "2017-12-15",
    },
    {
      name: "Bitfinex and Tether Respond to Allegations",
      updateDate: "2019-02-28",
    },
    {
      name: "Bitcoin Cash vs. Bcash: The War of Names Continues in the Crypto Community",
      updateDate: "2017-12-15",
    },
    {
      name: "Ripple (XRP) Wallets: Walking You Through Your Options",
      updateDate: "2017-12-15",
    },
    {
      name: "An Overview of How Bitcoin Futures will Work at the CME",
      updateDate: "2018-06-29",
    },
    {
      name: "Warning From Federal Reserve on Possible Measures",
      updateDate: "2017-12-15",
    },
    {
      name: "Shocking Report Claims Bitocin is Dangerous and Undermines Central Banks",
      updateDate: "2017-12-15",
    },
    {
      name: "Venezuela to Create State Cryptocurrency - Will It Work?",
      updateDate: "2017-12-15",
    },
    {
      name: "U.K. Regulating Crypto? Treasury Ministry Looking Closer Than Ever",
      updateDate: "2017-12-15",
    },
    {
      name: "Leapfrogging CME, CBOE Announces Bitcoin Futures Release Date",
      updateDate: "2019-06-02",
    },
    {
      name: "Privacy Coin Monero Surges After Teaming Up With A-List Musicians",
      updateDate: "2017-12-15",
    },
    {
      name: "Ethereum Price and Congestion Woes: Putting It Into Perspective",
      updateDate: "2017-12-15",
    },
    {
      name: "Salt Lending Token Prices Explode as Platform Release Nears",
      updateDate: "2017-12-15",
    },
    {
      name: "Customers Complain as Major Exchange Bittrex Appears Unresponsive",
      updateDate: "2018-11-30",
    },
    {
      name: "South Korea Bitcoin Trading Ban: Just Rumors, Or Something More?",
      updateDate: "2017-12-15",
    },
    {
      name: "NiceHash Devastated in Hack Worth Roughly ~$70 Million in Bitcoin",
      updateDate: "2019-02-16",
    },
    {
      name: "Andreas Antonopoulos on the Impact of CME Futures",
      updateDate: "2017-12-10",
    },
    {
      name: "Litecoin to the Moon: The Chicken Rises",
      updateDate: "2017-12-15",
    },
    {
      name: "Excitement Stirs As First Bitcoin Futures Go Live In Chicago",
      updateDate: "2017-12-15",
    },
    {
      name: "Golem - The Ethereum Powered Supercomputer for Everyone",
      updateDate: "2017-12-15",
    },
    {
      name: "Great Place for News for Cryptocurrency Traders? Social Media Sites",
      updateDate: "2017-12-15",
    },
    {
      name: "Ripple (XRP) Rockets Upwards After Series of Bullish Developments",
      updateDate: "2018-11-30",
    },
    { name: "Could Ebay be Considering Crypto?", updateDate: "2017-12-15" },
    {
      name: "Parity to Ethereum Foundation: One Hard Fork, Please",
      updateDate: "2017-12-15",
    },
    {
      name: "Bitcoin ETFs: The Next Traditional Bitcoin-Based Investment?",
      updateDate: "2017-12-15",
    },
    {
      name: "Robbed at Gunpoint for $1.8m in Ethereum",
      updateDate: "2017-12-15",
    },
    {
      name: "Kik Announces Move From Ethereum to Alternate Chain Citing Scalability Issues",
      updateDate: "2017-12-15",
    },
    {
      name: "Cryptocurrency Cloud Mining: Worth the (Lack of) Trouble?",
      updateDate: "2017-12-15",
    },
    {
      name: "Want to Learn Solidity? There is a dApp for that",
      updateDate: "2017-12-15",
    },
    {
      name: "Cardano (ADA): Inside the Buzz Around the Newest Top 10 Crypto",
      updateDate: "2018-04-20",
    },
    {
      name: "Prosecutors Rush to Sell $8.5m of Seized Bitcoin",
      updateDate: "2017-12-17",
    },
    {
      name: "How Bitcoin Whales Can Manipulate the Price",
      updateDate: "2018-08-04",
    },
    {
      name: "Beware: North Korean Hackers Phishing Crypto Keys",
      updateDate: "2019-02-16",
    },
    {
      name: "Japanese Tel-Co Giant to Offer Bitcoin Salaries Next Year",
      updateDate: "2017-12-18",
    },
    {
      name: "Verge (XVG): A Privacy Coin Worth Considering, Or Just Another Crypto?",
      updateDate: "2018-10-16",
    },
    {
      name: "Why Bitcoin Prices trade for a premium in Africa",
      updateDate: "2017-12-18",
    },
    {
      name: "Bitcoin Tumbling: How ZeroLink Will Hide Your Coins",
      updateDate: "2018-09-30",
    },
    {
      name: "French Finance Minister Wants Bitcoin Legislation Discussed At G20 Summit",
      updateDate: "2017-12-19",
    },
    {
      name: "Panic as S. Korean Crypto Exchange Hacked, Files for Bankrupty",
      updateDate: "2019-02-16",
    },
    {
      name: "EU Bitcoin user Database: Big Brother is Watching",
      updateDate: "2018-09-30",
    },
    {
      name: "Ronnie Moas Predicts Bitcoin Will Hit $400,000 Soon",
      updateDate: "2017-12-20",
    },
    {
      name: "Coinbase Launches BCH, Accusations of Insider Trading Abound",
      updateDate: "2017-12-20",
    },
    {
      name: "Litecoin Founder Sells All his LTC to Avoid Conflict of Interest",
      updateDate: "2017-12-20",
    },
    { name: "Siacoin: Everything You Need to Know", updateDate: "2017-12-21" },
    {
      name: "Lisk (LSK): Exploring the Highly Accessible Blockchain for Developers",
      updateDate: "2017-12-21",
    },
    {
      name: "Bitcoin Philanthropy: Pineapple Fund to Give $86m to Charity",
      updateDate: "2017-12-22",
    },
    {
      name: "Goldman to Launch Bitcoin Trading Desk",
      updateDate: "2017-12-22",
    },
    {
      name: "Funds Stolen as EtherDelta Suffers DNS Hack",
      updateDate: "2017-12-22",
    },
    {
      name: "Cryptocurrency Markets Bleed Out With End of Year Sell-Off",
      updateDate: "2017-12-22",
    },
    {
      name: "Beat the Backlog: Bitcoin Transaction Hacks for Speed",
      updateDate: "2017-12-22",
    },
    {
      name: "Vertcoin: Is the Buzz Around the Cryptocoin Legitimate?",
      updateDate: "2017-12-23",
    },
    {
      name: "Nigerian Start-up Uses Tokens to Take on Remittance Giants",
      updateDate: "2017-12-24",
    },
    {
      name: "Could a Trading Bot be Behind the Coinbase Pricing Discrepancies?",
      updateDate: "2018-05-22",
    },
    {
      name: "The Waves Platform: A Decentralised Asset Exchange",
      updateDate: "2017-12-25",
    },
    {
      name: "Crypto Mining Bot is Taking over Facebook Messenger",
      updateDate: "2017-12-25",
    },
    {
      name: "Cold Storage: the Ultimate Solution for Crypto Storage Security",
      updateDate: "2017-12-25",
    },
    {
      name: "Bad News for Crypto Investors in New U.S. Tax Bill",
      updateDate: "2017-12-26",
    },
    {
      name: "Uncomfirmed Transactions: What They Are and How to Overcome Them",
      updateDate: "2019-03-16",
    },
    {
      name: "John McAfee: Bringing Attention, or Pumping Altcoins Irresponsibly?",
      updateDate: "2017-12-26",
    },
    {
      name: "Fallout from the EtherDelta Hack Continues",
      updateDate: "2017-12-27",
    },
    {
      name: "McAfee Loves Reddcoin, But Is It Worth A Second Look?",
      updateDate: "2018-04-18",
    },
    {
      name: "Stellar Lumens (XLM): a Project to Keep an Eye on in 2018",
      updateDate: "2018-12-25",
    },
    {
      name: "Bitcoin Cash Adoption Increases on DarkNet as Pirate Bay takes Swipe",
      updateDate: "2017-12-27",
    },
    {
      name: "South Koreans Are Going Cryptocurrency Crazy",
      updateDate: "2017-12-28",
    },
    {
      name: "Memes, Insults, and Crude Humor - Will They Doom Cryptocurrency?",
      updateDate: "2017-12-28",
    },
    {
      name: "Tron (TRX): the Cryptocurrency That Can Heal the Internet?",
      updateDate: "2018-12-25",
    },
    {
      name: "Storing Monero (XMR): Looking at Options for Long-Term Hodlers",
      updateDate: "2017-12-30",
    },
    {
      name: "Relive the Wild West with Bounty0x, an Ethereum-Powered Bounty and Reward System",
      updateDate: "2019-03-16",
    },
    {
      name: "Could Estonia be The First Country to Issue Cryptocurrency",
      updateDate: "2017-12-30",
    },
    {
      name: "Trial Underway in Singapore for Bitcoin Trade Error",
      updateDate: "2017-12-30",
    },
    {
      name: "Bitfinex to Suspend Trading in Chain Splits Tokens",
      updateDate: "2017-12-31",
    },
    {
      name: "Emerging Trends: Five Currencies to Watch in 2018",
      updateDate: "2018-01-01",
    },
    {
      name: "The Verge (XVG) Community Is Freaking Out: What Gives?",
      updateDate: "2018-01-01",
    },
    {
      name: "A New Alternative for Traders on LocalBitcoinCash.org",
      updateDate: "2018-01-01",
    },
    {
      name: "What to Expect from Bitcoin Futures in 2018",
      updateDate: "2019-06-02",
    },
    {
      name: "Using Bitcoin to Buy Products on Amazon with Purse.io",
      updateDate: "2018-06-15",
    },
    {
      name: "Zclassic to Relaunch as Bitcoin Private, Prices Explode almost 100-fold",
      updateDate: "2018-09-30",
    },
    {
      name: "Ripple (XRP): Exploding Up to $3, But What Gives?",
      updateDate: "2018-01-03",
    },
    {
      name: "ECB Claims that Bitcoin Futures are Threat to the Banking System",
      updateDate: "2018-01-04",
    },
    {
      name: "Ethereum Foundation to Promote Scalability Fixes with Financial Incentives",
      updateDate: "2018-01-04",
    },
    {
      name: "Ethereum Classic (ETC): A Darkhorse Hold for 2018?",
      updateDate: "2018-06-14",
    },
    {
      name: "Trader WhalePanda Threatens to Sue Coinbase over Missing Funds",
      updateDate: "2018-01-04",
    },
    {
      name: "What is Dogecoin - The Friendliest Cryptocurrency In The World?",
      updateDate: "2018-01-05",
    },
    {
      name: "Traditional Institutions Attacking Cryptocurrency Use to Start New Year",
      updateDate: "2018-01-05",
    },
    {
      name: "The Intel CPU Vulnerability that has the Crypto Community Worried",
      updateDate: "2018-01-05",
    },
    {
      name: "Are Fraudulent Ledger Hardware Wallets Being Sold on Ebay?",
      updateDate: "2018-01-06",
    },
    {
      name: "Electroneum: An Overview of the Cryptocurrency Developed for Mobile",
      updateDate: "2018-11-30",
    },
    {
      name: "Kin Token Prices Reach for Dizzying Heights in Major Bull Run",
      updateDate: "2018-01-07",
    },
    {
      name: "How Brazil is Using the Ethereum Blockchain for Popular Petitions",
      updateDate: "2018-01-07",
    },
    {
      name: "Virtual Currency Girls in Japan Promoting Cryptocurrencies",
      updateDate: "2018-04-20",
    },
    {
      name: "The Language of Cryptocurrency - Decoding the Dialects of Crypto Fans",
      updateDate: "2018-01-08",
    },
    {
      name: "Oyster Pearl (PRL): An Interesting Project, Or A Short-Term Play?",
      updateDate: "2018-10-29",
    },
    {
      name: "China to Shutdown Bitcoin Mining - Rumours Seem True",
      updateDate: "2018-01-08",
    },
    {
      name: "Bitfury Group Unveils Technology to Track Bitcoin Transactions",
      updateDate: "2018-01-09",
    },
    {
      name: "MyEtherWallet Not Compromised, But EthereumBLUE Alleges So",
      updateDate: "2018-01-09",
    },
    {
      name: "Two Potential BTC ETF Proposals Withdrawn: Blow for Bitcoin?",
      updateDate: "2018-01-09",
    },
    {
      name: "What Happened to over 213,519 BTC Seized by Bulgarian Authorities?",
      updateDate: "2018-01-09",
    },
    {
      name: "Ether Competitor Dragonchain Offers Unique Hybrid Blockchain Tech",
      updateDate: "2018-01-10",
    },
    {
      name: "Particl (PART): The New Privacy Coin on the Block. Worth It?",
      updateDate: "2018-10-23",
    },
    {
      name: "Australian Tax Taskforce Will Monitor Crypto Traders",
      updateDate: "2018-01-10",
    },
    {
      name: "Mike Novogratz to Launch Crypto Merchant Bank in $400m Investment",
      updateDate: "2018-01-10",
    },
    {
      name: "Telegram Token Incoming? Leaked White Paper Suggests Major Developments This Year",
      updateDate: "2018-01-11",
    },
    {
      name: "Power Ledger (POWR): Decentralised P2P Energy Trading",
      updateDate: "2020-02-27",
    },
    {
      name: "Ripple Partners with MoneyGram to use XRP: What You Need to Know",
      updateDate: "2018-01-11",
    },
    {
      name: "Ebay Ledger Thief Has a Change of Heart - Seed Words Still Missing",
      updateDate: "2018-01-11",
    },
    {
      name: "S. Korea Threatens Ban on Exchanges, Asset Prices Tank in Response",
      updateDate: "2018-01-12",
    },
    {
      name: "Maintenance for Hours: What is Going on at Kraken?",
      updateDate: "2018-04-19",
    },
    {
      name: "Is Coinbase Spamming the Bitcoin Memepool? The Case for SegWit",
      updateDate: "2018-01-12",
    },
    {
      name: "Bearish on BTC? The Definitive Guide to Shorting Bitcoin",
      updateDate: "2018-12-02",
    },
    {
      name: "The Kraken Carcrash Continues: Platform Rolled out with More Errors",
      updateDate: "2018-04-19",
    },
    {
      name: "An Overview of Enigma: The Secret Contract Cryptocurrency",
      updateDate: "2018-11-30",
    },
    {
      name: "2018 to Have More Hard Forks than Ever Before - What to Expect",
      updateDate: "2018-09-30",
    },
    {
      name: "Review of the APEX Coin: Everything you Need to Know",
      updateDate: "2018-05-24",
    },
    {
      name: "Cryptopia Review: Complete Beginners Guide",
      updateDate: "2019-05-11",
    },
    {
      name: "Looking for the Next Big Bitcoin Mining Hub? Try Canada",
      updateDate: "2018-01-15",
    },
    {
      name: "Man Wants His Own Cryptocurrency for $5 on Upwork - ICO Laziness",
      updateDate: "2018-01-15",
    },
    {
      name: "Hackers Manage to Hijack Servers of BlackWallet - Steal $418,000",
      updateDate: "2018-11-30",
    },
    {
      name: "Review of Bitpays.biz: Ponzi Scheme Returns over 350% Per Hour",
      updateDate: "2018-01-17",
    },
    {
      name: "Inside the Drama Around the Recently Booming Tron (TRX)",
      updateDate: "2018-01-16",
    },
    {
      name: "Could Monero Ever Challenge Bitcoin? The Case for Privacy Coins",
      updateDate: "2019-05-15",
    },
    {
      name: "Colossal Ponzi Scheme BitConnect Has Officially Crashed And Burned",
      updateDate: "2018-01-17",
    },
    {
      name: "Soldiers in South Korea Restricted from Purchasing Bitcoin",
      updateDate: "2018-01-17",
    },
    {
      name: "Could Alibaba be Launching a Cryptocurrency Mining Giant?",
      updateDate: "2018-01-17",
    },
    {
      name: "VeChain: A Blockchain Solution for Counterfeits and Fakes?",
      updateDate: "2018-12-25",
    },
    {
      name: "Bitmain Releases Their New AntMiner A3: Worth the Hype?",
      updateDate: "2018-01-18",
    },
    {
      name: "Antminer Scam Advertising on Facebook: What to Watch out For",
      updateDate: "2018-01-18",
    },
    {
      name: "Ledger to Ledger Trading? New Integration by Radar Relay",
      updateDate: "2018-01-18",
    },
    {
      name: "Kucoin Exchange Review: Complete Beginners Guide",
      updateDate: "2022-04-21",
    },
    {
      name: "Softfork for Siacoin? Obelisk Threaten Bitmain over Antminer A3",
      updateDate: "2018-01-19",
    },
    {
      name: "France Moving in On Cryptocurrency with Regulations",
      updateDate: "2018-01-20",
    },
    {
      name: "The Lightning Network Could Change Everything About Bitcoin",
      updateDate: "2018-01-20",
    },
    {
      name: "Canadian Government uses Ethereum Blockchain for Transparency",
      updateDate: "2018-10-24",
    },
    {
      name: "Couple are Robbed of $100,000 in Bitcoin While in Thailand",
      updateDate: "2018-01-21",
    },
    {
      name: "Using an in-browser Ethereum Wallet? Other Websites Can Identify It",
      updateDate: "2018-09-30",
    },
    {
      name: "Rentberry: The Ethereum Solution To Apartment Rentals And More",
      updateDate: "2018-01-22",
    },
    { name: "Luno Review: Complete Beginners Guide", updateDate: "2019-03-13" },
    {
      name: "The Tezos Saga Continues: More Infighting Dogs Project",
      updateDate: "2018-02-09",
    },
    {
      name: "IOTA Under Fire For Reliance on User Seed Generation",
      updateDate: "2018-01-23",
    },
    {
      name: "The EtherZero Ethereum Fork - All Your Tokens Belong to Us",
      updateDate: "2018-01-30",
    },
    {
      name: "CakeWallet iOS Monero Wallet Gets Challenged by Community",
      updateDate: "2018-01-23",
    },
    {
      name: "Benebit - The Biggest ICO Exit Scam In History Nets Up to $4 Million",
      updateDate: "2018-01-24",
    },
    {
      name: "CryptoCelebrities: the Newest Hyped Ethereum-Based Game",
      updateDate: "2018-01-24",
    },
    {
      name: "Beluga Pay To Launch Cryptocurrency Payment Network, ICO Soon",
      updateDate: "2018-01-25",
    },
    {
      name: "Earn Interest on Cryptocurrency? Celsius Network Plans To Make it Happen",
      updateDate: "2022-04-17",
    },
    {
      name: "The Tether and Bitfinex Drama Continues: Auditor Pulls Out?",
      updateDate: "2019-02-28",
    },
    {
      name: "Robinhood Announces Fee-Less Crypto Trading, Buzz Grows",
      updateDate: "2019-06-02",
    },
    {
      name: "China Considering Unbanning ICOs: Fact or Fiction?",
      updateDate: "2018-01-26",
    },
    {
      name: "The McAfee Effect: Foul Play Involved?",
      updateDate: "2018-09-30",
    },
    {
      name: "Beware of the Bitcoin Murder Scam. FBI Reports a Surge",
      updateDate: "2018-01-27",
    },
    {
      name: "Could Monero and Litecoin Eventually See an On-Chain Atomic Swap?",
      updateDate: "2018-01-27",
    },
    {
      name: "Metronome: Innovative Cryptocurrency, Or Questionable Founders?",
      updateDate: "2018-01-28",
    },
    {
      name: "PonziCoin: the Latest Ridiculous Phenomenon in the Cryptoverse",
      updateDate: "2018-06-15",
    },
    {
      name: "Experty ICO is Hacked as Phishing Attack Steals $150,000",
      updateDate: "2018-01-29",
    },
    {
      name: "Dentacoin (DCN): A Token for the Dental Industry. Yay or Nay?",
      updateDate: "2018-05-02",
    },
    {
      name: "Bytecoin On The Rise: Our Exclusive Interview With Jenny Goldberg",
      updateDate: "2018-09-30",
    },
    {
      name: "Bitgrail Withdrawal Saga: Accusations Fly as Exchange Institutes KYC",
      updateDate: "2018-09-22",
    },
    {
      name: "PIVX: Everything You Need to Know about the New Privacy Coin",
      updateDate: "2018-06-13",
    },
    {
      name: "The Bitcoin Interest (BCI) Hard-Fork: Bring You Up to Speed",
      updateDate: "2018-01-31",
    },
    {
      name: "South Korean Finance Minister Confirms no Crypto Ban",
      updateDate: "2018-01-31",
    },
    {
      name: "Is Qtum a Viable Competitor, Or Will It Get Lost in a Sea Of Ethereum Clones?",
      updateDate: "2018-08-11",
    },
    {
      name: "RaiBlocks (XRB) Rebrands, BitGrail Drama Continues Frustrating",
      updateDate: "2018-02-01",
    },
    {
      name: "Major Exchange Bittrex Considers Allowing US Dollar Deposits",
      updateDate: "2019-02-28",
    },
    {
      name: "Complete Bethereum ICO Review: Blockchain Powered Social Betting",
      updateDate: "2018-12-06",
    },
    {
      name: "Could Your Ledger Nano be Susceptible to a Man in the Middle Attack?",
      updateDate: "2018-02-08",
    },
    {
      name: "Complete Review of Cex.io - The Right Exchange For You?",
      updateDate: "2018-02-05",
    },
    {
      name: "IQ Option Review: Complete Beginners Guide",
      updateDate: "2021-02-21",
    },
    {
      name: "Litecoin to Get Own Payment Processor This February - Litepay",
      updateDate: "2018-02-07",
    },
    {
      name: "Plus500 Review: Complete Beginners Guide",
      updateDate: "2019-06-11",
    },
    {
      name: "Large Chinese Payment Network Partners with Ripple: More to Come?",
      updateDate: "2018-02-08",
    },
    {
      name: "Tron Announces Wallet On Social Media App - The Boost TRX Needs?",
      updateDate: "2018-02-08",
    },
    {
      name: "On The Dark Web, Litecoin is Gaining Ground on Bitcoin for Payments",
      updateDate: "2018-02-09",
    },
    {
      name: "DeepOnion: Review of the Latest Privacy Coin Integrated with Tor",
      updateDate: "2018-09-30",
    },
    {
      name: "Get Ready for Litecoin Cash the Upcoming Litecoin Fork",
      updateDate: "2018-02-13",
    },
    {
      name: "E-Coin: Pump and Dump Scam Coin or Misunderstood Gem?",
      updateDate: "2018-02-10",
    },
    {
      name: "Spankchain Review: How This Coin Will Change Adult Entertainment",
      updateDate: "2018-05-10",
    },
    {
      name: "eBay Signs with BitPay Partner Adyen - Bitcoin Payments Coming Soon?",
      updateDate: "2018-02-11",
    },
    {
      name: "CryptoDogs: The Next Blockchain Pet Project Dying for Your Attention",
      updateDate: "2018-02-11",
    },
    {
      name: "MasterNodes: What you Need to Know to Make Passive Income",
      updateDate: "2018-06-11",
    },
    {
      name: "IOTA Growing Pains: Fake Wallets and Angry Community",
      updateDate: "2018-02-14",
    },
    {
      name: "Bitcoin Private Fork Facing ZClassic Withdrawal Issues at Exchanges",
      updateDate: "2018-11-30",
    },
    {
      name: "Coinvest ICO Review: Everything You Need to Know",
      updateDate: "2018-02-15",
    },
    {
      name: "Could Monero Forks and Airdrops Compromise User Privacy?",
      updateDate: "2018-02-14",
    },
    {
      name: "Printing on Tether Moves to ETH in Anticipation of EthFinex",
      updateDate: "2019-02-28",
    },
    {
      name: "Decred Explained: Everything you Need to Know about the Project",
      updateDate: "2018-06-23",
    },
    {
      name: "Schnorr Signatures: Making Bitcoin More Efficient one Signature at a Time",
      updateDate: "2018-02-17",
    },
    {
      name: "Twitter Scams and Photoshop: The Creative Ways of Online Fraudsters",
      updateDate: "2018-02-17",
    },
    {
      name: "Stop-Loss Hunting: How Crypto Whales are Making a Killing",
      updateDate: "2018-08-03",
    },
    {
      name: "Litecoin Cash Starts Trading on Volatile Yobit Listing",
      updateDate: "2018-06-29",
    },
    {
      name: "The Massive Undercover Mining Operation you Have Never Heard About",
      updateDate: "2018-02-24",
    },
    {
      name: "EOS: What you Need to Know About the Next Generation Blockchain",
      updateDate: "2018-12-25",
    },
    {
      name: "STACK (STK) Review: Enabling Cryptocurrency to Fiat Payments",
      updateDate: "2018-05-02",
    },
    {
      name: "Are Law Enforcement Agencies Taking Advantage of Crypto Seizures?",
      updateDate: "2018-02-24",
    },
    {
      name: "BitGrail and Nano Saga: A Twisted Tale of Hacks, Threats, and a Lawsuit",
      updateDate: "2018-02-24",
    },
    {
      name: "Tezos Board Reorganized as Controversial Members Replaced",
      updateDate: "2018-02-24",
    },
    {
      name: "Cryptocurrency Dark Pool Trading: Mass Liquidity Hidden from Sight",
      updateDate: "2018-12-18",
    },
    {
      name: "Liberland - Your Bitcoin Friendly Libertarian Micronation",
      updateDate: "2018-02-24",
    },
    {
      name: "How Correlated is Crypto to Forex? A New Study May Surprise You",
      updateDate: "2018-02-24",
    },
    {
      name: "Google Search Data Shows Cryptocurrency Interest Falling",
      updateDate: "2018-02-25",
    },
    {
      name: "Co-owner of Established Bitcoin Websites Wants a Hard Fork",
      updateDate: "2018-02-26",
    },
    {
      name: "Nano is Rallying on Positive Sentiment: What You Need to Know",
      updateDate: "2018-02-27",
    },
    {
      name: "Zclassic Continues to Crash as Bitcoin Private Fork Looms",
      updateDate: "2018-11-30",
    },
    {
      name: "BitcoinWhite Scam: Latest Example of a Fraudulent Bitcoin Hardfork",
      updateDate: "2018-02-28",
    },
    {
      name: "Busted! Waltonchain Caught In a Twitter Giveaway Scandal",
      updateDate: "2018-03-01",
    },
    {
      name: "More Ripple Partnerships as FLEETCOR and Indusland Bank Sign Up",
      updateDate: "2018-03-01",
    },
    {
      name: "Scammers Continue To Target Telegram ICO, Potentially Scoring Millions",
      updateDate: "2018-03-02",
    },
    {
      name: "Syscoin Review: The First Fully Decentralised Marketplace",
      updateDate: "2018-09-30",
    },
    {
      name: "What is ByteBall? The Cryptocurrency With No Blockchain",
      updateDate: "2019-02-26",
    },
    {
      name: "The Latest Crypto Ransom Threat, Coming to a Server Near You",
      updateDate: "2018-03-04",
    },
    {
      name: "NeoGas - What You need to Know to Earn Returns on NEO",
      updateDate: "2018-03-05",
    },
    {
      name: "Ethos Review: Project to Launch New Mobile Wallet - Is it Worth a Look?",
      updateDate: "2019-03-16",
    },
    {
      name: "BTC Global: Another Cautionary Tale of a Typical Ponzi Scheme",
      updateDate: "2018-03-06",
    },
    {
      name: "Worldwide Asset Exchange: Comprehensive Review of WAX",
      updateDate: "2018-03-08",
    },
    {
      name: "Introduction to 0x: A Decentralized Exchange Platform for ERC20 Tokens",
      updateDate: "2018-09-22",
    },
    {
      name: "Red Number Day: The Shadow of Mt Gox Strikes, Bitcoin Price Tanks",
      updateDate: "2018-03-09",
    },
    {
      name: "Comprehensive Guide to PoS Mining: What you need to know",
      updateDate: "2018-06-21",
    },
    {
      name: "Shaping up ShapeShift – Our Review of the Instant Crypto Exchange",
      updateDate: "2019-03-16",
    },
    {
      name: "Proof of Capacity Explained: The Eco-Friendly Mining Algorithm",
      updateDate: "2018-06-15",
    },
    {
      name: "Tezos Infighting Moves from Board Room to Internet Forums",
      updateDate: "2018-03-14",
    },
    {
      name: "The Current State of GPU Mining and What to Expect",
      updateDate: "2018-03-15",
    },
    {
      name: "Substratum Review: The Cryptocurrency for a Decentralized Internet",
      updateDate: "2018-09-22",
    },
    {
      name: "Belacoin Review: Earning Crypto by Sharing Pictures on Belacam",
      updateDate: "2018-03-17",
    },
    {
      name: "Everything You Need to Know About CryptoCurrency Airdrops",
      updateDate: "2018-03-17",
    },
    {
      name: "Beginners Guide to the Vyper Smart Contract Language",
      updateDate: "2018-06-27",
    },
    {
      name: "Hicky ICO Review: Decentralized Online Dating on the Blockchain",
      updateDate: "2018-03-21",
    },
    {
      name: "Five Top Tips to Avoid Falling Victim to ICO Exit Scams",
      updateDate: "2018-03-21",
    },
    {
      name: "Complete Guide to Using the Steemit Platform to Earn Steem",
      updateDate: "2018-12-23",
    },
    {
      name: "Poloniex Exchange Review: Complete Beginners Guide",
      updateDate: "2021-09-23",
    },
    {
      name: "What Are the Prospects of a Gold-backed Cryptocurrency?",
      updateDate: "2019-02-28",
    },
    {
      name: "Everything You Need to Know About Directed Acyclic Graphs (DAGS)",
      updateDate: "2018-12-02",
    },
    {
      name: "Overview of Trinity Protocol, The Off-chain Scaling Solution for NEO",
      updateDate: "2018-03-30",
    },
    {
      name: "Augur Review: Decentralized Prediction Markets on a Blockchain",
      updateDate: "2019-10-10",
    },
    {
      name: "Algebraix.io Launches Public Token Sale Using The CoinList Platform",
      updateDate: "2018-06-01",
    },
    {
      name: "Proof of Burn Explained – An Alternative Crypto Consensus Algorithm",
      updateDate: "2018-06-13",
    },
    {
      name: "Blue Whale Foundation Review: Our Interview with the First ICON ICO",
      updateDate: "2018-05-02",
    },
    {
      name: "Kyber Network Review: The On-Chain Liquidity Protocol",
      updateDate: "2020-04-23",
    },
    {
      name: "IOStoken (IOST) Review: Blockchain for The Internet of Services",
      updateDate: "2018-09-22",
    },
    {
      name: "Guide to PonziScheme.io - The Quickest Way to Lose Your Money",
      updateDate: "2018-04-03",
    },
    {
      name: "STeX - The Killer of Traditional Exchanges",
      updateDate: "2018-06-01",
    },
    {
      name: "Buying Bitcoin Anonymously - The Complete Beginners Guide",
      updateDate: "2018-09-30",
    },
    {
      name: "DAOStack: Everything you Need to Know About Blockchain Governance",
      updateDate: "2018-04-27",
    },
    {
      name: "Have $105,000 To Spend on a Tweet? McAfee Would Like a Word",
      updateDate: "2018-04-03",
    },
    {
      name: "Could Hashgraph Technology make Blockchains Obsolete?",
      updateDate: "2018-06-21",
    },
    {
      name: "Verge (XVG) Suffers a Severe Miner Network Attack",
      updateDate: "2018-05-24",
    },
    {
      name: "Beginners Guide to Ethorse: Betting on Cryptocurrency Prices",
      updateDate: "2018-04-05",
    },
    {
      name: "Proof of Activity Explained: A Hybrid Consensus Algorithm",
      updateDate: "2018-06-12",
    },
    {
      name: "Buying Monero with LocalMonero - A Step by Step Guide",
      updateDate: "2021-09-23",
    },
    {
      name: "Loom Network Review: Blockchain Platform for Gaming dApps",
      updateDate: "2019-08-20",
    },
    {
      name: "Monero Hard Forks Successfully: Four New Projects The Result",
      updateDate: "2018-06-29",
    },
    {
      name: "Could Floyd Mayweather and DJ Khaled Be at Risk over Centra?",
      updateDate: "2018-04-09",
    },
    {
      name: "Start Mining Monero at Home with These Easy Steps",
      updateDate: "2018-12-25",
    },
    {
      name: "Complete Overview of Skycoin: The Greatest Threat to ISPs",
      updateDate: "2018-09-22",
    },
    {
      name: "Review of Waltonchain (WTC): Everything You Need to Know",
      updateDate: "2018-09-22",
    },
    {
      name: "Havven Launches eUSD, its First Stablecoin",
      updateDate: "2018-07-03",
    },
    {
      name: "Tradenostix: Our Review of The Latest Crypto Analytics Tool",
      updateDate: "2018-12-02",
    },
    {
      name: "Big Players are Moving into Blockchain - Here Are 13 Examples",
      updateDate: "2018-05-11",
    },
    {
      name: "Binance Coin (BNB): Native Token of the Largest Crypto Exchange",
      updateDate: "2019-11-21",
    },
    {
      name: "Kraken Review: Complete Beginners Guide",
      updateDate: "2021-09-23",
    },
    {
      name: "The Economics of Home Mining: Is it Worth Your Time?",
      updateDate: "2018-09-30",
    },
    {
      name: "QuadrigaCX Review: Complete Beginners Guide",
      updateDate: "2019-05-03",
    },
    {
      name: "Bitcoin Private (BTCP) Review: Everything You Need to Know",
      updateDate: "2019-04-18",
    },
    {
      name: "MEW Hack: Time to look at Decentralized Solutions to DNS Servers",
      updateDate: "2018-05-02",
    },
    {
      name: "Algebraix Welcomes Esteemed Industry Leaders To Advisory Board",
      updateDate: "2018-06-01",
    },
    {
      name: "What is NEM (XEM)? Complete Guide to a Smart Asset Blockchain",
      updateDate: "2018-12-02",
    },
    {
      name: "Top 6 Market Factors You Should Use to Find the Best Coins",
      updateDate: "2018-11-30",
    },
    {
      name: "Civic (CVC) Review: Securing Digital Identity on The Blockchain",
      updateDate: "2018-12-02",
    },
    {
      name: "New Cryptocurrency Citizenship Coin Launched",
      updateDate: "2018-06-01",
    },
    {
      name: "Bitcoin Gold (BTG) Review: Should You Consider It?",
      updateDate: "2019-04-18",
    },
    {
      name: "Is Puerto Rico The Ideal Home for The Crypto Hodler?",
      updateDate: "2018-05-01",
    },
    {
      name: "Beginners Guide to Using MetaMask-The Ultimate Doorway to DeFi!",
      updateDate: "2022-05-19",
    },
    {
      name: "Monaco Coin (MCO) Review: Everything You Need to Know",
      updateDate: "2018-12-18",
    },
    {
      name: "Havven Launches World’s First Online Store to Solely Accept A Stable Cryptocurrency As Payment",
      updateDate: "2018-06-01",
    },
    {
      name: "Nearly 50% of ICOs from 2017 Are Failing. Here’s Why",
      updateDate: "2018-05-05",
    },
    {
      name: "The Howey Test and Cryptocurrency: Which Coins May Apply?",
      updateDate: "2018-11-23",
    },
    {
      name: "NXT Coin Review: A Deep Dive into the Original Blockchain 2.0",
      updateDate: "2018-12-02",
    },
    {
      name: "Review of Gifto (GTO), A Decentralized Gifting Protocol",
      updateDate: "2018-05-08",
    },
    {
      name: "ZenCash (ZEN) Review: The Complete Beginners Guide",
      updateDate: "2018-11-30",
    },
    {
      name: "Polymath Review: The Blockchain For Financial Securities",
      updateDate: "2019-12-03",
    },
    {
      name: "The Battle Against ASICs: Antminer Z9 Angers the Zcash Community",
      updateDate: "2018-09-30",
    },
    {
      name: "Step-by-Step Guide to Buying BCH on Local Bitcoin Cash",
      updateDate: "2021-09-25",
    },
    {
      name: "What is the ZCash Ceremony? The Complete Beginners Guide",
      updateDate: "2018-09-30",
    },
    {
      name: "Freedom Coin (TFC) – Cryptocurrency You Can Bank on Launched",
      updateDate: "2018-06-01",
    },
    {
      name: "Zilliqa Review: High Performance Sharding Based Blockchain",
      updateDate: "2020-05-14",
    },
    {
      name: "A Crypto Black Swan Event: Ethereum Classified as a Security",
      updateDate: "2019-06-02",
    },
    {
      name: "Could Legalized US Sports Betting Drive Blockchain Adoption?",
      updateDate: "2018-05-16",
    },
    {
      name: "Review of Bitshares (BTS): The Original Decentralised Exchange",
      updateDate: "2018-12-02",
    },
    {
      name: "Aeternity (AE) Review: Building Scalable Smart Contracts",
      updateDate: "2018-11-30",
    },
    {
      name: "Po.et (POE) Review: Securing Intellectual Property on the Blockchain",
      updateDate: "2018-09-22",
    },
    {
      name: "Hodly Review: Is it Safe to Buy CryptoCurrency With?",
      updateDate: "2019-05-15",
    },
    {
      name: "Coinmama Review: Complete Beginners Guide",
      updateDate: "2019-03-15",
    },
    {
      name: "Bitstamp Review: What You Need to Know Before Trading",
      updateDate: "2020-02-16",
    },
    {
      name: "Sentinel Protocol ICO: Threat Intelligence Securing The Blockchain",
      updateDate: "2018-05-22",
    },
    {
      name: "Review of Status (SNT): The Ethereum Powered Mobile OS",
      updateDate: "2018-11-30",
    },
    {
      name: "Elixir (ELIX) Review: Complete Beginners Guide ",
      updateDate: "2018-05-25",
    },
    {
      name: "The Tax Implications of Home Crypto Mining: How Does it Work?",
      updateDate: "2018-05-25",
    },
    {
      name: "Why The Marshall Islands is Tokenizing its Money Supply",
      updateDate: "2018-05-26",
    },
    {
      name: "BitMEX Review: Complete Exchange Overview",
      updateDate: "2020-02-16",
    },
    {
      name: "Review of Electrify Asia (ELEC) - Everything You Need to Know",
      updateDate: "2018-09-22",
    },
    {
      name: "Enjin Coin Review 2022: Putting Gaming On The Blockchain",
      updateDate: "2022-06-02",
    },
    {
      name: "Decentraland Review: Virtual Reality World on the Blockchain",
      updateDate: "2021-03-30",
    },
    {
      name: "Bitquick Review: Complete Beginners Guide",
      updateDate: "2021-09-25",
    },
    {
      name: "CryptoCurrency Airdrops: Where Could The SEC Stand on Them?",
      updateDate: "2018-06-03",
    },
    {
      name: "Iconomi (ICN) Review: The Digital Asset Management Platform",
      updateDate: "2018-09-22",
    },
    {
      name: "7 of The Weirdest Things You Can Buy With Crypto",
      updateDate: "2018-11-30",
    },
    { name: "Carebit - A Coin That Cares", updateDate: "2018-06-06" },
    {
      name: "Ethereum Mining Pools: Best Places to Mine ETH",
      updateDate: "2020-02-11",
    },
    {
      name: "CyberMiles (CMT) Review: The E-Commerce Smart Contract Platform",
      updateDate: "2018-09-22",
    },
    {
      name: "CareBit Review: Charitable Donations on the Blockchain",
      updateDate: "2018-06-08",
    },
    {
      name: "Review of Nebulas (NAS): Making the Internet Decentralised",
      updateDate: "2018-07-09",
    },
    {
      name: "CryptoCurrency Lawyers: Law on The Blockchain",
      updateDate: "2018-06-12",
    },
    {
      name: "Beginners Guide to Bitcoin Trading Bots",
      updateDate: "2019-06-02",
    },
    {
      name: "Populous (PPT) Review: Invoice Financing on the Blockchain",
      updateDate: "2019-02-28",
    },
    {
      name: "Expert Option Review: Complete Beginners Guide",
      updateDate: "2021-09-25",
    },
    {
      name: "Review of Elastos (ELA): Building an Internet of the Future",
      updateDate: "2018-08-11",
    },
    {
      name: "Why is Twitter Struggling to Stop CryptoCurrency Scams?",
      updateDate: "2018-06-16",
    },
    {
      name: "Don’t Kid Yourself, This is Still the Early Adoption Phase",
      updateDate: "2018-08-09",
    },
    {
      name: "Setting up a Ripple Paper Wallet: Complete Beginners Guide",
      updateDate: "2020-02-01",
    },
    {
      name: "Wanchain (WAN) Review: A Cross Chain Smart Contract Ecosystem",
      updateDate: "2018-08-11",
    },
    { name: "How to Enter the Havven nUSD Airdrop", updateDate: "2018-06-21" },
    {
      name: "ARK Coin Review: The Blockchain Solution For Everyone",
      updateDate: "2019-07-26",
    },
    {
      name: "Cryptocurrency Spoofing: How Bitcoin Whales Fool Markets",
      updateDate: "2019-07-03",
    },
    {
      name: "Ceek VR Token Review: VR Experiences on The Blockchain",
      updateDate: "2018-09-22",
    },
    {
      name: "The Best Litecoin Mining Pools: Complete List",
      updateDate: "2021-10-12",
    },
    {
      name: "FCoin Founder: Every New Invention Is Misunderstood in Early Stage",
      updateDate: "2018-07-09",
    },
    {
      name: "Mixin (XIN) Collaborating with Nepal’s Global Payment Service Provider City on an Instant Messaging Payment System",
      updateDate: "2018-06-26",
    },
    {
      name: "Exchange Hacks Highlight the Benefits of CryptoCurrencies, Not Their Flaws",
      updateDate: "2019-02-16",
    },
    {
      name: "Kin Coin Review: Utility Token Driving The Kik Ecosystem",
      updateDate: "2018-06-28",
    },
    {
      name: "Aeon Coin Review: The Privacy Coin Made for Mobile",
      updateDate: "2018-11-30",
    },
    {
      name: "ICO Bounty Programs: Complete Beginners Guide",
      updateDate: "2018-07-02",
    },
    {
      name: "Coinsquare Review: Complete Beginners Guide",
      updateDate: "2021-10-08",
    },
    {
      name: "MyEtherWallet vs. MyCrypto: Where to Store Your ERC20 Tokens",
      updateDate: "2018-07-06",
    },
    {
      name: "Dropil (DROP) Review: Automated Cryptocurrency Trading Tools",
      updateDate: "2018-09-22",
    },
    {
      name: "Huobi Exchange Review: Complete Beginners Guide",
      updateDate: "2021-09-25",
    },
    {
      name: "Finding The Best ZCash Mining Pools: What You Need To Know",
      updateDate: "2019-12-18",
    },
    {
      name: "DICE Lowers Entry Barrier to Cryptocurrencies for Real-world Businesses",
      updateDate: "2018-07-09",
    },
    {
      name: "Pundi X Review: Powering Point of Sale Crypto Adoption",
      updateDate: "2019-11-21",
    },
    {
      name: "What is Huobi Token (HT): Should You Consider It?",
      updateDate: "2018-09-22",
    },
    {
      name: "What are SAFT Agreements?: Complete Beginners Guide",
      updateDate: "2018-07-13",
    },
    {
      name: "Cryptocurrency Faucet: Complete Beginners Guide",
      updateDate: "2018-07-17",
    },
    {
      name: "What is GoChain (GO)? Everything You Need to Know",
      updateDate: "2019-02-26",
    },
    {
      name: "Best Dogecoin Mining Pools: Everything You Need to Know",
      updateDate: "2021-10-07",
    },
    {
      name: "The Top 5 Crypto Friendly Countries to Consider",
      updateDate: "2018-07-19",
    },
    {
      name: "Bitcoin Diamond (BCD) Review: Everything You Need To Know",
      updateDate: "2018-09-22",
    },
    {
      name: "Finding The Best Decred Pools: Complete Beginners Guide",
      updateDate: "2020-02-11",
    },
    {
      name: "Holochain Review: DLT Trying to Make Blockchains Obsolete",
      updateDate: "2021-10-10",
    },
    {
      name: "Gekko Trading Bot: Complete Guide to This Free Crypto Tool",
      updateDate: "2018-11-26",
    },
    {
      name: "The Best Stellar Lumens Wallets: Where to Safely Store Your XLM",
      updateDate: "2019-04-07",
    },
    {
      name: "BullMarketz.com: A Game Changer for the Cryptocurrency and Derivatives Market",
      updateDate: "2018-12-02",
    },
    {
      name: "QASH Coin Review: Powering Global Exchange Liquidity",
      updateDate: "2018-11-30",
    },
    {
      name: "Finding the Best Dash Mining Pools - Everything You Need To Know",
      updateDate: "2020-02-11",
    },
    {
      name: "Review of GXS Coin - Powering the Decentralised Data Economy",
      updateDate: "2019-02-28",
    },
    {
      name: "Review of RChain (RHOC): Building Scalable Blockchain Applications",
      updateDate: "2018-08-03",
    },
    {
      name: "MECA Coin Review: Casino Ownership on the Blockchain",
      updateDate: "2018-08-07",
    },
    {
      name: "What Effects Could Bitcoin ETFs have on the Market",
      updateDate: "2019-06-02",
    },
    {
      name: "The Best Monero Mining Pools 2022: Everything You Need to Know",
      updateDate: "2022-05-19",
    },
    {
      name: "Review of HCash (HC): The Latest Cross Platform Cryptocurrency",
      updateDate: "2018-09-30",
    },
    {
      name: "BitPanda Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Getting Your .ETH Domain: Complete Guide to the ENS",
      updateDate: "2018-08-17",
    },
    {
      name: "Review of MaidSafeCoin (MAID): Building a Decentralised Data Network",
      updateDate: "2018-08-11",
    },
    {
      name: "Bytecoin Mining Pools - The Best Places to Mine BCN",
      updateDate: "2020-02-11",
    },
    {
      name: "Best IOTA Wallets: What You Need to Consider",
      updateDate: "2019-02-13",
    },
    {
      name: "4 Blockchain Products You Can Actually Use Today",
      updateDate: "2019-04-22",
    },
    {
      name: "How to Mine Burstcoin: Step-by-Step Beginners Guide",
      updateDate: "2021-10-12",
    },
    {
      name: "Delegated Proof of Stake (DPoS) - Total Beginners Guide",
      updateDate: "2018-08-20",
    },
    {
      name: "Review of Aelf (ELF): A Cloud Computing Blockchain Network",
      updateDate: "2018-09-22",
    },
    {
      name: "CryptoCurrency Options - An Alternative Way to Trade Crypto",
      updateDate: "2018-11-25",
    },
    {
      name: "EUR Bitcoin Price Forecast - Time for Another Upswing?",
      updateDate: "2018-08-22",
    },
    {
      name: "How to Mine Digibyte (DGB): Complete Beginners Guide",
      updateDate: "2021-10-10",
    },
    {
      name: "Best DASH Wallets - Where to Safely Store Your Crypto",
      updateDate: "2019-04-18",
    },
    {
      name: "Turtlecoin (TRTL) Review: Fast, Private and Easy to Mine",
      updateDate: "2019-02-26",
    },
    {
      name: "Vertcoin Mining Pools: Complete List of the Best Pools",
      updateDate: "2020-02-11",
    },
    {
      name: "Ardor Platform Review: Next Level Blockchain-as-a-Service",
      updateDate: "2019-02-04",
    },
    {
      name: "Storj Review: Deep Dive into Blockchain Storage",
      updateDate: "2019-02-26",
    },
    {
      name: "PIVX Staking: Beginners Guide to Earning PIVX",
      updateDate: "2018-11-30",
    },
    {
      name: "Review of Theta Token: Blockchain Powered Video Streaming",
      updateDate: "2021-10-11",
    },
    {
      name: "Best Verge Mining Pools: Where to Mine Your XVG",
      updateDate: "2020-02-11",
    },
    {
      name: "OmiseGO Review: The Blockchain Project Unbanking the Banked",
      updateDate: "2019-11-02",
    },
    {
      name: "Nano Review: Instant, Zero Fees and Scalable",
      updateDate: "2019-10-25",
    },
    {
      name: "Review of Stratis (STRAT): Enterprise Blockchain as a Service",
      updateDate: "2018-11-30",
    },
    {
      name: "Golem Review: Decentralised Blockchain Super Computer",
      updateDate: "2019-10-28",
    },
    {
      name: "Mining Ravencoin (RVN): Step-by-Step Guide",
      updateDate: "2019-04-09",
    },
    {
      name: "Metaverse ETP: Everything You Need to Know",
      updateDate: "2018-09-14",
    },
    {
      name: "Bitcoin Gold Mining Pools: Where Should You Mine BTG?",
      updateDate: "2020-02-11",
    },
    {
      name: "Review of FunFair (FUN): Blockchain Solutions for Gaming",
      updateDate: "2019-04-18",
    },
    {
      name: "DAO.Casino is launching Sandbox for game developers",
      updateDate: "2018-09-21",
    },
    {
      name: "Binance Review: Complete Exchange Overview",
      updateDate: "2022-05-20",
    },
    {
      name: "CryptoCurrency Arbitrage: How Traders Make Money on Mispricing",
      updateDate: "2019-03-11",
    },
    {
      name: "Siacoin Mining Pools: Best places to Mine SIA",
      updateDate: "2020-02-11",
    },
    {
      name: "Review of Nexus (NXS): Everything You Need to Know",
      updateDate: "2018-11-30",
    },
    {
      name: "What is Bakkt? The Crypto Solution for Institutions",
      updateDate: "2019-06-02",
    },
    {
      name: "Agrello (DLT) Review: The Project Building Legal Smart Contracts",
      updateDate: "2018-09-27",
    },
    {
      name: "Best ZCash Wallets: Safest Places to Store Your ZEC",
      updateDate: "2020-02-16",
    },
    {
      name: "What is ZCash? Complete Beginners Guide to ZEC",
      updateDate: "2019-02-26",
    },
    {
      name: "Loopring Review: High Throughput Dex Protocol",
      updateDate: "2021-10-09",
    },
    {
      name: "Horizen Interview - How ZEN is Bringing Privacy to Life",
      updateDate: "2018-12-25",
    },
    {
      name: "Komodo Mining Pools: Finding The Best Pool To Mine KMD",
      updateDate: "2020-02-11",
    },
    {
      name: "NEXO Lending Review: Instant Crypto Backed Loans",
      updateDate: "2022-03-30",
    },
    {
      name: "Bitbuy Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Ethereum Classic Mining: Step-by-Step Beginners Guide",
      updateDate: "2019-04-18",
    },
    {
      name: "Review of Quarkchain (QKC): High Capacity Transactional Blockchain",
      updateDate: "2019-04-18",
    },
    {
      name: "Electroneum Mining Pools: Best Places to Mine MTN",
      updateDate: "2018-12-25",
    },
    {
      name: "Review of Nuls (NULS): Enterprise Blockchain Solutions",
      updateDate: "2019-02-26",
    },
    {
      name: "Best EOS Wallets - Safest Storage Options for EOS",
      updateDate: "2021-06-15",
    },
    {
      name: "ZCash Sapling Upgrade: Everything You Need to Know",
      updateDate: "2018-12-20",
    },
    {
      name: "Monacoin Mining Pools: Best Places to Mine MONA",
      updateDate: "2018-12-25",
    },
    {
      name: "Review of BitTube (TUBE): Everything You Need to Know",
      updateDate: "2019-02-26",
    },
    { name: "Earn on The Go With Triffic", updateDate: "2018-10-18" },
    {
      name: "Neo Name Service (NNS): Decentralised DNS on the Blockchain",
      updateDate: "2018-10-19",
    },
    {
      name: "Crypto Trading Algorithms: Complete Overview",
      updateDate: "2019-07-03",
    },
    {
      name: "Review of Bluzelle (BLZ): A Decentralised Data Ecosystem",
      updateDate: "2019-04-18",
    },
    {
      name: "Terrexa Review: Complete Beginners Guide",
      updateDate: "2021-09-25",
    },
    {
      name: "The Possibilities of Fiat - Crypto Interoperability in Full Service Banking",
      updateDate: "2018-10-23",
    },
    {
      name: "Loki Review: Private Transactions, Decentralised Communication",
      updateDate: "2019-02-26",
    },
    {
      name: "Top 7 Most Expensive Items You Can Buy With Bitcoin",
      updateDate: "2018-10-25",
    },
    {
      name: "3 Real World Applications of Zero Knowledge Proofs",
      updateDate: "2018-10-29",
    },
    {
      name: "MobileGO (MGO) Review: The Mobile Gaming Blockchain",
      updateDate: "2018-10-26",
    },
    {
      name: "Creating a Web Authentication Mechanism on the Blockchain",
      updateDate: "2018-10-28",
    },
    {
      name: "Red Pulse Phoenix Review: Decentralized Research Platform",
      updateDate: "2018-10-29",
    },
    {
      name: "NavCoin (NAV) Review: The Project Trying to Simplify Crypto",
      updateDate: "2019-02-26",
    },
    {
      name: "Deribit Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Best Monero Wallets in 2022: Where to Store Your XMR",
      updateDate: "2021-12-31",
    },
    {
      name: "iExec (RLC) Review: Blockchain-Based Cloud Computing",
      updateDate: "2019-06-05",
    },
    {
      name: "Genesis Vision Review: Decentralized Investment Management",
      updateDate: "2018-11-06",
    },
    {
      name: "Best Dogecoin Wallets: Safest Places to Store Your DOGE",
      updateDate: "2021-10-07",
    },
    {
      name: "Anycoin Direct adds major new feature: Direct Coin-to-Coin Trading",
      updateDate: "2018-11-06",
    },
    {
      name: "NET Tokens Set To be Frozen Forever: Time Is Running Out To Activate Your NIM",
      updateDate: "2019-05-10",
    },
    {
      name: "Monetha (MTH) Review: Decentralised Reputation Management",
      updateDate: "2018-11-13",
    },
    {
      name: "Tron (TRX) Wallets: 9 of The Best Storage Options",
      updateDate: "2021-06-15",
    },
    {
      name: "SelfKey (KEY) Overview: Self-Sovereign Identity Management",
      updateDate: "2018-11-15",
    },
    {
      name: "Best ZEN Pools: Where you Should Mine Horizen",
      updateDate: "2018-12-25",
    },
    {
      name: "No, Your Blockchain Startup Doesn’t Need a $20 Million ICO",
      updateDate: "2018-11-20",
    },
    {
      name: "Best Litecoin Wallets: Safest places to Store Your LTC",
      updateDate: "2021-06-15",
    },
    {
      name: "Bitcoin Cash ABC vs. BCHSV: The Hardfork and The Hashwar",
      updateDate: "2018-11-23",
    },
    {
      name: "Crypto Technical Analysis: Complete Beginners Guide to TA",
      updateDate: "2022-05-25",
    },
    {
      name: "Best VEChain Wallets: Top 4 Safe Places to Store your VET",
      updateDate: "2021-10-12",
    },
    {
      name: "Request Network Review: The Decentralised Payment System",
      updateDate: "2019-02-26",
    },
    {
      name: "Bittrex Review: Complete Exchange Overview",
      updateDate: "2020-02-16",
    },
    {
      name: "Review of EtherParty: Platform for Blockchain Software Products",
      updateDate: "2018-11-30",
    },
    {
      name: "Best Tezos Wallets: Top 8 Storage Options for Your XTZ",
      updateDate: "2021-06-15",
    },
    {
      name: "Geo Replication in Crypto Exchanges and Financial Integration",
      updateDate: "2018-12-04",
    },
    {
      name: "AdEx Network Review: The Blockchain Based Ad Network",
      updateDate: "2018-12-06",
    },
    {
      name: "Bitvo Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Esports platform release increases the adoption of MobileGO (MGO) tokens",
      updateDate: "2018-12-07",
    },
    {
      name: "Review of IoTeX (IOTX): Privacy Conscious Blockchain for IoT",
      updateDate: "2019-02-26",
    },
    {
      name: "Best Golem Wallets: Top 7 Places to Safely Store GNT",
      updateDate: "2019-03-16",
    },
    {
      name: "What is the USDC? Complete Beginners Guide to the USD Stablecoin",
      updateDate: "2019-02-28",
    },
    {
      name: "Republic Protocol (REN) Review: Decentralised Dark Pool Trading",
      updateDate: "2020-05-26",
    },
    {
      name: "Celebrate this Christmas with CoinGecko’s Limited Edition NFT",
      updateDate: "2018-12-14",
    },
    {
      name: "District0x Review: The Network of Decentralised Marketplaces",
      updateDate: "2018-12-15",
    },
    {
      name: "MARKET Protocol: Interview with CEO Seth Rubin on Blockchain Derivatives",
      updateDate: "2019-02-28",
    },
    {
      name: "Crypto.com Review 2022: A Robust All-in-One Crypto Solution",
      updateDate: "2022-06-10",
    },
    {
      name: "Bitcoin Fork Bithereum Launches Coin to Revolutionize Cryptocurrency Mining",
      updateDate: "2018-12-17",
    },
    {
      name: "Best Omisego Wallets: Top Places to Store OMG Tokens",
      updateDate: "2019-03-16",
    },
    {
      name: "QLC Chain Review: Platform for a Decentralised Network-as-a-Service",
      updateDate: "2019-02-26",
    },
    {
      name: "Emerging Market CryptoCurrency Adoption - What Needs to Be Done",
      updateDate: "2019-05-10",
    },
    {
      name: "Best Lisk Wallets: Top 7 Places to Safely Store LSK",
      updateDate: "2018-12-25",
    },
    {
      name: "Review of Neblio (NEBL): Platform for Enterprise Blockchain Solutions",
      updateDate: "2019-02-26",
    },
    {
      name: "Cloakcoin (CLOAK) Review: Established Privacy Focused Crypto",
      updateDate: "2019-02-26",
    },
    {
      name: "Best Verge Wallets: Top 5 Safest Places to Store XVG",
      updateDate: "2021-06-15",
    },
    {
      name: "Metal (MTL) Review: Payments App That Earns Crypto",
      updateDate: "2019-02-26",
    },
    {
      name: "Crypto Margin Trading: Complete Guide To Leverage",
      updateDate: "2019-01-02",
    },
    {
      name: "OST Token Review: Beginners-Blockchain-as-a-Service",
      updateDate: "2019-02-26",
    },
    {
      name: "Best Decred Wallets: Top 6 Places to Store Your DCR",
      updateDate: "2019-03-16",
    },
    {
      name: "Investous Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Viacoin Review: The Original Micropayments CryptoCurrency",
      updateDate: "2019-02-26",
    },
    {
      name: "POA Network: The Immediate Ethereum Scalability Solution",
      updateDate: "2019-02-26",
    },
    {
      name: "Best Digibyte Wallets: Top 7 Safest DGB Storage Options",
      updateDate: "2019-05-21",
    },
    {
      name: "Storm Token Review: The Crypto For The Gig Economy",
      updateDate: "2019-02-26",
    },
    {
      name: "Interview with Paul Schmitzer of Particl - The Privacy Focused Marketplace",
      updateDate: "2019-01-27",
    },
    {
      name: "Best Bytecoin Wallets: Top 4 of the Safest BCN Storage Options",
      updateDate: "2019-01-24",
    },
    {
      name: "Quantstamp Review: Smart Contract Auditing Protocol",
      updateDate: "2019-06-14",
    },
    {
      name: "Wings Platform Review: Crowdsourcing ICO Evaluations",
      updateDate: "2019-02-04",
    },
    {
      name: "Particl Review: Privacy Focused Decentralized Applications",
      updateDate: "2019-02-04",
    },
    {
      name: "TerraGreen on a Quest for a Green Cryptocurrency",
      updateDate: "2019-01-30",
    },
    {
      name: "Best PIVX Wallets: 6 of the Safest Places to Store PIVX",
      updateDate: "2019-04-18",
    },
    {
      name: "Prime XBT Review 2022: Complete Exchange Overview",
      updateDate: "2022-05-25",
    },
    {
      name: "CoinGecko Yearly Report: The Most Interesting Insights of 2018",
      updateDate: "2019-02-28",
    },
    {
      name: "Adoption of Cryptocurrency in the Modern Barter System",
      updateDate: "2019-02-01",
    },
    {
      name: "WCX Review: Complete Exchange Overview",
      updateDate: "2019-06-18",
    },
    {
      name: "Mining ZCoin (XZC): Step-by-Step Beginners Guide",
      updateDate: "2019-02-04",
    },
    {
      name: "Coinsmart Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Aeron (ARN) Review: The Blockchain for Aviation Safety",
      updateDate: "2019-02-08",
    },
    {
      name: "Atomic Wallet Review: The Latest Multicurrency Storage Device",
      updateDate: "2021-10-12",
    },
    {
      name: "Crypto Custody Conundrum: The Catch 22 for Institutions",
      updateDate: "2019-02-17",
    },
    {
      name: "BitTorrent Review: The Token of the Largest File Sharing Protocol",
      updateDate: "2019-02-14",
    },
    {
      name: "Biggest Bitcoin Hacks: 8 of The Largest Breaches in History",
      updateDate: "2019-05-20",
    },
    {
      name: "Coinberry Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "AxiTrader Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Fetch.AI Review: AI-based Autonomous Machine Economy",
      updateDate: "2019-06-14",
    },
    {
      name: "7 Best Crypto Prediction Markets: Betting on the Blockchain",
      updateDate: "2019-05-27",
    },
    {
      name: "KuCoin Shares Review: The Dividend Paying Exchange Token",
      updateDate: "2019-02-23",
    },
    {
      name: "Bybit Review: Complete Exchange Overview",
      updateDate: "2021-10-25",
    },
    {
      name: "Types of Crypto Wallets: The 5 Top Options for Coin Storage",
      updateDate: "2019-04-18",
    },
    {
      name: "What is Tether (USDT)? Overview of the Controversial Stablecoin",
      updateDate: "2019-06-02",
    },
    {
      name: "AirSwap (AST) Review: Decentralised ERC20 Exchange Network",
      updateDate: "2019-06-22",
    },
    {
      name: "Blockchain vs. Database: How are They Different?",
      updateDate: "2019-03-02",
    },
    {
      name: "Blockchain Compatible Fiat is Coming! What Does This Mean?",
      updateDate: "2019-05-10",
    },
    {
      name: "Pepperstone Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Bread (BRD) Review: Rewards Tokens of the Bread Wallet",
      updateDate: "2019-03-05",
    },
    {
      name: "Best Ways to Buy Bitcoin With PayPal: Beginners Guide",
      updateDate: "2019-03-07",
    },
    {
      name: "DAFEX Artificial Intelligence Technology in Digital Wealth Management",
      updateDate: "2019-03-06",
    },
    {
      name: "Celer Network Review: The Next Layer 2 Scaling Solution",
      updateDate: "2019-03-07",
    },
    {
      name: "24option Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Best Bitcoin Gold Wallets: Top 6 Safest Places to Store BTG",
      updateDate: "2019-04-18",
    },
    {
      name: "Ambrosus Review: Decentralised IoT Supply Chain Tracking",
      updateDate: "2019-03-14",
    },
    {
      name: "Exodus Wallet Review 2022: Everything You Need to Know",
      updateDate: "2022-04-22",
    },
    {
      name: "OctaFX Review: Complete Forex Broker Overview",
      updateDate: "2021-10-11",
    },
    {
      name: "Monerujo Mobile Wallet: Beginners Step-by-Step Guide",
      updateDate: "2019-03-20",
    },
    {
      name: "Bitlox Review: Complete Guide to this Hardware Wallet",
      updateDate: "2019-03-22",
    },
    {
      name: "Eightcap Review: Complete FX Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Raiden Network Token: The Ethereum off-chain Scaling Solution",
      updateDate: "2019-03-24",
    },
    {
      name: "Cindicator Review: Hybrid Intelligence for Financial Forecasting",
      updateDate: "2019-03-25",
    },
    {
      name: "Edge Wallet Review: Complete Guide to Mobile Storage",
      updateDate: "2019-03-27",
    },
    {
      name: "Bexplus Tips to Profit from the Year-Plus Long BTC Bear Market",
      updateDate: "2019-03-27",
    },
    {
      name: "Hosting Providers that Take Bitcoin: Top 9 Hosts that Accept Crypto",
      updateDate: "2020-08-02",
    },
    {
      name: "Nimiq Collaborates With Binance-DEX Trust Wallet",
      updateDate: "2020-09-05",
    },
    {
      name: "Alpari Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Best Ravencoin Wallets: Top 6 Safest Places to Store your RVN",
      updateDate: "2019-04-01",
    },
    {
      name: "Ripio Credit Network (RCN) Review: Global P2P Credit Protocol",
      updateDate: "2019-04-03",
    },
    {
      name: "Jaxx Liberty Wallet Review: Complete Beginners Guide",
      updateDate: "2019-12-18",
    },
    {
      name: "Streamr Review: Platform For Real Time Data Exchange",
      updateDate: "2019-04-03",
    },
    {
      name: "BaseFEX Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "MATIC Network Review: Scaling Solution for Ethereum Blockchain",
      updateDate: "2020-03-11",
    },
    {
      name: "Ravencoin Pools: 7 of The Best Places to Mine RVN",
      updateDate: "2021-10-07",
    },
    {
      name: "Everex (EVX) Review: Blockchain Powered Remittance Project",
      updateDate: "2019-04-16",
    },
    {
      name: "Anycoin Direct Now Accepts credit card Payments on Their Platform",
      updateDate: "2019-04-10",
    },
    {
      name: "BitBounce Review: Earning CryptoCurrency From Spam Emails",
      updateDate: "2019-04-12",
    },
    {
      name: "FP Markets Review: Complete FX Broker Review",
      updateDate: "2021-09-25",
    },
    {
      name: "Mainframe Review: Decentralised App Development Platform",
      updateDate: "2019-04-16",
    },
    {
      name: "Bitcoin Blockchain Explorers: Top 10 Best Block Explorers",
      updateDate: "2019-04-17",
    },
    {
      name: "WePower Review: Green Energy Trading on the Blockchain",
      updateDate: "2019-04-19",
    },
    {
      name: "IC Markets Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "DENT Coin Review: Marketplace for Mobile Data Exchange",
      updateDate: "2019-04-23",
    },
    {
      name: "Blockfolio Review: The Crypto Portfolio Tracking App",
      updateDate: "2021-10-12",
    },
    {
      name: "TenX Review: The CryptoCurrency Backed Debit Card",
      updateDate: "2019-05-06",
    },
    {
      name: "Coinbase Pro Review: Complete Exchange Overview",
      updateDate: "2022-06-18",
    },
    {
      name: "ETHLend Review: Guide to The Crypto Lending Marketplace",
      updateDate: "2019-04-29",
    },
    {
      name: "Electron Cash: Complete Beginners Guide to This BCH Wallet",
      updateDate: "2019-05-01",
    },
    {
      name: "SONM Review: Decentralised Fog Computing Platform",
      updateDate: "2019-06-19",
    },
    {
      name: "MyFX Markets Review: Forex Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Best Siacoin Wallets: Top 4 places to Safely Store Your SIA",
      updateDate: "2019-05-25",
    },
    {
      name: "NordFX Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Why Stablecoins Like USDQ, KRWQ, CNYQ, JPYQ Will never Fail",
      updateDate: "2019-05-07",
    },
    {
      name: "Orbs Review: The Hybrid Blockchain for Decentralised Networks",
      updateDate: "2019-05-08",
    },
    {
      name: "Android Bitcoin Wallets: Top 10 Best BTC Wallets on Android",
      updateDate: "2019-12-18",
    },
    {
      name: "PR: Trade Smart Using Ubecoin on Latoken Exchange",
      updateDate: "2019-05-10",
    },
    {
      name: "Nimiq Coin Review: The Browser Based CryptoCurrency",
      updateDate: "2019-05-10",
    },
    {
      name: "Dock Coin Review: Digital Credential Blockchain Protocol",
      updateDate: "2019-05-14",
    },
    {
      name: "CoinPayments Review: Crypto Payment Processor Guide",
      updateDate: "2019-05-25",
    },
    {
      name: "AppCoins Review: Decentralised in-app Payments Ecosystem",
      updateDate: "2019-05-16",
    },
    {
      name: "FBS Review: Complete Forex Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Harmony Protocol Review: Enabling Decentralisation at Scale",
      updateDate: "2021-10-08",
    },
    {
      name: "Reddcoin Review: Social CryptoCurrency For Tipping",
      updateDate: "2019-05-20",
    },
    {
      name: "Ethereum Classic Wallets: Top 9 Safest Places to Store ETC",
      updateDate: "2020-09-05",
    },
    {
      name: "Factom Review: Blockchain Protocol For Company Record Keeping",
      updateDate: "2019-05-24",
    },
    {
      name: "Gnosis Review: Decentralised Blockchain Predictions Market",
      updateDate: "2019-05-27",
    },
    {
      name: "Best NEM Wallets: Top 6 Safest Places to store your XEM",
      updateDate: "2019-05-28",
    },
    {
      name: "Sirin Labs Review: The SRN Token Powering the Finney Phone",
      updateDate: "2019-05-29",
    },
    {
      name: "Samourai Wallet Review: The Privacy Focused Bitcoin Wallet",
      updateDate: "2019-05-31",
    },
    {
      name: "Gemini Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Viberate Review: The Blockchain Based Live Music Ecosystem",
      updateDate: "2019-06-04",
    },
    {
      name: "Best Tether Wallets: Top 6 Safest Places to Store USDT",
      updateDate: "2019-06-04",
    },
    {
      name: "Long Awaited Samourai Dojo Released - Enhanced Bitcoin Privacy",
      updateDate: "2019-06-03",
    },
    {
      name: "Einsteinium Review: Funding Scientific Research with Crypto",
      updateDate: "2019-06-05",
    },
    {
      name: "Solution to Crypto Volatility - Platinum DAO Engineering",
      updateDate: "2019-06-05",
    },
    {
      name: "Ethereum Dapps: 10 Decentralised Apps You Can Use Right Now",
      updateDate: "2019-06-07",
    },
    {
      name: "NEO Foundation Mid-Year Financial Report - The Key Points",
      updateDate: "2019-06-10",
    },
    {
      name: "Fusion Review: Interoperability Solution for Financial Applications",
      updateDate: "2019-06-11",
    },
    {
      name: "OAX Review: Decentralised CryptoCurrency Exchange Platform",
      updateDate: "2019-06-12",
    },
    {
      name: "BRD Partners With Wyre To Offer Industry Low Bank Transfer Fees For Crypto",
      updateDate: "2019-06-13",
    },
    {
      name: "8 Best Tron dApps: Decentralised Apps You Can Use Now",
      updateDate: "2019-06-15",
    },
    {
      name: "Waykichain Review: Blockchain Development Platform for dApps",
      updateDate: "2019-06-22",
    },
    {
      name: "Fantom Review: DAG Based DeFi Powerhouse",
      updateDate: "2021-03-11",
    },
    {
      name: "Best Bitcoin Multisignature Wallets: Top 7 Places to Hold BTC",
      updateDate: "2019-06-20",
    },
    {
      name: "Best Bitcoin SV Wallets: Top 7 Safest Places to Store BSV",
      updateDate: "2019-06-21",
    },
    {
      name: "EtherZero Review: The Little Known Ethereum Hardfork",
      updateDate: "2019-06-22",
    },
    {
      name: "Verge Review: Latest Overview of the Anonymous CryptoCurrency",
      updateDate: "2019-12-05",
    },
    {
      name: "Unspent Transaction Ouput: Complete Beginners Guide to UTXO",
      updateDate: "2019-06-27",
    },
    {
      name: "Thunder Token Review: Complete Beginners Guide to ThunderCore",
      updateDate: "2019-07-02",
    },
    {
      name: "Best Stablecoins: 8 of the Top Stablecoins to Hodl Crypto Gains",
      updateDate: "2019-07-03",
    },
    {
      name: "Energi Review: Dash Fork Driving Crypto Mass Adoption",
      updateDate: "2019-07-06",
    },
    {
      name: "Aion Review: The Interoperable dApp Development Platform",
      updateDate: "2019-07-08",
    },
    {
      name: "ICO vs. STO vs. IEO: Comprehensive Guide To Token Fundraising",
      updateDate: "2019-07-10",
    },
    {
      name: "What is Tomochain? Complete Beginners Guide to TOMO Token",
      updateDate: "2019-07-12",
    },
    {
      name: "Exchange Volume Faking: How They Fake it Till They Make It",
      updateDate: "2019-07-17",
    },
    {
      name: "BRD Partners With Coinberry to Enable Expedited Crypto Purchasing",
      updateDate: "2019-07-18",
    },
    {
      name: "Lisk Review: The Leading JavaScript Dapp Development Platform",
      updateDate: "2019-07-25",
    },
    {
      name: "WINk Review: The First Gaming Blockchain Built on Tron",
      updateDate: "2021-10-07",
    },
    {
      name: "Ankr Network Review: Decentralised Cloud Computing Platform",
      updateDate: "2019-08-01",
    },
    {
      name: "Elrond Review: The Sharding Blockchain Focused on Scaling",
      updateDate: "2021-10-07",
    },
    {
      name: "Dusk Network Review: Privacy Blockchain For Security Tokens",
      updateDate: "2019-08-08",
    },
    {
      name: "Perlin Review: Leaderless Blockchain, Lightning Fast Transactions",
      updateDate: "2019-08-12",
    },
    {
      name: "Contentos Review: Decentralised Global Content Ecosystem",
      updateDate: "2019-08-17",
    },
    {
      name: "SmartMixer is Making Bitcoin Mixing Easier for a New Generation of Users",
      updateDate: "2019-08-18",
    },
    {
      name: "IOTA Review: Distributed Permissionless Ledger for IoT",
      updateDate: "2020-03-03",
    },
    {
      name: "Ontology Review: Neo Based Decentralised Trust Network",
      updateDate: "2019-08-29",
    },
    {
      name: "Algorand Review: Pure PoS Blockchain Development Platform",
      updateDate: "2022-04-20",
    },
    {
      name: "0x Review: The Protocol Powering Decentralised Exchange",
      updateDate: "2019-09-10",
    },
    {
      name: "Ethereum Classic Review: The Original Ethereum Blockchain",
      updateDate: "2021-05-23",
    },
    {
      name: "Stellar Lumens Review: The Network Moving Micro Payments",
      updateDate: "2021-07-19",
    },
    {
      name: "VeChain Review: Blockchain Supply Chain Management",
      updateDate: "2021-10-07",
    },
    {
      name: "Dash Review: Digital Cash Bitcoin Fork For Instant Payments",
      updateDate: "2019-10-05",
    },
    {
      name: "World-renowned Trader Brings Crypto Trading Masterclass to London",
      updateDate: "2019-10-03",
    },
    {
      name: "BEAM Review: Mimblewimble Based Scalable Privacy Coin",
      updateDate: "2019-10-09",
    },
    {
      name: "BRD Announces Strategic Partnership with Ripple",
      updateDate: "2019-10-11",
    },
    {
      name: "Hedera Hashgraph: Next Generation DLT Challenging Blockchains",
      updateDate: "2019-10-16",
    },
    {
      name: "What Is Lexera Technology? Hooplex.com Review",
      updateDate: "2019-10-16",
    },
    {
      name: "Best Cardano Wallets: Top 6 Places to Safely Store ADA",
      updateDate: "2019-10-18",
    },
    {
      name: "Best Nano Wallets: Top 8 Safest Places to Store NANO",
      updateDate: "2020-07-28",
    },
    {
      name: "Ravencoin Review: ASIC Resistant Peer-to-Peer Blockchain",
      updateDate: "2019-10-31",
    },
    {
      name: "Study: Most Americans Don’t Understand How Fractional Banking Works",
      updateDate: "2019-11-10",
    },
    {
      name: "GRIN Review: MimbleWimble Based Privacy Focused Crypto",
      updateDate: "2019-11-07",
    },
    {
      name: "Bancor Network Token: Decentralised Cross-Chain Liquidity",
      updateDate: "2021-05-23",
    },
    {
      name: "Bitcoin Cash Wallets: Top 10 Safest Places to Store BCH",
      updateDate: "2019-11-30",
    },
    {
      name: "Switchere Review: Complete Exchange Overview",
      updateDate: "2019-11-27",
    },
    {
      name: "QTUM Review: Bitcoin Based dApp Development Platform",
      updateDate: "2019-11-28",
    },
    {
      name: "Binance Coin Wallets: Top 10 Safest Places to Store BNB",
      updateDate: "2020-09-05",
    },
    {
      name: "Kindhumans Ethical Store Accepts Crypto: Why This Matters",
      updateDate: "2019-12-04",
    },
    {
      name: "DueDEX Review: Complete Exchange Overview",
      updateDate: "2021-10-15",
    },
    {
      name: "Mining Monero with CPUs: Step-by-Step Guide post RandomX",
      updateDate: "2019-12-15",
    },
    {
      name: "Orchid Review of OXT: Blockchain Based VPN Network",
      updateDate: "2019-12-19",
    },
    {
      name: "TrueUSD Review: Deep Dive on the TrustToken TUSD",
      updateDate: "2019-12-26",
    },
    {
      name: "Filecoin Review: Decentralised Blockchain Based Storage Network",
      updateDate: "2020-01-04",
    },
    {
      name: "Horizen Review: Complete Overview of the ZEN Privacy Crypto",
      updateDate: "2020-01-10",
    },
    {
      name: "KuMEX Review: KuCoin Futures Platform Overview",
      updateDate: "2020-01-17",
    },
    {
      name: "BRD Expands, Launches Blockset to Accelerate Blockchain Development",
      updateDate: "2020-01-16",
    },
    {
      name: "CryptoCurrency Marketing Agencies: Complete 2022 Overview",
      updateDate: "2022-05-04",
    },
    {
      name: "EasyMarkets Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Synthetix Review: Decentralised Synthetic Asset Protocol",
      updateDate: "2020-02-02",
    },
    {
      name: "SimpleFX Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Best Komodo Wallets: Top 8 Safest KMD Wallets",
      updateDate: "2020-02-06",
    },
    {
      name: "Best Crypto Tax Software: Top 8 Tax Tools for Crypto",
      updateDate: "2021-03-03",
    },
    {
      name: "PrimeBit Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Bitcoin SV Review: Complete Beginners Guide to BSV",
      updateDate: "2020-02-13",
    },
    {
      name: "Unibright Review: Powering Enterprise Blockchain Adoption",
      updateDate: "2020-02-20",
    },
    {
      name: "Best Waves Wallets: Top 6 Safest WAVES Storage Options",
      updateDate: "2020-02-22",
    },
    {
      name: "Top 15 Crypto YouTubers: Who To Follow Today",
      updateDate: "2021-02-19",
    },
    {
      name: "Announcement on SnapEx World Trading Championship",
      updateDate: "2020-03-16",
    },
    {
      name: "Binance USD Review: Complete Guide To BUSD Stablecoin",
      updateDate: "2020-03-27",
    },
    {
      name: "Paxful Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Huobi Derivatives Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "FTX Token Review (FTT): The Leveraged Token Standard",
      updateDate: "2022-01-15",
    },
    {
      name: "Best Staking Coins: Top 7 Cryptos to Earn Staking Returns",
      updateDate: "2021-10-07",
    },
    {
      name: "Bidao Review: Binance Chain Based DeFi Stablecoin",
      updateDate: "2021-10-10",
    },
    {
      name: "SnapEx Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Digibyte Review: Truly Decentralized UTXO Blockchain",
      updateDate: "2020-05-08",
    },
    {
      name: "Best Algorand Wallets: 5 Secure ALGO Staking Options",
      updateDate: "2020-05-11",
    },
    {
      name: "Numerai Review: Hedge Fund Data Science Network",
      updateDate: "2020-05-16",
    },
    {
      name: "Zilliqa Wallets: Top 8 Best Places to Store ZIL Safely",
      updateDate: "2020-09-05",
    },
    {
      name: "Waves Review: Pioneering Decentralised Exchange Protocol",
      updateDate: "2020-05-24",
    },
    {
      name: "Ren Project Review: Interchain Blockchain Liquidity Protocol",
      updateDate: "2020-05-31",
    },
    {
      name: "OMG Network Review: Latest Ethereum Scaling Solution",
      updateDate: "2020-06-06",
    },
    {
      name: "Bityard Review: Complete Exchange Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "PIVX Review: Proof-of-Stake Based Privacy Coin",
      updateDate: "2020-06-24",
    },
    {
      name: "XBTFX Review: Complete Broker Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Aave (LEND) Review: Decentralised Lending Platform",
      updateDate: "2021-10-08",
    },
    {
      name: "Blockchain Domains: Complete Guide from DNS to ENS",
      updateDate: "2021-11-26",
    },
    {
      name: "Best Crypto Wallets for 2022: 5 Most Secure Hardware Wallets",
      updateDate: "2022-05-19",
    },
    {
      name: "Dogecoin Review: The Original Meme CryptoCurrency",
      updateDate: "2020-07-18",
    },
    {
      name: "Best Crypto Debit Cards: Top 7 Compared Side-By-Side",
      updateDate: "2021-10-10",
    },
    {
      name: "Ampleforth (AMPL) Review: The Adaptive Stable Crypto",
      updateDate: "2020-07-24",
    },
    {
      name: "Aragon (ANT) Review: The Mother of All DAOs",
      updateDate: "2020-08-01",
    },
    {
      name: "PlusToken Scam: The Biggest Crypto Fraud in History",
      updateDate: "2020-08-04",
    },
    {
      name: "Yearn Finance Review: DeFi Profit Maximiser",
      updateDate: "2020-08-07",
    },
    {
      name: "Non Fungible Tokens: Complete Guide to NFTs",
      updateDate: "2020-08-13",
    },
    {
      name: "BlockFi Review: Complete Lending Platform Overview",
      updateDate: "2022-04-01",
    },
    {
      name: "Swipe (SXP) Review: Crypto Debit Cards meet DeFi",
      updateDate: "2021-10-11",
    },
    {
      name: "Bitfinex Hack: What Happened, Who Did it and What’s the Latest?",
      updateDate: "2020-08-22",
    },
    {
      name: "Polkadot (DOT) Review: The MOAB (Mother of All Blockchains)",
      updateDate: "2021-10-09",
    },
    {
      name: "1xBit Review: Complete Crypto Casino Overview",
      updateDate: "2021-09-25",
    },
    {
      name: "Universal Market Access (UMA) Review: Limitless DeFi",
      updateDate: "2021-10-08",
    },
    {
      name: "Trust Wallet Review: Complete Wallet Overview",
      updateDate: "2022-03-08",
    },
    {
      name: "Covesting Review: Complete Platform Overview",
      updateDate: "2020-09-10",
    },
    {
      name: "Curve Finance Review: The Decentralized Exchange King",
      updateDate: "2020-09-11",
    },
    {
      name: "Ledger Nano X Review 2022: Safe Wallet? Everything We Know!!",
      updateDate: "2022-05-23",
    },
    {
      name: "Blockset Announces Key Integrations to Complete Enterprise Blockchain Stack",
      updateDate: "2020-09-17",
    },
    {
      name: "Monolith (TKN) Review: Complete Card Solution for DeFi",
      updateDate: "2020-09-24",
    },
    {
      name: "Cream Finance Review: Pushing the boundaries of DeFi",
      updateDate: "2020-09-24",
    },
    {
      name: "SnapEx World Trading Championship! 200,000 USDT Prize Pool, 500 Winners",
      updateDate: "2020-09-25",
    },
    {
      name: "Solana (SOL) Review: The Scalable Blockchain Clock",
      updateDate: "2021-10-09",
    },
    {
      name: "BitMEX Lawsuit By The CFTC: Complete Overview",
      updateDate: "2020-10-03",
    },
    {
      name: "Trezor One Vs Trezor Model T Review: Which Trezor is Best for You?",
      updateDate: "2022-05-19",
    },
    {
      name: "Serum (SRM) Review - Pure DeFi Decentralized Exchange",
      updateDate: "2021-10-12",
    },
    {
      name: "Ledger Nano X vs. Trezor Model T: Hardware Wallets Head to Head",
      updateDate: "2021-10-12",
    },
    {
      name: "Litecoin (LTC) Review: Silver to The Digital Gold",
      updateDate: "2020-10-16",
    },
    {
      name: "John McAfee: When You Think Things Can’t Get Any Weirder…",
      updateDate: "2020-10-19",
    },
    {
      name: "Kusama (KSM) Review: A Polkadot Experiment",
      updateDate: "2021-10-10",
    },
    {
      name: "NEAR Protocol: Next Generation dApp Development Platform",
      updateDate: "2020-10-23",
    },
    {
      name: "PayPal Dives into Crypto: What This Means For The Ecosystem",
      updateDate: "2020-10-24",
    },
    {
      name: "Reserve Rights Review: Tokenized Pool of Stablecoins",
      updateDate: "2021-10-08",
    },
    {
      name: "BlockSettle Review: Complete Exchange Overview",
      updateDate: "2020-11-01",
    },
    {
      name: "Ocean Protocol Review: Decentralised Web 3.0 Data Economy",
      updateDate: "2020-11-06",
    },
    {
      name: "Quant Network Review: The Interoperable Blockchain OS",
      updateDate: "2020-11-13",
    },
    {
      name: "Barry Silbert: Head of the New World Order of Crypto",
      updateDate: "2020-11-08",
    },
    {
      name: "Nexus Mutual Review (NXM): Defi Smart Contract Insurance",
      updateDate: "2020-11-15",
    },
    {
      name: "Top 10 Crypto Podcasts: Compared Side-by-Side",
      updateDate: "2020-11-14",
    },
    {
      name: "AAX Review: Complete Exchange Overview",
      updateDate: "2020-11-16",
    },
    {
      name: "Celsius Network Review: Crypto Lending Personified",
      updateDate: "2022-06-14",
    },
    {
      name: "Blockstack Review: Binding to Bitcoin to Build",
      updateDate: "2020-12-04",
    },
    {
      name: "Avalanche (AVAX) Review: Third Generation Blockchain",
      updateDate: "2020-11-26",
    },
    {
      name: "OInvest Review: Complete Broker Overview",
      updateDate: "2020-11-27",
    },
    {
      name: "Paxos Gold Review: Tokenized Gold Issued on Ethereum",
      updateDate: "2021-10-10",
    },
    { name: "HFTrading Review: Complete Overview", updateDate: "2020-12-31" },
    {
      name: "Didi Taihuttu: Putting His Bitcoin Where His Mouth Is",
      updateDate: "2020-12-10",
    },
    {
      name: "0Chain Review (ZCN): Blockchain Based Cloud Storage",
      updateDate: "2020-12-24",
    },
    {
      name: "101Investing Review: Complete Broker Overview",
      updateDate: "2020-12-15",
    },
    {
      name: "SingularityNET (AGI) Review: AI Meets Blockchain Tech",
      updateDate: "2020-12-18",
    },
    {
      name: "Buying Bitcoin in The UK: All The Options",
      updateDate: "2020-12-21",
    },
    {
      name: "Secret Network (SCRT) Review: Privacy Meets Compliance",
      updateDate: "2022-02-10",
    },
    {
      name: "Growth DeFi (GRO) Review: Solving Impermanent Loss",
      updateDate: "2020-12-25",
    },
    {
      name: "Michael Saylor: Man Behind the Billion Dollar Bet on Bitcoin",
      updateDate: "2020-12-25",
    },
    {
      name: "Flare Network Review: Smart Contract Network For XRP",
      updateDate: "2020-12-27",
    },
    {
      name: "SEC vs. Ripple Lawsuit Explained: Complete Overview",
      updateDate: "2021-10-12",
    },
    {
      name: "Who is Jed McCaleb? The Fresh-Faced Crypto OG",
      updateDate: "2020-12-31",
    },
    {
      name: "SwissBorg Review 2022: The Blockchain-Based Financial Management Solution",
      updateDate: "2022-06-17",
    },
    {
      name: "Haven Protocol Review: Digital Offshore Banking",
      updateDate: "2021-01-12",
    },
    {
      name: "THORChain (RUNE) Review: Interoperable Liquidity Protocol",
      updateDate: "2021-10-10",
    },
    {
      name: "Swyftx Review: Complete Exchange Overview",
      updateDate: "2021-11-13",
    },
    {
      name: "Nick Szabo: One of Crypto’s Founding Fathers",
      updateDate: "2021-01-10",
    },
    {
      name: "Internet Computer (ICP) Review: The Global Internet Computer",
      updateDate: "2021-10-11",
    },
    {
      name: "Buying CryptoCurrency in Australia: Top 4 Options",
      updateDate: "2021-01-15",
    },
    {
      name: "API3 Review: Building Decentralized APIs for Web 3.0",
      updateDate: "2021-01-20",
    },
    {
      name: "Reef Finance Review: The Gateway To DeFi",
      updateDate: "2021-10-07",
    },
    {
      name: "Pionex Review: Complete Exchange Overview",
      updateDate: "2021-10-09",
    },
    {
      name: "ChainX Review: Building Cross-Chain Interoperability",
      updateDate: "2021-01-29",
    },
    {
      name: "LTO Network Review: Hybrid Blockchain For Data Sharing",
      updateDate: "2021-01-29",
    },
    {
      name: "OPOLO Cosmos Wallet Review: Complete Overview",
      updateDate: "2021-02-19",
    },
    {
      name: "Cartesi Review (CTSI): Scaling Ethereum Smart Contracts",
      updateDate: "2022-06-17",
    },
    {
      name: "Voyager (VGX) Review: The Crypto Lending App",
      updateDate: "2021-10-07",
    },
    { name: "Top 10 Best Crypto Gifts in 2022", updateDate: "2021-12-31" },
    {
      name: "xDai (STAKE) Review: Helping Ethereum Scale",
      updateDate: "2021-02-10",
    },
    { name: "Top 10 Best Blockchain Games of 2022", updateDate: "2021-12-31" },
    {
      name: "Akropolis (AKRO) Review: DeFi Lending Aggregator",
      updateDate: "2021-02-12",
    },
    {
      name: "Mirror Protocol Review: Synthetic Asset Issuance",
      updateDate: "2021-10-12",
    },
    {
      name: "BitStarz Review: Complete Casino Overview",
      updateDate: "2021-02-22",
    },
    {
      name: "Top 10 Most Expensive Things Bought with Bitcoin",
      updateDate: "2021-02-17",
    },
    {
      name: "Polkastarter (POLS) Review: Cross Chain Dex Offerings",
      updateDate: "2021-02-21",
    },
    {
      name: "Terra (LUNA) Review: Programmable Money Protocol",
      updateDate: "2021-02-19",
    },
    {
      name: "Oraichain Review: The AI Powered Oracle System",
      updateDate: "2021-03-14",
    },
    {
      name: "Top 10 Best Crypto Instagrams to Follow",
      updateDate: "2021-02-25",
    },
    {
      name: "PancakeSwap Review: Leading AMM on Binance Smart Chain",
      updateDate: "2021-10-07",
    },
    {
      name: "1inch Exchange Review: Leading DEX Aggregator",
      updateDate: "2022-03-27",
    },
    {
      name: "The Taxman Cometh: Crypto Tax Enforcement is on the Rise",
      updateDate: "2021-03-10",
    },
    {
      name: "Badger DAO Review: The Bitcoin DeFi Platform",
      updateDate: "2021-03-13",
    },
    {
      name: "Buying Bitcoin in Canada: Step-By-Step Guide",
      updateDate: "2021-03-15",
    },
    {
      name: "Top 10 Most Expensive NFTs Sold: Market Going Crazy",
      updateDate: "2021-03-17",
    },
    {
      name: "AvaTrade Review: Complete Broker Overview",
      updateDate: "2021-03-19",
    },
    {
      name: "Flow Review: Blockchain For Next Generation Assets",
      updateDate: "2021-03-21",
    },
    {
      name: "OriginTrail (TRAC) Review: Blockchain Supply Chain Tracking",
      updateDate: "2021-03-21",
    },
    {
      name: "Rarible Review: The Next Generation NFT Marketplace",
      updateDate: "2021-03-25",
    },
    {
      name: "Ethereum 1.0 to 2.0: A Complete Beginner’s Guide",
      updateDate: "2022-06-17",
    },
    { name: "Atani Review: Complete Beginner Guide", updateDate: "2021-03-28" },
    { name: "The Top 5 Privacy Coins for 2022", updateDate: "2021-09-29" },
    {
      name: "FXAxe Review: A Transparent Way to Learn Forex Trading",
      updateDate: "2021-03-31",
    },
    {
      name: "DODO Exchange Review: Proactive Market Making DEX",
      updateDate: "2021-04-02",
    },
    {
      name: "The Top 10 Richest People in Crypto 2021",
      updateDate: "2021-04-07",
    },
    {
      name: "Helium (HNT) Review: Hotspots Meet IoT Meets Blockchain",
      updateDate: "2021-10-08",
    },
    {
      name: "Torum Review: Social Media Platform for the Crypto Space",
      updateDate: "2021-04-14",
    },
    {
      name: "ECOMI Review: Transforming the Digital Collectible Space",
      updateDate: "2021-04-15",
    },
    {
      name: "MobileCoin Review: The Signal Integrated Privacy Coin",
      updateDate: "2021-11-13",
    },
    {
      name: "Top 10 Best Personal Finance YouTubers",
      updateDate: "2021-04-16",
    },
    {
      name: "Decentral Games Review: Your Casino in The Metaverse",
      updateDate: "2021-04-20",
    },
    {
      name: "Planning for the Inevitable: How to Leave Crypto in Your Will",
      updateDate: "2021-04-22",
    },
    {
      name: "Audius Review: Connecting Fans Directly With Artists",
      updateDate: "2021-11-13",
    },
    {
      name: "Injective Protocol Review: Next Gen Synthetic Dex",
      updateDate: "2021-04-27",
    },
    {
      name: "Stacks (STX) Review: Making Bitcoin Programmable",
      updateDate: "2021-05-02",
    },
    {
      name: "Linear Finance Review: Cross Chain Synthetic Asset Trading",
      updateDate: "2021-05-08",
    },
    {
      name: "ZenGo Wallet Review: Multi Crypto Wallet Solution",
      updateDate: "2021-05-20",
    },
    {
      name: "Telcoin Review: Blockchain For The Telco Industry",
      updateDate: "2021-05-14",
    },
    {
      name: "Shiba Inu Review: Next Dogecoin or a Scam?",
      updateDate: "2021-11-13",
    },
    {
      name: "Holochain RSM: NEW and IMPROVED Blockchain!",
      updateDate: "2021-09-29",
    },
    {
      name: "Chiliz (CHZ) Review: The Fan Token Ecosystem",
      updateDate: "2021-05-28",
    },
    {
      name: "SafeMoon Review: Ponzi Scheme or Legitimate Project?",
      updateDate: "2022-03-04",
    },
    {
      name: "Livepeer Review: Decentralised Video Streaming Protocol",
      updateDate: "2021-06-03",
    },
    {
      name: "Mina Protocol Review: The Succinct Blockchain",
      updateDate: "2021-06-05",
    },
    {
      name: "Hydra Chain Review: The Unique Economic Blockchain",
      updateDate: "2021-06-16",
    },
    {
      name: "UNUS SED LEO Review: The Bitfinex Exchange Token",
      updateDate: "2021-06-11",
    },
    {
      name: "How to Mint NFTs: The Complete 101 Guide!",
      updateDate: "2021-06-17",
    },
    {
      name: "Ethernity Review: Exclusive Authenticated NFTs",
      updateDate: "2021-06-20",
    },
    {
      name: "Arweave Review: Permanent Decentralized Storage",
      updateDate: "2021-06-20",
    },
    {
      name: "Binance NFT Review: The NFT Marketplace From Binance",
      updateDate: "2021-06-25",
    },
    { name: "The Basics of Blockchain Investing", updateDate: "2022-05-13" },
    {
      name: "Tornado Cash Review: Bringing Privacy to Ethereum",
      updateDate: "2021-06-28",
    },
    {
      name: "Clover Finance Review: Foundational Layer For Cross-Chain Compatibility",
      updateDate: "2021-06-29",
    },
    {
      name: "The Basics of Crypto Trading: Complete 101 Guide",
      updateDate: "2021-07-02",
    },
    {
      name: "Investing in Cryptocurrency in 2022: Complete Guide and Top Tips",
      updateDate: "2022-05-19",
    },
    {
      name: "Convergence Finance Protocol: Putting Real Assets in DeFi",
      updateDate: "2021-07-12",
    },
    { name: "The 6 Best Password Management Tools", updateDate: "2021-07-12" },
    {
      name: "How does the Wyckoff Method apply to Cryptocurrency Markets?",
      updateDate: "2021-07-14",
    },
    { name: "Top 10 ICOs With The Highest ROI", updateDate: "2021-07-17" },
    {
      name: "Uniswap Review: Decentralised Trading Protocol",
      updateDate: "2022-05-12",
    },
    {
      name: "Getting Starting with Yield Farming: The ONLY Guide you Need",
      updateDate: "2021-08-25",
    },
    {
      name: "Trading Crypto-Related Equities: Complete Guide",
      updateDate: "2021-08-25",
    },
    {
      name: "Shrimpy Review: Automated Crypto Portfolio Management",
      updateDate: "2021-08-25",
    },
    {
      name: "Fractionalised NFTs - Making Non-Fungible Tokens Affordable",
      updateDate: "2021-11-16",
    },
    {
      name: "Blockchain Insurance Protocols: Protecting your Crypto Funds",
      updateDate: "2021-08-25",
    },
    {
      name: "Trend Trading the Crypto Markets for Fun and Profits",
      updateDate: "2021-08-25",
    },
    {
      name: "How to Build a Cryptocurrency Portfolio: Fill Your Bags!",
      updateDate: "2022-05-19",
    },
    {
      name: "dYdX: Decentralised Margin Trading Protocol",
      updateDate: "2021-08-25",
    },
    {
      name: "Thorstarter Review: The Beginning of DeFi 2.0?",
      updateDate: "2021-08-25",
    },
    {
      name: "MakerDAO: 1st Unbiased Currency and Decentralized Stablecoin",
      updateDate: "2021-08-25",
    },
    {
      name: "Guide to Investing in Crypto ETFs and Funds",
      updateDate: "2022-05-13",
    },
    {
      name: "Axie Infinity Review: NFT-Based Gaming Platform",
      updateDate: "2021-08-25",
    },
    {
      name: "How to Use TradingView to Analyze Cryptocurrencies",
      updateDate: "2021-08-25",
    },
    {
      name: "Cryptowatch: Cross-Exchange Trading Terminal",
      updateDate: "2021-11-13",
    },
    {
      name: "Top 6 Crypto-Friendly Banks: Complete List",
      updateDate: "2021-10-25",
    },
    {
      name: "Chainlink Review: Smart Contract Solutions for any Blockchain",
      updateDate: "2022-04-15",
    },
    {
      name: "Solrise Finance: Decentralised Fund Management On Solana",
      updateDate: "2021-11-13",
    },
    {
      name: "Cryptohopper Review: Complete Bot Overview",
      updateDate: "2021-08-25",
    },
    {
      name: "Crypto Staking: The Dividends Of Blockchain",
      updateDate: "2021-08-25",
    },
    {
      name: "What Are Cross-Chain Bridges: And Their Importance for DeFi",
      updateDate: "2021-08-25",
    },
    {
      name: "Crypto Trading Strategies Used by The Pros",
      updateDate: "2021-09-06",
    },
    {
      name: "How And Where To Buy OMI: Be Ready for the PUMP!!",
      updateDate: "2021-11-13",
    },
    {
      name: "Top 10 Crypto Research Tools: Finding The Next 100x Altcoin",
      updateDate: "2021-09-16",
    },
    {
      name: "Top Play to Earn Blockchain Games with Serious Earning Potential!",
      updateDate: "2022-04-24",
    },
    {
      name: "Using NiceHash For Profits: Beginners Guide ",
      updateDate: "2021-09-25",
    },
    {
      name: "Nicehash Review: The Mining Power Marketplace",
      updateDate: "2021-10-07",
    },
    {
      name: "The Top 10 Best Crypto Telegram Channels",
      updateDate: "2022-06-07",
    },
    { name: "The Top 10 Crypto YouTubers", updateDate: "2021-09-26" },
    {
      name: "Aluna Social Review: The ULTIMATE Social Trading Terminal?",
      updateDate: "2021-09-07",
    },
    {
      name: "Top Crypto Bots: Are They Still Worth It?",
      updateDate: "2021-11-13",
    },
    {
      name: "Crypto Trading Bots : Automated Money Machines?",
      updateDate: "2022-05-20",
    },
    {
      name: "Mint NFTs: Top 5 Platforms to Create and PROFIT!",
      updateDate: "2022-04-24",
    },
    {
      name: "Bitcoin Bull Market Only ‘Mid Way’ Through, No Sign of Weakness Yet: Quant Analyst PlanB",
      updateDate: "2021-10-07",
    },
    {
      name: "Polygon Overtakes Ethereum in Daily Active Addresses On Gaming Craze",
      updateDate: "2021-10-07",
    },
    {
      name: "$400,000 Bitcoin? Macro Investor Raoul Pal Makes End-Of-Cycle Predictions for BTC and ETH",
      updateDate: "2021-10-07",
    },
    {
      name: "Social Media Giant TikTok Dives Into NFT Space With Launch of First Collection",
      updateDate: "2021-10-07",
    },
    {
      name: "Best Ways to EARN Free Crypto: Easy Money?",
      updateDate: "2021-10-07",
    },
    {
      name: "Is it Dog Season? Shiba Inu Explodes 200% This Week Following Another Elon Musk Tweet",
      updateDate: "2021-10-07",
    },
    {
      name: "How Long Till $10,000 Ethereum? Technical Analyst Benjamin Cowen Examines Current State of ETH:",
      updateDate: "2021-10-07",
    },
    { name: "Top Crypto Memes of All Time", updateDate: "2022-04-24" },
    {
      name: "Institutions Think Ethereum Is the Most Compelling Crypto on the Market, According to CoinShares",
      updateDate: "2021-10-07",
    },
    {
      name: "Is Herd Mentality Driving Crypto Markets? Blockchain Tracker Santiment Analyzes Crowd Psychology Behind Bitcoin and SHIB",
      updateDate: "2021-10-07",
    },
    {
      name: "Is Bitcoin a Better Inflation Hedge Than Gold? Institutions Think So, According to JPMorgan",
      updateDate: "2021-10-08",
    },
    {
      name: "Crypto Billionaire Who Bought ETH at $1 Says Parabolic Q4 Could Be Coming Up",
      updateDate: "2021-10-08",
    },
    { name: "How and Where to Stake Ethereum", updateDate: "2022-05-12" },
    {
      name: "How to Never Miss an Airdrop, Hard Fork, Swap or Block Halving",
      updateDate: "2021-10-11",
    },
    {
      name: "Can You Crack Monero? IRS Offers Six-Figure Reward To Anyone Able to Trace XMR",
      updateDate: "2021-10-11",
    },
    {
      name: "Bet On Bitcoin Going to $10 Million A Coin, Says MicroStrategy’s Michael Saylor – This is Why",
      updateDate: "2021-10-11",
    },
    {
      name: "Bitcoin on the Verge of Massive Breakout as Critical Indicators Flash Green",
      updateDate: "2021-10-12",
    },
    {
      name: "Way Too Much Money in Crypto To Stop It Now: Billionaire Investor Chamath Palihapitiya",
      updateDate: "2021-10-12",
    },
    {
      name: "Coinbase to Launch New NFT Platform - Can The US’ Biggest Crypto Exchange Compete with Opensea?",
      updateDate: "2021-10-13",
    },
    {
      name: "Is Bitcoin Doing What Gold Did In the 1970s? Comparisons Suggest Parabolic Price Rise Could be Just Around the Corner",
      updateDate: "2021-10-13",
    },
    {
      name: "Billionaire Owns Bitcoin and Ethereum, Says ‘Gold is Kinda Worthless’",
      updateDate: "2021-10-14",
    },
    {
      name: "Bitcoin Inches From All-Time Highs With Futures ETF Slated For Trading Next Week",
      updateDate: "2021-10-15",
    },
    {
      name: "Keep Network Suddenly Explodes Almost 180% As Crypto Markets Heat Up",
      updateDate: "2021-10-15",
    },
    {
      name: "13 of the Top Crypto Influencers of 2021",
      updateDate: "2021-11-13",
    },
    {
      name: "Have You Seen This Bloomberg Report? Senior Commodity Analyst Says $100,000 Bitcoin This Year Would Be ‘Meager’",
      updateDate: "2021-10-18",
    },
    {
      name: "Don’t Expect a Giant Crash at the End of This Bull Cycle: Pantera Capital CEO Dan Morehead",
      updateDate: "2021-10-18",
    },
    {
      name: "Buy The Rumor, Sell The News? Crypto Markets Eagerly Await Bitcoin ETF Launch",
      updateDate: "2021-10-19",
    },
    {
      name: "Right Now Is The Time When All The Crypto Gains Are Made: Macro Investor Raoul Pal",
      updateDate: "2021-10-19",
    },
    {
      name: "Beyond Digital Collectibles: 6 Other Use Cases For NFTs",
      updateDate: "2021-10-22",
    },
    {
      name: "Facebook Partners With Coinbase For Pilot Launch of New Digital Wallet Novi",
      updateDate: "2021-10-20",
    },
    {
      name: "New Bitcoin Futures ETF Becomes Second Most Traded Fund Of All Time",
      updateDate: "2021-10-20",
    },
    {
      name: "Crypto Winning The Race Against Gold, Says Hedge Fund Billionaire Paul Tudor Jones",
      updateDate: "2021-10-21",
    },
    {
      name: "Bitcoin Breaks All-Time Highs As Crypto Markets Reach $2.7 Trillion Mark",
      updateDate: "2021-10-21",
    },
    {
      name: "Solana Spikes Above $200 To Lead Crypto Market Gains",
      updateDate: "2021-11-13",
    },
    {
      name: "Entire Section Of Fans Gets $500 Worth of Crypto From FTX At Miami Heat Season Opener",
      updateDate: "2021-11-13",
    },
    {
      name: "Ellipal Titan Wallet Review- Next Generation of Hardware Wallet?",
      updateDate: "2022-05-12",
    },
    {
      name: "Kevin O’Leary Of Shark Tank Says NFT Market Will Be ‘Absolutely Huge’, Names One Big Use-Case",
      updateDate: "2021-10-25",
    },
    {
      name: "Bitcoin $135,000 In December? Crypto Analyst PlanB Gives An Update On Bull Market Projection",
      updateDate: "2021-10-25",
    },
    {
      name: "Amp Token Review: Paving the Way for Digital Payments?",
      updateDate: "2021-10-28",
    },
    {
      name: "Is It Time For Cardano to Pop? Here’s What The Analysts Think About ADA",
      updateDate: "2021-10-26",
    },
    {
      name: "Elon Disappoints SHIB Holders, But Tesla May be Accepting Bitcoin Payments Again",
      updateDate: "2021-10-26",
    },
    {
      name: "1INCH Explodes Over 100% As Crypto Exchange Upbit Announces Listing",
      updateDate: "2021-10-27",
    },
    {
      name: "Bitcoin Below $60K for the First Time in 10 Days – Should You Buy the Dip?",
      updateDate: "2021-10-27",
    },
    {
      name: "Someone Just Turned $8000 Worth of SHIB Into $5.7 Billion",
      updateDate: "2021-10-28",
    },
    {
      name: "El Salvador Buys The Dip (Again), President Bukele Grabs Another 420 BTC",
      updateDate: "2021-10-28",
    },
    {
      name: "Make a Killing on the Cute and Potentially Lethal PancakeSwap",
      updateDate: "2021-10-31",
    },
    {
      name: "Top 8 Mobile Wallets: Safe, Secure and Portable",
      updateDate: "2022-05-12",
    },
    {
      name: "Ethereum Breaks All-Time Highs As Bitcoin Hangs Out Over $60,000",
      updateDate: "2021-10-29",
    },
    {
      name: "Mastercard Gets Deep Into Crypto, CEO Says Big Opportunities Await In the Industry",
      updateDate: "2021-10-29",
    },
    {
      name: "Bitcoin Records Highest Monthly Close Ever, What’s Next for BTC?",
      updateDate: "2021-11-01",
    },
    {
      name: "A Coinbase User Lost 206 Bitcoin Worth Almost $12,000,000 After Being Tricked By Fake Notification",
      updateDate: "2021-11-01",
    },
    {
      name: "The Graph: The Future of Decentralized Data Access",
      updateDate: "2021-11-04",
    },
    {
      name: "Rug Pull Epidemic Intensifies As ‘Squid Game’ Crypto Goes to Zero In Less Than a Second",
      updateDate: "2021-11-02",
    },
    {
      name: "Polkadot Hits All-Time Highs, Breaks Above $50 As Parachain Auctions Approach",
      updateDate: "2021-11-02",
    },
    {
      name: "Revain: The Future of Review Sites is on Blockchain",
      updateDate: "2022-04-24",
    },
    {
      name: "Centralized VS Decentralized: Insights Firm IntoTheBlock Examines the Battle for the Metaverse",
      updateDate: "2021-11-03",
    },
    {
      name: "Solana Making Moves: Overtakes Cardano and Sets Sights On NFT Dominance",
      updateDate: "2021-11-03",
    },
    {
      name: "Which Altcoins Will Bleed Out Against Ethereum? Analyst Benjamin Cowen Says Most Cryptos Getting Slaughtered in ETH Terms",
      updateDate: "2021-11-04",
    },
    {
      name: "Binance To Drop $115 Million On Building New Crypto Ecosystem in France",
      updateDate: "2021-11-04",
    },
    {
      name: "Crypto Is The Fastest, Largest Redistribution of Wealth In All Recorded History: Raoul Pal",
      updateDate: "2021-11-05",
    },
    {
      name: "New York City Mayor Wants His First Three Pay Checks In Bitcoin",
      updateDate: "2021-11-05",
    },
    { name: "YouHodler: Too Good To Be True?", updateDate: "2021-11-08" },
    {
      name: "Atari Chain: Retro Gaming to Blockchain Future",
      updateDate: "2022-04-24",
    },
    {
      name: "Crypto Market Cap Reaches Record $3 Trillion Mark As Bitcoin, Ethereum, Binance Coin All Pump",
      updateDate: "2021-11-08",
    },
    {
      name: "Every Big Bank WIll Eventually Start Trading Crypto: Former Citigroup CEO Vikram Pandit",
      updateDate: "2021-11-08",
    },
    {
      name: "Sentiment Analysis for Crypto: Featuring FEAR and GREED!",
      updateDate: "2021-11-13",
    },
    {
      name: "Solana Partners With Brave Browser to Become Default for DApp Support",
      updateDate: "2021-11-09",
    },
    {
      name: "Investor Conviction At All-Time Highs As Bitcoin Smashes Through $68,000 Level",
      updateDate: "2021-11-09",
    },
    {
      name: "China and USA In Middle of Crypto Cold War: Bloomberg’s Mike McGlone",
      updateDate: "2021-11-10",
    },
    {
      name: "Loopring On Endless Tear, Up 755% In Less Than Two Weeks",
      updateDate: "2021-11-10",
    },
    {
      name: "Social Media Giant Twitter Launches New Crypto Team to Integrate Blockchain to Platform",
      updateDate: "2021-11-11",
    },
    {
      name: "Ethereum Will Replace Bitcoin: Citadel’s Ken Griffin",
      updateDate: "2021-11-11",
    },
    {
      name: "FTX Review: The BEST Crypto Exchange Ever?",
      updateDate: "2022-06-10",
    },
    {
      name: "Crypto Investing: 8 Blockchain Games you NEED to Check Out!",
      updateDate: "2022-05-13",
    },
    {
      name: "Miami Residents to Receive ‘Bitcoin Yields’ For Staking New MiamiCoin",
      updateDate: "2021-11-12",
    },
    {
      name: "Here’s Why Bitcoin Will Go Up Forever, According to MicroStrategy’s Michael Saylor",
      updateDate: "2021-11-12",
    },
    { name: "Get DeFi Yields for NFTs at Drops.co", updateDate: "2021-11-16" },
    {
      name: "NFT-Related Searches On Google Explode To New All-Time Highs As Nascent Space Heats Up",
      updateDate: "2021-11-15",
    },
    {
      name: "Bitcoin Will Easily Reach $500,000 A Coin: SkyBridge CEO Anthony Scaramucci",
      updateDate: "2021-11-15",
    },
    {
      name: "The FUTURE of Blockchain Gaming: Early Days, Potential GAINS?",
      updateDate: "2022-04-24",
    },
    {
      name: "CEO of Apple Tim Cook Says He Owns Cryptocurrency – Is Apple The Next Tech Titan to Hold BTC?",
      updateDate: "2021-11-16",
    },
    {
      name: "President Biden Signs Infrastructure Bill Into Law As Senators Try to Amend Crypto Provision",
      updateDate: "2021-11-16",
    },
    {
      name: "Should You Use Bitcoin ETFs for Bitcoin Exposure?",
      updateDate: "2021-11-17",
    },
    { name: "Crypto Passive Income for Beginners", updateDate: "2021-11-20" },
    {
      name: "Global Exchange Binance Releases Crypto Bill of Rights For Traders",
      updateDate: "2021-11-17",
    },
    {
      name: "Sam Bankman-Fried of FTX Says NFTs Will Bring Crypto to The Masses",
      updateDate: "2021-11-17",
    },
    {
      name: "Scary Chart Suggests Gigantic Ethereum Rally Incoming, Says Real Vision’s Raoul Pal",
      updateDate: "2021-11-18",
    },
    {
      name: "Iconic British Auction House Sotheby’s To Allow Live Bidding On Banksy Art With ETH",
      updateDate: "2021-11-18",
    },
    {
      name: "Crypto Exchange Gemini Raises $400 Million To Save World From Facebook’s Version of Metaverse",
      updateDate: "2021-11-19",
    },
    {
      name: "End of Non-Fungible Tokens? Torrent Site With Every Ethereum and Solana NFT Launches",
      updateDate: "2021-11-19",
    },
    {
      name: "US Navy Exploring Using IoTeX to Monitor Supply Chain Logistics: Report",
      updateDate: "2021-11-22",
    },
    {
      name: "El Salvador Launches Futuristic ‘Bitcoin City’ Project Backed by $1 Billion in BTC Bonds",
      updateDate: "2021-11-22",
    },
    {
      name: "How to Launch your Blockchain Career Today!",
      updateDate: "2022-06-07",
    },
    {
      name: "Metaverse Narrative Accelerates As The Sandbox (SAND) Defies Crypto Correction This Week With 100% Rally",
      updateDate: "2021-11-23",
    },
    {
      name: "Banking Titan Citigroup Launches 100-Staffer Hiring Spree For New Crypto Division: Report",
      updateDate: "2021-11-23",
    },
    {
      name: "GameFi NFTs Far More Than “just” Art : What to Buy?",
      updateDate: "2021-11-26",
    },
    {
      name: "ASIC Head Says Rise of Crypto ‘Impossible to Ignore’",
      updateDate: "2021-11-24",
    },
    {
      name: "Crypto Giant Grayscale: Metaverse $1 Trillion in Opportunities",
      updateDate: "2021-11-25",
    },
    {
      name: "Coinbase Acquires Bread Wallet: BRD Token MOONS 840%",
      updateDate: "2021-11-25",
    },
    {
      name: "Bitcoin Whales Scoop Up Tasty Discounts",
      updateDate: "2021-11-26",
    },
    {
      name: "Basic Attention Token Quietly Rallies 120% in November",
      updateDate: "2021-11-26",
    },
    {
      name: "The Lightning Network Electrifies Bitcoin",
      updateDate: "2021-11-30",
    },
    {
      name: "Bitcoin Surpasses PayPal in Transaction Volume: Mastercard Next?",
      updateDate: "2021-11-29",
    },
    {
      name: "Invesco Set to Launch Spot Bitcoin ETP In Europe",
      updateDate: "2021-11-29",
    },
    {
      name: "Shiba Inu Expands to Metaverse, Listed On Kraken Exchange",
      updateDate: "2021-11-30",
    },
    {
      name: "Federal Reserve Could Kill Crypto Rallies In 2022",
      updateDate: "2021-11-30",
    },
    {
      name: "Cardano Smashes 20 Million Transaction Mark: Bullish ADA Reversal Coming?",
      updateDate: "2021-12-01",
    },
    {
      name: "Venture Capital Firm Starts New Half-Billion Fund Focused On Algorand",
      updateDate: "2021-12-01",
    },
    { name: "Utility NFTs: NFTs with Real Muscle", updateDate: "2021-12-09" },
    {
      name: "Play-To-Earn and NFTs: The Future of Gaming? What you NEED to Know!",
      updateDate: "2022-05-06",
    },
    {
      name: "SEC Chair Gary Gensler Says Bitcoin in Competition with US Banking System",
      updateDate: "2021-12-02",
    },
    {
      name: "How To Create a Crypto Portfolio That Can Survive a Bear Market",
      updateDate: "2021-12-07",
    },
    {
      name: "Bank of America Names Metaverse as ‘Massive’ Opportunity",
      updateDate: "2021-12-02",
    },
    {
      name: "Regulators Should Embrace Stablecoin Technology",
      updateDate: "2021-12-03",
    },
    {
      name: "Researchers Say Ethereum Superior Store of Value vs Bitcoin",
      updateDate: "2021-12-03",
    },
    {
      name: "Binance Joins $200 Million Fund For Blockchain Gaming Projects",
      updateDate: "2021-12-06",
    },
    {
      name: "Raoul Pal: Ethereum to $20,000 By March ‘At the Latest’",
      updateDate: "2021-12-06",
    },
    {
      name: "Top Crypto Executives To Testify in Washington At Digital Assets Hearing",
      updateDate: "2021-12-28",
    },
    {
      name: "Glassnode Looks at causes for Recent Bitcoin Crash",
      updateDate: "2021-12-07",
    },
    {
      name: "What is Web 3.0 and Why it Has Insane Potential",
      updateDate: "2022-04-23",
    },
    {
      name: "Visa Launches New Crypto Consulting Branch Amid Surging Interest",
      updateDate: "2021-12-08",
    },
    {
      name: "Billionaire Predicts Bitcoin to $1 Million if USD Loses Reserve Status",
      updateDate: "2021-12-08",
    },
    {
      name: "Top 10 Crypto Research Tools: Where To Do Your Own Research?",
      updateDate: "2022-06-07",
    },
    {
      name: "Stablecoins Not a Threat to US Dollar: They Make it Stronger",
      updateDate: "2021-12-09",
    },
    {
      name: "Tezos Jumps Following Partnership With Gaming Developer",
      updateDate: "2021-12-09",
    },
    {
      name: "Top 7 Solana Wallets: A Home for your SOL Tokens",
      updateDate: "2021-12-22",
    },
    {
      name: "WhatsApp Tests Out New Crypto Payments Feature",
      updateDate: "2021-12-10",
    },
    {
      name: "Florida Governor Proposes $700,000 Allocation to Promote Crypto-Friendly State",
      updateDate: "2021-12-11",
    },
    {
      name: "$240 Billion UAE Sovereign Wealth Fund To Invest In Crypto",
      updateDate: "2021-12-13",
    },
    {
      name: "Wells Fargo, HSBC to Settle Forex Transactions Using Blockchain",
      updateDate: "2021-12-13",
    },
    {
      name: "Coinbase Launches New DeFi Yield Platform",
      updateDate: "2021-12-14",
    },
    {
      name: "​​Dogecoin Soaring After Elon Musk Says Tesla Will Sell Merch for DOGE",
      updateDate: "2021-12-14",
    },
    {
      name: "Karura: THE all-in-one DeFi hub of Kusama",
      updateDate: "2022-04-23",
    },
    {
      name: "Avalanche Jumps 17% After Integration With USDC Stablecoin",
      updateDate: "2021-12-15",
    },
    {
      name: "SEC Commissioners Say Chairman Gensler Falling Short on Crypto Clarity",
      updateDate: "2021-12-15",
    },
    {
      name: "Markets Rally after FOMC Meeting - ETH Holding above $4,000",
      updateDate: "2021-12-16",
    },
    {
      name: "DeVere CEO Nigel Green Says Panic Sellers Are a Gift to Wealthy Crypto Investors",
      updateDate: "2021-12-16",
    },
    {
      name: "FTX US Review 2022: The BEST Crypto Exchange for US Traders?",
      updateDate: "2022-06-10",
    },
    {
      name: "Former SEC Chair Jay Clayton is a Believer in Crypto Technology",
      updateDate: "2021-12-17",
    },
    {
      name: "Consensys Collaborates with Mastercard On New Privacy-Focused Rollups",
      updateDate: "2021-12-18",
    },
    {
      name: "Top 9 Projects In The Solana Ecosystem: Huge Potential!",
      updateDate: "2022-06-07",
    },
    {
      name: "Polygon and Reddit Co-Founder Launch $200 Million Web3 Fund",
      updateDate: "2021-12-20",
    },
    {
      name: "BIS Chief Hints At World Wide Crypto Regulations in 2022: Report",
      updateDate: "2021-12-20",
    },
    {
      name: "Binance Signs Deal To Establish Crypto Hub In Dubai",
      updateDate: "2021-12-21",
    },
    {
      name: "Crypto Exchange BitMEX To Airdrop Its New Native Token",
      updateDate: "2021-12-21",
    },
    {
      name: "Gaming NFTs Generate Over $2.3 Billion In Just Three Months",
      updateDate: "2021-12-22",
    },
    {
      name: "Scams and Rug Pulls Took Over $7.7 Billion From Crypto Investors This Year",
      updateDate: "2021-12-22",
    },
    {
      name: "Crypto Charities and Donations: Embrace The Gift of Giving",
      updateDate: "2021-12-24",
    },
    {
      name: "Unstoppable Domains for ALL your Crypto Domain Needs",
      updateDate: "2022-04-22",
    },
    {
      name: "75% of Firms say Crypto and Financial Services will be Integrated",
      updateDate: "2021-12-23",
    },
    {
      name: "Visa Buys Ripple Partner CurrencyCloud in $900 Million Deal",
      updateDate: "2021-12-23",
    },
    {
      name: "The Sandbox Review: Have we missed the Boat?!",
      updateDate: "2021-12-28",
    },
    {
      name: "TradeSanta Review: Merry Trading or Mischievous Bots",
      updateDate: "2022-04-22",
    },
    {
      name: "Kraken Will Allow Customers to Take Out Loans Against Their NFTs",
      updateDate: "2021-12-24",
    },
    { name: "PwC Buys Virtual Land In The Sandbox", updateDate: "2021-12-24" },
    {
      name: "US Senator Plans on Introducing Comprehensive Crypto Bill in 2022: Report",
      updateDate: "2021-12-28",
    },
    {
      name: "Cardano’s Charles Hoskinson Reveals Roadmap for 2022",
      updateDate: "2021-12-28",
    },
    {
      name: "Top 5 (CeFi) Lending Platforms: Earn Interest While HODLING",
      updateDate: "2022-06-13",
    },
    {
      name: "Insights Firm Arcane Research Makes List of 2022 Predictions",
      updateDate: "2021-12-29",
    },
    {
      name: "Bitcoin ATMs Skyrocket Worldwide in 2021",
      updateDate: "2021-12-29",
    },
    {
      name: "Hedge Fund Manager Tom Lee Says $200,000 BTC ‘Achievable’ in 2022",
      updateDate: "2021-12-30",
    },
    {
      name: "Raoul Pal Predicts Q1 Institutional FOMO for Crypto Markets",
      updateDate: "2021-12-30",
    },
    { name: "How Safe is Decentralized Finance?", updateDate: "2022-04-22" },
    {
      name: "FTX US Prepares to Offer NFTs, Derivatives, and Tokenized Stocks",
      updateDate: "2021-12-31",
    },
    {
      name: "Historically January is a GREAT Month for Crypto",
      updateDate: "2021-12-31",
    },
    {
      name: "Yield Guild Games: The BEST Guild In GameFi?",
      updateDate: "2022-01-02",
    },
    {
      name: "Cardano Leads Crypto Markets in Development Activity",
      updateDate: "2022-01-03",
    },
    {
      name: "Terra The Most Promising Altcoin of 2022: Pantera Capital’s Dan Morehead",
      updateDate: "2022-01-03",
    },
    {
      name: "OpenDAO Airdrops SOS on OpenSea Community",
      updateDate: "2022-01-07",
    },
    {
      name: "MANA, AXS and SAND: CNBC Analyst Brian Kelly Bullish on The Metaverse",
      updateDate: "2022-01-04",
    },
    {
      name: "Time For a Bitcoin Rally? BTC Struggles Below $50k As Analysts Debate What’s Next",
      updateDate: "2022-01-04",
    },
    {
      name: "Cathie Wood’s ARK Invest Releases Its Own Whitepaper On Bitcoin On-Chain Data",
      updateDate: "2022-01-05",
    },
    {
      name: "Tech Giant Samsung to Use Cardano Blockchain for Reforestation Program",
      updateDate: "2022-01-05",
    },
    {
      name: "Crypto Investment Products: The Key to Mass Adoption?",
      updateDate: "2022-04-22",
    },
    {
      name: "Ethereum DeFi Dominance Not a Given: JPMorgan",
      updateDate: "2022-01-06",
    },
    {
      name: "Aave Launches New Liquidity Pool With 30 Institutions Already On Board",
      updateDate: "2022-01-06",
    },
    {
      name: "Why Bitcoin and Crypto Are Crashing (Hint: It’s the Fed)",
      updateDate: "2022-01-07",
    },
    {
      name: "Vitalik Buterin Proposes New Ethereum Fee Structure",
      updateDate: "2022-01-07",
    },
    {
      name: "What is the Crypto Fear and Greed Index?",
      updateDate: "2022-04-22",
    },
    {
      name: "Kadena Deepdive! The Blockchain Trilemma solved?!",
      updateDate: "2022-01-11",
    },
    {
      name: "50% of All Financial Transactions Ethereum-based Within Ten Years",
      updateDate: "2022-01-10",
    },
    {
      name: "GALA Games Review: Everything you NEED to Know",
      updateDate: "2022-01-13",
    },
    {
      name: "PayPal Looking At Launching New Stablecoin",
      updateDate: "2022-01-10",
    },
    {
      name: "Heavyweight Bout of Crypto Exchanges in 2022, Who Will WIN? FTX vs Binance",
      updateDate: "2022-04-30",
    },
    {
      name: "Associated Press to Launch New NFT Marketplace Using Polygon",
      updateDate: "2022-01-11",
    },
    {
      name: "Billionaire Investor Says Bitcoin is an Insurance Policy",
      updateDate: "2022-01-11",
    },
    {
      name: "Bitcoin and Inflation: Is it an Inflation Hedge?",
      updateDate: "2022-04-22",
    },
    {
      name: "Fed Chair Jerome Powell Says Report on Digital Currencies Ready to Go in Coming Weeks",
      updateDate: "2022-01-12",
    },
    {
      name: "Crypto and TradFi Merging As One, According to the IMF",
      updateDate: "2022-01-12",
    },
    {
      name: "Explaining Bitcoin and Crypto To Your Family",
      updateDate: "2022-01-26",
    },
    {
      name: "Coinbase Acquires Derivatives Exchange FairX",
      updateDate: "2022-01-13",
    },
    {
      name: "Visa Teams Up With Consensys to Build Technology for CBDCs",
      updateDate: "2022-01-13",
    },
    { name: "Will Ethereum Flip Bitcoin in 2022?", updateDate: "2022-06-17" },
    {
      name: "Solana Could Become The ‘Visa of Crypto’: Bank of America",
      updateDate: "2022-01-14",
    },
    {
      name: "FTX and Bitstamp Explore Expansion Into Stock Trading",
      updateDate: "2022-01-14",
    },
    {
      name: "Walmart Launching Its Own Cryptocurrency and NFT Marketplace",
      updateDate: "2022-01-17",
    },
    {
      name: "GameFi and NFTs Remain Strong Despite Crypto Decline: DappRadar Report",
      updateDate: "2022-01-17",
    },
    {
      name: "Icon (ICX) Review: Potentially Undervalued?",
      updateDate: "2022-03-08",
    },
    {
      name: "Polygon Activates EIP-1559 Upgrade, MATIC Starts Burning",
      updateDate: "2022-01-18",
    },
    {
      name: "Cardano Takes Off On DEX Launch, ADA Up 35% In a Week",
      updateDate: "2022-01-18",
    },
    {
      name: "Microsoft makes a Metaverse Move, Buys Activision for $69 Billion",
      updateDate: "2022-01-19",
    },
    {
      name: "Cardano Metaverse Project Pavia sees Virtual Land Grab",
      updateDate: "2022-01-19",
    },
    {
      name: "FTX vs Coinbase Review 2022: Which one is BEST?",
      updateDate: "2022-06-10",
    },
    {
      name: "Secret Network Doubles in a Month, Sees $400 Million In Funding",
      updateDate: "2022-01-20",
    },
    {
      name: "Pantera Capital Makes 2022 Predictions on NFTs, Layer 2s, and Ethereum Competitors",
      updateDate: "2022-01-20",
    },
    {
      name: "Algorithmic Stablecoins- Everything you NEED to Know!",
      updateDate: "2022-01-21",
    },
    {
      name: "Fed Finally Releases Full Report on Digital Assets",
      updateDate: "2022-01-21",
    },
    {
      name: "Cardano Deep Dive: Info you NEED about Cardano and ADA",
      updateDate: "2022-04-22",
    },
    {
      name: "NFT Trading Comes to Facebook and Instagram: Report",
      updateDate: "2022-01-21",
    },
    {
      name: "Biden Administration To Publish Government Strategy On Crypto",
      updateDate: "2022-01-24",
    },
    {
      name: "NFTs See Massive Growth Despite Crypto Market Downturn",
      updateDate: "2022-01-24",
    },
    {
      name: "Former Goldman Sachs CEO Admits ‘Crypto is Happening’",
      updateDate: "2022-01-25",
    },
    {
      name: "South Korea Aiming to Control the Metaverse",
      updateDate: "2022-01-25",
    },
    {
      name: "Will GameFi be Bigger than DeFi? Blockchain Gaming Levels Up",
      updateDate: "2022-01-28",
    },
    {
      name: "Facebook Giving Up On Stablecoin Project? Execs Looking to Sell Assets",
      updateDate: "2022-01-26",
    },
    {
      name: "YouTube Could Introduce NFTs, According to CEO Letter",
      updateDate: "2022-01-26",
    },
    {
      name: "OKcoin-Fee Free Earning and Low Fee Trading!",
      updateDate: "2022-04-22",
    },
    {
      name: "FTX US Makes $8 Billion Valuation In Latest Funding Raise",
      updateDate: "2022-01-27",
    },
    {
      name: "Bitcoin Reacts to FED Meeting As Rates Likely To Change In March",
      updateDate: "2022-01-27",
    },
    {
      name: "Immutable X: The Future of NFTs and Play-to-earn Gaming?",
      updateDate: "2022-01-30",
    },
    {
      name: "Apple CEO Tim Cook Hints At Metaverse Investment",
      updateDate: "2022-01-28",
    },
    {
      name: "FTX vs KuCoin Review 2022: Which Exchange is Best for YOU?",
      updateDate: "2022-06-10",
    },
    { name: "Arbitrum: The Complete 101 Guide", updateDate: "2022-02-08" },
    {
      name: "Coinbase To List Crypto Assets from Solana Ecosystem",
      updateDate: "2022-01-31",
    },
    {
      name: "Chinese Government Launches Nationwide Initiative to Develop Blockchain Technology",
      updateDate: "2022-01-31",
    },
    {
      name: "India Introduces 30% Tax On All Crypto Income",
      updateDate: "2022-02-01",
    },
    {
      name: "Arizona Senator Proposes Law to Make Bitcoin (BTC) Legal Tender",
      updateDate: "2022-02-02",
    },
    {
      name: "Willy Woo says On-Chain Bitcoin Fundamentals Screaming Bullish",
      updateDate: "2022-02-02",
    },
    {
      name: "New Malware Targets Metamask And 40 Other Crypto Wallets",
      updateDate: "2022-02-03",
    },
    {
      name: "Best Crypto Related Stocks For Investors: Huge Upside!",
      updateDate: "2022-02-09",
    },
    {
      name: "Is Bitcoin Mining REALLY Bad for the Environment?",
      updateDate: "2022-04-22",
    },
    {
      name: "UK Tax Regulator Updates Guidance on Staking and DeFi Lending",
      updateDate: "2022-02-03",
    },
    {
      name: "Alphabet Exploring Blockchain Technology for Main Products and Services",
      updateDate: "2022-02-03",
    },
    {
      name: "GameStop Announces Plans for NFT Marketplace",
      updateDate: "2022-02-04",
    },
    {
      name: "Investors Wait for Outcome of IRS Crypto Staking Case",
      updateDate: "2022-02-04",
    },
    {
      name: "NFT Scams: How to Avoid them and Keep SAFE!",
      updateDate: "2022-02-09",
    },
    {
      name: "US Officials Reintroduce Tax Relief Bill For Small Crypto Transactions",
      updateDate: "2022-02-07",
    },
    { name: "China Debuts Digital Yuan At Olympics", updateDate: "2022-02-07" },
    {
      name: "A Quarter of All People Will Spend an Hour a Day In The Metaverse In Four Years",
      updateDate: "2022-02-08",
    },
    {
      name: "Top Crypto Firms Join Coalition to Promote Regulatory Integrity",
      updateDate: "2022-02-08",
    },
    {
      name: "Celsius Upgrades App, becomes your New Home for Crypto",
      updateDate: "2022-06-13",
    },
    {
      name: "Stolen Bitfinex Crypto Recovered - Feds Seize $3.6 Billion in BTC",
      updateDate: "2022-02-09",
    },
    {
      name: "Americans Choosing Crypto Investments Over Traditional Savings Account: New Survey",
      updateDate: "2022-02-09",
    },
    {
      name: "GensoKishi: A Blockchain Gaming Revolution",
      updateDate: "2022-02-11",
    },
    { name: "Wear-to-earn NFTs: For Real?", updateDate: "2022-02-18" },
    { name: "Top Crypto Tax-Friendly Jurisdictions", updateDate: "2022-04-22" },
    {
      name: "Samsung Integrates Crypto Wallet In New Phone",
      updateDate: "2022-02-10",
    },
    {
      name: "European Union Says Digital Euro Coming Next Year",
      updateDate: "2022-02-11",
    },
    {
      name: "Axie Infinity Coins Go Crazy After Tokenomics Change",
      updateDate: "2022-02-11",
    },
    {
      name: "Crypto Bowl? Who Scored in the 2022 Superbowl of Crypto Ads?",
      updateDate: "2022-02-14",
    },
    {
      name: "U.S Treasury Says Crypto Miners Exempt From IRS Reporting Rules",
      updateDate: "2022-02-14",
    },
    {
      name: "Grayscale Could Convert The Bitcoin Trust to an ETF, Investors Firmly in Support",
      updateDate: "2022-02-15",
    },
    {
      name: "Crypto Markets Reclaim $2 Trillion Mark After Canada Tightens Control over Financial System",
      updateDate: "2022-02-15",
    },
    {
      name: "JPMorgan Releases Full White Paper On Metaverse",
      updateDate: "2022-02-16",
    },
    {
      name: "US Senator Introduces New ‘Keep Your Coins’ Bitcoin Bill: Report",
      updateDate: "2022-02-16",
    },
    {
      name: "Coinbase, Kraken, And 16 Other Crypto Firms Launch ‘TRUST’ Initiative",
      updateDate: "2022-02-17",
    },
    {
      name: "Twitter Brings in Support for Ethereum Tipping",
      updateDate: "2022-02-17",
    },
    {
      name: "Binance vs KuCoin Review 2022: Which Exchange is the Winner?",
      updateDate: "2022-06-10",
    },
    {
      name: "Feds Launch Digital Currency Enforcement Unit",
      updateDate: "2022-02-18",
    },
    {
      name: "Crypto About to Decouple From Traditional Financial Markets",
      updateDate: "2022-02-18",
    },
    {
      name: "White House To Put Forth Crypto Executive Order This Week",
      updateDate: "2022-02-21",
    },
    {
      name: "Federal Reserve Still Undecided On US CBDC",
      updateDate: "2022-02-21",
    },
    { name: "Blockchain Gaming coming to FTX.us", updateDate: "2022-02-22" },
    {
      name: "Crypto Markets Bleed $140 Billion amid Russia/Ukraine Tensions",
      updateDate: "2022-02-22",
    },
    {
      name: "Manchester City Enters the Metaverse with a Replica of Etihad Stadium",
      updateDate: "2022-02-23",
    },
    {
      name: "Stablecoin Economy Continues to Grow, Adding 10% in 2022",
      updateDate: "2022-02-23",
    },
    {
      name: "Top Blockchain Conferences 2022: Where to get industry insight?",
      updateDate: "2022-06-07",
    },
    {
      name: "Esports and P2E Models will be Keys to Blockchain Gaming Adoption in 2022",
      updateDate: "2022-02-24",
    },
    { name: "EU on Track to Ban Bitcoin", updateDate: "2022-02-25" },
    { name: "Coinbase tops Earnings Expectations", updateDate: "2022-02-25" },
    {
      name: "Crypto Exchanges considering Freezing Russian Assets",
      updateDate: "2022-03-01",
    },
    {
      name: "$187 Million Investment by South Korea in a National Metaverse",
      updateDate: "2022-02-28",
    },
    {
      name: "Bank of America Says No Crypto Winter, Citing Develpper Activity and User Growth",
      updateDate: "2022-03-01",
    },
    {
      name: "Russia Sanctions Pose a Key Moment for Crypto Exchanges",
      updateDate: "2022-03-01",
    },
    {
      name: "Crypto Industry Rejects Politicians Pushing Exchanges to Block Russian Users",
      updateDate: "2022-03-02",
    },
    {
      name: "BitConnect Mastermind Indicted for $2.4 Billion Scam - But Authorities Can’t Find Him",
      updateDate: "2022-03-02",
    },
    {
      name: "Metaverse 101: A Beginners Guide to the Metaverse",
      updateDate: "2022-04-22",
    },
    {
      name: "SEC Going After NFTs? Reports Say Regulator Concerned About Illegal Token Offerings",
      updateDate: "2022-03-03",
    },
    {
      name: "Investment Titan Charles Schwab Files for ‘Crypto Economy’ ETF",
      updateDate: "2022-03-03",
    },
    {
      name: "Vast Majority of Investors in Emerging Markets Plan to Increase their Crypto Investments",
      updateDate: "2022-03-04",
    },
    {
      name: "Researchers, Designers Working on Metaverse Museums",
      updateDate: "2022-03-04",
    },
    {
      name: "Prominent DeFi Developer Calls It Quits, Causing Corrections In Some Altcoins",
      updateDate: "2022-03-07",
    },
    {
      name: "Binance Launches Its Own Payments System",
      updateDate: "2022-03-07",
    },
    {
      name: "US Executive Order On Crypto Expected This Week",
      updateDate: "2022-03-08",
    },
    {
      name: "FinCEN Mentions Crypto in New Warning On Russia Sanctions",
      updateDate: "2022-03-08",
    },
    {
      name: "SundaeSwap: Decentralized Finance on Cardano",
      updateDate: "2022-04-22",
    },
    {
      name: "File Sharing Platform LimeWire Makes Comeback as Web3 NFT Marketplace",
      updateDate: "2022-03-09",
    },
    {
      name: "Crypto Markets Bounce After Leak of Treasury Chair Yellen’s Comments on Executive Order",
      updateDate: "2022-03-09",
    },
    {
      name: "Tether CTO Says CBDCs Not a Threat to Stablecoin Market",
      updateDate: "2022-03-10",
    },
    {
      name: "Bain Capital Launches Half-Billion Crypto Investment Branch",
      updateDate: "2022-03-10",
    },
    {
      name: "OKX Exchange: Complete Rebranding Overview",
      updateDate: "2022-05-05",
    },
    {
      name: "Alchemix: Real Magic at Work or a Brewing SCAM?",
      updateDate: "2022-03-16",
    },
    {
      name: "MELD Protocol: DeFi Banking on Cardano",
      updateDate: "2022-03-14",
    },
    {
      name: "Polkadot: The Most Widely Held Crypto Asset Among Venture Capitalists and Hedge Funds",
      updateDate: "2022-03-11",
    },
    {
      name: "Shark Tank Billionaire Kevin O’Leary Investment Portfolio Now 20% Crypto",
      updateDate: "2022-03-14",
    },
    {
      name: "The State of Cryptocurrency Tax Reporting in 2022: Report",
      updateDate: "2022-06-10",
    },
    {
      name: "EU Votes to Reject DeFacto Ban On Bitcoin",
      updateDate: "2022-03-15",
    },
    {
      name: "PayPal CEO Gives Nod of Approval to Crypto, Expects Blockchain to Redefine Finance",
      updateDate: "2022-03-15",
    },
    {
      name: "Bitcoin’s Architecture Can Be Used For Creation of CBDC: Deloitte",
      updateDate: "2022-03-16",
    },
    {
      name: "Crypto Exchanges Race to The Middle East!",
      updateDate: "2022-03-16",
    },
    {
      name: "Banking Giant HSBC Partners With The Sandbox in Move to The Metaverse",
      updateDate: "2022-03-17",
    },
    {
      name: "US Lawmakers Call Out SEC For Putting Unnecessary Burden On Crypto, Stifling Innovation",
      updateDate: "2022-03-17",
    },
    {
      name: "Celsius vs Nexo 2022: Comparing the BEST Crypto Lending Platforms",
      updateDate: "2022-06-14",
    },
    {
      name: "Coinbase Introduces Support for Solana Ecosystem",
      updateDate: "2022-03-18",
    },
    {
      name: "European Financial Regulators Publish Warning on The Risks of Crypto Assets",
      updateDate: "2022-03-18",
    },
    {
      name: "Coinbase Hit With Lawsuit Alleging Exchange Sold 79 Different Cryptocurrencies as Unregistered Securities",
      updateDate: "2022-03-21",
    },
    {
      name: "Australia Prepares for New Crypto Regulation Overhaul: Report",
      updateDate: "2022-03-21",
    },
    {
      name: "Goldman Sachs Becomes First Major Bank to Execute OTC Crypto Trade",
      updateDate: "2022-03-22",
    },
    {
      name: "Malaysia Considering Making Bitcoin Legal Tender: Report",
      updateDate: "2022-03-22",
    },
    {
      name: "Top 5 Non-Custodial Exchanges to Keep your Keys",
      updateDate: "2022-04-22",
    },
    {
      name: "Grayscale Launches New Smart Contract Fund With Cardano, Solana, Avalanche and More",
      updateDate: "2022-03-23",
    },
    {
      name: "Hacker Steals $1.7 Million Worth of NFTs From DeFi Veteran Arthur Cheong",
      updateDate: "2022-03-23",
    },
    {
      name: "SEC Proposes Sweeping Greenhouse Gas Reporting Rules Which Would Affect Crypto Mining",
      updateDate: "2022-03-24",
    },
    {
      name: "GameStop Launches NFT Marketplace on Loopring (LRC)",
      updateDate: "2022-03-24",
    },
    {
      name: "Star Atlas: Next Generation Gaming Metaverse",
      updateDate: "2022-04-22",
    },
    {
      name: "Bank for International Settlements Partners With Four Central Banks to Develop CBDC",
      updateDate: "2022-03-25",
    },
    {
      name: "Oil Giant Exxon Experimenting With New Crypto Mining Operations: Report",
      updateDate: "2022-03-25",
    },
    {
      name: "UK To Reveal New Crypto Regulatory Regime: Report",
      updateDate: "2022-03-28",
    },
    {
      name: "Zilliqa Skyrockets 117% On New Metaverse Partnership",
      updateDate: "2022-03-28",
    },
    {
      name: "US Officials Push for Privacy-Centric CBDC in New Bill: Report",
      updateDate: "2022-03-29",
    },
    {
      name: "Grayscale May Sue the SEC Over ETF Rejections",
      updateDate: "2022-03-29",
    },
    {
      name: "Solana NFTs to Hit Opensea’s Marketplace",
      updateDate: "2022-03-30",
    },
    {
      name: "NFT Wallets: Keep your Collectibles Safe",
      updateDate: "2022-04-07",
    },
    {
      name: "Terraform Labs Founder Do Kwon Aims To Be Biggest Bitcoin Holder On Earth",
      updateDate: "2022-03-31",
    },
    {
      name: "Cardano Seeing Increase In ‘Institutional Demand’: Blockchain Analytics Firm",
      updateDate: "2022-03-31",
    },
    { name: "Rubic (RBC): DeFi For The Masses!", updateDate: "2022-04-01" },
    {
      name: "EU Votes to Crack Down On Crypto Privacy",
      updateDate: "2022-04-01",
    },
    {
      name: "Texas Senator Cruz Introduces Bill to Ban Fed From Issuing CBDCs",
      updateDate: "2022-04-01",
    },
    {
      name: "BlockFi vs Nexo 2022: Battle of the Lending Platforms",
      updateDate: "2022-04-21",
    },
    {
      name: "Big Time Studios: The Best AAA Blockchain Game?",
      updateDate: "2022-04-04",
    },
    {
      name: "Goldman Sachs To Offer Bitcoin and Crypto Services To Its Richest Clients",
      updateDate: "2022-04-04",
    },
    {
      name: "Trezor Warns Customers of Phishing Scam After MailChimp Gets Hacked",
      updateDate: "2022-04-04",
    },
    {
      name: "UK Government Plans to Release New NFT, Sees ‘Enormous Potential’ In Crypto",
      updateDate: "2022-04-05",
    },
    {
      name: "Tezos Completes Major Upgrade that Increases Decentralization and Improves DApps",
      updateDate: "2022-04-05",
    },
    {
      name: "BlockFi vs Celsius 2022: Head to Head Review",
      updateDate: "2022-06-14",
    },
    {
      name: "Feds Seize $34 Million In Cryptocurrency From ‘Chain Hopping’ Dark Web Hustler",
      updateDate: "2022-04-06",
    },
    {
      name: "Nami Wallet: Store your ADA and Cardano NFTs",
      updateDate: "2022-04-11",
    },
    {
      name: "British Banking Giant HSBC Offers Wealthiest Clients New Metaverse Fund",
      updateDate: "2022-04-07",
    },
    {
      name: "Lightning Labs Initiative sees Stablecoin Support on the Bitcoin Network",
      updateDate: "2022-04-07",
    },
    {
      name: "Mango Markets: Sweetest Fruit on the Solana Defi Tree?",
      updateDate: "2022-04-09",
    },
    {
      name: "Tech Mogul Jack Dorsey Unveils New Hardware Wallet Prototype",
      updateDate: "2022-04-08",
    },
    {
      name: "Crypto Exchange Coinbase Opens Trading Services in India After Big Hiring Spree",
      updateDate: "2022-04-08",
    },
    {
      name: "Bitcoin as the World Reserve Currency- Possible, or Probable?",
      updateDate: "2022-04-23",
    },
    {
      name: "Hedera Hashgraph Launches $250 Million Metaverse Fund",
      updateDate: "2022-04-11",
    },
    {
      name: "Nasdaq Survey Says Most Financial Advisors Want a Spot Bitcoin ETF Before Allocating to Crypto",
      updateDate: "2022-04-12",
    },
    {
      name: "Crypto Lobbyists In Coordinated Effort to Push Lawmakers Into Passing Good Policy: Report",
      updateDate: "2022-04-12",
    },
    {
      name: "BreederDAO Review- The Ultimate Gaming NFT Scaling Solution?",
      updateDate: "2022-04-13",
    },
    {
      name: "Pantera Capital Set Raises $1.3 Billion In New Blockchain Fund",
      updateDate: "2022-04-13",
    },
    {
      name: "Investment Giant Fidelity Offers New Metaverse and Crypto Payments ETFs",
      updateDate: "2022-04-13",
    },
    {
      name: "Nexo Launches New Crypto Card That Allows Users to Pay Without Selling Their Crypto",
      updateDate: "2022-04-14",
    },
    {
      name: "Tether USDT Makes Big Expansion Into Polkadot Universe",
      updateDate: "2022-04-14",
    },
    { name: "Complete Guide to Crypto Network Fees", updateDate: "2022-04-22" },
    {
      name: "$615 Million Axie Hack Linked to North Korea By US Authorities",
      updateDate: "2022-04-15",
    },
    {
      name: "Avalanche’s Ava Labs Closes in on $5 Billion Valuation",
      updateDate: "2022-04-15",
    },
    {
      name: "Cryptojacking: Deadly Malware or Minor Annoyance?",
      updateDate: "2022-04-20",
    },
    {
      name: "4 Steps to Get Your Crypto Taxes Done Before The April 18 Deadline",
      updateDate: "2022-04-16",
    },
    {
      name: "Coin Bureau Cryptocurrency Conference 2022",
      updateDate: "2022-05-10",
    },
    {
      name: "Monero (XMR) Supporters Accuse Exchanges of Paper Trading, Coordinate a ‘Bank Run’",
      updateDate: "2022-04-18",
    },
    {
      name: "Ethereum-Based DeFi Protocol BeanStalk Loses Over $180 Million in Latest Exploit",
      updateDate: "2022-04-18",
    },
    {
      name: "Institutions, Sovereign Wealth Funds, Need Regulation Before Jumping Into Crypto: Kevin O’Leary",
      updateDate: "2022-04-22",
    },
    {
      name: "US Officials Slam SEC for Unfairly Targeting Crypto Exchanges in Latest Rule Change",
      updateDate: "2022-04-22",
    },
    {
      name: "Solana Portals - User-first Metaverse Experience",
      updateDate: "2022-04-30",
    },
    {
      name: "Algorand Review: Is Algo the Future of Finance?",
      updateDate: "2022-04-21",
    },
    {
      name: "US Air Force Files Trademark For New ‘Spaceverse’ Metaverse Technology",
      updateDate: "2022-04-22",
    },
    {
      name: "European Crypto Firms Call On Regulators To Give New Rules a Second Thought",
      updateDate: "2022-04-22",
    },
    {
      name: "Coinbase Reveals Beta-Version of New NFT Marketplace",
      updateDate: "2022-04-22",
    },
    {
      name: "IMF Report Highlights Threat of Crypto On Emerging Markets and Politics",
      updateDate: "2022-04-21",
    },
    {
      name: "European Union Officials Secretly Becoming Critical of Bitcoin: Report",
      updateDate: "2022-04-22",
    },
    {
      name: "TRON Founder Justin Sun Reveals Plans For New Algorithmic Stablecoin Backed By TRX",
      updateDate: "2022-04-22",
    },
    {
      name: "Grayscale Relaunches Push for Bitcoin ETF In Latest Application",
      updateDate: "2022-04-25",
    },
    {
      name: "NFTs Causing Headaches For Accountants During Tax Season: Report",
      updateDate: "2022-04-25",
    },
    {
      name: "Cardano Increases Block Size To Enhance Dapp Performance",
      updateDate: "2022-04-26",
    },
    {
      name: "European Central Bank Calls for ‘Globally Coordinated’ Regulation on Cryptocurrency",
      updateDate: "2022-04-26",
    },
    {
      name: "Want your Salary Paid in Crypto? Maybe you SHOULD!",
      updateDate: "2022-05-10",
    },
    {
      name: "Majority of Major Investment Houses Bullish On Crypto: New Bitstamp Report",
      updateDate: "2022-04-27",
    },
    {
      name: "Grayscale Making a Move Into European Markets: Report",
      updateDate: "2022-04-27",
    },
    { name: "Getting Fit with Move2Earn DApps", updateDate: "2022-05-05" },
    {
      name: "World’s Biggest Asset Manager BlackRock Lists New Blockchain ETF",
      updateDate: "2022-04-28",
    },
    {
      name: "Ripple CEO Unfazed By Lawsuit Troubles, Says Demand for XRP Products Surging",
      updateDate: "2022-04-28",
    },
    {
      name: "What is Mimblewimble, What Does it Do, and Why You should Care",
      updateDate: "2022-05-01",
    },
    {
      name: "Cosmos’ Evmos Goes Live On Ethereum Network",
      updateDate: "2022-04-29",
    },
    {
      name: "Messaging Giant Telegram Adds Features that Allows for Sending Crypto",
      updateDate: "2022-04-29",
    },
    {
      name: "Solana Faces Seven-Hour Outage After Bots Overwhelm NFT Minting App",
      updateDate: "2022-05-02",
    },
    {
      name: "US Senators Propose Rule To Ease Crypto Capital Gains Taxes",
      updateDate: "2022-05-02",
    },
    {
      name: "Bitcoin Mining Council Write Rebuttal to US Regulator About Environmental Impacts of Crypto",
      updateDate: "2022-05-03",
    },
    {
      name: "Investment Giant VanEck Release New NFT Collection",
      updateDate: "2022-05-03",
    },
    {
      name: "Crypto Exchange Kraken to Launch New NFT Platform With Zero Gas Fees",
      updateDate: "2022-05-04",
    },
    {
      name: "European Commission Looks At DeFi Regulation In Latest Report",
      updateDate: "2022-05-04",
    },
    {
      name: "Starbucks Says It’s Gearing Up to Release NFT Series",
      updateDate: "2022-05-05",
    },
    {
      name: "Bitcoin Miner Argo Takes Out $70 Million Loan For Texas Mining Operation",
      updateDate: "2022-05-05",
    },
    {
      name: "Coinbase Report Says Capitulation Mostly Over, Bitcoin Supply Shock In Play",
      updateDate: "2022-05-06",
    },
    {
      name: "IMF Says Bitcoin Adoption In Central Africa Raises Major Issues: Report",
      updateDate: "2022-05-06",
    },
    { name: "Hustling Along with StepN", updateDate: "2022-05-12" },
    {
      name: "Yield Guild Games Southeast Asia (YGG SEA) Review- YGG’s First Regional SubDAO",
      updateDate: "2022-05-11",
    },
    {
      name: "Argentina Bans Financial Entities from Crypto Trading As Markets Tank",
      updateDate: "2022-05-10",
    },
    {
      name: "Sudden Surge In Crypto Funds Looking to Invest In DASH: Report",
      updateDate: "2022-05-10",
    },
    {
      name: "US Treasury Secretary Janet Yellen Urges for Stablecoin Regulation Following UST Debacle",
      updateDate: "2022-05-11",
    },
    {
      name: "Crypto Exchange KuCoin Valued at $10 Billion In Latest Capital Raise",
      updateDate: "2022-05-11",
    },
    {
      name: "The Plan for Terra’s ‘Return to Form’ After Big Collapse, According to Do Kwon",
      updateDate: "2022-05-12",
    },
    {
      name: "Europe’s Largest Economy Announces Tax Break For Bitcoin and Ethereum",
      updateDate: "2022-05-12",
    },
    { name: "Coin Bureau Conference 2022 Recap", updateDate: "2022-05-23" },
    {
      name: "Terra Halts Blockchain Completely Following Massive Collapse",
      updateDate: "2022-05-13",
    },
    {
      name: "Blockchain Analytics Firm Chainalysis Valued at $8.6 Billion In Latest Raise",
      updateDate: "2022-05-13",
    },
    {
      name: "UK To Go Ahead With Stablecoin Regulations After Queen’s Approval",
      updateDate: "2022-05-16",
    },
    {
      name: "Binance CEO Changpeng Zhao Doubts Terra’s Plans for a Fork",
      updateDate: "2022-05-16",
    },
    {
      name: "European Central Bank Explores Anonymity-Focused CBDC In New Report",
      updateDate: "2022-05-17",
    },
    {
      name: "UK Crypto Investors Can Offset Losses Under New Tax Legislation: Report",
      updateDate: "2022-05-17",
    },
    {
      name: "Binance vs Coinbase in 2022- Which is the BEST Crypto Exchange?",
      updateDate: "2022-05-19",
    },
    {
      name: "G7 Countries Will Discuss Crypto Regulation In Next Meeting: Report",
      updateDate: "2022-05-18",
    },
    {
      name: "VeChain Foundation Inviting Terra Developers Over to VeChain After UST and LUNA Collapse",
      updateDate: "2022-05-18",
    },
    { name: "The 8 Best Desktop Wallets in 2022", updateDate: "2022-05-30" },
    {
      name: "Institutional Investors Dive Into Bitcoin as BTC Sees Record Capital Flows for 2022",
      updateDate: "2022-05-19",
    },
    {
      name: "Central Bank of Norway Uses Ethereum Layer 2 Solution for CBDC Pilot",
      updateDate: "2022-05-19",
    },
    {
      name: "Can you Still Make Money Mining Bitcoin in 2022?",
      updateDate: "2022-05-21",
    },
    {
      name: "Tether Releases Report On Reserves Amid Stablecoin Drama",
      updateDate: "2022-05-20",
    },
    {
      name: "FTX US Launches New Stock Trading Offerings",
      updateDate: "2022-05-20",
    },
    {
      name: "Swiss Bank to Offer Crypto Services to Wealthiest Clients",
      updateDate: "2022-05-23",
    },
    {
      name: "FTX US Review 2022: The BEST Crypto Exchange for US Traders?",
      updateDate: "1970-01-01",
    },
    {
      name: "FTX US Review 2022: The BEST Crypto Exchange for US Traders?",
      updateDate: "2022-05-23",
    },
    {
      name: "Ecommerce Giant Ebay Releases New NFT Collection on Polygon Network",
      updateDate: "2022-05-24",
    },
    {
      name: "Litecoin’s Privacy Upgrade Raises Concerns from Korean Crypto Exchanges",
      updateDate: "2022-05-24",
    },
    {
      name: "European Central Bank Report Reveals 10% of Eurozone Owns Crypto Assets",
      updateDate: "2022-05-25",
    },
    {
      name: "Chamber of Digital Commerce Slams SEC for Blocking Crypto and Preventing Explosion of Wealth: Report",
      updateDate: "2022-05-25",
    },
    {
      name: "Crypto Exchanges Show Support for Terra 2.0",
      updateDate: "2022-05-26",
    },
    {
      name: "JPMorgan States that Cryptocurrencies are now its “Preferred Alternative Asset Class”",
      updateDate: "2022-05-26",
    },
    {
      name: "Fed Vice Chair Calls for Stablecoin Regulation, But Says They Can Coexist With CBDCs",
      updateDate: "2022-05-27",
    },
    {
      name: "Stricter KYC and Sanctions Coming to Binance in Exchange’s New Partnership with Analytics Firm",
      updateDate: "2022-05-27",
    },
    {
      name: "Bitcoin and Stocks: Not the Decoupling We Were Hoping For",
      updateDate: "2022-05-30",
    },
    {
      name: "Cardano’s Hoskinson Doubles Down on Moving Slow",
      updateDate: "2022-05-30",
    },
    {
      name: "All Eyes on Bitcoin as $60 Billion Flows into Crypto in 24 Hours",
      updateDate: "2022-05-31",
    },
    {
      name: "Tron Passes AVAX and SOL in TVL, Claiming 3rd Spot After 40% Increase",
      updateDate: "2022-05-31",
    },
    {
      name: "US Conference of Mayors Introduces Blockchain Resolution",
      updateDate: "2022-06-01",
    },
    {
      name: "Bank of America CEO: Regulators are “Not Allowing” Banks to Engage with Crypto",
      updateDate: "2022-06-01",
    },
    {
      name: "Digital Land: Investing in The Metaverse",
      updateDate: "2022-06-01",
    },
    {
      name: "Algorand and MakerX Commit 1M Algo to Migrate Terra Users to Algorand",
      updateDate: "2022-06-02",
    },
    {
      name: "21Shares Releases Sixth State of Crypto Report: Summary",
      updateDate: "2022-06-02",
    },
    {
      name: "Binance Partners with The Weekend to Provide First-Ever Web 3 Enhanced World Tour",
      updateDate: "2022-06-03",
    },
    {
      name: "OKX Blockdream Ventures Invests Millions in GameFi and NFT Development on WAX",
      updateDate: "2022-06-03",
    },
    {
      name: "Bridge Mutual: Insurance for your Crypto",
      updateDate: "2022-06-18",
    },
    {
      name: "Crypto.com Exchange Review 2022: A World-Class Crypto Exchange",
      updateDate: "2022-06-14",
    },
    { name: "Gemini Exchange Review:", updateDate: "2022-06-18" },
  ];
  const searchItemList: any = [];

  const [inputValue, setInputValue] = useState("");

  function search(inputValue: any, items: Item[]) {
    items.filter((item) =>
      inputValue.split(" ").some((word: any) => {
        if (item.name.toLowerCase().includes(word)) {
          searchItemList.push(item);
        }
      })
    );

    const sortAccordingOccerence = searchItemList.sort((a: any, b: any) => {
      const newDateC = new Date(a.updateDate);
      const newDateD = new Date(b.updateDate);
      const aCount =
        searchItemList.filter((newItem: any) => newItem === a).length *
          100000000000 || newDateC.getTime();
      const bCount =
        searchItemList.filter((newItem: any) => newItem === b).length *
          100000000000 || newDateD.getTime();

      return bCount - aCount;
    });

    // const sortAccordingDate = sortAccordingOccerence.sort((a: any, b: any) => {
    //   const newDateC = new Date(a.updateDate);
    //   const newDateD = new Date(b.updateDate);

    //   console.log(newDateD.getTime() - newDateC.getTime());

    //   return newDateD.getTime() - newDateC.getTime();
    // });

    return Array.from(new Set(sortAccordingOccerence));
    // return new Set(
    //   searchItemList.sort((a: any, b: any) => {
    //     const aCount = searchItemList.filter(
    //       (newItem: any) => newItem === a
    //     ).length;
    //     const bCount = searchItemList.filter(
    //       (newItem: any) => newItem === b
    //     ).length;
    //     return bCount - aCount;
    //   })
    // );
    // return searchItemList;
  }
  // .sort((a, b) => b.score - a.score);

  return (
    <>
      <main>
        <div style={{ width: "100%", display: "flex" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            style={{ width: "50%" }}
          />
          <div
            style={{
              display: "flex",
              width: "10%",
              marginLeft: "20px",
              padding: "5px",
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => console.log(search(inputValue, items))}
          >
            Search
          </div>
        </div>
      </main>
    </>
  );
}
