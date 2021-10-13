import Layout from "../src/components/primary/Layout"

const Home = (): JSX.Element => {
	return (
		<Layout title="Next - Tailwind - Nuxt">
			<div className="h-screen w-screen flex flex-col align-middle justify-center">
				<h5 className="mx-auto font-extrabold font-sans text-gray-800 text-2xl">
					Next - Tailwind - Nuxt
				</h5>
			</div>
		</Layout>
	)
}

export default Home
