import React, { useEffect, useState } from "react";
import Participant from "./Participant";

const Room = ({ roomName, room, handleLogout }) => {
  console.log("room", room);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  const handleMute = () => {
    // room.localParticipant.videoTracks.forEach((track) => {
    //   track.disable();
    // });
    room.localParticipant.audioTracks.forEach((publication) =>
      publication.track.enable()
    );
  };

  console.log("participants", participants);

  return (
    <div className="room">
      <div className="mb-3">
        {/* <h2>Room: {roomName}</h2> */}
        <button className="btn btn-primary" onClick={handleLogout}>
          <span className="mr-1">
            <i className="icon i-Arrow-Back-3 small" />
          </span>
          <span>Log out</span>
        </button>
        <button className="btn btn-primary" onClick={handleMute}>
          <span className="mr-1">
            <i className="icon i-Arrow-Back-3 small" />
          </span>
          <span>Mute</span>
        </button>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="local-participant">
            {room ? (
              <Participant
                key={room.localParticipant.sid}
                participant={room.localParticipant}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-4 mt-sm-0">
          <div>
            <div className="remote-participants">{remoteParticipants}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
