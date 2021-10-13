import AgentClock from "../components/svgs/AgentClock"

const Speed = (): JSX.Element => {
	return (
		<div>
			<h3 className="text-gray-800 text-2xl sm-md:text-4xl text-center font-semibold">
				Speed is mandatory for same-day delivery
			</h3>
			<div className="lg-lg:grid grid-cols-12 mx-auto my-8 lg-lg:my-36">
				<div className="col-span-6 flex align-middle justify-center">
					<div className="transform scale-75 sm-md:scale-90 lg-lg:scale-100">
						<AgentClock />
					</div>
				</div>

				<div
					className="
          col-span-6
          bg-gradient-to-bl
          from-primary-main
          to-primary-alternate
          py-12
          lg-lg:py-0
          px-8
          xs:px-24
          flex flex-col
          align-middle
          justify-center
        "
				>
					<div
						className="
            text-5xl
            sm-md:text-7xl
            mx-auto
            text-white
            leading-normal
            font-semibold
          "
					>
						Use Delbott.
						<br />
						Save up to{" "}
						<span className="text-6xl sm-md:text-9xl">
							32%
							<br />
						</span>
						on delivery time.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Speed
