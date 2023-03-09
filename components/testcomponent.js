import Image from "next/image";
import LazyLoad from 'react-lazy-load';



export default function Testcomponent() {
  return (
    <>
  <Image src="https://coinbureau.dev/_next/image/?url=https%3A%2F%2Fcoinbureau-release.s3.us-east-2.amazonaws.com%2FBinnace_Exchane_Review_binance_crypto_card_2ea0318e0c.jpg&w=1080&q=75" alt="Lamp" height={576} width={1024} priority/>
  <br></br>
  <Image src="https://coinbureau.dev/_next/image/?url=https%3A%2F%2Fcoinbureau-release.s3.us-east-2.amazonaws.com%2FBinnace_Exchane_Review_binance_crypto_card_2ea0318e0c.jpg&w=1080&q=75" alt="Lamp" height={576} width={1024} priority/>
  <br></br>
  <Image src="https://coinbureau.dev/_next/image/?url=https%3A%2F%2Fcoinbureau-release.s3.us-east-2.amazonaws.com%2FBinnace_Exchane_Review_binance_crypto_card_2ea0318e0c.jpg&w=1080&q=75" alt="Lamp" height={576} width={1024} priority/>
  <br></br>
  <LazyLoad><iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe></LazyLoad> 
  
<br></br>
<LazyLoad><iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe></LazyLoad> 
  

    </>
  );
}
