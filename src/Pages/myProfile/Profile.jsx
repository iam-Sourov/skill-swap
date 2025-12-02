import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext'
import toast from 'react-hot-toast';
import Spinner from '../../Components/spinner/Spinner';
import { auth } from '../../Firebase/firebase.config';

const Profile = () => {


    const { user, setUser, updateUser, loading, setLoading } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;

        updateUser({ displayName: name, photoURL: imageURL })
            .then(() => {
                setUser({ ...auth.currentUser })
                toast.success('Profile UPdated');
                setShowModal(false);
            }).catch((error) => {
                toast.error(error);
            }).finally(() => {
                setLoading(false);
            })
    };

    return (
        <div className="grid place-content-center min-h-screen justify-center items-center py-10">
            {
                user && <div className="card p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition  w-full mt-8 mb-10">
                    <div className="avatar placeholder mb-4 flex justify-center">
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                        />
                    </div>

                    <h1 className="text-4xl font-bold text-center mb-4 text-white">
                        {user.displayName}
                    </h1>

                    <p className="text-blue-300 text-center mb-2">
                        Email : <span className="font-medium text-white">{user.email}</span>
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setShowModal(true)}
                            className="btn btn-primary px-6">
                            Update Profile
                        </button>
                    </div>
                </div>
            }

            {showModal && (
                <dialog open className="modal modal-open">
                    <div className="modal-box card bg-gray-800 text-white">
                        <h3 className="font-bold text-lg mb-4 text-center text-blue-300">
                            Edit Profile
                        </h3>

                        
                        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
                            <label className="form-control">
                                <span className="label-text mb-1 font-medium text-white">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName || ''}
                                    className="input border-none w-full bg-gray-600 text-white"
                                />
                            </label>

                            <label className="form-control">
                                <span className="label-text mb-1 font-medium text-white">Image URL</span>
                                <input
                                    type="text"
                                    name="imageURL"
                                    defaultValue={user?.photoURL || ''}
                                    className="input border-none w-full bg-gray-600 text-white"
                                />
                            </label>

                            <div className="modal-action mt-6">
                                <button type="submit" className="btn btn-primary">
                                    {loading ? <Spinner></Spinner> : 'Save'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={() => setShowModal(false)}>close</button>
                    </form>
                </dialog>
            )}
        </div>

    );
};

export default Profile;
