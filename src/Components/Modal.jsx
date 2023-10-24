const Modal = ({IsOpen , CloseModal}) => {
    if (!IsOpen) return null
    return (
        <div className="card sd" style={{padding : '15px'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={CloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
)
}
export default Modal;