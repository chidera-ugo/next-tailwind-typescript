import GlobePin from "../components/svgs/GlobePin"
import LinkedPins from "../components/svgs/LinkedPins"

const Solutions = (): JSX.Element => {
	return (
		<div className="relative">
			<div className="absolute w-full h-full flex flex-col align-middle justify-c">
				<div className="w-full flex align-middle justify-between mx-auto my-auto">
					<svg
						width="422"
						height="421"
						viewBox="0 0 422 421"
						className="-ml-24 opacity-60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M415.165 207.796C424.466 245.865 397.519 282.837 376.004 315.592C354 349.09 328.151 381.155 291.159 396.585C252.829 412.573 202.178 427.541 169.718 401.637C135.591 374.403 170.173 309.867 141.373 277.052C108.405 239.487 27.1886 263.335 7.8809 217.237C-9.2014 176.451 41.36 137.834 68.4147 102.857C93.982 69.8018 120.622 36.5867 159.49 21.229C199.338 5.48377 248.848 -5.92169 284.824 17.3468C320.393 40.3526 307.296 97.345 331.22 132.301C353.007 164.136 406.009 170.324 415.165 207.796Z"
							fill="#00A3FF"
							fill-opacity="0.13"
						/>
					</svg>

					<svg
						width="422"
						height="421"
						viewBox="0 0 422 421"
						className="transform rotate-45 -mr-24 opacity-60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M415.165 207.796C424.466 245.865 397.519 282.837 376.004 315.592C354 349.09 328.151 381.155 291.159 396.585C252.829 412.573 202.178 427.541 169.718 401.637C135.591 374.403 170.173 309.867 141.373 277.052C108.405 239.487 27.1886 263.335 7.8809 217.237C-9.2014 176.451 41.36 137.834 68.4147 102.857C93.982 69.8018 120.622 36.5867 159.49 21.229C199.338 5.48377 248.848 -5.92169 284.824 17.3468C320.393 40.3526 307.296 97.345 331.22 132.301C353.007 164.136 406.009 170.324 415.165 207.796Z"
							fill="#00A3FF"
							fill-opacity="0.13"
						/>
					</svg>
				</div>
			</div>

			<div className="max-w-full mx-auto my-36">
				<h3 className="text-gray-800 text-4xl text-center font-semibold">
					What you can do with
					<span className="my-auto font-bold text-primary-main">
						Del<span className="font-light">bott.</span>
					</span>
				</h3>

				<div className="md-lg:grid grid-cols-8 px-12 gap-12 mt-24">
					<div
						className="
            bg-white
            mb-8
            md-lg:my-0
            col-span-2
            p-6
            rounded-2xl
            flex flex-col
            align-middle
            justify-center
            shadow-lg
            border border-gray-100
          "
					>
						<div className="mx-auto">
							<div className="flex align-middle justify-center">
								<LinkedPins />
							</div>
							<h4 className="text-xl mt-6 text-gray-600 text-center font-semibold">
								Create Delivery Orders
							</h4>
							<p className="mt-5 text-gray-500 text-center">
								Create your own product brand from scratch in any industry and
								be price competitive.
							</p>
						</div>
					</div>

					<div
						className="
            bg-white
            my-8
            md-lg:my-0
            col-span-2
            p-6
            rounded-2xl
            flex flex-col
            align-middle
            justify-center
            shadow-lg
            border border-gray-100
          "
					>
						<div className="mx-auto">
							<div className="flex align-middle justify-center">
								<GlobePin />
							</div>
							<h4 className="text-xl mt-6 text-gray-600 text-center font-semibold">
								Track Orders
							</h4>
							<p className="mt-5 text-gray-500 text-center">
								Source for high quality and price competitive products to
								increase your business profitability.
							</p>
						</div>
					</div>

					<div
						className="
            bg-white
            my-8
            md-lg:my-0
            col-span-2
            p-6
            rounded-2xl
            flex flex-col
            align-middle
            justify-center
            shadow-lg
            border border-gray-100
          "
					>
						<div className="mx-auto">
							<div className="flex align-middle justify-center">
								<svg
									width="75"
									height="76"
									viewBox="0 0 75 76"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.625 15.8H21.875V25.1751H53.125V15.8H59.375V31.4251H65.625V15.8C65.625 12.3625 62.8125 9.55005 59.375 9.55005H46.3125C45 5.92505 41.5625 3.30005 37.5 3.30005C33.4375 3.30005 30 5.92505 28.6875 9.55005H15.625C12.1875 9.55005 9.375 12.3625 9.375 15.8V59.5501C9.375 62.9876 12.1875 65.8001 15.625 65.8001H34.375V59.5501H15.625V15.8ZM37.5 9.55005C39.2188 9.55005 40.625 10.9563 40.625 12.675C40.625 14.3938 39.2188 15.8 37.5 15.8C35.7812 15.8 34.375 14.3938 34.375 12.675C34.375 10.9563 35.7812 9.55005 37.5 9.55005Z"
										fill="#F24E1E"
									/>
									<path
										d="M65.625 36.1125L48.4688 53.3L39.0625 43.925L34.375 48.6125L48.4688 62.675L70.3125 40.8L65.625 36.1125Z"
										fill="#F24E1E"
									/>
								</svg>
							</div>
							<h4 className="text-xl mt-6 text-gray-600 text-center font-semibold">
								Efficiently manage your inventory
							</h4>
							<p className="mt-5 text-gray-500 text-center">
								Create your own product brand scratch in any industry and be
								price competitive.
							</p>
						</div>
					</div>

					<div
						className="
            bg-white
            my-8
            md-lg:my-0
            col-span-2
            p-6
            rounded-2xl
            flex flex-col
            align-middle
            justify-center
            shadow-lg
            border border-gray-100
          "
					>
						<div className="mx-auto">
							<div className="flex align-middle justify-center">
								<svg
									width="100"
									height="101"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0)">
										<path
											d="M63.2812 87.6748V50.1748H44.5312V87.6748H35.1562V37.6748H16.4062V87.6748H9.375V6.4248H4.6875V87.6748C4.6875 89.3324 5.18136 90.9221 6.06044 92.0942C6.93951 93.2663 8.1318 93.9248 9.375 93.9248H70.3125V87.6748H63.2812ZM30.4688 87.6748H21.0938V43.9248H30.4688V87.6748ZM58.5938 87.6748H49.2188V56.4248H58.5938V87.6748Z"
											fill="#00A3FF"
										/>
										<path
											d="M53.4046 43.9249C52.4096 43.9259 51.4404 43.5021 50.639 42.7155L26.2617 18.8843L19.3171 31.4249L15.5554 27.6937L22.5445 15.1937C23.2712 13.8891 24.3508 13.0137 25.5538 12.7535C26.7569 12.4932 27.9887 12.8686 28.9875 13.7999L53.4117 37.6749L61.8585 22.4874L65.625 26.2062L57.1781 41.3999C56.7409 42.1848 56.1718 42.8221 55.5165 43.2606C54.8612 43.6991 54.1379 43.9266 53.4046 43.9249Z"
											fill="#00A3FF"
										/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect
												width="100"
												height="100"
												fill="white"
												transform="translate(0 0.174805)"
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
							<h4 className="text-xl mt-6 text-gray-600 text-center font-semibold">
								Scale as you grow your business
							</h4>
							<p className="mt-5 text-gray-500 text-center">
								Create your own product brand scratch in any industry and be
								price competitive.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solutions
