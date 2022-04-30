import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Lobby from "./Lobby";
import Room from "./Room";
import firebase from "../../services/firebase/firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const IncomingVideoCall = () => {
  const history = useHistory();
  const profile = useSelector((state) => state.firebase.profile);
  const Meetings = useSelector((state) => state.firestore.ordered.Meetings);
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [meetingId, setMeetingId] = useState(null);

  useFirestoreConnect([
    {
      collection: "Meetings",
      where: ["RecieverEmail", "==", profile.email],
    },
  ]);

  const handleDelete = () => {
    firebase.firestore().collection("Meetings").doc(meetingId?.id).delete();
    handleLogout();
    history.push("/newleads");
    // .then(() => window.location.reload());
  };

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
      }
      return null;
    });
  }, []);

  const attendCall = async () => {
    console.log("i am running", meetingId);
    setConnecting(true);
    const data = await fetch(
      "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetToken",
      {
        method: "POST",
        body: JSON.stringify({
          identity: profile?.email,
          room: meetingId?.RoomNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    console.log("datatoken", data);
    Video.connect(data.token, {
      name: meetingId?.RoomNumber,
    })
      .then((room) => {
        setConnecting(false);
        setRoom(room);
      })
      .catch((err) => {
        console.error(err);
        setConnecting(false);
      });
  };

  useEffect(() => {
    if (meetingId) {
      attendCall();
    }
  }, [meetingId]);

  useEffect(() => {
    if (room) {
      const tidyUp = (event) => {
        if (event.persisted) {
          return;
        }
        if (room) {
          handleLogout();
        }
      };
      window.addEventListener("pagehide", tidyUp);
      window.addEventListener("beforeunload", tidyUp);
      return () => {
        window.removeEventListener("pagehide", tidyUp);
        window.removeEventListener("beforeunload", tidyUp);
      };
    }
  }, [room, handleLogout]);

  useEffect(() => {
    if (Meetings) {
      setMeetingId(Meetings[0]);
    }
  }, [Meetings]);

  console.log("Meeting", Meetings, meetingId);

  if (connecting === true || meetingId === null) {
    return <>loading...</>;
  }

  let render;
  if (room) {
    render = <Room roomName="001" room={room} handleLogout={handleDelete} />;
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        // handleSubmit={handleSubmit}
        connecting={connecting}
      />
    );
  }
  return render;
};

export default IncomingVideoCall;
