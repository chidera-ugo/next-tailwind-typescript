import PrimaryButton from "../components/buttons/PrimaryButton"
import DeliveryAgent from "../components/svgs/DeliveryAgent"
import OrderComputer from "../components/svgs/OrderComputer"

const Hero = (): JSX.Element => {
	return (
		<div
			className="
      lg-lg:from-white lg-lg:to-white
      bg-gradient-to-b
      py-12
      xs:py-24
      from-primary-main
      to-primary-alternate
      relative
    "
		>
			<svg
				width="422"
				height="421"
				viewBox="0 0 422 421"
				className="absolute right-0 transform scale-75 md-lg:scale-100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					className="
          fill-current
          text-white
          md-lg:text-primary-main
          opacity-25
          md-lg:opacity-5
        "
					d="M415.165 207.796C424.466 245.865 397.519 282.837 376.004 315.592C354 349.09 328.151 381.155 291.159 396.585C252.829 412.573 202.178 427.541 169.718 401.637C135.591 374.403 170.173 309.867 141.373 277.052C108.405 239.487 27.1886 263.335 7.8809 217.237C-9.20139 176.451 41.36 137.834 68.4147 102.857C93.982 69.8018 120.622 36.5867 159.49 21.229C199.338 5.48377 248.848 -5.92169 284.824 17.3468C320.393 40.3526 307.296 97.345 331.22 132.301C353.007 164.136 406.009 170.324 415.165 207.796Z"
				/>
			</svg>

			<div
				className="
        absolute
        z-0
        w-full
        h-full
        inset-0
        top-24
        flex
        align-middle
        justify-center
      "
			>
				<div className="absolute -right-24">
					<svg
						width="422"
						height="421"
						viewBox="0 0 422 421"
						className="text-primary-main"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M415.165 207.796C424.466 245.865 397.519 282.837 376.004 315.592C354 349.09 328.151 381.155 291.159 396.585C252.829 412.573 202.178 427.541 169.718 401.637C135.591 374.403 170.173 309.867 141.373 277.052C108.405 239.487 27.1886 263.335 7.8809 217.237C-9.20139 176.451 41.36 137.834 68.4147 102.857C93.982 69.8018 120.622 36.5867 159.49 21.229C199.338 5.48377 248.848 -5.92169 284.824 17.3468C320.393 40.3526 307.296 97.345 331.22 132.301C353.007 164.136 406.009 170.324 415.165 207.796Z"
						/>
					</svg>
				</div>
				<div
					className="
          rounded-full
          w-circle
          h-circle
          center-circle
          hidden
          md-lg:inline-block
          opacity-50
          transform
          scale-100
          xs:scale-75
          bg-gradient-to-br
          from-primary-main
          to-primary-alternate
        "
				/>
			</div>

			<div
				className="
        lg-lg:grid
        grid-cols-12
        gap-12
        relative
        z-50
        px-6
        md:px-12
        py-12
        xs:py-24
        mx-auto
        max-w-full
      "
			>
				<div className="flex lg-lg:hidden align-middle justify-center">
					<div
						className="
            relative
            transform
            scale-50
            xs-xs:scale-75
            sm:scale-90
            xl:scale-100
          "
					>
						<OrderComputer />
						<div className="agent absolute bottom-0 left-0">
							<DeliveryAgent />
						</div>
					</div>
				</div>

				<div
					className="
          col-span-6
          xs-xs:mt-12
          sm:mt-48
          flex flex-col
          align-middle
          justify-center
          lg-lg:mt-0
        "
				>
					<div className="my-auto">
						<h1
							className="
              font-bold
              text-left
              xs-xs:text-center
              lg-lg:text-left
              text-2xl
              xs-xs:text-4xl
              lg-lg:text-5xl
              text-white
              lg-lg:text-gray-800
              header-text
            "
						>
							Receive An Order From Your Online Stores And We Deliver For You.
						</h1>

						<h5
							className="
              mt-4
              md-md:mt-8
              text-base
              md-md:text-lg
              xxl:text-xl
              text-left
              xs-xs:text-center
              lg-lg:text-left
              leading-relaxed
              text-white
              lg-lg:text-gray-600
              sub-text
            "
						>
							Whatever business you run, big or small, we are here to make it
							happen. Start effortlessly with Delbott. We provide a user
							friendly platform, lowest prices, speedy delivery and a money-back
							guarantee.
						</h5>

						<div className="flex align-middle justify-start">
							<PrimaryButton url="/get-started" text="Get Started" />
						</div>
					</div>
				</div>

				<div className="col-span-6 hidden lg-lg:flex align-middle justify-center">
					<div className="relative transform scale-90 xl:scale-100">
						<OrderComputer />
						<div className="agent absolute bottom-0 left-0">
							<DeliveryAgent />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
