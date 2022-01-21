import React, { useEffect } from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { IconButton, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";
import path from "path";

import emails from "./data";

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail-toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail-body">
                <div className="mail-bodyHeader">
                    <div className="mail-subject">
                        <h2>{selectedMail?.subject}</h2>
                    </div>

                    <div className="mail-from">
                        <Avatar className="from-avatar">
                            {selectedMail?.from[0]}
                        </Avatar>
                        <div className="mail-fromName">
                            <h3>{selectedMail?.from}</h3>
                            <p>to me</p>
                        </div>
                    </div>
                    {/* <p>{selectedMail?.title}</p> */}
                    <p className="mail-time">{selectedMail?.time}</p>
                </div>

                <div className="mail-message">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: emails[selectedMail?.description],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Mail;
