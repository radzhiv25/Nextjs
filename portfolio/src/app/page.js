import Image from 'next/image';
import About from 'src/app/about'

export default function Home() {
  return (
    <main className="">
      <div className="navbar p-5 flex flex-end items-stretch">
        <h1 className='mr-auto text-2xl'>Radzhiv</h1>
        <nav>
          <ul className="inline-flex gap-10">
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
            <li><button className='bg-blue-400 p-1 rounded-md'>Resume</button></li>
          </ul>
        </nav>
      </div>
      <About/>
    </main>
  )
}
