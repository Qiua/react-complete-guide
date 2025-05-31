export default function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} React Learning</p>
      <p>
        Built with <a href='https://reactjs.org/'>React</a> and <a href='https://vitejs.dev/'>Vite</a>.
      </p>
    </footer>
  )
}
