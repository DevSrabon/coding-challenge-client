
import toast from "react-hot-toast";


const EditModal = ({ modal, refetch, setModal }) => {
	const handleBooking = (e) => {
		e.preventDefault();
		const form = e.target;
        const name = form.name.value;
        console.log(name);
		
		fetch(`${process.env.REACT_APP_API_URL}/post/${modal._id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({name}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					setModal(null);
                    toast.success("Edited");
                    refetch();
				} else {
					toast.error(data.message);
				}
			});
	};
	return (
		<>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<form onSubmit={handleBooking} className="flex gap-5 flex-col mt-10">
						<input
							defaultValue={modal?.name}
							type="text"
							name="name"
							placeholder="Edit your name"
							className="input input-bordered w-full"
						/>
						<button type="submit">
							<label
								className="btn btn-accent w-full text-white"
								htmlFor="booking-modal">
                                Save changes
							</label>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditModal;
