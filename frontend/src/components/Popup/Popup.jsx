import styled from "styled-components";
import Model from "react-modal";
import { useState, useEffect } from "react";
const Style = styled.div`
  height: 336px;
  width: 560px;
  margin: auto;
  border-radius: 4px;
  .popup-head {
    text-align: center;
    height: 36px;
    width: 560px;
    left: 0px;
    top: 0px;
    padding: 8px, 224px, 8px, 224px;
    background: #f3f3f3;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }
  }
  .popup_buttons {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    button {
      height: 36px;
      width: 104px;
      border-radius: 2px;
      padding: 8px, 32px, 8px, 32px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #797979;
    }
  }
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(5, 5, 5, 0.3)",
  },
};
Model.setAppElement("#root");
export const Popup = () => {
  const [model, setModel] = useState(true);
  const LsCity = localStorage.getItem("cityData");
  const ls = JSON.parse(LsCity);
  useEffect(() => {
    if (ls) {
      setModel(false);
    }
    if (model) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [model, ls]);
  const handleLocalCity = (element) => {
    localStorage.setItem("cityData", JSON.stringify(element));
    window.location.reload();
  };

  return (
    <>
      <Model style={customStyles} isOpen={model}>
        <Style>
          <div className="popup-head">
            <p>Select City</p>
          </div>
          <div className="popup_buttons">
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Delhi");
              }}
            >
              Delhi
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Mumbai");
              }}
            >
              Mumbai
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Banglore");
              }}
            >
              Banglore
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Chennai");
              }}
            >
              Chennai
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Hyderabad");
              }}
            >
              Hyderabad
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Pune");
              }}
            >
              Pune
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Kolkata");
              }}
            >
              Kolkata
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Ahemdabad");
              }}
            >
              Ahemdabad
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Chandigarh");
              }}
            >
              Chandigarh
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Goa");
              }}
            >
              Goa
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Jaipur");
              }}
            >
              Jaipur
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Lucknow");
              }}
            >
              Lucknow
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Indore");
              }}
            >
              Indore
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Udaipur");
              }}
            >
              Udaipur
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Agra");
              }}
            >
              Agra
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Vadodra");
              }}
            >
              Vadodra
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Nagpur");
              }}
            >
              Nagpur
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Kochi");
              }}
            >
              Kochi
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Surat");
              }}
            >
              Surat
            </button>
            <button
              onClick={() => {
                setModel(false);
                handleLocalCity("Ludhiana");
              }}
            >
              Ludhiana
            </button>
          </div>
        </Style>
      </Model>
    </>
  );
};
