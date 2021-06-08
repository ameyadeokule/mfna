import {useRouter} from 'next/router'

const FruitsSubsection = () => {
	
	const router = useRouter()
	
	console.log(router)
	
	return (
		<div>
			<h1>Hello from fruit subsection</h1>
		</div>
	)
}

export default FruitsSubsection

