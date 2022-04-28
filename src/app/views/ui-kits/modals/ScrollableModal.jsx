import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const ScrollableModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Button className="text-capitalize" onClick={() => setShow(true)}>
        Launch scrollable modal
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum
          molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos
          consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
          incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum molestiae
          natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos
          consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
          incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum molestiae
          natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos
          consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
          incidunt dolore amet atque facilis ipsum deleniti rem! Ipsum molestiae
          natus adipisci modi eligendi? Debitis amet quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos
          consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
          incidunt dolore amet atque facilis ipsum deleniti rem!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ScrollableModal;
