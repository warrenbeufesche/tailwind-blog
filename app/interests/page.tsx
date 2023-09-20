import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Interests' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Interests
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I have varied interests.
          </p>
          <ul>
            <li>Web3 Development</li>
            <li>Digital Assets</li>
            <li>Coffee</li>
            <li>Art</li>
            <li>Golf</li>
          </ul>
        </div>
      </div>
    </>
  )
}
