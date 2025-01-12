import { useContext } from "react";
import ModalContainer from "./ModalContainer";
import { context } from "@/contexts/context";
import parse  from "html-react-parser";

const BlogPopup = () => {
  const { setBlogModal, blogModal } = useContext(context);
  return (
    <ModalContainer nullValue={setBlogModal}>
      <div className="news_popup_informations">
        <div className="image">
          <img src={blogModal.img} alt={blogModal.title} />
          <div
            className="main"
            data-img-url={blogModal.img}
            style={{ backgroundImage: `url(${blogModal.img})` }}
          />
        </div>
        <div className="details">
          <div className="meta">
            <img
              className="svg w-[18px] h-[18px]"
              src="assets/img/svg/calendar.svg"
              alt="image"
            />{" "}
            <span className="font-medium pl-[8px]">{blogModal.date}</span>
          </div>
          <div className="title">
            <h2>{blogModal.title}</h2>
          </div>
        </div>
        <div className="text">
          {parse(blogModal.content)}
        </div>
      </div>
    </ModalContainer>
  );
};
export default BlogPopup;
