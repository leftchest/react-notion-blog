const Footer = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="w-full p-4 text-center text-gray-400 bg-gray-800">
      <div className="container mx-auto">
        <div>
          Powered by{' '}
          <a className="hover:text-white" href="https://nextjs.org/">
            Next
          </a>
          ,{' '}
          <a className="hover:text-white" href="https://tailwindcss.com/">
            Tailwind
          </a>
          ,{' '}
          and{' '}
          <a className="hover:text-white" href="https://www.typescriptlang.org/">
            TypeScript.
          </a>
        </div>
        <div>Leftchest @ Spencer Woo © {currentYear}</div>
      </div>
    </footer>
  )
}

export default Footer
