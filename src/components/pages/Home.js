import bgImage from "../0b194da5f30f4c5388cfcd5a641f966b.jpg";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to our medical center.</h1>
        <p>
          We at Kal Meds provide you with all the needed health assistance and
          medications you need.
        </p>

        <h4> We provide products for </h4>
        <ul>
          <li>Weight Loss </li>
          <li>Weight Gain </li>
          <li>Skin Treatment</li>
          <li>Hair Growth</li>
        </ul>

        <h4> We also provide Consultation for the following: </h4>
        <ul>
          <li>Weight Loss </li>
          <li>Weight Gain </li>
          <li>Skin Treatment</li>
          <li>Hair Growth</li>
          <li>Diet Controll</li>
        </ul>
      </div>

      <table className="table table-striped table-bordered table-hover table-sm">
        <thead className="table-success">
          <tr>
            <th> Name</th>
            <th> Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Jenny</td>
            <td>I loved the product. </td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>Good and affordable. Customer service was great too.</td>
          </tr>
          <tr>
            <td>Fred</td>
            <td>Doesn't work for me.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
