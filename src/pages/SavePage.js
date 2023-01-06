import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const SavePage = ({refetch}) => {
      const {
				register,
				formState: { errors },
				handleSubmit,
    } = useForm();
    const [data, setData]= useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/test`)
        .then(res => res.json()).then(data => setData(data))
    }, [])

			const [change, setChange] = useState(false);
			const buttonHandler = () => {
				setChange(!change);
			};

			const handleAddPost = (data) => {
				// save post information into the database
				fetch(`${process.env.REACT_APP_API_URL}/post`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						name: data.name,
						sector: data.sectors,
					}),
				})
					.then((res) => res.json())
					.then((result) => {
						console.log(result);
						if (result.acknowledged) {
							toast.success("Saved");
							refetch();
						}
					});
			};
    return (
			<div className="my-5 p-5  md:p-10 bg-gray-100 shadow-lg md:mt-20 rounded-lg">
				<h2 className="text-2xl font-semibold">
					Please enter your name and pick the Sectors you are currently involved
					in.
				</h2>
				<form onSubmit={handleSubmit(handleAddPost)}>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold">Name</span>
						</label>
						<input
							className="input input-bordered w-full"
							type="text"
							placeholder="Your name"
							{...register("name", {
								required: "Name is Required",
							})}
						/>
						{errors.name && (
							<p className="text-red-600">{errors.name?.message}</p>
						)}
					</div>

					<div className="form-control w-full">
						<label className="label font-semibold">
							<span className="label-text">Select A Sector</span>
						</label>
						<select
							multiple=""
							size="5"
							{...register("sectors", {
								required: "Please Select a Sector",
							})}
							className="select input-bordered w-full h-32 overflow-y-scroll">
							{data.map((test) => (
								<option key={test._id} style={{ marginLeft: test?.margin }}
									value={test.value}
									>
{test.name}
								</option>
							))}
							
						</select>
						{errors.sectors && (
							<p className="text-red-600">{errors.sectors?.message}</p>
						)}
					</div>
					<div className="form-control">
						<label className="label cursor-pointer justify-start gap-2">
							<input
								type="checkbox"
								onChange={buttonHandler}
								className="checkbox"
							/>
							<span className="label-text">Agree to terms</span>
						</label>
					</div>
					<input
						disabled={!change}
						className={`btn btn-sm btn-active hover:btn-outline mt-3`}
					value="Save"
						type="submit"
					/>
				</form>
			</div>
		);
};

export default SavePage;