import Image from 'next/image'

export const About = () => {
  return (
    <div className="border p-2 rounded-lg w-1/2 mx-auto">
        <h1>Rajeev Krishna</h1>
        <div>
            <Image
                src=""
                alt="Picture of the author"
                width={200}
                height={200}
            />
        </div>
    </div>
  )
}
