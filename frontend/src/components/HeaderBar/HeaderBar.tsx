import { ChevronDown, Icon, Settings } from 'lucide-react'
import './HeaderBar.css'

export default function HeaderBar() {
	return (
		<div
			className="flex border-2
						border-pastel border-solid w-full
						justify-between p-5"
		>
			<div id="model-select"
				className="flex flex-row w-[124px] 
							h-[44px] text-[36px] font-bold"
			>
				<h1>Gemini</h1>
				<ChevronDown />
			</div>
			<Settings />
		</div>
	)
}
