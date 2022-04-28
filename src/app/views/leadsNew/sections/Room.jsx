import React, { useState } from "react";
import Participant from "./Participant";

export const Room = ({ roomName, token, handleLogout, key, participant }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  const remoteParticipants = participants.map((participant) => (
    <p key={participant.sid}>{participant.identity}</p>
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <button onClick={handleLogout}>Log out</button>
      <div className="local-participant">
        {/* {room ? (
          <p key={room.localParticipant.sid}>
            {room.localParticipant.identity}
          </p>
        ) : (
          ""
        )} */}
        <Participant key={key} participant={participant} />
      </div>
      <h3>Remote Participants</h3>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};
