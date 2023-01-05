import React, { useState } from 'react';
import EditModal from './EditModal';

const UserData = ({userData, isLoading, refetch}) => {
    const [modal, setModal] = useState("");
    if (isLoading) {
        <p>Loading</p>
    }
    return (
			<div>
				<table className="table table-zebra w-full">
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
                                <EditModal
                                    key={postData._id}
                                    setModal={setModal}
                                    modal={modal}
                                    refetch={refetch}
                                />
							</tr>
                        ))}
                        </>
					</tbody>
				</table>
				
				
			</div>
		);
};

export default UserData;