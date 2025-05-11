import './DragAndDrop.css';
import { AddFile } from "../../../wailsjs/go/main/AIService"
import { Plus } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function DragAndDrop() {

	// reference file input
	const fileUploadRef = useRef<HTMLInputElement | null>(null)

	// Run when user clicks on upload button
	const activateFileUpload = () => {
		if (fileUploadRef.current) {
			fileUploadRef.current?.click()
		}
	}

	// this gets run when a change is detected in the input, ideally runs right after activateFileUpload.
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files && files.length > 0) {
			for (const file of files) {
				console.log("Selected file: ", file)

				const reader = new FileReader()

				reader.onload = (e) => {
					const arrayBuffer = e.target?.result as ArrayBuffer;

					// convert to go byteArray
					const byteArray = Array.from(new Uint8Array(arrayBuffer));
					console.log("File content as byteArray", byteArray);
					AddFile(byteArray, file.name)
				}

				reader.onerror = (e) => {
					console.error("Error reading file: ", e)
				}

				reader.readAsArrayBuffer(file)

			}
		}
	}


	return (
		<div>
			<div id="container" className="flex justify-center h-screen w-screen items-center space-x-2">
				<div
					className="flex justify-center items-center h-screen w-screen"
					onClick={activateFileUpload}
				>
					<div id="drag_and_drop"
						className="border-[4px] border-pastel border-dotted rounded-[50%]
								flex flex-col justify-center items-center p-5 hover:cursor-pointer relative h-3/4 w-3/4 aspect-square
						">
						<Plus size={268} />
						<span className='relative bottom-6'>Drag and Drop Items</span>
					</div>
					{/* Hidden file upload, not shown in dom but this is what
					* 	is responsible for handling user file uploads.
					*/}
					<input type="file" multiple={true} ref={fileUploadRef} style={{ display: "none" }}
						onChange={handleFileChange} />
				</div>
			</div>
		</div>
	)
}
