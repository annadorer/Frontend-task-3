import type { NextPage } from 'next'
import { Header } from '../components/header/header'
import { Sightseens } from '../components/sightseens/sightseens'
import { Welcome } from '../components/welcome'
import { Tours } from '../components/tours/tours'
import { Contacts } from '../components/contacts'
import { Footer } from '../components/footer/footer'
import Head from 'next/head'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend-Task-3</title>
      </Head>
      <Header />
      <Welcome />
      <Sightseens />
      <Tours />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Home
