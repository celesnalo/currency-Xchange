
export default function Footer() {
  
  const date = new Date().getFullYear();

  return (
    <footer className={`w-full p-4 bg-white dark:text-gray-100 dark:bg-gray-800 shadow-md text-center`}>
        <div className="p-4">
            <p>Exchange rates are updated regularly but may fluctuate. For precise financial transactions, please consult with a bank or financial service.</p>
            <p>Please feel free to visit <span className="text-blue-600 underline"><a href="https://g.co/kgs/BiCjwz1" target="_blank">Google</a></span> for latest updates</p>
        </div>
        <hr />
        <div className="pt-10">
        <p>Made with love by Snalo</p> &copy;{date}
        </div>
    </footer>
  )
}
