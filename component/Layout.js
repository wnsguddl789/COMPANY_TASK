import { GlobalLayout, RouteContainer } from '../utils/style/styles'
import Head from 'next/head'
import Link from 'next/link'
export default function Layout({ title, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title}_Jun-Next` : `Jun-Next`}</title>
			</Head>
			<RouteContainer>
				<Link href="/">
					<a>NOT COMPLETE</a>
				</Link>
				<Link href="/complete">
					<a>COMPLETE</a>
				</Link>
			</RouteContainer>
			<GlobalLayout>
				<main>{children}</main>
			</GlobalLayout>
		</>
	)
}
