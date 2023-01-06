import React, { useState } from 'react';
import EditModal from './EditModal';
import './table.css'

const UserData = ({userData, isLoading, refetch}) => {
    const [modal, setModal] = useState("");
    if (isLoading) {
        <div className="flex justify-center items-center h-full">
					<p className="text-7xl font-thin">L</p>
					<div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400"></div>
					<p className="text-7xl font-thin">ading....</p>
				</div>;
    }
    return (
			<div className="mb-10">
				<table className="table table-zebra w-full overflow-x-hidden">
					<thead>
						<tr>
							<th>SL. No</th>
							<th>Name</th>
							<th>Sector</th>
							<th>Edit Name</th>
						</tr>
					</thead>
					<tbody>
						<>
							{userData?.map((postData, i) => (
								<tr key={postData._id}>
									<td data-label="SL.No">{i + 1}</td>
									<td data-label="NAME">{postData.name}</td>
									<td data-label="PRODUCT">{postData.sector}</td>
									<td>
										{" "}
										<label
											onClick={() => setModal(postData)}
											className="btn btn-xs btn-primary"
											htmlFor="booking-modal">
											Edit
										</label>
									</td>
								</tr>
							))}
						</>
					</tbody>
				</table>
				<EditModal
					key={"booking-modal"}
					setModal={setModal}
					modal={modal}
					refetch={refetch}
				/>
			</div>
		);
};

export default UserData;