import React from 'react';

interface Props {
    handleDeleteConfirmation: (confirmation: boolean) => void;
    confirmDelete: boolean;
}

const ConfirmDialog: React.FC<Props> = ({ handleDeleteConfirmation, confirmDelete }) => {
    return (
        <>
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-2xl">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-lg font-medium mb-4">Confirm Delete Profile</p>
                        <div className="flex justify-end">
                            <button
                                className="text-black px-4 py-2 rounded-md mr-4"
                                onClick={() => handleDeleteConfirmation(true)}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-[#0F2C64] text-white px-4 py-2 rounded-md"
                                onClick={() => handleDeleteConfirmation(false)}
                            >
                                Not Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmDialog;
