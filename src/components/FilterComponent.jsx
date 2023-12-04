import { Form } from "react-bootstrap";
import ic_toyota from "../assets/images/ic_toyota.png";
import ic_nissan from "../assets/images/ic_nissan.png";
import ic_suzuki from "../assets/images/ic_suzuki.png";
import ic_honda from "../assets/images/ic_honda.png";

export default function FilterComponent() {
  return (
    <div className="filter shadow-sm">
      <div className="tipe-mobil mb-lg-3 mb-0">
        <h5 className="fw-semibold">Tipe Mobil</h5>
        <Form>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={1} label="MPV" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={2} label="SUV" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={3} label="Crossover" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={4} label="Hatchback" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={5} label="MPV" />
          </div>
        </Form>
      </div>
      <div className="kapasitas-kursi mb-3">
        <h5 className="fw-semibold">Kapasitas Kursi</h5>
        <Form>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={1} label="2 Kursi" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={2} label="4 Kursi" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={3} label="7 Kursi" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={4} label="8 Kursi" />
          </div>
        </Form>
      </div>
      <div className="tipe-transmisi mb-3">
        <h5 className="fw-semibold">Tipe Transmisi</h5>
        <Form>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={1} label="Manual" />
          </div>
          <div className="mb-2">
            <Form.Check type={"checkbox"} id={2} label="Matic" />
          </div>
        </Form>
      </div>
      <div className="merek mb-3">
        <h5 className="fw-semibold">Merek</h5>
        <button>
          <img src={ic_honda} className="merek-mobil" />
        </button>
        <button>
          <img src={ic_suzuki} width={"50px"} className="merek-mobil" />
        </button>
        <button>
          <img src={ic_toyota} width={"50px"} className="merek-mobil" />
        </button>
        <button>
          <img src={ic_nissan} width={"50px"} className="merek-mobil" />
        </button>
      </div>
    </div>
  );
}
