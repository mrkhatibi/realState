"use client";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import styles from "./PostCard.module.css";
import { ShortTitle } from "@/utils/ShortTitle";
import { useEffect, useState } from "react";
import AddPostPage from "../AddPost/AddPostPage";
import { useRouter } from "next/navigation";
import { formatToPersianRial } from "@/utils/formatToPersianRial";
import  { Toaster } from "react-hot-toast";


import Icons from "./Icons";
import Buttons from "./Buttons";


function PostsCard({ item, id, UserRole }) {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [status]);

  return (
    <>
      <Toaster />
      {!edit ? (
        <div className={styles.container}>
          <div>
            <Icons item={item} id={id} />

            <h3>{ShortTitle(item.title)}</h3>
            <h4>
              <IoLocation size={"15px"} color="grey" />
              {item.address}
            </h4>
            <h4>
              <IoMdPricetags size={"15px"} color="grey" />
              {formatToPersianRial(item.price)}
            </h4>
          </div>
          <Buttons item={item} id={id} UserRole={UserRole} setEdit={setEdit} />
        </div>
      ) : (
        <div className={styles.editcontainer}>
          <IoMdCloseCircleOutline
            onClick={() => setEdit(false)}
            color="red"
            size={"20px"}
          />
          <AddPostPage
            setStatus={setStatus}
            setEdit={setEdit}
            valueForEdit={item}
          />
        </div>
      )}
    </>
  );
}

export default PostsCard;
