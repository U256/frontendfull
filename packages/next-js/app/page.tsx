import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { Lorem } from 'components/Lorem'
// import { ClientComponentTest } from 'components/ClientComponentTest'
import styles from './page.module.css'

// html {
// 	font-size: 62.5%;
// }
// body: {
// 	font-size: 2.1em;
// }

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className={clsx(styles.main, inter.className)}>
			<Lorem />
			{/* <ClientComponentTest /> */}
		</main>
	)
}
