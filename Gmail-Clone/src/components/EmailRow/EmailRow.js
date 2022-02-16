import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ subject, description, from }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                subject,
                description,
                from,
            })
        );
        history.push("/mail");
    };

    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow-options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow-title">{from.split("<")[0]}</h3>
            <div className="emailRow-message">
                <h4>{subject}</h4>
            </div>
            <p className="emailRow-time">{time}</p>
        </div>
    );
}

export default EmailRow;
