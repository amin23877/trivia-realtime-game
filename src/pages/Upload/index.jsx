import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import ApiCall from "common/services/ApiCall";

export default function Upload() {
	const [isDragOver, setIsDragOver] = useState(false);
	const [done, setDone] = useState(false);
	const [file, setFile] = useState();

	const handleDrop = (ev) => {
		ev.preventDefault();

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
			if (ev.dataTransfer.items[0].kind === "file") {
				const file = ev.dataTransfer.items[0].getAsFile();
				console.log("first", { file });
				if (file.name.split(".")[1] === "xlsx" || file.name.split(".")[1] === "csv") {
					setFile(file);
				} else {
					setIsDragOver(false);
				}
			}
		} else {
			// Use DataTransfer interface to access the file(s)
			console.log("second", ev.dataTransfer.files[0]);
			if (file.name.split(".")[1] === "xlsx" || file.name.split(".")[1] === "csv") {
				setFile(ev.dataTransfer.files[0]);
			} else {
				setIsDragOver(false);
			}
		}
	};

	const upload = async () => {
		try {
			if (file) {
				const apiService = new ApiCall();
				const formData = new FormData();
				formData.append("file", file);

				await apiService.post("/import", formData);
				setDone(done);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Box textAlign="center" mt={1}>
				<p>Drop excel/csv file in the Box</p>
				{done && <h3>Done!</h3>}
				<div
					style={{
						backgroundColor: isDragOver ? "#c4c4c4" : "white",
						margin: "1em auto",
						width: "40vw",
						height: "50vh",
						borderRadius: 16,
						border: "1px dashed gray",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onDrop={handleDrop}
					onDragOver={(e) => {
						e.preventDefault();
						setIsDragOver(true);
					}}
					onDragLeave={(e) => {
						e.preventDefault();
						setIsDragOver(false);
					}}
				>
					{file ? <h4>{file.name}</h4> : <h4>Drop file here</h4>}
				</div>
				{file && (
					<Button variant="contained" onClick={upload}>
						Upload
					</Button>
				)}
			</Box>
		</Container>
	);
}
