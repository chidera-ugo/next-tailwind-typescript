import PrimaryButton from "../components/buttons/PrimaryButton"

const Solution = (): JSX.Element => {
	return (
		<div className="bg-white max-w-full mx-auto relative">
			<div
				className="
        lg-lg:grid
        grid-cols-12
        relative
        z-10
        gap-0
        py-48
        max-w-full
        px-8
        xs:px-12
        mx-auto
      "
			>
				<div
					className="
          w-full
          relative
          inset-0
          lg-lg:hidden
          flex
          align-middle
          justify-center
        "
				>
					<img
						src="/store-mockup.jpg"
						className="inset-0 z-20 transform h-circle -rotate-12"
						my-auto
					/>
					<div
						className="
            absolute
            -bottom-8
            xs:-bottom-24
            w-full
            flex
            align-middle
            justify-center
          "
					>
						<div
							className="
              rounded-full
              w-96
              xs:w-circle
              h-96
              xs:h-circle
              transform
              scale-100
              xs:scale-75
              bg-gradient-to-br
              from-primary-main
              to-primary-alternate
            "
						/>
					</div>
				</div>
				<div className="w-full hidden lg-lg:inline-block col-span-6 relative my-auto">
					<img
						src="~/assets/images/store-mockup.jpg"
						className="relative z-20 transform -rotate-12 lg-lg:ml-24 lg-lg:-mr-12"
						my-auto
					/>
					<div
						className="
            absolute
            rounded-full
            -bottom-12
            w-circle
            h-circle
            right-24
            bg-gradient-to-br
            from-primary-main
            to-primary-alternate
          "
					/>
				</div>

				<div
					className="
          col-span-6
          mt-24
          lg-lg:mt-0
          mx-auto
          sm-md:mx-16
          flex flex-col
          align-middle
          justify-center
        "
				>
					<div className="my-auto">
						<h1 className="text-gray-700 leading-relaxed text-4xl font-extrabold">
							Are You An
							<br />
							<span className="text-accent-main text-5xl">
								{" "}
								Online Vendor?{" "}
							</span>
						</h1>
						<p className="text-gray-600 mt-10 text-lg">
							With the increasing rate of vendors selling across social media
							platforms such as instagram, facebook and whatsapp, it is also
							becoming increasingly difficult to effectively manage the
							challenges that comes with it.
						</p>

						<p className="text-gray-600 mt-10 text-lg">
							Delbott is a Logistics company that helps vendors manage their
							orders by taking them from the vendors and delivering to their
							customers.
						</p>

						<div
							className="
              w-full
              sm:w-auto
              flex-none flex flex-col-reverse
              sm:flex-row sm:items-start
              space-y-3 space-y-reverse
              sm:space-y-0 sm:space-x-4
              mt-10
              mx-auto
              xl:mx-0
            "
						>
							<PrimaryButton text="Get Started" url="/signup" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
