import { useState } from "react";
import axios from "axios";

function SaveButton({
    foodId,
    name
}) {

    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSave() {

        if (loading) return;

        const previousState = saved;

        setSaved(!saved);
        setLoading(true);

        try {

            await axios.post(
                "/api/save-food",
                {
                    foodId,
                    action: name
                },
                {
                    withCredentials: true
                }
            );

        }
        catch (err) {

            setSaved(previousState);

            console.log(err);

        }
        finally {

            setLoading(false);

        }

    }

    return (

        <button
            className={`reelSaveBtn_xyz ${saved ? "reelSaved_xyz" : ""}`}
            onClick={handleSave}
        >

            <img src="/svg/save.svg" alt="" />

        </button>

    );

}

export default SaveButton;