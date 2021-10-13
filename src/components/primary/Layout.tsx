import { FC } from "react"
import Head from "next/head"
import NavigationBar from "./NavigationBar"

interface Props {
	title: string
	description?: string
	iconPath?: string
	children: JSX.Element
}

const Layout: FC<Props> = ({
	title,
	description,
	iconPath,
	children,
}: Props) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				{iconPath && <link rel="icon" href={iconPath} />}
			</Head>

			<NavigationBar />

			<div className="mx-auto max-w-full">{children}</div>
		</div>
	)
}

export default Layout
