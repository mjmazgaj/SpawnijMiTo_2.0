import "./services.min.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="services">
      <h5>Poznaj</h5>
      <h2>Nasze produkty</h2>

      <div className="container experience__container">
        <div className="experiance__item">
          <div className="experience__content">
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>Projekt</h4>
                <small className="text-light">
                  Realizujemy indywiduwalne projekty na oczekiwany przez klienta
                  wymiar
                </small>
              </div>
            </div>
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>Blaty</h4>
                <small className="text-light">
                  Wykonywane z naturalnego drewna lub płyty laminowanej
                </small>
              </div>
            </div>
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>Konstrukcja</h4>
                <small className="text-light">Spawana z profili, szlifowana oraz malowana proszkowo</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
