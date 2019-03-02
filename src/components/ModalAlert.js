import React from 'react';
import { Modal } from 'react-bootstrap';
import { Circle } from 'react-shapes'
import Icon from 'react-fontawesome';
import PropTypes from 'prop-types';

const ModalAlert = ({modalKey, show, onClose}) => {
    // const { key, show } = modal;
    return (
        show ?
        (
            <Modal 
                show={show}
                backdrop={true}
                keyboard={true}
                onHide={onClose}>
                <Modal.Body>
                    {
                        modalKey === 'TUTORIAL' &&
                        <div className="modal-alert-wrapper ">
                            <h2>How to Play CircleMatrix:</h2>
                            <div className="tutorial">
                                <div>
                                    <p className="lead">
                                    Available circles: 
                                    </p>
                                    <Circle
                                        r={50}
                                        fill={{color: "#ddd"}}
                                        stroke={{color: "transparent"}}
                                        strokeWidth={3}
                                    />
                                    <p className="text-muted">
                                        Click to turn them into
                                    </p>
                                </div>
                                <div>
                                    
                                    <p className="lead">Activated Circles:</p>
                                    <Circle
                                        r={50}
                                        fill={{color: "#214699"}}
                                        stroke={{color: "transparent"}}
                                        strokeWidth={3}
                                    />
                                    <p className="text-muted">
                                        these but only if they're
                                    </p>
                                </div>
                                <div>
                                    <p className="lead">Occupied circles:</p>
                                    <Circle
                                        r={50}
                                        fill={{color: "#7ab3e2"}}
                                        stroke={{color: "transparent"}}
                                        strokeWidth={3}
                                    />
                                    <p className="text-muted">
                                        not one of these
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        modalKey === 'ALERT_NO_CIRCLES_REMAINING' &&
                        (
                            <div className="modal-alert-wrapper">
                                <h2>You don't have any circles left!</h2>
                                    <div className="no-circles-remaining">
                                        <Circle
                                            r={50}
                                            fill={{color: "#214699"}}
                                            stroke={{color: "transparent"}}
                                            strokeWidth={3}
                                        />
                                        <Icon name="arrow-right" size="5x" />
                                        <Circle
                                            r={50}
                                            fill={{color: "#ddd"}}
                                            stroke={{color: "transparent"}}
                                            strokeWidth={3}
                                        />
                                    </div>
                                <p className="lead">Try de-activating some of your blue circles by clicking on them.</p>
                            </div>
                        )
                    }
                    {
                        modalKey === 'ALERT_OCCUPIED_CIRCLE' &&
                        <div className="modal-alert-wrapper">
                                <h2>You can't activate an occupied circle!</h2>
                                    <div className="occupied-circle">
                                        <Circle
                                            r={50}
                                            fill={{color: "#7ab3e2"}}
                                            stroke={{color: "transparent"}}
                                            strokeWidth={3}
                                        />                                        
                                    </div>
                                <p className="lead">Wait to see if it becomes available in a while, or try selecting other dark blue or gray circles instead.</p>
                            </div>
                    }
                </Modal.Body>
            </Modal>
        )
        : null
    )
}

ModalAlert.propTypes = {
  show: PropTypes.bool,
  modalKey: PropTypes.string,
  onHide: PropTypes.func
}


export default ModalAlert;
