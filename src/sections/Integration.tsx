import PrimaryButton from "../components/buttons/PrimaryButton"

const Integration = (): JSX.Element => {
	return (
		<div className="px-12 py-36 bg-gray-100">
			<div className="w-full flex align-middle justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-12 w-12 text-primary-main"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="6"
						d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div>
			<h4 className="text-gray-800 font-medium mt-8 text-lg text-center">
				Delbott supports integration with already existing Ecommerce websites.
				You can integrate our API with your ecommerce store
			</h4>

			<div className="w-full mt-8 flex align-middle justify-center">
				<PrimaryButton url="/documentation" text="Read Documentation" />
			</div>
		</div>
	)
}

export default Integration
