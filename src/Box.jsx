import { useState } from "react";
import "./Box.css";

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <div lang="fa" dir="rtl">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <button className="openBtn" onClick={() => setValue(!value)}>
        باز کردن مدال
      </button>
      <div className={`modal-container ${value ? undefined : "hidden"}`}>
        <div className="modal-contanet">
          <div className="modal-header">
            <h2>عنوان مدال</h2>
            <i
              className="fa-solid fa-xmark closeBtn"
              onClick={() => setValue(!value)}
            ></i>
          </div>
          <div className="modal-body">
            <p>
              سلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری
              خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه
              طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام
              چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری
              خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه
              طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام چه طوری خوبیسلام
              چه طوری خوبیسلام چه طوریسلام چه طوری خوبی لام ربذ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
