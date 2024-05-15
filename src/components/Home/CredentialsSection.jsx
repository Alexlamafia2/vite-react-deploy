import asi from "../../assets/AuthorizedSystemIntegrator.png";
import iso from "../../assets/iso.png";

export default function CredentialsSection() {
  return (
    <div
      className="flex items-center justify-around relative py-0 mx-20 my-10"
      //   style={{ marginTop: "45rem" }}
      id="certifications"
    >
      <div className="flex md:flex-row items-center px-0">
        <img
          src={asi}
          style={{ height: "22rem" }}
          className=" border-r-0 border-blue-500 border-opacity-50 mr-0"
        />
        <img src={iso} style={{ height: "15rem" }} />
      </div>
      <div className="" style={{ width: "25rem" }}>
        <h1 className="text-4xl text-blue-600">Our Certifications</h1>
        <p className=" font-thin my-5 text-xl">
          We are an Authorized Fanuc Integrator, With our Code of Conduct and
          our Environmental Policy, we have committed our statement on
          sustainability and social responsibility within the company.
        </p>
      </div>
    </div>
  );
}
