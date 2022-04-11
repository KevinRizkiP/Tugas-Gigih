import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTracksToPlaylist, createPlaylist } from "../../../lib/Api";
import PropTypes from "prop-types";

const CreatePlaylistForm = ({ uriTracks }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user.id);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [errorForm, setErrorForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrorForm({ ...errorForm, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;

    if (form.title.length < 10) {
      setErrorForm({
        ...errorForm,
        title: "Title must be at least 10 characters long",
      });
      isValid = false;
    }

    if (form.description.length > 100) {
      setErrorForm({
        ...errorForm,
        description: "Description must be less than 100 characters long",
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (uriTracks.length > 0) {
        try {
          const responseCreatePlaylist = await createPlaylist(
            accessToken,
            userId,
            {
              name: form.title,
              description: form.description,
            }
          );

          await addTracksToPlaylist(
            accessToken,
            responseCreatePlaylist.id,
            uriTracks
          );

          console.success("Playlist created successfully");

          setForm({ title: "", description: "" });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Please select at least one track");
      }
    }
  };

  return (
    <div className="flex-grow p-5 bg-gradient-to-b to-black from-gray-400 h-80">
      <div className="flex flex-col space-y-5 text-white w-full">
        <h2 className="font-bold text-5xl">Create Playlist</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 w-full"
        >
          <input
            className="bg-gray-50 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-none block w-full p-2"
            label="Title"
            placeholder="Title of playlist"
            value={form.title}
            id="title-playlist"
            name="title"
            onChange={handleChange}
            error={errorForm.title}
            required
          />
          <textarea
            className="bg-gray-50 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-none block w-full p-2"
            type="textarea"
            label="Description"
            placeholder="Description of playlist"
            value={form.description}
            id="description-playlist"
            name="description"
            onChange={handleChange}
            required
            error={errorForm.description}
          />

          <div>
            <button className="bg-gray-500 px-5 py-2 rounded-full text-white font-bold tracking-wider text-xl ransition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistForm;

CreatePlaylistForm.propTypes = {
  uriTracks: PropTypes.array.isRequired,
};
