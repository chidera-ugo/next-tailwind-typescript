import Layout from "../src/components/primary/Layout"
import Contact from "../src/sections/Contact"
import Hero from "../src/sections/Hero"
import Integration from "../src/sections/Integration"
import Reliable from "../src/sections/Reliable"
import Solution from "../src/sections/Solution"
import Solutions from "../src/sections/Solutions"
import Speed from "../src/sections/Speed"
import TheProcess from "../src/sections/TheProcess"

const Home = (): JSX.Element => {
	return (
		<Layout title="Delbott - Logistics Manager">
			<div>
				<Hero />
				<Solution />
				<TheProcess />
				<Speed />
				<Solutions />
				<Reliable />
				<Contact />
				<Integration />
			</div>
		</Layout>
	)
}

export default Home
