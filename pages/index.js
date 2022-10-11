import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HearFromClients from '../Components/HearFromClients'
import NumbersSection from '../Components/NumbersSection'
import QualityUsers from '../Components/QualityUsers'
import ResultsAndFormSection from '../Components/ResultsAndFormSection'
import StickyScrollComponent from '../Components/StickyScrollComponent'
import TopClients from '../Components/TopClients'
import TopPartners from '../Components/TopPartners'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <StickyScrollComponent />
      <ResultsAndFormSection />
      <NumbersSection />
      <TopPartners />
      <TopClients />
      <HearFromClients />
      <QualityUsers />
      <Footer />
    </div>
  )
}
