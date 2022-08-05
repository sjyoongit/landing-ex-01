import { useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import { useForm } from "react-hook-form";
import baseApiUrl from "../../utils/baseApiUrl";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

//입력받을 데이터
interface AddProductValues {
  name: string;
  email: string;
  contents: string;
  file: FileList;
}

const AddProduct: NextPage = () => {
  const { register, handleSubmit } = useForm<AddProductValues>();
  const [open, setOpen] = useState(false); // Backdrop open
  const [fileName, setFileName] = useState("");

  //문의하기 폼데이터 strapi에 저장
  const addProduct = async (values: AddProductValues) => {
    const formData = new FormData();
    const { file, ...rest } = values;

    formData.append("files.file", file[0]);
    formData.append("data", JSON.stringify(rest));
    console.log("파일:", formData.get("files.file"));
    console.log("파일2: ", file[0]);
    const { data } = await axios.post(`${baseApiUrl}/api/contacts`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });

    return data;
  };

  const onSubmit = async (values: AddProductValues) => {
    setOpen(true);
    try {
      const data = await addProduct(values).then((data) => {
        //strapi에 저장된 데이터 불러와서 sendgrid api로 전송
        fetch(`${baseApiUrl}/api/contacts/${data.data.id}?populate=*`, {
          method: "get",
        })
          .then((res) => res.json())
          .then((data) => {
            fetch("/api/contact", {
              method: "post",
              body: JSON.stringify(data),
            }).then((res) => {
              setOpen(false);
              if (res.status === 200) {
                alert("접수되었습니다.");
              } else {
                alert("접수를 실패하였습니다.");
              }
            });
          });
      });
    } catch (error) {
      setOpen(false);
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = (error.response.data as { error: Error }).error;
        alert(`문의하기를 실패하였습니다. \n ${errorMessage}`);
      } else {
        alert("문의하기 도중에 오류가 발생했습니다.");
      }
    }
  };

  const fileChange = (e) => {
    console.log("EE:", e.target.files[0].name);
    if (e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <>
      <section id="shop-contact" className="shop-contact">
        <div className="box container mx-xl">
          <h2>Contact Us</h2>
          <div className="form_wrap">
            <div className="form_box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                  <li>
                    {/* <label htmlFor="name">이름</label> */}
                    {/* <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      {...register("name")}
                    /> */}
                    <TextField
                      id="name"
                      name="name"
                      required
                      type="text"
                      {...register("name")}
                      label="이름"
                      variant="standard"
                    />
                  </li>
                  <li>
                    {/* <label htmlFor="email">이메일</label> */}
                    {/* <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      {...register("email")}
                    /> */}
                    <TextField
                      id="email"
                      name="email"
                      required
                      type="email"
                      {...register("email")}
                      label="이메일"
                      variant="standard"
                    />
                  </li>
                  <li>
                    {/* <label htmlFor="contents">내용</label> */}
                    {/* <textarea
                      id="contents"
                      name="contents"
                      {...register("contents")}
                    ></textarea> */}
                    <TextField
                      id="contents"
                      name="contents"
                      required
                      type="email"
                      multiline
                      rows={4}
                      {...register("contents")}
                      placeholder="내용을 입력해주세요."
                      variant="standard"
                    />
                  </li>
                  <li>
                    {/* <label htmlFor="file">파일업로드</label> */}
                    {/* <input
                      id="file"
                      name="file"
                      type="file"
                      {...register("file")}
                    ></input> */}
                    <Button
                      variant="contained"
                      component="label"
                      className="fileBtn"
                      style={{
                        backgroundColor: "#fff",
                        fontWeight: "700",
                        color: "#333",
                      }}
                    >
                      파일업로드
                      <input
                        id="file"
                        name="file"
                        type="file"
                        {...register("file")}
                        onChange={(e) => fileChange(e)}
                        hidden
                      ></input>
                    </Button>
                    <span className="ml-3">{fileName ? fileName : ""}</span>
                  </li>
                </ul>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  style={{
                    backgroundColor: "rgb(251 191 36)",
                    float: "right",
                  }}
                >
                  문의하기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default AddProduct;
