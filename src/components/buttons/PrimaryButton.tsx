import { FC } from "react"

interface Props {
	text: string
	url: string
}

const PrimaryButton: FC<Props> = ({ text }: Props) => {
	return (
		<button
			className="
   w-full
      sm:w-auto
      flex-none
      sm:px-6
      border border-primary-main
      bg-primary-main
      text-white
      rounded-lg
      h-12
      flex
      items-center
      justify-center
      font-medium
      hover:ring-2
      transition
      duration-150
      ease-linear
      space-x-2.5
      focus:ring-2
      ring-offset-2
      focus:ring-offset-white
      hover:ring-offset-white hover:ring-primary-main
      focus:ring-primary-main focus:outline-none"
		>
			{text}
		</button>
	)
}

export default PrimaryButton
