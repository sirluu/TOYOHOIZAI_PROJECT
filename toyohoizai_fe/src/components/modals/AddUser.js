/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import styles from "../../styles/adduser.module.css";
import { toast } from "react-toastify";
import {
  registrationAPICreator,
  resetStatusRegistCreator,
} from "../../redux/actions/auth";

export default function AddUser(props) {
  const { statusRegist, isRegistPending } = useSelector(
    (state) => state.authAPI
  );
  const dispatch = useDispatch();
  const [formData, updateFormData] = useState({});
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      level_id: 1,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    let header = {
      headers: {
        "x-access-token": `bearer ${localStorage.getItem("token")}`,
      },
    };
    dispatch(registrationAPICreator(formData, header));
  };
  const notifyError = () =>
    toast.error("Failed add user", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifySuccess = () =>
    toast.success("Success add user", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    if (statusRegist === 200) {
      // notifySuccess();
      props.onHide();
      setTimeout(() => {
        dispatch(resetStatusRegistCreator());
      }, 1234);
    } else if (statusRegist === 500) {
      // notifyError();
      props.onHide();
      setTimeout(() => {
        dispatch(resetStatusRegistCreator());
      }, 1234);
    }
  }, [statusRegist]);
  return (
    <Modal
      {...props}
      style={{ zIndex: 1050, outline: "none" }}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Body>
        <div className={styles.body}>
          <div className={styles.line}>
            <h5 style={{ marginTop: "15px" }}>Add User</h5>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>
              <p className={styles.textlabel} style={{ alignSelf: "center" }}>
                Name
              </p>
            </div>
            <div className={styles.contentinput}>
              <input
                className={styles.input}
                type='text'
                name='name'
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.label}>
              <p className={styles.textlabel}>Username</p>
            </div>
            <div className={styles.contentinput}>
              <input
                className={styles.input}
                type='text'
                name='username'
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.label}>
              <p className={styles.textlabel}>Email</p>
            </div>
            <div className={styles.contentinput}>
              <input
                className={styles.input}
                type='email'
                name='email'
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.label}>
              <p className={styles.textlabel}>Password</p>
            </div>
            <div className={styles.contentinput}>
              <input
                className={styles.input}
                type='password'
                name='password'
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.label}>
              <p className={styles.textlabel}>Type</p>
            </div>
            <div className={styles.contentinput}>
              <select
                name='category'
                placeholder='Type of user'
                className={styles.input}
                onChange={(e) => handleChange(e)}
                name='level_id'
                required>
                <optgroup label='Type of user'>
                  <option value='1' selected>
                    Admin
                  </option>
                  <option value='2'>Cashier</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className={styles.containerbtn} style={{ marginTop: "30px" }}>
            <button
              onClick={() => {
                props.onHide();
              }}
              style={{
                outline: "none",
              }}
              className={styles.btncancel}>
              Cancel
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              style={{
                outline: "none",
              }}
              className={styles.btnadduser}>
              {isRegistPending ? (
                <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
              ) : (
                "Add User"
              )}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
