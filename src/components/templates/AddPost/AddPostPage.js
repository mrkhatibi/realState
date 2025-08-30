"use client";

import Inputs from "@/modules/inputs";
import { useEffect, useState } from "react";
import styles from "./addpostpage.module.css";
import AddRule from "./addRule";
import AddAmenities from "./AddAmenities";
import AddCategory from "./addCategory";
import AddDatePicker from "./AddDatePicker";
import toast, { Toaster } from "react-hot-toast";
function AddPostPage({ valueForEdit, setEdit, setStatus }) {
  const [rule, setRule] = useState([""]);
  const [amenities, setAmenities] = useState([""]);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(() => Date.now());
  const [profileData, setProfileData] = useState({
    title: "",
    content: "",
    address: "",
    phone: "",
    price: "",
    realstate: "",
    category: "",
    amenities: [],
    rules: [],
    constractionDate: new Date(),
  });
  const inputs = [
    { name: "title", faname: "عنوان آگهی", type: "text" },
    { name: "content", faname: "توضیحات", type: "multiline" },
    { name: "address", faname: "آدرس", type: "text" },
    { name: "phone", faname: "تلفن", type: "number" },
    { name: "price", faname: "مبلغ", type: "number" },
    { name: "realstate", faname: "بنگاه", type: "text" },
  ];
  useEffect(() => {
    if (valueForEdit) {
      console.log(valueForEdit);
      setProfileData(valueForEdit);
      setAmenities(valueForEdit.amenities);
      setCategory(valueForEdit.category);
      setRule(valueForEdit.rules);
      setDate(valueForEdit.constractionDate);
    }
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    const updated = {
      ...profileData,
      rules: rule,
      amenities,
      category,
      constractionDate: date,
    };

    setProfileData(updated);
    const res = await fetch("/api/posts/addPosts", {
      method: "POST",
      body: JSON.stringify(updated),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 201) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      setAmenities([""]);
      setCategory("");
      setDate(Date.now());
      setRule([""]);
      setProfileData({
        title: "",
        content: "",
        address: "",
        phone: "",
        price: "",
        realstate: "",
        category: "",
        amenities: [],
        rules: [],
        constractionDate: new Date(),
      });
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();
    console.log(category);
    const updated = {
      ...profileData,
      rules: rule,
      amenities,
      category,
      constractionDate: date,
    };

    setProfileData(updated);

    const id = valueForEdit._id;
    const res = await fetch("/api/posts/editpost", {
      method: "PATCH",
      body: JSON.stringify(updated, id),
      headers: {
        Content_Type: "application/json",
      },
    });
    const body = await res.json();
    if (res.status !== 201) {
      toast.error(body.message);
    } else {
      setTimeout(() => {
        setEdit(false);
        setStatus(true);
      }, 1600);
      toast.success(body.message);
    }
  };
  return (
    <div>
      <Toaster />
      <form className={styles.form}>
        {inputs.map((item) =>
          item.type === "multiline" ? (
            <>
              <h3>توضیحات</h3>
              <textarea
                key={item.name}
                name={item.name}
                value={profileData[item.name] || ""}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    [item.name]: e.target.value,
                  })
                }
                placeholder={item.faname}
                rows={3}
              />
            </>
          ) : (
            <Inputs
              key={item.name}
              profileData={profileData}
              setProfileData={setProfileData}
              name={item.name}
              faname={item.faname}
              type={item.type}
            />
          )
        )}
        <div>
          <h3>قوانین</h3>
          <AddRule rule={rule} setRule={setRule} />
        </div>
        <div>
          <h3>امکانات</h3>
          <AddAmenities amenities={amenities} setAmenities={setAmenities} />
        </div>
        <div>
          <h3>دسته بندی :</h3>
          <AddCategory category={category} setCategory={setCategory} />
        </div>
        <AddDatePicker setDate={setDate} date={date} />
        {valueForEdit ? (
          <button className={styles.submitButton} onClick={editHandler}>
            ویرایش
          </button>
        ) : (
          <button className={styles.submitButton} onClick={submitHandler}>
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default AddPostPage;
