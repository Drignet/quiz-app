import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../styles/App.css'

const App = () => {
  const title = 'Maths Quiz App'
  const footer = 'Quiz App | ©Drignet 2022'
  return (
    <div className='wrapper'>
      <Header title={title} />
      <Main />
      <Footer footer={footer} />
    </div>
    )
}
export default App