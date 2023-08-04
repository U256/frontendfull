import { Inter } from 'next/font/google'
import clsx from 'clsx'
import styles from 'app/page.module.css'
import { Lorem } from 'components/Lorem'

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
			<p>test</p>
			<Lorem />
			<br />
		</main>
	)
}