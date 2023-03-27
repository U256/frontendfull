import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{' '}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis enim esse est
				delectus voluptas vero, dolorum temporibus earum ut ipsum ullam hic quod nostrum sunt
				officia, excepturi libero quasi facilis. Sapiente at illo fugiat corrupti laborum dolore rem
				saepe iste aliquam hic nulla consequatur, aut doloremque nam cumque sequi perferendis ullam
				praesentium? Iure perspiciatis doloribus soluta facilis voluptas sint quasi culpa sit fugit
				esse? Dignissimos commodi fuga ea aut, placeat rem, sit nam quas mollitia libero aliquid!
				Corporis harum quasi qui vel aliquam dolor accusamus unde numquam exercitationem doloremque
				quos non, cumque cupiditate facilis quae aliquid, ullam consectetur fuga?
			</p>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
				<div className={styles.thirteen}>
					<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
				</div>
			</div>

			<div className={styles.grid}>
				<a
					href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Docs
						<span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Templates
						<span>-&gt;</span>
					</h2>
					<p className={inter.className}>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Deploy
						<span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	)
}
