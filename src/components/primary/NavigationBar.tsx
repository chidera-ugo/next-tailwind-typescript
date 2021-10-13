import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"

const NavigationBar = (): JSX.Element => {
	const navigationItems = [
		{ name: "Services", path: "/searvices" },
		{ name: "FAQs", path: "/faqs" },
	]

	return (
		<div>
			<nav
				className="
        fixed
        bg-white
        backdrop-filter backdrop-blur-md
        bg-opacity-90
        top-0
        z-800
        w-screen
        overflow-hidden
      "
			>
				<div
					className="
          flex
          px-6
          md:px-12
          max-w-full
          mx-auto
          h-18
          sm:h-24
          align-middle
          justify-between
        "
				>
					<Link href="/">
						<a className="my-auto">
							<h3 className="my-auto font-bold text-primary-main text-2xl">
								Del<span className="font-light">bott.</span>
							</h3>
						</a>
					</Link>

					<button className="inline-block p-3 -mr-3 md:hidden">
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
								strokeWidth="{2}"
								d="M4 8h16M4 16h16"
							/>
						</svg>
					</button>

					<div className="hidden md:flex align-middle my-auto">
						{navigationItems.map(({ name, path }) => (
							<Link key={path} href={path}>
								<a
									className="
              px-6
              py-3
              font-medium
              hover:text-primary-main
              duration-300
              text-gray-500
              capitalize
            "
								>
									{name}
								</a>
							</Link>
						))}
						<div
							className="
              w-full
              sm:w-auto
              flex-none flex flex-col-reverse
              sm:flex-row sm:items-start
              space-y-3 space-y-reverse
              sm:space-y-0 sm:space-x-4
              mx-auto
              ml-6
            "
						>
							{/* <secondary-button text="Sign In" url="/signin" className="ml-6" /> */}
							<PrimaryButton text="Get Started" url="/signup" />
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavigationBar
