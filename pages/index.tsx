import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HBD NICKO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='bg-red-500 py-24 flex items-center justify-center'>
      <h2 className='text-6xl text-white top-0'>
        🎉 Happy Birthday Nicko!
        </h2>
    </div>
    <div className='bg-red-500 flex flex-wrap justify-center space-y-3'>
      <Card name='Yuu' head='Happy Birthday Nicko!' img='/1.png'>
        You are 17 years old now.<br/>
        I sincerely wish you success and happiness in your future life.<br/>
        You're a great person!<br/>
        Thanks for becoming my friend & Brawl stars partner
        Happy Birthday again<br/>
        Enjoy your day! Love ya Rem<br/>
      </Card>

      <Card name='Alen' head="Get JoJo'd" img='/2.png'>
       Well... It's "that" time of the year again...<br/>
       It's your Birthday! Not Just Another Birthday, You're turning 17!<br/>
       I'm so happy for you!<br/>
       So yeah, I'm gonna get you a JoJo!<br/>
       Yes, you heard me right, I'm gonna get you a JoJo!<br/>
      Jokes aside, I'm really gald that you're my friend.
      So let's hope for the best. Have a great day & year!
      </Card>
      </div>
    </div>
  )
}
