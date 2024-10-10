import ExchangeCard from "./components/Main/ExchangeCard"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
function App() {
 
  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center dark:bg-gray-600 bg-gray-100 shadow-xl shadow-slate-900 p-4">
  <ExchangeCard />
</main>
      <Footer />
    </div>
  );
}

export default App