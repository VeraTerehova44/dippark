import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MyModal from "../../../UI/MyModal/MyModal";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";

import settings from "../../../../svg/setting.png";
import classes from "./Profile.module.scss";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [drag, setDrag] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [plateNumber, setPlateNumber] = useState();

  function StartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function LeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    setDrag(false);
    const files = [...e.dataTransfer.files];
    setImage(files[0]);
  }

  function openSettings() {
    setOpen(true);
  }

  function save() {
    setOpen(false);
  }

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function putProfileData() {
    const formData = new FormData();
    formData.append("Avatar", image);
    formData.append("Email", profileData.email);
    formData.append("FirstName", name);
    formData.append("LastName", lastName);
    formData.append("PhoneNumber", phoneNumber);
    formData.append("PlateNumder", plateNumber);

    await axios
      .put("https://localhost:7114/api/accounts/profiles", formData, config)
      .then(() => {
        alert("Данные успешно сохранены");
        window.location.reload();
      })
      .catch((e) => e);
  }

  useEffect(() => {
    async function getProfileData() {
      await axios
        .get(`https://localhost:7114/api/accounts`, config)
        .then((response) => {
          setProfileData(response.data);
          setName(response.data.firstName);
          setLastName(response.data.lastName);
          setPhoneNumber(response.data.phoneNumber);
          setPlateNumber(response.data.plateNumder);
        })
        .catch((e) => e);
    }
    getProfileData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <div className={classes.photo}>
          <img
            src={`data:image/jpeg;base64,${profileData.avatar}`}
            className={classes.img}
          />
        </div>
        <div className={classes.data}>
          <div className={classes.setting_container}>
            <div onClick={openSettings} className={classes.setting}>
              <img className={classes.settings_img} src={settings} />
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.title}>Почта</div>
            <div className={classes.item}>{profileData.email}</div>
            {profileData.firstName === null ? (
              ""
            ) : (
              <>
                <div className={classes.title}>Имя</div>
                <div className={classes.item}>{profileData.firstName}</div>
              </>
            )}
            {profileData.lastName === null ? (
              ""
            ) : (
              <>
                <div className={classes.title}>Фамилия</div>
                <div className={classes.item}>{profileData.lastName}</div>
              </>
            )}
            {profileData.phoneNumber === null ? (
              ""
            ) : (
              <>
                <div className={classes.title}>Мобильный телефон</div>
                <div className={classes.item}>{profileData.phoneNumber}</div>
              </>
            )}
            {profileData.plateNumder === null ? (
              ""
            ) : (
              <>
                <div className={classes.title}>Номер автомобиля</div>
                <div className={classes.item}>{profileData.plateNumder}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <MyModal
        open={open}
        handleClose={save}
        children={
          <div className={classes.modal_container}>
            <div className={classes.modal}>
              <div className={classes.section}>
                <div className={classes.container_drop}>
                  <div className={classes.drop_zone}>
                    {drag ? (
                      <div
                        className={classes.drop_active}
                        onDragStart={(e) => StartHandler(e)}
                        onDragOver={(e) => StartHandler(e)}
                        onDragLeave={(e) => LeaveHandler(e)}
                        onDrop={(e) => onDropHandler(e)}
                      >
                        Отпустите фото
                      </div>
                    ) : (
                      <div
                        className={classes.drop}
                        onDragStart={(e) => StartHandler(e)}
                        onDragOver={(e) => StartHandler(e)}
                        onDragLeave={(e) => LeaveHandler(e)}
                        onDrop={(e) => onDropHandler(e)}
                      >
                        Перенесите фото сюда
                      </div>
                    )}
                  </div>
                  <div className={classes.container_link}>
                    <Link to={"changepass"} className={classes.link}>
                      Сменить пароль
                    </Link>
                  </div>
                </div>
                <div className={classes.modal_form}>
                  <div className={classes.form_title}>Имя</div>
                  <MyInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className={classes.form_title}>Фамилия</div>
                  <MyInput
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className={classes.form_title}>Номер телефона</div>
                  <MyInput
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <div className={classes.form_title}>Номер автомобиля</div>
                  <MyInput
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                  />
                  <div className={classes.form_button}>
                    <MyButton
                      className={classes.item_form}
                      onClick={putProfileData}
                    >
                      Сохранить
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Profile;
