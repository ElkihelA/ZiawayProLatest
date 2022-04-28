import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Lobby from "./Lobby";
import Room from "./Room";
import firebase from "../../services/firebase/firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory, useLocation } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

const VideoChat = () => {
  const history = useHistory();
  const location = useLocation();
  const profile = useSelector((state) => state.firebase.profile);
  const [recieving, setRecievingLoading] = useState(false);
  const Meetings = useSelector((state) => state.firestore.ordered.Meetings);
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState(uuidv4());
  const [room, setRoom] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [meetingId, setMeetingId] = useState(null);

  console.log("params", meetingId?.id, roomName);

  useFirestoreConnect([
    {
      collection: "Meetings",
      where: ["callerEmail", "==", profile.email],
    },
  ]);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setConnecting(true);
      const data = await fetch(
        "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetToken",
        {
          method: "POST",
          body: JSON.stringify({
            identity: username,
            room: roomName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      console.log("datatoken", data);
      Video.connect(data.token, {
        name: roomName,
      })
        .then((room) => {
          setConnecting(false);
          setRoom(room);
          firebase.firestore().collection("Meetings").add({
            callerEmail: profile,
            RecieverEmail: "shahzad.ftw45@gmail.com",
            RoomNumber: roomName,
          });
        })
        .catch((err) => {
          console.error(err);
          setConnecting(false);
        });
    },
    [roomName, username]
  );

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

  const handleDelete = () => {
    console.log(meetingId);
    firebase.firestore().collection("Meetings").doc(meetingId?.id).delete();
    handleLogout();
    history.push("/newleads");
    // .then(() => window.location.reload());
  };

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

  const CallFunction = async () => {
    setRecievingLoading(true);
    const data = await fetch(
      "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetToken",
      {
        method: "POST",
        body: JSON.stringify({
          identity: profile?.email,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    Video.connect(data.token, {
      name: roomName,
    })
      .then((room) => {
        setConnecting(false);
        setRoom(room);
        firebase.firestore().collection("Meetings").add({
          callerEmail: profile?.email,
          RecieverEmail: location?.state,
          RoomNumber: roomName,
        });
        setRecievingLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setRecievingLoading(false);
      });
  };

  useEffect(() => {
    if (Meetings) {
      setMeetingId(Meetings[0]);
    }
  }, [Meetings]);

  useEffect(() => {
    CallFunction();
  }, []);

  // useEffect(() => {
  //   if (Meetings) {
  //     setRecievingLoading(true);
  //     setMeetingId(Meetings[0]?.id);

  //     const data = await fetch(
  //       "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetToken",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           identity: "test",
  //           room: "001",
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then((res) => res.json());

  //     Video.connect(
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2IxOGE4ZGYxNTVjNDBjNTE5MzA1ZDYxODg0NWYwOWU4LTE2NTA0Njc1ODEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJzaGFoemFkIiwidmlkZW8iOnt9fSwiaWF0IjoxNjUwNDY3NTgxLCJleHAiOjE2NTA0NzExODEsImlzcyI6IlNLYjE4YThkZjE1NWM0MGM1MTkzMDVkNjE4ODQ1ZjA5ZTgiLCJzdWIiOiJBQzEyODZiNGI4YzA0MDVlZjgxYjVlOGFiZjZjMTczNjA3In0.ZVy_ZBL44CVmXpp5ebPiQ4vfe8U8_troDPGufL7wvIs",
  //       {
  //         name: "001",
  //       }
  //     )
  //       .then((room) => {
  //         setConnecting(false);
  //         setRoom(room);
  //         setRecievingLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setRecievingLoading(false);
  //       });
  //   }
  // }, [Meetings]);

  if (recieving === true) {
    return <>loading...</>;
  }

  let render;
  if (room) {
    render = (
      <Room roomName={roomName} room={room} handleLogout={handleDelete} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
        connecting={connecting}
      />
    );
  }
  return render;
};

export default VideoChat;
