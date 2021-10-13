import WorldMapAgent from "../components/svgs/WorldMapAgent"

const Reliable = (): JSX.Element => {
	return (
		<div className="bg-primary-main">
			<div className="py-24 px-12 max-w-full mx-auto">
				<h3 className="text-white text-4xl font-medium text-center">
					Experience the most reliable Delbott.
				</h3>

				<p className="text-white text-center mt-8 px-12">
					After seeing the myriads of challenges sourcing vendors face everyday
					when it comes to getting items to their buyers, our team set out to
					build this platform to make it easy for everyone with a product dream
					to launch. Now, you can kick-start that ecommerce idea with the tools
					that you can leverage on to prepare you for a truly global marketplace
					where low pricing and superior quality is key to competitiveness.
				</p>
				<div className="flex align-middle justify-center">
					<div className="mx-auto mt-12 transform scale-90 md-lg:scale-100">
						<WorldMapAgent />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reliable
