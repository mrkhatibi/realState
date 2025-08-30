import toast from "react-hot-toast";
import styles from "./PostCard.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Buttons({ item, id, UserRole, setEdit }) {
  const router = useRouter();
  const UnpublishHandler = async (id) => {
    const res = await fetch(`/api/posts/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      toast.error("متاسفانه مشکلی پیش آمده");
    } else {
      setTimeout(() => {
        router.refresh();
      }, 2000);
      toast.success("انتشار آگهی با موفقیت لغو گردید");
    }
  };
  const publishHandler = async (id) => {
    const res = await fetch("/api/admin", {
      method: "PATCH",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.message);
    }
  };
  const editHandler = () => {
    setEdit(true);
  };
  const deleteHandler = async (id) => {
    const res = await fetch(`/api/posts/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.buttons}>
      <Link href={`/my-posts/${item._id}`}>
        <button className={styles.button}>مشاهده آگهی</button>
      </Link>
      {(id && id === item.userId) || UserRole === "ADMIN" ? (
        <>
          <button onClick={editHandler} className={styles.button}>
            ویرایش آگهی
          </button>
          {item.published === false && UserRole === "ADMIN" ? (
            <>
              <button
                onClick={() => publishHandler(item._id)}
                className={styles.publishbutton}
              >
                منتشر کردن
              </button>
              <button
                onClick={() => UnpublishHandler(item._id)}
                className={styles.unpublishbutton}
              >
                رد انتشار
              </button>
            </>
          ) : (
            <button
              onClick={() => deleteHandler(item._id)}
              className={styles.button}
            >
              پاک کردن آگهی
            </button>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Buttons;
